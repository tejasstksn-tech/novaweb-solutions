import { useState } from "react";

function Navbar({ websiteData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          {websiteData.businessName}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#categories" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4 gap-4">
            <li><a href="#hero">Home</a></li>
            <li><a href="#categories">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;