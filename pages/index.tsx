import type { NextPage } from "next";
import Webcam, { WebcamProps } from "react-webcam";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { Box, Flex } from "reflexbox";
import LogoSVG from "../src/js/logo";
import { associationApi } from "../src/dechet/wastes";

const videoConstraints = {
  height: 640,
  width: 480,
  facingMode: "environment",
};

const Home: NextPage = () => {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const webcamRef = useRef<any>(null);
  async function handleClick() {
    if (webcamRef.current) {
      setLoading(true);
      const imageSrc: string = webcamRef.current.getScreenshot({
        width: 640,
        height: 480,
      });
      const payload = {
        // remove data:image/jpeg;base64,
        image: imageSrc.substring(23),
        id: "website",
      };
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      try {
        const res = await fetch(
          "https://api.pacifiscan.nsi-anova.ml/",
          options
        );

        if (res.ok) {
          const json: { label: string } = await res.json();
          if (json.label in associationApi) {
            //@ts-ignore Typescript est bête parfois
            router.push("/dechet/" + associationApi[json.label]);
          }
        } else {
          throw new Error("Server returned" + res.status);
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          router.push("/erreur?erreur=ApiError");
        }
      }
    }
  }
  return (
    <>
      <Head>
        <title>Scannez un objet</title>
      </Head>
      <Flex flexDirection={"column"} alignItems="center">
        <h1>Scannez un déchet</h1>
        <p className="under">
          Avec le scanner de déchets, vous pouvez découvrir l&apos;impact de vos
          déchets et apprendre à les jeter correctement.
        </p>

        {!Loading ? (
          <>
            <Webcam
              audio={false}
              width={"100%"}
              screenshotFormat="image/jpeg"
              screenshotQuality={0.01}
              videoConstraints={videoConstraints}
              onUserMediaError={(e) => {
                console.error(e);
                if (e instanceof DOMException) {
                  router.push("/erreur?erreur=" + e.name);
                } else {
                  router.push("/erreur");
                }
              }}
              ref={webcamRef}
            />
            <button onClick={handleClick}>Découvrir l&apos;impact</button>
          </>
        ) : (
          <>
            <p>Envoi de l&apos;image en cours...</p>
            <p>Veuillez patienter</p>
          </>
        )}
      </Flex>
    </>
  );
};

export default Home;

{
  /*  */
}
