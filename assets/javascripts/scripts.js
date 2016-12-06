var drawCanvases = function() {

    var canvases = document.getElementsByClassName("separator-line-canvas");

    for (var i = 0; i < canvases.length; i++) {
      var canvas = canvases[i];
      var ctx = canvas.getContext("2d");

      ctx.beginPath();

      var heading = canvas.parentElement;
      var canvasHeight = 40;
      if (canvas.classList.contains("canvas-what-is-iaeste")) {
        var canvasWidth = heading.offsetWidth + 200;
        var xLengthHorizontalLine = 0.8 * canvasWidth;
        ctx.lineWidth = 4;
      } else {
        var canvasWidth = heading.offsetWidth + 50;
        var xLengthHorizontalLine = 0.65 * canvasWidth;
        ctx.lineWidth = 2;
      }


      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.moveTo(0, 2);
      ctx.lineTo(xLengthHorizontalLine, 4);
      ctx.lineTo(canvasWidth - 4, canvasHeight - 4);

      ctx.lineCap = "round";
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
