elements.balles = {
  color: "#ff4500",
  behavior: function(pixel, x, y) {
    // Fireball moves right
    pixel.move(1, 0);
    // If the fireball hits water, turn into steam
    if (pixel.isTouching("water")) {
      pixel.type = "steam";
    }
    // If the fireball touches anything solid, stop moving
    if (pixel.isTouching("stone")) {
      pixel.move(0, 0);
    }
  },
  temperature: 500, // Fireball is hot!
};
