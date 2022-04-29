import type { AppProps } from "next/app";
import LogoSVG from "../src/js/logo";

import "../src/style/main.css";
import "../src/style/logo.css";
import "../src/style/button.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LogoSVG />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
