// components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 py-4 px-8 bg-transparent flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">Muhammad Ibrahim</h1>
      <div className="flex gap-6">
        <a href="#hero" className="menuLink text-white hover:text-[#edcc56]">Home</a>
        <a href="#Contacts" className="menuLink text-white hover:text-[#edcc56]">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
