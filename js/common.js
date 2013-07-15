$(document).ready(function() {

// init variables

	var popup__callback = $(".js-popup-callback");
	var popup__city = $(".js-city-popup");
	var popup__enter = $(".js-popup-enter");
	var prod_carousel = $('.recent-product__carousel');
	var tab = $(".js-tab").find("li"); 
	var tab_cont = $(".js-tab-cont"); 
	var prod = $(".product"); 
	var prod_image = $(".product__image"); 
	var key_text = $('.js-text-key'); 
    var tab_counter = $(".js-tab-counter");
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

// ---------------- heroes close button -------------------- //
		// $('.heroes__close').click(function() {
		// 	$(this).hide();
		// 	$(".heroes__text").hide();
		// });
		key_text.hover(
		  function () {
		    $(".heroes__text").fadeOut();
		  },
		  function () {
		    $(".heroes__text").fadeIn();
		  }
		);
// ----------------  info-block visible -------------------- //
		$('.info-block__button').click(function() {
			$(".info-block__hide").slideToggle();
			$(".info-block__button").toggleClass("is-active");
			return false;
		});

// ---------------- tabs -------------------- //
	
	// default
	tab_cont.hide();
	tab_cont.first().show();
	tab.first().addClass("is-active");
    var count_first = tab.first().attr("data-counter");
    tab_counter.text("(" + count_first + ")");
	// action
	tab.click(function(){
		tab.removeClass("is-active");
		$(this).toggleClass("is-active");

        var index = $(this).attr("data-tab");
		var count = $(this).attr("data-counter");

		tab_cont.hide();
		$(index).show();

        tab_counter.text("("+count+")");
	});

// zomm product item on hover 

	prod_image.hover(
	  function () {
	    $(this).parent().parent().addClass("is-hover");
	  },
	  function () {
	    //$(this).parent().parent().removeClass("is-hover");
	  }
	);
	prod.hover(
	  function () {
	    //$(this).parent().parent().addClass("is-hover");
	  },
	  function () {
	    $(this).removeClass("is-hover");
	  }
	);

// ------------------- Fancybox ----------------------// 
    $(".to-favorite").fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        padding: 0,
        showCloseButton: true,
        helpers : {
            title : {
                type : 'outside'
            }
        } 
    });


    // Главный слайдер
        // Главный слайдер
        $('#slider-left-main').veronica_slider(
                {
                    active : true, // режим выбора активного элемента
                    autoplay : true, // автоматическая прокрутка
                    height: 107, // высота блока
                    step : 5000, // время в милисикундах для автоматического режима
                    callback : function(el)
                    {
                        $('.slider-biggest').html($('#slider-left-main').find('ul li.active:first').find('div.big_info').html());
                    }, // callback функция при смене активного элемента
                    stop: ['#main_slider_pause','table.main-menu'], // идентификаторы элментов, при наведении на которые автопрокрутка останавливается
                    fixed: true, // режим прокрутки если активный элемент вверху или внизу
                    click : function(el) {
                        $('#slider-left-main').find('li.active').removeClass('active');
                        $(el).addClass('active');
                        $('.slider-biggest').html($('#slider-left-main').find('ul li.active:first').find('div.big_info').html());
                    } // callback функция при клике
                }
        );



});