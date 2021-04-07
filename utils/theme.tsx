import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
  category: {
    1200154449836104: "#1E90FF",
    1200154449836208: "#0CA25F",
    1200154449836209: "#FF6347",
    1200154449836210: "#CC6666",
    1200154449836212: "#DB7093",
    1200154449836211: "#ffcb0c",
    1200154449836213: "#A9A9A9",
    1200154449836214: "#FF7F50",
  },
};

const theme = extendTheme({
  colors: colors,
  fonts,
  breakpoints,
});

export default theme;
