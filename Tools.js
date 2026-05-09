// mix_tools.js
// Adds two custom tools to Sandboxels:
//   Cool Mix  - Simultaneously cools and mixes/randomizes nearby pixels
//   Heat Mix  - Simultaneously heats and mixes/randomizes nearby pixels

// ── Cool Mix ────────────────────────────────────────────────────────────────
// Rapidly chills the target pixel and swaps it with a random neighbor,
// creating a turbulent blending effect at low temperatures.

elements.cool_mix = {
	color: "#7ecfff",
	category: "tools",
	desc: "Cools and mixes pixels together, creating a chilled turbulent blend.",
	tool: function(pixel, x, y) {
		// Cool the pixel
		if (pixel.temp !== undefined) {
			pixel.temp -= 80;
		} else {
			pixel.temp = -60;
		}

		// Mix: randomly swap this pixel with one of its neighbors
		var directions = [
			[0, -1], [0, 1], [-1, 0], [1, 0],
			[-1, -1], [1, -1], [-1, 1], [1, 1]
		];
		var shuffled = directions.sort(() => Math.random() - 0.5);

		for (var i = 0; i < shuffled.length; i++) {
			var nx = x + shuffled[i][0];
			var ny = y + shuffled[i][1];
			if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;

			var neighbor = pixelMap[nx] && pixelMap[nx][ny];
			if (!neighbor || neighbor.element === "empty") continue;

			// Swap elements between the two pixels
			var tempElem = pixel.element;
			var tempTemp = pixel.temp !== undefined ? pixel.temp : 20;

			pixel.element = neighbor.element;
			pixel.temp = (neighbor.temp !== undefined ? neighbor.temp : 20) - 80;

			neighbor.element = tempElem;
			neighbor.temp = tempTemp - 80;

			break; // one swap per tick
		}
	},
};

// ── Heat Mix ────────────────────────────────────────────────────────────────
// Rapidly heats the target pixel and swaps it with a random neighbor,
// creating a turbulent blending effect at high temperatures.

elements.heat_mix = {
	color: "#ff7e2e",
	category: "tools",
	desc: "Heats and mixes pixels together, creating a hot turbulent blend.",
	tool: function(pixel, x, y) {
		// Heat the pixel
		if (pixel.temp !== undefined) {
			pixel.temp += 80;
		} else {
			pixel.temp = 120;
		}

		// Mix: randomly swap this pixel with one of its neighbors
		var directions = [
			[0, -1], [0, 1], [-1, 0], [1, 0],
			[-1, -1], [1, -1], [-1, 1], [1, 1]
		];
		var shuffled = directions.sort(() => Math.random() - 0.5);

		for (var i = 0; i < shuffled.length; i++) {
			var nx = x + shuffled[i][0];
			var ny = y + shuffled[i][1];
			if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;

			var neighbor = pixelMap[nx] && pixelMap[nx][ny];
			if (!neighbor || neighbor.element === "empty") continue;

			// Swap elements between the two pixels
			var tempElem = pixel.element;
			var tempTemp = pixel.temp !== undefined ? pixel.temp : 20;

			pixel.element = neighbor.element;
			pixel.temp = (neighbor.temp !== undefined ? neighbor.temp : 20) + 80;

			neighbor.element = tempElem;
			neighbor.temp = tempTemp + 80;

			break; // one swap per tick
		}
	},
};
