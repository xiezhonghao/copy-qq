/**
 * Created by xzh on 16-8-23.
 */

export function fn(idd) {
  var drawing = document.getElementById(idd);
  var context= drawing.getContext('2d');
  context.beginPath();
  context.moveTo(2,150);
  context.lineTo(260,70);
  context.moveTo(130,37);
  context.lineTo(52,75);
  context.lineTo(252,75);
  context.moveTo(252,77);
  context.lineTo(52,77);
  context.lineTo(130,113);
  context.moveTo(130,115);
  context.lineTo(50,75);
 context.stroke();
}

