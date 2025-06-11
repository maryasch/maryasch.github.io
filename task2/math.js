/* Platonic bodies: math module, MN7, 11.06.2025 */

export let PI = 3.14159265358979323846;

/* Degrees to radians conversion */
export function D2R(A) {
  return A * PI / 180;
}

/* Radians to degrees conversion */
export function R2D(A) {
  return (A) * (180.0 / PI);
}

export class Matr {
  constructor(A00, A01, A02, A03,
              A10, A11, A12, A13,
              A20, A21, A22, A23,
              A30, A31, A32, A33) {
    this.A = [[A00, A01, A02, A03],
              [A10, A11, A12, A13],
              [A20, A21, A22, A23],
              [A30, A31, A32, A33]]            
  }                                                         
}  

export function MatrIdentity() {
  return new Matr(1, 0, 0, 0,
                  0, 1, 0, 0,
                  0, 0, 1, 0,
                  0, 0, 0, 1);
}

export function MatrTranslate(t) {
  return new Matr(1, 0, 0, 0,
                  0, 1, 0, 0,
                  0, 0, 1, 0,
                  t.x, t.y, t.z, 1)
  }

export function MatrScale(s) {
  return new Matr(s.x, 0, 0, 0,
                  0, s.y, 0, 0,
                  0, 0, s.z, 0,
                  0, 0, 0, 1)
}

export function MatrRotateX(angleInDegrees) {
  let angleInRadians = D2R(angleInDegrees);
  let  si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
  
  return new Matr(1, 0, 0, 0,
                  0, co, si, 0,
                  0, -si, co, 0,
                  0, 0, 0, 1)
}

export function MatrRotateY(angleInDegrees) {
  let angleInRadians = D2R(angleInDegrees), si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
  
  return new Matr(co, 0, -si, 0,
                  0, 1, 0, 0,
                  si, 0, co, 0,
                  0, 0, 0, 1)
}

export function MatrRotateZ(angleInDegrees) {
  let angleInRadians = D2R(angleInDegrees), si = Math.sin(angleInRadians), co = Math.cos(angleInRadians);
  
  return new Matr(co, si, 0, 0,
                  -si, co, 0, 0,
                  0, 0, 1, 0,
                  0, 0, 0, 1)
}                                                                                              

export function MatrRotate(angleInDegrees, r) {
  let angleInRadians = D2R(angleInDegrees), si = Math.sin(angleInRadians), co = Math.cos(angleInRadians),
  v = r.Vec3Normalize();

  return new Matr(co + v.x * v.x * (1 - co),
                  v.x * v.y * (1 - co) + v.z * si,
                  v.x * v.z * (1 - co) - v.y * si,
                  0,

                  v.y * v.x * (1 - co) - v.z * si,
                  co + v.y * v.y * (1 - co),
                  v.y * v.z * (1 - co) + v.x * si,
                  0,

                  v.z * v.x * (1 - co) + v.y * si,
                  v.z * v.y * (1 - co) - v.x * si,
                  co + v.z * v.z * (1 - co),
                  0,
                  
                  0, 0, 0, 1)
}                                                          

