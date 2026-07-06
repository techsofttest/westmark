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
            <span className={`hidden lg:inline-flex items-center gap-1.5 text-[12px] font-extrabold tracking-widest uppercase transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              } ${isAtTop ? "text-white" : "text-[#0F0F10]"}`}>
              <span>WESTMARK TRADING CO.</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>QATAR</span>
            </span>
          </div>

          {/* Center: Large Logo */}
          <div className="flex justify-center items-center w-[40%] h-full">
            <a href="/" className="flex items-center group" id="nav-logo">
              <img
                src={isAtTop ? "/logo/logo-white.png" : "/logo/logo.png"}
                alt="Westmark Trading Co. Logo"
                className="h-16 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Right: Company Info */}
          <div className="w-[30%] flex flex-col items-end text-right justify-center">
            <div className={`hidden lg:flex flex-col items-end transition-colors duration-300 ${isAtTop ? "text-white" : "text-[#0F0F10]"}`}>
              <span className="text-[12px] font-bold tracking-wider opacity-90 uppercase">AN ISO CERTIFIED CO.</span>
              <div className="text-[14px] font-normal tracking-wide mt-1 flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-2">
                <a href="mailto:sales@westmarkqatar.com" className="hover:underline font-semibold opacity-95 hover:opacity-100 transition-opacity">sales@westmarkqatar.com</a>
                <span className="hidden md:inline text-slate-400">|</span>
                <a href="tel:+97451360061" className="hover:underline font-semibold opacity-95 hover:opacity-100 transition-opacity">Mob: +974 5136 0061</a>
              </div>
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
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white z-50 p-10 shadow-xl transition-transform duration-300 flex flex-col justify-between overflow-hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Background slanted lines */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-2 select-none overflow-hidden">
          {/* Stroke 1 */}
          <div className="absolute left-[-10%] top-[-60%] bottom-[-20%] w-6 bg-slb-blue transform skew-x-[60deg]" />
          {/* Stroke 2 */}
          <div className="absolute left-[25%] top-[-60%] bottom-[-20%] w-6 bg-slb-blue transform -skew-x-[60deg]" />
          {/* Stroke 3 */}
          <div className="absolute left-[60%] top-[-60%] bottom-[-20%] w-6 bg-slb-blue transform skew-x-[60deg]" />
          {/* Stroke 4 */}
          <div className="absolute left-[95%] top-[-60%] bottom-[-20%] w-6 bg-slb-blue transform -skew-x-[60deg]" />
        </div>

        <div className="flex flex-col gap-16 relative z-10">
          {/* Logo & Close Button in Drawer */}
          <div className={`flex items-center justify-between transition-all duration-500 ease-out transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}>
            <img src="/logo/logo.png" alt="Westmark Logo" className="h-20 w-auto object-contain" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-[#0F0F10] transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links aligned to the right */}
          <nav className="flex flex-col items-end gap-6 pr-2">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-xl font-semibold tracking-[0.25em] uppercase text-slate-700 hover:text-slb-blue hover:tracking-[0.2em] hover:-translate-x-2 transition-all duration-500 ease-out transform delay-100 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`text-xl font-semibold tracking-[0.25em] uppercase text-slate-700 hover:text-slb-blue hover:tracking-[0.2em] hover:-translate-x-2 transition-all duration-500 ease-out transform delay-200 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              About Us
            </a>
            <a
              href="/products"
              onClick={() => setIsOpen(false)}
              className={`text-xl font-semibold tracking-[0.25em] uppercase text-slate-700 hover:text-slb-blue hover:tracking-[0.2em] hover:-translate-x-2 transition-all duration-500 ease-out transform delay-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              Products
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-xl font-semibold tracking-[0.25em] uppercase text-slate-700 hover:text-slb-blue hover:tracking-[0.2em] hover:-translate-x-2 transition-all duration-500 ease-out transform delay-400 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Footer info in Drawer */}
        <div className={`relative z-10 text-right flex flex-col items-end gap-1.5 text-[12px] tracking-wider uppercase text-slate-650 pr-2 transition-all duration-500 ease-out transform delay-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
          <p className="font-bold text-slate-900 mb-1 text-[13px]">
            Westmark Trading Co.
          </p>
          <p className="text-slate-600">Birkat Al Amawer, Doha - Qatar</p>
          <div className="flex flex-col items-end text-slate-600">
            <a href="tel:+97440126400" className="hover:text-slb-blue transition-colors">Tel: 40126400</a>
            <a href="tel:+97451360061" className="hover:text-slb-blue transition-colors">Mob: +974 5136 0061</a>
          </div>
          <a href="mailto:sales@westmarkqatar.com" className="lowercase hover:text-slb-blue transition-colors text-slate-700 font-medium">sales@westmarkqatar.com</a>
          <a href="https://www.westmarkqatar.com" target="_blank" rel="noopener noreferrer" className="lowercase hover:text-slb-blue transition-colors text-slate-700 font-medium">www.westmarkqatar.com</a>
        </div>
      </div>
    </>
  );
}
