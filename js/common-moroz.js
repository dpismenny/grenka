$(document).ready(function() {

//hide address on cart
$('.js-hide-address').click(function() {
  if ($(this).find('input').is(':checked')) {
    $(this).next().slideUp();
  }
  else {
    $(this).next().slideDown();
  }
});

});