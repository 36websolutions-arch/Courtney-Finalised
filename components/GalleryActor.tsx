"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function GalleryActor() {
  const images = [
    "/images/actor1.png",
    "/images/actor2.png",
    "/images/actor3.png",
    "/images/actor4.png",
    "/images/actor5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setCurrentIndex(null);
  };

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        {/* TOP SECTION — unchanged */}
        <h4 className="text-sm text-secondary font-medium font-montserrat">
          | Gallery |
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl mt-4 font-nuosu-sil text-HeadingColor font-semibold leading-tight">
              Commercial Model for
              <br /> First Street Leather
            </h1>
          </div>

          <p className="text-2xl text-HeadingColor font-normal font-nuosu-sil leading-normal">
            Featuring Courtney as the commercial model for First Street Leather—
            capturing the brand’s bold aesthetics, rich textures, and elevated
            lifestyle.
          </p>
        </div>

        {/* IMAGE GALLERY — EXACT SAME UI */}
        <div className="mt-14 space-y-10">
          {/* TOP 3 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.slice(0, 3).map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Gallery"
                width={500}
                height={500}
                onClick={() => openPopup(i)}
                className={
                  i === 2
                    ? "2xl:w-[316px] xl:w-[260px] lg:w-[200px] md:w-full w-full h-auto object-cover rounded-lg cursor-pointer"
                    : "w-full h-auto object-cover rounded-lg cursor-pointer"
                }
              />
            ))}
          </div>

          {/* BOTTOM 2 IMAGES — unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(3).map((src, i) => (
              <Image
                key={i + 3}
                src={src}
                alt="Gallery"
                width={700}
                height={500}
                onClick={() => openPopup(i + 3)}
                className="w-full h-auto md:h-[700px] object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* POPUP VIEWER */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]"
          onClick={closePopup}>
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closePopup();
            }}
            className="absolute top-5 right-5 text-white text-3xl font-bold">
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-5 text-white text-4xl">
            ‹
          </button>

          {/* Image */}
          <Image
            src={images[currentIndex]}
            alt="Popup"
            width={900}
            height={900}
            className="max-h-[90vh] w-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-5 text-white text-4xl">
            ›
          </button>
        </div>
      )}
    </section>
  );
}
