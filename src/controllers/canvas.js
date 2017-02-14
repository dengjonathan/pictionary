import {fabric} from 'fabric';

export default function draw() {
  const canvas = new fabric.Canvas(document.getElementById('canvas'), {
    isDrawingMode: true
  });
  canvas.backgroundColor = '#efefef';
  canvas.isDrawingMode = 1;
  canvas.freeDrawingBrush.color = "purple";
  canvas.freeDrawingBrush.width = 10;
  canvas.renderAll();
}
