import React from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { LINKS } from "../constants";
import { ViewState } from "../types";

const COLORS = {
  ink: "#20241F",
  secondary: "#23302A",
  border: "#3A423A",
  paper: "#F7F2E7",
  muted: "#B9C2B8",
  honey: "#D9A441",
};

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
      <nav
        className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
        style={{ backgroundColor: `${COLORS.ink}E6`, borderColor: COLORS.border }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 lg:px-10 py-3">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
          >
            <div
              className="hidden md:flex transition-colors"
              style={{ color: COLORS.honey }}
            >
              <BookOpen size={22} strokeWidth={2.4} />
            </div>

            <h1
              className="text-lg md:text-xl font-bold tracking-tight font-display"
              style={{ color: COLORS.paper }}
            >
              House of Learning
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative pb-1 text-[14px] font-medium tracking-wide transition-colors duration-200"
                style={{ color: activeView === item.id ? COLORS.honey : COLORS.muted }}
                onMouseEnter={(e) => {
                  if (activeView !== item.id) e.currentTarget.style.color = COLORS.paper;
                }}
                onMouseLeave={(e) => {
                  if (activeView !== item.id) e.currentTarget.style.color = COLORS.muted;
                }}
              >
                {item.label}

                {activeView === item.id && (
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full"
                    style={{ backgroundColor: COLORS.honey }}
                  />
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
              className="hidden lg:flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:brightness-105"
              style={{ backgroundColor: COLORS.honey, color: COLORS.ink }}
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden transition-colors"
              style={{ color: COLORS.paper }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.paper)}
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
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: COLORS.ink }}
      >
        <div className="pt-24 px-8">

          <div className="flex flex-col gap-2">

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between py-3 text-left text-xl font-semibold tracking-tight transition-colors font-display"
                style={{ color: activeView === item.id ? COLORS.honey : COLORS.paper }}
                onMouseEnter={(e) => {
                  if (activeView !== item.id) e.currentTarget.style.color = COLORS.honey;
                }}
                onMouseLeave={(e) => {
                  if (activeView !== item.id) e.currentTarget.style.color = COLORS.paper;
                }}
              >
                {item.label}

                {activeView === item.id && (
                  <span style={{ color: COLORS.honey }}>•</span>
                )}
              </button>
            ))}

            {/* Divider */}
            <div className="my-6 border-t" style={{ borderColor: COLORS.border }} />

            {/* Mobile CTA */}
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg py-3 text-center font-semibold transition hover:brightness-105"
              style={{ backgroundColor: COLORS.honey, color: COLORS.ink }}
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

