import type { AppProps } from "next/app";
import imageLoader from "../src/js/imageLoader";
import Image from "next/image";
import Link from "next/link";
import LogoSVG from "../src/js/logo";
import Head from "next/head";
import Script from "next/script";

import "../src/style/main.css";
import "../src/style/logo.css";
import "../src/style/button.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pacifiscan</title>
        <meta name="description" content="Découvrez que faire de vos déchets" />
      </Head>
      <LogoSVG />
      <Script
        src="https://dipper.pacifiscan.org/latest.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
      <footer>
        <div className="footerButton">
          <Link href={"/dechet"}>
            <a>
              <button>Voir la liste des déchets</button>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <button style={{ marginLeft: "16px" }}>Page scan</button>
            </a>
          </Link>
        </div>

        <div className="download">
          <a href="https://pacifiscan.org/redirect/play-store">
            <div className="itemDownload">
              <Image
                unoptimized
                className="download"
                width={36}
                height={36}
                loader={imageLoader}
                src="https://oncle-stan.pacifiscan.org/icons/play-store.png"
                alt="Google Play"
              />
              <p>Télécharger sur Android </p>
            </div>
          </a>
          <a href="https://pacifiscan.org/redirect/app-store">
            <div className="itemDownload">
              <Image
                unoptimized
                className="download"
                width={36}
                height={36}
                loader={imageLoader}
                src="https://oncle-stan.pacifiscan.org/icons/app-store.png"
                alt="AppStore"
              />
              <p>Télécharger sur iOS </p>
            </div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
