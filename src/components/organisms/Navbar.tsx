// "use client";

// import { useState, useRef, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "../atoms/Button";
// import { Logo } from "../atoms/Logo";
// import { NAV_LINKS } from "@/constants/navigation";
// import DonationModal from "../molecules/DonationModal";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [donateOpen, setDonateOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // ─── Measure Navbar Height ───
//   const navRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (navRef.current) {
//         document.documentElement.style.setProperty(
//           "--nav-height",
//           `${navRef.current.offsetHeight}px`
//         );
//       }
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // ─── Click Outside to Close Dropdowns ───
//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   const isActive = (href: string) => {
//     if (href.startsWith("#")) return false;
//     return pathname === href || pathname.startsWith(href + "/");
//   };

//   return (
//     <>
//       <nav
//         ref={navRef}
//         className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
//       >
//         <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16">
//           <div className="flex justify-between items-center h-20">
//             <div className="shrink-0 transition-transform hover:scale-105">
//               <Logo />
//             </div>

//             {/* ── DESKTOP NAVIGATION ── */}
//             <div
//               className="hidden lg:flex items-center gap-8"
//               ref={dropdownRef}
//             >
//               {NAV_LINKS.map((link) => {
//                 const active = isActive(link.href);
//                 const hasChildren = link.children && link.children.length > 0;
//                 const ddOpen = openDropdown === link.label;

//                 return (
//                   <div
//                     key={link.label}
//                     className="relative flex flex-col items-center"
//                   >
//                     {hasChildren ? (
//                       <button
//                         onClick={() =>
//                           setOpenDropdown(ddOpen ? null : link.label)
//                         }
//                         className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
//                         style={{ color: active ? "#71286F" : "#374151" }}
//                       >
//                         {link.label}
//                         <ChevronDown
//                           size={14}
//                           className="transition-transform duration-200 opacity-70"
//                           style={{
//                             transform: ddOpen
//                               ? "rotate(180deg)"
//                               : "rotate(0deg)"
//                           }}
//                         />
//                       </button>
//                     ) : (
//                       <Link
//                         href={link.href}
//                         className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
//                         style={{ color: active ? "#71286F" : "#374151" }}
//                       >
//                         {link.label}
//                       </Link>
//                     )}

//                     {active && (
//                       <span
//                         className="absolute rounded-full bg-brand-primary"
//                         style={{ bottom: -10, left: 0, right: 0, height: 2 }}
//                       />
//                     )}

//                     {hasChildren && ddOpen && (
//                       <div className="absolute top-full left-4 mt-4 w-48 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50">
//                         {link.children!.map((child) => (
//                           <Link
//                             key={child.label}
//                             href={child.href}
//                             onClick={() => setOpenDropdown(null)}
//                             className="block px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* ── DESKTOP BUTTONS ── */}
//             <div className="hidden lg:flex items-center gap-6">
//               {/* <Link
//                 href="/ai-for-businesses#register"
//                 className="text-sm font-medium transition-colors duration-200"
//                 style={{
//                   color:
//                     pathname === "/ai-for-businesses" ? "#71286F" : "#374151"
//                 }}
//               >
//                 Register
//               </Link> */}
//               <Button
//                 variant="primary"
//                 size="md"
//                 className="rounded-full px-8"
//                 onClick={() => setDonateOpen(true)}
//               >
//                 Donate Now
//               </Button>
//             </div>

//             {/* ── MOBILE MENU ICON ── */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-2 text-brand-primary focus:outline-none"
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ── MOBILE NAVIGATION (UPGRADED) ── */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//               className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-1 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
//             >
//               {NAV_LINKS.map((link) => {
//                 const active = isActive(link.href);
//                 const hasChildren = link.children && link.children.length > 0;
//                 const isDropdownOpen = openDropdown === link.label;

//                 return (
//                   <div key={link.label} className="flex flex-col">
//                     {hasChildren ? (
//                       <button
//                         onClick={() =>
//                           setOpenDropdown(isDropdownOpen ? null : link.label)
//                         }
//                         className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors duration-200 w-full text-left"
//                         style={{
//                           color:
//                             active || isDropdownOpen ? "#71286F" : "#374151",
//                           background:
//                             active || isDropdownOpen ? "#fdf7ff" : "transparent"
//                         }}
//                       >
//                         {link.label}
//                         <ChevronDown
//                           size={14}
//                           className="transition-transform duration-200 opacity-60"
//                           style={{
//                             transform: isDropdownOpen
//                               ? "rotate(180deg)"
//                               : "rotate(0deg)"
//                           }}
//                         />
//                       </button>
//                     ) : (
//                       <Link
//                         href={link.href}
//                         onClick={() => setIsOpen(false)}
//                         className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors duration-200"
//                         style={{
//                           color: active ? "#71286F" : "#374151",
//                           background: active ? "#fdf7ff" : "transparent"
//                         }}
//                       >
//                         {link.label}
//                       </Link>
//                     )}

