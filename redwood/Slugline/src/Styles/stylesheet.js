import { rgb } from "./styleutils";

const Colors = {
    dark: {
        hex: "#261e0b",
        rgba: rgb(38, 30, 11)
    },
    cream: {
        hex: "#f3f0e6",
        rgba: rgb(243, 240, 230)
    },
    darkCream: {
        hex: "#fbf1d8",
        rgba: rgb(251, 241, 216)
    },
    darkDarkCream: {
        hex: "#dbba6e",
        rgba: rgb(219, 186, 110)
    },
    lightBrown: {
        hex: "#e6e3d6",
        rgba: rgb(230, 227, 214)
    },
    brown: {
        hex: "#979385",
        rgba: rgb(151, 147, 133)
    },
    darkBrown: {
        hex: "#3a2f00",
        rgba: rgb(58, 47, 0)
    },
    lightBlue: {
        hex: "#69beff",
        rgba: rgb(105, 190, 255)
    },
    blue: {
        hex: "#00467f",
        rgba: rgb(0, 70, 127)
    },
    darkBlue: {
        hex: "#001638",
        rgba: rgb(0, 22, 56)
    },
    yellow: {
        hex: "#ffcc00",
        rgba: rgb(255, 204, 0)
    },
    darkYellow: {
        hex: "#c2932c",
        rgba: rgb(194, 147, 44)
    },
    lightGreen: {
        hex: "#6eff8f",
        rgba: rgb(110, 255, 143)
    },
    green: {
        hex: "#3bd15e",
        rgba: rgb(59, 209, 94)
    },
    darkGreen: {
        hex: "#339c4c",
        rgba: rgb(51, 156, 76)
    },
    darkDarkGreen: {
        hex: "#20542c",
        rgba: rgb(32, 84, 44)
    },
    red: {
        hex: "#ed4e39",
        rgba: rgb(237, 78, 57)
    },
    darkRed: {
        hex: "#942719",
        rgba: rgb(148, 39, 25)
    },
};

const Fonts = {
    types: {
        bold: "HelveticaNeue-Bold",
        italic: "HelveticaNeue-MediumItalic",
        light: "HelveticaNeue-Light"
    },
    sizes: {
        tiny: 10,
        small: 14,
        medium: 20,
        large: 40
    },
};

export { Colors, Fonts }