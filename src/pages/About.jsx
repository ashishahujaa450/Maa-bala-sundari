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
              <img src={templeImages.maaMain}
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
              स्वर्गीय महंत मुकंदी लाल ब्राह्मणान ने आजीवन सच्चे मन से निस्वार्थ सेवा की। इसके बाद उन्होंने मंदिर की सेवा का कार्य
              अपने पुत्र पंडित चंद्र मुनि ब्राह्मणान को सौंपा, जिन्होंने पूरी निष्ठा के साथ यह दायित्व निभाया। अब पंडित चंद्र मुनि
              के दोनों पुत्र मुख्य पुजारी सतीश कुमार और ऋषि राज अपने पूर्वजों की परंपरा को आगे बढ़ाते हुए मां बाला सुंदरी की
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
                मंदिर के मुख्य पुजारी पंडित सतीश कुमार एवं मुख्य पुजारी पंडित ऋषि राज जी पीढ़ी दर पीढ़ी निरंतर रूप से माता की सेवा करते आ रहे हैं और धार्मिक, सामाजिक गतिविधियों में बढ़-चढ़ कर हिस्सा लेते हैं।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MATA KI AKHAND JOT */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-10">
            <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading">
              माता की <span className="text-saffron-dark">अखंड ज्योत</span>
            </motion.h2>

            <motion.p {...fadeUp} className="drop-cap font-body text-lg text-ink-body leading-[1.95]">
              माता की अखंड ज्योत मंदिर की आस्था और भक्ति का सबसे पवित्र प्रतीक है। यह दीपक हमेशा प्रज्वलित रहता है, जो माता के आशीर्वाद और सुरक्षा का अनंत प्रतीक है। यह ज्योत पीढ़ियों से निरंतर जल रही है और लाखों भक्तों के जीवन में प्रकाश लाती है।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              इस अखंड ज्योत का महत्व केवल धार्मिक नहीं है, बल्कि यह माता की अनंत कृपा का प्रतीक है। मंदिर के प्रत्येक भक्त को यह विश्वास है कि माता की यह ज्योत उनके घर में सुख, शांति और समृद्धि लाती है। हर रात्रि जब यह दीपक जलाया जाता है, तो यह माता के प्रति हमारी निष्ठा और समर्पण का प्रमाण है।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              मंदिर के मुख्य पुजारी इस अखंड ज्योत की रक्षा और पालन-पोषण करते हैं। प्रत्येक दिन, हर समय, यह दीपक जलता रहता है — कभी न बुझने वाली माता की कृपा का प्रतीक। इसी अखंड ज्योत के माध्यम से माता हर घर, हर हृदय में प्रवेश करती हैं।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              !! माता की ज्योत सदा जागृत रहे !!
            </motion.p>

            <Divider />
          </div>

          <motion.div {...fadeUp} className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.maaJot}
                   alt="माता की अखंड ज्योत" className="w-full h-[520px] object-cover" />
            </div>
            <div className="mt-6 p-6 bg-white border border-brass-gold/30">
              <div className="flex items-center gap-3 text-saffron-dark">
                <LotusIcon className="w-6 h-6" />
                <p className="font-yatra text-2xl">अखंड ज्योत</p>
              </div>
              <p className="font-body text-sm text-ink-muted mt-2">
                माता की अनंत कृपा और शाश्वत आशीर्वाद का चिरंतन प्रतीक।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHIVALAYA */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
                  <img src={templeImages.shivalya || templeImages.maaMain}
                   alt="शिवालय" className="w-full h-[520px] object-cover" />
            </div>
            <div className="mt-6 p-6 bg-white border border-brass-gold/30">
              <div className="flex items-center gap-3 text-saffron-dark">
                <LotusIcon className="w-6 h-6" />
                <p className="font-yatra text-2xl">शिवालय</p>
              </div>
              <p className="font-body text-sm text-ink-muted mt-2">
                शिवालय में माता के साथ-साथ भोलेनाथ की भी आराधना की जाती है। यह स्थान भक्तों के लिए शांति और
                ध्यान का केंद्र रहा है।
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-7 space-y-10">
            <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading">
              शिवालय और पूजा-अर्चना
            </motion.h2>

            <motion.p {...fadeUp} className="drop-cap font-body text-lg text-ink-body leading-[1.95]">
              शिवालय मंदिर परिसर का एक महत्वपूर्ण भाग है जहाँ पर भोलेनाथ की पूजा होती है। यहाँ प्रतिदिन
              सुबह और सायंकाल भक्तों द्वारा आरती और भजन आयोजित होते हैं। यह स्थान श्रद्धालुओं को ध्यान,
              शांति और आत्मिक शुद्धि प्रदान करता है। 
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              श्रद्धालु विशेष अवसरों पर महाआरती और जप-यज्ञ में भाग लेते हैं। मंदिर के पुजारी स्थानीय समुदाय
              के साथ मिलकर त्यौहारों और आयोजन को संचालित करते हैं, जिससे पारंपरिक रीति-रिवाज जीवित रहते हैं।
            </motion.p>

            
             <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
                यह शिवालय मंदिर का बहुत प्राचीन शिवालय है यहाँ पर महंत मुकंदी लाल ब्राह्मणान जी ने बहुत पूजा, अर्चना, जप और तपस्या की है उनके बाद उनके पुत्र चन्द्रमुनि ब्राह्मणान ने इस प्रथा को संचालित किया है
             </motion.p>

             <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
                अब इस पीढ़ी दर पीढ़ी चल रही सेवा की प्रथा को मुख्य पुजारी पंडित सतीश और पंडित ऋषि राज ब्राह्मणान जी संचालित कर रहे है 
             </motion.p>
            <Divider />
          </div>
        </div>
      </section>

      {/* DHYANU BHAKAT */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-10">
            <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading">
              ध्यानु भक्त समुदाय
            </motion.h2>

            <motion.p {...fadeUp} className="drop-cap font-body text-lg text-ink-body leading-[1.95]">
              ध्यानु भक्त वे श्रद्धालु हैं जो निरन्तर ध्यान और भक्ति में रत रहते हैं। इन भक्तों की सेवा से मंदिर की
              सांस्कृतिक और आध्यात्मिक गतिविधियाँ समृद्ध होती हैं।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              यह समुदाय आयोजनों में मार्गदर्शन, उत्सवों में सहयोग और देवस्थान की सेवाओं में सक्रिय योगदान देता है।
              उनकी लगन और समर्पण से ही मंदिर की परंपराएँ पीढ़ी-दर-पीढ़ी जीवित रहती हैं।
            </motion.p>

            <Divider />
          </div>

          <motion.div {...fadeUp} className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.hawan || templeImages.maaMain}
                   alt="ध्यानु भक्त" className="w-full h-[520px] object-cover" />
            </div>
            <div className="mt-6 p-6 bg-white border border-brass-gold/30">
              <div className="flex items-center gap-3 text-saffron-dark">
                <LotusIcon className="w-6 h-6" />
                <p className="font-yatra text-2xl">ध्यानु भक्त</p>
              </div>
              <p className="font-body text-sm text-ink-muted mt-2">
                ध्यानु भक्त समुदाय का समर्पित समूह है जो नियमित भजन, सेवा और आराधना में सक्रिय रूप से भाग लेता है।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MATA KA SINGH */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-10">
            <motion.h2 {...fadeUp} className="font-yatra text-3xl sm:text-4xl text-ink-heading">
              माता का <span className="text-saffron-dark">सिंह</span>
            </motion.h2>

            <motion.p {...fadeUp} className="drop-cap font-body text-lg text-ink-body leading-[1.95]">
              मंदिर के मुख्य द्वार पर माता का सिंह विराजमान है। यह प्रतिमूर्ति संरक्षात्मक और आध्यात्मिक दोनों ही रूपों
              में महत्वपूर्ण मानी जाती है और भक्तों के लिए विशेष श्रद्धा का केंद्र है।
            </motion.p>

            <motion.p {...fadeUp} className="font-body text-lg text-ink-body leading-[1.95]">
              भक्त अक्सर इस स्थान पर आकर शीश नवाते हैं और माता के संरक्षण के लिए प्रार्थना करते हैं।
            </motion.p>

            <Divider />
          </div>

          <motion.div {...fadeUp} className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="overflow-hidden border border-brass-gold/40"
                 style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px" }}>
              <img src={templeImages.singh}
                   alt="माता का सिंह" className="w-full h-[520px] object-cover" />
            </div>
            <div className="mt-6 p-6 bg-white border border-brass-gold/30">
              <div className="flex items-center gap-3 text-saffron-dark">
                <LotusIcon className="w-6 h-6" />
                <p className="font-yatra text-2xl">माता का सिंह</p>
              </div>
              <p className="font-body text-sm text-ink-muted mt-2">
                यह प्रतिमा मंदिर के गर्भगृह की सुरक्षा का प्रतीक है और दर्शन-प्रिय भक्तों के मन में आदर जगाती है।
              </p>
            </div>
          </motion.div>
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
