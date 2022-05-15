import type { AppProps } from "next/app";
import Link from "next/link";
import LogoSVG from "../src/js/logo";
import Script from "next/script";

import "../src/style/main.css";
import "../src/style/logo.css";
import "../src/style/button.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LogoSVG />
      <Script
        src="https://bidule.app.pacifiscan.org/latest.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
      <Link href={"/dechet"}>
        <a>
          <button>Voir la liste des déchets</button>
        </a>
      </Link>
    </>
  );
}

export default MyApp;
