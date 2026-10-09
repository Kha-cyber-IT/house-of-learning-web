import React, { useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

// Same palette as Home.tsx
const C = {
  mainGreen: "#4CA771",
  cardYellow: "#F9CE69",
  lightBlue: "#D9EFF7",
  lightMint: "#C0E6BA",
  navy: "#123B63",
  ink: "#14213D",
};

// Change the name here when the site is rebranded
const BRAND_NAME = "House of Learning";

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

  // Lock page scroll while the mobile menu is open, and close it with Escape
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* ================= NAVIGATION ================= */}
      <nav
        className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
        style={{ backgroundColor: `${C.navy}F2`, borderColor: "rgba(255,255,255,0.12)" }}
      >
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-3">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2"
            aria-label={`${BRAND_NAME} – home`}
          >
            <span className="hidden md:flex" style={{ color: C.cardYellow }}>
              <BookOpen size={22} strokeWidth={2.4} />
            </span>

            <span className="text-lg md:text-xl font-bold tracking-tight font-display text-white">
              {BRAND_NAME}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-7">
            {menuItems.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`relative pb-1 text-[13px] lg:text-[15px] font-semibold tracking-wide transition-colors duration-200 ${
                    active ? "text-[#F9CE69]" : "text-[#D9EFF7] hover:text-white"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full"
                      style={{ backgroundColor: C.cardYellow }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center rounded-xl px-5 py-2.5 text-sm font-bold shadow-md transition hover:brightness-105 active:scale-[0.98]"
              style={{ backgroundColor: C.cardYellow, color: C.ink }}
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white transition-colors hover:text-[#F9CE69]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} strokeWidth={2.3} /> : <Menu size={28} strokeWidth={2.3} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: C.navy }}
        aria-hidden={!isOpen}
      >
        <div className="pt-24 px-5 h-full overflow-y-auto pb-10">
          <div className="flex flex-col gap-2.5">
            {menuItems.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-lg font-semibold font-display transition-colors active:bg-[#F9CE69] active:text-[#14213D] ${
                    active
                      ? "bg-[#F9CE69] text-[#14213D]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                  {active && <span aria-hidden="true">•</span>}
                </button>
              );
            })}

            {/* Mobile CTA */}
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="mt-4 rounded-xl py-3.5 text-center font-bold shadow-md transition active:scale-[0.98]"
              style={{ backgroundColor: C.lightMint, color: C.ink }}
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
