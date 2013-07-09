$(document).ready(function() {

// init variables

	var popup__callback = $(".js-popup-callback");
	var popup__city = $(".js-city-popup");
	var popup__enter = $(".js-popup-enter");
	var prod_carousel = $('.recent-product__carousel');
	var tab = $(".js-tab").find("li"); 
	var tab_cont = $(".js-tab-cont"); 
	// ---------------- CALLBACK POPUP -------------------- //
		$('.callback').click(function() {
			$(this).toggleClass("is-active");
			popup__callback.toggle();
			return false;
		});

	// show/hide recent products
		$('.recent-product__collapse').click(function() {
			$('.recent-product__carousel').slideToggle();
			if ($(this).hasClass("js-inactive")) {
				$(this).removeClass("js-inactive");
				$(this).find("span").text("Свернуть");
				prod_carousel.slideDown();

			}
			else {
				$(this).addClass("js-inactive");
				$(this).find("span").text("Развернуть");
				prod_carousel.slideUp();
			}
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

	// ---------------- tabs -------------------- //
	
	// default
	tab_cont.hide();
	tab_cont.first().show();
	tab.first().addClass("is-active");

	// action
	tab.click(function(){
		tab.removeClass("is-active");
		$(this).toggleClass("is-active");

		var index = $(this).attr("data-tab");

		tab_cont.hide();
		$(index).show();
	});


});