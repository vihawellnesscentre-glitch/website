import { motion } from 'framer-motion';
import { Heart, ArrowUp, Phone, Mail } from 'lucide-react';

// Custom SVG social icons (lucide-react v0.x doesn't have Instagram/LinkedIn)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Experts', href: '#experts' },
  { name: 'Collaborations', href: '#collaborations' },
  { name: 'Appointment', href: '#appointment' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'General Homeopathy',
  'Women Health',
  'Child Health',
  'Individual Counselling',
  'Stress & Anxiety',
  'Corporate Wellness',
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14 pb-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTop(); }} aria-label="ViHa Wellness Home">
              <img
                src="/viha.png"
                alt="ViHa Wellness Logo"
                className="h-16 w-auto object-contain brightness-110 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your Partner in Mind and Holistic Health. Compassionate care for a healthier mind and body.
            </p>
            {/* Contact quick */}
            <div className="space-y-2">
              <a href="tel:+916382685351" className="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors group">
                <Phone size={14} className="text-secondary group-hover:scale-110 transition-transform" />
                +91 63826 85351
              </a>
              <a href="tel:+917708967532" className="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors group">
                <Phone size={14} className="text-secondary group-hover:scale-110 transition-transform" />
                +91 7708 967 532
              </a>
              <a href="mailto:vihawellnesscentre@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors group">
                <Mail size={14} className="text-secondary group-hover:scale-110 transition-transform" />
                vihawellnesscentre@gmail.com
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Follow us on Instagram"
                id="footer-instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Connect on LinkedIn"
                id="footer-linkedin"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Start Your Journey</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Take the first step towards holistic wellness today. Book your consultation online.
            </p>
            <a
              href="#appointment"
              onClick={(e) => { e.preventDefault(); scrollTo('#appointment'); }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-5 py-2.5 rounded-2xl hover:shadow-teal-glow hover:-translate-y-0.5 transition-all"
              id="footer-book-cta"
            >
              Book Appointment
            </a>
            <div className="mt-5 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400 font-medium mb-1">Clinic Timings</p>
              <p className="text-sm text-white">Mon – Sat: 9 AM – 8 PM</p>
              <p className="text-sm text-gray-300">Sunday: Prior Appointment</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3 border-t border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} ViHa Wellness. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Official Partner: <span className="text-secondary font-semibold">Jeyam Health</span>
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Built by: <span className="text-secondary font-semibold">Xpertio Technologies</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-11 h-11 bg-gradient-primary text-white rounded-2xl shadow-teal-glow flex items-center justify-center z-40"
        aria-label="Scroll to top"
        id="scroll-to-top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
