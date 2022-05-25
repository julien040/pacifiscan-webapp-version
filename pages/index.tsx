import type { NextPage } from "next";
import Webcam from "react-webcam";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Flex } from "reflexbox";
import { associationApi } from "../src/dechet/wastes";

// https://stackoverflow.com/questions/46981889/how-to-resolve-ios-11-safari-getusermedia-invalid-constraint-issue
const videoConstraints = {
  width: 640,
  height: 480,
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
        const res = await fetch("https://mabel.pacifiscan.org/", options);

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
      <div className="flex">
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
              screenshotQuality={0.2}
              videoConstraints={videoConstraints}
              onUserMediaError={(e) => {
                console.error(e);
                if (typeof e === "object") {
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
          <div className="loading">
            <p>Envoi de l&apos;image en cours...</p>
            <p>Veuillez patienter</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

{
  /*  */
}
