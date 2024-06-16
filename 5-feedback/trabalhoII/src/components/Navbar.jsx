// Hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { CiMenuFries, CiSquareRemove, CiSearch } from "react-icons/ci";

// Images
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/Livraria" className="flex items-center  gap-3">
            <img src={logo} Linklt="Logo" className="max-w-12 invert" />
            <h1 className="font-semibold text-3xl text-white">ORLINE</h1>
          </Link>
        </div>

        {/* Search input */}
        <form className="flex items-center bg-gray-700 border border-gray-600 rounded-md">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="px-3 py-1 bg-gray-700 text-white focus:outline-none focus:border-gray-500"
          />
          <CiSearch size={30} className="invert cursor-pointer" />
        </form>

        {/* Links */}
        <div className="flex">
          <div className={`md:flex ${isOpen ? "block" : "hidden"} text-start`}>
            <ul className="md:flex items-center space-x-4 font-bold text-lg">
              <ul className="md:flex items-center space-x-4">
                <li>
                  <Link
                    to="/Livraria"
                    className="text-white hover:opacity-75 hover:border-b"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="text-white hover:opacity-75 hover:border-b"
                  >
                    Livros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white hover:opacity-75 hover:border-b"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <CiSquareRemove size={30} />
              ) : (
                <CiMenuFries size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
