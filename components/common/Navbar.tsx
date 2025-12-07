"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary py-10">
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg" // replace with your logo
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-white tracking-wide text-sm font-medium font-montserrat">
          {[
            { name: "ABOUT ME", href: "#about" },
            { name: "HEADSHOTS", href: "#headshots" },
            { name: "GALLERY", href: "#gallery" },
            { name: "COVER LETTER", href: "#coverletter" },
            { name: "CONTACT ME", href: "tel:+12345678900" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, opacity: 0.8, color: "#a8542a" }}
              transition={{ duration: 0.2 }}>
              <Link href={item.href}>{item.name}</Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary text-white px-5 py-4">
          <div className="flex flex-col gap-4 text-sm tracking-wide font-medium font-montserrat">
            {[
              { name: "ABOUT ME", href: "#about" },
              { name: "HEADSHOTS", href: "#headshots" },
              { name: "GALLERY", href: "#gallery" },
              { name: "COVER LETTER", href: "#coverletter" },
              { name: "CONTACT ME", href: "tel:+12345678900" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}>
                <Link href={item.href}>{item.name}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
