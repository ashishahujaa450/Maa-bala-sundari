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
              श्रीमद् देवी भगवती बाला सुंदरी मंदिर में माता की पवित्र पिंडियां स्वयं प्रकट हुई थी।
              मंदिर के मुख्य पुजारी सतीश शर्मा ने बताया कि प्राचीन समय में एक व्यक्ति जंगल में पशु
              चराने के लिए जाया करता था। वहां उसने एक बाल कन्या को वृक्ष के नीचे तप करते देखा।
              उसने उस कन्या के पास जाकर पूछा कि आप इस घने जंगल में क्या कर रही हो। इसपर उस
              कन्या ने कहा कि वह माता बाला सुंदरी है और इस वृक्ष के नीचे बैठकर तप कर रही है।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              माता ने कहा कि जो भक्त सच्चे मन से और श्रद्धा से यहां पर आकर ध्यान और तप करेगा
              उसके सभी दुख दूर हो जाएंगे। ऐसा कहकर माता अंतर्ध्यान हो गई। माता की लीला देखकर वह
              व्यक्ति गांव की तरफ दौड़ा और गांव वालों को पूरी बात बताई। गांव वालों ने वहां पहुंचकर
              देखा कि माता स्वयं ही वहां पिंडी रूप में विराजमान थी। जिसकी गांव वालों ने श्रद्धा
              अनुसार पूजा की और वापस लौट आए।
            </motion.p>

            <Divider />

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              उसी रात को गांव में रहने वाले एक ब्राह्मण के स्वप्न में माता ने दर्शन दिए और बताया कि
              तुमने जिन दो पिंडी के दर्शन किए उनमें माता सरस्वती और लक्ष्मी के रूप विराजमान हैं।
              उस ब्राह्मण ने अगले ही दिन यह बात गांव वालों को बताई और गांव वाले उस स्थान पर
              पूजा करने लगे और उनकी मनोकामना पूरी होने लगी। यह चमत्कार देखकर गांव वालों ने
              मंदिर का निर्माण करवाया।
            </motion.p>

            <motion.div {...fadeUp}
              className="relative bg-saffron/5 border-l-4 border-saffron px-8 py-7">
              <OmIcon className="w-8 h-8 text-saffron absolute -left-5 top-6 bg-ivory rounded-full p-1 border border-brass-gold/40" />
              <p className="font-quote text-xl text-ink-heading leading-relaxed">
                “मंदिर के पुजारी परिवार कई पीढ़ियों से माता की सेवा कर रहे हैं — यही अटूट परंपरा,
                यही श्रद्धा, यही धरोहर है।”
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
