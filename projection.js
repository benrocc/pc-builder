function quadProjector(points) {
  const [o, r, b, k] = points;
  const dx1 = r[0] - k[0], dx2 = b[0] - k[0];
  const dy1 = r[1] - k[1], dy2 = b[1] - k[1];
  const dx3 = o[0] - r[0] - b[0] + k[0];
  const dy3 = o[1] - r[1] - b[1] + k[1];
  const det = dx1 * dy2 - dx2 * dy1;
  const g = Math.abs(det) < 1e-10 ? 0 : (dx3 * dy2 - dx2 * dy3) / det;
  const h = Math.abs(det) < 1e-10 ? 0 : (dx1 * dy3 - dx3 * dy1) / det;
  const ax = r[0] - o[0] + g * r[0], bx = b[0] - o[0] + h * b[0];
  const ay = r[1] - o[1] + g * r[1], by = b[1] - o[1] + h * b[1];
  const project = (u, v) => {
    const w = g * u + h * v + 1;
    return [(ax * u + bx * v + o[0]) / w, (ay * u + by * v + o[1]) / w];
  };
  project.affine = Math.abs(g) + Math.abs(h) < 1e-7;
  return project;
}

function paintPhotoTriangle(ctx, photo, from, to) {
  const [s, sr, sb] = from, [p, pr, pb] = to;
  const source = new DOMMatrix([sr[0]-s[0], sr[1]-s[1], sb[0]-s[0], sb[1]-s[1], s[0], s[1]]);
  const target = new DOMMatrix([pr[0]-p[0], pr[1]-p[1], pb[0]-p[0], pb[1]-p[1], p[0], p[1]]);
  const matrix = target.multiply(source.inverse());
  ctx.save();
  ctx.beginPath();
  to.forEach(([x,y], i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  ctx.closePath();
  ctx.clip();
  ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
  ctx.drawImage(photo,0,0);
  ctx.restore();
}

function warpPhoto(ctx, photo, sourceAt, targetAt, steps = 12) {
  for (let row=0; row<steps; row++) {
    for (let col=0; col<steps; col++) {
      const uv = [[col,row],[col+1,row],[col,row+1],[col+1,row+1]];
      const src = uv.map(([x,y]) => sourceAt(x/steps,y/steps));
      const dst = uv.map(([x,y]) => targetAt(x/steps,y/steps));
      paintPhotoTriangle(ctx,photo,[src[0],src[1],src[2]],[dst[0],dst[1],dst[2]]);
      paintPhotoTriangle(ctx,photo,[src[1],src[3],src[2]],[dst[1],dst[3],dst[2]]);
    }
  }
}
