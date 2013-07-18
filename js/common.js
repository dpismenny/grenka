$(document).ready(function() {

// init variables

	var prod_carousel = $('.recent-product__carousel');
	var prod = $(".product"); 
	var prod_image = $(".product__image"); 
	var key_text = $('.js-text-key'); 
    var recent_key = $(".js-recent-key");
    var hidden_block = $(".js-hidden-block").hide();
    //input number
function input_number() {
    $('.js-input-number').each(function() {
        var el = $(this);
        var el_plus = el.find('.input-number__plus');
        var el_minus = el.find('.input-number__minus');
        var el_value = el.find('.input-number__value');
        el_plus.click(function() {
            var value = el_value.val();
            value = parseInt(value);
            if (value >= 1) {
                value++;
                el_value.val(value);
            };
        });
        el_minus.click(function() {
            var value = el_value.val();
            value = parseInt(value);
            if (value > 1) {
                value--;
                el_value.val(value);
            };
        });
    });
}
input_number();

//stop propagation
$(document).click(function() {
    $('.js-select').removeClass('is-open');
    $('.label__select-options').hide();
    $('.js-top-popup').removeClass('is-active');
});
$('.js-top-popup').click(function(event){
    event.stopPropagation();
});

//location
$('.js-top-popup').click(function() {
    $('.js-top-popup').removeClass('is-active');
    $(this).toggleClass('is-active');
});

//select
function select() {
    var el = $('.js-select');
    var title = $('.label__select-val');
    var option = $('.label__select-options li');
    title.click(function() {
        if (!$(this).parent().hasClass('is-open')) {
            $(this).parent().addClass('is-open');
            $(this).next().slideDown();
        }
        else {
            $(this).parent().removeClass('is-open');
            $(this).next().hide();
        };
    });
    option.click(function() {
        var value = $(this).text();
        $(this).parent().prev().find('span').html(value);
        $(this).parent().parent().removeClass('is-open');
        $(this).parent().hide();
    });
};
select();

$('.js-select').click(function(event){
    event.stopPropagation();
});


// show/hide recent products
	recent_key.click(function() {
		$('.recent__carousel').slideToggle();
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

// ---------------- hide slider text -------------------- //
        
    key_text.live("hover", function(){ 
        $(this).parent().find(".slider-info, .shadow-slider").fadeToggle();
     });  
// ----------------  info-block visible -------------------- //
	$('.js-show-hidden').click(function() {
		$(this).parent().find(hidden_block).slideToggle();
		$(this).toggleClass("is-active");
		return false;
	});

//tabs
function tabs() {
  $('.js-tabs-nav button').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).parent().find('button').removeClass('is-active');
      var value = $(this).attr('data-tab');
      var count = $(this).attr('data-count');
      $(this).addClass('is-active');
      $(this).parent().parent().parent().find('.js-tabs-content').hide();
      $('#' + value).show();
      $(this).parent().next().find('.js-tabs-count').html('('+count+')');
    };    
  });
};
tabs();

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

    if ($('#slider-left-main').length > 0) {
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
    }
    

    // Search example
    $(".js-search-example a").click(function(){
        var text = $(this).text();
        $(".js-searc-input").val(text);
        return false;
    });



});