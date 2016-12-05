var drawCanvases = function() {

    var canvases = document.getElementsByClassName("separator-line-canvas");
    var lineWidth = 2;

    for (var i = 0; i < canvases.length; i++) {
      var canvas = canvases[i];
      var heading = canvas.parentElement;
      var canvasHeight = 40;
      var canvasWidth = heading.offsetWidth + 50;

      var xLengthHorizontalLine = 0.65 * canvasWidth;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      var ctx = canvas.getContext("2d");

      ctx.beginPath();
      ctx.moveTo(0, 2);
      ctx.lineTo(xLengthHorizontalLine, 2);
      ctx.lineTo(canvasWidth - 2, canvasHeight - 2);

      ctx.lineCap = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#00416C';

      ctx.stroke();
    }
}

$(document).ready(function() {
  drawCanvases();
});

window.onresize = function(event) {
  drawCanvases();
};
