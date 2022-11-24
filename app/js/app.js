// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

/*jshint esversion: 6 */

import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {

	$('.hamburger').click(function(){
		$(this).toggleClass('hamburger_active');
		$('.menu-mobile__wrapper').toggleClass('active');
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
			if ($(window).scrollTop() > 200) {
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

	$('.products__slider').on('wheel', (function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));

	

		
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

	
	$('.brand__slider').on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
	}));

	






















	// Custom JS

});