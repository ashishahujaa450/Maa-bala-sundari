import React from "react";
import { motion } from "framer-motion";
import { OmIcon, MandalaIcon, Divider } from "../components/Motifs";
import { templeImages } from "../assets/templeImages";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const peethadhishMembers = [
  {
    name: "पीठाधीश पंडित सतीश कुमार",
    role: "पीठाधीश पुजारी",
    img: templeImages.satishPriest,
    description: "मंदिर के पीठाधीश पुजारी पंडित सतीश कुमार मंदिर में धार्मिक, सामाजिक कार्यों का आयोजन करते हैं।",
  },
  {
    name: "पीठाधीश पंडित ऋषि राज",
    role: "पीठाधीश पुजारी",
    img: templeImages.rishirajPriest,
    description: "मंदिर के पीठाधीश पुजारी पंडित ऋषि राज जी मंदिर में धार्मिक, सामाजिक कार्यों का आयोजन करते हैं।",
  },
];

const members = [
  { name: "श्रीमती सत्य देवी", role: "Chairman" },
  { name: "पीठाधीश सतीश कुमार", role: "President", img: templeImages.satishPriest },
  { name: "श्रीमती रूबी शर्मा", role: "Vice President" },
  { name: "पीठाधीश ऋषि राज", role: "General Secretary", img: templeImages.rishirajPriest },
  { name: "नित्यम गौर", role: "Joint Secretary" },
  { name: "श्रीमती नीलम रानी", role: "Treasurer" },
];

const placeholderImage = "https://via.placeholder.com/520x520?text=Member+Image";

const Members = () => {
  return (
    <div data-testid="members-page">
      <section className="relative bg-ivory-alt/60 border-b border-brass-gold/25 overflow-hidden">
        <div className="absolute -right-16 -top-20 text-saffron/15">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 text-center relative">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">
            महंत मुकन्दी लाल ब्राह्मणान बाला सुंदरी मंदिर सेवा ट्रस्ट
          </motion.p>
          <motion.h1 {...fadeUp} className="font-yatra text-5xl sm:text-6xl text-ink-heading">
            महंत मुकन्दी लाल ब्राह्मणान बाला सुंदरी मंदिर सेवा ट्रस्ट के सदस्य
          </motion.h1>
          <motion.p {...fadeUp} className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto">
            मंदिर की सेवा में समर्पित सदस्य, जो समाज और धार्मिक जीवन को मजबूत बनाने में साथ हैं।
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading text-center">
          मंदिर के <span className="text-saffron-dark">पीठाधीश पुजारी</span>
        </motion.h2>
        <Divider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {peethadhishMembers.map((member, index) => (
            <motion.div
              key={member.name}
              data-testid={`peethadhish-card-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white border border-brass-gold/40 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-saffron/5">
                <img
                  src={member.img || placeholderImage}
                  alt={`${member.name} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-saffron">{member.role}</span>
                <h3 className="font-yatra text-2xl text-ink-heading mt-4">{member.name}</h3>
                <p className="font-body text-ink-body mt-4 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading text-center">
          सदस्य <span className="text-saffron-dark">सूची</span>
        </motion.h2>
        <Divider />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              data-testid={`member-card-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white border border-brass-gold/40 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-saffron/5">
                <img
                  src={member.img || placeholderImage}
                  alt={`${member.name} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-saffron">{member.role}</span>
                <h3 className="font-yatra text-2xl text-ink-heading mt-4">{member.name}</h3>
                <p className="font-body text-ink-body mt-4 leading-relaxed">
                  सदस्य महोदय/महोदया मंदिर के आयोजन, सेवा और परंपरा को आगे बढ़ाने में सक्रिय रूप से सहयोग करते हैं।
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
