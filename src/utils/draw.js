const Rx = require('rxjs');

export default function draw() {
  const $canvas = document.getElementById('canvas');
  const ctx = $canvas.getContext('2d');
  const mouseDowns = Rx.Observable.fromEvent($canvas, 'mousedown');
  const mouseMoves = Rx.Observable.fromEvent($canvas, 'mousemove');
  const mouseUps = Rx.Observable.fromEvent($canvas, 'mouseup');

  const drawLine = (prevX, prevY, nextX, nextY) => {
    console.log(prevX, prevY, nextX, nextY);
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(nextX, nextY);
    ctx.stroke();
  }

  const mousePaths = mouseDowns
    .first()
    .concat(mouseMoves.takeUntil(mouseUps))
    .scan((prev, ev) => ({
      prev: prev.current,
      current: [ev.x - $canvas.offsetLeft, ev.y - $canvas.offsetTop]
    }), {})
    .skip(1)
    .repeat();

  mousePaths.forEach(diff => {
    console.log(diff);
    drawLine(...diff.prev, ...diff.current);
  });

  drawLine(0, 800, 100, 800)
}