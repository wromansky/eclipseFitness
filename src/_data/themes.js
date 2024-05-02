const colors = require("@fylgja/colors");
const colorsHsl = require("@fylgja/colors/hsl");

module.exports = {
    default: {
        name: "Light",
        theme: "#470652",
        colors: {
            "--color-bg": "#fff",
            "--color-text": "#111",
            "--color-text-alt": "hsl(0 0% 100% / 82%)",
            "--color-text-muted": "hsl(0 0% 100% / 56%)",
            "--code-bg": "hsl(291 86% 17%)",
            "--code-color": "#fff",
            "--shadow-weight": "25%",
            "--shadow-color": "220 40% 2%",
        },
    },
    dark: {
        name: "Dark",
        theme: "#470652",
        colors: {
            "--color-bg": "#111",
            "--color-text": "#fff",
            "--color-text-alt": "hsl(0 0% 100% / 82%)",
            "--color-text-muted": "hsl(0 0% 100% / 56%)",
            "--code-bg": "hsl(291 86% 17%)",
            "--code-color": "#fff",
            "--shadow-weight": "25%",
            "--shadow-color": "220 40% 2%",
        },
    },
};
