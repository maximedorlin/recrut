import React from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from '../../components/scenes/navbar';
import Footer from '../../components/scenes/footer';

const Mes_Infos: React.FC = () => {
  return (
    <>
      <Navbar1 />
      <section id="mes_info" className="w-full bg-primary-100 py-40">


        {/* <session></session> */}
        <div className="">

          <div className='d-flex flex-column '>
            <h1 style={{fontSize:'2rem', color:'green'}}>
              Bienvenue dans notre espace d'évaluation !
              </h1>
            <p style={{fontSize:'1.3rem'}}>
              Nous sommes ravis de vous accueillir. Explorez nos fonctionnalités et
              découvrez ce que nous avons à offrir.
            </p>
          </div>

          <div className="flex flex-row gap-16 justify-center">
            <Link
              to="/web/evaluation"
              className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white">
              Passé un text
            </Link>
            <span></span>
            <Link
              to="/web/profil"
              className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white">
              Voir votre Profil
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mes_Infos;

