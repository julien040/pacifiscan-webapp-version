import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { wastesType } from "../../src/dechet/wastes";
import imageLoader from "../../src/js/imageLoader";
import Image from "next/image";
import Head from "next/head";
type ValueOf<T> = T[keyof T];

const DechetIDPage: NextPage<{
  nom: string;
  image: string;
  quefaireTexte: string;
  impactTexte: string;
  eviterTexte: string;
}> = ({ nom, image, quefaireTexte, impactTexte, eviterTexte }) => {
  return (
    <div className="dechet">
      <Head>
        <title>{nom}</title>
        <meta
          name="description"
          content={"Découvrez que faire de vos déchets"}
        />
      </Head>
      <div className="titre-image">
        <Image
          className="dechet"
          loader={imageLoader}
          src={image}
          alt={nom}
          width={96}
          height={96}
        />
        <div className="titre">
          <h2 className="dechet">{nom}</h2>
        </div>
      </div>
      <h3 className="dechet">Comment éviter ce déchet ?</h3>
      <p>{eviterTexte}</p>
      <h3 className="dechet">Quel est son impact sur le milieu marin ?</h3>
      <p>{impactTexte}</p>
      <h3 className="dechet">Que faire du déchet ?</h3>
      <p>{quefaireTexte}</p>
    </div>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(wastesType).map((key) => ({
    params: { id: key },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  type P = keyof typeof wastesType | undefined;
  const name = params?.id as P;
  if (typeof name !== "string") {
    throw new Error("Invalid id");
  }
  if (!(name in wastesType)) {
    throw new Error("Invalid id");
  }

  const waste = wastesType[name];

  return {
    props: { ...waste, nom: name as string },
  };
};

export { getStaticPaths, getStaticProps };

export default DechetIDPage;
