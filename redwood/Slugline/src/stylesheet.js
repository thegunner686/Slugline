import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

function rgb(r, g, b) {
    return (a) => {
        return a != undefined && a != null ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
    }
}

function rgba(color) {
	let split = color.rgb.split(',');
  
 	let r = split[0].substr(5).trim(),
  		g = split[1].trim(),
        b = split[2].trim();
  
    return (a) => `rgba(${r}, ${g}, ${b}, ${a})`;
}

const Colors = {
    // Black & White
    Black: {
        hex: "#000000",
        rgb: rgb(0, 0, 0)(1),
    },
    White: {
        hex: "#FFFFFF",
        rgb: rgb(255, 255, 255)(1),
    },

    // Grey
    Grey1: {
        hex: "#2B2A2A",
        rgb: rgb(43, 42, 42)(1),
    },
    Grey2: {
        hex: "#3C3A3A",
        rgb: rgb(60, 58, 58)(1)
    },
    Grey3: {
        hex: "#676767",
        rgb: rgb(103, 103, 103)(1)
    },
    Grey4: {
        hex: "#969696",
        rgb: rgb(150, 150, 150)(1)
    },
    Grey5: {
        hex: "#C2C2C2",
        rgb: rgb(194, 194, 194)(1)
    },
    Grey6: {
        hex: "#F5F5F5",
        rgb: rgb(245, 245, 245)(1)
    },

    // Brown
    Brown1: {
        hex: "#343126",
        rgb: rgb(52, 49, 38)(1)
    },
    Brown2: {
        hex: "#524F43",
        rgb: rgb(82, 79, 67)(1)
    },
    Brown3: {
        hex: "#A7A18E",
        rgb: rgb(167, 161, 142)(1)
    },
    Brown4: {
        hex: "#CCC8B6",
        rgb: rgb(204, 200, 182)(1)
    },
    Brown5: {
        hex: "#F3F0E6",
        rgb: rgb(243, 240, 230)(1)
    },
    Brown6: {
        hex: "#FBFAF6",
        rgb: rgb(251, 250, 246)(1)
    },

    // Blue
    Blue1: {
        hex: "#00213C",
        rgb: rgb(0, 33, 60)(1)
    },
    Blue2: {
        hex: "#003560",
        rgb: rgb(0, 53, 96)(1)
    },
    Blue3: {
        hex: "#00467F",
        rgb: rgb(0, 70, 127)(1)
    },
    Blue4: {
        hex: "#19639E",
        rgb: rgb(25, 99, 158)(1)
    },
    Blue5: {
        hex: "#63A3D7",
        rgb: rgb(99, 163, 215)(1)
    },
    Blue6: {
        hex: "#BADEFB",
        rgb: rgb(186, 222, 251)(1)
    },

    // Yellow
    Yellow1: {
        hex: "#D1A700",
        rgb: rgb(209, 167, 0)(1)
    },
    Yellow2: {
        hex: "#FFCE0A",
        rgb: rgb(255, 206, 10)(1)
    },
    Yellow3: {
        hex: "#FFDE58",
        rgb: rgb(255, 222, 88)(1)
    },
    Yellow4: {
        hex: "#FFE990",
        rgb: rgb(255, 233, 144)(1)
    },
    Yellow5: {
        hex: "#FFF3C2",
        rgb: rgb(255, 243, 194)(1)
    },
    Yellow6: {
        hex: "#FFFBEC",
        rgb: rgb(255, 251, 236)(1)
    },

    // Green
    Green1: {
        hex: "#005F16",
        rgb: rgb(0, 95, 22)(1)
    },
    Green2: {
        hex: "#068D25",
        rgb: rgb(6, 141, 37)(1)
    },
    Green3: {
        hex: "#3BD15E",
        rgb: rgb(59, 209, 94)(1)
    },
    Green4: {
        hex: "#70F590",
        rgb: rgb(112, 245, 144)(1)
    },
    Green5: {
        hex: "#AAFFBE",
        rgb: rgb(170, 255, 190)(1)
    },
    Green6: {
        hex: "#DCFFE4",
        rgb: rgb(220, 255, 228)(1)
    },

    // Red
    Red1: {
        hex: "#801204",
        rgb: rgb(128, 18, 4)(1)
    },
    Red2: {
        hex: "#B92916",
        rgb: rgb(185, 41, 22)(1)
    },
    Red3: {
        hex: "#ED4E39",
        rgb: rgb(237, 78, 57)(1)
    },
    Red4: {
        hex: "#F97B6B",
        rgb: rgb(249, 123, 107)(1)
    },
    Red5: {
        hex: "#FFC0B8",
        rgb: rgb(255, 192, 184)(1)
    },
    Red6: {
        hex: "#FFEBE9",
        rgb: rgb(255, 235, 233)(1)
    },

    Random: () => {
        let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
        return {
            rgb: rgb(r, g, b)(1)
        }
    }
};

