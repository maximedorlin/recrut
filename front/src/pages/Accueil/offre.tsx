// src/components/Offre.tsx
import React from 'react';
import CardDataStats from './CardDataStats';
import './offre.css';


const Offre: React.FC = () => {
  // Sample data for cards
  const cardData = [
    { title: "Total Candidats", total: " max", rate: "Développeurs", imgSrc: "../../images/user/user-01.png" },
    { title: "Total Profits", total: "max", rate: "Ventes", imgSrc: "../../images/user/th.png" },
    { title: "Total Candidats", total: "max", rate: "Designers", imgSrc: "../../images/user/th.png" },
    { title: "Total Profits", total: "max", rate: "Marketing", imgSrc: "../../images/user/th.png" },
    // Add more data as needed
  ];

  return (
    <div className='corps'>


      <div className="m-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {cardData.map((data, index) => (
            <CardDataStats key={index} title={data.title} total={data.total} rate={data.rate} levelUp>
              <img src={data.imgSrc} alt="Thumbnail" />
            </CardDataStats>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offre;