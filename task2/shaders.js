/* Platonic bodies: shaders, MN7, 11.06.2025 */

export let u_time_location;
export let u_frame_w_location;
export let u_frame_h_location;
export let u_matr_vp_location;
export let u_matr_w_location;
export let u_cam_loc_location;

function loadShader(gl, shaderStr, type) {
  const shader = gl.createShader(type);        

  gl.shaderSource(shader, shaderStr);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
  }

  return shader;
}

export function initShaders(gl) {
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