let families = {
    HelveticaNeue1: "HelveticaNeue-Bold",
    HelveticaNeue2: "HelveticaNeue-Medium",
    HelveticaNeue3: "Helvetica Neue",
    HelveticaNeue4: "HelveticaNeue-Light",
    HelveticaNeue5: "HelveticaNeue-Thin",
    HelveticaNeue6: "HelveticaNeue-UltraLight",
    Ranga1: "Ranga-Bold",
    Ranga2: "Ranga-Regular"
}

let sizes = {
    Title: 64,
    Header: 36,
    SubHeader: 24,
    Graph: 18,
    Paragraph: 14,
    Label: 10,
    Tiny: 8,
    Icon1: 64,
    Icon2: 48,
    Icon3: 36,
    Icon4: 24,
    Icon5: 18,
    Icon6: 12
}

const Fonts = {
    // Title
    Title1: {
        fontFamily: families.Ranga1,
        fontSize: sizes.Title
    },
    Title2: {
        fontFamily: families.Ranga2,
        fontSize: sizes.Title
    },
    Title3: {
        fontFamily: families.Ranga2,
        fontSize: sizes.Title
    },
    Title4: {
        fontFamily: families.Ranga2,
        fontSize: sizes.Title
    },
    Title5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.Title
    },
    Title6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.Title
    },

    // Header
    Header1: {
        fontFamily: families.HelveticaNeue1,
        fontSize: sizes.Header
    },
    Header2: {
        fontFamily: families.HelveticaNeue2,
        fontSize: sizes.Header
    },
    Header3: {
        fontFamily: families.HelveticaNeue3,
        fontSize: sizes.Header
    },
    Header4: {
        fontFamily: families.HelveticaNeue4,
        fontSize: sizes.Header
    },
    Header5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.Header
    },
    Header6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.Header
    },

    // SubHeader
    SubHeader1: {
        fontFamily: families.HelveticaNeue1,
        fontSize: sizes.SubHeader
    },
    SubHeader2: {
        fontFamily: families.HelveticaNeue2,
        fontSize: sizes.SubHeader
    },
    SubHeader3: {
        fontFamily: families.HelveticaNeue3,
        fontSize: sizes.SubHeader
    },
    SubHeader4: {
        fontFamily: families.HelveticaNeue4,
        fontSize: sizes.SubHeader
    },
    SubHeader5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.SubHeader
    },
    SubHeader6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.SubHeader
    },

    Graph1: {
        fontFamily: families.HelveticaNeue1,
        fontSize: sizes.Graph
    },
    Graph2: {
        fontFamily: families.HelveticaNeue2,
        fontSize: sizes.Graph
    },
    Graph3: {
        fontFamily: families.HelveticaNeue3,
        fontSize: sizes.Graph
    },
    Graph4: {
        fontFamily: families.HelveticaNeue4,
        fontSize: sizes.Graph
    },
    Graph5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.Graph
    },
    Graph6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.Graph
    },

    // Paragraph
    Paragraph1: {
        fontFamily: families.HelveticaNeue1,
        fontSize: sizes.Paragraph
    },
    Paragraph2: {
        fontFamily: families.HelveticaNeue2,
        fontSize: sizes.Paragraph
    },
    Paragraph3: {
        fontFamily: families.HelveticaNeue3,
        fontSize: sizes.Paragraph
    },
    Paragraph4: {
        fontFamily: families.HelveticaNeue4,
        fontSize: sizes.Paragraph
    },
    Paragraph5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.Paragraph
    },
    Paragraph6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.Paragraph
    },

    // Label
    Label1: {
        fontFamily: families.HelveticaNeue1,
        fontSize: sizes.Label
    },
    Label2: {
        fontFamily: families.HelveticaNeue2,
        fontSize: sizes.Label
    },
    Label3: {
        fontFamily: families.HelveticaNeue3,
        fontSize: sizes.Label
    },
    Label4: {
        fontFamily: families.HelveticaNeue4,
        fontSize: sizes.Label
    },
    Label5: {
        fontFamily: families.HelveticaNeue5,
        fontSize: sizes.Label
    },
    Label6: {
        fontFamily: families.HelveticaNeue6,
        fontSize: sizes.Label
    },

    // Tiny
    Tiny1: {
        fontFamily: families.HelveticaNeue1,
        fontSizes: sizes.Tiny
    },
    Tiny2: {
        fontFamily: families.HelveticaNeue2,
        fontSizes: sizes.Tiny
    },
    Tiny3: {
        fontFamily: families.HelveticaNeue3,
        fontSizes: sizes.Tiny
    },
    Tiny4: {
        fontFamily: families.HelveticaNeue4,
        fontSizes: sizes.Tiny
    },
    Tiny5: {
        fontFamily: families.HelveticaNeue5,
        fontSizes: sizes.Tiny
    },
    Tiny6: {
        fontFamily: families.HelveticaNeue6,
        fontSizes: sizes.Tiny
    },
};

const Shadow = {
    top: {
        shadowColor: Colors.Black.hex,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: -1,
        },
    },
    bottom: {
        shadowColor: Colors.Black.hex,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    standard: {
        shadowColor: Colors.Black.hex,
        shadowOpacity: 0.15,
        shadowRadius: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    }
}

export {
    Colors,
    Fonts,
    Shadow,
    width,
    height,
    families,
    sizes,
    rgb,
    rgba
};
