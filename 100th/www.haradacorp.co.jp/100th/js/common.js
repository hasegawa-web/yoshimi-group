/*var gaInfo = {
  en: {
    pc: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-banner cc-type-opt-out cc-theme-block cc-static cc-top cc-color-override-1768070765 " style=""><!--googleoff: all--><span id="cookieconsent:desc" class="cc-message">We use cookies for statistical investigation and analysis of browsing situation on our website. Our Personal Information Protection Policy is <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="/en/privacy/" target="_blank">here</a>.</span><div class="cc-compliance cc-highlight"><a id="name-ga-cookie-deny-btn" aria-label="deny cookies" role="button" tabindex="0" class="cc-btn cc-deny">Decline</a><a id="name-ga-cookie-accept-btn" aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow">Allow</a></div><!--googleon: all--></div>',
    sp: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-floating cc-type-opt-out cc-theme-block cc-static cc-top cc-color-override-1768070765 " style=""><!--googleoff: all--><span id="cookieconsent:desc" class="cc-message">We use cookies for statistical investigation and analysis of browsing situation on our website. Our Personal Information Protection Policy is <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="/en/privacy/" target="_blank">here</a>.</span><div class="cc-compliance cc-highlight"><a id="name-ga-cookie-deny-btn" aria-label="deny cookies" role="button" tabindex="0" class="cc-btn cc-deny">Decline</a><a id="name-ga-cookie-accept-btn" aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow">Allow</a></div><!--googleon: all--></div>'
  },

  jp: {
    pc: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-banner cc-type-opt-out cc-theme-block cc-static cc-top cc-color-override-1768070765 " style=""><!--googleoff: all--><span id="cookieconsent:desc" class="cc-message">当サイトでは閲覧状況の統計調査と分析のためにcookieを使用します。当社の個人情報保護方針は<a href="/privacy/" class="cc-link" target="_blank">こちら</a>をご参照ください。</span><div class="cc-compliance cc-highlight"><a id="name-ga-cookie-deny-btn" aria-label="deny cookies" role="button" tabindex="0" class="cc-btn cc-deny">拒否</a><a id="name-ga-cookie-accept-btn" aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow">同意</a></div><!--googleon: all--></div>',
    sp: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window cc-floating cc-type-opt-out cc-theme-block cc-static cc-top cc-color-override-1768070765 " style=""><!--googleoff: all--><span id="cookieconsent:desc" class="cc-message">当サイトでは閲覧状況の統計調査と分析のためにcookieを使用します。当社の個人情報保護方針は<a href="/privacy/" class="cc-link" target="_blank">こちら</a>をご参照ください。</span><div class="cc-compliance cc-highlight"><a id="name-ga-cookie-deny-btn" aria-label="deny cookies" role="button" tabindex="0" class="cc-btn cc-deny">拒否</a><a id="name-ga-cookie-accept-btn" aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow">同意</a></div><!--googleon: all--></div>'
  }
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  var cookieOptin = localStorage.getItem('ga_cookie_opt_in');

  if(cookieOptin == 'no') {
    window['ga-disable-UA-131353779-1'] = true;
  } else if(cookieOptin == 'yes') {
    window['ga-disable-UA-131353779-1'] = false;
    document.body.classList.add('allowCookies');

    gtag('js', new Date());
    gtag('config', 'UA-131353779-1');
  } else {
    window['ga-disable-UA-131353779-1'] = true;
    document.body.classList.add('openBar');

    var container = document.getElementById('container');
    var accept = document.createElement('div');
        accept.setAttribute('class', 'cc-grower');
        accept.setAttribute('id', 'name-ga-cookie-accept-bar');
        accept.style.maxHeight = '100px';

    if (window.location.href.indexOf('/en/') != -1) {
      if (document.body.clientWidth < 768) {
        accept.innerHTML = gaInfo.en.sp
      } else {
        accept.innerHTML = gaInfo.en.pc
      }

      document.body.classList.add('en');
    } else {
      if (document.body.clientWidth < 768) {
        accept.innerHTML = gaInfo.jp.sp
      } else {
        accept.innerHTML = gaInfo.jp.pc
      }
    }
    document.body.insertBefore(accept, container);
  }

  var acceptBar = document.getElementById('name-ga-cookie-accept-bar');
  var acceptBtn = document.getElementById('name-ga-cookie-accept-btn');
  var denyBtn   = document.getElementById('name-ga-cookie-deny-btn');

  if(acceptBtn) {
    acceptBtn.onclick = function() {
      localStorage.setItem('ga_cookie_opt_in','yes');
      window['ga-disable-UA-131353779-1'] = true;
      acceptBar.parentNode.removeChild(acceptBar);
      document.body.classList.remove('openBar');
      document.body.classList.add('allowCookies');
    };
  }

  if(denyBtn) {
    denyBtn.onclick = function() {
      localStorage.setItem('ga_cookie_opt_in','no');
      window['ga-disable-UA-131353779-1'] = false;
      acceptBar.parentNode.removeChild(acceptBar);
      document.body.classList.remove('openBar');
      document.body.classList.remove('allowCookies');
    };
  }
});
*/

