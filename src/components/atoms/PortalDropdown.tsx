"use client";

import { createPortal } from "react-dom";

interface PortalDropdownProps {
  open: boolean;
  position: { top: number; left: number; width: number } | null;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function PortalDropdown({
  open,
  position,
  onClose,
  children,
  className = ""
}: PortalDropdownProps) {
  if (!open || !position) return null;

  return createPortal(
    <>
      {/* Invisible backdrop to catch outside clicks */}
      <div
        className="fixed inset-0 z-9998"
        onClick={onClose}
        onTouchEnd={onClose}
      />
      <div
        className={`fixed z-9999 bg-white border border-gray-100 rounded-2xl shadow-xl py-1 max-h-56 overflow-y-auto ${className}`}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${position.width}px`
        }}
      >
        {children}
      </div>
    </>,
    document.body
  );
}
