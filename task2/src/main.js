/* Platonic bodies: main file, MN7, 11.06.25 */
import * as mth from "./math.js"
import {
  initShaders,
  u_time_location,
  u_frame_w_location,
  u_frame_h_location,
  u_matr_vp_location,
  u_matr_w_location,
  u_cam_loc_location
} from "./shaders.js"
import {
  convertToVertices,
  verticesToArray,
  autoNormals,
  createCube,
  createTetrahedron,
  createOctahedron,
  createIcosahedron,
  createDodecahedron
} from "./platon.js"

let gl;
let startTime;
let FrameW, FrameH;
let ProjSize = 0.1, ProjFarClip = 1000, ProjDist = ProjSize;
let MatrP, MatrVP, matrWVP, MatrV, matrW;
let matrWCube = mth.MatrIdentity(),
  matrWTetrahedron = mth.MatrIdentity(),
  matrWOctahedron = mth.MatrIdentity(),
  matrWIcosahedron = mth.MatrIdentity(),
  matrWDodecahedron = mth.MatrIdentity();
let Loc = mth.Vec3Set1(5);
let At = mth.Vec3Set1(0);
let Up = mth.Vec3Set(0, 1, 0);
let isPause = false;
let isCube = false, isTetrahedron = false, isOctahedron = false, isIcosahedron = false, isDodecahedron = false;

function CamSet(Loc, At, Up) {
  MatrV = mth.MatrView(Loc, At, Up);
  MatrVP = mth.MatrMulMatr(MatrV, MatrP);
}

function initGL(canvas) {
  gl = canvas.getContext("webgl2");
  gl.viewportWidth = canvas.width;
  gl.viewportHeight = canvas.height;
  FrameW = canvas.width * 1.0;
  FrameH = canvas.height * 1.0;
  gl.enable(gl.DEPTH_TEST);
}

function ProjSet() {
  let rx, ry;

  rx = ry = ProjSize;

  if (FrameW >= FrameH)
    rx *= FrameW / FrameH * 1.0;
  else
    ry *= FrameH / FrameW * 1.0;

  MatrP =
    mth.MatrFrustum(-rx / 2, rx / 2, -ry / 2, ry / 2,
      ProjDist, ProjFarClip);
}

function createBuffer(verticesBuffer, verticesArray, indicesArray) {
  gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(verticesArray),
    gl.STATIC_DRAW
  );
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 40, 0);
  gl.enableVertexAttribArray(1);
  gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 40, 12);
  gl.enableVertexAttribArray(2);
  gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 40, 28);

  if (indicesArray.length != 0) {
    const indicesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint32Array(indicesArray),
      gl.STATIC_DRAW
    );
  }
}

/* function bufUpdate(bufID, data) {
  gl.bindBuffer(gl.ARRAY_BUFFER, bufID);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(data),
    gl.STATIC_DRAW
  );
} */

let bufferCube;
let cube = createCube(1);
let verticesCube = cube[0];
let indicesCube = cube[1].map((e) => e - 1);

let bufferTetrahedron;
let tetrahedron = createTetrahedron(1);
let verticesTetrahedron = tetrahedron[0];
let indicesTetrahedron = tetrahedron[1].map((e) => e - 1);

let bufferOctahedron;
let octahedron = createOctahedron(1);
let verticesOctahedron = octahedron[0];
let indicesOctahedron = octahedron[1].map((e) => e - 1);

let bufferIcosahedron;
let icosahedron = createIcosahedron(1);
let verticesIcosahedron = icosahedron[0];
let indicesIcosahedron = icosahedron[1].map((e) => e - 1);

let bufferDodecahedron;
let dodecahedron = createDodecahedron(1);
let verticesDodecahedron = dodecahedron[0];
let indicesDodecahedron = dodecahedron[1];

function initBuffers(gl) {
  bufferCube = gl.createBuffer();
  bufferTetrahedron = gl.createBuffer();
  bufferOctahedron = gl.createBuffer();
  bufferIcosahedron = gl.createBuffer();
  bufferDodecahedron = gl.createBuffer();
}

