import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Target, Heart, Shield, Stethoscope, Leaf, BookOpen } from 'lucide-react';

const missionItems = [
  { icon: Heart, text: 'To provide personalized and ethical healthcare.' },
  { icon: Shield, text: 'To support individuals in achieving mental and physical well-being.' },
  { icon: Leaf, text: 'To promote preventive healthcare and emotional wellness.' },
  { icon: BookOpen, text: 'To empower people with knowledge, compassion, and holistic care.' },
];

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-lightTeal via-white to-lightGreen relative overflow-hidden" aria-label="Vision and Mission">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#069494 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Our Purpose</p>
          <h2 className="section-title">
            Vision &amp; <span className="gradient-text">Mission</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative group glass-card p-8 lg:p-10 overflow-hidden"
          >
            {/* Teal gradient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-teal-glow">
              <Eye size={28} className="text-white" />
            </div>

            <h3 className="font-playfair text-2xl font-bold text-textDark mb-4">Our Vision</h3>

            <p className="text-textMid leading-relaxed text-base mb-6">
              To become a trusted wellness destination that{' '}
              <strong className="text-primary">empowers individuals and families</strong> through compassionate
              homeopathic care and professional psychological support, promoting healthier minds, healthier bodies, and healthier lives.
            </p>

            {/* Decorative quote mark */}
            <div className="text-7xl font-playfair text-primary/10 absolute bottom-4 right-6 leading-none">"</div>

            {/* Corner dot pattern */}
            <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full" />
              ))}
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="relative group glass-card p-8 lg:p-10 overflow-hidden"
          >
            {/* Green gradient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-lightGreen/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-dark to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-green-glow">
              <Target size={28} className="text-white" />
            </div>

            <h3 className="font-playfair text-2xl font-bold text-textDark mb-4">Our Mission</h3>

            <ul className="space-y-4">
              {missionItems.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-lightGreen rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-secondary-dark" />
                  </div>
                  <span className="text-textMid text-sm leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Corner dot pattern */}
            <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-secondary-dark rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
