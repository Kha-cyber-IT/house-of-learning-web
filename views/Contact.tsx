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

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 animate-fade-in"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold uppercase tracking-[0.25em] text-sm">
          Contact Us
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Let's Help You Succeed
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
          Whether you need extra lessons, exam preparation or homework support,
          our team is ready to help you achieve your academic goals.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="flex gap-4">
            <MapPin className="text-primary mt-1" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                Visit Us
              </h3>

              <p className="text-slate-600 leading-7">
                Eldorado Park Women's Forum
                <br />
                Ext 2, Eldorado Park
                <br />
                Johannesburg
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="text-primary mt-1" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                Phone
              </h3>

              <a
                href={`tel:${LINKS.PHONE.replace(/\s/g, "")}`}
                className="text-slate-600 hover:text-primary"
              >
                {LINKS.PHONE}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-primary mt-1" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                Email
              </h3>

              <a
                href={`mailto:${LINKS.EMAIL}`}
                className="text-slate-600 hover:text-primary break-all"
              >
                {LINKS.EMAIL}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle className="text-primary mt-1" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                WhatsApp
              </h3>

              <a
                href={LINKS.WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-primary"
              >
                Chat with us instantly
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="text-primary mt-1" size={22} />
            <div>
              <h3 className="font-bold text-slate-900">
                Opening Hours
              </h3>

              <p className="text-slate-600">
                Monday – Friday
                <br />
                08:00 – 17:30
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-slate-900 text-white p-8 md:p-10">

        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Learning?
        </h3>

        <p className="text-slate-300 leading-7 max-w-xl">
          Join House of Learning and receive quality tutoring from dedicated
          educators who are passionate about helping learners succeed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <a
            href={LINKS.REGISTRATION}
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold text-center transition"
          >
            Register Now
          </a>

          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-center transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

      {/* Google Map */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">

        <div className="bg-white px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b">

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Visit Our Learning Centre
            </h3>

            <p className="text-slate-500 mt-1">
              Eldorado Park Women's Forum, Ext 2, Johannesburg
            </p>

          </div>

          <a
            href={LINKS.MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition"
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
