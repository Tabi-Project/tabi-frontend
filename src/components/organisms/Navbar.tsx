"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";
import { NAV_LINKS } from "@/constants/navigation";
import DonationModal from "../molecules/DonationModal";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* ── Logo ── */}
            <div className="shrink-0 transition-transform hover:scale-105">
              <Logo />
            </div>

            {/* ── Desktop nav links ── */}
            <div
              className="hidden lg:flex items-center gap-8"
              ref={dropdownRef}
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                const hasChildren = link.children && link.children.length > 0;
                const ddOpen = openDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className="relative flex flex-col items-center"
                  >
                    {hasChildren ? (
                      <button
                        onClick={() =>
                          setOpenDropdown(ddOpen ? null : link.label)
                        }
                        className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                        style={{ color: active ? "#71286F" : "#374151" }}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 opacity-70"
                          style={{
                            transform: ddOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                        style={{ color: active ? "#71286F" : "#374151" }}
                      >
                        {link.label}
                      </Link>
                    )}

                    {/* Active underline */}
                    {active && (
                      <span
                        className="absolute rounded-full bg-brand-primary"
                        style={{ bottom: -10, left: 0, right: 0, height: 2 }}
                      />
                    )}

                    {/* Dropdown */}
                    {hasChildren && ddOpen && (
                      <div className="absolute top-full left-4 mt-4 w-48 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50">
                        {link.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── Desktop actions ── */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Register → ai-for-businesses CTA section */}
              <Link
                href="/ai-for-businesses#register"
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color:
                    pathname === "/ai-for-businesses" ? "#71286F" : "#374151"
                }}
              >
                Register
              </Link>
              <Button
                variant="primary"
                size="md"
                className="rounded-full px-8"
                onClick={() => setDonateOpen(true)}
              >
                Donate Now
              </Button>
            </div>

            {/* ── Mobile hamburger ── */}
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

        {/* ── Mobile drawer ── */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-1 shadow-2xl">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active ? "#71286F" : "#374151",
                    background: active ? "#fdf7ff" : "transparent"
                  }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={14} className="opacity-60" />
                  )}
                </Link>
              );
            })}
            <div className="pt-5 flex flex-col gap-3 border-t border-gray-100 mt-4">
              <Link
                href="/ai-for-businesses#register"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </Link>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  setDonateOpen(true);
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Donation modal */}
      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
    </>
  );
};
