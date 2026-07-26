import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Heart, Leaf, Award, BookOpen, Monitor, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: User,
    title: 'Personalized Care',
    description: 'Tailored healthcare plans designed specifically for your unique physical and emotional needs.',
    color: 'text-primary',
    bg: 'bg-lightViolet',
    accent: '#6C4AB6',
  },
  {
    icon: Heart,
    title: 'Compassionate & Confidential Consultations',
    description: 'A safe, empathetic, and confidential environment where you feel heard, understood, and supported.',
    color: 'text-secondary-dark',
    bg: 'bg-lightGreen',
    accent: '#7ED957',
  },
  {
    icon: Leaf,
    title: 'Holistic Approach to Wellness',
    description: 'Integrating homeopathic care and psychological counselling to treat both mind and body together.',
    color: 'text-primary',
    bg: 'bg-lightViolet',
    accent: '#6C4AB6',
  },
  {
    icon: Award,
    title: 'Ethical & Professional Practice',
    description: 'Committed to upholding the highest standards of professional integrity and patient-centered care.',
    color: 'text-secondary-dark',
    bg: 'bg-lightGreen',
    accent: '#7ED957',
  },
  {
    icon: BookOpen,
    title: 'Evidence-Informed Care',
    description: 'Combining proven therapeutic techniques and holistic principles for effective long-term healing.',
    color: 'text-primary',
    bg: 'bg-lightViolet',
    accent: '#6C4AB6',
  },
  {
    icon: Monitor,
    title: 'Convenient Online Consultations',
    description: 'Access expert consultation from the comfort of your home via secure virtual platforms.',
    color: 'text-secondary-dark',
    bg: 'bg-lightGreen',
    accent: '#7ED957',
  },
  {
    icon: DollarSign,
    title: 'Professional Care at Reasonable Fees',
    description: 'High-quality, compassionate healthcare made accessible with fair and affordable pricing.',
    color: 'text-primary',
    bg: 'bg-lightViolet',
    accent: '#6C4AB6',
  },
];

export default function ChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="choose-heading">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-lightViolet to-lightGreen rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="section-subtitle mb-3">Our Difference</p>
          <h2 id="choose-heading" className="section-title mb-4">
            Why Choose <span className="gradient-text">ViHa Wellness?</span>
          </h2>
          <p className="text-textMid max-w-2xl mx-auto text-base">
            We're dedicated to providing ethical, compassionate, and personalized care for your complete health and peace of mind.
          </p>
        </motion.div>

        {/* Zigzag Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isRight = i % 2 === 1;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-6 md:gap-10 ${isRight ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: isRight ? -5 : 5 }}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 ${reason.bg} rounded-3xl flex items-center justify-center shadow-soft relative`}
                >
                  <Icon size={28} className={reason.color} />
                  {/* Number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-soft"
                    style={{ background: reason.accent }}
                  >
                    {i + 1}
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex-1 glass-card p-5 md:p-6 relative overflow-hidden group"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
                    style={{ background: `linear-gradient(135deg, ${reason.accent}08, transparent)` }}
                  />
                  <h3 className="font-semibold text-textDark text-base md:text-lg mb-2">{reason.title}</h3>
                  <p className="text-textMid text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#appointment"
            onClick={(e) => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary inline-flex items-center gap-2"
            id="choose-us-cta"
          >
            Experience the ViHa Difference
          </a>
        </motion.div>
      </div>
    </section>
  );
}
