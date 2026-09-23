var txtSite = 0.7;
var isOver = false;
var messageTxt = 350;
if($('body.en').length) {
	messageTxt = 350;
}
if (window.innerWidth < 768) {
	var messageTxt = 180;
	if($('body.en').length) {
		messageTxt = 180;
	}
}
$(function () {
	$('.mainVisaul .mv').css('height', window.innerHeight);
	$('#main .topBox').css('padding-bottom', window.innerHeight);
	$(window).resize(function () {
		$('.headLine01:not(.ab)').css('height', window.innerHeight);
		if (window.innerWidth > 767 && !$('body').hasClass('isPad')) {
			$('.mainVisaul .mv').css('height', window.innerHeight);
			$('#main .topBox').css('padding-bottom', window.innerHeight);
		}
	})
	if($('body').hasClass('isPad')){
		$('.lazyvideo').attr('src', $('.lazyvideo').attr('data-pad'));
	}else if (window.innerWidth > 767) {
		$('.lazyvideo').attr('src', $('.lazyvideo').attr('data-pc'));
	} else {
		$('.lazyvideo').attr('src', $('.lazyvideo').attr('data-sp'));
	}

	$('.slickBox').each(function () {
		var slider = $(this);
		slider.slick({
			autoplay: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			arrows: false,
			slidesToShow: 1,
			dots: true,
			speed: 1000,
		});
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > $('.message').offset().top - window.innerHeight && $(window).scrollTop() < $('.history').offset().top - window.innerHeight) {
			$('.message').addClass('fix');
		} else {
			$('.message').removeClass('fix');
		}

		if($(window).scrollTop() > (window.innerHeight*2 + 100)) {
			$('#main .message .topBox').css('opacity','0');
		}else{
			$('#main .message .topBox').css('opacity','1');
		}

		if($(window).scrollTop() > $('#container').outerHeight() - window.innerHeight*2) {
			$('#main .future .bg02').addClass('visible')
		}else{
			$('#main .future .bg02').removeClass('visible')
		}

		if($(window).scrollTop() > ($('#main .history .content').offset().top + 100)) {
			$('#main .history .topBox').css('opacity','0');
		}else{
			$('#main .history .topBox').css('opacity','1');
		}

		$('.pointer').each(function(){
			var delyh = window.innerHeight*0.3;
			var site = $(this).offset().top - window.innerHeight + delyh;
			if($(window).scrollTop() > site){
				$(this).addClass('show');
			}else{
				$(this).removeClass('show');
			}
		})

		$('#main .topBox').each(function () {
			txttop = 1 - txtSite;
			var site = $(this).offset().top - window.innerHeight * txttop;
			if ($(window).scrollTop() > site) {
				$(this).addClass('showTxt');
			} else {
				$(this).removeClass('showTxt');
			}
		})
		$('.js-box').each(function () {
			var content = $(this).find('.content');
			if (content.length) {
				var scrollH1, scrollH2;
				scrollH1 = window.innerHeight * 0.5 - 70;

				if (window.innerWidth > 767) {
					scrollH2 = window.innerHeight * 0.5 + 80;
				} else {
					scrollH2 = window.innerHeight * 0.5 + 50;
				}

				if ($(window).scrollTop() > $(this).find('.pos').offset().top - scrollH2) {
					$(this).find('.headLine01').addClass('op');
				} else {
					$(this).find('.headLine01').removeClass('op');
				}
				if ($(window).scrollTop() > content.offset().top - window.innerHeight * (1 - txtSite)) {
					$(this).find('.fixTxt').fadeIn(500);
					$(this).find('.headLine01 .subTtl').fadeOut(500);
					$(this).find('.headLine01 .jp').fadeIn(500);
				} else {
					$(this).find('.fixTxt').fadeOut(500);
					$(this).find('.headLine01 .subTtl').fadeIn(500);
					$(this).find('.headLine01 .jp').fadeOut(500);
				}
				if ($(window).scrollTop() > $(this).next().offset().top - window.innerHeight*0.5 - messageTxt ) {
					$(this).find('.headLine01').addClass('ab');
					$(this).find('.headLine01').css('height',messageTxt*2);
				} else {
					$(this).find('.headLine01').removeClass('ab');
					$(this).find('.headLine01').css('height',window.innerHeight);
				}
			}
		});

		if ($(window).scrollTop() > $('.history').offset().top && $(window).scrollTop() < $('.project').offset().top - window.innerHeight) {
			$('.history').addClass('fix');
		} else {
			$('.history').removeClass('fix');
		}
		if ($(window).scrollTop() > $('.history').offset().top - window.innerHeight * 0.5 + 50) {
			$('.history .headLine01, .history .topBox .subTtl').addClass('show');
		} else {
			$('.history .headLine01, .history .topBox .subTtl').removeClass('show');
		}
		if ($(window).scrollTop() > $('.future').offset().top) {
			$('.future').addClass('fix');
		} else {
			$('.future').removeClass('fix');
		}

		$('.odometer').each(function () {
			var text = $(this).attr('data-year');
			var scroll = $(this).offset().top - window.innerHeight;
			if ($(window).scrollTop() > scroll) {
				$(this).html(text);
				var jpTxt = $(this).parents('.yearBox').find('.txt');
				setTimeout(function(){
					jpTxt.addClass('show');
				},1300);
			}
		});
		$('.linegrow').each(function () {
			var scroll = $(this).offset().top - window.innerHeight;
			if ($(window).scrollTop() > scroll) {
				var height = $(window).scrollTop() - scroll;
				$(this).find('.growline').css('height', height);
			} else {
				$(this).find('.growline').css('height', '0');
			}
		});
		if ($('.js-more.isOver').length) {
			var mleft = $('.js-more.isOver').find('.pointer').offset().left + 35;
			var mtop = $('.js-more.isOver').find('.pointer').offset().top - $(window).scrollTop() + 35;
			$("#pointer").css('transform', 'matrix(1, 0, 0, 1, ' + mleft + ',  ' + mtop + ')');
		};

		$('.scrollplay').each(function(){
			var thistop = $(this).offset().top - window.innerHeight;
			if ($(window).scrollTop() > thistop) {
				if(!$(this).hasClass('allowed')){
					$(this).addClass('allowed');
					$(this).slick('slickPlay');
				}
			}else{
				$(this).removeClass('allowed');
				$(this).slick('slickPause');
			}
		})
	}).trigger('scroll');

	Pace.start();
	$('#loading').show().addClass('show');

	function initLoading() {
		var initDestroyTimeOutPace = function () {
			var counter = 0;
			var refreshIntervalId = setInterval(function () {
				var progress;
				if (typeof $('.pace-progress').attr('data-progress-text') !== 'undefined') {
					progress = Number($('.pace-progress').attr('data-progress-text').replace('%', ''));
					$('.loading .loadingLogo.logo02 img').css('width', progress + '%');
				}
				if (progress === 99) {
					counter++;
				}
				if (counter > 50) {
					clearInterval(refreshIntervalId);
					$('.loading .loadingLogo').css('opacity', '1');
					endLoading();
				}
			}, 100);
		};
		initDestroyTimeOutPace();
	};

	initLoading();
	Pace.on('done', function () {
		endLoading();
	});

	function endLoading() {
		$('.lazyvideo')[0].play();
		$('.lazyvideo')[0].addEventListener('ended', function () {
			$('.mainVisaul .scroll').fadeIn();
		}, false);
		setTimeout(function () {
			$('.loading').fadeOut(500);
			$('body').addClass('loadover');
		}, 500);
	};

	/* if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('#pointer').remove();
	} else {
		var xMousePos = 0;
		var yMousePos = 0;

		$(window).on('mousemove', _.debounce(function (event) {
			xMousePos = event.clientX;
			yMousePos = event.clientY;
		}, 50, {
			maxWait: 100
		}));
		window.requestAnimationFrame(function PointerMove() {
			if (!isOver) {
				$("#pointer").css('transform', 'matrix(1, 0, 0, 1, ' + xMousePos + ',  ' + yMousePos + ')');
			}
			window.requestAnimationFrame(PointerMove);
		});
	} */

	$('#main .history,#pointer').hover(function () {
		$("#pointer").addClass('show');
	}, function () {
		$("#pointer").removeClass('show');
	});
	$('#main .history .js-more').hover(function () {
		isOver = true;
		var mleft = $(this).find('.pointer').offset().left + 35;
		var mtop = $(this).find('.pointer').offset().top - $(window).scrollTop() + 35;
		$("#pointer").css('transform', 'matrix(1, 0, 0, 1, ' + mleft + ',  ' + mtop + ')');
		setTimeout(function () {
			$("#pointer").fadeOut(200);
		}, 300);
		$(this).addClass('isOver');
	}, function () {
		isOver = false;
		$("#pointer").fadeIn(200);
		$(this).removeClass('isOver');
	});

	const slideLength = document.querySelectorAll('.scrollBox .swiper-slide').length;
	const params = new Swiper('.scrollBox', {
		loop: true,
		loopedSlides: slideLength,
		slidesPerView: 'auto',
		speed: 6000,
		freeMode: {
			enabled: true,
			momentum: false,
		},
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		on: {
			touchEnd: (swiper) => {
			swiper.slideTo(swiper.activeIndex+1);
			}
		}
	});

	if (window.innerWidth > 767) {
		$('#main .history .js-more').each(function () {
			var $this = $(this);
			$this.attr('data-awidth', $this.innerWidth());
			$this.attr('data-aheight', $this.innerHeight());
			var html = $(this).find('.more').html();
			var array = html.split('<br class="pc">');
			var ele = $(this).find('.more').parent();
			for (var i = 0; i < array.length; i++) {
				ele.append('<span class="lineTxt">' + array[i] + '</span>');
			}
			$(this).addClass('open');
			setTimeout(function () {
				var height = $this.outerHeight();
				var width = $this.outerWidth();
				$this.attr('data-width', width);
				$this.attr('data-height', height);
				setTimeout(function () {
					$this.removeClass('open');
					$this.find('.lineTxt').hide();
					$this.find('.lineTxt').remove();
					$this.css('width', 'auto');
					$this.css('height', 'auto');
					setTimeout(function () {
						if(!navigator.userAgent.indexOf('Firefox')){
							$this.css('width', $this.innerWidth());
							$this.css('height', $this.innerHeight());
							$this.attr('data-awidth', $this.innerWidth());
							$this.attr('data-aheight', $this.innerHeight());
						}else{
							$this.css('width', $this.attr('data-awidth'));
							$this.css('height', $this.attr('data-aheight'));
						}
					},500);
				},10);
			},10);
		});
		$('.js-more').click(function (event) {
			var clicktag = $(event.target)[0];
			if(clicktag.tagName == 'A' || clicktag.tagName == 'a'){
				return;
			}
			if($(this).hasClass('ismoving')){
				return;
			}
			if (!$(this).hasClass('over')) {
				var delay_speed = 50;
				var fade_speed = 90;
				$(this).find('.hide').hide();
				$(this).find('.spMore').fadeIn();
				$(this).find('.pointer .txt').text('close');
				$(this).addClass('ismoving');
				var html = $(this).find('.more').html();
				var array = html.split('<br class="pc">');
				var ele = $(this).find('.more').parent();
				var num = 0;
				$(this).find('.more').hide();
				for (var i = 0; i < array.length; i++) {
					setTimeout(function () {
						ele.append('<span class="lineTxt">' + array[num] + '</span>');
						ele.find('.lineTxt:last-of-type').animate({
							opacity: '1'
						}, fade_speed * (num + 2));
						num++;
					}, delay_speed * i);
				}
				var eleW = $(this).attr('data-width');
				var eleH = $(this).attr('data-height');
				var time = delay_speed*array.length;
				$(this).animate({
					width: eleW,
					height: eleH,
				}, {
					duration: time,
                    easing: 'easeOutCubic',
					iterations: 1,
				});
				var $this = $(this);
				setTimeout(function(){
					if ($this.parents('.sec11').length) {
						$('#main .history .sec11 .imgBox .photoBox .photo02').fadeIn(1000);
					}
                },time + 150);
				setTimeout(function(){
					$this.removeClass('ismoving');
					$this.addClass('open');
                },time + fade_speed * array.length + 150);

				if ($(this).parents('section:not(.history)').find('.slickBox').length) {
					var slickimg = $(this).parents('section:not(.history)').find('.slickBox');
					slickimg.addClass('allowed');
					setTimeout(function () {
						slickimg.slick('slickNext');
						slickimg.slick('slickPlay');
					}, time + 1800);
				}

				$(this).addClass('over');
			} else {
				var delay_speed = 40;
				var fade_speed = 90;
				$(this).addClass('ismoving closing');
				$(this).find('.pointer .txt').text('more');
				var length = $(this).find('.lineTxt').length;
				fade_speed = 10;
				var $this = $(this);
				$(this).find('.lineTxt').each(function () {
					var txt = $(this);
					var i = $this.find('.lineTxt').index(txt);
					var num = length - i;
					if(num == 1) {
						txt.hide();
					}else{
						setTimeout(function () {
							var hidetime = fade_speed*(num/2);
                            txt.animate({
                                opacity: '0'
                            },hidetime);
							setTimeout(function () {
								txt.remove();
							},hidetime+5);
                        }, delay_speed * num);
                    }
				});
				var lineTxt = $(this).find('.lineTxt');
				var ele = $(this);
				var eleW = ele.attr('data-awidth');
				var eleH = ele.attr('data-aheight');
				fade_speed = 45;
                var time = delay_speed*length + fade_speed * length + fade_speed;
                setTimeout(function(){
                    $this.animate({
                        width: eleW,
                        height: eleH,
                    }, {
                        duration: time,
                        easing: 'easeOutCubic',
                        iterations: 1,
                    });
                },fade_speed);
				var time2 = 45*length;
				setTimeout(function () {
					$this.find('.spMore').hide();
					$this.find('.hide').show();
                }, time2);
				setTimeout(function () {
					lineTxt.remove();
                    ele.removeClass('ismoving closing');
                }, time);
				$(this).removeClass('over');
				$(this).removeClass('open');
				if ($(this).parents('section:not(.history)').find('.slickBox').length) {
					var slickimg = $(this).parents('section:not(.history)').find('.slickBox');
					slickimg.slick('slickPause');
					slickimg.removeClass('allowed');
				}
				if ($(this).parents('.sec11').length) {
					$('#main .history .sec11 .imgBox .photoBox .photo02').fadeOut(500);
				}
			}
		});
	} else {
		$('#main .history .js-more').each(function () {
			var html = $(this).find('.more').html();
			var array = html.split('<br class="sp">');
			var ele = $(this).find('.more').parent();
			for (var i = 0; i < array.length; i++) {
				ele.append('<span class="lineTxt">' + array[i] + '</span>');
			}
			var $this = $(this);
			$(this).addClass('open');
			setTimeout(function () {
				var height = $this.outerHeight();
				var width = $this.outerWidth();
				$this.attr('data-width', width);
				$this.attr('data-height', height);
			}, 50);
		});
		setTimeout(function () {
			$('#main .history .js-more').each(function () {
				$(this).find('.lineTxt').remove();
				$(this).removeClass('open');
				var height = $(this).innerHeight();
				var width = $(this).innerWidth();
				$(this).attr('data-awidth', width);
				$(this).attr('data-aheight', height);
			});
		}, 500);
		$('.js-more .pointer').click(function () {
			$(this).hide();
			$(this).parents('.js-more').find('.hide').hide();
			$(this).parents('.js-more').find('.spMore').fadeIn();
			if($('body.en').length){
				$(this).parents('.js-more').addClass('over');
			}else{
				$(this).parents('.js-more').addClass('over open');
			}
			var html = $(this).parents('.js-more').find('.more').html();
			var array = html.split('<br class="sp">');
			$(this).parents('.js-more').find('.more').html('').show();
			var ele = $(this).parents('.js-more').find('.more').parent();
			var delay_speed = 60;
			var fade_speed = 100;
			var num = 0;
			$(this).parents('.js-more').find('.more').remove();
			for (var i = 0; i < array.length; i++) {
				setTimeout(function () {
					ele.append('<span class="lineTxt">' + array[num] + '</span>');
					ele.find('.lineTxt:last-of-type').animate({
						opacity: '1'
					}, fade_speed * (num + 2));
					num++;
				}, delay_speed * i);
			}
			var eleW = $(this).parents('.js-more').attr('data-width');
			var eleH = $(this).parents('.js-more').attr('data-height');
			var time = delay_speed*array.length;
			$(this).parents('.js-more').animate({
				width: eleW,
				height: eleH,
			}, {
				duration: time,
				easing: 'easeOutCubic',
				iterations: 1,
			});
			if ($(this).parents('section:not(.history)').find('.slickBox').length) {
				var slickimg = $(this).parents('section:not(.history)').find('.slickBox');
				slickimg.addClass('allowed');
				setTimeout(function () {
					slickimg.slick('slickNext');
					slickimg.slick('slickPlay');
				}, time + 1800);
			}
			if ($(this).parents('.sec03').length) {
				$(this).parents('.sec03').find('.imgBox .photoBox > div').removeClass('fadeInAnim');
			}
		});
	}
});
$(window).on('load', function () {
	$('.slickBox .lazy:not(.loadover)').each(function () {
		var src = $(this).attr('data-original');
		$(this).attr('src', src).addClass('.loadover');
	});
});