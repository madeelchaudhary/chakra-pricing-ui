import { extendTheme } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
  },
  colors: {
    brand: "",
  },
});

export default theme;
