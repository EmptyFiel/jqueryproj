$(document).ready(function(){
	for(let i=0;i<21;i++){
		for(let j=0;j < 21;j++){
			$('.child').append(`<div class="grandChild" data-row="${i}" data-col="${j}"></div>`);
		}
	}
	function checkNear(x, y) {
		x = +x;
		y = +y;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				if (i === 0 && j === 0) continue;
				let col = x + i;
				let row = y + j;
				if (col >= 0 && row >= 0) {
					let element = $(`.grandChild[data-row="${row}"][data-col="${col}"]`);
					element.css('transform', 'translate3d(0px, 0px, 80px)');
					element.css('background-color', 'orange');
				}
			}
		}
		for (let i = -2; i < 3; i++) {
			for (let j = -2; j < 3; j++) {
				if (i >= -1 && i <= 1 && j >= -1 && j <= 1) continue;
				let col = x + i;
				let row = y + j;
				if (col >= 0 && row >= 0) {
					let element = $(`.grandChild[data-row="${row}"][data-col="${col}"]`);
					element.css('transform', 'translate3d(0px, 0px, 60px)');
					element.css('background-color', 'yellow')
				}
			}
		}
		for (let i = -3; i < 4; i++) {
			for (let j = -3; j < 4; j++) {
				if (i >= -2 && i <= 2 && j >= -2 && j <= 2) continue;
				let col = x + i;
				let row = y + j;
				if (col >= 0 && row >= 0) {
					let element = $(`.grandChild[data-row="${row}"][data-col="${col}"]`);
					element.css('transform', 'translate3d(0px, 0px, 40px)');
					element.css('background-color', 'green')
				}
			}
		}
		for (let i = -4; i < 5; i++) {
			for (let j = -4; j < 5; j++) {
				if (i >= -3 && i <= 3 && j >= -3 && j <= 3) continue;
				let col = x + i;
				let row = y + j;
				if (col >= 0 && row >= 0) {
					let element = $(`.grandChild[data-row="${row}"][data-col="${col}"]`);
					element.css('transform', 'translate3d(0px, 0px, 20px)');
					element.css('background-color', 'blue')
				}
			}
		}
	}


	function removeNear(){
		for (let i = 0; i < 21; i++) {
			for (let j = 0; j < 21; j++) {
				let col = i ;
				let row = j;
					let element = $(`.grandChild[data-row="${row}"][data-col="${col}"]`);
					element.css('transform', 'translate3d(0px, 0px, 0px)');
					element.css('background-color', 'purple');
			}
		}
	}

	$('.grandChild').on('mouseover', function() {
		$(this).css('transform', 'translate3d(0px, 0px, 100px)');
		$(this).css('background-color', 'red');
		let y = $(this).attr('data-row');
		let x = $(this).attr('data-col');
		checkNear(x, y);

	}).on('mouseout', function(){
		$(this).css('transform', 'translate3d(0px, 0px, 0px)');
		removeNear();
	});
});
