import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Heart, Users, Shield, Sparkles } from 'lucide-react';

const values = [
  { icon: Leaf, text: 'Holistic & Natural', color: 'text-secondary-dark', bg: 'bg-lightGreen' },
  { icon: Heart, text: 'Compassionate Care', color: 'text-primary', bg: 'bg-lightViolet' },
  { icon: Users, text: 'Patient-Centered', color: 'text-accent-dark', bg: 'bg-purple-50' },
  { icon: Shield, text: 'Ethical Practice', color: 'text-secondary-dark', bg: 'bg-lightGreen' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-lightViolet rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-lightGreen rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual Image Cards */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative w-full max-w-lg mx-auto"
          >
            {/* Outer glass container */}
            <div className="glass-card p-6 md:p-8 relative overflow-hidden shadow-glass-lg border border-white/60">
              {/* Background subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightViolet/60 via-white to-lightGreen/50 opacity-80" />

              <div className="relative z-10 space-y-6">
                {/* Brand Logo Display Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-soft text-center border border-white"
                >
                  <img
                    src="/viha.png"
                    alt="ViHa Wellness"
                    className="h-28 md:h-32 mx-auto object-contain drop-shadow-md"
                  />
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Mind &amp; Body Holistic Health
                    </p>
                  </div>
                </motion.div>

                {/* Feature highlight cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-soft text-center"
                  >
                    <div className="w-12 h-12 bg-lightViolet rounded-xl flex items-center justify-center mx-auto mb-2 text-2xl">
                      🧠
                    </div>
                    <h4 className="font-semibold text-textDark text-sm">Psychological Counselling</h4>
                    <p className="text-xs text-textMid mt-1">Compassionate &amp; Confidential</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-soft text-center"
                  >
                    <div className="w-12 h-12 bg-lightGreen rounded-xl flex items-center justify-center mx-auto mb-2 text-2xl">
                      🌿
                    </div>
                    <h4 className="font-semibold text-textDark text-sm">Homeopathic Care</h4>
                    <p className="text-xs text-textMid mt-1">Personalized &amp; Natural</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-2 glass-card px-4 py-3 flex items-center gap-3 shadow-glass border border-white"
            >
              <div className="w-9 h-9 rounded-xl bg-lightGreen flex items-center justify-center text-lg">✨</div>
              <div>
                <p className="text-xs font-bold text-textDark">Evidence-Informed</p>
                <p className="text-[11px] text-textLight">Personalized Care</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div>
              <p className="section-subtitle mb-3">About Us</p>
              <h2 id="about-heading" className="section-title">
                Welcome to{' '}
                <span className="gradient-text">ViHa Wellness</span>
              </h2>
            </div>

            <p className="text-textMid leading-relaxed text-base">
              At ViHa Wellness, we believe that true wellness is achieved when the mind and body are cared for together.
              We are committed to providing <strong className="text-textDark">compassionate, personalized, and ethical healthcare</strong> through
              professional homeopathic treatment and psychological counselling.
            </p>

            <p className="text-textMid leading-relaxed text-base">
              Our goal is to create a safe and supportive space where individuals can improve their physical, emotional,
              and mental well-being through holistic and evidence-informed care.
            </p>

            <p className="text-textMid leading-relaxed text-base">
              Whether you're seeking holistic healthcare, emotional support, or guidance through life's challenges,
              ViHa Wellness is here to support your journey toward better health and well-being.
            </p>

            {/* Value tags */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {values.map(({ icon: Icon, text, color, bg }) => (
                <motion.div
                  key={text}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-3 p-3 ${bg} rounded-2xl`}
                >
                  <div className={`w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-soft`}>
                    <Icon size={16} className={color} />
                  </div>
                  <span className="text-sm font-semibold text-textDark">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#appointment"
              onClick={(e) => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 mt-2"
              id="about-cta"
            >
              Start Your Wellness Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
