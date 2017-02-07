const Rx = require('rxjs');

const mouseDowns = Rx.Observable.fromEvent(document, 'mousedown');
const mouseMoves = Rx.Observable.fromEvent(document, 'mousemove');
const mouseUps = Rx.Observable.fromEvent(document, 'mouseup');

// compose
const mousePaths = mouseDowns 
  .first()
  .concat(mouseMoves.takeUntil(mouseUps))
  .repeat();

mousePaths.forEach(e => console.log(e.x, e.y));