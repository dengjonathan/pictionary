const Rx = require('rxjs');

const $canvas = document.getElementById('canvas');

const mouseDowns = Rx.Observable.fromEvent($canvas, 'mousedown');
const mouseMoves = Rx.Observable.fromEvent($canvas, 'mousemove');
const mouseUps = Rx.Observable.fromEvent($canvas, 'mouseup');

// compose
const mousePaths = mouseDowns 
  .first()
  .concat(mouseMoves.takeUntil(mouseUps))
  .repeat();

mousePaths.forEach(e => console.log(e.x, e.y));