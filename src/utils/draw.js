const Rx = require('rxjs');

export default function draw() {
  const $canvas = document.getElementById('canvas');
  const ctx = $canvas.getContext('2d');

  const mouseDowns = Rx.Observable.fromEvent($canvas, 'mousedown');
  const mouseMoves = Rx.Observable.fromEvent($canvas, 'mousemove');
  const mouseUps = Rx.Observable.fromEvent($canvas, 'mouseup');

  // compose
  const mousePaths = mouseDowns
    .first()
    .concat(mouseMoves.takeUntil(mouseUps))
    .repeat();

  let prevX, prevY;
  mousePaths.forEach(e => {
    const x = e.x - $canvas.offsetLeft;
    const y = e.y - $canvas.offsetTop;
    if (prevX) {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }
    prevX = x;
    prevY = y;
  });

  mouseUps.forEach(e => {
    prevX = null;
    prevY = null;
  });

}