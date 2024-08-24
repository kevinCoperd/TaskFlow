"use client"; // Esto indica que el componente es un Client Component

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 relative">
        <Link href="/">
          <h3 className="font-bold text-3xl text-white">TaskFlow</h3>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex absolute top-full left-0 w-full md:w-auto bg-slate-900 md:bg-transparent py-3 md:py-0 md:mt-0 mt-2 z-10 transition-transform transform ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100%] opacity-0"
          }`}
        >
          <li className="text-center">
            <Link
              href="/"
              className="text-white block py-2 px-4 md:inline-block hover:bg-slate-700 rounded-md"
            >
              Tareas
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/new"
              className="text-slate-300 hover:text-slate-200 font-semibold block py-2 px-4 md:inline-block hover:bg-slate-700 rounded-md"
            >
              Crear tarea
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/about"
              className="text-slate-300 hover:text-slate-200 font-semibold block py-2 px-4 md:inline-block hover:bg-slate-700 rounded-md"
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
