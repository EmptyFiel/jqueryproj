$(document).ready(function(){

	function checkNear(x, y) {
		x = +x;
		y = +y;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				if (i === 0 && j === 0) continue;
				let col = x + i;
				let row = y + j;
				if (col >= 0 && row >= 0) {
					$(`.grandChild[data-row="${row}"][data-col="${col}"]`).css('transform', 'translate3d(0px, 0px, 30px)');
				}
			}
		}
	}

	function removeNear(){
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				let col = i;
				let row = j;
				$(`.grandChild[data-row="${row}"][data-col="${col}"]`).css('transform', 'translate3d(0px, 0px, 0px)');
			}
		}
	}

	$('.grandChild').on('mouseover', function() {
		$(this).css('transform', 'translate3d(0px, 0px, 50px)');
		let y = $(this).attr('data-row');
		let x = $(this).attr('data-col');
		checkNear(x, y);

	}).on('mouseout', function(){
		$(this).css('transform', 'translate3d(0px, 0px, 0px)');
		removeNear();
	});
});