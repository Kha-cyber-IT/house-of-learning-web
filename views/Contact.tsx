import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { LINKS } from "../constants";

// Same palette as Home.tsx
const C = {
  mainGreen: "#4CA771",
  cardYellow: "#F9CE69",
  lightBlue: "#D9EFF7",
  lightMint: "#C0E6BA",
  navy: "#123B63",
  blue: "#2A6592",
  ink: "#14213D",
  goldTouch: "#F2B84B",
};

const BRAND_NAME = "HL Tutoring";

// A card colour set: background, text, accent, plus what it turns into on touch / hover (gold).
const mk = (bg: string, fg: string, accent: string, hover = C.cardYellow) => ({
  bg,
  fg,
  accent,
  hover,
  hoverFg: C.ink,
  hoverAccent: C.navy,
});

type CardColor = ReturnType<typeof mk>;

const YELLOW = mk(C.cardYellow, C.ink, C.navy, C.goldTouch);
const MINT = mk(C.lightMint, C.ink, C.navy);
const SKY = mk(C.lightBlue, C.ink, C.blue);
const WHITE = mk("#FFFFFF", C.ink, C.mainGreen);

const CSS = `
  .hl-card {
    background: var(--card-bg);
    color: var(--card-fg);
    transition: background-color .2s ease, color .2s ease, transform .2s ease;
  }
  .hl-card .hl-accent { color: var(--card-accent); transition: color .2s ease; }
  .hl-card .hl-chip { background: var(--card-accent); transition: background-color .2s ease; }
  .hl-card .hl-chip svg { color: var(--card-bg); }
  .hl-card:hover, .hl-card:active {
    background: var(--card-hover);
    color: var(--card-fg-hover);
  }
  .hl-card:hover .hl-accent, .hl-card:active .hl-accent { color: var(--card-accent-hover); }
  .hl-card:hover .hl-chip, .hl-card:active .hl-chip { background: var(--card-accent-hover); }
  .hl-card:hover .hl-chip svg, .hl-card:active .hl-chip svg { color: var(--card-hover); }
  @media (hover: hover) { .hl-card:hover { transform: translateY(-4px); } }
`;

const cardVars = (c: CardColor) =>
  ({
    "--card-bg": c.bg,
    "--card-hover": c.hover,
    "--card-fg": c.fg,
    "--card-fg-hover": c.hoverFg,
    "--card-accent": c.accent,
    "--card-accent-hover": c.hoverAccent,
  }) as React.CSSProperties;

/** One contact tile: icon chip, label, value. A link when it has an href. */
const Tile: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  color: CardColor;
  href?: string;
  external?: boolean;
}> = ({ icon, title, children, color, href, external }) => {
  const cls = "hl-card flex items-center gap-4 rounded-2xl p-4 md:p-6 shadow-md";
  const body = (
    <>
      <span className="hl-chip flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="hl-accent block text-xs font-bold uppercase tracking-wider">{title}</span>
        <span className="block text-sm md:text-base font-semibold leading-snug break-words">
          {children}
        </span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={cls}
      style={cardVars(color)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {body}
    </a>
  ) : (
    <div className={cls} style={cardVars(color)}>
      {body}
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="animate-fade-in w-full px-4 md:px-8 lg:px-12 xl:px-16 py-10 md:py-20"
      style={{ backgroundColor: C.mainGreen }}
    >
      <style>{CSS}</style>

      <div className="max-w-[1760px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="font-semibold uppercase tracking-[0.25em] text-xs md:text-sm"
            style={{ color: C.cardYellow }}
          >
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight font-display text-white">
            Let's Help You <span style={{ color: C.cardYellow }}>Succeed</span>
          </h2>

          <p
            className="mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7 md:leading-8"
            style={{ color: C.lightBlue }}
          >
            Whether you need extra lessons, exam preparation or homework support, our team is ready to
            help you achieve your academic goals.
          </p>
        </div>

        {/* Contact tiles */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <Tile
            icon={<MapPin size={22} />}
            title="Visit Us"
            color={YELLOW}
            href={LINKS.MAPS}
            external
          >
            Eldorado Park Women's Forum, Ext 2, Eldorado Park, Johannesburg
          </Tile>

          <Tile
            icon={<Phone size={22} />}
            title="Phone"
            color={MINT}
            href={`tel:${LINKS.PHONE.replace(/\s/g, "")}`}
          >
            {LINKS.PHONE}
          </Tile>

          <Tile icon={<Mail size={22} />} title="Email" color={SKY} href={`mailto:${LINKS.EMAIL}`}>
            <span className="break-all">{LINKS.EMAIL}</span>
          </Tile>

          <Tile
            icon={<MessageCircle size={22} />}
            title="WhatsApp"
            color={WHITE}
            href={LINKS.WHATSAPP}
            external
          >
            Chat with us instantly
          </Tile>

          <Tile icon={<Clock size={22} />} title="Opening Hours" color={YELLOW}>
            Monday – Friday
            <br />
            08:00 – 17:30
          </Tile>
        </div>

        {/* CTA */}
        <div
          className="mt-8 md:mt-12 rounded-2xl p-6 md:p-10 shadow-lg"
          style={{ backgroundColor: C.navy }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-display text-white">
            Ready to <span style={{ color: C.cardYellow }}>Start Learning?</span>
          </h3>

          <p className="text-sm md:text-base leading-7 max-w-xl" style={{ color: C.lightBlue }}>
            Join {BRAND_NAME} and receive quality tutoring from dedicated educators who are passionate
            about helping learners succeed.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={LINKS.REGISTRATION}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-center shadow-md transition hover:brightness-105 active:scale-[0.98]"
              style={{ backgroundColor: C.cardYellow, color: C.ink }}
            >
              Register Now
            </a>

            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white/40 px-6 py-3.5 rounded-xl font-bold text-center text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 md:mt-12 overflow-hidden rounded-2xl shadow-lg">
          <div
            className="px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            style={{ backgroundColor: C.lightBlue, color: C.ink }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display">Visit Our Learning Centre</h3>
              <p className="mt-1 text-sm md:text-base opacity-80">
                Eldorado Park Women's Forum, Ext 2, Johannesburg
              </p>
            </div>

            <a
              href={LINKS.MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold shadow-md transition hover:brightness-105 active:scale-[0.98]"
              style={{ backgroundColor: C.navy, color: "#FFFFFF" }}
            >
              <ExternalLink size={18} />
              Open in Google Maps
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2134049760775!2d27.911065800000003!3d-26.287181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a7923a201aef%3A0xacf77b9f17cf217d!2sEldorado%20Park%20Women's%20Forum!5e0!3m2!1sen!2sza!4v1785502918316!5m2!1sen!2sza"
            className="block w-full h-[300px] md:h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title={`${BRAND_NAME} Location`}
          />
        </div>
      </div>
    </section>
  );
};
