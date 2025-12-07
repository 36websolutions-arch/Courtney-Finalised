"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function MyResume() {
  const images = [
    "/images/resume1.png",
    "/images/resume2.png",
    "/images/resume3.png",
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 1 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <section id="coverletter" className="bg-primary py-16">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
          {/* LEFT SIDE – Cover Letter */}
          <div className="mx-auto text-center w-full">
            <h4 className="text-sm text-white font-medium font-montserrat">
              | Cover Letter |
            </h4>
            <h2 className="lg:text-5xl text-center text-white md:text-4xl text-4xl font-nuosu-sil font-normal">
              My Cover Letter
            </h2>

            <div className="mt-10 bg-[#E5C9C4] p-5">
              <Image
                src={images[0]}
                width={600}
                height={600}
                alt="cover letter"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE – Resume Slider */}
          <div className="mx-auto text-center w-full relative">
            <h4 className="text-sm text-white font-medium font-montserrat">
              | Resume |
            </h4>
            <h2 className="lg:text-5xl text-center text-white md:text-4xl text-4xl font-nuosu-sil font-normal">
              My Resume
            </h2>

            <div className="mt-10 relative mx-auto">
              {/* Resume Image */}
              <div className="bg-[#E5C9C4] p-5">
                <Image
                  src={images[index]}
                  width={600}
                  height={600}
                  alt="resume"
                  className="w-full h-full"
                />
              </div>

              {/* LEFT ARROW */}
              <button
                type="button"
                title="btm"
                onClick={prevSlide}
                className="absolute top-1/2 -left-5 -translate-y-1/2 bg-[#E5C9C4] rounded-full p-1 flex items-center border border-white text-white text-3xl">
                <FiChevronLeft />
              </button>

              {/* RIGHT ARROW */}
              <button
                title="btn"
                onClick={nextSlide}
                className="absolute top-1/2 -right-5 -translate-y-1/2 bg-[#E5C9C4] rounded-full p-1 flex items-center border border-white text-white text-3xl">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
