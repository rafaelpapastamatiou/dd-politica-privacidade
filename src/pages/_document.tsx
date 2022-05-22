import { ColorModeScript } from "@chakra-ui/react";
import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

import { theme } from "../styles/theme";

export default function MyDocument({}: DocumentProps) {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  )
}