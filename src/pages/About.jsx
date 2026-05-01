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

const About = () => {
  return (
    <div data-testid="about-page" className="relative">
      {/* HEADER */}
      <section className="relative bg-ivory-alt/60 border-b border-brass-gold/25 overflow-hidden">
        <div className="absolute -right-16 -bottom-20 text-saffron/15">
          <MandalaIcon className="w-96 h-96 animate-slow-spin" />
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center relative">
          <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-saffron mb-3">
            हमारे बारे में
          </motion.p>
          <motion.h1 {...fadeUp} className="font-yatra text-5xl sm:text-6xl text-ink-heading leading-tight">
            मंदिर की <span className="text-crimson">पावन कथा</span>
          </motion.h1>
          <motion.p {...fadeUp} className="font-quote text-lg sm:text-xl text-ink-body mt-6 max-w-2xl mx-auto">
            जहाँ माता ने स्वयं अपने भक्तों को दर्शन दिए — एक अद्भुत, चमत्कारी और दिव्य गाथा।
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.maaIdol}
                   alt="माँ बाला सुंदरी" className="w-full h-[520px] object-cover" />
            </div>
            <div className="mt-6 p-6 bg-white border border-brass-gold/30">
              <div className="flex items-center gap-3 text-saffron-dark">
                <LotusIcon className="w-6 h-6" />
                <p className="font-yatra text-2xl">माँ बाला सुंदरी</p>
              </div>
              <p className="font-body text-sm text-ink-muted mt-2">
                स्वयं प्रकट पिंडी रूप — माँ सरस्वती एवं माँ लक्ष्मी का दिव्य आविर्भाव।
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-7 space-y-10">
            <motion.p {...fadeUp} className="drop-cap font-body text-lg text-ink-body leading-[1.95]">
              मा बाला सुंदरी मंदिर का अद्भुत इतिहास, पीढ़ियों से परिवार द्वारा हो रही है पिंडियों की सेवा।
              स्थित प्राचीन मां बाला सुंदरी का इतिहास आस्था, तपस्या और चमत्कारों से जुड़ा हुआ है। यह मन्दिर
              आज भी लाखों श्रद्धालुओं की आस्था का केंद्र बना है, जहां पर माता रानी की पिंडियां स्वयंभू रूप में
              प्रकट हुई थी। चैत्र मास और शारदीय नवरात्रों में बड़ी संख्या में दूर-दूर से श्रद्धालु माथा टेकने के लिए
              पहुंचते हैं।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              कैसे हुई पिंडियां प्रकट: मंदिर के वर्तमान पीठाधीश पंडित सतीश कुमार ने जानकारी देते हुए बताया कि
              उनके पूर्वजों के अनुसार, वर्षों पहले एक ब्राह्मण मनसा जंगल में पशु चराने जाया करता था। एक दिन उसने
              देखा कि एक बाल कन्या वृक्ष के नीचे तपस्या में लीन है। जब वह उसके पास पहुंचा तो वह कन्या अंतर्ध्यान हो गई।
              उसी रात उस ब्राह्मण को स्वप्न में बाल कन्या के रूप में मां बाला सुंदरी के दर्शन हुए। मां ने बताया कि वे
              उसी स्थान पर दो पिंडियों के रूप में विराजमान हैं। जब ब्राह्मण ने यह बात अपने परिजनों को बताई और सब लोग
              बताए स्थान पर पहुंचे, तो सच में वृक्ष के नीचे दो पवित्र पिंडियां मौजूद थीं।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              पीढ़ी दर पीढ़ी की जा रही है सेवा: ब्राह्मण मनसा और उनके परिजनों ने वहीं माता के गुंबद का निर्माण करवाया
              और पूजा अर्चना आरंभ की। तब से लेकर आज तक उनके वंशज पीढ़ी दर पीढ़ी माता की सेवा में लगे हुए हैं।
              स्वर्गीय पंडित मुकंदी ने आजीवन सच्चे मन से निस्वार्थ सेवा की। इसके बाद उन्होंने मंदिर की सेवा का कार्य
              अपने पुत्र पंडित चंद्र मुनि को सौंपा, जिन्होंने पूरी निष्ठा के साथ यह दायित्व निभाया। अब पंडित चंद्र मुनि
              के दोनों पुत्र पीठाधीश सतीश कुमार और ऋषि राज अपने पूर्वजों की परंपरा को आगे बढ़ाते हुए मां बाला सुंदरी की
              पिंडियों की सेवा और पूजा-अर्चना कर रहे हैं।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              !! जय माता दी !!
            </motion.p>

            <Divider />

            <motion.div {...fadeUp}
              className="relative bg-saffron/5 border-l-4 border-saffron px-8 py-7">
              <OmIcon className="w-8 h-8 text-saffron absolute -left-5 top-6 bg-ivory rounded-full p-1 border border-brass-gold/40" />
              <p className="font-quote text-xl text-ink-heading leading-relaxed">
                मंदिर के पीठाधीश पुजारी पंडित सतीश कुमार एवं पीठाधीश पुजारी पंडित ऋषि राज जी पीढ़ी दर पीढ़ी निरंतर रूप से माता की सेवा करते आ रहे हैं और धार्मिक, सामाजिक गतिविधियों में बढ़-चढ़ कर हिस्सा लेते हैं।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-ivory-alt/60 border-y border-brass-gold/25 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <motion.h2 {...fadeUp}
            className="font-yatra text-4xl sm:text-5xl text-ink-heading text-center">
            हमारी <span className="text-saffron-dark">परंपरा</span>
          </motion.h2>
          <Divider />
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {[
              { t: "श्रद्धा", d: "सच्चे मन और भाव से माता की आराधना ही सबसे बड़ी पूजा है।" },
              { t: "सेवा", d: "पीढ़ियों से चली आ रही निष्काम सेवा यहाँ का मूल भाव है।" },
              { t: "आशीर्वाद", d: "यहाँ आकर ध्यान और तप करने वाले हर भक्त को कृपा प्राप्त होती है।" },
            ].map((x, i) => (
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="bg-white border border-brass-gold/40 p-8 text-center hover:-translate-y-1 transition-transform duration-500"
              >
                <LotusIcon className="w-10 h-10 text-saffron mx-auto" />
                <h3 className="font-yatra text-2xl text-ink-heading mt-4">{x.t}</h3>
                <p className="font-body text-ink-body mt-3 leading-relaxed">{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
