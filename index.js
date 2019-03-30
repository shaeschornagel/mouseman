let elem;

elem = document.createElement("img");
elem.src = 'man.png';
document.getElementById("man").appendChild(elem);

elem = document.getElementById('man');
elem.style.width = '170px';

function placeMan(x_pos, y_pos) {
	let elem = document.getElementById('man');
	elem.style.left = x_pos+'px';
	elem.style.top = y_pos+'px';
}

function resizeMan() {
	const margin = 3;
	let elem = document.getElementById('man');
	elem.style.width = '' + (parseInt(elem.style.width.split('px')[0]) + Math.floor(Math.random() * (margin*2+1) - margin)) + 'px';
};

document.onmousemove = function(event) {
	placeMan(event.pageX - 220, event.pageY - 50);
	resizeMan();
};
