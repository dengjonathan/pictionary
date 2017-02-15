import {fabric} from 'fabric';

import {updatePicture} from './stateControllers';

export default function draw() {
  const canvas = new fabric.Canvas(document.getElementById('canvas'), {
    isDrawingMode: true
  });
  canvas.isDrawingMode = 1;
  canvas.backgroundColor = '#efefef';
  canvas.freeDrawingBrush.color = "purple";
  canvas.freeDrawingBrush.width = 10;
  canvas.renderAll();

  // TODO: install listener that will trigger update to redux store on every draw
  canvas.on('mouse:up', () => updatePicture(canvas.toJSON));

  return {
    save: canvas.toJSON,
    clear: canvas.clear.bind(canvas),
    load: jsonObj => canvas.loadFromJson(jsonObj)
  };
}
