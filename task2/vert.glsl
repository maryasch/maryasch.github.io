#version 300 es
precision highp float;

layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec4 inColor;
layout (location = 2) in vec3 inNormal;

uniform mat4 MatrVP;  
uniform mat4 MatrW;                  

out vec3 drawPos;
out vec4 drawColor;
out vec3 drawNormal;

void main() {
    gl_Position = MatrVP * MatrW * vec4(inPosition, 1);
    drawNormal = mat3(transpose(inverse(MatrW))) * inNormal;
    drawColor = vec4(inPosition, 1);
    drawColor = inColor;
    drawPos = (MatrW * vec4(inPosition, 1.0)).xyz;
    
    //gl_Position = vec4(inPosition, 1);
}
