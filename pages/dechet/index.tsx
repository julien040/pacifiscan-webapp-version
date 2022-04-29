import type { NextPage } from "next";
import { wastesType } from "../../src/dechet/wastes";
import imageLoader from "../../src/js/imageLoader";
import Link from "next/link";
import Image from "next/image";

type ValueOf<T> = T[keyof T];

const DechetPage: NextPage = () => {
  let dechets: JSX.Element[] = [];

  for (const key in wastesType) {
    if (Object.prototype.hasOwnProperty.call(wastesType, key)) {
      //@ts-ignore
      const element: ValueOf<typeof wastesType> = wastesType[key];
      const component = (
        <Link href={"/dechet/" + key} key={key}>
          <a>
            <div className="item-dechet">
              <Image
                loader={imageLoader}
                src={element.image}
                alt={element.Header}
                width={48}
                height={48}
              />
              <h2 className="item-dechet">{key}</h2>
            </div>
          </a>
        </Link>
      );
      dechets.push(component);
    }
  }
  return (
    <div>
      <h1>Déchets</h1>
      {dechets}
    </div>
  );
};

export default DechetPage;
