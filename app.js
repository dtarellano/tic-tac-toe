let TicTacToe = function() {
	this.board = [[1, 2, 3], [4, 5, 6], [[7, 8, 9]]];
	this.player = 'x';
	this.moves = 0;
};

TicTacToe.prototype.insertMove = function(row, col) {
	this.board[row][col] = this.player;
	this.move++;
};
