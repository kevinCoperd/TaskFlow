import * as React from "react"; // Importa React
import { Slot } from "@radix-ui/react-slot"; // Importa un Slot de Radix para componentes
import { cva } from "class-variance-authority"; // Importa la función cva para manejar variantes de clases

import { cn } from "@/lib/utils"; // Importa una función para concatenar nombres de clases condicionales

// Define las variantes de estilo del botón usando cva
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // Estilo por defecto
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Estilo destructivo
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Estilo de borde
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Estilo secundario
        ghost: "hover:bg-accent hover:text-accent-foreground", // Estilo ghost
        link: "text-primary underline-offset-4 hover:underline", // Estilo de enlace
      },
      size: {
        default: "h-10 px-4 py-2", // Tamaño por defecto
        sm: "h-9 rounded-md px-3", // Tamaño pequeño
        lg: "h-11 rounded-md px-8", // Tamaño grande
        icon: "h-10 w-10", // Tamaño de ícono
      },
    },
    defaultVariants: {
      variant: "default", // Variante por defecto
      size: "default", // Tamaño por defecto
    },
  }
);

// Define el componente Button usando React.forwardRef para manejar referencias
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Decide si usar un Slot o un botón HTML estándar
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Aplica las clases CSS correspondientes a las variantes y tamaño
        ref={ref} // Pasa la referencia al componente
        {...props} // Pasa las propiedades restantes al componente
      />
    );
  }
);
Button.displayName = "Button"; // Establece el nombre de visualización del componente para herramientas de depuración

export { Button, buttonVariants }; // Exporta el componente Button y las variantes de estilo
