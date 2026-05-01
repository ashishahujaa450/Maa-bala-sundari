export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFDF8",
        "ivory-alt": "#FAF3E0",
        saffron: "#E65100",
        "saffron-dark": "#BF360C",
        "saffron-light": "#FFB74D",
        "brass-gold": "#D4AF37",
        crimson: "#C62828",
        "ink-heading": "#3E2723",
        "ink-body": "#5D4037",
        "ink-muted": "#8D6E63",
      },
      animation: {
        "slow-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};