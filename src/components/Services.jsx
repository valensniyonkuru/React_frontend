import React, { useEffect, useState } from 'react';
import four from '../assets/four.jpeg';
import one from '../assets/one.jpeg';
import three from '../assets/three.jpeg';
import two from '../assets/two.jpeg';

const images = [
  { src: one, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: two, description: 'Praesent vitae eros eget tellus tristique bibendum.' },
  { src: three, description: 'Donec rutrum sed sem quis venenatis.' },
  { src: four, description: 'Proin viverra risus a eros volutpat tempor.' },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="relative w-full max-w-2xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-700">{images[currentIndex].description}</p>
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
