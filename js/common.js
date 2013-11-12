$(document).ready(function() {


	//popup
	jQuery('.hero__media-in').click(function(event) {
		jQuery('.popup').addClass('is-active');
		jQuery('.overlay').addClass('is-active');
		return false;
	});
	jQuery('.popup__close, .overlay').click(function(event) {
		jQuery('.popup').removeClass('is-active');
		jQuery('.overlay').removeClass('is-active');
		return false;
	});

	//quickmenu
	$('.quickmenu').click(function (e) {
		$(this).toggleClass('is-active');
		$('.quickmenu__drop').toggle();
	});

	//scroll
	if ($('.scroll').length > 0) {
		$('.scroll').jScrollPane({
			showArrows: true,
			verticalArrowPositions: 'split',
			horizontalArrowPositions: 'split',
			autoReinitialise: true
		});
	};

	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.find('span');
		var item = el.find('li');
		var list = el.find('ul');
		el_title.click(function() {
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
		});
		item.click(function() {
			var val = $(this).text();
			$(this).parent().prev().addClass('is-selected');
			$(this).parent().prev().html(val + '<i></i>');
			el.removeClass('is-open');
		});
		el_title.click(function(event){
		  event.stopPropagation();
		});
	};
	select();

	//click document
	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

	//masked input
	jQuery(function($){
		$("#phone").mask("+38 (999) 999-99-99");
	});


});








//popup position
$(function() {
	var popupheight = $(".popup").height();
	var popupwidth = $(".popup").width();
	$(".popup").css("margin-top", -popupheight / 2);
	$(".popup").css("margin-left", -popupwidth / 2);
});

$(window).resize(function() {
	var popupheight = $(".popup").height();
	var popupwidth = $(".popup").width();
	$(".popup").css("margin-top", -popupheight / 2);
	$(".popup").css("margin-left", -popupwidth / 2);
});










