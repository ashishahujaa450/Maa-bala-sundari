import React from "react";
import { motion } from "framer-motion";
import { OmIcon, LotusIcon, MandalaIcon, Divider } from "../components/Motifs";
import { templeImages } from "../assets/templeImages";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const current = [
  {
    name: "पंडित सतीश शर्मा",
    role: "मुख्य पुजारी",
    note: "मंदिर की सेवा एवं सभी प्रमुख अनुष्ठानों का संचालन। माँ बाला सुंदरी के विशेष भक्त एवं विद्वान।",
    img: templeImages.hawan,
  },
  {
    name: "पंडित ऋषिराज शर्मा",
    role: "सहायक पुजारी",
    note: "वैदिक मंत्रोच्चार, हवन एवं विशेष पूजा अनुष्ठानों के संचालन हेतु समर्पित।",
    img: templeImages.garbhagriha,
  },
];

const legacy = [
  {
    name: "पंडित मुकंदी लाल",
    role: "पूज्य पूर्वज",
    note: "मंदिर परंपरा के आधार स्तंभ — जिनसे यह पवित्र सेवा प्रवाह प्रारम्भ हुआ।",
  },
  {
    name: "श्री चंद्रमणि शर्मा",
    role: "पूज्य पूर्वज",
    note: "अपने जीवन भर माँ की निष्काम सेवा करने वाले समर्पित पुजारी।",
  },
];

const Members = () => {
  return (
    <div data-testid="members-page">
      <section className="relative bg-ivory-alt/60 border-b border-brass-gold/25 overflow-hidden">
        <div className="absolute -right-16 -top-20 text-saffron/15">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 text-center relative">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">
            पुजारीगण एवं परंपरा
          </motion.p>
          <motion.h1 {...fadeUp} className="font-yatra text-5xl sm:text-6xl text-ink-heading">
            मंदिर के <span className="text-crimson">सेवक एवं पुजारी</span>
          </motion.h1>
          <motion.p {...fadeUp} className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto">
            कई पीढ़ियों से माता बाला सुंदरी की निष्काम सेवा करने वाला पुजारी परिवार।
          </motion.p>
        </div>
      </section>

      {/* CURRENT PUJARIS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading text-center">
          वर्तमान <span className="text-saffron-dark">पुजारीगण</span>
        </motion.h2>
        <Divider />

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          {current.map((p, i) => (
            <motion.div
              key={p.name}
              data-testid={`pujari-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-white border border-brass-gold/40 overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div
                className="relative h-56 flex items-center justify-center bg-gradient-to-b from-saffron/10 via-ivory-alt to-ivory border-b border-brass-gold/30 overflow-hidden"
                style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}
              >
                <div className="absolute inset-0 opacity-25 text-saffron">
                  <MandalaIcon className="w-72 h-72 mx-auto animate-slow-spin" />
                </div>
                <div className="relative w-24 h-24 rounded-full bg-saffron text-ivory flex items-center justify-center shadow-[0_12px_40px_-10px_rgba(230,81,0,0.55)] border-2 border-brass-gold/60">
                  <OmIcon className="w-12 h-12" />
                </div>
              </div>
              <div className="p-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-saffron">{p.role}</span>
                <h3 className="font-yatra text-3xl text-ink-heading mt-2">{p.name}</h3>
                <p className="font-body text-ink-body mt-4 leading-relaxed">{p.note}</p>
                <div className="flex items-center justify-center gap-2 mt-5 text-brass-gold">
                  <span className="h-px w-10 bg-brass-gold/50" />
                  <OmIcon className="w-5 h-5" />
                  <span className="h-px w-10 bg-brass-gold/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEGACY */}
      <section className="bg-[#2A1810] text-ivory relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 text-saffron/10">
          <MandalaIcon className="w-[28rem] h-[28rem] animate-slow-spin" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-brass-gold text-center mb-3">
            पीढ़ी-दर-पीढ़ी सेवा
          </motion.p>
          <motion.h2 {...fadeUp} className="font-yatra text-4xl sm:text-5xl text-saffron-light text-center">
            पूज्य <span className="text-ivory">परंपरा एवं विरासत</span>
          </motion.h2>
          <motion.p {...fadeUp} className="font-quote text-lg text-ivory/75 mt-6 max-w-2xl mx-auto text-center">
            जिनके चरणों में आज भी हम नतमस्तक हैं — वे दिव्य आत्माएँ जिनसे यह सेवा परंपरा निरंतर प्रवाहित है।
          </motion.p>

          <motion.div {...fadeUp} className="mt-14 max-w-md mx-auto">
            <div className="overflow-hidden border-2 border-brass-gold/40 bg-black/20"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.ancestorMurti}
                   alt="पूज्य पूर्वज" className="w-full h-[420px] object-cover" />
            </div>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-brass-gold mt-4">
              पूज्य पूर्वजों की प्रतिमा
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {legacy.map((p, i) => (
              <motion.div
                key={p.name}
                data-testid={`legacy-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="border border-brass-gold/30 bg-white/5 backdrop-blur p-8 hover:bg-white/10 transition-colors"
              >
                <LotusIcon className="w-9 h-9 text-saffron-light" />
                <span className="block text-xs uppercase tracking-[0.3em] text-brass-gold mt-4">{p.role}</span>
                <h3 className="font-yatra text-3xl text-ivory mt-2">{p.name}</h3>
                <p className="font-body text-ivory/75 mt-3 leading-relaxed">{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
