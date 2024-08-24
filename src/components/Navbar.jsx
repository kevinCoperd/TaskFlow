"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href="/" className="font-bold text-3xl text-white">
          TaskFlow
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-slate-900 text-white"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="text-lg font-semibold hover:text-slate-300"
                onClick={toggleMenu}
              >
                Tareas
              </Link>
              <Link
                href="/new"
                className="text-lg font-semibold hover:text-slate-300"
                onClick={toggleMenu}
              >
                Crear tarea
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold hover:text-slate-300"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-white font-semibold hover:text-slate-300">
                  Tareas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/new" legacyBehavior passHref>
                <NavigationMenuLink className="text-white font-semibold hover:text-slate-300">
                  Crear tarea
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-white font-semibold hover:text-slate-300">
                  Nosotros
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