var spW = 768, // SP max width, not contain
	isSp, // Is SP or not
	winW, // Window width
	winH = $(window).height(), // Window height
	winST, // Window scrollTop
	isChange;
var spaceImg = 'data:image/gif;base64,R0lGODlhAQABAJEAAAAAMwAAAP///wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';

$(function () {
	$('a[href*=\\#]:not([href=\\#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				if ($(this).parents('.menuBox').length) {
					setTimeout(function () {
						var targetOffset = $target.offset().top;
						$('html,body').animate({
							scrollTop: targetOffset
						}, 1000);
					}, 100);
				} else {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
						scrollTop: targetOffset
					}, 1000);
				}
				return false;
			}
		}
	});
	$(window).resize(function () {
		setLazyImg();
		winH = $(window).height();
	}).trigger('resize');
	initLazyload();
	$(window).scroll(setFadeInAnim);
	$('a').click(function () {
		var url = $(this).attr('href');
		var target = $(this).attr('target');
		if (url.indexOf("#") != 0 && url.indexOf("javascript") != 0 && target != '_blank' && url.indexOf("mailto") != 0) {
			$('body').addClass('pageHide');
			setTimeout(function () {
				window.location = url;
			}, 900);
			return false;
		}
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		$('.para').each(function(){
			var site = $(this).offset().top - (window.innerHeight*0.5);
			var para = scroll - site;
			if(window.innerWidth > 768){
				$(this).css('transform','translateY('+ para*0.2 +'px)');
			}else{
				$(this).css('transform','translateY('+ para*0.1 +'px)');
			}
		});
		
		if($(window).scrollTop() > window.innerHeight){
			$('#gHeader').addClass('scroll');
		}else{
			$('#gHeader').removeClass('scroll');
		};
		$('.paraimg').each(function(){
			var site = $(this).offset().top - window.innerHeight;
			var para = site - scroll;
			$(this).find('img').css('transform','translateY('+ para*0.1 +'px)');
		})
	}).trigger('scroll');
	var state = false;
	var scrollpos;
	var timer;
	$('.menu,.menuBox .menuClose,.menuBox a').on('click', function() {
		if (state == false) {
			scrollpos = $(window).scrollTop();
			$('body').addClass('fixed').css({ 'top': -scrollpos });
			$('.menuBox').fadeIn().addClass('show');
			$('#gNavi .naviList li').each(function(i){
				var $this = $(this);
				timer = setTimeout(function() {
					$this.addClass('show');
				}, 500*i + 500);
			})
			state = true;
		} else {
			$('body').removeClass('fixed').css({ 'top': 0 });
			window.scrollTo(0, scrollpos);
			clearTimeout(timer);
			$('.menuBox').fadeOut().removeClass('show');
			setTimeout(function(){
				$('#gNavi .naviList li').stop().removeClass('show');
			},100);
			state = false;
		}
	});
	$('.menufade').each(function(){
		var html = $(this).html();
		var array = html.split("");
		$(this).html('');
		var ele = $(this);
		for (var i = 0; i < array.length; i++) {
			if(array[i] == ' '){
				array[i] = '&nbsp;';
			}
			ele.append('<span style="transition-delay: '+i*0.1+'s">'+array[i]+'</span>');
		}
	});
	$('#gNavi .naviList li .jp').each(function(){
		$(this).find('img').each(function(i){
			$(this).css('transition-delay',i*0.1+'s');
		})
	})
	$('.menuBox .menuPhoto .photo01').removeClass('show');
	$('.menuBox .menuPhoto .photo01').eq(0).addClass('show');
	$('#gNavi .naviList li').hover(function(){
		var num = $(this).index()+1;
		$('.menuBox .menuPhoto .photo01').removeClass('show');
		$('.menuBox .menuPhoto .photo01').eq(num).addClass('show');
	},function(){
		$('.menuBox .menuPhoto .photo01').removeClass('show');
		$('.menuBox .menuPhoto .photo01').eq(0).addClass('show');
	});
	var pcflag,spflag;
	if(window.innerWidth > 768){
		pcflag = 1;
		spflag = 0;
	}else{
		pcflag = 0;
		spflag = 1;
	}
	
	$(window).resize(function(){
		if(window.innerWidth <= 768){
			if(pcflag){
				setTimeout(function(){window.location.reload()},100);
				pcflag = 0;
				spflag = 1;
			}
		}else{
			if(spflag){
				setTimeout(function(){window.location.reload()},100);
				pcflag = 1;
				spflag = 0;
			}
		}
	});
	if(navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Macintosh') > -1 && 'ontouchend' in document) || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') ==-1)){
		$('body').addClass('isPad');
	}
});

