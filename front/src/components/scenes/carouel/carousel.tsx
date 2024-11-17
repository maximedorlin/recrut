import React, { useState, useEffect } from 'react';
import th2 from '../../../asset/images/user/th2.png';
import th3 from '../../../asset/images/user/th3.png';

type CarouselItem = {
  image: string;
  title: string;
  description: string;
};

const carouselData: CarouselItem[] = [
  {
    image: th2,
    title: 'Titre de l\'image 2',
    description: 'Description de l\'image 2',
  },
  {
    image: th3,
    title: 'Titre de l\'image 3',
    description: 'Description de l\'image 3',
  },
  {
    image: th2,
    title: 'Titre de l\'image 2',
    description: 'Description de l\'image 2',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Change image every 3 seconds, unless the carousel is paused
  useEffect(() => {
    if (isPaused) return; // If the carousel is paused, do nothing

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on re-render
  }, [isPaused]);

  // Function to handle manual image change
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <div className="relative w-full mx-auto   overflow-x-hidden">
        {/* Carousel Image */}
        <div className="relative w-full">
          <img
            src={carouselData[currentIndex].image}
            alt={`carousel-item-${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Carousel Information (Title & Description) */}
        <div className="absolute bottom-5 left-0 right-0 text-center text-white bg-gradient-to-t from-black via-transparent to-transparent py-2">
          <h2 className="text-xl font-bold">{carouselData[currentIndex].title}</h2>
          <p>{carouselData[currentIndex].description}</p>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#60;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#62;
        </button>

        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="absolute top-5 right-5 bg-black text-white p-2 rounded-full"
        >
          {isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
    </section>
  );
};

export default Carousel;
