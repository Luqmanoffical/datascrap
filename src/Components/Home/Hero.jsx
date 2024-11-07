import React, { useState, useEffect } from 'react';
import hero1 from "../../assets/hero1.avif";
import hero2 from "../../assets/hero2.avif";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [hero1, hero2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          fontFamily: " fontFamily:, Mona Sans, Roboto, sans-serif" 
         }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-6">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            {/* Title */}
            <h4 className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-2">
              The Runner Collection
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Comfortable by Nature
            </h1>
            {/* Description */}
            <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
              Step into the perfect blend of comfort and style with The Runner Collection. Crafted for those who value both performance and everyday wearability, our shoes are designed with your feet in mind—whether you're running errands or running miles.
            </p>
           
            {/* CTA Button */}
            <button className="bg-white text-black font-semibold text-lg py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
