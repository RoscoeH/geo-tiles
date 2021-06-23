import "typeface-rubik";
import { alpha } from "@theme-ui/color";

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  radii: [0, 2, 4, 8, 16, 32, 64, 99999],
  breakpoints: ["16em", "24em", "32em", "40em", "48em", "64em"],
  colors: {
    light: "#ffffff",
    dark: "#000000",
    text: "#333333",
    background: "#ffffff",
    primary: "#d20606",
    secondary: "#9bf6ff",
    muted: "rgba(0, 0, 0, 0.1)",
    muted2: "rgba(0, 0, 0, 0.05)",
    modes: {
      dark: {
        background: "#333333",
        text: "#ffffff",
        primary: "#4cfccd",
        muted: "rgba(255, 255, 255, 0.1)",
        muted2: "rgba(255, 255, 255, 0.05)",
      },
    },
  },
  fonts: {
    body: '"Rubik", system-ui, -apple-system, sans-serif',
    heading: '"Rubik", system-ui, -apple-system, sans-serif',
    monospace: "monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    default: "1px solid",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      fontSize: 7,
      my: 3,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      mb: 3,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      boxShadow: (t) => `inset 0 -1px 0 ${t.colors.primary}`,
    },
    hr: {
      border: "none",
      py: 3,
    },
  },
  text: {
    small: {
      fontSize: 1,
    },
  },
  buttons: {
    primary: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      bg: "transparent",
      color: "primary",
      border: "default",
      py: 1,
      px: 2,
      textDecoration: "none",
      borderRadius: 3,
      "&:hover": {
        color: "secondary",
      },
      "&:active": {
        color: "light",
      },
      "&:disabled": {
        color: "spectrum.orange",
      },
      "& > *": {
        mr: 1,
      },
    },
    icon: {
      bg: "muted2",
      "&:hover": {
        bg: "muted",
      },
      "&:active": {
        bg: alpha("primary", 0.1),
      },
    },
  },
  links: {
    title: {
      textDecoration: "none",
    },
    heading: {
      color: "text",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
    },
  },
};

export default theme;
