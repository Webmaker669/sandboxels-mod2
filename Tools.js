// mix_tools.js — Adds "Cool Mix" and "Heat Mix" tools to Sandboxels
// Cool Mix: chills pixels and swaps them with random neighbors
// Heat Mix: heats pixels and swaps them with random neighbors

elements.cool_mix = {
	color: "#5bc8f5",
	category: "tools",
	desc: "Cools and mixes pixels, creating a chilled turbulent blend.",
	tool: function(pixel) {
		// Cool the target pixel
		pixel.temp = (pixel.temp || 20) - 80;

		// Pick a random neighboring pixel to swap with
		var dirs = [
			[0, -1], [0, 1], [-1, 0], [1, 0],
			[-1, -1], [1, -1], [-1, 1], [1, 1]
		];

		// Shuffle directions for randomness
		for (var i = dirs.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = dirs[i]; dirs[i] = dirs[j]; dirs[j] = tmp;
		}

		for (var i = 0; i < dirs.length; i++) {
			var nx = pixel.x + dirs[i][0];
			var ny = pixel.y + dirs[i][1];

			if (outOfBounds(nx, ny)) continue;
			if (isEmpty(nx, ny)) continue;

			var neighbor = pixelMap[nx][ny];
			if (!neighbor) continue;

			// Swap the element types
			var tempElem = pixel.element;
			pixel.element = neighbor.element;
			neighbor.element = tempElem;

			// Cool the neighbor too
			neighbor.temp = (neighbor.temp || 20) - 80;

			break;
		}
	},
};

elements.heat_mix = {
	color: "#ff7b2e",
	category: "tools",
	desc: "Heats and mixes pixels, creating a scorching turbulent blend.",
	tool: function(pixel) {
		// Heat the target pixel
		pixel.temp = (pixel.temp || 20) + 80;

		// Pick a random neighboring pixel to swap with
		var dirs = [
			[0, -1], [0, 1], [-1, 0], [1, 0],
			[-1, -1], [1, -1], [-1, 1], [1, 1]
		];

		// Shuffle directions for randomness
		for (var i = dirs.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = dirs[i]; dirs[i] = dirs[j]; dirs[j] = tmp;
		}

		for (var i = 0; i < dirs.length; i++) {
			var nx = pixel.x + dirs[i][0];
			var ny = pixel.y + dirs[i][1];

			if (outOfBounds(nx, ny)) continue;
			if (isEmpty(nx, ny)) continue;

			var neighbor = pixelMap[nx][ny];
			if (!neighbor) continue;

			// Swap the element types
			var tempElem = pixel.element;
			pixel.element = neighbor.element;
			neighbor.element = tempElem;

			// Heat the neighbor too
			neighbor.temp = (neighbor.temp || 20) + 80;

			break;
		}
	},
};
