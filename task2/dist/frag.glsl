#version 300 es
precision highp float;

layout (location = 0) out vec4 outColor;
layout(location = 1) out vec3 outPosId;
layout(location = 2) out vec3 outNormal;

uniform float Time;

uniform float FrameW;
uniform float FrameH;

uniform vec3 CamLoc;

in vec3 drawPos;
in vec4 drawColor;
in vec3 drawNormal;

void main() {
  vec3 N = normalize(drawNormal);
  vec3 L = CamLoc;
  vec3 V = normalize(drawPos - CamLoc);
  vec3 N1 = faceforward(N, V, N);
  float nl = 0.47 * max(0.1, dot(N1, L));

  outColor = vec4(drawColor.xyz * nl * 0.30, 1.0);
}
