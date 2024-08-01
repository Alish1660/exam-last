"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Pexsel from "../public/images/pexels.jpg";
import Pexsel2 from "../public/images/pexels2.jpg";
import Pexsel3 from "../public/images/pexels3.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Pexsel, Pexsel2, Pexsel3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="pb-10">
      <div className="container mx-auto">
        <div className="relative w-full h-[488px] max-w-[1240px] rounded-2xl mx-auto overflow-hidden flex items-center justify-center">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                className={`w-full flex-shrink-0 transition-opacity duration-1000 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={1240}
                  height={488}
                  objectFit="cover"
                  className="border-4 border-gray-300"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
