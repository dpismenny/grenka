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

//gallery
function gallery() {
	var el = $('.js-gallery');
	el.find('.gallery__slide a').click(function() {
		if (!$(this).hasClass('is-active')) {
			var pic = $(this).attr('href');
			$(this).parent().parent().find('a').removeClass('is-active');
			$(this).addClass('is-active');
			$(this).parent().parent().parent().parent().next().find('img').attr('src', pic);			
		};		
		return false;
	});
};
gallery();

});