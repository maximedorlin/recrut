import React, { ReactNode, useState } from 'react';
import './CardDataStats.css';

import { Link } from 'react-router-dom';

interface CardDataStatsProps {
  title: string;
  total: string;
  // rate: string;
  // levelUp?: boolean;
  // levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  // children,
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShowDescription = () => {
    setShowDescription(prev => !prev);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleCloseDescription = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowDescription(false);
    }
  };

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="card-container rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="card-content mt-4 flex flex-col items-center justify-between relative z-10">
        
          <div style={{ width: '350px', height: '250px' }} className="image-container w-full h-[50%] relative">
            <img src="../../images/user/user-01.png" alt="Une description de l'image" />
            {/*{children}*/}
          </div>
        

        <div className="text-content text-center mt-4">
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="buttons-container mt-4 flex gap-4">
          <button className="button" onClick={handleShowDescription}>
            Voir plus
          </button>
          <button className="button" onClick={handleShowForm}>
            Postuler
          </button>
        </div>
      </div>

      {/* Description Modal */}
      {showDescription && (
        <div className="description-modal" onClick={handleCloseDescription}>
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowDescription(false)}
            >
              X
            </button>
            <p>Description détaillée du cardbox...</p>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="form-modal" onClick={handleCloseForm}>
          <div className="modal-content" onClick={handleFormClick}>
            <button className="close-button" onClick={handleCloseForm}>
              X
            </button>
            <h2>Voulez vous de Postulé a cette offre Emploi ?</h2>
            <p>
              Cliquez sur oui pour accedé au formulaire ou sur espace vide pour
              quitter
            </p>
            {/* Ici vous pouvez ajouter le formulaire */}

            <Link to="/Postuler">
              <button className="button">OUI</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDataStats;


