import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-blue-600">
          NovaWeb Solutions
        </h1>

        <div className="hidden md:flex gap-8 font-medium">

          <a href="#home" className="hover:text-blue-600">Home</a>

          <a href="#about" className="hover:text-blue-600">About</a>

          <a href="#services" className="hover:text-blue-600">Services</a>

          <a href="#industries" className="hover:text-blue-600">Industries</a>

          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>

          <a href="#pricing" className="hover:text-blue-600">Pricing</a>

          <a href="#contact" className="hover:text-blue-600">Contact</a>

        </div>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
          Start Your Project
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-white p-6 space-y-4 shadow-lg">

          <a href="#home" className="block">Home</a>

          <a href="#about" className="block">About</a>

          <a href="#services" className="block">Services</a>

          <a href="#industries" className="block">Industries</a>

          <a href="#portfolio" className="block">Portfolio</a>

          <a href="#pricing" className="block">Pricing</a>

          <a href="#contact" className="block">Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;