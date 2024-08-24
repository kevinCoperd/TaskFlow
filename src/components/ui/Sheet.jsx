import * as React from "react";
import {
  Sheet as ShadcnSheet,
  SheetContent as ShadcnSheetContent,
  SheetTrigger as ShadcnSheetTrigger,
} from "@shadcn/ui";
import { clsx } from "clsx";

// Sheet Component
const Sheet = ({ className, ...props }) => {
  return <ShadcnSheet className={clsx(className)} {...props} />;
};

// SheetContent Component
const SheetContent = ({ className, ...props }) => {
  return (
    <ShadcnSheetContent
      className={clsx("bg-gray-800 text-white p-4", className)}
      {...props}
    />
  );
};

// SheetTrigger Component
const SheetTrigger = ({ className, ...props }) => {
  return <ShadcnSheetTrigger className={clsx(className)} {...props} />;
};

export { Sheet, SheetContent, SheetTrigger };
