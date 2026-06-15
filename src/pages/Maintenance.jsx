import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-ivory-alt text-ink-heading flex items-center justify-center px-6 py-16">
      <motion.div
        {...fadeUp}
        className="max-w-3xl w-full bg-white/95 border border-brass-gold/40 shadow-2xl rounded-3xl p-10 text-center"
      >
        <p className="text-saffron-dark uppercase tracking-[0.3em] text-sm mb-4">अस्थायी सूचना</p>
        <h1 className="font-yatra text-4xl sm:text-5xl text-ink-heading leading-tight">
          यह वेबसाइट अभी कुछ समय के लिए बंद है,
          <span className="block text-saffron-dark">हम जल्द ही अपनी सुविद्याए नियमित रूप से शुरू करेंगे </span>
        </h1>
        <p className="font-body text-base text-ink-body mt-8 leading-relaxed">
          आपसे क्षमा चाहते हैं। हमारी सेवा जल्द ही वापस आएगी। तब तक कृपया थोड़ी देर बाद पुनः प्रयास करें।
        </p>
      </motion.div>
    </div>
  );
};

export default Maintenance;
