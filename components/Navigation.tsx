import React from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeView: ViewState;
  setActiveView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  setIsOpen,
  activeView,
  setActiveView,
}) => {
  const handleNavClick = (viewId: string) => {
    setIsOpen(false);
    setActiveView(viewId as ViewState);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "stories", label: "Stories" },
    { id: "tutors", label: "Our Tutors" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "locations", label: "Contact" },
  ];

  return (
    <>
      {/* ================= NAVIGATION ================= */}
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 lg:px-10 py-3">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
          >
            <div className="hidden md:flex text-black transition-colors group-hover:text-[#b48c36]">
              <BookOpen size={22} strokeWidth={2.4} />
            </div>

            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-black">
              HOUSE OF LEARNING
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative pb-1 text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                  activeView === item.id
                    ? "text-[#b48c36]"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {item.label}

                {activeView === item.id && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[#b48c36]" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Desktop CTA */}
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black transition hover:text-[#b48c36]"
            >
              {isOpen ? (
                <X size={28} strokeWidth={2.3} />
              ) : (
                <Menu size={28} strokeWidth={2.3} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="pt-24 px-8">

          <div className="flex flex-col gap-2">

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between py-3 text-left text-xl font-semibold tracking-tight transition-colors ${
                  activeView === item.id
                    ? "text-[#b48c36]"
                    : "text-black hover:text-[#b48c36]"
                }`}
              >
                {item.label}

                {activeView === item.id && (
                  <span className="text-[#b48c36]">•</span>
                )}
              </button>
            ))}

            {/* Divider */}
            <div className="my-6 border-t border-neutral-200" />

            {/* Mobile CTA */}
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-black py-3 text-center text-white font-semibold transition hover:bg-neutral-800"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
