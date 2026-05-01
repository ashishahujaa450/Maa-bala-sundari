import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sunrise, Sunset, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { OmIcon, LotusIcon, MandalaIcon, Divider } from "../components/Motifs";
import { templeImages } from "../assets/templeImages";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={templeImages.maaMain}
            alt="माँ बाला सुंदरी"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/65 to-ivory" />
          <div className="absolute inset-0 paper-grain opacity-40" />
        </div>

        <div className="absolute -top-10 -right-10 text-saffron/15 hidden md:block">
          <MandalaIcon className="w-[26rem] h-[26rem] animate-slow-spin" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brass-gold/50 bg-white/60 backdrop-blur text-saffron-dark text-xs sm:text-sm tracking-[0.25em] uppercase"
          >
            <Sparkles size={14} /> शाहाबाद, हरियाणा का पावन धाम
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-yatra text-5xl sm:text-6xl lg:text-7xl text-saffron-dark mt-8 leading-[1.05] tracking-wide"
          >
            प्राचीन बाला सुंदरी मंदिर
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto"
          >
            “जहाँ सच्ची श्रद्धा है, वहाँ माता का वास है — आइए, मातारानी के दर्शन कीजिए।”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/about"
              data-testid="hero-cta-about"
              className="group inline-flex items-center gap-2 bg-saffron text-ivory px-8 py-3.5 border border-saffron hover:bg-ivory hover:text-saffron transition-colors duration-300 shadow-[5px_5px_0px_#C62828] font-medium"
            >
              मंदिर की कथा पढ़ें
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 border border-brass-gold text-ink-heading px-8 py-3.5 hover:bg-ivory-alt transition-colors"
            >
              <MapPin size={16} /> दर्शन हेतु पधारें
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AARTI TIMINGS */}
      <section className="relative -mt-16 sm:-mt-24 z-10 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Sunrise className="w-7 h-7" />, label: "प्रातः आरती", time: "4:15 बजे",
              note: "मंगल आरती • सूर्योदय के साथ माता का स्वागत",
            },
            {
              icon: <Sunset className="w-7 h-7" />, label: "संध्या आरती", time: "6:00 बजे",
              note: "दीप आरती • दिनभर की कृपा का धन्यवाद",
            },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              data-testid={`aarti-card-${i}`}
              className="bg-white/95 backdrop-blur p-8 sm:p-10 border border-brass-gold/40 glow-saffron"
            >
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-saffron/10 text-saffron flex items-center justify-center">
                  {c.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">{c.label}</p>
                  <p className="font-yatra text-3xl sm:text-4xl text-saffron-dark mt-1">{c.time}</p>
                </div>
              </div>
              <p className="font-quote text-ink-body mt-4">{c.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-6 -left-6 text-brass-gold/40">
              <LotusIcon className="w-12 h-12" />
            </div>
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.maaPindi}
                   alt="Devi Shrine" className="w-full h-[480px] object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">मंदिर परिचय</p>
            <h2 className="font-yatra text-4xl sm:text-5xl text-ink-heading leading-snug">
              माँ बाला सुंदरी मंदिर का अद्भुत इतिहास
            </h2>
            <p className="font-body text-lg text-ink-body mt-6 leading-relaxed">
              पीढ़ियों से परिवार द्वारा हो रही है पिंडियों की सेवा। स्थित प्राचीन मां बाला सुंदरी का इतिहास आस्था, तपस्या और चमत्कारों से जुड़ा हुआ है। यह मन्दिर आज भी लाखों श्रद्धालुओं की आस्था का केंद्र बना है, जहां पर माता रानी की पिंडियां स्वयंभू रूप में प्रकट हुई थी। चैत्र मास और शारदीय नवरात्रों में बड़ी संख्या में दूर-दूर से श्रद्धालु माथा टेकने के लिए पहुंचते हैं।
            </p>
            <p className="font-body text-lg text-ink-body mt-6 leading-relaxed">
              कैसे हुई पिंडियां प्रकट: मंदिर के वर्तमान पीठाधीश पंडित सतीश कुमार ने जानकारी देते हुए बताया कि उनके पूर्वजों के अनुसार, वर्षों पहले एक ब्राह्मण मनसा जंगल में पशु चराने जाया करता था। एक दिन उसने देखा कि एक बाल कन्या वृक्ष के नीचे तपस्या में लीन है। जब वह उसके पास पहुंचा तो वह कन्या अंतर्ध्यान हो गई। उसी रात उस ब्राह्मण को स्वप्न में बाल कन्या के रूप में मां बाला सुंदरी के दर्शन हुए। मां ने बताया कि वे उसी स्थान पर दो पिंडियों के रूप में विराजमान हैं।
            </p>
            <p className="font-body text-lg text-ink-body mt-6 leading-relaxed">
              पीढ़ी दर पीढ़ी की जा रही है सेवा: ब्राह्मण मनसा और उनके परिजनों ने वहीं माता के गुंबद का निर्माण करवाया और पूजा अर्चना आरंभ की। तब से लेकर आज तक उनके वंशज पीढ़ी दर पीढ़ी माता की सेवा में लगे हुए हैं। स्वर्गीय पंडित मुकंदी ने आजीवन सच्चे मन से निस्वार्थ सेवा की। अब पंडित चंद्र मुनि के दोनों पुत्र पीठाधीश सतीश कुमार और ऋषि राज अपने पूर्वजों की परंपरा को आगे बढ़ाते हुए मां बाला सुंदरी की पिंडियों की सेवा और पूजा-अर्चना कर रहे हैं।
            </p>
            <p className="font-body text-lg text-ink-heading mt-6 leading-relaxed font-medium">
              !! जय माता दी !!
            </p>
            <Link to="/about" data-testid="intro-read-more"
                  className="group inline-flex items-center gap-2 mt-8 text-saffron-dark font-medium border-b border-saffron-dark/40 pb-1 hover:border-saffron-dark">
              पूरी कथा पढ़ें <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* QUOTE */}
      <section className="bg-ivory-alt/70 border-y border-brass-gold/25 paper-grain relative overflow-hidden">
        <div className="absolute -right-32 -top-32 text-saffron/10">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-24 text-center relative">
          <Divider />
          <motion.blockquote {...fadeUp}
            className="font-quote text-2xl sm:text-3xl lg:text-4xl text-ink-heading leading-relaxed">
            “या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।
            <br />
            <span className="text-saffron-dark">नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥</span>”
          </motion.blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ink-muted">— दुर्गा सप्तशती</p>
          <Divider />
        </div>
      </section>

      {/* PREVIEW: EVENTS / VISIT */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24 grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div {...fadeUp}
          className="bg-white border border-brass-gold/40 p-10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500">
          <div>
            <OmIcon className="w-10 h-10 text-saffron" />
            <h3 className="font-yatra text-3xl text-ink-heading mt-4">आगामी उत्सव</h3>
            <p className="font-body text-ink-body mt-3 leading-relaxed">
              नवरात्रि महोत्सव, विशेष पूजा एवं हवन के विशेष आयोजन। माता के दरबार में पधारें और दिव्य कृपा प्राप्त करें।
            </p>
          </div>
          <Link to="/events" data-testid="home-events-link"
                className="inline-flex items-center gap-2 mt-8 text-saffron-dark font-medium">
            उत्सव देखें <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div {...fadeUp}
          className="bg-saffron text-ivory p-10 flex flex-col justify-between border border-saffron-dark hover:-translate-y-1 transition-transform duration-500">
          <div>
            <LotusIcon className="w-10 h-10" />
            <h3 className="font-yatra text-3xl mt-4">दर्शन एवं संपर्क</h3>
            <p className="font-body mt-3 leading-relaxed text-ivory/90">
              शाहाबाद, हरियाणा में स्थित मंदिर तक पहुँचने हेतु दिशा-निर्देश एवं संपर्क विवरण।
            </p>
          </div>
          <Link to="/contact" data-testid="home-contact-link"
                className="inline-flex items-center gap-2 mt-8 font-medium border-b border-ivory/60 w-fit pb-1">
            संपर्क करें <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
