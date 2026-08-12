import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const experts = [
  {
    id: 'dr-harini',
    name: 'Dr. Harini Santhiya S',
    role: 'Homeopathic Physician',
    initials: 'HS',
    image: '/dr-harini.jpeg',
    accentColor: '#7ED957',
    bgLight: '#E9F9EF',
    borderColor: 'border-secondary/25',
    tagBg: 'bg-lightGreen',
    tagText: 'text-secondary-dark',
    btnClass: 'btn-green',
    quote: 'I believe that every individual deserves healthcare that is personalized, compassionate, and focused on long-term well-being rather than just symptom relief.',
    description: [
      'My approach to homeopathy considers the whole person—their physical health, emotional well-being, lifestyle, and unique needs—to create individualized treatment plans that support the body\'s natural healing process.',
      'I am committed to helping patients of all ages achieve better health through safe, holistic, and patient-centered care.',
    ],
    services: [
      'General Homeopathic Consultation',
      'Acute & Chronic Disease Management',
      'Women\'s Health',
      'Child Health',
      'Skin & Hair Conditions',
      'Allergy Management',
      'Digestive Disorders',
      'Lifestyle Disorders',
      'Preventive Healthcare',
      'Holistic Wellness Consultation',
    ],
  },
  {
    id: 'vanitha-rani',
    name: 'Vanitha Rani S',
    role: 'Counselling Psychologist',
    initials: 'VR',
    image: '/ms-vanitha.jpeg',
    accentColor: '#069494',
    bgLight: '#E0F4F4',
    borderColor: 'border-primary/25',
    tagBg: 'bg-lightTeal',
    tagText: 'text-primary',
    btnClass: 'btn-primary',
    quote: 'I believe that healing begins when people feel genuinely heard, understood, and supported.',
    description: [
      'My counselling approach is rooted in empathy, collaboration, and evidence-based psychological practices. I provide a safe, confidential, and non-judgmental space where individuals can explore their thoughts, emotions, and challenges while developing resilience, confidence, and emotional well-being.',
      'My goal is to help individuals not only overcome life\'s difficulties but also discover their strengths, improve self-awareness, and build meaningful, fulfilling lives. I also integrate Yoga and mindfulness practices to promote a powerful mind-body connection for holistic healing.',
    ],
    services: [
      'Individual Counselling',
      'Adolescent Counselling',
      'Student Mental Health',
      'Stress & Anxiety Management',
      'Depression Support',
      'Relationship Counselling',
      'Self-esteem & Confidence Building',
      'Career Guidance',
      'Workplace & Corporate Counselling',
      'Employee Assistance Program (EAP)',
      'Emotional Well-being Coaching',
      'Therapeutic Yoga & Mindfulness',
      'Online Counselling',
    ],
  },
];

function ExpertCard({ expert, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group glass-card border ${expert.borderColor} overflow-hidden relative flex flex-col`}
    >
      {/* Top gradient banner */}
      <div
        className="h-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${expert.bgLight}, white)` }}
      >
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/30 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full" />
        <div
          className={`absolute top-3 left-4 ${expert.tagBg} ${expert.tagText} text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {expert.role}
        </div>
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12 relative z-10 mb-3">
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <div
            className="w-24 h-24 rounded-full p-0.5 shadow-glass"
            style={{ background: `linear-gradient(135deg, ${expert.accentColor}, ${expert.accentColor}80)` }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {expert.image ? (
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-2xl font-bold font-playfair"
                  style={{ background: `${expert.accentColor}18`, color: expert.accentColor }}
                >
                  {expert.initials}
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-1 space-y-4 text-center">
        {/* Name */}
        <div>
          <h3 className="font-playfair text-xl font-bold text-textDark">{expert.name}</h3>
          <p
            className="text-sm font-semibold mt-0.5"
            style={{ color: expert.accentColor }}
          >
            {expert.role}
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <div
          className="rounded-2xl p-4 text-left relative"
          style={{ background: expert.bgLight }}
        >
          <span className="text-4xl font-playfair leading-none opacity-20 absolute top-1 left-3">"</span>
          <p className="text-sm text-textMid italic leading-relaxed pl-4">{expert.quote}</p>
        </div>

        {/* Description */}
        <div className="text-left space-y-2">
          {expert.description.map((para, i) => (
            <p key={i} className="text-xs text-textMid leading-relaxed">{para}</p>
          ))}
        </div>

        {/* Services */}
        <div className="text-left">
          <p className="text-xs font-semibold text-textDark mb-2 uppercase tracking-wide">Areas of Practice</p>
          <ul className="space-y-1.5">
            {expert.services.map((svc) => (
              <li key={svc} className="flex items-start gap-2">
                <CheckCircle2
                  size={13}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: expert.accentColor }}
                />
                <span className="text-xs text-textMid">{svc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href="#appointment"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`${expert.btnClass} flex items-center justify-center gap-2 w-full text-sm mt-auto`}
          id={`expert-cta-${expert.id}`}
        >
          Book a Consultation
        </a>
      </div>
    </motion.div>
  );
}

export default function Experts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experts"
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-lightTeal/20 relative overflow-hidden"
      aria-labelledby="experts-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#7ED957 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Our Team</p>
          <h2 id="experts-heading" className="section-title mb-4">
            Meet Our <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-textMid max-w-xl mx-auto text-base">
            Dedicated professionals who bring expertise, empathy, and commitment to every consultation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {experts.map((expert, i) => (
            <ExpertCard key={expert.id} expert={expert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
