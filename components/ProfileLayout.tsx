"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProfileLayout() {
  return (
    <section className="bg-[#F0F0F0] py-16">
      <div className="container mx-auto px-5">
        {/* GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* LEFT IMAGE */}
          <div className="bg-primary p-4 rounded-lg flex justify-center items-center">
            <div className="rounded-lg overflow-hidden w-full h-full">
              <Image
                src="/images/profile.png"
                width={400}
                height={600}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Casting Links */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between items-start flex-1 text-center">
              <div className="borderCustom border-b border-white w-full text-start pb-10">
                <Image
                  src="/images/manicon.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />

                <span className="text-2xl lg:text-[26px] md:text-2xl mt-4 font-normal font-nuosu-sil">
                  Casting Links
                </span>
              </div>

              {/* <hr className="borderCustom w-full my-4" /> */}

              <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-1 gap-3 w-full">
                <Link
                  href="https://resumes.actorsaccess.com/courtneyleeroberts"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 flex justify-center items-center underline">
                  Actor’s Access
                </Link>
                <Link
                  href="https://www.backstage.com/u/courtney-lee-roberts/"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 flex justify-center items-center underline">
                  Backstage
                </Link>
                <Link
                  href="https://app.castingnetworks.com/talent/public-profile/56ba0cca-73a5-11ee-8f03-55fcd33fe81d"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 flex justify-center items-center underline">
                  Casting Networks
                </Link>
                <Link
                  href="https://pro.imdb.com/name/nm16072304/?ref_=ext_shr_lnk"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 flex justify-center items-center underline">
                  IMDb
                </Link>
              </div>
            </div>

            {/* Book Courtney */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between items-start flex-1 text-center">
              <div className="borderCustom border-b border-white w-full text-start pb-10">
                <Image
                  src="/images/manicon.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />

                <span className="text-2xl lg:text-[26px] md:text-2xl mt-4 font-normal font-nuosu-sil">
                  Book Courtney Lee Roberts
                </span>
              </div>

              <p className="text-base text-start font-nuosu-sil font-normal leading-relaxed">
                For Booking Inquiries please contact Courtney&apos;s manager or
                agent with the information below. Thank you and hope to work
                together soon!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Info Box */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between items-start flex-1 text-center">
              <div className="borderCustom border-b border-white w-full text-start pb-10">
                <Image
                  src="/images/manicon.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />

                <span className="text-2xl lg:text-[26px] md:text-2xl mt-4 font-normal font-nuosu-sil">
                  Courtney Lee Roberts
                </span>
              </div>

              {/* <hr className="borderCustom w-full my-4" /> */}

              <p className="text-base text-start font-nuosu-sil font-normal leading-7">
                Aly Abramowitz, Manager Alya@ind-alchemy.com <br />
                Rosalind Rosa, Jager Campbell Talent Agency <br />
                info@jctalentagency.com
              </p>

              <div className="mx-auto w-full">
                <Link
                  href="#"
                  className="border border-white text-sm font-montserrat font-bold py-4 px-4 w-full flex justify-center items-center mt-4">
                  Contact Courtney Lee Roberts
                </Link>
              </div>
            </div>

            {/* Articles */}
            <div className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between items-start flex-1 text-center">
              <div className="borderCustom border-b border-white w-full text-start pb-10">
                <Image
                  src="/images/manicon.svg"
                  width={70}
                  height={70}
                  alt="icon"
                />

                <span className="text-2xl lg:text-[26px] md:text-2xl mt-4 font-normal font-nuosu-sil">
                  Articles
                </span>
              </div>

              {/* <hr className="borderCustom w-full my-4" /> */}

              <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-1 gap-3 w-full">
                <Link
                  href="https://bonnercountydailybee.com/news/2021/nov/02/literacy-though-theater-homeschool-academy/"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 px-4 flex justify-center items-center underline">
                  Seussical Jr. at The Homeschool Academy
                </Link>
                <Link
                  href="figma.com/exit?url=https%3A%2F%2Fbonnercountydailybee.com%2Fnews%2F2021%2Fapr%2F24%2Fpoac-raises-curtain-new-youth-drama-program%2F"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 px-4 flex justify-center items-center underline">
                  Sandpoint Showstoppers
                </Link>
                <Link
                  href="https://sandpointreader.com/winter-one-acts-put-talented-local-youth-at-center-stage/"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 px-4 flex justify-center items-center underline">
                  Winter One Acts
                </Link>
                <Link
                  href="https://sandpointreader.com/lpo-rep-theatre-presents-a-student-production-of-peter-pan-at-the-panida/"
                  target="_blank"
                  className="border border-white text-sm font-montserrat font-bold py-4 px-4 flex justify-center items-center underline">
                  Peter Pan Youth Summer Camp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
