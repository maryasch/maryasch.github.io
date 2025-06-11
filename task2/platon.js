/* Platonic bodies, MN7, 11.06.2025 */
import * as mth from "./math.js"

export function convertToVertices(vertices, indices) {
  let verticesArray = [];
  for (let i = 0; i < indices.length; i++) {
    verticesArray[i] = structuredClone(vertices[indices[i]]);
  }

  return verticesArray;
}

export function verticesToArray(vertices) {
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
export function autoNormals(vertices, indices) {
  for (let i = 0; i < vertices.length; i++) {
    vertices[i][2] = [0, 0, 0];
  }
 
  for (let i = 0; i < indices.length; i += 3)
  {
    let n0 = indices[i], n1 = indices[i + 1], n2 = indices[i + 2]; 

    let p0 = mth.Vec3Set(vertices[n0][0][0], vertices[n0][0][1], vertices[n0][0][2]),
        p1 = mth.Vec3Set(vertices[n1][0][0], vertices[n1][0][1], vertices[n1][0][2]),
        p2 = mth.Vec3Set(vertices[n2][0][0], vertices[n2][0][1], vertices[n2][0][2]);
    let n = mth.Vec3Normalize(mth.Vec3CrossVec3(mth.Vec3SubVec3(p1, p0), mth.Vec3SubVec3(p2, p0)));
                                                                   
    let n00 = mth.Vec3Set(vertices[n0][2][0], vertices[n0][2][1], vertices[n0][2][2]),
        n01 = mth.Vec3Set(vertices[n1][2][0], vertices[n1][2][1], vertices[n1][2][2]),
        n02 = mth.Vec3Set(vertices[n2][2][0], vertices[n2][2][1], vertices[n2][2][2]);
                      
    let v0 = mth.Vec3AddVec3(n00, n),
        v1 = mth.Vec3AddVec3(n01, n), 
        v2 = mth.Vec3AddVec3(n02, n);
      
    vertices[n0][2] = [v0.x, v0.y, v0.z];
    vertices[n1][2] = [v1.x, v1.y, v1.z];
    vertices[n2][2] = [v2.x, v2.y, v2.z];
  }
 
  for (let i = 0; i < vertices.length; i++) {
    let vi = mth.Vec3Set(vertices[i][2][0], vertices[i][2][1], vertices[i][2][2]);
    let n = mth.Vec3Normalize(vi);
    vertices[i][2] = [n.x, n.y, n.z]; 
  }
  vertices;
}                               

export function createCube(a) {
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
  ]

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
  ]

  return [vertices, indices];
}

export function createTetrahedron(a) {
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
  ]

  let indices = [
    1, 2, 4,
    1, 3, 4,
    2, 3, 4,
    1, 2, 3
  ]

  return [vertices, indices];
}

export function createOctahedron(a) {
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
  ]

  let indices = [
    1, 2, 3,
    1, 2, 5,
    1, 3, 4,
    1, 4, 5,

    6, 2, 3,
    6, 2, 5,
    6, 3, 4,
    6, 4, 5
  ]

  return [vertices, indices]
}

export function createIcosahedron(a) {
  let sin18 = Math.sin(18 * mth.PI / 180), cos18 = Math.cos(18 * mth.PI / 180);
  let sin234 = Math.sin(234 * mth.PI / 180), cos234 = Math.cos(234 * mth.PI / 180);
  let sin54 = Math.sin(54 * mth.PI / 180), cos54 = Math.cos(54 * mth.PI / 180);
  let sin198 = Math.sin(198 * mth.PI / 180), cos198 = Math.cos(198 * mth.PI / 180);
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
  ]             

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
  ]

  return [vertices, indices]
}

export function createDodecahedron(a) {
  let sin18 = Math.sin(18 * mth.PI / 180), cos18 = Math.cos(18 * mth.PI / 180);
  let sin234 = Math.sin(234 * mth.PI / 180), cos234 = Math.cos(234 * mth.PI / 180);
  let sin54 = Math.sin(54 * mth.PI / 180), cos54 = Math.cos(54 * mth.PI / 180);
  let sin198 = Math.sin(198 * mth.PI / 180), cos198 = Math.cos(198 * mth.PI / 180);
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
  ]

  return [vertices, indices]
}
