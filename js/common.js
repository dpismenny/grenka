$(document).ready(function() {

// init variables

	var popup__callback = $(".js-popup-callback");
	var popup__city = $(".js-city-popup");
	var popup__enter = $(".js-popup-enter");

	// ---------------- CALLBACK POPUP -------------------- //
		$('.callback').click(function() {
			$(this).toggleClass("is-active");
			popup__callback.toggle();
			return false;
		});

		$('.recent-products__collapse').click(function() {
			$('.recent-products__carousel').slideToggle();
		});

		$(document).click(function() {
			$('.callback').removeClass('is-active');
			popup__callback.hide();

			$('.js-change-city').parent().removeClass("is-active");
			popup__city.hide();

			popup__enter.hide();
		});

		popup__callback.click(function(event){
			event.stopPropagation();
		});

	// ---------------- Change city POPUP -------------------- //
		$('.js-change-city').click(function() {
			$(this).parent().toggleClass("is-active");
			popup__city.toggle();
			return false;
		});

		popup__city.click(function(event){
			event.stopPropagation();
		});

	// ---------------- Change city POPUP -------------------- //
		$('.js-enter').click(function() {
			//$(this).toggleClass("is-active");
			popup__enter.toggle();
			return false;
		});

		popup__enter.click(function(event){
			event.stopPropagation();
		});



});