function initLazyload() {
	if (!$('img.lazy').length) return;
	if (window.innerWidth > 767) {
		$('img.lazy:not(.sp,.loadover)').lazyload({
			threshold: winH,
			effect: 'fadeIn',
			effect_speed: 1000,
			failure_limit: 10,
			threshold: 500,
			placeholder: spaceImg,
			load: function () {
				var img = $(this);
				img.addClass('loadover');
				imgLoader(img, img.attr('data-original'));
			}
		});
		$('img.lazy:not(.sp,.loadover)').each(function(){
			var top = $(this).offset().top - window.innerHeight;
			var scroll = $(window).scrollTop();
			if(scroll > top){
				$(this).attr('src',$(this).attr('data-original'));
				$(this).addClass('loadover');
			}
		});
	} else {
		$('img.lazy:not(.pc,.loadover)').lazyload({
			threshold: winH,
			effect: 'fadeIn',
			effect_speed: 500,
			failure_limit: 10,
			threshold: 500,
			placeholder: spaceImg,
			load: function () {
				var img = $(this);
				img.addClass('loadover');
				imgLoader(img, img.attr('data-original'));
			}
		});
		$('img.lazy:not(.pc,.loadover)').each(function(){
			var top = $(this).offset().top - window.innerHeight;
			var scroll = $(window).scrollTop();
			if(scroll > top){
				$(this).attr('src',$(this).attr('data-original'));
				$(this).addClass('loadover');
			}
		});
	}
}

function setLazyImg() {
	if (!$('img.lazy').length) return;
	$('img.lazy').each(function () {
		var img = $(this);
		if (!$(this).parents('figure').length) {
			if ($(this).attr('src') == $(this).data('original')) {
				$(this).width('').height('');
			} else {
				if (!$(this).attr('src')) {
					$(this).attr('src', spaceImg);
					if ($(img).parent('.lazyPhoto').length) {
						$(img).parent('.lazyPhoto').css({
							'background-image': 'url(' + spaceImg + ')'
						});
					}
				}
				var size = $(this).data('size');
				if (!size) return;
				size = size.split('x');
				var w = $(this).parent().width();
				$(this).width(w).height(size[1] / size[0] * w);
			}
		}
	});
}

function imgLoader(img, src) {
	$(img).one('load', function () {
		if ($(img).parent('.lazyPhoto').length) {
			$(img).parent('.lazyPhoto').css({
				'background-image': 'url(' + src + ')'
			});
			var lazyPhoto = $(img).parent('.lazyPhoto');
			setTimeout(function () {
				lazyPhoto.addClass('loadover');
			}, 50);
		}
	}).each(function () {
		if (this.complete) {
			$(this).on('load');
		}
	});
}

function setFadeInAnimOffset() {
	var fadeObj = $('.fadeInAnim,.animate');
	if (!fadeObj.length) return;
	fadeObj.each(function () {
		var elm = $(this),
			elmT = elm.offset().top;
		elm.attr('data-offsetTop', elmT);
	});
}
var preWinST;

function setFadeInAnim() {
	winST = $(window).scrollTop();
	var fadeObj = $('.fadeInAnim,.animate');
	if (!fadeObj.length) return;
	var delayH = 300;

	if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Macintosh') > -1 && 'ontouchend' in document) || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1)) {
		delayH = 100;
	}

	if (window.innerWidth < 768) {
		delayH = 100;
	}

	fadeObj.each(function () {
		var elm = $(this);
		var elmT = elm.offset().top - window.innerHeight + delayH;
		if (winST > elmT) {
			elm.addClass('visible');
			if(elm.parents('.slick-slider.scrollplay:not(.pointshow)').length){
				elm.parents('.slick-slider.scrollplay:not(.pointshow)').addClass('pointshow');
			}
		}else {
			elm.removeClass('visible');
			if(elm.parents('.slick-slider.scrollplay.pointshow').length){
				elm.parents('.slick-slider.scrollplay.pointshow').removeClass('pointshow');
			}
		}
	});
}
window.addEventListener('pageshow', function (event) {
	if (event.persisted || window.performance && window.performance.navigation.type == 2) {
		$('body').removeClass('pageHide');
	}
});

$(window).on('load', function () {
	var localLink = window.location + '';
	if (localLink.indexOf("#") != -1 && localLink.slice(-1) != '#') {
		localLink = localLink.slice(localLink.indexOf("#") + 1);
		$('html,body').animate({
			scrollTop: $('#' + localLink).offset().top
		}, 500);
	};
	setTimeout(function () {
		setFadeInAnimOffset();
		$(window).resize(setFadeInAnimOffset);

		setFadeInAnim();
	}, 100);
});
