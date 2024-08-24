import { forwardRef } from "react";
import { clsx } from "clsx";

const Button = forwardRef(
  ({ className, variant = "default", size = "medium", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none",
          variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
          variant === "outline" &&
            "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50",
          size === "icon" && "p-2",
          size === "medium" && "px-4 py-2",
          size === "large" && "px-6 py-3",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
