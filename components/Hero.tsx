import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPlay,
} from "react-icons/fa";
import { LuClapperboard, LuVideo } from "react-icons/lu";
import Image from "next/image";
export const metadata = {
  title: "Courtney Lee Roberts | Actor & Artist",
  description:
    "Courtney Lee Roberts – Professional Actor & Artist. View video gallery, contact info, agent details and latest updates.",
  keywords: [
    "Courtney Lee Roberts",
    "Actor",
    "Artist",
    "Video Gallery",
    "Film",
    "Theatre",
    "Portfolio",
  ],
  authors: [{ name: "Courtney Lee Roberts" }],

  openGraph: {
    title: "Courtney Lee Roberts | Actor & Artist",
    description:
      "Discover the work of actor & artist Courtney Lee Roberts. Watch videos, view photos, and contact the team.",
    url: "https://your-website.com",
    type: "website",
    images: ["/images/hero1.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Courtney Lee Roberts | Actor & Artist",
    images: ["/images/hero1.png"],
  },

  alternates: {
    canonical: "https://your-website.com",
  },
};
export default function Hero() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-5 md:col-span-12 text-center md:text-left">
            <div className="flex gap-y-2 flex-col">
              <span className="text-sm text-white font-medium font-montserrat">
                | Courtney Lee Roberts |
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal text-secondary font-nuosu-sil">
                Courtney Lee Roberts{" "}
                <p className="text-white">Actor & Artist</p>
              </h1>
              <div className="flex gap-5 mt-5 justify-center md:justify-start">
                <button className="flex gap-2 items-center text-sm font-bold bg-secondary text-white py-5 px-7 ">
                  <FaPlay /> Video Gallery
                </button>
                <button className="flex gap-2 items-center border-2 border-secondary text-sm font-bold  text-secondary py-5 px-7 ">
                  Contact Me
                </button>
              </div>
              {/* // info */}
              <div className="flex gap-5 mt-5 justify-center md:justify-start">
                <div className="text-white py-10">
                  {/* CONTACT INFORMATION */}
                  <div className="flex items-start gap-5 mt-5 justify-center md:justify-start">
                    <div className="w-18 h-18 bg-[#E1B8C6] rounded-full flex items-center justify-center">
                      <LuClapperboard size={32} className="text-secondary" />
                    </div>

                    <div>
                      <h4 className="text-[12px] font-montserrat font-extrabold tracking-widest">
                        CONTACT INFORMATION
                      </h4>
                      <p className="mt-1 text-[16px] underline font-light font-montserrat">
                        +1 (234) 567 89 00
                      </p>
                      <p className="underline cursor-pointer text-[16px] font-light font-montserrat">
                        julie_smith@email.com
                      </p>
                    </div>
                  </div>

                  {/* AGENT CONTACTS */}
                  <div className="flex items-start gap-5 mt-8 justify-center md:justify-start">
                    <div className="w-18 h-18 bg-[#E1B8C6] rounded-full flex items-center justify-center">
                      <LuVideo size={32} className="text-secondary" />
                    </div>

                    <div>
                      <h4 className="text-[12px] font-montserrat font-extrabold tracking-widest">
                        AGENT CONTACTS
                      </h4>
                      <p className="mt-1 text-[16px] underline font-light font-montserrat">
                        +1 (234) 567 89 01
                      </p>
                      <p className="underline cursor-pointer text-[16px] font-light font-montserrat">
                        agent_smith@email.com
                      </p>
                    </div>
                  </div>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-6 mt-10 justify-center md:justify-start">
                    <FaInstagram
                      size={28}
                      className="cursor-pointer hover:text-secondary duration-300"
                    />
                    <FaFacebookF
                      size={28}
                      className="cursor-pointer hover:text-secondary duration-300"
                    />
                    <FaTwitter
                      size={28}
                      className="cursor-pointer hover:text-secondary duration-300"
                    />
                    <FaYoutube
                      size={32}
                      className="cursor-pointer hover:text-secondary duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 md:col-span-12 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div>
                <Image
                  src="/images/hero1.png"
                  alt="Hero Image 1"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/hero1.png"
                  alt="Hero Image 1"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:mt-10 md:mt-6 mt-4">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/3hwPUtczbH8?autoplay=1&mute=1&rel=0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
