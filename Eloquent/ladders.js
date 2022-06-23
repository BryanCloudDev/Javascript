"use-strict";

const ladders = levels => {
	let i = 1;
	let j = i + 1;

	while (i <= levels) {
		let string = "";
		let e = 1;
		while (e < j) {
			string += "#";
			e++;
		}
		string += "\n";
		console.log(string);
		i++;
		j++;
	}
};

ladders(7);
