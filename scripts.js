$(document).ready(function(){
	let isRotate = false;
	$('button').on('click', function(){
		isRotate = !isRotate;
		$('#parent').attr('data-rotate', isRotate);
	});
	$('.grandChild').on('mouseover', function(){
		$(this).css('transform', 'translate3d(0px, 0px, 20px)');
	});
	$('.grandChild').on('mouseout', function(){
		$(this).css('transform', 'translate3d(0px, 0px, 0px)');
	});
});