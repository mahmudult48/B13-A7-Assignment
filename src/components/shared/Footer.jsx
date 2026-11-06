import React from 'react';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full p-8 mx-auto bg-[#244D3F] text-white">

      {/* Main Footer */}
      <div className="text-center pt-8 pb-4">

        <h2 className="text-[36px] font-bold">
          KeepKeeper
        </h2>

        <p className="text-[13px] text-gray-300 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="text-[15px] mt-4 mb-3">
          Social Links
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-3">

          <a href="#" className="w-[28px] h-[28px] bg-white text-[#244D3F] rounded-full flex items-center justify-center">
            <FaYoutube size={14} />
          </a>

          <a href="#" className="w-[28px] h-[28px] bg-white text-[#244D3F] rounded-full flex items-center justify-center">
            <FaFacebookF size={14} />
          </a>

          <a href="#" className="w-[28px] h-[28px] bg-white text-[#244D3F] rounded-full flex items-center justify-center text-[15px]">
            𝕏
          </a>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-[70%] mx-auto border-t border-white/10 py-5 flex justify-between items-center text-[11px] text-gray-400">

        <p>
          © 2026 KeepKeeper. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;