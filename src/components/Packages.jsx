import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const packages = [
  {
    id: 'basic',
    name: 'Basic Wellness Session',
    subtitle: 'Single Event / Workshop',
    price: 'Custom',
    priceNote: 'per session',
    duration: '1-Hour Webinar or Workshop',
    icon: '🌱',
    popular: false,
    color: 'from-lightGreen to-green-50',
    border: 'border-secondary/20',
    btnClass: 'btn-green',
    features: [
      '1-hour interactive webinar or physical workshop',
      'Introduction to mental health & holistic wellness',
      'Practical stress management techniques',
      'Interactive Q&A session with experts',
      'Digital wellness resources & handouts',
    ],
    accent: '#7ED957',
  },
  {
    id: 'monthly',
    name: 'Monthly Wellness Program',
    subtitle: 'Ongoing Regular Support',
    price: 'Custom',
    priceNote: 'per month',
    duration: '2–4 Sessions per Month',
    icon: '💜',
    popular: true,
    color: 'from-primary to-accent',
    border: 'border-primary/30',
    btnClass: 'btn-primary',
    features: [
      '2–4 structured sessions per month',
      'Covers mental health, stress resilience & preventive care',
      'Targeted sessions for students, employees, or staff',
      'Progress tracking and feedback collection',
      'Direct contact channel for participant queries',
      'Customized session topics based on needs',
    ],
    accent: '#069494',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Wellness Partnership',
    subtitle: 'Customized Institution Support',
    price: 'Custom',
    priceNote: 'solution',
    duration: 'Customized Ongoing Support',
    icon: '🏆',
    popular: false,
    color: 'from-lightTeal to-teal-50',
    border: 'border-accent/25',
    btnClass: 'btn-secondary',
    features: [
      'Customized ongoing support for schools & organizations',
      'Full integration of counselling & wellness awareness',
      'Parent, teacher, and employee assistance support',
      'Dedicated program manager & expert counsellors',
      'Regular awareness workshops & 1-on-1 consultations',
      'Long-term wellness strategy development',
    ],
    accent: '#07B5B5',
  },
];

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="packages-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-lightTeal/10 to-white" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#069494 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Flexible Plans</p>
          <h2 id="packages-heading" className="section-title mb-4">
            Collaboration <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-textMid max-w-xl mx-auto text-base">
            Choose a collaboration model that fits your school, college, or organization.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-3xl overflow-hidden shadow-soft border ${pkg.border} ${
                pkg.popular ? 'shadow-glass-lg scale-105 z-10' : ''
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-soft">
                  <Star size={10} className="fill-amber-400 text-amber-400" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.popular ? `bg-gradient-to-br ${pkg.color}` : `bg-gradient-to-br ${pkg.color}`} p-6 pb-8 text-center relative overflow-hidden`}>
                {pkg.popular && (
                  <>
                    <div className="absolute inset-0 bg-gradient-primary opacity-100" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  </>
                )}
                <div className="relative">
                  <div className="text-4xl mb-3">{pkg.icon}</div>
                  <h3 className={`font-playfair text-xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-textDark'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs font-medium ${pkg.popular ? 'text-white/80' : 'text-textMid'}`}>
                    {pkg.subtitle}
                  </p>
                  <div className={`mt-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    pkg.popular ? 'bg-white/20 text-white' : 'bg-white text-textDark'
                  }`}>
                    <Zap size={10} />
                    {pkg.duration}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 bg-white p-6 space-y-3">
                <ul className="space-y-2.5">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${pkg.accent}22` }}
                      >
                        <Check size={11} style={{ color: pkg.accent }} className="font-bold" />
                      </div>
                      <span className="text-sm text-textMid">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-white px-6 pb-6">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`${pkg.btnClass} flex items-center justify-center gap-2 w-full text-sm`}
                  id={`package-cta-${pkg.id}`}
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
