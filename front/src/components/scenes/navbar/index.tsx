import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import th from '../../../asset/images/user/th.png';
import { Link } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Navbar1 = ({ isTopOfPage }: any) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow";

  return (
    <nav className="bg-black text-white text-lg">
      <div className={`${navbarBackground} flex justify-between fixed top-0 z-30 w-full py-6`}>
        <div className="mx-auto w-[91.67%]">
          <div className="flex justify-between w-full gap-16">
            <div className="flex items-center">
              <img src={th} alt="tlogo" style={{ width: '90px', height: '65px' }} />
              <h1 className="hover:text-green-500 my-5 ml-5 text-xl">AFREETECH</h1>
            </div>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className="flex justify-between items-center gap-8" style={{ fontSize: '1.4rem' }}>
                {/* Links for large screens */}
                <div className="flex gap-8 text-sm" style={{ fontSize: '1.2rem' }}>
                  <Link to="/web" className="hover:text-green-500">Accueil</Link>
                  <Link to="/web/offre" className="hover:text-green-500">Offre d'Emploi</Link>
                  <Link to="/web/postuler" className="hover:text-green-500">Postuler</Link>
                  <Link
                    // to="/web/Infos_Candidat" 
                    to="/web/login"
                    className="hover:text-green-500">Suivre sa Candidature
                  </Link>
                </div>

                {/* Sign Up and Log In buttons */}
                <div className="flex gap-4">
                  <Link
                    to="/web/compte"
                    className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                  >
                    S'inscrire
                  </Link>
                  <Link
                    to="/web/login"
                    className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white">
                    Se Connecter
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>


      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-full w-[400px] bg-black drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl"style={{fontSize:'0.95rem'}}>
            <Link
              to="/web"
              className="hover:text-green-500"
            >
              Accueil
            </Link>
            <Link
              to="/web/offre"
              className="hover:text-green-500"
            >
              Offre d'Emploi
            </Link>
            <Link
              to="/web/postuler"
              className="hover:text-green-500"
            >
              Postuler
            </Link>
            <Link
              to="/web/Infos_Candidat"
              className="hover:text-green-500"
            >
              Suivre sa Candidature
            </Link>
            <div className="flex flex-row gap-4 justify-center">
              <Link
                // to="/web/compte"
                to="/web/login"
                className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
              >
                S'inscrire
              </Link>
              <span></span>
              <Link
                to="/web/login"
                className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
              >
                Se Connecter
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;