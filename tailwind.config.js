/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      dingle_color: "var(--dingle_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_clr: "var(--hover_clr)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      title_color: "var(--title_color)",
      black: "var(--black)",
      white: "var(--white)",
      'white-100': "var(--white_100)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yellow: "var(--yellow)",
      "purple-100": "var(--purple-100)",
      "cyan-100": "var(--cyan-100)",
      "pink-100": "var(--pink-100)",
    },
    fontFamily: {
      gilroyNormal: ["Gilroy Regular"],
      gilroyMedium: ["Gilroy Medium"],
      gilroySemiBold: ["Gilroy SemiBold"],
      gilroyBold: ["Gilroy Bold"],
      gilroyExtraBold: ["Gilroy ExtraBold"],
      gilroyBlack: ["Gilroy Black"],
      gilroyLight: ["Gilroy Light"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
};
