"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

export default function Headshots() {
  const [index, setIndex] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <section id="headshots" className="bg-white py-20">
      <div className="container mx-auto px-5">
        <h4 className="text-sm text-secondary font-medium font-montserrat">
          | Headshots |
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl mt-4 font-nuosu-sil text-HeadingColor font-semibold leading-tight">
              Courtney Lee Roberts:
              <br /> Headshot Gallery
            </h1>
          </div>

          <p className="text-2xl text-HeadingColor font-normal font-nuosu-sil leading-normal">
            A curated collection of professional portraits capturing Courtney’s
            personality, confidence, and versatility.
          </p>
        </div>

        {/* SLIDER SECTION */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  i === index ? "opacity-100 scale-100" : "opacity-70"
                }`}>
                <Image
                  src={img}
                  alt="Headshot Image"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => setPopupImage(img)}
                />
              </div>
            ))}
          </div>

          <button
            title="btn"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200">
            <FaChevronLeft size={22} className="text-secondary" />
          </button>

          <button
            title="btn"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200">
            <FaChevronRight size={22} className="text-secondary" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN POPUP */}
      {/* FULLSCREEN POPUP */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-5">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setPopupImage(null)}
            className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300">
            ✕
          </button>

          {/* LEFT BUTTON */}
          <button
            onClick={() => {
              const currentIndex = images.indexOf(popupImage);
              const prevIndex =
                currentIndex === 0 ? images.length - 1 : currentIndex - 1;
              setPopupImage(images[prevIndex]);
            }}
            className="absolute left-5 text-white text-4xl hover:text-gray-300">
            ❮
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => {
              const currentIndex = images.indexOf(popupImage);
              const nextIndex =
                currentIndex === images.length - 1 ? 0 : currentIndex + 1;
              setPopupImage(images[nextIndex]);
            }}
            className="absolute right-5 text-white text-4xl hover:text-gray-300">
            ❯
          </button>

          {/* FULLSCREEN IMAGE */}
          <div className="max-w-4xl w-full">
            <Image
              src={popupImage}
              alt="Fullscreen Image"
              width={1600}
              height={1600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
