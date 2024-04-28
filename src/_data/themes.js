const colors = require("@fylgja/colors");
const colorsHsl = require("@fylgja/colors/hsl");

module.exports = {
    default: {
        name: "Light",
        theme: "#1565c1",
        colors: false,
    },
    dark: {
        name: "Dark",
        theme: "#1565c1",
        colors: {
            "--color-bg": "#111",
            "--color-text": "#fff",
            "--color-text-alt": "hsl(0 0% 100% / 82%)",
            "--color-text-muted": "hsl(0 0% 100% / 56%)",
            "--code-bg": "hsl(0 0% 20%)",
            "--code-color": "#fff",
            "--shadow-weight": "25%",
            "--shadow-color": "220 40% 2%",
        },
    },
};
