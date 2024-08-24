"use client"; // Asegura que este componente se ejecute en el cliente, no en el servidor

import Link from "next/link"; // Importa el componente Link de Next.js para navegación
import { useState } from "react"; // Importa useState de React para manejar el estado del componente
import { Menu } from "lucide-react"; // Importa el ícono de menú desde lucide-react

export default function Navbar() {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array de objetos que define los enlaces de navegación
  const navItems = [
    { href: "/", label: "Home" }, // Enlace a la página principal
    { href: "/new", label: "Crear Tareas" }, // Enlace para crear nuevas tareas
    { href: "/about", label: "About" }, // Enlace a la página "Acerca de"
  ];

  return (
    <header className="bg-white shadow-sm">
      {" "}
      {/* Encabezado con fondo blanco y sombra ligera */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Contenedor centrado con padding adaptado a distintos tamaños de pantalla */}
        <div className="flex justify-between items-center py-4">
          {" "}
          {/* Contenedor flexible con espacio entre elementos y padding vertical */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">TaskFlow</h1>{" "}
            {/* Título de la aplicación con estilo */}
          </div>
          <nav className="hidden md:flex space-x-4">
            {" "}
            {/* Menú de navegación visible solo en pantallas medianas y grandes */}
            {navItems.map((item) => (
              <Link
                key={item.href} // Clave única para cada enlace
                href={item.href} // Ruta a la que enlaza
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" // Estilos del enlace
              >
                {item.label} {/* Texto del enlace */}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {" "}
            {/* Contenedor del botón del menú, visible solo en pantallas pequeñas */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambia el estado de isMenuOpen al hacer clic
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" // Estilos del botón
            >
              <Menu className="h-6 w-6" /> {/* Ícono del menú */}
            </button>
          </div>
        </div>
      </div>
      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {" "}
            {/* Contenedor del menú con padding y espacio entre elementos */}
            {navItems.map((item) => (
              <Link
                key={item.href} // Clave única para cada enlace
                href={item.href} // Ruta a la que enlaza
                className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium" // Estilos del enlace
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
              >
                {item.label} {/* Texto del enlace */}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
