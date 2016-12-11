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

  var reportHeadingDiv = $("#report-heading");
  var reportTextDiv = $("#report-text");
  var reportSubheadingDiv = $("#report-subheading");
  var reportPDFButton = $("#report-pdf-button");
  var travelReportsSection = $('.travel-reports-section')

  for (var report in $('.report-item')) {
    $(report).find('.hover-dummy').on('click', function(ev) {
      var reportID = ev.target.id;
      var reportLocation = $('#' + ev.target.id + '_location')[0].innerHTML;
      var reportWho = $('#' + ev.target.id + '_who')[0].innerHTML;
      var reportWhen = $('#' + ev.target.id + '_when')[0].innerHTML;
      var reportText = $('#' + ev.target.id + '_text')[0].innerHTML;
      var reportPDF = $('#' + ev.target.id + '_pdf')[0].innerHTML;
      var reportImage = $('#' + ev.target.id + '_image')[0].innerHTML;

      reportHeadingDiv.fadeOut(function() {
        $(this).text(reportLocation).fadeIn();
      });

      reportSubheadingDiv.fadeOut(function(){
        $(this).text(reportWho + ", " + reportWhen).fadeIn();
      });

      reportTextDiv.fadeOut(function(){
        $(this).text(reportText).fadeIn();
      });

      reportPDFButton.fadeOut(function(){
        $(this).removeClass("hidden")
        $(this).attr("href", reportPDF);
        $(this).fadeIn();
      });

      $(travelReportsSection).fadeTo('slow', 0.3, function() {
          $(this).css('background-image', 'url(' + reportImage + ')');
      }).fadeTo('slow', 1);

    });
  }

});

window.onresize = function(event) {
  drawCanvases();
};
