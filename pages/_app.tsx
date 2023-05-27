"use client";

import { darkTheme } from "@/themes";
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";

// componente personalizado MyApp que envuelve la aplicación Next.js
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // envolver la aplicación con ThemeProvider de next-themes
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
