import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
        bg: "#181818",
      },
    },
  },
  colors: {
    primary: "#181818",
    secondary: "#f25a25",
    font: "#fff",
    footer: "#1A1A1A"
  },
});

export default theme;
