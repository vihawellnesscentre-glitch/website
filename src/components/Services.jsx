import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Stethoscope, Baby, User, Flower2, Zap, Apple, Activity, Shield,
  Brain, GraduationCap, Users, AlertCircle, Heart, Briefcase, Star,
  Monitor, Leaf, Wind,
} from 'lucide-react';

const homeopathyServices = [
  { icon: Stethoscope, title: 'General Consultation', desc: 'Comprehensive health assessment and personalized treatment plans.' },
  { icon: Activity, title: 'Acute & Chronic Diseases', desc: 'Expert care for both short-term and long-standing health conditions.' },
  { icon: User, title: 'Women Health', desc: 'Holistic care for hormonal, reproductive, and women-specific concerns.' },
  { icon: Baby, title: 'Child Health', desc: 'Gentle, natural remedies for infants, toddlers, and growing children.' },
  { icon: Flower2, title: 'Skin & Hair', desc: 'Natural treatments for eczema, psoriasis, hair fall, and more.' },
  { icon: Wind, title: 'Allergies', desc: 'Effective homeopathic solutions for seasonal and chronic allergies.' },
  { icon: Apple, title: 'Digestive Disorders', desc: 'Relief from IBS, acidity, constipation, and digestive ailments.' },
  { icon: Zap, title: 'Lifestyle Disorders', desc: 'Managing diabetes, hypertension, obesity through holistic care.' },
  { icon: Shield, title: 'Preventive Care', desc: 'Proactive treatments to strengthen immunity and prevent illness.' },
  { icon: Leaf, title: 'Holistic Wellness', desc: 'Comprehensive wellness programs for overall health optimization.' },
];

const counsellingServices = [
  { icon: Brain, title: 'Individual Counselling', desc: 'One-on-one sessions to explore thoughts, feelings, and personal goals.' },
  { icon: GraduationCap, title: 'Student Mental Health', desc: 'Support for academic stress, performance anxiety, and transitions.' },
  { icon: Users, title: 'Adolescent Counselling', desc: 'Specialized guidance for teens navigating growth and change.' },
  { icon: AlertCircle, title: 'Stress & Anxiety', desc: 'Evidence-based techniques to manage stress and anxiety effectively.' },
  { icon: Heart, title: 'Depression', desc: 'Compassionate support and therapeutic intervention for depression.' },
  { icon: Users, title: 'Relationship Counselling', desc: 'Strengthening communication and resolving conflicts in relationships.' },
  { icon: Star, title: 'Career Guidance', desc: 'Clarity and direction for career decisions and professional growth.' },
  { icon: User, title: 'Self Esteem', desc: 'Building confidence, self-worth, and a positive self-image.' },
  { icon: Briefcase, title: 'Corporate Counselling', desc: 'Workplace mental health programs for organizational wellness.' },
  { icon: Monitor, title: 'Online Counselling', desc: 'Confidential therapy sessions accessible from anywhere, anytime.' },
];

const yogaServices = [
  { icon: Heart, title: 'Therapeutic Yoga', desc: 'Customized yoga practices to support healing and physical well-being.' },
  { icon: Wind, title: 'Yoga for Stress Management', desc: 'Techniques to reduce stress and promote relaxation.' },
  { icon: Flower2, title: 'Mindfulness & Meditation', desc: 'Practices to cultivate present-moment awareness and mental clarity.' },
  { icon: Activity, title: 'Breathwork (Pranayama)', desc: 'Breathing exercises to enhance vital energy and emotional balance.' },
  { icon: Users, title: 'Corporate Yoga & Wellness', desc: 'Tailored sessions for employee health and workplace well-being.' },
  { icon: Star, title: 'Yoga Classes', desc: 'Regular classes for holistic fitness and mind-body harmony.' },
];

const tabs = ['Homeopathy', 'Counselling', 'Yoga'];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ServiceCard({ service, index, categoryIndex }) {
  const Icon = service.icon;
  const styles = [
    { bg: 'bg-lightGreen', text: 'text-secondary-dark', hoverBg: 'from-lightGreen/50', borderBg: 'from-secondary to-secondary-light' },
    { bg: 'bg-lightViolet', text: 'text-primary', hoverBg: 'from-lightViolet/50', borderBg: 'from-primary to-accent' },
    { bg: 'bg-orange-50', text: 'text-orange-500', hoverBg: 'from-orange-50/50', borderBg: 'from-orange-400 to-orange-500' }
  ];
  const s = styles[categoryIndex] || styles[0];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group glass-card p-5 cursor-default relative overflow-hidden"
    >
      {/* Hover gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl bg-gradient-to-br ${s.hoverBg} to-transparent`} />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-soft relative ${s.bg}`}
      >
        <Icon size={20} className={s.text} />
      </motion.div>

      <h3 className="font-semibold text-textDark text-sm mb-1.5 group-hover:text-primary transition-colors relative">
        {service.title}
      </h3>
      <p className="text-xs text-textMid leading-relaxed relative">{service.desc}</p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-3xl bg-gradient-to-r ${s.borderBg}`} />
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const currentServices = activeTab === 0 ? homeopathyServices : activeTab === 1 ? counsellingServices : yogaServices;

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lightViolet rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-lightGreen rounded-full opacity-40 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle mb-3">What We Offer</p>
          <h2 id="services-heading" className="section-title mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-textMid max-w-2xl mx-auto text-base">
            Comprehensive wellness services designed to nurture your mind, body, and spirit through holistic and evidence-informed care.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1" role="tablist">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                id={`services-tab-${tab.toLowerCase()}`}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === i ? 'text-white shadow-soft' : 'text-textMid hover:text-textDark'
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl ${
                      i === 0 ? 'bg-gradient-to-r from-secondary-dark to-secondary' 
                      : i === 1 ? 'bg-gradient-primary' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-400'
                    }`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {i === 0 ? '🌿' : i === 1 ? '🧠' : '🧘‍♀️'} {tab}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            role="tabpanel"
          >
            {currentServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                categoryIndex={activeTab}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#appointment"
            onClick={(e) => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary inline-flex items-center gap-2"
            id="services-book-cta"
          >
            Book a {tabs[activeTab]} Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