function drawScene() {
  let timeFromStart;
  let currentTime = (new Date()).getTime();

  timeFromStart = (new Date()).getMilliseconds() - startTime;

  gl.clearColor(0.8, 0.8, 0.8, 1);
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT);

  Loc = mth.Vec3Set(5, 5, 5);
  At = mth.Vec3Set1(0);
  Up = mth.Vec3Set(0, 1, 0);

  /* MatrP =
    mth.MatrFrustum(-ProjDist / 2, ProjDist / 2, -ProjDist / 2, ProjDist / 2,
                      ProjDist, 30); */
  ProjSet();
  CamSet(Loc, At, Up);
  /* MatrV = mth.MatrView(Loc, At, Up);
  MatrVP = mth.MatrMulMatr(MatrV, MatrP); */

  gl.uniform1f(u_time_location, timeFromStart / 1000.0);
  gl.uniform1f(u_frame_w_location, FrameW);
  gl.uniform1f(u_frame_h_location, FrameH);
  gl.uniformMatrix4fv(u_matr_vp_location, false,
    new Float32Array(MatrVP.A[0].concat(MatrVP.A[1].concat(MatrVP.A[2].concat(MatrVP.A[3]))), 0, 16));
  gl.uniform3fv(u_cam_loc_location, new Float32Array([Loc.x, Loc.y, Loc.z]), 0, 0);

  /* document.getElementById("pause").onchange = function() {
    isPause = !isPause; 
  }; */

  document.getElementById("cube").onclick = function () {
    isCube = !isCube;
  };
  document.getElementById("tetrahedron").onclick = function () {
    isTetrahedron = !isTetrahedron;
  };
  document.getElementById("octahedron").onclick = function () {
    isOctahedron = !isOctahedron;
  };
  document.getElementById("icosahedron").onclick = function () {
    isIcosahedron = !isIcosahedron;
  };
  document.getElementById("dodecahedron").onclick = function () {
    isDodecahedron = !isDodecahedron;
  };

  let arrayCube, arrayTetrahedron, arrayOctahedron, arrayIcosahedron, arrayDodecahedron;

  if (isCube) {
    matrWCube = mth.MatrRotateZ(180 * currentTime / 1000.0);
    let vertices = convertToVertices(verticesCube, indicesCube);
    autoNormals(vertices, Array.from(Array(vertices.length).keys()));
    arrayCube = verticesToArray(vertices);
    createBuffer(bufferCube, arrayCube, indicesCube);
    gl.uniformMatrix4fv(u_matr_w_location, false,
      new Float32Array(matrWCube.A[0].concat(matrWCube.A[1].concat(matrWCube.A[2].concat(matrWCube.A[3]))), 0, 16));
    gl.drawArrays(gl.TRIANGLES, 0, arrayCube.length);
  }

  if (isTetrahedron) {
    matrWTetrahedron = mth.MatrMulMatr(mth.MatrTranslate(mth.Vec3Set(0, 3 * Math.sin(currentTime / 1000.0), 0)), mth.MatrRotateX(30 * currentTime / 1000.0));
    let vertices = convertToVertices(verticesTetrahedron, indicesTetrahedron);
    autoNormals(vertices, Array.from(Array(vertices.length).keys()));
    arrayTetrahedron = verticesToArray(vertices);
    createBuffer(bufferTetrahedron, arrayTetrahedron, indicesTetrahedron);
    gl.uniformMatrix4fv(u_matr_w_location, false,
      new Float32Array(matrWTetrahedron.A[0].concat(matrWTetrahedron.A[1].concat(matrWTetrahedron.A[2].concat(matrWTetrahedron.A[3]))), 0, 16));
    gl.drawArrays(gl.TRIANGLES, 0, arrayTetrahedron.length);
  }

  if (isOctahedron) {
    matrWOctahedron = mth.MatrMulMatr(mth.MatrTranslate(mth.Vec3Set(3 * Math.cos(currentTime / 1000.0), 0, 0)), mth.MatrRotateZ(90 * currentTime / 1000.0));
    let vertices = convertToVertices(verticesOctahedron, indicesOctahedron);
    autoNormals(vertices, Array.from(Array(vertices.length).keys()));
    arrayOctahedron = verticesToArray(vertices);
    createBuffer(bufferOctahedron, arrayOctahedron, indicesOctahedron);
    gl.uniformMatrix4fv(u_matr_w_location, false,
      new Float32Array(matrWOctahedron.A[0].concat(matrWOctahedron.A[1].concat(matrWOctahedron.A[2].concat(matrWOctahedron.A[3]))), 0, 16));
    gl.drawArrays(gl.TRIANGLES, 0, arrayOctahedron.length);
  }

  if (isIcosahedron) {
    matrWIcosahedron = mth.MatrMulMatr(mth.MatrRotateZ(90 * currentTime / 1000.0), mth.MatrTranslate(mth.Vec3Set(0, 0, 1.8 * Math.sin(currentTime / 1000.0))));
    let vertices = convertToVertices(verticesIcosahedron, indicesIcosahedron);
    autoNormals(vertices, Array.from(Array(vertices.length).keys()));
    arrayIcosahedron = verticesToArray(vertices);
    createBuffer(bufferIcosahedron, arrayIcosahedron, indicesIcosahedron);
    gl.uniformMatrix4fv(u_matr_w_location, false,
      new Float32Array(matrWIcosahedron.A[0].concat(matrWIcosahedron.A[1].concat(matrWIcosahedron.A[2].concat(matrWIcosahedron.A[3]))), 0, 16));
    gl.drawArrays(gl.TRIANGLES, 0, arrayIcosahedron.length);
  }

  if (isDodecahedron) {
    matrWDodecahedron = mth.MatrMulMatr(mth.MatrRotateY(120 * currentTime / 1000.0),
      mth.MatrTranslate(mth.Vec3Set(6.5 * Math.cos(currentTime / 1000.0), 0, 1.8 * Math.sin(currentTime / 1000.0))));
    let vertices = convertToVertices(verticesDodecahedron, indicesDodecahedron);
    autoNormals(vertices, Array.from(Array(vertices.length).keys()));
    arrayDodecahedron = verticesToArray(vertices);
    createBuffer(bufferDodecahedron, arrayDodecahedron, indicesDodecahedron);
    gl.uniformMatrix4fv(u_matr_w_location, false,
      new Float32Array(matrWDodecahedron.A[0].concat(matrWDodecahedron.A[1].concat(matrWDodecahedron.A[2].concat(matrWDodecahedron.A[3]))), 0, 16));
    gl.drawArrays(gl.TRIANGLES, 0, arrayDodecahedron.length);
  }

  window.requestAnimationFrame(drawScene);
}

export function onStart() {
  let canvas = document.getElementById("webgl-canvas");

  initGL(canvas);

  /* ProjSet();
  CamSet(Loc, At, Up, mth.Vec3Set1(0), mth.Vec3Set1(0)); */

  initShaders(gl);
  initBuffers(gl);

  startTime = (new Date()).getMilliseconds();
  drawScene();
}

onStart();