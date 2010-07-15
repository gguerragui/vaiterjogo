// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

	$('label').cluetip({
		dropShadow: false, 
		width: '150px',
		//height: '150px', 
		sticky: true,
		mouseOutClose: true,
		closeText: '',
		positionBy: 'fixed',
		topOffset: 8, 
		leftOffset:-85, 
		fx: { open: 'fadeIn', openSpeed: '3' }
	});
});