$(document).ready(function() {

	// ---------------- CALLBACK POPUP -------------------- //
		$('.callback').click(function() {
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				$('.callback__popup').slideUp('fast');
			}
			else {
				$(this).addClass('is-active');
				$('.callback__popup').slideDown('fast');
			}
			return false;
		});

		$('.recent-products__collapse').click(function() {
			$('.recent-products__carousel').slideToggle('fast');
		});

		$(document).click(function() {
			$('.callback').removeClass('is-active');
			$('.callback__popup').slideUp('fast');
		});

		$('.callback__popup').click(function(event){
			event.stopPropagation();
		});

});