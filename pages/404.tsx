import type { NextPage } from "next";
import Link from "next/link";

const Page404: NextPage = () => {
  return (
    <div>
      <h1>Impossible de trouver cette page</h1>
      <Link href="/">
        <a>
          <button>Retourner à l&apos;accueil</button>
        </a>
      </Link>
    </div>
  );
};

export default Page404;
