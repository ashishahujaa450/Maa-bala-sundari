import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { OmIcon, MandalaIcon, Divider } from "../components/Motifs";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Contact = () => {
  return (
    <div data-testid="contact-page">

      {/* HEADER */}
      <section className="relative bg-ivory-alt/60 border-b border-brass-gold/25 overflow-hidden">
        <div className="absolute -left-16 -top-16 text-brass-gold/15">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 text-center relative">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">संपर्क</motion.p>
          <motion.h1 {...fadeUp} className="font-yatra text-5xl sm:text-6xl text-ink-heading">
            दर्शन हेतु <span className="text-crimson">पधारें</span>
          </motion.h1>
          <motion.p {...fadeUp} className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto">
            हम आपका मातारानी के दरबार में हार्दिक स्वागत करते हैं।
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="bg-white border border-brass-gold/40 p-8">
              <div className="flex items-center gap-3 mb-6">
                <OmIcon className="w-7 h-7 text-saffron" />
                <h3 className="font-yatra text-2xl text-ink-heading">मंदिर विवरण</h3>
              </div>

              <ul className="space-y-5">
                {[
                  { icon: MapPin, label: "पता", value: "श्री बाला सुंदरी मंदिर, शाहाबाद, हरियाणा (भारत)" },
                  { icon: Phone, label: "दूरभाष", value: "+91 90347 48407", href: "tel:+919034748407" },
                  { icon: Mail, label: "ईमेल", value: "info@balasundarimandir.in" },
                  { icon: Clock, label: "आरती समय", value: "प्रातः 6:00 बजे • संध्या 7:00 बजे" },
                ].map((item, i) => {
                  const I = item.icon;
                  return (
                    <li key={i} className="flex gap-4">
                      <span className="w-11 h-11 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                        <I size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} data-testid={`contact-info-${item.label}`} className="font-body text-base text-ink-heading mt-1 block hover:text-saffron transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-body text-base text-ink-heading mt-1">{item.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6">
            <div className="border border-brass-gold/40 overflow-hidden bg-white">
              <div className="px-6 py-4 border-b border-brass-gold/30 flex items-center gap-3">
                <MapPin size={18} className="text-saffron" />
                <p className="font-yatra text-lg text-ink-heading">मानचित्र</p>
              </div>
              <iframe
                title="Mandir Location"
                data-testid="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.6165625211656!2d76.86681237534964!3d30.162376774864377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a357707bd77%3A0x38d9e27f0bdc2210!2sDevi%20Bhagwati%20Bala%20Sundari%20Temple!5e0!3m2!1sen!2sin!4v1777112321176!5m2!1sen!2sin"
                width="100%" height="320" loading="lazy" allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
