elements.blue_goo = {
    color: "#3366ff",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1200,

    reactions: {
        "red_goo": {
            elem1: "purple_slime",
            elem2: "purple_slime",
            chance: 0.8
        }
    }
};

elements.red_goo = {
    color: "#ff3333",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1200
};

elements.purple_slime = {
    color: ["#bb00ff","#dd66ff"],
    behavior: behaviors.STICKY,
    category: "chemistry",
    state: "solid",
    viscosity: 5000
};
