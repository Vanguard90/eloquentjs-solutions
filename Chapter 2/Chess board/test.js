let size = 16;
let board = "";

for (var i = 0; i < size; i++) {
	for (var n = 0; n < size; n++) {

		if ((i+n) % 2 == 0) {
			board += "#";
		} else {
			board += " ";
		}
	}
board += "\n";
}
console.log(board);