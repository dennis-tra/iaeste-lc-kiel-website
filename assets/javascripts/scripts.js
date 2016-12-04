$(document).ready(function() {

  var canvases = document.getElementsByClassName("separator-line-canvas");
  var lineWidth = 2;

  for (var i = 0; i < canvases.length; i++) {
    var canvas = canvases[i];
    var heading = canvas.parentElement;
    var canvasWidth = heading.offsetWidth;
    var canvasOverlap = 100;
    var canvasHeight = 50;

    canvas.width = canvasWidth + canvasOverlap;
    canvas.height = canvasHeight;

    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 2);
    ctx.lineTo(canvasWidth, 2);
    ctx.lineTo(canvasWidth + canvasOverlap - 2, canvasHeight - 2);

    ctx.lineCap = "round";
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00416C';

    ctx.stroke();
  }


});
