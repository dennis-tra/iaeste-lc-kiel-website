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
  var dropdownLinks = $('a.dropdown-report-link');

  var addFadingsFrom = function(reportInfoDiv) {

    var reportLocation = reportInfoDiv.dataset.reportLocation;
    var reportWho = reportInfoDiv.dataset.reportWho;
    var reportWhen = reportInfoDiv.dataset.reportWhen;
    var reportText = reportInfoDiv.dataset.reportText;
    var reportPDF = reportInfoDiv.dataset.reportPDF;
    var reportImage = reportInfoDiv.dataset.reportImage;

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
  };

  for (var i = 0; i < dropdownLinks.length; i++) {
    var reportLink = dropdownLinks[i];
    
    $(reportLink).on('click', function(ev) {
      var reportId = this.dataset.reportId
      var hoverDummy = $("#" + reportId)[0];
      addFadingsFrom(hoverDummy);

      $('#report-dropdown').click()
    });

  }

  for (var report in $('.report-item')) {
    $(report).find('.hover-dummy').on('click', function(ev) {
      addFadingsFrom(this);
    });
  }

});

window.onresize = function(event) {
  drawCanvases();
};
