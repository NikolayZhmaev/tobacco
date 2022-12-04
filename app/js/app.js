// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
/*jshint multistr: true */

/*jshint esversion: 6 */

import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {

	$('.hamburger').click(function () {
		$(this).toggleClass('hamburger_active');
		$('.menu-mobile__wrapper').toggleClass('active');
		$('body').toggleClass('stop-scroll');
	});



	$(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 400) {
				$('.btn-up').removeClass('btn-up_hide');
			} else {
				$('.btn-up').addClass('btn-up_hide');
			}
		});

		$(".btn-up_hide").click(function () {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 500,
				easing: "swing"
			});
			return false;
		});
	});

	$(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 280) {
				$('.main-menu').addClass('main-menu__scroll');
			} else {
				$('.main-menu').removeClass('main-menu__scroll');
			}
		});
	});

	var slider = document.getElementsByClassName("products__slider");


	$('.products__slider').each(function () {
		if ($(this).find('.item').length > 4) {
			$(this).slick({
				arrows: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				variableWidth: true,
				dots: true,
				dotsClass: 'castomDotsClass',
			});
			$(this).slick('setPosition');
		}
	});	


	$(function () {
		var tab = $('#new-products__tabs .tabs__items > div');
		tab.hide().filter(':first').show();

		// Клики по вкладкам.
		$('#new-products__tabs .tabs__nav a').click(function () {
			tab.hide();
			tab.filter(this.hash).show();
			return false;
		}).filter(':first').click();

		$('#new-products__tabs .tabs-mobile__nav a').click(function () {
			tab.hide();
			tab.filter(this.hash).show();
			return false;
		}).filter(':first').click();
	});

	$('.brand__slider').slick({
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 800,
		variableWidth: true,
		centerMode: true,
	});	


	const div = document.createElement("div");
	div.classList.add('filling-empty-space-childs');


	if ($(window).width() < 1275) {
		$('.filling-empty-space-childs').remove();

		$('.product__items').each(function () {
			$('.product__items').each(function () {
				let quantity = $(this).find('.item').length;
				if (quantity > 1) {
					switch (quantity % 3) {
						case 2:							
							$(this).append('<div class="filling-empty-space-childs"></div>');
							break;
					}
				}
			});
		});

	} else if ($(window).width() > 1275) {
		$('.filling-empty-space-childs').remove();
		$('.product__items').each(function () {
			let quantity = $(this).find('.item').length;			
			if (quantity > 1) {
				switch (quantity % 4) {
					case 2:						
						$(this).append('<div class="filling-empty-space-childs"></div>\
						<div class="filling-empty-space-childs"></div>\
						');
						break;
					case 3:						
						$(this).append('<div class="filling-empty-space-childs"></div>');
						break;
				}
			}
		});
	}

	$('.partners-slider__wrapper').slick({
		arrows: false,
		speed: 800,
		dots: true,
		dotsClass: 'castomDotsClass',
	});	


	// подгрузка товаров
	$(document).ready(function () {
		$('.product-block').each(function () {
			let button = $(this).find('.button_show');
			let listItem = $(this).find('.product__items .item');
			let numInList = listItem.length;			
			
			if (numInList > 8) {
				let numToShow = 8;
				listItem.hide();
				if (numInList > numToShow) {
					button.show();
				}
				$(this).find('.product__items .item').slice(0, numToShow).show();
				button.click(function () {
					var showing = listItem.filter(':visible').length;
					listItem.slice(showing - 1, showing + numToShow).fadeIn();
					var nowShowing = listItem.filter(':visible').length;
					if (nowShowing >= numInList) {
						button.hide();
					}
				});
			} else {
				button.hide();
			}
		});
	});

	// Custom JS

});