export function MatrMulMatr(matr, m1) {
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

export function MatrTranspose(matr) {
  return new Matr(matr.A[0][0], matr.A[1][0], matr.A[2][0], matr.A[3][0],
                  matr.A[0][1], matr.A[1][1], matr.A[2][1], matr.A[3][1],
                  matr.A[0][2], matr.A[1][2], matr.A[2][2], matr.A[3][2],
                  matr.A[0][3], matr.A[1][3], matr.A[2][3], matr.A[3][3]);
}

export function MatrDeterm3x3(A11, A12, A13,
                              A21, A22, A23,
                              A31, A32, A33) {
  return A11 * A22 * A33 + A12 * A23 * A31 + A13 * A21 * A32 -
         A11 * A23 * A32 - A12 * A21 * A33 - A13 * A22 * A31;
}

export function MatrDeterm(matr) {
  return matr.A[0][0] * MatrDeterm3x3(matr.A[1][1], matr.A[1][2], matr.A[1][3],
                                  matr.A[2][1], matr.A[2][2], matr.A[2][3],
                                  matr.A[3][1], matr.A[3][2], matr.A[3][3]) +

         -matr.A[0][1] * MatrDeterm3x3(matr.A[1][0], matr.A[1][2], matr.A[1][3],
                                      matr.A[2][0], matr.A[2][2], matr.A[2][3],
                                      matr.A[3][0], matr.A[3][2], matr.A[3][3]) +

         matr.A[0][2] * MatrDeterm3x3(matr.A[1][0], matr.A[1][1], matr.A[1][3],
                                      matr.A[2][0], matr.A[2][1], matr.A[2][3],
                                      matr.A[3][0], matr.A[3][1], matr.A[3][3]) +

         -matr.A[0][3] * MatrDeterm3x3(matr.A[1][0], matr.A[1][1], matr.A[1][2],
                                      matr.A[2][0], matr.A[2][1], matr.A[2][2],
                                      matr.A[3][0], matr.A[3][1], matr.A[3][2]);
}

export function MatrInverse(matr) {
  let m = matr;
  let det = MatrDeterm(matr);
  let r = new Matr(0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0);

  if (det == 0)
    return new Matr(1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1);
  /* Build adjoint matrix */
  r.A[0][0] = MatrDeterm3x3(m.A[1][1], m.A[1][2], m.A[1][3],
                            m.A[2][1], m.A[2][2], m.A[2][3],
                            m.A[3][1], m.A[3][2], m.A[3][3]) / det;

  r.A[1][0] = -MatrDeterm3x3(m.A[1][0], m.A[1][2], m.A[1][3],
                              m.A[2][0], m.A[2][2], m.A[2][3],
                              m.A[3][0], m.A[3][2], m.A[3][3]) / det;

  r.A[2][0] = MatrDeterm3x3(m.A[1][0], m.A[1][1], m.A[1][3],
                            m.A[2][0], m.A[2][1], m.A[2][3],
                            m.A[3][0], m.A[3][1], m.A[3][3]) / det;

  r.A[3][0] = -MatrDeterm3x3(m.A[1][0], m.A[1][1], m.A[1][2],
                              m.A[2][0], m.A[2][1], m.A[2][2],
                              m.A[3][0], m.A[3][1], m.A[3][2]) / det;

  r.A[0][1] = -MatrDeterm3x3(m.A[0][1], m.A[0][2], m.A[0][3],
                              m.A[2][1], m.A[2][2], m.A[2][3],
                              m.A[3][1], m.A[3][2], m.A[3][3]) / det;

  r.A[1][1] = MatrDeterm3x3(m.A[0][0], m.A[0][2], m.A[0][3],
                              m.A[2][0], m.A[2][2], m.A[2][3],
                              m.A[3][0], m.A[3][2], m.A[3][3]) / det;

  r.A[2][1] = -MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][3],
                              m.A[2][0], m.A[2][1], m.A[2][3],
                              m.A[3][0], m.A[3][1], m.A[3][3]) / det;

  r.A[3][1] = MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][2],
                            m.A[2][0], m.A[2][1], m.A[2][2],
                            m.A[3][0], m.A[3][1], m.A[3][2]) / det;

  r.A[0][2] = MatrDeterm3x3(m.A[0][1], m.A[0][2], m.A[0][3],
                            m.A[1][1], m.A[1][2], m.A[1][3],
                            m.A[3][1], m.A[3][2], m.A[3][3]) / det;

  r.A[1][2] = -MatrDeterm3x3(m.A[0][0], m.A[0][2], m.A[0][3],
                            m.A[1][0], m.A[1][2], m.A[1][3],
                            m.A[3][0], m.A[3][2], m.A[3][3]) / det;

  r.A[2][2] = MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][3],
                            m.A[1][0], m.A[1][1], m.A[1][3],
                            m.A[3][0], m.A[3][1], m.A[3][3]) / det;

  r.A[3][2] = -MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][2],
                            m.A[1][0], m.A[1][1], m.A[1][2],
                            m.A[3][0], m.A[3][1], m.A[3][2]) / det;

  r.A[0][3] = -MatrDeterm3x3(m.A[0][1], m.A[0][2], m.A[0][3],
                            m.A[1][1], m.A[1][2], m.A[1][3],
                            m.A[2][1], m.A[2][2], m.A[2][3]) / det;
  
  r.A[1][3] = MatrDeterm3x3(m.A[0][0], m.A[0][2], m.A[0][3],
                            m.A[1][0], m.A[1][2], m.A[1][3],
                            m.A[2][0], m.A[2][2], m.A[2][3]) / det;
  
  r.A[2][3] = -MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][3],
                            m.A[1][0], m.A[1][1], m.A[1][3],
                            m.A[2][0], m.A[2][1], m.A[2][3]) / det;
  
  r.A[3][3] = MatrDeterm3x3(m.A[0][0], m.A[0][1], m.A[0][2],
                            m.A[1][0], m.A[1][1], m.A[1][2],
                            m.A[2][0], m.A[2][1], m.A[2][2]) / det;
  
  return r;
}

