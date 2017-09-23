$(document).ready(function() {
  // var navMain = $("#navbar");
  // navMain.on("click", "a", null, function() {
  //     navMain.collapse('hide');
  // });
  // var map = new google.maps.Map(document.getElementById('map-canvas'), {
  //   zoom: 7,
  //   center: new google.maps.LatLng(originalLocation[0], originalLocation[1]),
  //   scrollwheel: false
  // });
  // $('#product-modal-1').on('show.bs.modal', function(e) {
  //   $('body').addClass('test');
  // });
}); // close out script
$('a[href^=#]').on('click', function(e) {
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 'slow');
  e.preventDefault();
});