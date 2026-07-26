import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🌿',
    title: 'Holistic Care',
    description: 'Treating the whole person — mind, body, and spirit for complete wellness.',
    color: 'from-lightGreen to-green-50',
    border: 'border-secondary/20',
    iconBg: 'bg-lightGreen',
  },
  {
    icon: '🧠',
    title: 'Mental Wellness',
    description: 'Professional psychological counselling for emotional and mental health.',
    color: 'from-lightViolet to-purple-50',
    border: 'border-primary/20',
    iconBg: 'bg-lightViolet',
  },
  {
    icon: '💜',
    title: 'Compassionate Experts',
    description: 'Experienced professionals who listen, understand, and truly care.',
    color: 'from-purple-50 to-lightViolet',
    border: 'border-accent/20',
    iconBg: 'bg-purple-50',
  },
  {
    icon: '💻',
    title: 'Online Consultations',
    description: 'Accessible healthcare from the comfort of your home, anytime.',
    color: 'from-blue-50 to-lightViolet',
    border: 'border-primary/15',
    iconBg: 'bg-blue-50',
  },
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeatureStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-16 relative z-10" aria-label="Key features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative group bg-gradient-to-br ${feat.color} backdrop-blur-sm border ${feat.border} rounded-3xl p-6 shadow-soft cursor-default overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-3xl" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className={`w-14 h-14 ${feat.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-soft mb-4`}
              >
                {feat.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-semibold text-textDark text-base mb-2 group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-textMid leading-relaxed">{feat.description}</p>

              {/* Corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
