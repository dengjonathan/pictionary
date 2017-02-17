import {fabric} from 'fabric';

import {updatePicture} from './stateControllers';

export default function draw() {
  const canvas = new fabric.Canvas(document.getElementById('canvas'), {
    isDrawingMode: true
  });
  canvas.isDrawingMode = 1;
  canvas.freeDrawingBrush.color = 'purple';
  canvas.freeDrawingBrush.width = 10;
  canvas.renderAll();

  const sizeCanvas = () => {
    console.log('sizing canvas');
    canvas.setWidth(window.innerWidth * 0.5);
    canvas.setHeight(Math.min(canvas.width, window.innerHeight * 0.5));
  } 

  // TODO: install listener that will trigger update to redux store on every draw
  canvas.on('mouse:up', () => updatePicture(canvas.toJSON));

  window.addEventListener('resize', sizeCanvas);

  sizeCanvas();

  return {
    // TODO: don't really need this method since it automatically saves
    save: () => console.log(canvas.toJSON()),
    clear: () => {
      canvas.clear.call(canvas);
    },
    load: jsonObj => canvas.loadFromJson(jsonObj)
  };
}
