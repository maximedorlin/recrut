import React from 'react';
import '../../asset/css/CardDataStats.css';
import th2 from '../../asset/images/user/th2.png';
import { Link } from 'react-router-dom';

interface CardDataStatsProps {
  title: string;
  total: string;
  children: React.ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, total }) => {
  return (
    <div className="card-container rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="card-content mt-4 flex flex-col items-center justify-between relative z-10">
        <div className="image-container w-full relative">
          <img src={th2} alt="th2" className="image" />

          {/* Superposition qui apparaît lors du survol */}
          <div className="image-overlay">
            <p className="description-text">Description détaillée du cardbox...</p>
          </div>
        </div>

        <div className="text-content text-center mt-4">
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <div className="buttons-container mt-4 flex gap-12">
          <Link to="/web">
            <button
              className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white">
              Voir plus
            </button>
          </Link>
          <Link to="/web/postuler">
            <button
              className="text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white">
              Postuler
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
