import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { School, GraduationCap, Building2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const partners = [
  { icon: School, label: 'Schools & Colleges', color: 'bg-lightGreen', iconColor: 'text-secondary-dark', desc: 'Student mental health, parent & teacher awareness' },
  { icon: Building2, label: 'Organizations & Corporates', color: 'bg-lightViolet', iconColor: 'text-primary', desc: 'Employee assistance & corporate wellness sessions' },
  { icon: Users, label: 'Communities', color: 'bg-blue-50', iconColor: 'text-blue-600', desc: 'Mental health awareness & preventive care' },
];

const programs = [
  'School & College Wellness Programs',
  'Corporate Wellness & Employee Well-being Sessions',
  'Mental Health Awareness Workshops',
  'Stress Management & Resilience Training',
  'Parent & Teacher Awareness Programs',
  'Career Guidance & Life Skills Workshops',
  'Holistic Health & Preventive Care Sessions',
  'Customized Wellness Programs',
];

export default function Collaboration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="collaborations" className="py-20 lg:py-28 bg-gradient-to-b from-lightViolet/30 to-white relative overflow-hidden" aria-labelledby="collab-heading">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#6C4AB6 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Partnerships</p>
          <h2 id="collab-heading" className="section-title mb-4">
            Collaborate with <span className="gradient-text">ViHa Wellness</span>
          </h2>
          <p className="text-textMid max-w-2xl mx-auto text-base">
            We collaborate with schools, colleges, organizations, and communities to promote mental and holistic well-being.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Partner types */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h3 className="font-playfair text-2xl font-bold text-textDark mb-6">
              Who We Collaborate With
            </h3>
            {partners.map(({ icon: Icon, label, color, iconColor, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass-card p-5 group cursor-default"
              >
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-textDark text-sm">{label}</p>
                  <p className="text-xs text-textMid mt-0.5">{desc}</p>
                </div>
                <ArrowRight size={16} className="text-textLight group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}

            {/* Tagline Card */}
            <div className="p-6 bg-lightGreen/60 border border-secondary/30 rounded-3xl mt-6">
              <p className="text-sm font-semibold text-secondary-dark text-center italic">
                "Let's build healthier minds, healthier workplaces, and healthier communities—together."
              </p>
            </div>
          </motion.div>

          {/* Right - Programs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6"
          >
            {/* Programs glass card */}
            <div className="glass-card p-8 relative overflow-hidden">
              <h3 className="font-playfair text-2xl font-bold text-textDark mb-6">
                Our Wellness Offerings
              </h3>

              <div className="space-y-3">
                {programs.map((prog, i) => (
                  <motion.div
                    key={prog}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-white/80 border border-white rounded-2xl shadow-soft"
                  >
                    <CheckCircle2 size={18} className="text-secondary-dark flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-textDark">{prog}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #6C4AB6 0%, #B48CFF 60%, #7ED957 100%)' }}
            >
              <h3 className="font-playfair text-2xl font-bold mb-2 relative">
                Partner With ViHa Wellness
              </h3>
              <p className="text-white/85 text-sm mb-5 relative leading-relaxed">
                Connect with us to design a custom wellness program tailored for your school, college, or workplace.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-2xl hover:shadow-lg transition-all relative"
                id="partner-cta"
              >
                Partner With Us
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
