import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const myTheme: ThemeOverride = {
  config: {
    initialColorMode: "dark"
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    brand: {
      500: '#319795'
    }
  }
}

export const theme = extendTheme(myTheme)