(function (exports) {
  'use strict';

  /* Platonic bodies: math module, MN7, 11.06.2025 */

  let PI = 3.14159265358979323846;

  /* Degrees to radians conversion */
  function D2R(A) {
    return A * PI / 180;
  }

  class Matr {
    constructor(A00, A01, A02, A03,
                A10, A11, A12, A13,
                A20, A21, A22, A23,
                A30, A31, A32, A33) {
      this.A = [[A00, A01, A02, A03],
                [A10, A11, A12, A13],
                [A20, A21, A22, A23],
                [A30, A31, A32, A33]];            
    }                                                         
  }  

  function MatrIdentity() {
    return new Matr(1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1);
  }

  function MatrTranslate(t) {
    return new Matr(1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    t.x, t.y, t.z, 1)
    }

  function MatrRotateX(angleInDegrees) {
    let angleInRadians = D2R(angleInDegrees);
    let  si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
    
    return new Matr(1, 0, 0, 0,
                    0, co, si, 0,
                    0, -si, co, 0,
                    0, 0, 0, 1)
  }

  function MatrRotateY(angleInDegrees) {
    let angleInRadians = D2R(angleInDegrees), si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
    
    return new Matr(co, 0, -si, 0,
                    0, 1, 0, 0,
                    si, 0, co, 0,
                    0, 0, 0, 1)
  }

  function MatrRotateZ(angleInDegrees) {
    let angleInRadians = D2R(angleInDegrees), si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
    
    return new Matr(co, si, 0, 0,
                    -si, co, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1)
  }                                                                                              

  function MatrMulMatr(matr, m1) {
    let m = new Matr(0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0);

    m.A[0][0] = matr.A[0][0] * m1.A[0][0] +
                matr.A[0][1] * m1.A[1][0] +
                matr.A[0][2] * m1.A[2][0] +
                matr.A[0][3] * m1.A[3][0];

    m.A[0][1] = matr.A[0][0] * m1.A[0][1] +
                matr.A[0][1] * m1.A[1][1] +
                matr.A[0][2] * m1.A[2][1] +
                matr.A[0][3] * m1.A[3][1];

    m.A[0][2] = matr.A[0][0] * m1.A[0][2] +
                matr.A[0][1] * m1.A[1][2] +
                matr.A[0][2] * m1.A[2][2] +
                matr.A[0][3] * m1.A[3][2];

    m.A[0][3] = matr.A[0][0] * m1.A[0][3] +
                matr.A[0][1] * m1.A[1][3] +
                matr.A[0][2] * m1.A[2][3] +
                matr.A[0][3] * m1.A[3][3];


    m.A[1][0] = matr.A[1][0] * m1.A[0][0] +
                matr.A[1][1] * m1.A[1][0] +
                matr.A[1][2] * m1.A[2][0] +
                matr.A[1][3] * m1.A[3][0];

    m.A[1][1] = matr.A[1][0] * m1.A[0][1] +
                matr.A[1][1] * m1.A[1][1] +
                matr.A[1][2] * m1.A[2][1] +
                matr.A[1][3] * m1.A[3][1];

    m.A[1][2] = matr.A[1][0] * m1.A[0][2] +
                matr.A[1][1] * m1.A[1][2] +
                matr.A[1][2] * m1.A[2][2] +
                matr.A[1][3] * m1.A[3][2];

    m.A[1][3] = matr.A[1][0] * m1.A[0][3] +
                matr.A[1][1] * m1.A[1][3] +
                matr.A[1][2] * m1.A[2][3] +
                matr.A[1][3] * m1.A[3][3];


    m.A[2][0] = matr.A[2][0] * m1.A[0][0] +
                matr.A[2][1] * m1.A[1][0] +
                matr.A[2][2] * m1.A[2][0] +
                matr.A[2][3] * m1.A[3][0];

    m.A[2][1] = matr.A[2][0] * m1.A[0][1] +
                matr.A[2][1] * m1.A[1][1] +
                matr.A[2][2] * m1.A[2][1] +
                matr.A[2][3] * m1.A[3][1];

    m.A[2][2] = matr.A[2][0] * m1.A[0][2] +
                matr.A[2][1] * m1.A[1][2] +
                matr.A[2][2] * m1.A[2][2] +
                matr.A[2][3] * m1.A[3][2];

    m.A[2][3] = matr.A[2][0] * m1.A[0][3] +
                matr.A[2][1] * m1.A[1][3] +
                matr.A[2][2] * m1.A[2][3] +
                matr.A[2][3] * m1.A[3][3];


    m.A[3][0] = matr.A[3][0] * m1.A[0][0] +
                matr.A[3][1] * m1.A[1][0] +
                matr.A[3][2] * m1.A[2][0] +
                matr.A[3][3] * m1.A[3][0];

    m.A[3][1] = matr.A[3][0] * m1.A[0][1] +
                matr.A[3][1] * m1.A[1][1] +
                matr.A[3][2] * m1.A[2][1] +
                matr.A[3][3] * m1.A[3][1];

    m.A[3][2] = matr.A[3][0] * m1.A[0][2] +
                matr.A[3][1] * m1.A[1][2] +
                matr.A[3][2] * m1.A[2][2] +
                matr.A[3][3] * m1.A[3][2];

    m.A[3][3] = matr.A[3][0] * m1.A[0][3] +
                matr.A[3][1] * m1.A[1][3] +
                matr.A[3][2] * m1.A[2][3] +
                matr.A[3][3] * m1.A[3][3];

    return m;
  }

  function MatrView(Loc, At, Up1) {       
    let Dir = Vec3Normalize(Vec3SubVec3(At, Loc));
    let Right = Vec3Normalize(Vec3CrossVec3(Dir, Up1));
    let Up = Vec3Normalize(Vec3CrossVec3(Right, Dir));

    return new Matr(Right.x, Up.x, -Dir.x, 0,
                    Right.y, Up.y, -Dir.y, 0,
                    Right.z, Up.z, -Dir.z, 0,
                    -Vec3DotVec3(Loc, Right), -Vec3DotVec3(Loc, Up), Vec3DotVec3(Loc, Dir), 1)
  }                                                                                

  function MatrFrustum(L, R, B, T, N, F) {
    return new Matr(2 * N / (R - L), 0, 0, 0,
                    0, 2 * N / (T - B), 0, 0,
                    (R + L) / (R - L), (T + B) / (T - B), (-F - N) / (F - N), -1,
                    0, 0, 2 * N * F / (N - F), 0)
  } 

  class Vec3 {
    constructor(x, y, z) {
      this.x = x,
      this.y = y,
      this.z = z;
    }                                      
  }

  function Vec3Set1(A) {
    return new Vec3(A, A, A)
  }

  function Vec3Set(A, B, C) {
    return new Vec3(A, B, C)
  }

  function Vec3AddVec3(Vec1, Vec2) {
    return new Vec3(
      Vec1.x + Vec2.x,
      Vec1.y + Vec2.y,
      Vec1.z + Vec2.z)
  }

  function Vec3SubVec3(Vec1, Vec2) {
    return new Vec3(
      Vec1.x - Vec2.x,
      Vec1.y - Vec2.y,
      Vec1.z - Vec2.z)
  }

  function Vec3DivNum(Vec, N) {
    if (N == 0)
      return new Vec3Set1(0)
    return new Vec3(
      Vec.x / N,
      Vec.y / N,
      Vec.z / N)
  }

  function Vec3DotVec3(Vec1, Vec2) {
    return Vec1.x * Vec2.x +
           Vec1.y * Vec2.y +
           Vec1.z * Vec2.z;
  }

  function Vec3CrossVec3(Vec1, Vec2) {
    return new Vec3(
      -Vec1.z * Vec2.y + Vec1.y * Vec2.z,
      -Vec1.x * Vec2.z + Vec1.z * Vec2.x,
      -Vec1.y * Vec2.x + Vec1.x * Vec2.y)
  }

  function Vec3Normalize(Vec) {       
    let len = Vec3DotVec3(Vec, Vec);

    if (len == 1 || len == 0)
      return Vec;
    return Vec3DivNum(Vec, Math.pow(len, 0.5));
  }

  /* Platonic bodies: shaders, MN7, 11.06.2025 */

  let u_time_location;
  let u_frame_w_location;
  let u_frame_h_location;
  let u_matr_vp_location;
  let u_matr_w_location;
  let u_cam_loc_location;

  function loadShader(gl, shaderStr, type) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, shaderStr);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(shader));
    }

    return shader;
  }

  function initShaders(gl) {
    let vs, fs;
    const ft1 = fetch("./vert.glsl")
      .then((res) => res.text())
      .then((data) => {
        vs = data;
      });

    const ft2 = fetch("./frag.glsl")
      .then((res) => res.text())
      .then((data) => {
        fs = data;
      });

    const allData = Promise.all([ft1, ft2]);
    allData.then((res) => {
      const vertexShader = loadShader(gl, vs, gl.VERTEX_SHADER);
      const fragmentShader = loadShader(gl, fs, gl.FRAGMENT_SHADER);
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const Buf = gl.getProgramInfoLog(program);
        console.log(Buf);
      }
      gl.useProgram(program);

      u_time_location = gl.getUniformLocation(program, "Time");
      u_frame_w_location = gl.getUniformLocation(program, "FrameW");
      u_frame_h_location = gl.getUniformLocation(program, "FrameH");
      u_matr_vp_location = gl.getUniformLocation(program, "MatrVP");
      u_matr_w_location = gl.getUniformLocation(program, "MatrW");
      u_cam_loc_location = gl.getUniformLocation(program, "CamLoc");
    });
  }

  /* Platonic bodies, MN7, 11.06.2025 */

  function convertToVertices(vertices, indices) {
    let verticesArray = [];
    for (let i = 0; i < indices.length; i++) {
      verticesArray[i] = structuredClone(vertices[indices[i]]);
    }

    return verticesArray;
  }

  function verticesToArray(vertices) {
    let array = [];

    for (let i = 0; i < vertices.length; i++) {
      array[i * 10] = vertices[i][0][0];
      array[i * 10 + 1] = vertices[i][0][1];
      array[i * 10 + 2] = vertices[i][0][2];
      array[i * 10 + 3] = vertices[i][1][0];
      array[i * 10 + 4] = vertices[i][1][1];
      array[i * 10 + 5] = vertices[i][1][2];
      array[i * 10 + 6] = vertices[i][1][3];
      array[i * 10 + 7] = vertices[i][2][0];
      array[i * 10 + 8] = vertices[i][2][1];
      array[i * 10 + 9] = vertices[i][2][2];
    }

    return array;
  }
  function autoNormals(vertices, indices) {
    for (let i = 0; i < vertices.length; i++) {
      vertices[i][2] = [0, 0, 0];
    }
   
    for (let i = 0; i < indices.length; i += 3)
    {
      let n0 = indices[i], n1 = indices[i + 1], n2 = indices[i + 2]; 

      let p0 = Vec3Set(vertices[n0][0][0], vertices[n0][0][1], vertices[n0][0][2]),
          p1 = Vec3Set(vertices[n1][0][0], vertices[n1][0][1], vertices[n1][0][2]),
          p2 = Vec3Set(vertices[n2][0][0], vertices[n2][0][1], vertices[n2][0][2]);
      let n = Vec3Normalize(Vec3CrossVec3(Vec3SubVec3(p1, p0), Vec3SubVec3(p2, p0)));
                                                                     
      let n00 = Vec3Set(vertices[n0][2][0], vertices[n0][2][1], vertices[n0][2][2]),
          n01 = Vec3Set(vertices[n1][2][0], vertices[n1][2][1], vertices[n1][2][2]),
          n02 = Vec3Set(vertices[n2][2][0], vertices[n2][2][1], vertices[n2][2][2]);
                        
      let v0 = Vec3AddVec3(n00, n),
          v1 = Vec3AddVec3(n01, n), 
          v2 = Vec3AddVec3(n02, n);
        
      vertices[n0][2] = [v0.x, v0.y, v0.z];
      vertices[n1][2] = [v1.x, v1.y, v1.z];
      vertices[n2][2] = [v2.x, v2.y, v2.z];
    }
   
    for (let i = 0; i < vertices.length; i++) {
      let vi = Vec3Set(vertices[i][2][0], vertices[i][2][1], vertices[i][2][2]);
      let n = Vec3Normalize(vi);
      vertices[i][2] = [n.x, n.y, n.z]; 
    }
  }                               

  function createCube(a) {
    /* let vertices = [
      -a, -a, -a,
      0.5, 1, 1, 1,
      -1, -1, -1,

      -a, -a, a,
      0.5, 1, 1, 1,
      -1, -1, 1,

      a, -a, a,
      0.5, 1, 1, 1,
      1, -1, 1,

      a, -a, -a,
      0.5, 1, 1, 1,
      1, -1, -1,

      -a, a, -a,
      0.5, 1, 1, 1,
      -1, 1, -1,

      -a, a, a,
      0.5, 1, 1, 1,
      -1, 1, 1,

      a, a, a,
      0.5, 1, 1, 1,
      1, 1, 1,

      a, a, -a,
      0.5, 1, 1, 1,
      1, 1, -1
    ] */

    let vertices = [
      [[-a, -a, -a],
      [0.5, 1, 1, 1],
      [-1, -1, -1]],

      [[-a, -a, a],
      [0.5, 1, 1, 1],
      [-1, -1, 1]],

      [[a, -a, a],
      [0.5, 1, 1, 1],
      [1, -1, 1]],

      [[a, -a, -a],
      [0.5, 1, 1, 1],
      [1, -1, -1]],

      [[-a, a, -a],
      [0.5, 1, 1, 1],
      [-1, 1, -1]],

      [[-a, a, a],
      [0.5, 1, 1, 1],
      [-1, 1, 1]],

      [[a, a, a],
      [0.5, 1, 1, 1],
      [1, 1, 1]],

      [[a, a, -a],
      [0.5, 1, 1, 1],
      [1, 1, -1]]
    ];

    let indices = [
      3, 2, 1,
      4, 3, 1,

      1, 2, 5,
      6, 5, 2,

      2, 3, 6,
      7, 6, 3,

      3, 4, 8,
      3, 8, 7,

      1, 5, 8,
      1, 4, 8,

      5, 6, 8,
      6, 7, 8
    ];

    return [vertices, indices];
  }

  function createTetrahedron(a) {
    let vertices = [
      [[-a, -a, -a],
      [1, 1, 0, 1],
      [-1, -1, -1]],

      [[a, -a, a],
      [1, 1, 0, 1],
      [1, -1, 1]],

      [[-a, a, a],
      [1, 1, 0, 1],
      [-1, 1, 1]],

      [[a, a, -a],
      [1, 1, 0, 1],
      [1, 1, -1]]
    ];

    let indices = [
      1, 2, 4,
      1, 3, 4,
      2, 3, 4,
      1, 2, 3
    ];

    return [vertices, indices];
  }

  function createOctahedron(a) {
    let vertices = [
      [[0, -a, 0],
      [1, 0, 0, 1],
      [0, -1, 0]],
            
      [[0, 0, -a],
      [1, 0, 0, 1],
      [0, 0, -1]],

      [[-a, 0, 0],
      [1, 0, 0, 1],
      [-1, 0, 0]],

      [[0, 0, a],
      [1, 0, 0, 1],
      [0, 0, 1]],

      [[a, 0, 0],
      [1, 0, 0, 1],
      [1, 0, 0]],

      [[0, a, 0],
      [1, 0, 0, 1],
      [0, 1, 0]],
    ];

    let indices = [
      1, 2, 3,
      1, 2, 5,
      1, 3, 4,
      1, 4, 5,

      6, 2, 3,
      6, 2, 5,
      6, 3, 4,
      6, 4, 5
    ];

    return [vertices, indices]
  }

  function createIcosahedron(a) {
    let sin18 = Math.sin(18 * PI / 180), cos18 = Math.cos(18 * PI / 180);
    let sin234 = Math.sin(234 * PI / 180), cos234 = Math.cos(234 * PI / 180);
    let sin54 = Math.sin(54 * PI / 180), cos54 = Math.cos(54 * PI / 180);
    let sin198 = Math.sin(198 * PI / 180), cos198 = Math.cos(198 * PI / 180);
    let y = a / Math.sqrt(5);
    let coef = 2 * y;

    let vertices = [
      [[0, -1, 0],                                  //1
      [1, 0, 1, 1],
      [0, -1, 0]],
            
      [[coef * cos234, -y, coef * sin234],          //2
      [1, 0, 1, 1],
      [0, 0, -1]],

      [[-coef * cos18, -y, coef * sin18],           //3
      [1, 0, 1, 1],
      [-1, 0, 0]],

      [[0, -y, 1],                                  //4
      [1, 0, 1, 1],
      [0, 0, 1]],

      [[coef * cos18, -y, coef * sin18],            //5
      [1, 0, 1, 1],
      [1, 0, 0]],

      [[-coef * cos234, -y, coef * sin234],         //6
      [1, 0, 1, 1],
      [0, 1, 0]],

      [[0, y, -coef],                               //7
      [1, 0, 1, 1],
      [0, 1, 0]],

      [[coef * cos198, y, coef * sin198],           //8
      [1, 0, 1, 1],
      [0, 1, 0]],

      [[-coef * cos54, y, coef * sin54],            //9
      [1, 0, 1, 1],
      [0, 1, 0]],        

      [[coef * cos54, y, coef * sin54],             //10
      [1, 0, 1, 1],
      [0, 1, 0]],           

      [[-coef * cos198, y, coef * sin198],          //11
      [1, 0, 1, 1],
      [0, 1, 0]],

      [[0, 1, 0],                                   //12
      [1, 0, 1, 1],
      [0, 1, 0]],
    ];             

    let indices = [
      1, 2, 3,
      1, 3, 4,
      1, 4, 5,
      1, 5, 6,
      1, 2, 6,

      2, 7, 6,
      7, 6, 11,
      6, 11, 5,
      11, 5, 10,
      5, 10, 4,
      10, 4, 9,
      4, 9, 3,
      9, 3, 8,
      3, 8, 2,
      8, 2, 7,
      
      12, 7, 8, 
      12, 8, 9,
      12, 9, 10,
      12, 10, 11,
      12, 11, 7
    ];

    return [vertices, indices]
  }

  function createDodecahedron(a) {
    let sin18 = Math.sin(18 * PI / 180), cos18 = Math.cos(18 * PI / 180);
    let sin234 = Math.sin(234 * PI / 180), cos234 = Math.cos(234 * PI / 180);
    let sin54 = Math.sin(54 * PI / 180), cos54 = Math.cos(54 * PI / 180);
    let sin198 = Math.sin(198 * PI / 180), cos198 = Math.cos(198 * PI / 180);
    let y = a / Math.sqrt(5);
    let coef = 2 * y;

    let verticesIcosahedron = [
      [0, 0, 0],
      [0, -1, 0],
      [coef * cos234, -y, coef * sin234],
      [-coef * cos18, -y, coef * sin18],
      [0, -y, 1],
      [coef * cos18, -y, coef * sin18],
      [-coef * cos234, -y, coef * sin234],
      [0, y, -coef],
      [coef * cos198, y, coef * sin198],
      [-coef * cos54, y, coef * sin54],
      [coef * cos54, y, coef * sin54],
      [-coef * cos198, y, coef * sin198],
      [0, 1, 0]];

    let vertices = [
      [[(verticesIcosahedron[1][0] + verticesIcosahedron[2][0] + verticesIcosahedron[3][0]) / 3.0,
      (verticesIcosahedron[1][1] + verticesIcosahedron[2][1] + verticesIcosahedron[3][1]) / 3.0,
      (verticesIcosahedron[1][2] + verticesIcosahedron[2][2] + verticesIcosahedron[3][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, -1, 0]],
            
      [[(verticesIcosahedron[1][0] + verticesIcosahedron[4][0] + verticesIcosahedron[3][0]) / 3.0,
      (verticesIcosahedron[1][1] + verticesIcosahedron[4][1] + verticesIcosahedron[3][1]) / 3.0,
      (verticesIcosahedron[1][2] + verticesIcosahedron[4][2] + verticesIcosahedron[3][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 0, -1]],

      [[(verticesIcosahedron[1][0] + verticesIcosahedron[4][0] + verticesIcosahedron[5][0]) / 3.0,
      (verticesIcosahedron[1][1] + verticesIcosahedron[4][1] + verticesIcosahedron[5][1]) / 3.0,
      (verticesIcosahedron[1][2] + verticesIcosahedron[4][2] + verticesIcosahedron[5][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [-1, 0, 0]],

      [[(verticesIcosahedron[1][0] + verticesIcosahedron[6][0] + verticesIcosahedron[5][0]) / 3.0,
      (verticesIcosahedron[1][1] + verticesIcosahedron[6][1] + verticesIcosahedron[5][1]) / 3.0,
      (verticesIcosahedron[1][2] + verticesIcosahedron[6][2] + verticesIcosahedron[5][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 0, 1]],

      [[(verticesIcosahedron[1][0] + verticesIcosahedron[6][0] + verticesIcosahedron[2][0]) / 3.0,
      (verticesIcosahedron[1][1] + verticesIcosahedron[6][1] + verticesIcosahedron[2][1]) / 3.0,
      (verticesIcosahedron[1][2] + verticesIcosahedron[6][2] + verticesIcosahedron[2][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [1, 0, 0]],
      

      [[(verticesIcosahedron[2][0] + verticesIcosahedron[6][0] + verticesIcosahedron[7][0]) / 3.0,
      (verticesIcosahedron[2][1] + verticesIcosahedron[6][1] + verticesIcosahedron[7][1]) / 3.0,
      (verticesIcosahedron[2][2] + verticesIcosahedron[6][2] + verticesIcosahedron[7][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[7][0] + verticesIcosahedron[6][0] + verticesIcosahedron[11][0]) / 3.0,
      (verticesIcosahedron[7][1] + verticesIcosahedron[6][1] + verticesIcosahedron[11][1]) / 3.0,
      (verticesIcosahedron[7][2] + verticesIcosahedron[6][2] + verticesIcosahedron[11][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[6][0] + verticesIcosahedron[11][0] + verticesIcosahedron[5][0]) / 3.0,
      (verticesIcosahedron[6][1] + verticesIcosahedron[11][1] + verticesIcosahedron[5][1]) / 3.0,
      (verticesIcosahedron[6][2] + verticesIcosahedron[11][2] + verticesIcosahedron[5][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[10][0] + verticesIcosahedron[11][0] + verticesIcosahedron[5][0]) / 3.0,
      (verticesIcosahedron[10][1] + verticesIcosahedron[11][1] + verticesIcosahedron[5][1]) / 3.0,
      (verticesIcosahedron[10][2] + verticesIcosahedron[11][2] + verticesIcosahedron[5][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],        

      [[(verticesIcosahedron[10][0] + verticesIcosahedron[4][0] + verticesIcosahedron[5][0]) / 3.0,
      (verticesIcosahedron[10][1] + verticesIcosahedron[4][1] + verticesIcosahedron[5][1]) / 3.0,
      (verticesIcosahedron[10][2] + verticesIcosahedron[4][2] + verticesIcosahedron[5][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],           

      [[(verticesIcosahedron[10][0] + verticesIcosahedron[4][0] + verticesIcosahedron[9][0]) / 3.0,
      (verticesIcosahedron[10][1] + verticesIcosahedron[4][1] + verticesIcosahedron[9][1]) / 3.0,
      (verticesIcosahedron[10][2] + verticesIcosahedron[4][2] + verticesIcosahedron[9][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[3][0] + verticesIcosahedron[4][0] + verticesIcosahedron[9][0]) / 3.0,
      (verticesIcosahedron[3][1] + verticesIcosahedron[4][1] + verticesIcosahedron[9][1]) / 3.0,
      (verticesIcosahedron[3][2] + verticesIcosahedron[4][2] + verticesIcosahedron[9][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[3][0] + verticesIcosahedron[8][0] + verticesIcosahedron[9][0]) / 3.0,
      (verticesIcosahedron[3][1] + verticesIcosahedron[8][1] + verticesIcosahedron[9][1]) / 3.0,
      (verticesIcosahedron[3][2] + verticesIcosahedron[8][2] + verticesIcosahedron[9][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[3][0] + verticesIcosahedron[8][0] + verticesIcosahedron[2][0]) / 3.0,
      (verticesIcosahedron[3][1] + verticesIcosahedron[8][1] + verticesIcosahedron[2][1]) / 3.0,
      (verticesIcosahedron[3][2] + verticesIcosahedron[8][2] + verticesIcosahedron[2][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[7][0] + verticesIcosahedron[8][0] + verticesIcosahedron[2][0]) / 3.0,
      (verticesIcosahedron[7][1] + verticesIcosahedron[8][1] + verticesIcosahedron[2][1]) / 3.0,
      (verticesIcosahedron[7][2] + verticesIcosahedron[8][2] + verticesIcosahedron[2][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],
      

      [[(verticesIcosahedron[7][0] + verticesIcosahedron[8][0] + verticesIcosahedron[12][0]) / 3.0,
      (verticesIcosahedron[7][1] + verticesIcosahedron[8][1] + verticesIcosahedron[12][1]) / 3.0,
      (verticesIcosahedron[7][2] + verticesIcosahedron[8][2] + verticesIcosahedron[12][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[9][0] + verticesIcosahedron[8][0] + verticesIcosahedron[12][0]) / 3.0,
      (verticesIcosahedron[9][1] + verticesIcosahedron[8][1] + verticesIcosahedron[12][1]) / 3.0,
      (verticesIcosahedron[9][2] + verticesIcosahedron[8][2] + verticesIcosahedron[12][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[9][0] + verticesIcosahedron[10][0] + verticesIcosahedron[12][0]) / 3.0,
      (verticesIcosahedron[9][1] + verticesIcosahedron[10][1] + verticesIcosahedron[12][1]) / 3.0,
      (verticesIcosahedron[9][2] + verticesIcosahedron[10][2] + verticesIcosahedron[12][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[11][0] + verticesIcosahedron[10][0] + verticesIcosahedron[12][0]) / 3.0,
      (verticesIcosahedron[11][1] + verticesIcosahedron[10][1] + verticesIcosahedron[12][1]) / 3.0,
      (verticesIcosahedron[11][2] + verticesIcosahedron[10][2] + verticesIcosahedron[12][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],

      [[(verticesIcosahedron[11][0] + verticesIcosahedron[7][0] + verticesIcosahedron[12][0]) / 3.0,
      (verticesIcosahedron[11][1] + verticesIcosahedron[7][1] + verticesIcosahedron[12][1]) / 3.0,
      (verticesIcosahedron[11][2] + verticesIcosahedron[7][2] + verticesIcosahedron[12][2]) / 3.0],
      [0.6, 0.8, 0, 1],
      [0, 1, 0]],
    ];

    let indices = [
      0, 1, 11,
      0, 11, 13,
      11, 12, 13,

      1, 2, 9,
      1, 9, 11,
      9, 10, 11,

      2, 3, 7,
      2, 7, 9,
      7, 8, 9,

      3, 4, 5,
      3, 5, 7,
      5, 6, 7,

      0, 4, 13,
      4, 5, 13,
      5, 13, 14,


      12, 13, 14,
      12, 14, 15,
      12, 15, 16,

      10, 11, 12,
      10, 12, 17,
      12, 16, 17,

      8, 9, 10,
      8, 10, 17,
      8, 17, 18,

      6, 7, 8,
      6, 8, 18,
      6, 18, 19,

      5, 6, 14,
      6, 14, 15,
      6, 15, 19,


      0, 1, 2,
      0, 2, 4,
      2, 3, 4,

      15, 16, 17,
      15, 17, 19,
      17, 18, 19
    ];

    return [vertices, indices]
  }

  /* Platonic bodies: main file, MN7, 11.06.25 */

  let gl;
  let startTime;
  let FrameW, FrameH;
  let ProjSize = 0.1, ProjFarClip = 1000, ProjDist = ProjSize;
  let MatrP, MatrVP, MatrV;
  let matrWCube = MatrIdentity(),
    matrWTetrahedron = MatrIdentity(),
    matrWOctahedron = MatrIdentity(),
    matrWIcosahedron = MatrIdentity(),
    matrWDodecahedron = MatrIdentity();
  let Loc = Vec3Set1(5);
  let At = Vec3Set1(0);
  let Up = Vec3Set(0, 1, 0);
  let isCube = false, isTetrahedron = false, isOctahedron = false, isIcosahedron = false, isDodecahedron = false;

  function CamSet(Loc, At, Up) {
    MatrV = MatrView(Loc, At, Up);
    MatrVP = MatrMulMatr(MatrV, MatrP);
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
      MatrFrustum(-rx / 2, rx / 2, -ry / 2, ry / 2,
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

    Loc = Vec3Set(5, 5, 5);
    At = Vec3Set1(0);
    Up = Vec3Set(0, 1, 0);

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
      matrWCube = MatrRotateZ(180 * currentTime / 1000.0);
      let vertices = convertToVertices(verticesCube, indicesCube);
      autoNormals(vertices, Array.from(Array(vertices.length).keys()));
      arrayCube = verticesToArray(vertices);
      createBuffer(bufferCube, arrayCube, indicesCube);
      gl.uniformMatrix4fv(u_matr_w_location, false,
        new Float32Array(matrWCube.A[0].concat(matrWCube.A[1].concat(matrWCube.A[2].concat(matrWCube.A[3]))), 0, 16));
      gl.drawArrays(gl.TRIANGLES, 0, arrayCube.length);
    }

    if (isTetrahedron) {
      matrWTetrahedron = MatrMulMatr(MatrTranslate(Vec3Set(0, 3 * Math.sin(currentTime / 1000.0), 0)), MatrRotateX(30 * currentTime / 1000.0));
      let vertices = convertToVertices(verticesTetrahedron, indicesTetrahedron);
      autoNormals(vertices, Array.from(Array(vertices.length).keys()));
      arrayTetrahedron = verticesToArray(vertices);
      createBuffer(bufferTetrahedron, arrayTetrahedron, indicesTetrahedron);
      gl.uniformMatrix4fv(u_matr_w_location, false,
        new Float32Array(matrWTetrahedron.A[0].concat(matrWTetrahedron.A[1].concat(matrWTetrahedron.A[2].concat(matrWTetrahedron.A[3]))), 0, 16));
      gl.drawArrays(gl.TRIANGLES, 0, arrayTetrahedron.length);
    }

    if (isOctahedron) {
      matrWOctahedron = MatrMulMatr(MatrTranslate(Vec3Set(3 * Math.cos(currentTime / 1000.0), 0, 0)), MatrRotateZ(90 * currentTime / 1000.0));
      let vertices = convertToVertices(verticesOctahedron, indicesOctahedron);
      autoNormals(vertices, Array.from(Array(vertices.length).keys()));
      arrayOctahedron = verticesToArray(vertices);
      createBuffer(bufferOctahedron, arrayOctahedron, indicesOctahedron);
      gl.uniformMatrix4fv(u_matr_w_location, false,
        new Float32Array(matrWOctahedron.A[0].concat(matrWOctahedron.A[1].concat(matrWOctahedron.A[2].concat(matrWOctahedron.A[3]))), 0, 16));
      gl.drawArrays(gl.TRIANGLES, 0, arrayOctahedron.length);
    }

    if (isIcosahedron) {
      matrWIcosahedron = MatrMulMatr(MatrRotateZ(90 * currentTime / 1000.0), MatrTranslate(Vec3Set(0, 0, 1.8 * Math.sin(currentTime / 1000.0))));
      let vertices = convertToVertices(verticesIcosahedron, indicesIcosahedron);
      autoNormals(vertices, Array.from(Array(vertices.length).keys()));
      arrayIcosahedron = verticesToArray(vertices);
      createBuffer(bufferIcosahedron, arrayIcosahedron, indicesIcosahedron);
      gl.uniformMatrix4fv(u_matr_w_location, false,
        new Float32Array(matrWIcosahedron.A[0].concat(matrWIcosahedron.A[1].concat(matrWIcosahedron.A[2].concat(matrWIcosahedron.A[3]))), 0, 16));
      gl.drawArrays(gl.TRIANGLES, 0, arrayIcosahedron.length);
    }

    if (isDodecahedron) {
      matrWDodecahedron = MatrMulMatr(MatrRotateY(120 * currentTime / 1000.0),
        MatrTranslate(Vec3Set(6.5 * Math.cos(currentTime / 1000.0), 0, 1.8 * Math.sin(currentTime / 1000.0))));
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

  function onStart() {
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

  exports.onStart = onStart;

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21hdGguanMiLCIuLi9zcmMvc2hhZGVycy5qcyIsIi4uL3NyYy9wbGF0b24uanMiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQbGF0b25pYyBib2RpZXM6IG1hdGggbW9kdWxlLCBNTjcsIDExLjA2LjIwMjUgKi9cclxuXHJcbmV4cG9ydCBsZXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2O1xyXG5cclxuLyogRGVncmVlcyB0byByYWRpYW5zIGNvbnZlcnNpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEQyUihBKSB7XHJcbiAgcmV0dXJuIEEgKiBQSSAvIDE4MDtcclxufVxyXG5cclxuLyogUmFkaWFucyB0byBkZWdyZWVzIGNvbnZlcnNpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFIyRChBKSB7XHJcbiAgcmV0dXJuIChBKSAqICgxODAuMCAvIFBJKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHIge1xyXG4gIGNvbnN0cnVjdG9yKEEwMCwgQTAxLCBBMDIsIEEwMyxcclxuICAgICAgICAgICAgICBBMTAsIEExMSwgQTEyLCBBMTMsXHJcbiAgICAgICAgICAgICAgQTIwLCBBMjEsIEEyMiwgQTIzLFxyXG4gICAgICAgICAgICAgIEEzMCwgQTMxLCBBMzIsIEEzMykge1xyXG4gICAgdGhpcy5BID0gW1tBMDAsIEEwMSwgQTAyLCBBMDNdLFxyXG4gICAgICAgICAgICAgIFtBMTAsIEExMSwgQTEyLCBBMTNdLFxyXG4gICAgICAgICAgICAgIFtBMjAsIEEyMSwgQTIyLCBBMjNdLFxyXG4gICAgICAgICAgICAgIFtBMzAsIEEzMSwgQTMyLCBBMzNdXSAgICAgICAgICAgIFxyXG4gIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxufSAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0cklkZW50aXR5KCkge1xyXG4gIHJldHVybiBuZXcgTWF0cigxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJUcmFuc2xhdGUodCkge1xyXG4gIHJldHVybiBuZXcgTWF0cigxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICB0LngsIHQueSwgdC56LCAxKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRyU2NhbGUocykge1xyXG4gIHJldHVybiBuZXcgTWF0cihzLngsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIHMueSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgMCwgMCwgcy56LCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0clJvdGF0ZVgoYW5nbGVJbkRlZ3JlZXMpIHtcclxuICBsZXQgYW5nbGVJblJhZGlhbnMgPSBEMlIoYW5nbGVJbkRlZ3JlZXMpO1xyXG4gIGxldCAgc2kgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyksIGNvID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gIFxyXG4gIHJldHVybiBuZXcgTWF0cigxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCBjbywgc2ksIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIC1zaSwgY28sIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRyUm90YXRlWShhbmdsZUluRGVncmVlcykge1xyXG4gIGxldCBhbmdsZUluUmFkaWFucyA9IEQyUihhbmdsZUluRGVncmVlcyksIHNpID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpLCBjbyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICBcclxuICByZXR1cm4gbmV3IE1hdHIoY28sIDAsIC1zaSwgMCxcclxuICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgc2ksIDAsIGNvLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0clJvdGF0ZVooYW5nbGVJbkRlZ3JlZXMpIHtcclxuICBsZXQgYW5nbGVJblJhZGlhbnMgPSBEMlIoYW5nbGVJbkRlZ3JlZXMpLCBzaSA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKSwgY28gPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgXHJcbiAgcmV0dXJuIG5ldyBNYXRyKGNvLCBzaSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgLXNpLCBjbywgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSlcclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRyUm90YXRlKGFuZ2xlSW5EZWdyZWVzLCByKSB7XHJcbiAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gRDJSKGFuZ2xlSW5EZWdyZWVzKSwgc2kgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyksIGNvID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLFxyXG4gIHYgPSByLlZlYzNOb3JtYWxpemUoKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBNYXRyKGNvICsgdi54ICogdi54ICogKDEgLSBjbyksXHJcbiAgICAgICAgICAgICAgICAgIHYueCAqIHYueSAqICgxIC0gY28pICsgdi56ICogc2ksXHJcbiAgICAgICAgICAgICAgICAgIHYueCAqIHYueiAqICgxIC0gY28pIC0gdi55ICogc2ksXHJcbiAgICAgICAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAgICAgICB2LnkgKiB2LnggKiAoMSAtIGNvKSAtIHYueiAqIHNpLFxyXG4gICAgICAgICAgICAgICAgICBjbyArIHYueSAqIHYueSAqICgxIC0gY28pLFxyXG4gICAgICAgICAgICAgICAgICB2LnkgKiB2LnogKiAoMSAtIGNvKSArIHYueCAqIHNpLFxyXG4gICAgICAgICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgdi56ICogdi54ICogKDEgLSBjbykgKyB2LnkgKiBzaSxcclxuICAgICAgICAgICAgICAgICAgdi56ICogdi55ICogKDEgLSBjbykgLSB2LnggKiBzaSxcclxuICAgICAgICAgICAgICAgICAgY28gKyB2LnogKiB2LnogKiAoMSAtIGNvKSxcclxuICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpXHJcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0ck11bE1hdHIobWF0ciwgbTEpIHtcclxuICBsZXQgbSA9IG5ldyBNYXRyKDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDApO1xyXG5cclxuICBtLkFbMF1bMF0gPSBtYXRyLkFbMF1bMF0gKiBtMS5BWzBdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMV0gKiBtMS5BWzFdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMl0gKiBtMS5BWzJdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bM10gKiBtMS5BWzNdWzBdO1xyXG5cclxuICBtLkFbMF1bMV0gPSBtYXRyLkFbMF1bMF0gKiBtMS5BWzBdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMV0gKiBtMS5BWzFdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMl0gKiBtMS5BWzJdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bM10gKiBtMS5BWzNdWzFdO1xyXG5cclxuICBtLkFbMF1bMl0gPSBtYXRyLkFbMF1bMF0gKiBtMS5BWzBdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMV0gKiBtMS5BWzFdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMl0gKiBtMS5BWzJdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bM10gKiBtMS5BWzNdWzJdO1xyXG5cclxuICBtLkFbMF1bM10gPSBtYXRyLkFbMF1bMF0gKiBtMS5BWzBdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMV0gKiBtMS5BWzFdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bMl0gKiBtMS5BWzJdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbMF1bM10gKiBtMS5BWzNdWzNdO1xyXG5cclxuXHJcbiAgbS5BWzFdWzBdID0gbWF0ci5BWzFdWzBdICogbTEuQVswXVswXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzFdICogbTEuQVsxXVswXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzJdICogbTEuQVsyXVswXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzNdICogbTEuQVszXVswXTtcclxuXHJcbiAgbS5BWzFdWzFdID0gbWF0ci5BWzFdWzBdICogbTEuQVswXVsxXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzFdICogbTEuQVsxXVsxXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzJdICogbTEuQVsyXVsxXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzNdICogbTEuQVszXVsxXTtcclxuXHJcbiAgbS5BWzFdWzJdID0gbWF0ci5BWzFdWzBdICogbTEuQVswXVsyXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzFdICogbTEuQVsxXVsyXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzJdICogbTEuQVsyXVsyXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzNdICogbTEuQVszXVsyXTtcclxuXHJcbiAgbS5BWzFdWzNdID0gbWF0ci5BWzFdWzBdICogbTEuQVswXVszXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzFdICogbTEuQVsxXVszXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzJdICogbTEuQVsyXVszXSArXHJcbiAgICAgICAgICAgICAgbWF0ci5BWzFdWzNdICogbTEuQVszXVszXTtcclxuXHJcblxyXG4gIG0uQVsyXVswXSA9IG1hdHIuQVsyXVswXSAqIG0xLkFbMF1bMF0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsxXSAqIG0xLkFbMV1bMF0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsyXSAqIG0xLkFbMl1bMF0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVszXSAqIG0xLkFbM11bMF07XHJcblxyXG4gIG0uQVsyXVsxXSA9IG1hdHIuQVsyXVswXSAqIG0xLkFbMF1bMV0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsxXSAqIG0xLkFbMV1bMV0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsyXSAqIG0xLkFbMl1bMV0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVszXSAqIG0xLkFbM11bMV07XHJcblxyXG4gIG0uQVsyXVsyXSA9IG1hdHIuQVsyXVswXSAqIG0xLkFbMF1bMl0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsxXSAqIG0xLkFbMV1bMl0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsyXSAqIG0xLkFbMl1bMl0gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVszXSAqIG0xLkFbM11bMl07XHJcblxyXG4gIG0uQVsyXVszXSA9IG1hdHIuQVsyXVswXSAqIG0xLkFbMF1bM10gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsxXSAqIG0xLkFbMV1bM10gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVsyXSAqIG0xLkFbMl1bM10gK1xyXG4gICAgICAgICAgICAgIG1hdHIuQVsyXVszXSAqIG0xLkFbM11bM107XHJcblxyXG5cclxuICBtLkFbM11bMF0gPSBtYXRyLkFbM11bMF0gKiBtMS5BWzBdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMV0gKiBtMS5BWzFdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMl0gKiBtMS5BWzJdWzBdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bM10gKiBtMS5BWzNdWzBdO1xyXG5cclxuICBtLkFbM11bMV0gPSBtYXRyLkFbM11bMF0gKiBtMS5BWzBdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMV0gKiBtMS5BWzFdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMl0gKiBtMS5BWzJdWzFdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bM10gKiBtMS5BWzNdWzFdO1xyXG5cclxuICBtLkFbM11bMl0gPSBtYXRyLkFbM11bMF0gKiBtMS5BWzBdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMV0gKiBtMS5BWzFdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMl0gKiBtMS5BWzJdWzJdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bM10gKiBtMS5BWzNdWzJdO1xyXG5cclxuICBtLkFbM11bM10gPSBtYXRyLkFbM11bMF0gKiBtMS5BWzBdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMV0gKiBtMS5BWzFdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bMl0gKiBtMS5BWzJdWzNdICtcclxuICAgICAgICAgICAgICBtYXRyLkFbM11bM10gKiBtMS5BWzNdWzNdO1xyXG5cclxuICByZXR1cm4gbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJUcmFuc3Bvc2UobWF0cikge1xyXG4gIHJldHVybiBuZXcgTWF0cihtYXRyLkFbMF1bMF0sIG1hdHIuQVsxXVswXSwgbWF0ci5BWzJdWzBdLCBtYXRyLkFbM11bMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1hdHIuQVswXVsxXSwgbWF0ci5BWzFdWzFdLCBtYXRyLkFbMl1bMV0sIG1hdHIuQVszXVsxXSxcclxuICAgICAgICAgICAgICAgICAgbWF0ci5BWzBdWzJdLCBtYXRyLkFbMV1bMl0sIG1hdHIuQVsyXVsyXSwgbWF0ci5BWzNdWzJdLFxyXG4gICAgICAgICAgICAgICAgICBtYXRyLkFbMF1bM10sIG1hdHIuQVsxXVszXSwgbWF0ci5BWzJdWzNdLCBtYXRyLkFbM11bM10pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0ckRldGVybTN4MyhBMTEsIEExMiwgQTEzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBMjEsIEEyMiwgQTIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBMzEsIEEzMiwgQTMzKSB7XHJcbiAgcmV0dXJuIEExMSAqIEEyMiAqIEEzMyArIEExMiAqIEEyMyAqIEEzMSArIEExMyAqIEEyMSAqIEEzMiAtXHJcbiAgICAgICAgIEExMSAqIEEyMyAqIEEzMiAtIEExMiAqIEEyMSAqIEEzMyAtIEExMyAqIEEyMiAqIEEzMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJEZXRlcm0obWF0cikge1xyXG4gIHJldHVybiBtYXRyLkFbMF1bMF0gKiBNYXRyRGV0ZXJtM3gzKG1hdHIuQVsxXVsxXSwgbWF0ci5BWzFdWzJdLCBtYXRyLkFbMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyLkFbMl1bMV0sIG1hdHIuQVsyXVsyXSwgbWF0ci5BWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ci5BWzNdWzFdLCBtYXRyLkFbM11bMl0sIG1hdHIuQVszXVszXSkgK1xyXG5cclxuICAgICAgICAgLW1hdHIuQVswXVsxXSAqIE1hdHJEZXRlcm0zeDMobWF0ci5BWzFdWzBdLCBtYXRyLkFbMV1bMl0sIG1hdHIuQVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyLkFbMl1bMF0sIG1hdHIuQVsyXVsyXSwgbWF0ci5BWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHIuQVszXVswXSwgbWF0ci5BWzNdWzJdLCBtYXRyLkFbM11bM10pICtcclxuXHJcbiAgICAgICAgIG1hdHIuQVswXVsyXSAqIE1hdHJEZXRlcm0zeDMobWF0ci5BWzFdWzBdLCBtYXRyLkFbMV1bMV0sIG1hdHIuQVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyLkFbMl1bMF0sIG1hdHIuQVsyXVsxXSwgbWF0ci5BWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHIuQVszXVswXSwgbWF0ci5BWzNdWzFdLCBtYXRyLkFbM11bM10pICtcclxuXHJcbiAgICAgICAgIC1tYXRyLkFbMF1bM10gKiBNYXRyRGV0ZXJtM3gzKG1hdHIuQVsxXVswXSwgbWF0ci5BWzFdWzFdLCBtYXRyLkFbMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ci5BWzJdWzBdLCBtYXRyLkFbMl1bMV0sIG1hdHIuQVsyXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyLkFbM11bMF0sIG1hdHIuQVszXVsxXSwgbWF0ci5BWzNdWzJdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJJbnZlcnNlKG1hdHIpIHtcclxuICBsZXQgbSA9IG1hdHI7XHJcbiAgbGV0IGRldCA9IE1hdHJEZXRlcm0obWF0cik7XHJcbiAgbGV0IHIgPSBuZXcgTWF0cigwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAwKTtcclxuXHJcbiAgaWYgKGRldCA9PSAwKVxyXG4gICAgcmV0dXJuIG5ldyBNYXRyKDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gIC8qIEJ1aWxkIGFkam9pbnQgbWF0cml4ICovXHJcbiAgci5BWzBdWzBdID0gTWF0ckRldGVybTN4MyhtLkFbMV1bMV0sIG0uQVsxXVsyXSwgbS5BWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzJdWzFdLCBtLkFbMl1bMl0sIG0uQVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVszXVsxXSwgbS5BWzNdWzJdLCBtLkFbM11bM10pIC8gZGV0O1xyXG5cclxuICByLkFbMV1bMF0gPSAtTWF0ckRldGVybTN4MyhtLkFbMV1bMF0sIG0uQVsxXVsyXSwgbS5BWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbMl1bMF0sIG0uQVsyXVsyXSwgbS5BWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbM11bMF0sIG0uQVszXVsyXSwgbS5BWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgci5BWzJdWzBdID0gTWF0ckRldGVybTN4MyhtLkFbMV1bMF0sIG0uQVsxXVsxXSwgbS5BWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzJdWzBdLCBtLkFbMl1bMV0sIG0uQVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVszXVswXSwgbS5BWzNdWzFdLCBtLkFbM11bM10pIC8gZGV0O1xyXG5cclxuICByLkFbM11bMF0gPSAtTWF0ckRldGVybTN4MyhtLkFbMV1bMF0sIG0uQVsxXVsxXSwgbS5BWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbMl1bMF0sIG0uQVsyXVsxXSwgbS5BWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbM11bMF0sIG0uQVszXVsxXSwgbS5BWzNdWzJdKSAvIGRldDtcclxuXHJcbiAgci5BWzBdWzFdID0gLU1hdHJEZXRlcm0zeDMobS5BWzBdWzFdLCBtLkFbMF1bMl0sIG0uQVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzJdWzFdLCBtLkFbMl1bMl0sIG0uQVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzNdWzFdLCBtLkFbM11bMl0sIG0uQVszXVszXSkgLyBkZXQ7XHJcblxyXG4gIHIuQVsxXVsxXSA9IE1hdHJEZXRlcm0zeDMobS5BWzBdWzBdLCBtLkFbMF1bMl0sIG0uQVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzJdWzBdLCBtLkFbMl1bMl0sIG0uQVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzNdWzBdLCBtLkFbM11bMl0sIG0uQVszXVszXSkgLyBkZXQ7XHJcblxyXG4gIHIuQVsyXVsxXSA9IC1NYXRyRGV0ZXJtM3gzKG0uQVswXVswXSwgbS5BWzBdWzFdLCBtLkFbMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsyXVswXSwgbS5BWzJdWzFdLCBtLkFbMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVszXVswXSwgbS5BWzNdWzFdLCBtLkFbM11bM10pIC8gZGV0O1xyXG5cclxuICByLkFbM11bMV0gPSBNYXRyRGV0ZXJtM3gzKG0uQVswXVswXSwgbS5BWzBdWzFdLCBtLkFbMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbMl1bMF0sIG0uQVsyXVsxXSwgbS5BWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzNdWzBdLCBtLkFbM11bMV0sIG0uQVszXVsyXSkgLyBkZXQ7XHJcblxyXG4gIHIuQVswXVsyXSA9IE1hdHJEZXRlcm0zeDMobS5BWzBdWzFdLCBtLkFbMF1bMl0sIG0uQVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsxXVsxXSwgbS5BWzFdWzJdLCBtLkFbMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbM11bMV0sIG0uQVszXVsyXSwgbS5BWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgci5BWzFdWzJdID0gLU1hdHJEZXRlcm0zeDMobS5BWzBdWzBdLCBtLkFbMF1bMl0sIG0uQVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsxXVswXSwgbS5BWzFdWzJdLCBtLkFbMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbM11bMF0sIG0uQVszXVsyXSwgbS5BWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgci5BWzJdWzJdID0gTWF0ckRldGVybTN4MyhtLkFbMF1bMF0sIG0uQVswXVsxXSwgbS5BWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzFdWzBdLCBtLkFbMV1bMV0sIG0uQVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVszXVswXSwgbS5BWzNdWzFdLCBtLkFbM11bM10pIC8gZGV0O1xyXG5cclxuICByLkFbM11bMl0gPSAtTWF0ckRldGVybTN4MyhtLkFbMF1bMF0sIG0uQVswXVsxXSwgbS5BWzBdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzFdWzBdLCBtLkFbMV1bMV0sIG0uQVsxXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVszXVswXSwgbS5BWzNdWzFdLCBtLkFbM11bMl0pIC8gZGV0O1xyXG5cclxuICByLkFbMF1bM10gPSAtTWF0ckRldGVybTN4MyhtLkFbMF1bMV0sIG0uQVswXVsyXSwgbS5BWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzFdWzFdLCBtLkFbMV1bMl0sIG0uQVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsyXVsxXSwgbS5BWzJdWzJdLCBtLkFbMl1bM10pIC8gZGV0O1xyXG4gIFxyXG4gIHIuQVsxXVszXSA9IE1hdHJEZXRlcm0zeDMobS5BWzBdWzBdLCBtLkFbMF1bMl0sIG0uQVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsxXVswXSwgbS5BWzFdWzJdLCBtLkFbMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbMl1bMF0sIG0uQVsyXVsyXSwgbS5BWzJdWzNdKSAvIGRldDtcclxuICBcclxuICByLkFbMl1bM10gPSAtTWF0ckRldGVybTN4MyhtLkFbMF1bMF0sIG0uQVswXVsxXSwgbS5BWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5BWzFdWzBdLCBtLkFbMV1bMV0sIG0uQVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsyXVswXSwgbS5BWzJdWzFdLCBtLkFbMl1bM10pIC8gZGV0O1xyXG4gIFxyXG4gIHIuQVszXVszXSA9IE1hdHJEZXRlcm0zeDMobS5BWzBdWzBdLCBtLkFbMF1bMV0sIG0uQVswXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uQVsxXVswXSwgbS5BWzFdWzFdLCBtLkFbMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkFbMl1bMF0sIG0uQVsyXVsxXSwgbS5BWzJdWzJdKSAvIGRldDtcclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNNdWxNYXRyKHYsIG0pIHtcclxuICBsZXQgdyA9IHYueCAqIG0uQVswXVszXSArIHYueSAqIG0uQVsxXVszXSArIHYueiAqIG0uQVsyXVszXSArIG0uQVszXVszXTtcclxuXHJcbiAgcmV0dXJuIFZlYzNTZXQoKHYueCAqIG0uQVswXVswXSArIHYueSAqIG0uQVsxXVswXSArIHYueiAqIG0uQVsyXVswXSArIG0uQVszXVswXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgKHYueCAqIG0uQVswXVsxXSArIHYueSAqIG0uQVsxXVsxXSArIHYueiAqIG0uQVsyXVsxXSArIG0uQVszXVsxXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgKHYueCAqIG0uQVswXVsyXSArIHYueSAqIG0uQVsxXVsyXSArIHYueiAqIG0uQVsyXVsyXSArIG0uQVszXVsyXSkgLyB3KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJWaWV3KExvYywgQXQsIFVwMSkgeyAgICAgICBcclxuICBsZXQgRGlyID0gVmVjM05vcm1hbGl6ZShWZWMzU3ViVmVjMyhBdCwgTG9jKSk7XHJcbiAgbGV0IFJpZ2h0ID0gVmVjM05vcm1hbGl6ZShWZWMzQ3Jvc3NWZWMzKERpciwgVXAxKSk7XHJcbiAgbGV0IFVwID0gVmVjM05vcm1hbGl6ZShWZWMzQ3Jvc3NWZWMzKFJpZ2h0LCBEaXIpKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBNYXRyKFJpZ2h0LngsIFVwLngsIC1EaXIueCwgMCxcclxuICAgICAgICAgICAgICAgICAgUmlnaHQueSwgVXAueSwgLURpci55LCAwLFxyXG4gICAgICAgICAgICAgICAgICBSaWdodC56LCBVcC56LCAtRGlyLnosIDAsXHJcbiAgICAgICAgICAgICAgICAgIC1WZWMzRG90VmVjMyhMb2MsIFJpZ2h0KSwgLVZlYzNEb3RWZWMzKExvYywgVXApLCBWZWMzRG90VmVjMyhMb2MsIERpciksIDEpXHJcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdHJGcnVzdHVtKEwsIFIsIEIsIFQsIE4sIEYpIHtcclxuICByZXR1cm4gbmV3IE1hdHIoMiAqIE4gLyAoUiAtIEwpLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAwLCAyICogTiAvIChUIC0gQiksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIChSICsgTCkgLyAoUiAtIEwpLCAoVCArIEIpIC8gKFQgLSBCKSwgKC1GIC0gTikgLyAoRiAtIE4pLCAtMSxcclxuICAgICAgICAgICAgICAgICAgMCwgMCwgMiAqIE4gKiBGIC8gKE4gLSBGKSwgMClcclxufSBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRyT3J0aG8oTCwgUiwgQiwgVCwgTiwgRikge1xyXG4gIHJldHVybiBuZXcgTWF0cigyIC8gKFIgLSBMKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgMCwgMiAvIChUIC0gQiksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgIDAsIDAsIC0yIC8gKEYgLSBOKSwgMCxcclxuICAgICAgICAgICAgICAgICAgLShSICsgTCkgLyAoUiAtIEwpLCAtKFQgKyBCKSAvIChUIC0gQiksIC0oRiArIE4pIC8gKEYgLSBOKSwgMSlcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlYzMge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgIHRoaXMueCA9IHgsXHJcbiAgICB0aGlzLnkgPSB5LFxyXG4gICAgdGhpcy56ID0gejtcclxuICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNTZXQxKEEpIHtcclxuICByZXR1cm4gbmV3IFZlYzMoQSwgQSwgQSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNTZXQoQSwgQiwgQykge1xyXG4gIHJldHVybiBuZXcgVmVjMyhBLCBCLCBDKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmVjM0FkZFZlYzMoVmVjMSwgVmVjMikge1xyXG4gIHJldHVybiBuZXcgVmVjMyhcclxuICAgIFZlYzEueCArIFZlYzIueCxcclxuICAgIFZlYzEueSArIFZlYzIueSxcclxuICAgIFZlYzEueiArIFZlYzIueilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNTdWJWZWMzKFZlYzEsIFZlYzIpIHtcclxuICByZXR1cm4gbmV3IFZlYzMoXHJcbiAgICBWZWMxLnggLSBWZWMyLngsXHJcbiAgICBWZWMxLnkgLSBWZWMyLnksXHJcbiAgICBWZWMxLnogLSBWZWMyLnopXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWZWMzTXVsTnVtKFZlYywgTikge1xyXG4gIHJldHVybiBuZXcgVmVjMyhcclxuICAgIFZlYy54ICogTixcclxuICAgIFZlYy55ICogTixcclxuICAgIFZlYy56ICogTilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNEaXZOdW0oVmVjLCBOKSB7XHJcbiAgaWYgKE4gPT0gMClcclxuICAgIHJldHVybiBuZXcgVmVjM1NldDEoMClcclxuICByZXR1cm4gbmV3IFZlYzMoXHJcbiAgICBWZWMueCAvIE4sXHJcbiAgICBWZWMueSAvIE4sXHJcbiAgICBWZWMueiAvIE4pXHJcbn1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNOZWcoVmVjKSB7XHJcbiAgcmV0dXJuIG5ldyBWZWMzKFxyXG4gICAgLVZlYy54LFxyXG4gICAgLVZlYy55LFxyXG4gICAgLVZlYy56KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmVjM0RvdFZlYzMoVmVjMSwgVmVjMikge1xyXG4gIHJldHVybiBWZWMxLnggKiBWZWMyLnggK1xyXG4gICAgICAgICBWZWMxLnkgKiBWZWMyLnkgK1xyXG4gICAgICAgICBWZWMxLnogKiBWZWMyLno7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWZWMzQ3Jvc3NWZWMzKFZlYzEsIFZlYzIpIHtcclxuICByZXR1cm4gbmV3IFZlYzMoXHJcbiAgICAtVmVjMS56ICogVmVjMi55ICsgVmVjMS55ICogVmVjMi56LFxyXG4gICAgLVZlYzEueCAqIFZlYzIueiArIFZlYzEueiAqIFZlYzIueCxcclxuICAgIC1WZWMxLnkgKiBWZWMyLnggKyBWZWMxLnggKiBWZWMyLnkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWZWMzTGVuKFZlYykge1xyXG4gIGxldCBsZW4gPSBWZWMzRG90VmVjMyhWZWMsIFZlYyk7XHJcblxyXG4gIGlmIChsZW4gPT0gMSB8fCBsZW4gPT0gMClcclxuICAgIHJldHVybiBsZW47XHJcbiAgcmV0dXJuIE1hdGgucG93KGxlbiwgMC41KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlYzNOb3JtYWxpemUoVmVjKSB7ICAgICAgIFxyXG4gIGxldCBsZW4gPSBWZWMzRG90VmVjMyhWZWMsIFZlYyk7XHJcblxyXG4gIGlmIChsZW4gPT0gMSB8fCBsZW4gPT0gMClcclxuICAgIHJldHVybiBWZWM7XHJcbiAgcmV0dXJuIFZlYzNEaXZOdW0oVmVjLCBNYXRoLnBvdyhsZW4sIDAuNSkpO1xyXG59ICAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvaW50VHJhbnNmb3JtKE0pIHtcclxuICByZXR1cm4gbmV3IFZlYzModi54ICogbS5BWzBdWzBdICsgdi55ICogbS5BWzFdWzBdICsgdi56ICogbS5BWzJdWzBdICsgbS5BWzNdWzBdLFxyXG4gICAgICAgICAgICAgICAgICB2LnggKiBtLkFbMF1bMV0gKyB2LnkgKiBtLkFbMV1bMV0gKyB2LnogKiBtLkFbMl1bMV0gKyBtLkFbM11bMV0sXHJcbiAgICAgICAgICAgICAgICAgIHYueCAqIG0uQVswXVsyXSArIHYueSAqIG0uQVsxXVsyXSArIHYueiAqIG0uQVsyXVsyXSArIG0uQVszXVsyXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZlY3RvclRyYW5zZm9ybShWLCBNKSB7XHJcbiAgcmV0dXJuIG5ldyBWZWMzKHYueCAqIG0uQVswXVswXSArIHYueSAqIG0uQVsxXVswXSArIHYueiAqIG0uQVsyXVswXSxcclxuICAgICAgICAgICAgICAgICAgdi54ICogbS5BWzBdWzFdICsgdi55ICogbS5BWzFdWzFdICsgdi56ICogbS5BWzJdWzFdLFxyXG4gICAgICAgICAgICAgICAgICB2LnggKiBtLkFbMF1bMl0gKyB2LnkgKiBtLkFbMV1bMl0gKyB2LnogKiBtLkFbMl1bMl0pXHJcbn1cclxuIiwiLyogUGxhdG9uaWMgYm9kaWVzOiBzaGFkZXJzLCBNTjcsIDExLjA2LjIwMjUgKi9cclxuXHJcbmV4cG9ydCBsZXQgdV90aW1lX2xvY2F0aW9uO1xyXG5leHBvcnQgbGV0IHVfZnJhbWVfd19sb2NhdGlvbjtcclxuZXhwb3J0IGxldCB1X2ZyYW1lX2hfbG9jYXRpb247XHJcbmV4cG9ydCBsZXQgdV9tYXRyX3ZwX2xvY2F0aW9uO1xyXG5leHBvcnQgbGV0IHVfbWF0cl93X2xvY2F0aW9uO1xyXG5leHBvcnQgbGV0IHVfY2FtX2xvY19sb2NhdGlvbjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2wsIHNoYWRlclN0ciwgdHlwZSkge1xyXG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuXHJcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU3RyKTtcclxuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcblxyXG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICBhbGVydChnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaGFkZXJzKGdsKSB7XHJcbiAgbGV0IHZzLCBmcztcclxuICBjb25zdCBmdDEgPSBmZXRjaChcIi4vdmVydC5nbHNsXCIpXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdnMgPSBkYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGZ0MiA9IGZldGNoKFwiLi9mcmFnLmdsc2xcIilcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBmcyA9IGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgYWxsRGF0YSA9IFByb21pc2UuYWxsKFtmdDEsIGZ0Ml0pO1xyXG4gIGFsbERhdGEudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCB2cywgZ2wuVkVSVEVYX1NIQURFUik7XHJcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGZzLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICBjb25zdCBCdWYgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcclxuICAgICAgY29uc29sZS5sb2coQnVmKTtcclxuICAgIH1cclxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgdV90aW1lX2xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwiVGltZVwiKTtcclxuICAgIHVfZnJhbWVfd19sb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcIkZyYW1lV1wiKTtcclxuICAgIHVfZnJhbWVfaF9sb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcIkZyYW1lSFwiKTtcclxuICAgIHVfbWF0cl92cF9sb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcIk1hdHJWUFwiKTtcclxuICAgIHVfbWF0cl93X2xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwiTWF0cldcIik7XHJcbiAgICB1X2NhbV9sb2NfbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJDYW1Mb2NcIik7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogUGxhdG9uaWMgYm9kaWVzLCBNTjcsIDExLjA2LjIwMjUgKi9cclxuaW1wb3J0ICogYXMgbXRoIGZyb20gXCIuL21hdGguanNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1ZlcnRpY2VzKHZlcnRpY2VzLCBpbmRpY2VzKSB7XHJcbiAgbGV0IHZlcnRpY2VzQXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZlcnRpY2VzQXJyYXlbaV0gPSBzdHJ1Y3R1cmVkQ2xvbmUodmVydGljZXNbaW5kaWNlc1tpXV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZlcnRpY2VzQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0aWNlc1RvQXJyYXkodmVydGljZXMpIHtcclxuICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJyYXlbaSAqIDEwXSA9IHZlcnRpY2VzW2ldWzBdWzBdO1xyXG4gICAgYXJyYXlbaSAqIDEwICsgMV0gPSB2ZXJ0aWNlc1tpXVswXVsxXTtcclxuICAgIGFycmF5W2kgKiAxMCArIDJdID0gdmVydGljZXNbaV1bMF1bMl07XHJcbiAgICBhcnJheVtpICogMTAgKyAzXSA9IHZlcnRpY2VzW2ldWzFdWzBdO1xyXG4gICAgYXJyYXlbaSAqIDEwICsgNF0gPSB2ZXJ0aWNlc1tpXVsxXVsxXTtcclxuICAgIGFycmF5W2kgKiAxMCArIDVdID0gdmVydGljZXNbaV1bMV1bMl07XHJcbiAgICBhcnJheVtpICogMTAgKyA2XSA9IHZlcnRpY2VzW2ldWzFdWzNdO1xyXG4gICAgYXJyYXlbaSAqIDEwICsgN10gPSB2ZXJ0aWNlc1tpXVsyXVswXTtcclxuICAgIGFycmF5W2kgKiAxMCArIDhdID0gdmVydGljZXNbaV1bMl1bMV07XHJcbiAgICBhcnJheVtpICogMTAgKyA5XSA9IHZlcnRpY2VzW2ldWzJdWzJdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRvTm9ybWFscyh2ZXJ0aWNlcywgaW5kaWNlcykge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZlcnRpY2VzW2ldWzJdID0gWzAsIDAsIDBdO1xyXG4gIH1cclxuIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkgKz0gMylcclxuICB7XHJcbiAgICBsZXQgbjAgPSBpbmRpY2VzW2ldLCBuMSA9IGluZGljZXNbaSArIDFdLCBuMiA9IGluZGljZXNbaSArIDJdOyBcclxuXHJcbiAgICBsZXQgcDAgPSBtdGguVmVjM1NldCh2ZXJ0aWNlc1tuMF1bMF1bMF0sIHZlcnRpY2VzW24wXVswXVsxXSwgdmVydGljZXNbbjBdWzBdWzJdKSxcclxuICAgICAgICBwMSA9IG10aC5WZWMzU2V0KHZlcnRpY2VzW24xXVswXVswXSwgdmVydGljZXNbbjFdWzBdWzFdLCB2ZXJ0aWNlc1tuMV1bMF1bMl0pLFxyXG4gICAgICAgIHAyID0gbXRoLlZlYzNTZXQodmVydGljZXNbbjJdWzBdWzBdLCB2ZXJ0aWNlc1tuMl1bMF1bMV0sIHZlcnRpY2VzW24yXVswXVsyXSk7XHJcbiAgICBsZXQgbiA9IG10aC5WZWMzTm9ybWFsaXplKG10aC5WZWMzQ3Jvc3NWZWMzKG10aC5WZWMzU3ViVmVjMyhwMSwgcDApLCBtdGguVmVjM1N1YlZlYzMocDIsIHAwKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgbjAwID0gbXRoLlZlYzNTZXQodmVydGljZXNbbjBdWzJdWzBdLCB2ZXJ0aWNlc1tuMF1bMl1bMV0sIHZlcnRpY2VzW24wXVsyXVsyXSksXHJcbiAgICAgICAgbjAxID0gbXRoLlZlYzNTZXQodmVydGljZXNbbjFdWzJdWzBdLCB2ZXJ0aWNlc1tuMV1bMl1bMV0sIHZlcnRpY2VzW24xXVsyXVsyXSksXHJcbiAgICAgICAgbjAyID0gbXRoLlZlYzNTZXQodmVydGljZXNbbjJdWzJdWzBdLCB2ZXJ0aWNlc1tuMl1bMl1bMV0sIHZlcnRpY2VzW24yXVsyXVsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGxldCB2MCA9IG10aC5WZWMzQWRkVmVjMyhuMDAsIG4pLFxyXG4gICAgICAgIHYxID0gbXRoLlZlYzNBZGRWZWMzKG4wMSwgbiksIFxyXG4gICAgICAgIHYyID0gbXRoLlZlYzNBZGRWZWMzKG4wMiwgbik7XHJcbiAgICAgIFxyXG4gICAgdmVydGljZXNbbjBdWzJdID0gW3YwLngsIHYwLnksIHYwLnpdO1xyXG4gICAgdmVydGljZXNbbjFdWzJdID0gW3YxLngsIHYxLnksIHYxLnpdO1xyXG4gICAgdmVydGljZXNbbjJdWzJdID0gW3YyLngsIHYyLnksIHYyLnpdO1xyXG4gIH1cclxuIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCB2aSA9IG10aC5WZWMzU2V0KHZlcnRpY2VzW2ldWzJdWzBdLCB2ZXJ0aWNlc1tpXVsyXVsxXSwgdmVydGljZXNbaV1bMl1bMl0pO1xyXG4gICAgbGV0IG4gPSBtdGguVmVjM05vcm1hbGl6ZSh2aSk7XHJcbiAgICB2ZXJ0aWNlc1tpXVsyXSA9IFtuLngsIG4ueSwgbi56XTsgXHJcbiAgfVxyXG4gIHZlcnRpY2VzO1xyXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1YmUoYSkge1xyXG4gIC8qIGxldCB2ZXJ0aWNlcyA9IFtcclxuICAgIC1hLCAtYSwgLWEsXHJcbiAgICAwLjUsIDEsIDEsIDEsXHJcbiAgICAtMSwgLTEsIC0xLFxyXG5cclxuICAgIC1hLCAtYSwgYSxcclxuICAgIDAuNSwgMSwgMSwgMSxcclxuICAgIC0xLCAtMSwgMSxcclxuXHJcbiAgICBhLCAtYSwgYSxcclxuICAgIDAuNSwgMSwgMSwgMSxcclxuICAgIDEsIC0xLCAxLFxyXG5cclxuICAgIGEsIC1hLCAtYSxcclxuICAgIDAuNSwgMSwgMSwgMSxcclxuICAgIDEsIC0xLCAtMSxcclxuXHJcbiAgICAtYSwgYSwgLWEsXHJcbiAgICAwLjUsIDEsIDEsIDEsXHJcbiAgICAtMSwgMSwgLTEsXHJcblxyXG4gICAgLWEsIGEsIGEsXHJcbiAgICAwLjUsIDEsIDEsIDEsXHJcbiAgICAtMSwgMSwgMSxcclxuXHJcbiAgICBhLCBhLCBhLFxyXG4gICAgMC41LCAxLCAxLCAxLFxyXG4gICAgMSwgMSwgMSxcclxuXHJcbiAgICBhLCBhLCAtYSxcclxuICAgIDAuNSwgMSwgMSwgMSxcclxuICAgIDEsIDEsIC0xXHJcbiAgXSAqL1xyXG5cclxuICBsZXQgdmVydGljZXMgPSBbXHJcbiAgICBbWy1hLCAtYSwgLWFdLFxyXG4gICAgWzAuNSwgMSwgMSwgMV0sXHJcbiAgICBbLTEsIC0xLCAtMV1dLFxyXG5cclxuICAgIFtbLWEsIC1hLCBhXSxcclxuICAgIFswLjUsIDEsIDEsIDFdLFxyXG4gICAgWy0xLCAtMSwgMV1dLFxyXG5cclxuICAgIFtbYSwgLWEsIGFdLFxyXG4gICAgWzAuNSwgMSwgMSwgMV0sXHJcbiAgICBbMSwgLTEsIDFdXSxcclxuXHJcbiAgICBbW2EsIC1hLCAtYV0sXHJcbiAgICBbMC41LCAxLCAxLCAxXSxcclxuICAgIFsxLCAtMSwgLTFdXSxcclxuXHJcbiAgICBbWy1hLCBhLCAtYV0sXHJcbiAgICBbMC41LCAxLCAxLCAxXSxcclxuICAgIFstMSwgMSwgLTFdXSxcclxuXHJcbiAgICBbWy1hLCBhLCBhXSxcclxuICAgIFswLjUsIDEsIDEsIDFdLFxyXG4gICAgWy0xLCAxLCAxXV0sXHJcblxyXG4gICAgW1thLCBhLCBhXSxcclxuICAgIFswLjUsIDEsIDEsIDFdLFxyXG4gICAgWzEsIDEsIDFdXSxcclxuXHJcbiAgICBbW2EsIGEsIC1hXSxcclxuICAgIFswLjUsIDEsIDEsIDFdLFxyXG4gICAgWzEsIDEsIC0xXV1cclxuICBdXHJcblxyXG4gIGxldCBpbmRpY2VzID0gW1xyXG4gICAgMywgMiwgMSxcclxuICAgIDQsIDMsIDEsXHJcblxyXG4gICAgMSwgMiwgNSxcclxuICAgIDYsIDUsIDIsXHJcblxyXG4gICAgMiwgMywgNixcclxuICAgIDcsIDYsIDMsXHJcblxyXG4gICAgMywgNCwgOCxcclxuICAgIDMsIDgsIDcsXHJcblxyXG4gICAgMSwgNSwgOCxcclxuICAgIDEsIDQsIDgsXHJcblxyXG4gICAgNSwgNiwgOCxcclxuICAgIDYsIDcsIDhcclxuICBdXHJcblxyXG4gIHJldHVybiBbdmVydGljZXMsIGluZGljZXNdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV0cmFoZWRyb24oYSkge1xyXG4gIGxldCB2ZXJ0aWNlcyA9IFtcclxuICAgIFtbLWEsIC1hLCAtYV0sXHJcbiAgICBbMSwgMSwgMCwgMV0sXHJcbiAgICBbLTEsIC0xLCAtMV1dLFxyXG5cclxuICAgIFtbYSwgLWEsIGFdLFxyXG4gICAgWzEsIDEsIDAsIDFdLFxyXG4gICAgWzEsIC0xLCAxXV0sXHJcblxyXG4gICAgW1stYSwgYSwgYV0sXHJcbiAgICBbMSwgMSwgMCwgMV0sXHJcbiAgICBbLTEsIDEsIDFdXSxcclxuXHJcbiAgICBbW2EsIGEsIC1hXSxcclxuICAgIFsxLCAxLCAwLCAxXSxcclxuICAgIFsxLCAxLCAtMV1dXHJcbiAgXVxyXG5cclxuICBsZXQgaW5kaWNlcyA9IFtcclxuICAgIDEsIDIsIDQsXHJcbiAgICAxLCAzLCA0LFxyXG4gICAgMiwgMywgNCxcclxuICAgIDEsIDIsIDNcclxuICBdXHJcblxyXG4gIHJldHVybiBbdmVydGljZXMsIGluZGljZXNdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2N0YWhlZHJvbihhKSB7XHJcbiAgbGV0IHZlcnRpY2VzID0gW1xyXG4gICAgW1swLCAtYSwgMF0sXHJcbiAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICBbMCwgLTEsIDBdXSxcclxuICAgICAgICAgIFxyXG4gICAgW1swLCAwLCAtYV0sXHJcbiAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICBbMCwgMCwgLTFdXSxcclxuXHJcbiAgICBbWy1hLCAwLCAwXSxcclxuICAgIFsxLCAwLCAwLCAxXSxcclxuICAgIFstMSwgMCwgMF1dLFxyXG5cclxuICAgIFtbMCwgMCwgYV0sXHJcbiAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICBbMCwgMCwgMV1dLFxyXG5cclxuICAgIFtbYSwgMCwgMF0sXHJcbiAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICBbMSwgMCwgMF1dLFxyXG5cclxuICAgIFtbMCwgYSwgMF0sXHJcbiAgICBbMSwgMCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG4gIF1cclxuXHJcbiAgbGV0IGluZGljZXMgPSBbXHJcbiAgICAxLCAyLCAzLFxyXG4gICAgMSwgMiwgNSxcclxuICAgIDEsIDMsIDQsXHJcbiAgICAxLCA0LCA1LFxyXG5cclxuICAgIDYsIDIsIDMsXHJcbiAgICA2LCAyLCA1LFxyXG4gICAgNiwgMywgNCxcclxuICAgIDYsIDQsIDVcclxuICBdXHJcblxyXG4gIHJldHVybiBbdmVydGljZXMsIGluZGljZXNdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJY29zYWhlZHJvbihhKSB7XHJcbiAgbGV0IHNpbjE4ID0gTWF0aC5zaW4oMTggKiBtdGguUEkgLyAxODApLCBjb3MxOCA9IE1hdGguY29zKDE4ICogbXRoLlBJIC8gMTgwKTtcclxuICBsZXQgc2luMjM0ID0gTWF0aC5zaW4oMjM0ICogbXRoLlBJIC8gMTgwKSwgY29zMjM0ID0gTWF0aC5jb3MoMjM0ICogbXRoLlBJIC8gMTgwKTtcclxuICBsZXQgc2luNTQgPSBNYXRoLnNpbig1NCAqIG10aC5QSSAvIDE4MCksIGNvczU0ID0gTWF0aC5jb3MoNTQgKiBtdGguUEkgLyAxODApO1xyXG4gIGxldCBzaW4xOTggPSBNYXRoLnNpbigxOTggKiBtdGguUEkgLyAxODApLCBjb3MxOTggPSBNYXRoLmNvcygxOTggKiBtdGguUEkgLyAxODApO1xyXG4gIGxldCB5ID0gYSAvIE1hdGguc3FydCg1KTtcclxuICBsZXQgY29lZiA9IDIgKiB5O1xyXG5cclxuICBsZXQgdmVydGljZXMgPSBbXHJcbiAgICBbWzAsIC0xLCAwXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8xXHJcbiAgICBbMSwgMCwgMSwgMV0sXHJcbiAgICBbMCwgLTEsIDBdXSxcclxuICAgICAgICAgIFxyXG4gICAgW1tjb2VmICogY29zMjM0LCAteSwgY29lZiAqIHNpbjIzNF0sICAgICAgICAgIC8vMlxyXG4gICAgWzEsIDAsIDEsIDFdLFxyXG4gICAgWzAsIDAsIC0xXV0sXHJcblxyXG4gICAgW1stY29lZiAqIGNvczE4LCAteSwgY29lZiAqIHNpbjE4XSwgICAgICAgICAgIC8vM1xyXG4gICAgWzEsIDAsIDEsIDFdLFxyXG4gICAgWy0xLCAwLCAwXV0sXHJcblxyXG4gICAgW1swLCAteSwgMV0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vNFxyXG4gICAgWzEsIDAsIDEsIDFdLFxyXG4gICAgWzAsIDAsIDFdXSxcclxuXHJcbiAgICBbW2NvZWYgKiBjb3MxOCwgLXksIGNvZWYgKiBzaW4xOF0sICAgICAgICAgICAgLy81XHJcbiAgICBbMSwgMCwgMSwgMV0sXHJcbiAgICBbMSwgMCwgMF1dLFxyXG5cclxuICAgIFtbLWNvZWYgKiBjb3MyMzQsIC15LCBjb2VmICogc2luMjM0XSwgICAgICAgICAvLzZcclxuICAgIFsxLCAwLCAxLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1swLCB5LCAtY29lZl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vN1xyXG4gICAgWzEsIDAsIDEsIDFdLFxyXG4gICAgWzAsIDEsIDBdXSxcclxuXHJcbiAgICBbW2NvZWYgKiBjb3MxOTgsIHksIGNvZWYgKiBzaW4xOThdLCAgICAgICAgICAgLy84XHJcbiAgICBbMSwgMCwgMSwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbLWNvZWYgKiBjb3M1NCwgeSwgY29lZiAqIHNpbjU0XSwgICAgICAgICAgICAvLzlcclxuICAgIFsxLCAwLCAxLCAxXSxcclxuICAgIFswLCAxLCAwXV0sICAgICAgICBcclxuXHJcbiAgICBbW2NvZWYgKiBjb3M1NCwgeSwgY29lZiAqIHNpbjU0XSwgICAgICAgICAgICAgLy8xMFxyXG4gICAgWzEsIDAsIDEsIDFdLFxyXG4gICAgWzAsIDEsIDBdXSwgICAgICAgICAgIFxyXG5cclxuICAgIFtbLWNvZWYgKiBjb3MxOTgsIHksIGNvZWYgKiBzaW4xOThdLCAgICAgICAgICAvLzExXHJcbiAgICBbMSwgMCwgMSwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbMCwgMSwgMF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzEyXHJcbiAgICBbMSwgMCwgMSwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG4gIF0gICAgICAgICAgICAgXHJcblxyXG4gIGxldCBpbmRpY2VzID0gW1xyXG4gICAgMSwgMiwgMyxcclxuICAgIDEsIDMsIDQsXHJcbiAgICAxLCA0LCA1LFxyXG4gICAgMSwgNSwgNixcclxuICAgIDEsIDIsIDYsXHJcblxyXG4gICAgMiwgNywgNixcclxuICAgIDcsIDYsIDExLFxyXG4gICAgNiwgMTEsIDUsXHJcbiAgICAxMSwgNSwgMTAsXHJcbiAgICA1LCAxMCwgNCxcclxuICAgIDEwLCA0LCA5LFxyXG4gICAgNCwgOSwgMyxcclxuICAgIDksIDMsIDgsXHJcbiAgICAzLCA4LCAyLFxyXG4gICAgOCwgMiwgNyxcclxuICAgIFxyXG4gICAgMTIsIDcsIDgsIFxyXG4gICAgMTIsIDgsIDksXHJcbiAgICAxMiwgOSwgMTAsXHJcbiAgICAxMiwgMTAsIDExLFxyXG4gICAgMTIsIDExLCA3XHJcbiAgXVxyXG5cclxuICByZXR1cm4gW3ZlcnRpY2VzLCBpbmRpY2VzXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9kZWNhaGVkcm9uKGEpIHtcclxuICBsZXQgc2luMTggPSBNYXRoLnNpbigxOCAqIG10aC5QSSAvIDE4MCksIGNvczE4ID0gTWF0aC5jb3MoMTggKiBtdGguUEkgLyAxODApO1xyXG4gIGxldCBzaW4yMzQgPSBNYXRoLnNpbigyMzQgKiBtdGguUEkgLyAxODApLCBjb3MyMzQgPSBNYXRoLmNvcygyMzQgKiBtdGguUEkgLyAxODApO1xyXG4gIGxldCBzaW41NCA9IE1hdGguc2luKDU0ICogbXRoLlBJIC8gMTgwKSwgY29zNTQgPSBNYXRoLmNvcyg1NCAqIG10aC5QSSAvIDE4MCk7XHJcbiAgbGV0IHNpbjE5OCA9IE1hdGguc2luKDE5OCAqIG10aC5QSSAvIDE4MCksIGNvczE5OCA9IE1hdGguY29zKDE5OCAqIG10aC5QSSAvIDE4MCk7XHJcbiAgbGV0IHkgPSBhIC8gTWF0aC5zcXJ0KDUpO1xyXG4gIGxldCBjb2VmID0gMiAqIHk7XHJcblxyXG4gIGxldCB2ZXJ0aWNlc0ljb3NhaGVkcm9uID0gW1xyXG4gICAgWzAsIDAsIDBdLFxyXG4gICAgWzAsIC0xLCAwXSxcclxuICAgIFtjb2VmICogY29zMjM0LCAteSwgY29lZiAqIHNpbjIzNF0sXHJcbiAgICBbLWNvZWYgKiBjb3MxOCwgLXksIGNvZWYgKiBzaW4xOF0sXHJcbiAgICBbMCwgLXksIDFdLFxyXG4gICAgW2NvZWYgKiBjb3MxOCwgLXksIGNvZWYgKiBzaW4xOF0sXHJcbiAgICBbLWNvZWYgKiBjb3MyMzQsIC15LCBjb2VmICogc2luMjM0XSxcclxuICAgIFswLCB5LCAtY29lZl0sXHJcbiAgICBbY29lZiAqIGNvczE5OCwgeSwgY29lZiAqIHNpbjE5OF0sXHJcbiAgICBbLWNvZWYgKiBjb3M1NCwgeSwgY29lZiAqIHNpbjU0XSxcclxuICAgIFtjb2VmICogY29zNTQsIHksIGNvZWYgKiBzaW41NF0sXHJcbiAgICBbLWNvZWYgKiBjb3MxOTgsIHksIGNvZWYgKiBzaW4xOThdLFxyXG4gICAgWzAsIDEsIDBdXTtcclxuXHJcbiAgbGV0IHZlcnRpY2VzID0gW1xyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsxXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMl1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzNdWzBdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzFdWzFdICsgdmVydGljZXNJY29zYWhlZHJvblsyXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bM11bMV0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMV1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzJdWzJdICsgdmVydGljZXNJY29zYWhlZHJvblszXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAtMSwgMF1dLFxyXG4gICAgICAgICAgXHJcbiAgICBbWyh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzFdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bM11bMF0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMV1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzRdWzFdICsgdmVydGljZXNJY29zYWhlZHJvblszXVsxXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblsxXVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzNdWzJdKSAvIDMuMF0sXHJcbiAgICBbMC42LCAwLjgsIDAsIDFdLFxyXG4gICAgWzAsIDAsIC0xXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsxXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzBdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzFdWzFdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNV1bMV0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMV1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzRdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFstMSwgMCwgMF1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bMV1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzZdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblsxXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzFdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls2XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNV1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMCwgMV1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bMV1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzZdWzBdICsgdmVydGljZXNJY29zYWhlZHJvblsyXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblsxXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzJdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzFdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls2XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMl1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMSwgMCwgMF1dLFxyXG4gICAgXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsyXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzddWzBdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzJdWzFdICsgdmVydGljZXNJY29zYWhlZHJvbls2XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bN11bMV0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMl1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzZdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls3XVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvbls3XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls3XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVsxXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls3XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNl1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvbls2XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls2XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzFdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVsxXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls2XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsxMF1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNV1bMF0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzFdICsgdmVydGljZXNJY29zYWhlZHJvblsxMV1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls1XVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sICAgICAgICBcclxuXHJcbiAgICBbWyh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzBdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzVdWzJdKSAvIDMuMF0sXHJcbiAgICBbMC42LCAwLjgsIDAsIDFdLFxyXG4gICAgWzAsIDEsIDBdXSwgICAgICAgICAgIFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMF0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzFdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMV0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bM11bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzRdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls5XVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblszXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bNF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzldWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzNdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls0XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bM11bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzhdWzBdICsgdmVydGljZXNJY29zYWhlZHJvbls5XVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblszXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzldWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzNdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls4XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bM11bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzhdWzBdICsgdmVydGljZXNJY29zYWhlZHJvblsyXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvblszXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzJdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzNdWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls4XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMl1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG5cclxuICAgIFtbKHZlcnRpY2VzSWNvc2FoZWRyb25bN11bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzhdWzBdICsgdmVydGljZXNJY29zYWhlZHJvblsyXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls3XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzJdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzddWzJdICsgdmVydGljZXNJY29zYWhlZHJvbls4XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMl1bMl0pIC8gMy4wXSxcclxuICAgIFswLjYsIDAuOCwgMCwgMV0sXHJcbiAgICBbMCwgMSwgMF1dLFxyXG4gICAgXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvbls3XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls3XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsxXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls3XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvbls5XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVswXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls5XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsxXSkgLyAzLjAsXHJcbiAgICAodmVydGljZXNJY29zYWhlZHJvbls5XVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bOF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvbls5XVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzBdICsgdmVydGljZXNJY29zYWhlZHJvblsxMl1bMF0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bOV1bMV0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTJdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzldWzJdICsgdmVydGljZXNJY29zYWhlZHJvblsxMF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsxMV1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEwXVswXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTJdWzBdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTBdWzFdICsgdmVydGljZXNJY29zYWhlZHJvblsxMl1bMV0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzJdICsgdmVydGljZXNJY29zYWhlZHJvblsxMF1bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcblxyXG4gICAgW1sodmVydGljZXNJY29zYWhlZHJvblsxMV1bMF0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzddWzBdICsgdmVydGljZXNJY29zYWhlZHJvblsxMl1bMF0pIC8gMy4wLFxyXG4gICAgKHZlcnRpY2VzSWNvc2FoZWRyb25bMTFdWzFdICsgdmVydGljZXNJY29zYWhlZHJvbls3XVsxXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bMTJdWzFdKSAvIDMuMCxcclxuICAgICh2ZXJ0aWNlc0ljb3NhaGVkcm9uWzExXVsyXSArIHZlcnRpY2VzSWNvc2FoZWRyb25bN11bMl0gKyB2ZXJ0aWNlc0ljb3NhaGVkcm9uWzEyXVsyXSkgLyAzLjBdLFxyXG4gICAgWzAuNiwgMC44LCAwLCAxXSxcclxuICAgIFswLCAxLCAwXV0sXHJcbiAgXTtcclxuXHJcbiAgbGV0IGluZGljZXMgPSBbXHJcbiAgICAwLCAxLCAxMSxcclxuICAgIDAsIDExLCAxMyxcclxuICAgIDExLCAxMiwgMTMsXHJcblxyXG4gICAgMSwgMiwgOSxcclxuICAgIDEsIDksIDExLFxyXG4gICAgOSwgMTAsIDExLFxyXG5cclxuICAgIDIsIDMsIDcsXHJcbiAgICAyLCA3LCA5LFxyXG4gICAgNywgOCwgOSxcclxuXHJcbiAgICAzLCA0LCA1LFxyXG4gICAgMywgNSwgNyxcclxuICAgIDUsIDYsIDcsXHJcblxyXG4gICAgMCwgNCwgMTMsXHJcbiAgICA0LCA1LCAxMyxcclxuICAgIDUsIDEzLCAxNCxcclxuXHJcblxyXG4gICAgMTIsIDEzLCAxNCxcclxuICAgIDEyLCAxNCwgMTUsXHJcbiAgICAxMiwgMTUsIDE2LFxyXG5cclxuICAgIDEwLCAxMSwgMTIsXHJcbiAgICAxMCwgMTIsIDE3LFxyXG4gICAgMTIsIDE2LCAxNyxcclxuXHJcbiAgICA4LCA5LCAxMCxcclxuICAgIDgsIDEwLCAxNyxcclxuICAgIDgsIDE3LCAxOCxcclxuXHJcbiAgICA2LCA3LCA4LFxyXG4gICAgNiwgOCwgMTgsXHJcbiAgICA2LCAxOCwgMTksXHJcblxyXG4gICAgNSwgNiwgMTQsXHJcbiAgICA2LCAxNCwgMTUsXHJcbiAgICA2LCAxNSwgMTksXHJcblxyXG5cclxuICAgIDAsIDEsIDIsXHJcbiAgICAwLCAyLCA0LFxyXG4gICAgMiwgMywgNCxcclxuXHJcbiAgICAxNSwgMTYsIDE3LFxyXG4gICAgMTUsIDE3LCAxOSxcclxuICAgIDE3LCAxOCwgMTlcclxuICBdXHJcblxyXG4gIHJldHVybiBbdmVydGljZXMsIGluZGljZXNdXHJcbn1cclxuIiwiLyogUGxhdG9uaWMgYm9kaWVzOiBtYWluIGZpbGUsIE1ONywgMTEuMDYuMjUgKi9cclxuaW1wb3J0ICogYXMgbXRoIGZyb20gXCIuL21hdGguanNcIlxyXG5pbXBvcnQge1xyXG4gIGluaXRTaGFkZXJzLFxyXG4gIHVfdGltZV9sb2NhdGlvbixcclxuICB1X2ZyYW1lX3dfbG9jYXRpb24sXHJcbiAgdV9mcmFtZV9oX2xvY2F0aW9uLFxyXG4gIHVfbWF0cl92cF9sb2NhdGlvbixcclxuICB1X21hdHJfd19sb2NhdGlvbixcclxuICB1X2NhbV9sb2NfbG9jYXRpb25cclxufSBmcm9tIFwiLi9zaGFkZXJzLmpzXCJcclxuaW1wb3J0IHtcclxuICBjb252ZXJ0VG9WZXJ0aWNlcyxcclxuICB2ZXJ0aWNlc1RvQXJyYXksXHJcbiAgYXV0b05vcm1hbHMsXHJcbiAgY3JlYXRlQ3ViZSxcclxuICBjcmVhdGVUZXRyYWhlZHJvbixcclxuICBjcmVhdGVPY3RhaGVkcm9uLFxyXG4gIGNyZWF0ZUljb3NhaGVkcm9uLFxyXG4gIGNyZWF0ZURvZGVjYWhlZHJvblxyXG59IGZyb20gXCIuL3BsYXRvbi5qc1wiXHJcblxyXG5sZXQgZ2w7XHJcbmxldCBzdGFydFRpbWU7XHJcbmxldCBGcmFtZVcsIEZyYW1lSDtcclxubGV0IFByb2pTaXplID0gMC4xLCBQcm9qRmFyQ2xpcCA9IDEwMDAsIFByb2pEaXN0ID0gUHJvalNpemU7XHJcbmxldCBNYXRyUCwgTWF0clZQLCBtYXRyV1ZQLCBNYXRyViwgbWF0clc7XHJcbmxldCBtYXRyV0N1YmUgPSBtdGguTWF0cklkZW50aXR5KCksXHJcbiAgbWF0cldUZXRyYWhlZHJvbiA9IG10aC5NYXRySWRlbnRpdHkoKSxcclxuICBtYXRyV09jdGFoZWRyb24gPSBtdGguTWF0cklkZW50aXR5KCksXHJcbiAgbWF0cldJY29zYWhlZHJvbiA9IG10aC5NYXRySWRlbnRpdHkoKSxcclxuICBtYXRyV0RvZGVjYWhlZHJvbiA9IG10aC5NYXRySWRlbnRpdHkoKTtcclxubGV0IExvYyA9IG10aC5WZWMzU2V0MSg1KTtcclxubGV0IEF0ID0gbXRoLlZlYzNTZXQxKDApO1xyXG5sZXQgVXAgPSBtdGguVmVjM1NldCgwLCAxLCAwKTtcclxubGV0IGlzUGF1c2UgPSBmYWxzZTtcclxubGV0IGlzQ3ViZSA9IGZhbHNlLCBpc1RldHJhaGVkcm9uID0gZmFsc2UsIGlzT2N0YWhlZHJvbiA9IGZhbHNlLCBpc0ljb3NhaGVkcm9uID0gZmFsc2UsIGlzRG9kZWNhaGVkcm9uID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBDYW1TZXQoTG9jLCBBdCwgVXApIHtcclxuICBNYXRyViA9IG10aC5NYXRyVmlldyhMb2MsIEF0LCBVcCk7XHJcbiAgTWF0clZQID0gbXRoLk1hdHJNdWxNYXRyKE1hdHJWLCBNYXRyUCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRHTChjYW52YXMpIHtcclxuICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xyXG4gIGdsLnZpZXdwb3J0V2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgZ2wudmlld3BvcnRIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gIEZyYW1lVyA9IGNhbnZhcy53aWR0aCAqIDEuMDtcclxuICBGcmFtZUggPSBjYW52YXMuaGVpZ2h0ICogMS4wO1xyXG4gIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvalNldCgpIHtcclxuICBsZXQgcngsIHJ5O1xyXG5cclxuICByeCA9IHJ5ID0gUHJvalNpemU7XHJcblxyXG4gIGlmIChGcmFtZVcgPj0gRnJhbWVIKVxyXG4gICAgcnggKj0gRnJhbWVXIC8gRnJhbWVIICogMS4wO1xyXG4gIGVsc2VcclxuICAgIHJ5ICo9IEZyYW1lSCAvIEZyYW1lVyAqIDEuMDtcclxuXHJcbiAgTWF0clAgPVxyXG4gICAgbXRoLk1hdHJGcnVzdHVtKC1yeCAvIDIsIHJ4IC8gMiwgLXJ5IC8gMiwgcnkgLyAyLFxyXG4gICAgICBQcm9qRGlzdCwgUHJvakZhckNsaXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIodmVydGljZXNCdWZmZXIsIHZlcnRpY2VzQXJyYXksIGluZGljZXNBcnJheSkge1xyXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0aWNlc0J1ZmZlcik7XHJcbiAgZ2wuYnVmZmVyRGF0YShcclxuICAgIGdsLkFSUkFZX0JVRkZFUixcclxuICAgIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXNBcnJheSksXHJcbiAgICBnbC5TVEFUSUNfRFJBV1xyXG4gICk7XHJcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XHJcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDQwLCAwKTtcclxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcclxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDEsIDQsIGdsLkZMT0FULCBmYWxzZSwgNDAsIDEyKTtcclxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyKTtcclxuICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDIsIDMsIGdsLkZMT0FULCBmYWxzZSwgNDAsIDI4KTtcclxuXHJcbiAgaWYgKGluZGljZXNBcnJheS5sZW5ndGggIT0gMCkge1xyXG4gICAgY29uc3QgaW5kaWNlc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlc0J1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKFxyXG4gICAgICBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUixcclxuICAgICAgbmV3IFVpbnQzMkFycmF5KGluZGljZXNBcnJheSksXHJcbiAgICAgIGdsLlNUQVRJQ19EUkFXXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyogZnVuY3Rpb24gYnVmVXBkYXRlKGJ1ZklELCBkYXRhKSB7XHJcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZklEKTtcclxuICBnbC5idWZmZXJEYXRhKFxyXG4gICAgZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgbmV3IEZsb2F0MzJBcnJheShkYXRhKSxcclxuICAgIGdsLlNUQVRJQ19EUkFXXHJcbiAgKTtcclxufSAqL1xyXG5cclxubGV0IGJ1ZmZlckN1YmU7XHJcbmxldCBjdWJlID0gY3JlYXRlQ3ViZSgxKTtcclxubGV0IHZlcnRpY2VzQ3ViZSA9IGN1YmVbMF07XHJcbmxldCBpbmRpY2VzQ3ViZSA9IGN1YmVbMV0ubWFwKChlKSA9PiBlIC0gMSk7XHJcblxyXG5sZXQgYnVmZmVyVGV0cmFoZWRyb247XHJcbmxldCB0ZXRyYWhlZHJvbiA9IGNyZWF0ZVRldHJhaGVkcm9uKDEpO1xyXG5sZXQgdmVydGljZXNUZXRyYWhlZHJvbiA9IHRldHJhaGVkcm9uWzBdO1xyXG5sZXQgaW5kaWNlc1RldHJhaGVkcm9uID0gdGV0cmFoZWRyb25bMV0ubWFwKChlKSA9PiBlIC0gMSk7XHJcblxyXG5sZXQgYnVmZmVyT2N0YWhlZHJvbjtcclxubGV0IG9jdGFoZWRyb24gPSBjcmVhdGVPY3RhaGVkcm9uKDEpO1xyXG5sZXQgdmVydGljZXNPY3RhaGVkcm9uID0gb2N0YWhlZHJvblswXTtcclxubGV0IGluZGljZXNPY3RhaGVkcm9uID0gb2N0YWhlZHJvblsxXS5tYXAoKGUpID0+IGUgLSAxKTtcclxuXHJcbmxldCBidWZmZXJJY29zYWhlZHJvbjtcclxubGV0IGljb3NhaGVkcm9uID0gY3JlYXRlSWNvc2FoZWRyb24oMSk7XHJcbmxldCB2ZXJ0aWNlc0ljb3NhaGVkcm9uID0gaWNvc2FoZWRyb25bMF07XHJcbmxldCBpbmRpY2VzSWNvc2FoZWRyb24gPSBpY29zYWhlZHJvblsxXS5tYXAoKGUpID0+IGUgLSAxKTtcclxuXHJcbmxldCBidWZmZXJEb2RlY2FoZWRyb247XHJcbmxldCBkb2RlY2FoZWRyb24gPSBjcmVhdGVEb2RlY2FoZWRyb24oMSk7XHJcbmxldCB2ZXJ0aWNlc0RvZGVjYWhlZHJvbiA9IGRvZGVjYWhlZHJvblswXTtcclxubGV0IGluZGljZXNEb2RlY2FoZWRyb24gPSBkb2RlY2FoZWRyb25bMV07XHJcblxyXG5mdW5jdGlvbiBpbml0QnVmZmVycyhnbCkge1xyXG4gIGJ1ZmZlckN1YmUgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICBidWZmZXJUZXRyYWhlZHJvbiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gIGJ1ZmZlck9jdGFoZWRyb24gPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICBidWZmZXJJY29zYWhlZHJvbiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gIGJ1ZmZlckRvZGVjYWhlZHJvbiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U2NlbmUoKSB7XHJcbiAgbGV0IHRpbWVGcm9tU3RhcnQ7XHJcbiAgbGV0IGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcbiAgdGltZUZyb21TdGFydCA9IChuZXcgRGF0ZSgpKS5nZXRNaWxsaXNlY29uZHMoKSAtIHN0YXJ0VGltZTtcclxuXHJcbiAgZ2wuY2xlYXJDb2xvcigwLjgsIDAuOCwgMC44LCAxKTtcclxuICBnbC52aWV3cG9ydCgwLCAwLCBnbC52aWV3cG9ydFdpZHRoLCBnbC52aWV3cG9ydEhlaWdodCk7XHJcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gIExvYyA9IG10aC5WZWMzU2V0KDUsIDUsIDUpO1xyXG4gIEF0ID0gbXRoLlZlYzNTZXQxKDApO1xyXG4gIFVwID0gbXRoLlZlYzNTZXQoMCwgMSwgMCk7XHJcblxyXG4gIC8qIE1hdHJQID1cclxuICAgIG10aC5NYXRyRnJ1c3R1bSgtUHJvakRpc3QgLyAyLCBQcm9qRGlzdCAvIDIsIC1Qcm9qRGlzdCAvIDIsIFByb2pEaXN0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgIFByb2pEaXN0LCAzMCk7ICovXHJcbiAgUHJvalNldCgpO1xyXG4gIENhbVNldChMb2MsIEF0LCBVcCk7XHJcbiAgLyogTWF0clYgPSBtdGguTWF0clZpZXcoTG9jLCBBdCwgVXApO1xyXG4gIE1hdHJWUCA9IG10aC5NYXRyTXVsTWF0cihNYXRyViwgTWF0clApOyAqL1xyXG5cclxuICBnbC51bmlmb3JtMWYodV90aW1lX2xvY2F0aW9uLCB0aW1lRnJvbVN0YXJ0IC8gMTAwMC4wKTtcclxuICBnbC51bmlmb3JtMWYodV9mcmFtZV93X2xvY2F0aW9uLCBGcmFtZVcpO1xyXG4gIGdsLnVuaWZvcm0xZih1X2ZyYW1lX2hfbG9jYXRpb24sIEZyYW1lSCk7XHJcbiAgZ2wudW5pZm9ybU1hdHJpeDRmdih1X21hdHJfdnBfbG9jYXRpb24sIGZhbHNlLFxyXG4gICAgbmV3IEZsb2F0MzJBcnJheShNYXRyVlAuQVswXS5jb25jYXQoTWF0clZQLkFbMV0uY29uY2F0KE1hdHJWUC5BWzJdLmNvbmNhdChNYXRyVlAuQVszXSkpKSwgMCwgMTYpKTtcclxuICBnbC51bmlmb3JtM2Z2KHVfY2FtX2xvY19sb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbTG9jLngsIExvYy55LCBMb2Muel0pLCAwLCAwKTtcclxuXHJcbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZVwiKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaXNQYXVzZSA9ICFpc1BhdXNlOyBcclxuICB9OyAqL1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1YmVcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlzQ3ViZSA9ICFpc0N1YmU7XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRldHJhaGVkcm9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpc1RldHJhaGVkcm9uID0gIWlzVGV0cmFoZWRyb247XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9jdGFoZWRyb25cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlzT2N0YWhlZHJvbiA9ICFpc09jdGFoZWRyb247XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb3NhaGVkcm9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpc0ljb3NhaGVkcm9uID0gIWlzSWNvc2FoZWRyb247XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvZGVjYWhlZHJvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaXNEb2RlY2FoZWRyb24gPSAhaXNEb2RlY2FoZWRyb247XHJcbiAgfTtcclxuXHJcbiAgbGV0IGFycmF5Q3ViZSwgYXJyYXlUZXRyYWhlZHJvbiwgYXJyYXlPY3RhaGVkcm9uLCBhcnJheUljb3NhaGVkcm9uLCBhcnJheURvZGVjYWhlZHJvbjtcclxuXHJcbiAgaWYgKGlzQ3ViZSkge1xyXG4gICAgbWF0cldDdWJlID0gbXRoLk1hdHJSb3RhdGVaKDE4MCAqIGN1cnJlbnRUaW1lIC8gMTAwMC4wKTtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IGNvbnZlcnRUb1ZlcnRpY2VzKHZlcnRpY2VzQ3ViZSwgaW5kaWNlc0N1YmUpO1xyXG4gICAgYXV0b05vcm1hbHModmVydGljZXMsIEFycmF5LmZyb20oQXJyYXkodmVydGljZXMubGVuZ3RoKS5rZXlzKCkpKTtcclxuICAgIGFycmF5Q3ViZSA9IHZlcnRpY2VzVG9BcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICBjcmVhdGVCdWZmZXIoYnVmZmVyQ3ViZSwgYXJyYXlDdWJlLCBpbmRpY2VzQ3ViZSk7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfbWF0cl93X2xvY2F0aW9uLCBmYWxzZSxcclxuICAgICAgbmV3IEZsb2F0MzJBcnJheShtYXRyV0N1YmUuQVswXS5jb25jYXQobWF0cldDdWJlLkFbMV0uY29uY2F0KG1hdHJXQ3ViZS5BWzJdLmNvbmNhdChtYXRyV0N1YmUuQVszXSkpKSwgMCwgMTYpKTtcclxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBhcnJheUN1YmUubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGlmIChpc1RldHJhaGVkcm9uKSB7XHJcbiAgICBtYXRyV1RldHJhaGVkcm9uID0gbXRoLk1hdHJNdWxNYXRyKG10aC5NYXRyVHJhbnNsYXRlKG10aC5WZWMzU2V0KDAsIDMgKiBNYXRoLnNpbihjdXJyZW50VGltZSAvIDEwMDAuMCksIDApKSwgbXRoLk1hdHJSb3RhdGVYKDMwICogY3VycmVudFRpbWUgLyAxMDAwLjApKTtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IGNvbnZlcnRUb1ZlcnRpY2VzKHZlcnRpY2VzVGV0cmFoZWRyb24sIGluZGljZXNUZXRyYWhlZHJvbik7XHJcbiAgICBhdXRvTm9ybWFscyh2ZXJ0aWNlcywgQXJyYXkuZnJvbShBcnJheSh2ZXJ0aWNlcy5sZW5ndGgpLmtleXMoKSkpO1xyXG4gICAgYXJyYXlUZXRyYWhlZHJvbiA9IHZlcnRpY2VzVG9BcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICBjcmVhdGVCdWZmZXIoYnVmZmVyVGV0cmFoZWRyb24sIGFycmF5VGV0cmFoZWRyb24sIGluZGljZXNUZXRyYWhlZHJvbik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfbWF0cl93X2xvY2F0aW9uLCBmYWxzZSxcclxuICAgICAgbmV3IEZsb2F0MzJBcnJheShtYXRyV1RldHJhaGVkcm9uLkFbMF0uY29uY2F0KG1hdHJXVGV0cmFoZWRyb24uQVsxXS5jb25jYXQobWF0cldUZXRyYWhlZHJvbi5BWzJdLmNvbmNhdChtYXRyV1RldHJhaGVkcm9uLkFbM10pKSksIDAsIDE2KSk7XHJcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgYXJyYXlUZXRyYWhlZHJvbi5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2N0YWhlZHJvbikge1xyXG4gICAgbWF0cldPY3RhaGVkcm9uID0gbXRoLk1hdHJNdWxNYXRyKG10aC5NYXRyVHJhbnNsYXRlKG10aC5WZWMzU2V0KDMgKiBNYXRoLmNvcyhjdXJyZW50VGltZSAvIDEwMDAuMCksIDAsIDApKSwgbXRoLk1hdHJSb3RhdGVaKDkwICogY3VycmVudFRpbWUgLyAxMDAwLjApKTtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IGNvbnZlcnRUb1ZlcnRpY2VzKHZlcnRpY2VzT2N0YWhlZHJvbiwgaW5kaWNlc09jdGFoZWRyb24pO1xyXG4gICAgYXV0b05vcm1hbHModmVydGljZXMsIEFycmF5LmZyb20oQXJyYXkodmVydGljZXMubGVuZ3RoKS5rZXlzKCkpKTtcclxuICAgIGFycmF5T2N0YWhlZHJvbiA9IHZlcnRpY2VzVG9BcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICBjcmVhdGVCdWZmZXIoYnVmZmVyT2N0YWhlZHJvbiwgYXJyYXlPY3RhaGVkcm9uLCBpbmRpY2VzT2N0YWhlZHJvbik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfbWF0cl93X2xvY2F0aW9uLCBmYWxzZSxcclxuICAgICAgbmV3IEZsb2F0MzJBcnJheShtYXRyV09jdGFoZWRyb24uQVswXS5jb25jYXQobWF0cldPY3RhaGVkcm9uLkFbMV0uY29uY2F0KG1hdHJXT2N0YWhlZHJvbi5BWzJdLmNvbmNhdChtYXRyV09jdGFoZWRyb24uQVszXSkpKSwgMCwgMTYpKTtcclxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBhcnJheU9jdGFoZWRyb24ubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0ljb3NhaGVkcm9uKSB7XHJcbiAgICBtYXRyV0ljb3NhaGVkcm9uID0gbXRoLk1hdHJNdWxNYXRyKG10aC5NYXRyUm90YXRlWig5MCAqIGN1cnJlbnRUaW1lIC8gMTAwMC4wKSwgbXRoLk1hdHJUcmFuc2xhdGUobXRoLlZlYzNTZXQoMCwgMCwgMS44ICogTWF0aC5zaW4oY3VycmVudFRpbWUgLyAxMDAwLjApKSkpO1xyXG4gICAgbGV0IHZlcnRpY2VzID0gY29udmVydFRvVmVydGljZXModmVydGljZXNJY29zYWhlZHJvbiwgaW5kaWNlc0ljb3NhaGVkcm9uKTtcclxuICAgIGF1dG9Ob3JtYWxzKHZlcnRpY2VzLCBBcnJheS5mcm9tKEFycmF5KHZlcnRpY2VzLmxlbmd0aCkua2V5cygpKSk7XHJcbiAgICBhcnJheUljb3NhaGVkcm9uID0gdmVydGljZXNUb0FycmF5KHZlcnRpY2VzKTtcclxuICAgIGNyZWF0ZUJ1ZmZlcihidWZmZXJJY29zYWhlZHJvbiwgYXJyYXlJY29zYWhlZHJvbiwgaW5kaWNlc0ljb3NhaGVkcm9uKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9tYXRyX3dfbG9jYXRpb24sIGZhbHNlLFxyXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KG1hdHJXSWNvc2FoZWRyb24uQVswXS5jb25jYXQobWF0cldJY29zYWhlZHJvbi5BWzFdLmNvbmNhdChtYXRyV0ljb3NhaGVkcm9uLkFbMl0uY29uY2F0KG1hdHJXSWNvc2FoZWRyb24uQVszXSkpKSwgMCwgMTYpKTtcclxuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBhcnJheUljb3NhaGVkcm9uLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNEb2RlY2FoZWRyb24pIHtcclxuICAgIG1hdHJXRG9kZWNhaGVkcm9uID0gbXRoLk1hdHJNdWxNYXRyKG10aC5NYXRyUm90YXRlWSgxMjAgKiBjdXJyZW50VGltZSAvIDEwMDAuMCksXHJcbiAgICAgIG10aC5NYXRyVHJhbnNsYXRlKG10aC5WZWMzU2V0KDYuNSAqIE1hdGguY29zKGN1cnJlbnRUaW1lIC8gMTAwMC4wKSwgMCwgMS44ICogTWF0aC5zaW4oY3VycmVudFRpbWUgLyAxMDAwLjApKSkpO1xyXG4gICAgbGV0IHZlcnRpY2VzID0gY29udmVydFRvVmVydGljZXModmVydGljZXNEb2RlY2FoZWRyb24sIGluZGljZXNEb2RlY2FoZWRyb24pO1xyXG4gICAgYXV0b05vcm1hbHModmVydGljZXMsIEFycmF5LmZyb20oQXJyYXkodmVydGljZXMubGVuZ3RoKS5rZXlzKCkpKTtcclxuICAgIGFycmF5RG9kZWNhaGVkcm9uID0gdmVydGljZXNUb0FycmF5KHZlcnRpY2VzKTtcclxuICAgIGNyZWF0ZUJ1ZmZlcihidWZmZXJEb2RlY2FoZWRyb24sIGFycmF5RG9kZWNhaGVkcm9uLCBpbmRpY2VzRG9kZWNhaGVkcm9uKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9tYXRyX3dfbG9jYXRpb24sIGZhbHNlLFxyXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KG1hdHJXRG9kZWNhaGVkcm9uLkFbMF0uY29uY2F0KG1hdHJXRG9kZWNhaGVkcm9uLkFbMV0uY29uY2F0KG1hdHJXRG9kZWNhaGVkcm9uLkFbMl0uY29uY2F0KG1hdHJXRG9kZWNhaGVkcm9uLkFbM10pKSksIDAsIDE2KSk7XHJcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgYXJyYXlEb2RlY2FoZWRyb24ubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1NjZW5lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XHJcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ViZ2wtY2FudmFzXCIpO1xyXG5cclxuICBpbml0R0woY2FudmFzKTtcclxuXHJcbiAgLyogUHJvalNldCgpO1xyXG4gIENhbVNldChMb2MsIEF0LCBVcCwgbXRoLlZlYzNTZXQxKDApLCBtdGguVmVjM1NldDEoMCkpOyAqL1xyXG5cclxuICBpbml0U2hhZGVycyhnbCk7XHJcbiAgaW5pdEJ1ZmZlcnMoZ2wpO1xyXG5cclxuICBzdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgZHJhd1NjZW5lKCk7XHJcbn1cclxuXHJcbm9uU3RhcnQoKTsiXSwibmFtZXMiOlsibXRoLlZlYzNTZXQiLCJtdGguVmVjM05vcm1hbGl6ZSIsIm10aC5WZWMzQ3Jvc3NWZWMzIiwibXRoLlZlYzNTdWJWZWMzIiwibXRoLlZlYzNBZGRWZWMzIiwibXRoLlBJIiwibXRoLk1hdHJJZGVudGl0eSIsIm10aC5WZWMzU2V0MSIsIm10aC5NYXRyVmlldyIsIm10aC5NYXRyTXVsTWF0ciIsIm10aC5NYXRyRnJ1c3R1bSIsIm10aC5NYXRyUm90YXRlWiIsIm10aC5NYXRyVHJhbnNsYXRlIiwibXRoLk1hdHJSb3RhdGVYIiwibXRoLk1hdHJSb3RhdGVZIl0sIm1hcHBpbmdzIjoiOzs7RUFBQTtBQUNBO0VBQ08sSUFBSSxFQUFFLEdBQUcsc0JBQXNCLENBQUM7QUFDdkM7RUFDQTtFQUNPLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtFQUN2QixFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7RUFDdEIsQ0FBQztBQU1EO0VBQ08sTUFBTSxJQUFJLENBQUM7RUFDbEIsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztFQUNoQyxjQUFjLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7RUFDaEMsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0VBQ2hDLGNBQWMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0VBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2xDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDbEMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNsQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7RUFDbkMsR0FBRztFQUNILENBQUM7QUFDRDtFQUNPLFNBQVMsWUFBWSxHQUFHO0VBQy9CLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUM5QixDQUFDO0FBQ0Q7RUFDTyxTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7RUFDakMsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDNUIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDNUIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDNUIsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNuQyxHQUFHO0FBUUg7RUFDTyxTQUFTLFdBQVcsQ0FBQyxjQUFjLEVBQUU7RUFDNUMsRUFBRSxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDM0MsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BFO0VBQ0EsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDNUIsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDOUIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUMvQixrQkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzdCLENBQUM7QUFDRDtFQUNPLFNBQVMsV0FBVyxDQUFDLGNBQWMsRUFBRTtFQUM1QyxFQUFFLElBQUksY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUN6RztFQUNBLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDL0Isa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDNUIsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDOUIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM3QixDQUFDO0FBQ0Q7RUFDTyxTQUFTLFdBQVcsQ0FBQyxjQUFjLEVBQUU7RUFDNUMsRUFBRSxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDekc7RUFDQSxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUM5QixrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQy9CLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDN0IsQ0FBQztBQXVCRDtFQUNPLFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7RUFDdEMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzdCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzVCLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QjtFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7RUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDO0VBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QztFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7QUFDQTtFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7RUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDO0VBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QztFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7QUFDQTtFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7RUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDO0VBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QztFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7QUFDQTtFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7RUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDO0VBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QztFQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEM7RUFDQSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ1gsQ0FBQztBQTBIRDtFQUNPLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFO0VBQ3ZDLEVBQUUsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDckQsRUFBRSxJQUFJLEVBQUUsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BEO0VBQ0EsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUMxQyxrQkFBa0IsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQzFDLGtCQUFrQixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDMUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUYsQ0FBQztBQUNEO0VBQ08sU0FBUyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDOUMsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUMxQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQzFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7RUFDOUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMvQyxDQUFDO0FBUUQ7RUFDTyxNQUFNLElBQUksQ0FBQztFQUNsQixFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN2QixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNkLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ2QsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNmLEdBQUc7RUFDSCxDQUFDO0FBQ0Q7RUFDTyxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7RUFDNUIsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFCLENBQUM7QUFDRDtFQUNPLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ2pDLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMxQixDQUFDO0FBQ0Q7RUFD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QUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDMUMsR0FBRztBQUNIO0VBQ0EsRUFBRSxPQUFPLEtBQUssQ0FBQztFQUNmLENBQUM7RUFDTSxTQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0VBQy9DLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDNUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9CLEdBQUc7RUFDSDtFQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7RUFDNUMsRUFBRTtFQUNGLElBQUksSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xFO0VBQ0EsSUFBSSxJQUFJLEVBQUUsR0FBR0EsT0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BGLFFBQVEsRUFBRSxHQUFHQSxPQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEYsUUFBUSxFQUFFLEdBQUdBLE9BQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JGLElBQUksSUFBSSxDQUFDLEdBQUdDLGFBQWlCLENBQUNDLGFBQWlCLENBQUNDLFdBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUVBLFdBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25HO0VBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBR0gsT0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JGLFFBQVEsR0FBRyxHQUFHQSxPQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckYsUUFBUSxHQUFHLEdBQUdBLE9BQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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O0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbEIsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEI7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNsQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoQjtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2xCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Y7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2xCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ2YsSUFBRztBQUNIO0VBQ0EsRUFBRSxJQUFJLE9BQU8sR0FBRztFQUNoQixJQUFJLENBQUMsRUFBRSxDQUFD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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2Y7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2YsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNoQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNmO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDZCxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Q7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDaEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2QsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNoQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUc7QUFDSDtFQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUc7RUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNoQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxNQUFNLENBQUM7RUFDeEMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNoQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztFQUNsQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Q7RUFDQSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDO0VBQ3RDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDaEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQztFQUNyQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Q7RUFDQSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0VBQ3BDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDaEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQztFQUN2QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Q7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDaEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDZCxJQUFHO0FBQ0g7RUFDQSxFQUFFLElBQUksT0FBTyxHQUFHO0VBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDWDtFQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDWixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNaLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQ2IsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDWixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1g7RUFDQSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNaLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1osSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDYixJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtFQUNkLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ2IsSUFBRztBQUNIO0VBQ0EsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztFQUM1QixDQUFDO0FBQ0Q7RUFDTyxTQUFTLGtCQUFrQixDQUFDLENBQUMsRUFBRTtFQUN0QyxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHQSxFQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHQSxFQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDL0UsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0EsRUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0EsRUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ25GLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUdBLEVBQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUdBLEVBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztFQUMvRSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHQSxFQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHQSxFQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDbkYsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQixFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkI7RUFDQSxFQUFFLElBQUksbUJBQW1CLEdBQUc7RUFDNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2IsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQztFQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUM7RUFDckMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0VBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQztFQUN2QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztFQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQztFQUNyQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0VBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0VBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxNQUFNLENBQUM7RUFDdEMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmO0VBQ0EsRUFBRSxJQUFJLFFBQVEsR0FBRztFQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDN0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUM5RixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2Y7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDN0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUM5RixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2Y7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDN0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUM5RixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Y7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDN0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUM5RixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2Q7RUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDL0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7RUFDN0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUM5RixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2Q7QUFDQTtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM3RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQzlGLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUNoRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM5RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQy9GLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUNoRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM5RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQy9GLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUNqRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQ2hHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUNoRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM5RixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQy9GLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUNoRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM5RixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQy9GLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM3RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQzlGLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM3RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQzlGLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM3RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQzlGLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZDtFQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUMvRixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztFQUM3RixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0VBQzlGLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDZDtBQUNBO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2hHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQzlGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDL0YsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2hHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQzlGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDL0YsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2pHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQy9GLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDaEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2xHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2hHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDakcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNkO0VBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQ2pHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHO0VBQy9GLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDaEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNkLEdBQUcsQ0FBQztBQUNKO0VBQ0EsRUFBRSxJQUFJLE9BQU8sR0FBRztFQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtFQUNaLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQ2IsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDZDtFQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDWixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNiO0VBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ1g7RUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDWDtFQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDWixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNiO0FBQ0E7RUFDQSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtFQUNkLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQ2QsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDZDtFQUNBLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQ2QsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7RUFDZCxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNkO0VBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDWixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtFQUNiLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2I7RUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQ1osSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDYjtFQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VB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
