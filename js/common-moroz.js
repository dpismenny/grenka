$(document).ready(function() {

//rating
$('.js-rating').raty({
	width: 80,
	starOff: 'img/icons/rating.png',
  starOn : 'img/icons/rating-act.png',
  score: function() {
    return $(this).attr('data-score');
  }
});
$('.js-rating-big').raty({
	width: 130,
	starOff: 'img/icons/rating-big.png',
  starOn : 'img/icons/rating-big-act.png',
  score: function() {
    return $(this).attr('data-score');
  }
});
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
	el.find('.gallery__slide a').click(function() {
		if (!$(this).hasClass('is-active')) {
			var pic = $(this).attr('href');
			$(this).parent().parent().find('a').removeClass('is-active');
			$(this).addClass('is-active');
			$(this).parent().parent().parent().parent().next().find('img').attr('src', pic);			
		};		
		return false;
	});
	el.find('.gallery__up').click(function() {
		var act = $(this).parent().find('.gallery__slide a.is-active');
		act.removeClass('is-active');
		act.parent().prev().find('a').addClass('is-active');
		var pic = act.parent().prev().find('a').attr('href');
		$(this).parent().next().find('img').attr('src', pic);	
	});
	el.find('.gallery__down').click(function() {
		var act = $(this).parent().find('.gallery__slide a.is-active');
		act.removeClass('is-active');
		act.parent().next().find('a').addClass('is-active');
		var pic = act.parent().prev().find('a').attr('href');
		$(this).parent().next().find('img').attr('src', pic);	
	});
};
gallery();

});