export function Vec3MulMatr(v, m) {
  let w = v.x * m.A[0][3] + v.y * m.A[1][3] + v.z * m.A[2][3] + m.A[3][3];

  return Vec3Set((v.x * m.A[0][0] + v.y * m.A[1][0] + v.z * m.A[2][0] + m.A[3][0]) / w,
                (v.x * m.A[0][1] + v.y * m.A[1][1] + v.z * m.A[2][1] + m.A[3][1]) / w,
                (v.x * m.A[0][2] + v.y * m.A[1][2] + v.z * m.A[2][2] + m.A[3][2]) / w);
}

export function MatrView(Loc, At, Up1) {       
  let Dir = Vec3Normalize(Vec3SubVec3(At, Loc));
  let Right = Vec3Normalize(Vec3CrossVec3(Dir, Up1));
  let Up = Vec3Normalize(Vec3CrossVec3(Right, Dir));

  return new Matr(Right.x, Up.x, -Dir.x, 0,
                  Right.y, Up.y, -Dir.y, 0,
                  Right.z, Up.z, -Dir.z, 0,
                  -Vec3DotVec3(Loc, Right), -Vec3DotVec3(Loc, Up), Vec3DotVec3(Loc, Dir), 1)
}                                                                                

export function MatrFrustum(L, R, B, T, N, F) {
  return new Matr(2 * N / (R - L), 0, 0, 0,
                  0, 2 * N / (T - B), 0, 0,
                  (R + L) / (R - L), (T + B) / (T - B), (-F - N) / (F - N), -1,
                  0, 0, 2 * N * F / (N - F), 0)
} 

export function MatrOrtho(L, R, B, T, N, F) {
  return new Matr(2 / (R - L), 0, 0, 0,
                  0, 2 / (T - B), 0, 0,
                  0, 0, -2 / (F - N), 0,
                  -(R + L) / (R - L), -(T + B) / (T - B), -(F + N) / (F - N), 1)
}

export class Vec3 {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z;
  }                                      
}

export function Vec3Set1(A) {
  return new Vec3(A, A, A)
}

export function Vec3Set(A, B, C) {
  return new Vec3(A, B, C)
}

export function Vec3AddVec3(Vec1, Vec2) {
  return new Vec3(
    Vec1.x + Vec2.x,
    Vec1.y + Vec2.y,
    Vec1.z + Vec2.z)
}

export function Vec3SubVec3(Vec1, Vec2) {
  return new Vec3(
    Vec1.x - Vec2.x,
    Vec1.y - Vec2.y,
    Vec1.z - Vec2.z)
}

export function Vec3MulNum(Vec, N) {
  return new Vec3(
    Vec.x * N,
    Vec.y * N,
    Vec.z * N)
}

export function Vec3DivNum(Vec, N) {
  if (N == 0)
    return new Vec3Set1(0)
  return new Vec3(
    Vec.x / N,
    Vec.y / N,
    Vec.z / N)
}
  
export function Vec3Neg(Vec) {
  return new Vec3(
    -Vec.x,
    -Vec.y,
    -Vec.z)
}

export function Vec3DotVec3(Vec1, Vec2) {
  return Vec1.x * Vec2.x +
         Vec1.y * Vec2.y +
         Vec1.z * Vec2.z;
}

export function Vec3CrossVec3(Vec1, Vec2) {
  return new Vec3(
    -Vec1.z * Vec2.y + Vec1.y * Vec2.z,
    -Vec1.x * Vec2.z + Vec1.z * Vec2.x,
    -Vec1.y * Vec2.x + Vec1.x * Vec2.y)
}

export function Vec3Len(Vec) {
  let len = Vec3DotVec3(Vec, Vec);

  if (len == 1 || len == 0)
    return len;
  return Math.pow(len, 0.5);
}

export function Vec3Normalize(Vec) {       
  let len = Vec3DotVec3(Vec, Vec);

  if (len == 1 || len == 0)
    return Vec;
  return Vec3DivNum(Vec, Math.pow(len, 0.5));
}    

export function PointTransform(M) {
  return new Vec3(v.x * m.A[0][0] + v.y * m.A[1][0] + v.z * m.A[2][0] + m.A[3][0],
                  v.x * m.A[0][1] + v.y * m.A[1][1] + v.z * m.A[2][1] + m.A[3][1],
                  v.x * m.A[0][2] + v.y * m.A[1][2] + v.z * m.A[2][2] + m.A[3][2])
}

export function VectorTransform(V, M) {
  return new Vec3(v.x * m.A[0][0] + v.y * m.A[1][0] + v.z * m.A[2][0],
                  v.x * m.A[0][1] + v.y * m.A[1][1] + v.z * m.A[2][1],
                  v.x * m.A[0][2] + v.y * m.A[1][2] + v.z * m.A[2][2])
}
