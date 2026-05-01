import React from "react";
import { Link } from "react-router-dom";
import { OmIcon, LotusIcon, MandalaIcon } from "./Motifs";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative bg-[#2A1810] text-ivory/85 mt-24 overflow-hidden">
      <div className="absolute -right-20 -top-20 text-saffron/15">
        <MandalaIcon className="w-72 h-72 animate-slow-spin" />
      </div>
      <div className="absolute -left-16 -bottom-16 text-brass-gold/15">
        <MandalaIcon className="w-64 h-64 animate-slow-spin" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-11 h-11 rounded-full border border-brass-gold/40 bg-saffron text-ivory flex items-center justify-center">
              <OmIcon className="w-6 h-6" />
            </span>
            <h3 className="font-yatra text-2xl text-saffron-light">श्री बाला सुंदरी मंदिर</h3>
          </div>
          <p className="text-sm leading-relaxed text-ivory/65">
            पवित्र पिंडी रूप में स्वयं प्रकट माँ बाला सुंदरी का दिव्य धाम — श्रद्धा, तप और आशीर्वाद का केंद्र।
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass-gold mb-4">दर्शन समय</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-saffron-light" />
              <span>सुबह आरती — 4:15 बजे</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-saffron-light" />
              <span>शाम आरती — 6:00 बजे</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-saffron-light" />
              <span>शाहाबाद, हरियाणा</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-saffron-light" />
              <a href="tel:+919034748407" data-testid="footer-phone" className="hover:text-saffron-light transition-colors">+91 90347 48407</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass-gold mb-4">जाएँ</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "मुख्य"],
              ["/about", "हमारे बारे में"],
              ["/events", "उत्सव"],
              ["/members", "पुजारीगण"],
              ["/contact", "संपर्क"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  data-testid={`footer-link-${label}`}
                  className="hover:text-saffron-light transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-brass-gold/80">
            <LotusIcon className="w-5 h-5" />
            <p className="text-xs tracking-widest uppercase">हर हर महादेव • जय माता दी</p>
          </div>
          <p data-testid="footer-copyright" className="text-xs text-ivory/60">
            © श्री बाला सुंदरी मंदिर • सर्वाधिकार सुरक्षित
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
