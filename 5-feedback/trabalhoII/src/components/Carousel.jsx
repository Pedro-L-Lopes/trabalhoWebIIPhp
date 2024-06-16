// Hooks
import { useState, useEffect } from "react";

// Icons
import { IoIosArrowBack } from "react-icons/io";

// Images
import img1 from "../assets/carousel1.webp";
import img2 from "../assets/carousel2.webp";
import img3 from "../assets/carousel3.webp";

const images = [img1, img2, img3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel relative">
      <button
        onClick={prevSlide}
        className="z-10 absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-opacity-100 focus:outline-none"
      >
        <IoIosArrowBack size={24} />
      </button>
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="mx-auto"
        />
        <div className="absolute bottom-2 w-full flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 mx-1 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              } focus:outline-none`}
            ></button>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-opacity-100"
      >
        <IoIosArrowBack size={24} className="rotate-180" />
      </button>
    </div>
  );
};

export default Carousel;
