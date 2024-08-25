"use client"; // Indica que este componente se renderiza en el cliente en una aplicación Next.js.

import { useState, useCallback } from "react"; // Importa hooks de React para manejar el estado y las funciones.
import Link from "next/link"; // Importa el componente Link de Next.js para navegación entre páginas.
import { Menu } from "lucide-react"; // Importa un icono de menú de la librería lucide-react.
import { Button } from "@/components/ui/button"; // Importa el componente Button de una ruta personalizada.
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"; // Importa componentes del sistema de 'hojas' (Sheet) desde otro componente personalizado.

const navItems = [
  { href: "/", label: "Home" },
  { href: "/new", label: "Create Tasks" },
  { href: "/about", label: "About" },
]; // Define los elementos de la navegación, con rutas y etiquetas para los enlaces.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Crea un estado local para manejar si el menú desplegable está abierto o cerrado.

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []); // Define una función que alterna el estado del menú.

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* El contenedor principal para la barra de navegación, con clases de Tailwind para el diseño */}

      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Contenedor para la barra de navegación, con flexbox para alinear los elementos */}

        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo o nombre de la aplicación con un enlace a la página principal */}
            <span className="font-bold text-lg">TaskFlow</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* Barra de navegación para pantallas grandes, oculta en móviles */}

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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* Componente de 'hoja' (Sheet) que contiene el menú para móviles */}

          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              onClick={toggleMenu}
            >
              {/* Botón para abrir/cerrar el menú en móviles */}
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="pr-0">
            {/* Contenido del menú que aparece en la 'hoja' desde el lado izquierdo */}

            <div className="flex flex-col h-full">
              <div className="flex-1">
                <Link
                  href="/"
                  className="flex items-center mb-6"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Logo o nombre de la aplicación dentro del menú móvil */}
                  <span className="font-bold text-lg">TaskFlow</span>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {/* Navegación dentro del menú móvil */}
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsOpen(false)}
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
