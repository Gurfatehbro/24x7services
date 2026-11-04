(function ($) {
"use strict";

//preloader activation
var win =  $(window);
win.on('load', function () {
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
    
// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

//sticky menu activation
win.on('scroll', function () {
	var scroll = win.scrollTop();
	if (scroll < 60) {
		$(".header-sticky").removeClass("sticky-menu");
	} else {
		$(".header-sticky").addClass("sticky-menu");
	}
});
    
// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

// isotop activation
$('.portfolio-area').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.aportfolio-active').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1,
	  }
	});
    
    // filter items on button click
    $('.aportfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

});

//for menu active class
$('.aportfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

//venobox activation
$('.venobox').venobox(); 

    
// Scroll To Top Js
	function smoothSctollTop() {
		$('.smooth-scroll a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 0
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// Show or hide the sticky footer button
	win.on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200)
		} else{
			$('#scroll').fadeOut(200)
		}
	});

	//Animate the scroll to yop
	$('#scroll').on('click', function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0,
		}, 1500);
	});
    
    
	// WOW active
	var wow = new WOW(
		{
			mobile: false,       // trigger animations on mobile devices (default is true)
		}
	);
	wow.init();

    
    
	/*------------------------------------
        Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = '.slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: false,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-paginations',
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
    


    // team 3 activation
	if (jQuery(".team-active-3").length > 0) {
		let swiperteam = new Swiper('.team-active-3', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			infinite: false,
            autoplay: {
				delay: 5000,
			},
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 2,
				},
				768: {
				slidesPerView: 3,
				},
				1200: {
				slidesPerView: 2,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}
    
    
    // team 3 activation
	if (jQuery(".testimonial-active-3").length > 0) {
		let swipertest = new Swiper('.testimonial-active-3', {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			infinite: false,
		
			// If we need pagination
			pagination: {
			el: '.swiper-pagination2',
			clickable: true,
			},
		
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			el: '.swiper-scrollbar',
			dynamicBullets: true,
			},
			breakpoints: {
				480: {
				slidesPerView: 1,
				},
				768: {
				slidesPerView: 2,
				},
				1200: {
				slidesPerView: 3,
				},
				1400: {
				slidesPerView: 3,
				},
			}

		});
	}
    
    
    // gallery activation
	if (jQuery(".gallery-active").length > 0) {
	let gallery = new Swiper('.gallery-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: false,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			480: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 3,
			},
			1200: {
			  slidesPerView: 4,
			},
		  }

	  });
	}

    // testimonial 2 activation
	if (jQuery(".testimonial-active-2").length > 0) {
	let testimonial2 = new Swiper('.testimonial-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			640: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 1,
			},
			1024: {
			  slidesPerView: 1,
			},
		  }

	  });
	}

    // blog gallery activation
	if (jQuery(".ablog__img--active").length > 0) {
	let ablogimgactive = new Swiper('.ablog__img--active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		  dynamicBullets: true,
		},
		breakpoints: {
			640: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 1,
			},
			1024: {
			  slidesPerView: 1,
			},
		  }

	  });
	}
    
    // testimonial 1 activation
	if (jQuery(".atestimonial-active").length > 0) {
	let atestimonial1 = new Swiper('.atestimonial-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},

	  });
	}
    
	// brand activation
	if (jQuery(".brand-active").length > 0) {
	let brand = new Swiper('.brand-active', {
		slidesPerView: 2,
		spaceBetween: 30,
		// direction: 'vertical',
		loop: true,
        autoplay: {
				delay: 5000,
			},
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
		breakpoints: {
			550: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 4,
			},
			1200: {
			  slidesPerView: 5,
			},
		  }

	  });
	}

	// -------------------------------------------------------------
	// Compliance-Ready Enquiry Form Submission Handler (No Forced Redirection)
	// -------------------------------------------------------------
	$(document).on('submit', 'form[action*="msg.php"], form[action*="/api/enquiry"], #contact-enquiry-form', function(e) {
		e.preventDefault();
		var $form = $(this);
		var $submitBtn = $form.find('input[type="submit"], button[type="submit"]');
		var originalBtnText = $submitBtn.is('input') ? $submitBtn.val() : $submitBtn.html();

		// Disable submit button while sending
		$submitBtn.prop('disabled', true);
		if ($submitBtn.is('input')) {
			$submitBtn.val('Registering Request...');
		} else {
			$submitBtn.html('Registering Request...');
		}

		var brand = ($form.find('[name="brand"]').val() || $form.find('[name="company"]').val() || '').trim();
		if (!brand || brand === 'Select Brand / Company*' || brand === 'Select Brand') {
			var path = (window.location.pathname + window.location.href + ' ' + document.title).toLowerCase();
			if (path.indexOf('whirlpool') !== -1) brand = 'Whirlpool';
			else if (path.indexOf('samsung') !== -1) brand = 'Samsung';
			else if (path.indexOf('lg') !== -1) brand = 'LG';
			else if (path.indexOf('godrej') !== -1) brand = 'Godrej';
			else if (path.indexOf('bosch') !== -1) brand = 'Bosch';
			else if (path.indexOf('ifb') !== -1) brand = 'IFB';
			else if (path.indexOf('hitachi') !== -1) brand = 'Hitachi';
			else if (path.indexOf('panasonic') !== -1) brand = 'Panasonic';
			else if (path.indexOf('haier') !== -1) brand = 'Haier';
			else if (path.indexOf('siemens') !== -1 || path.indexOf('simens') !== -1) brand = 'Siemens';
			else brand = 'Multi-Brand Service Support';
		}

		var name = ($form.find('[name="fname"]').val() || '').trim();
		var contact = ($form.find('[name="contact"]').val() || '').trim();
		var service = ($form.find('[name="services"]').val() || '').trim();
		var age = ($form.find('[name="productold"]').val() || '').trim();
		var address = ($form.find('[name="address"]').val() || '').trim();

		var targetPhone = '918586935159'; // Support desk WhatsApp
		var msg = '⚡ *NEW SERVICE BOOKING ENQUIRY* ⚡\n' +
				  '━━━━━━━━━━━━━━━━━━━━\n' +
				  '🏢 *Company / Brand:* ' + brand + '\n' +
				  '👤 *Customer Name:* ' + (name || 'Not Provided') + '\n' +
				  '📱 *Contact Number:* ' + (contact || 'Not Provided') + '\n' +
				  '🛠️ *Service Required:* ' + (service || 'General Service') + '\n' +
				  '⏳ *Product Age:* ' + (age || 'Not Specified') + '\n' +
				  '📍 *Customer Address:* ' + (address || 'Delhi NCR') + '\n' +
				  '━━━━━━━━━━━━━━━━━━━━';

		var optionalWhatsappUrl = 'https://api.whatsapp.com/send?phone=' + targetPhone + '&text=' + encodeURIComponent(msg);

		// Post to Vercel API endpoint
		var endpoint = '/api/enquiry';
		$.ajax({
			type: 'POST',
			url: endpoint,
			data: $form.serialize(),
			dataType: 'json',
			timeout: 8000
		}).always(function() {
			// Re-enable button
			$submitBtn.prop('disabled', false);
			if ($submitBtn.is('input')) {
				$submitBtn.val(originalBtnText);
			} else {
				$submitBtn.html(originalBtnText);
			}

			// Clear previous notice if any
			$form.find('.enquiry-result-alert').remove();

			// Construct in-page voluntary confirmation (NO AUTOMATIC REDIRECT)
			var successHtml = '<div class="enquiry-result-alert alert alert-success text-center p-4 my-3" style="background:#ecfdf5; border:1px solid #10b981; border-radius:8px; margin-top:20px;">' +
				'<h4 style="color:#065f46; font-weight:700; margin-bottom:8px;"><i class="fa fa-check-circle" style="color:#10b981; margin-right:6px;"></i> Enquiry Registered Successfully!</h4>' +
				'<p style="color:#047857; margin-bottom:12px; font-size:14px; line-height:1.6;">Thank you! Your service request has been logged. Our technician will contact you at <strong>' + (contact || 'your number') + '</strong> within 15 minutes.</p>' +
				'<p style="color:#065f46; font-size:13px; margin-bottom:14px;">Toll-Free Helpline: <a href="tel:18002706013" style="font-weight:700; color:#e63839;">18002706013</a></p>' +
				'<a href="' + optionalWhatsappUrl + '" target="_blank" rel="noopener noreferrer" class="theme-btn" style="background:#25D366; color:#ffffff; padding:10px 20px; font-weight:700; border-radius:6px; display:inline-block; text-decoration:none; font-size:14px;">' +
				'<i class="fab fa-whatsapp" style="margin-right:6px;"></i> Chat on WhatsApp (Optional)' +
				'</a>' +
			'</div>';

			$form.prepend(successHtml);
			if ($form[0] && $form[0].reset) {
				$form[0].reset();
			}

			// Smooth scroll to success message
			$('html, body').animate({
				scrollTop: $form.offset().top - 80
			}, 500);
		});
	});

})(jQuery);