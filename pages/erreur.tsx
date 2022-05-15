import type { NextPage } from "next";
import ErrorSVG from "../src/js/errorSVG";
import { useRouter } from "next/router";
import Link from "next/link";

const ErreurPage: NextPage = () => {
  const router = useRouter();
  const erreur = router.query.erreur;
  return (
    <div>
      <h1>{ErreurFriendlyName(erreur)}</h1>
      <ErrorSVG />
      <h2>Comment y remedier ?</h2>
      <ul className="error">
        {ErreurRemediation(erreur).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div style={{ margin: "12px" }}>
        <Link passHref href="/">
          <button>Réessayer</button>
        </Link>
      </div>
    </div>
  );
};

function ErreurRemediation(erreur: string | string[] | undefined): string[] {
  switch (erreur) {
    case "NotAllowedError":
      return [
        "Si vous êtes sur un ordinateur, vérifiez que vous avez bien activé les caméras.",
        "Si vous êtes sur Android, allez dans les paramètres de votre appareil et autorisez l'accès à la caméra pour le navigateur.",
        "Si vous êtes sur iOS, allez dans les paramètres de votre appareil et autorisez l'accès à la caméra pour Safari.",
      ];
    case "NotFoundError":
      return [
        "Si vous êtes sur un ordinateur, vérifiez que votre caméra est bien branchée",
        "Si vous êtes sur téléphone, nous vous invitons à installer l'application Pacifiscan.",
      ];
    case "NotReadableError":
      return ["Vérifiez qu'aucun autre programme n'utilise la caméra."];
    case "OverconstrainedError":
      return ["Vérifiez que votre appareil puisse afficher un aperçu."];
    case "SecurityError":
      return [
        "Vérifiez que vous avez bien autorisé l'accès à la caméra au niveau de votre système",
      ];
    case "TypeError":
      return ["Vérifiez que vous avez bien autorisé l'accès à la caméra."];

    case "ApiError":
      return ["Vérifier que vous êtes connecté à internet."];
    default:
      return ["Fermez cette page et réessayez."];
  }
}

function ErreurFriendlyName(erreur: string | string[] | undefined): string {
  switch (erreur) {
    case "NotAllowedError":
      return "L'accès à la caméra a été refusé.";
    case "NotFoundError":
      return "Impossible de trouver une caméra adéquate";
    case "NotReadableError":
      return "La caméra n'est pas accessible en lecture";
    case "OverconstrainedError":
      return "La caméra n'est pas configurée pour fonctionner avec le scanner";
    case "SecurityError":
      return "L'accès à la caméra n'est pas autorisé par le systeme";
    case "TypeError":
      return "La caméra n'est pas configurée correctement";
    case "ApiError":
      return "Erreur de connexion au serveur";
    default:
      return "Erreur inconnue : " + erreur;
  }
}

export default ErreurPage;
