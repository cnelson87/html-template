
/**
*	set namespace
**/
var CNJS = CNJS || {};
CNJS.Config = {
	siteRoot: 'http://localhost:8888/webdev/',
	isIE9: (navigator.userAgent.indexOf('MSIE 9') >= 0) ? true : false,
	isIE10: (navigator.userAgent.indexOf('MSIE 10') >= 0) ? true : false,
	isIE11: (navigator.userAgent.indexOf('MSIE 11') >= 0) ? true : false,
	isIDevice: (navigator.platform.indexOf('iPhone') >= 0 || navigator.platform.indexOf('iPad') >= 0) ? true : false,
	isIPhone: (navigator.userAgent.match(/iPhone/i) !== null) ? true : false,
	isIPad: (navigator.userAgent.match(/iPad/i) !== null) ? true : false,
	defaultAjaxErrorMessage: '<div class="errormessage"><p>Sorry. Ajax request failed.</p></div>'
};
CNJS.UTILS = CNJS.UTILS || {};
CNJS.UI = CNJS.UI || {};

$(function () {
	CNJS.$window = $(window);
	CNJS.$document = $(document);
	CNJS.$html = $('html');
	CNJS.$body = $('body');
	CNJS.Config.hasCssAnimations = Modernizr.cssanimations;
	CNJS.Config.hasCssTransitions = Modernizr.csstransitions;
	CNJS.Config.hasCssTransforms = Modernizr.csstransforms;
	CNJS.Config.hasPointerEvents = Modernizr.pointerevents;
	CNJS.Config.hasMediaQueries = Modernizr.mq('only all');
	CNJS.Config.hasTouch = Modernizr.touch;
});
