$(document).ready(function() {

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

//stop propagation
$(document).click(function() {
	$('.js-select').removeClass('is-open');
	$('.label__select-options').hide();
});
$('.js-select').click(function(event){
    event.stopPropagation();
});

});