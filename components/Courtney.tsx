import React from "react";
import Image from "next/image";
export default function Courtney() {
  return (
    <section className="bg-[#F0F0F0] py-16">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center lg:flex-row md:flex-col sm:flex-col flex-col">
          <h2 className="lg:text-5xl md:text-3xl text-4xl font-nuosu-sil font-normal lg:text-left md:text-center text-secondary mb-10">
            Courtney Lee Roberts: <br /> Stage & Screen
          </h2>

          <h1 className="lg:text-7xl md:text-3xl text-4xl font-nuosu-sil font-normal lg:text-left md:text-center text-secondary mb-10">
            Acting Since 5
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div className="bg-white p-12 flex flex-col  justify-center">
            <div className="max-w-3xl">
              <h4 className="text-4xl font-nuosu-sil mb-10 ">
                Engaging Stage Performer
              </h4>
              <span className="text-[#28150D] text-sm font-montserrat font-bold uppercase tracking-widest">
                Stage Performer
              </span>
              <p className="mt-10 text-[#28150D] text-[16px] font-montserrat leading-6">
                <span className="text-secondary font-bold">Description:</span>{" "}
                Courtney  first performed on stage at just five years old and
                instantly discovered her passion for acting.  Her theatre
                experience includes performances in over a dozen plays, drama
                classes, and attending a variety of physical theatre workshops.
                Her creative spirit and strong work ethic led her to owning her
                own business directing and producing youth theatre before moving
                to Los Angeles to pursue her acting career.
              </p>
            </div>
          </div>
          <div className="w-full mx-auto">
            <Image
              src="/images/Courtney1.png"
              alt="Courtney Lee Roberts Acting"
              width={700}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:mt-16 md:mt-10 mt-10">
          <div className="w-full  mx-auto">
            <Image
              src="/images/Courtney2.png"
              alt="Courtney Lee Roberts Acting"
              width={700}
              height={400}
              className="w-full  object-cover"
            />
          </div>
          <div className="bg-white p-12 flex flex-col  justify-center">
            <div className="max-w-3xl">
              <h4 className="text-4xl font-nuosu-sil mb-10 ">
                Dynamic Screen Actor
              </h4>
              <span className="text-[#28150D] text-sm font-montserrat font-bold uppercase tracking-widest">
                Stage Performer
              </span>
              <p className="mt-10 text-[#28150D] text-[16px] font-montserrat leading-6">
                <span className="text-secondary font-bold">Description:</span>{" "}
                Courtney has extensive on camera experience after working on a
                multitude of film projects and sets in Los Angeles. She excels
                as an actor on camera by bringing to life complex characters
                using her wide range of expression range and signature
                physicality. She is often most often seen in horror, drama,
                sci/fi, and comedy projects. Courtney is recently SAG-E and
                works full time as an actor while studying at Berg Studios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
