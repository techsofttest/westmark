"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setIsAtTop(currentScrollPos < 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 translate-y-0 ${isAtTop
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-slb-border shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          {/* Left: Animated Burger Icon & Company Name */}
          <div className="w-[30%] flex justify-start items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50 relative cursor-pointer group"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-[#0F0F10]" : `group-hover:w-5 ${isAtTop ? "bg-white" : "bg-[#0F0F10]"}`
                  }`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? "opacity-0 bg-[#0F0F10]" : `${isAtTop ? "bg-white" : "bg-[#0F0F10]"}`
                  }`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-[#0F0F10]" : `group-hover:w-4 ${isAtTop ? "bg-white" : "bg-[#0F0F10]"}`
                  }`}
              />
            </button>
            <span className={`hidden md:inline-block text-[12px] font-extrabold tracking-widest uppercase transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              } ${isAtTop ? "text-white" : "text-[#0F0F10]"}`}>
              WESTMARK TRADING CO. 9 QATAR
            </span>
          </div>

          {/* Center: Large Logo */}
          <div className="flex justify-center items-center w-[40%] h-full">
            <a href="#" className="flex items-center group" id="nav-logo">
              <img
                src={isAtTop ? "/logo/logo-white.png" : "/logo/logo.png"}
                alt="Westmark Trading Co. Logo"
                className="h-26 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Right: Company Info */}
          <div className={`w-[30%] flex flex-col items-end text-right transition-colors duration-300 ${isAtTop ? "text-white" : "text-[#0F0F10]"
            }`}>
            <span className="text-[12px] font-bold tracking-wider opacity-90 uppercase">AN ISO CERTIFIED CO.</span>
            <div className="text-[14px] font-normal tracking-wide mt-1 flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-2">
              <a href="mailto:sales@westmarkqatar.com" className="hover:underline font-semibold opacity-95 hover:opacity-100 transition-opacity">sales@westmarkqatar.com</a>
              <span className="hidden md:inline text-slate-400">|</span>
              <a href="tel:+97451360061" className="hover:underline font-semibold opacity-95 hover:opacity-100 transition-opacity">Mob: +974 5136 0061</a>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0F0F10]/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-50 p-10 shadow-xl transition-transform duration-300 flex flex-col justify-between ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-16">
          {/* Logo & Close Button in Drawer */}
          <div className="flex items-center justify-between">
            <img src="/logo/logo.png" alt="Westmark Logo" className="h-20 w-auto object-contain" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-[#0F0F10] transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links aligned to the right */}
          <nav className="flex flex-col items-end gap-6 pr-2">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold tracking-[0.25em] uppercase text-slate-500 hover:text-slb-blue transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold tracking-[0.25em] uppercase text-slate-500 hover:text-slb-blue transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold tracking-[0.25em] uppercase text-slate-500 hover:text-slb-blue transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold tracking-[0.25em] uppercase text-slate-500 hover:text-slb-blue transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Footer info in Drawer */}
        <div className="text-right flex flex-col items-end gap-1 text-[12px] tracking-wider uppercase text-slate-400 font-light pr-2">
          <p className="font-bold text-slate-600 mb-1 text-[13px]">
            Westmark Trading Co.
          </p>
          <p>Birkat Al Amawer, Doha - Qatar</p>
          <p>Tel: 40126400</p>
          <p>Mob: +974 5136 0061</p>
          <p className="lowercase">sales@westmarkqatar.com</p>
          <p className="lowercase">www.westmarkqatar.com</p>
        </div>
      </div>
    </>
  );
}
