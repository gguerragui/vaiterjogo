// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function mycarousel_initCallback(carousel) {
	jQuery('.jcarousel-control a').bind('click', function() {
		carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
		return false;
	});

	jQuery('#mycarousel-next').bind('click', function() {
		carousel.next();
		return false;
	});

	jQuery('#mycarousel-prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};

$(document).ready(function() {

	jQuery("#mycarousel").jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'circular',
		initCallback: mycarousel_initCallback, 
		buttonNextHTML: null, 
		buttonPrevHTML: null
	});
	
	$('.sports a').cluetip({
		dropShadow: false, 
		width: '150px',
		sticky: true,
		mouseOutClose: true,
		closeText: '',
		positionBy: 'fixed',
		topOffset: 8, 
		leftOffset:-85, 
		fx: { open: 'fadeIn', openSpeed: '3' }
	});
	
});