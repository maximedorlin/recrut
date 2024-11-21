import React from 'react';
import Carousel from './carousel';
 // Assurez-vous d'importer le composant Carousel

const Carousel1: React.FC = () => {
  return (
   <div className="App"style={{magin}}>
      <h1 className="text-center text-2xl font-bold my-8">Bienvenue sur notre Carousel</h1>
      {/* <TextReveal/> */}
      <Carousel />
    </div>
  );
};

export default Carousel1;