//                     {/* ── ANIMATED SUB-MENUS ── */}
//                     <AnimatePresence initial={false}>
//                       {hasChildren && isDropdownOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.25, ease: "easeInOut" }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pl-6 mt-1 flex flex-col space-y-1 bg-gray-50/50 rounded-lg py-2">
//                             {link.children!.map((child) => (
//                               <Link
//                                 key={child.label}
//                                 href={child.href}
//                                 onClick={() => {
//                                   setIsOpen(false);
//                                   setOpenDropdown(null);
//                                 }}
//                                 className="block px-4 py-2.5 text-sm text-[#374151] hover:text-brand-primary transition-colors duration-150"
//                               >
//                                 {child.label}
//                               </Link>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}

//               <div className="pt-5 flex flex-col gap-3 border-t border-gray-100 mt-4">
//                 {/* <Link
//                   href="/ai-for-businesses#register"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Button variant="outline" className="w-full">
//                     Register
//                   </Button>
//                 </Link> */}
//                 <Button
//                   variant="primary"
//                   className="w-full"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setDonateOpen(true);
//                   }}
//                 >
//                   Donate Now
//                 </Button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
//     </>
//   );
// };

"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl"; // 👈 new
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";
import { NAV_LINKS } from "@/constants/navigation";
import DonationModal from "../molecules/DonationModal";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations(); // 👈 new
  const [isOpen, setIsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--nav-height",
          `${navRef.current.offsetHeight}px`
        );
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-350 mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 transition-transform hover:scale-105">
              <Logo />
            </div>

            {/* DESKTOP NAVIGATION */}
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
                         {t(link.label)} {/* 👈 translated */}
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
                        {t(link.label)} {/* 👈 translated */}
                      </Link>
                    )}

                    {active && (
                      <span
                        className="absolute rounded-full bg-brand-primary"
                        style={{ bottom: -10, left: 0, right: 0, height: 2 }}
                      />
                    )}

                    {hasChildren && ddOpen && (
                      <div className="absolute top-full left-4 mt-4 w-48 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-50">
                        {link.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3 text-sm text-[#374151] hover:bg-[#fdf7ff] hover:text-brand-primary transition-colors duration-150"
                          >
                            {t(child.label)} {/* 👈 translated */}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <LanguageSwitcher /> {/* 👈 new */}
              <Button
                variant="primary"
                size="md"
                className="rounded-full px-8"
                onClick={() => setDonateOpen(true)}
              >
                {t("Navigation.donateNow")} {/* 👈 translated */}
              </Button>
            </div>

            {/* MOBILE MENU ICON */}
            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitcher /> {/* 👈 new (mobile) */}
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

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-1 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                const hasChildren = link.children && link.children.length > 0;
                const isDropdownOpen = openDropdown === link.label;

                return (
                  <div key={link.label} className="flex flex-col">
                    {hasChildren ? (
                      <button
                        onClick={() =>
                          setOpenDropdown(isDropdownOpen ? null : link.label)
                        }
                        className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors duration-200 w-full text-left"
                        style={{
                          color:
                            active || isDropdownOpen ? "#71286F" : "#374151",
                          background:
                            active || isDropdownOpen ? "#fdf7ff" : "transparent"
                        }}
                      >
                        {t(link.label)} {/* 👈 translated */}
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 opacity-60"
                          style={{
                            transform: isDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors duration-200"
                        style={{
                          color: active ? "#71286F" : "#374151",
                          background: active ? "#fdf7ff" : "transparent"
                        }}
                      >
                        {t(link.label)} {/* 👈 translated */}
                      </Link>
                    )}

                    <AnimatePresence initial={false}>
                      {hasChildren && isDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 mt-1 flex flex-col space-y-1 bg-gray-50/50 rounded-lg py-2">
                            {link.children!.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="block px-4 py-2.5 text-sm text-[#374151] hover:text-brand-primary transition-colors duration-150"
                              >
                                {t(child.label)} {/* 👈 translated */}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-5 flex flex-col gap-3 border-t border-gray-100 mt-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    setDonateOpen(true);
                  }}
                >
                  {t("Navigation.donateNow")} {/* 👈 translated */}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
    </>
  );
};