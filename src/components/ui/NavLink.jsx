import Link from "next/link";
import { forwardRef } from "react";
import { clsx } from "clsx";

const NavLink = forwardRef(({ className, href, children, ...props }, ref) => {
  return (
    <Link
      href={href}
      ref={ref}
      className={clsx(
        "text-white font-semibold hover:text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";
export { NavLink };
