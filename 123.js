elements.blue_goo = {
    color: "#3366ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1200,

    reactions: {
        "red_goo": {
            elem1: "purple_slime",
            elem2: "purple_slime",
            chance: 1.0
        }
    }
};

elements.red_goo = {
    color: "#ff3333",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1200
};

elements.purple_slime = {
    color: ["#bb00ff","#dd66ff"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1400,
    viscosity: 50000
};
