import React from "react";
import { motion } from "framer-motion";
import { Calendar, Flame, Sparkles, Music } from "lucide-react";
import { LotusIcon, MandalaIcon, Divider } from "../components/Motifs";
import { templeImages } from "../assets/templeImages";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const events = [
  {
    title: "नवरात्रि महोत्सव",
    when: "नौ दिनों का दिव्य पर्व",
    desc: "माँ के नौ रूपों की विशेष पूजा, अर्चना, हवन एवं भव्य भंडारा। कलश स्थापना से लेकर कन्या पूजन तक का संपूर्ण आयोजन।",
    img: templeImages.maaIdol,
    icon: Flame,
  },
  {
    title: "विशेष पूजा आयोजन",
    when: "मंगलवार एवं शुक्रवार",
    desc: "माता के दरबार में विशेष श्रृंगार, सुंदरकाण्ड पाठ, चालीसा एवं आरती का आयोजन। हर भक्त के लिए प्रसाद की व्यवस्था।",
    img: templeImages.deviShrine,
    icon: Sparkles,
  },
  {
    title: "हवन एवं यज्ञ",
    when: "अमावस्या एवं पूर्णिमा",
    desc: "विशेष हवन एवं यज्ञ का दिव्य आयोजन — परिवार की सुख-समृद्धि, शांति एवं माता की कृपा प्राप्ति हेतु।",
    img: templeImages.hawan,
    icon: Music,
  },
  {
    title: "अष्टमी पूजन",
    when: "प्रत्येक मास की अष्टमी",
    desc: "कन्या पूजन एवं विशेष भंडारे का आयोजन। समस्त भक्तजनों एवं उनके परिवार के लिए माता का प्रसाद।",
    img: templeImages.garbhagriha,
    icon: Calendar,
  },
];

const Events = () => {
  return (
    <div data-testid="events-page">
      <section className="relative bg-ivory-alt/60 border-b border-brass-gold/25 overflow-hidden">
        <div className="absolute -left-16 -top-20 text-brass-gold/15">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 text-center relative">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">उत्सव</motion.p>
          <motion.h1 {...fadeUp} className="font-yatra text-5xl sm:text-6xl text-ink-heading">
            पावन <span className="text-crimson">पर्व एवं आयोजन</span>
          </motion.h1>
          <motion.p {...fadeUp} className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto">
            मंदिर में चैत्र और आश्विन (आसोज) माह में हर वर्ष दो बार मेले का आयोजन किया जाता है। इसके अतिरिक्त, प्रत्येक माह की अष्टमी के दिन जय मां बाला सुंदरी सेवा मंडली द्वारा भव्य कीर्तन का आयोजन किया जाता है।
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.article
                key={e.title}
                data-testid={`event-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group bg-white border border-brass-gold/40 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="overflow-hidden border-b border-brass-gold/30"
                     style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
                  <img src={e.img} alt={e.title}
                       className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-saffron">
                    <Icon size={20} />
                    <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">{e.when}</span>
                  </div>
                  <h3 className="font-yatra text-3xl text-ink-heading mt-3">{e.title}</h3>
                  <p className="font-body text-ink-body mt-3 leading-relaxed">{e.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-saffron text-ivory">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <MandalaIcon className="w-[40rem] h-[40rem] mx-auto animate-slow-spin" />
          </div>
          <div className="relative">
            <LotusIcon className="w-10 h-10 mx-auto" />
            <h2 className="font-yatra text-4xl sm:text-5xl mt-4">माता के दरबार में आपका स्वागत है</h2>
            <p className="font-quote text-lg mt-4 text-ivory/90">
              आगामी आयोजनों में सहभागिता हेतु संपर्क करें — माँ की कृपा अवश्य प्राप्त होगी।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
