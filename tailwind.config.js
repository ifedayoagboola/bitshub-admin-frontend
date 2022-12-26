module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // important: "#root",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins',sans-serif",
        Roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FF6709",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
};
