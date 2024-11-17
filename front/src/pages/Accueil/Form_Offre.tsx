// src/components/Offre.tsx
import React from 'react';
import CardDataStats from '../../components/cardData/CardDataStats1';
// import '../../asset/css/offre.css';
import Navbar1 from '../../components/scenes/navbar';
import Footer from '../../components/scenes/footer';


const Offre: React.FC = () => {
  // Sample data for cards
  const cardData = [
    { title: "date limite", total: " Total Candidats", rate: "Développeurs", imgSrc: "../../images/user/user-01.png" },
    { title: "date limite", total: " Total Offres", rate: "Ventes", imgSrc: "../../images/user/th.png" },
    { title: "date limite", total: "Total Canditatures", rate: "Designers", imgSrc: "../../images/user/th.png" },
    { title: "date limite", total: "Total Profits", rate: "Marketing", imgSrc: "../../images/user/th.png" },
    // Add more data as needed
  ];

  return (
    <>
    <Navbar1/>
    <div className='corps mt-40'>


      <div className="m-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {cardData.map((data, index) => (
            <CardDataStats key={index} title={data.title} total={data.total} >
              <img src={data.imgSrc} alt="Thumbnail" />
            </CardDataStats>
          ))}
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Offre;