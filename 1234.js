// Custom Elements Mod
// Works with Sandboxels v1.14+

elements.blue_goo = {
    color: ["#2d6cff","#4f85ff","#76a5ff"],
    behavior: behaviors.LIQUID,
    category: "custom",
    state: "liquid",
    density: 1200,
    viscosity: 3000,

    reactions: {
        "red_goo": {
            elem1: "purple_slime",
            elem2: "purple_slime",
            chance: 1
        },

        "fire": {
            elem1: "steam",
            elem2: null,
            tempMin: 100
        }
    }
};

elements.red_goo = {
    color: ["#ff2d2d","#ff5555","#ff8080"],
    behavior: behaviors.LIQUID,
    category: "custom",
    state: "liquid",
    density: 1200,
    viscosity: 3000,

    reactions: {
        "water": {
            elem1: "pink_goo",
            elem2: "pink_goo",
            chance: 0.5
        }
    }
};

elements.purple_slime = {
    color: ["#b000ff","#d14dff","#e599ff"],
    behavior: behaviors.LIQUID,
    category: "custom",
    state: "liquid",
    density: 1500,
    viscosity: 25000,

    tempHigh: 200,
    stateHigh: "burning_slime"
};

elements.pink_goo = {
    color: ["#ff66cc","#ff99dd"],
    behavior: behaviors.LIQUID,
    category: "custom",
    state: "liquid",
    density: 1100,
    viscosity: 6000
};

elements.burning_slime = {
    color: ["#ff6600","#ff2200","#ffff00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "CR:fire%5|XX|CR:fire%5",
        "XX|CR:fire%5|XX"
    ],
    category: "energy",
    state: "gas",
    density: 800,
    temp: 500
};

// Optional hidden crafting result
elements.crystal_core = {
    color: ["#00ffff","#88ffff","#ccffff"],
    behavior: behaviors.WALL,
    category: "custom",
    state: "solid",
    density: 5000,
    hidden: true
};

// Secret reaction
elements.purple_slime.reactions = {
    "electric": {
        elem1: "crystal_core",
        elem2: null,
        chance: 0.25
    }
};
