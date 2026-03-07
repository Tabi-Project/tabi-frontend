"use client";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { NavLink } from "../atoms/Typography";
import { Logo } from "../atoms/Logo";
import { NAV_LINKS } from "@/constants/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 transition-transform hover:scale-105">
            <Logo />
          </div>

          {/* Desktop Navigation - Data Driven */}
          <div className="hidden lg:flex items-center space-x-8 font-regular">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
                {link.children && (
                  <ChevronDown size={14} className="mt-0.5 opacity-70" />
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-sm font-normal text-black hover:text-brand-primary transition-colors">
              Register
            </button>
            <Button variant="primary" size="md" className="rounded-full px-8">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink key={`mobile-${link.label}`} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-4 border-t border-gray-50">
            <Button variant="outline" className="w-full">
              Register
            </Button>
            <Button variant="primary" className="w-full">
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
