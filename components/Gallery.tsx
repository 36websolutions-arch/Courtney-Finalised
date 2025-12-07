"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
    "/images/gallery8.png",
    "/images/gallery9.png",
    "/images/gallery10.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev as number) - 1
    );
  };

  const showNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5">
        {/* ========= TOP SECTION (UNCHANGED) ========= */}
        <div>
          <h4 className="text-sm text-white font-medium font-montserrat">
            | Gallery |
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mt-4 font-nuosu-sil text-white font-semibold  leading-tight">
                Capturing Moments,
                <br /> <span className="text-secondary">Showcasing </span>Talent
              </h1>
            </div>
            <div>
              <p className="text-2xl text-white font-normal font-nuosu-sil leading-7">
                Get a glimpse behind the curtain with splendid shots from
                rehearsals, film sets, and theater productions.
              </p>
              <p className="text-base text-white font-montserrat font-light mt-5 leading-6">
                These stunning photos offer a unique look into my acting life
                and the creative process behind my performances.
              </p>
            </div>
          </div>
        </div>

        {/* ========= IMAGE GALLERY ========= */}
        <div className="mt-12">
          {/* TOP BIG IMAGES */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full cursor-pointer" onClick={() => openPopup(0)}>
              <Image
                src={images[0]}
                alt="Gallery Main"
                width={900}
                height={600}
                className="w-full object-cover rounded-lg"
              />
            </div>

            <div
              className="w-full md:max-w-[300px] cursor-pointer"
              onClick={() => openPopup(1)}>
              <Image
                src={images[1]}
                alt="Gallery Tall"
                width={400}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {images.slice(2).map((img, i) => (
              <div
                key={i}
                className="cursor-pointer"
                onClick={() => openPopup(i + 2)}>
                <Image
                  src={img}
                  alt="Gallery Small"
                  width={400}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ========= POPUP MODAL ========= */}
        {currentIndex !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
            {/* CLOSE BUTTON */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-4xl font-bold">
              ✕
            </button>

            {/* LEFT ARROW */}
            <button
              onClick={showPrev}
              className="absolute left-5 text-white text-5xl">
              ❮
            </button>

            {/* IMAGE */}
            <Image
              src={images[currentIndex]}
              alt="Popup Image"
              width={900}
              height={700}
              className="rounded-lg max-h-[90vh] object-contain"
            />

            {/* RIGHT ARROW */}
            <button
              onClick={showNext}
              className="absolute right-5 text-white text-5xl">
              ❯
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
