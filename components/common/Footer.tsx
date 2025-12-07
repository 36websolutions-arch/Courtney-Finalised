import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary py-6 mt-10">
      <div className="container mx-auto px-5 ">
        <div className="flex items-center justify-between">
          <div className="text-white">
            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-10 justify-center md:justify-start">
              <span className="text-2xl font-nuosu-sil font-normal">
                Socials
              </span>
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
          <div className="flex md:flex-row flex-col items-center space-x-10">
            <p className="text-white text-sm font-montserrat font-normal">
              Copyright © 2025 Courtney Lee Roberts - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
