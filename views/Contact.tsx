import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { LINKS } from "../constants";

const COLORS = {
  ink: '#20241F',
  secondary: '#23302A',
  border: '#3A423A',
  paper: '#F7F2E7',
  muted: '#B9C2B8',
  honey: '#D9A441',
  denim: '#3E6C86',
};

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 animate-fade-in"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <p className="font-semibold uppercase tracking-[0.25em] text-sm" style={{ color: COLORS.honey }}>
          Contact Us
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight font-display" style={{ color: COLORS.paper }}>
          Let's Help You Succeed
        </h2>

        <p className="mt-5 max-w-2xl mx-auto leading-8" style={{ color: COLORS.muted }}>
          Whether you need extra lessons, exam preparation or homework support,
          our team is ready to help you achieve your academic goals.
        </p>
      </div>

      {/* Contact Information */}
      <div
        className="rounded-3xl border shadow-sm p-8 md:p-10"
        style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
      >

        <div className="grid md:grid-cols-2 gap-10">

          <div className="flex gap-4">
            <MapPin style={{ color: COLORS.honey }} className="mt-1" size={22} />
            <div>
              <h3 className="font-bold" style={{ color: COLORS.paper }}>
                Visit Us
              </h3>

              <p className="leading-7" style={{ color: COLORS.muted }}>
                Eldorado Park Women's Forum
                <br />
                Ext 2, Eldorado Park
                <br />
                Johannesburg
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone style={{ color: COLORS.honey }} className="mt-1" size={22} />
            <div>
              <h3 className="font-bold" style={{ color: COLORS.paper }}>
                Phone
              </h3>

              <a
                href={`tel:${LINKS.PHONE.replace(/\s/g, "")}`}
                className="transition-colors"
                style={{ color: COLORS.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                {LINKS.PHONE}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail style={{ color: COLORS.honey }} className="mt-1" size={22} />
            <div>
              <h3 className="font-bold" style={{ color: COLORS.paper }}>
                Email
              </h3>

              <a
                href={`mailto:${LINKS.EMAIL}`}
                className="break-all transition-colors"
                style={{ color: COLORS.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                {LINKS.EMAIL}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle style={{ color: COLORS.honey }} className="mt-1" size={22} />
            <div>
              <h3 className="font-bold" style={{ color: COLORS.paper }}>
                WhatsApp
              </h3>

              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="transition-colors"
                style={{ color: COLORS.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.honey)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                Chat with us instantly
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock style={{ color: COLORS.honey }} className="mt-1" size={22} />
            <div>
              <h3 className="font-bold" style={{ color: COLORS.paper }}>
                Opening Hours
              </h3>

              <p style={{ color: COLORS.muted }}>
                Monday – Friday
                <br />
                08:00 – 17:30
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl p-8 md:p-10" style={{ backgroundColor: COLORS.denim }}>

        <h3 className="text-3xl font-bold mb-4 font-display" style={{ color: COLORS.paper }}>
          Ready to Start Learning?
        </h3>

        <p className="leading-7 max-w-xl" style={{ color: `${COLORS.paper}CC` }}>
          Join House of Learning and receive quality tutoring from dedicated
          educators who are passionate about helping learners succeed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-center transition hover:brightness-105"
            style={{ backgroundColor: COLORS.honey, color: COLORS.ink }}
          >
            Register Now
          </a>

          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-center transition"
            style={{ color: COLORS.paper }}
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

      {/* Google Map */}
      <div className="mt-14 overflow-hidden rounded-3xl border shadow-sm" style={{ borderColor: COLORS.border }}>

        <div
          className="px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b"
          style={{ backgroundColor: COLORS.secondary, borderColor: COLORS.border }}
        >

          <div>

            <h3 className="text-2xl font-bold font-display" style={{ color: COLORS.paper }}>
              Visit Our Learning Centre
            </h3>

            <p className="mt-1" style={{ color: COLORS.muted }}>
              Eldorado Park Women's Forum, Ext 2, Johannesburg
            </p>

          </div>

          <a
            href={LINKS.MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition hover:brightness-105"
            style={{ backgroundColor: COLORS.honey, color: COLORS.ink }}
          >
            <ExternalLink size={18} />
            Open in Google Maps
          </a>

        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2134049760775!2d27.911065800000003!3d-26.287181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a7923a201aef%3A0xacf77b9f17cf217d!2sEldorado%20Park%20Women's%20Forum!5e0!3m2!1sen!2sza!4v1785502918316!5m2!1sen!2sza"
          className="w-full h-[320px] md:h-[450px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="House of Learning Location"
        />

      </div>

    </section>
  );
};

