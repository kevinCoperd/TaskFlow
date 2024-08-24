import { forwardRef } from "react";
import { clsx } from "clsx";

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx("btn", variant, size, className)}
      {...props}
    />
  );
});

Button.displayName = "Button";
export { Button };
