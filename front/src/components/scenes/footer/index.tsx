import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 flex flex-col">
      <div className="mx-auto w-5/6 gap-16 md:flex">

        {/* Section texte et icônes réseaux sociaux */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="hover:text-green-500 my-5">
            Merci d'avoir visité la plateforme de recrutement d'Afreetech. Nous apprécions votre intérêt et vous
            souhaitons beaucoup de succès dans votre parcours professionnel avec nous !
          </p>

          <div className="flex gap-4 mt-5">
            <a
              href="https://wa.me/tonnumero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/votrepage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/votrecompte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:mt-0 basis-1/4">
          <h4 className="font-bold">Liens utiles</h4>
          <Link to={"/web/offre"}>
            <p className="hover:text-green-500 my-5">Consulter les offres</p>
          </Link>
          <Link to={"/web/postuler"}>
            <p className="hover:text-green-500 my-5">Postuler</p>
          </Link>
          <Link 
          // to={"/web/Infos_Candidat"}
          to={"/web/login"}>
            <p className="hover:text-green-500 my-5">Suivre sa Candidature</p>
          </Link>
        </div>

        <div className="flex flex-col md:mt-0 basis-1/4">
          <h4 className="font-bold">Pages</h4>
          <Link to={"/web/compte"}>
            <p className="hover:text-green-500 my-5">S'inscrire</p>
          </Link>
          <Link to={"/web/login"}>
            <p className="hover:text-green-500 my-5">Se Connecter</p>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-col items-center justify-between text-center mt-8">
        <span className="border-t-2 border-white w-full mx-4"></span> {/* Ligne horizontale blanche pleine largeur */}
        <p className="text-white mt-10">Développé par Afreetech.</p>
      </div>
    </footer>
  );
};

export default Footer;
