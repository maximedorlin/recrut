import React from 'react';
import { Link } from 'react-router-dom';
import HeaderC from './headerC';

const Mes_Infos: React.FC = () => {
  return (
    <><HeaderC />
    <div className="welcome-container">
      <h1 className="welcome-title">Bienvenue dans notre application !</h1>
      <p className="welcome-description">
        Nous sommes ravis de vous accueillir. Explorez nos fonctionnalités et
        découvrez ce que nous avons à offrir.
      </p>
      <div className="welcome-buttons">
        <Link to="/dashboard" className="btn btn-primary">
          Accéder au Dashboard
        </Link>
        <Link to="/profile" className="btn btn-secondary">
          Voir votre Profil
        </Link>
      </div>
    </div></>
  );
};

export default Mes_Infos;

