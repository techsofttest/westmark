import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-slb-blue text-white pt-24 pb-12 border-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <img src="/logo/logo-white.png" alt="Westmark Trading Co. Logo" className="h-26 w-auto object-contain self-start" />
            <p className="text-base text-blue-100 leading-relaxed max-w-md font-light" id="footer-description">
              Birkat Al Amawer, Doha - Qatar | 40126400 | +974 5136 0061 | sales@westmarkqatar.com | www.westmarkqatar.com
            </p>
          </div>

          {/* Sourcing Sectors Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-white">Sourcing Sectors</h3>
            <ul className="flex flex-col gap-2 text-sm text-blue-100/80 font-light">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Construction & Infrastructure</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Oil & Gas, Marine Services</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Energy & Hospitality Systems</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Facility Management & Safety</li>
            </ul>
          </div>

          {/* Operational Hubs Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-white">Operational Hubs</h3>
            <ul className="flex flex-col gap-2 text-sm text-blue-100/80 font-light">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Doha HQ - Qatar</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">UAE & India Networks</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">China & USA Sourcing Channels</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">UK & Germany Partnerships</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Policies */}
        <div className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-blue-100/75 font-light">
            © {new Date().getFullYear()} Westmark Trading Co. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-blue-100/75 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
