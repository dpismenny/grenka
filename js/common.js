$(document).ready(function() {

// Created by Eugene Godun!
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
    return false;
});

//select
function select() {
  var el = $('.js-select');
  var title = el.find('.label__select-val');
  var option = el.find('.label__select-options li');
  title.click(function() {          
      if (!$(this).parent().hasClass('is-open')) {
          el.removeClass('is-open');
          el.find('.label__select-options').hide();
          $(this).parent().addClass('is-open');
          $(this).next().slideDown('fast');
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
  title.click(function(event){
      event.stopPropagation();
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
		$(this).parent().find('.js-show-hidden').toggleClass("is-active");
		return false;
	});

//tabs
function tabs() {
  $(".js-tabs-content").first().show();
  $('.tabs__top').next().show();
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
	
  $(".add-order__pic img").hover(
      function () {
        $(this).addClass("is-hover");
      },
      function () {
        $(this).removeClass("is-hover");
      }
    );
    // prod.hover(
    //   function () {
    //     //$(this).parent().parent().addClass("is-hover");
    //   },
    //   function () {
    //     $(this).removeClass("is-hover");
    //   }
    // );

// ------------------- Fancybox ----------------------// 

  $('.js-popup-link').on('click', function() {
    $this = $(this);
    $.fancybox({
        href: $this.attr('href'),
        padding: 0
    });
    return false;
  });

  if ($('#reg-message').length > 0) {
    $.fancybox.open('#reg-message');
  }
  if ($('#recovery_pass').length > 0) {
    $.fancybox.open('#recovery_pass');
  }
  if ($('#created-wish-popup').length > 0) {
    $.fancybox.open('#created-wish-popup');
  }
  if ($('#message-ok').length > 0) {
    $.fancybox.open('#message-ok');
  }
  if ($('#popup-order').length > 0) {
    $.fancybox.open('#popup-order');
  }
// ------------------- END Fancybox ----------------------// 
  function offer() {
    var active_slide = $(".cycle-slide-active");
    var offer_1 = $('.js-offer-slider1');
    var offer_2 = $('.js-offer-slider2');
    var price_1 = offer_1.find(active_slide).attr("data-price");
    var discount_1 = offer_1.find(active_slide).attr("data-discount");
    var price_2 = offer_2.find(active_slide).attr("data-price");
    var discount_2 = offer_2.find(active_slide).attr("data-discount");
    var price = +price_1 + +price_2;
    if (+discount_1 > (+discount_2)) {
      var discount = discount_2;
    }
    else {
       var discount = discount_1;
    }
    var econom = (+price*(+discount/100)).toFixed(1);
    var new_price = (+price*(1-(+discount)/100)).toFixed(1);
    $(".js-offer-price").text(price);
    $(".js-offer-discount").text(discount+'%');
    $(".js-offer-econom").text(econom);
    $(".js-offer-new-price").text(new_price);
  }
  offer();
   $(".offer__slider button").on("click", function(event){ 
      $('.js-offer-slider').on( 'cycle-after', function( event, opts ) {
          offer();
          //alert();
      });
  });

  


  var replace_popup = $(".js-replace-popup");
  $(".js-replace-wish-link").click(function(){
    $(".product__remove-popup").hide();
    $(this).parent().find(replace_popup).toggle();
    return false;
  });
  $(".js-replace-close").click(function(){
    replace_popup.hide();
  })

  var del_popup = $(".js-del-popup");
  $(".js-del-wish-link").click(function(){
    $(".product__remove-popup").hide();
    $(this).parent().find(del_popup).toggle();
    return false;
  });
  $(".js-del-close").click(function(){
    del_popup.hide();
  })

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


  var btn_edit = $(".js-edit-input");
  var btn_add = $(".js-add-field");
  var field_edited = $(".js-edit-me");
  var will_add_field = $(".js-will-add");
  var new_field = $(".js-new-field");
  will_add_field.hide();
  btn_edit.live("click", function(event){
    //$(this).parent().find(field_edited).removeAttr("disabled").removeClass("is-inactive").hide().fadeIn("fast").focus();
    $(this).prev().children(field_edited).removeAttr("disabled").removeClass("is-inactive").hide().fadeIn("fast").focus();
    console.log("edit");
    return false;
  });
  btn_add.live("click", function(event){
    var html = will_add_field.html();
    console.log("add");
    $(this).parent().find(new_field).last().after(html);
    return false;
  });

// scrollpane
  if ($(".js-scroll-pane").length > 0) {
     $('.js-scroll-pane').jScrollPane({
      autoReinitialise: true
     });
  }


  $(".js-show-order").click(function(){
    if ($(this).hasClass("js-active")) {
      $(this).text("Посмотреть");
      $(this).removeClass("js-active");
      $(this).parent().parent().next().find(".cart__table").hide();
    }
    else {
      
      $(this).text("Скрыть");
      $(this).addClass("js-active");
      $(this).parent().parent().next().find(".cart__table").show();
    }
    return false;
  });
  $(".js-detail-order").click(function(){
      $(this).parent().parent().next().find(".cart__table").toggle();
      return false;
  });

  var c_days = $(".js-counter").attr("data-days");
  var c_hours = $(".js-counter").attr("data-hours");
  var c_minutes = $(".js-counter").attr("data-minutes");
  if ($(".js-counter").length > 0) {
    $('.js-counter').countdown({
      until: '+'+c_days +' '+ '+'+c_hours + ' ' + '+'+c_minutes,
      format: 'YOWDHMS',
      layout: $('.js-counter-list').html()
    });
  }
  
// delite compare product
  $(".js-del-compare").click(function(){
      var index = $(this).parent().parent().index();
      $(this).parent().parent().hide();
      $(".js-compare tr").each(function(){
          $(this).children("td").eq(index).hide();
      }); 
  });

// delite filter
  $(".js-del-filter").click(function(){
    $(this).parent().hide();
  });
  $(".js-del-all-filters").click(function(){
    $(this).parent().parent().remove();
    return false;
  }); 

// accordion filter
  $(".js-accord-body").hide();
  $(".js-accord-key").click(function(){
    $(this).next().slideToggle("fast");
  });
    
//  -------------------------------- Created by Artur Moroz!
//rating
 if ($('.js-rating').length > 0) {
  $('.js-rating').raty({
    width: 80,
    starOff: 'img/icons/rating.png',
    starOn : 'img/icons/rating-act.png',
    score: function() {
      return $(this).attr('data-score');
    }
  });
 }

if ($('.js-rating-big').length > 0) {
  $('.js-rating-big').raty({
    width: 130,
    starOff: 'img/icons/rating-big.png',
    starOn : 'img/icons/rating-big-act.png',
    score: function() {
      return $(this).attr('data-score');
    }
  });
 }
if ($('.js-rating-read').length > 0) {
  $('.js-rating-read').raty({
    readOnly: true,
    noRatedMsg: "",
    width: 80,
    starOff: 'img/icons/rating.png',
    starOn : 'img/icons/rating-act.png',
    score: function() {
      return $(this).attr('data-score');
    }
  });
}

//hide address on cart
$('.js-hide-address').click(function() {
  if ($(this).find('input').is(':checked')) {
    $(this).next().slideUp();
  }
  else {
    $(this).next().slideDown();
  }
});

//placeholder
$('.js-placeholder').focus(function() {
  if ($(this).val() == '') {
    $(this).next().hide();
  };
});
$('.js-placeholder').blur(function() {
  if ($(this).val() == '') {
    $(this).next().show();
  };
});

//read all description
$('.js-read-all').click(function() {
  if (!$(this).hasClass('is-open')) {
    $(this).addClass('is-open');
    $(this).html('скрыть');
    $(this).parent().prev().height('auto');
  }
  else {
    $(this).removeClass('is-open');
    $(this).html('Читать полностью...');
    $(this).parent().prev().height('135px');
  }
  
})

//gallery
function gallery() {
  var el = $('.js-gallery');
  el.each(function(){
    $(this).find('.gallery__slide a').click(function() {
      if (!$(this).hasClass('is-active')) {
        var pic = $(this).attr('href');
        $(this).parent().parent().find('a').removeClass('is-active');
        $(this).addClass('is-active');
        $(this).parent().parent().parent().parent().next().find('img').attr('src', pic);      
      };    
      return false;
    });
    $(this).find('.gallery__up').click(function() {
      var act = $(this).parent().find('.gallery__slide a.is-active');
      act.removeClass('is-active');
      act.parent().prev().find('a').addClass('is-active');
      var pic = act.parent().prev().find('a').attr('href');
      $(this).parent().next().find('img').attr('src', pic); 
    });
    $(this).find('.gallery__down').click(function() {
      var act = $(this).parent().find('.gallery__slide a.is-active');
      act.removeClass('is-active');
      act.parent().next().find('a').addClass('is-active');
      var pic = act.parent().prev().find('a').attr('href');
      $(this).parent().next().find('img').attr('src', pic); 
    });
  });
  
};
gallery();



});