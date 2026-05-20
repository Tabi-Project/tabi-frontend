import { useState, useEffect, useRef, RefObject } from "react";

interface DropdownPosition {
  top: number;
  left: number;
  width: number;
}

export function usePortalDropdown(triggerRef: RefObject<HTMLElement | null>) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<DropdownPosition | null>(null);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  // Recalculate position on open/resize
  useEffect(() => {
    if (!open || !triggerRef.current) {
      setPosition(null);
      return;
    }

    function calc() {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = 250; // max height of the dropdown
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const showAbove = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

      setPosition({
        top: showAbove ? rect.top - dropdownHeight - 6 : rect.bottom + 6,
        left: rect.left,
        width: rect.width
      });
    }

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [open, triggerRef]);

  return { open, toggle, close, position };
}
