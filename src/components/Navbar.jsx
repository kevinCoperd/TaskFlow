// Archivo: Navbar.jsx

"use client"; // Habilita el modo cliente para este componente

import { useState, useCallback } from "react"; // Importa hooks de React para manejar el estado y funciones
import Link from "next/link"; // Importa el componente de enlace de Next.js
import { Menu } from "lucide-react"; // Importa un ícono de menú de la librería lucide-react
import { Button } from "@/components/ui/button"; // Importa el componente de botón personalizado
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"; // Importa componentes de un Sheet personalizado

// Array de objetos que representan los elementos de navegación
const navItems = [
  { href: "/", label: "Home" }, // Página principal
  { href: "/new", label: "Create Tasks" }, // Página de creación de tareas
  { href: "/about", label: "About" }, // Página de "Acerca de"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Define un estado para controlar si el menú móvil está abierto o cerrado

  // Función para alternar el estado del menú móvil
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev); // Cambia el estado de `isOpen` al valor opuesto
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Contenedor principal de la barra de navegación */}
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo o nombre de la aplicación */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <h2 className="text-2xl font-light text-primary">
              Task<span className="font-black">Flow</span>
            </h2>
          </Link>
        </div>
        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Menú de navegación para pantallas pequeñas, utilizando un Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              onClick={toggleMenu} // Abre o cierra el menú móvil al hacer clic
            >
              <Menu className="h-5 w-5" /> {/* Ícono de menú */}
              <span className="sr-only">Toggle Menu</span>{" "}
              {/* Texto alternativo para accesibilidad */}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                {/* Logo o nombre en el menú móvil */}
                <Link
                  href="/"
                  className="flex items-center mb-6"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en el logo
                >
                  <span className="font-bold text-lg">TaskFlow</span>
                </Link>
                {/* Menú de enlaces en el menú móvil */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
