// grass_smokey.js
// Adds two custom elements to Sandboxels:
//   grass  — A lush green solid that burns and produces "smokey"
//   smokey — A thick dark smoke gas that rises and slowly dissipates

// ── SMOKEY ────────────────────────────────────────────────────────────────
// Dark brownish-grey custom smoke. Rises like normal smoke but is
// thicker and lingers a bit longer before dissipating.

elements.smokey = {
	name: "Smokey",
	color: "#4a3f38",
	behavior: behaviors.GAS,
	category: "gases",
	state: "gas",
	density: 0.5,
	temp: 110,
	desc: "Thick dark smoke produced when Grass burns.",

	tick: function(pixel) {
		// Slowly cool down
		pixel.temp -= 1;
		// Once cool, slowly dissipate
		if (pixel.temp < 20 && Math.random() < 0.015) {
			deletePixel(pixel.x, pixel.y);
		}
	},
};

// ── GRASS ─────────────────────────────────────────────────────────────────
// Stationary solid. Randomized green shading per pixel for a natural look.
// Burns on contact with fire, spreading fire and emitting smokey above.

elements.grass = {
	name: "Grass",
	color: "#4caf50",
	behavior: behaviors.WALL,
	category: "land",
	state: "solid",
	density: 800,
	temp: 20,
	desc: "Lush green grass. Burns easily and produces thick Smokey.",

	reactions: {
		// When fire touches grass, this grass pixel ignites (becomes fire)
		"fire": {
			elem1: "fire",
			elem2: "fire",
			chance: 0.07,
		},
	},

	tick: function(pixel) {
		// Give each pixel a randomized natural green shade on first tick
		if (!pixel.grassColored) {
			pixel.grassColored = true;
			var shades = [
				"#1b5e20", "#2e7d32", "#388e3c",
				"#43a047", "#4caf50", "#558b2f",
				"#689f38", "#66bb6a", "#81c784",
			];
			pixel.color = shades[Math.floor(Math.random() * shades.length)];
		}

		// If any adjacent neighbor is fire, occasionally puff smokey upward
		var adj = [
			[pixel.x,     pixel.y - 1],
			[pixel.x - 1, pixel.y],
			[pixel.x + 1, pixel.y],
			[pixel.x,     pixel.y + 1],
		];

		for (var i = 0; i < adj.length; i++) {
			var nx = adj[i][0];
			var ny = adj[i][1];
			if (outOfBounds(nx, ny)) continue;
			var nbr = pixelMap[nx] && pixelMap[nx][ny];
			if (nbr && nbr.element === "fire") {
				// Puff smokey above this grass pixel
				if (Math.random() < 0.05) {
					var sy = pixel.y - 1;
					if (!outOfBounds(pixel.x, sy) && isEmpty(pixel.x, sy)) {
						createPixel("smokey", pixel.x, sy);
					}
				}
				break;
			}
		}
	},
};
