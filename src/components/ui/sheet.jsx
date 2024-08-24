import { Dialog } from "@headlessui/react";

const Sheet = ({ open, onOpenChange, children }) => {
  return (
    <Dialog open={open} onClose={() => onOpenChange(false)}>
      {children}
    </Dialog>
  );
};

export { Sheet };
