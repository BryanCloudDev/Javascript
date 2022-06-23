'use strict';

const chessBoard = size => {
	let rowChess = '';
	for (let i = 1; i <= size; i++) {
		if (i % 2 == 0) {
			rowChess += row(size, '#', ' ');
		} else {
			rowChess += row(size, ' ', '#');
		}
	}
	return rowChess;
};

const row = (size, char1, char2) => {
	let string = '';
	for (let i = 1; i <= size; i++) {
		if (i % 2 == 0) {
			string += char2;
		} else {
			string += char1;
		}
	}
	return string + '\n';
};

console.log(chessBoard(8));
