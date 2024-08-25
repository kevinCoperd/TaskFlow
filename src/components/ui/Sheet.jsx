"use client"; // Habilita el modo cliente para este componente

import * as React from "react"; // Importa React
import * as SheetPrimitive from "@radix-ui/react-dialog"; // Importa componentes básicos del diálogo de Radix
import { cva } from "class-variance-authority"; // Importa la función cva para manejar variantes de clases
import { X } from "lucide-react"; // Importa un ícono de cierre de la librería lucide-react

import { cn } from "@/lib/utils"; // Importa una función para concatenar nombres de clases condicionales

// Define el componente raíz del Sheet
const Sheet = SheetPrimitive.Root;

// Define el disparador del Sheet (el botón que lo abre)
const SheetTrigger = SheetPrimitive.Trigger;

// Define el botón de cierre del Sheet
const SheetClose = SheetPrimitive.Close;

// Define el portal donde se renderiza el Sheet (fuera del árbol DOM del componente principal)
const SheetPortal = SheetPrimitive.Portal;

// Define la superposición del Sheet con un fondo oscuro
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} // Pasa las propiedades restantes al componente
    ref={ref} // Pasa la referencia al componente
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName; // Establece el nombre de visualización del componente para herramientas de depuración

// Define variantes de estilo para la dirección desde la cual aparece el Sheet
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right", // Establece la variante por defecto para que el Sheet aparezca desde la derecha
    },
  }
);

// Define el componente que contiene el contenido del Sheet
const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay /> {/* Superposición con fondo oscuro */}
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)} // Aplica las variantes de estilo correspondientes
        {...props} // Pasa las propiedades restantes al componente
      >
        {children} {/* Contenido del Sheet */}
        <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent">
          <X className="h-4 w-4" /> {/* Ícono de cierre */}
          <span className="sr-only">Close</span>{" "}
          {/* Texto alternativo para accesibilidad */}
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName; // Establece el nombre de visualización del componente para herramientas de depuración

// Define un componente para manejar el encabezado del Sheet
const SheetHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props} // Pasa las propiedades restantes al componente
  />
);

// Define un componente para manejar el pie de página del Sheet
const SheetFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props} // Pasa las propiedades restantes al componente
  />
);

// Exporta los componentes para ser usados en otros archivos
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
};
