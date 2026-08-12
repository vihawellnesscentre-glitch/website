import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Laptop, PhoneCall, Video } from 'lucide-react';

const contactCards = [
  {
    id: 'phone',
    icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+91 63826 85351', '+91 7708 967 532'],
    subtext: 'Call or message us directly',
    iconBg: 'bg-primary',
    action: 'tel:+916382685351',
    gradient: 'from-lightTeal to-teal-50',
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    lines: ['vihawellnesscentre@gmail.com'],
    subtext: 'Write to us anytime',
    iconBg: 'bg-secondary-dark',
    action: 'mailto:vihawellnesscentre@gmail.com',
    gradient: 'from-lightGreen to-green-50',
  },
  {
    id: 'timing',
    icon: Clock,
    title: 'Consultation Timings',
    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: By Prior Appointment'],
    subtext: 'All consultations offered online',
    iconBg: 'bg-accent',
    gradient: 'from-teal-50 to-lightTeal',
  },
];

const modes = [
  { icon: Laptop, name: 'Online Consultation', desc: 'Secure web portal & virtual sessions' },
  { icon: PhoneCall, name: 'Tele Consultation', desc: 'Direct phone consultations' },
  { icon: Video, name: 'Video Consultation', desc: 'WhatsApp & Google Meet video calls' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-lightTeal to-lightGreen rounded-full opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Get in Touch</p>
          <h2 id="contact-heading" className="section-title mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-textMid max-w-xl mx-auto text-base">
            Reach out via phone, email, or WhatsApp. We are here to support your health journey.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactCards.map(({ id, icon: Icon, title, lines, subtext, iconBg, gradient, action }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group relative flex flex-col justify-between"
            >
              <div className={`h-1.5 bg-gradient-to-r ${gradient} w-full`} />

              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft`}
                  >
                    <Icon size={22} className="text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-textDark text-base mb-3">{title}</h3>

                  <div className="space-y-1 mb-2">
                    {lines.map((line) => (
                      <p key={line} className="text-textMid text-sm font-medium">
                        {action ? (
                          <a
                            href={action}
                            className="hover:text-primary transition-colors"
                            aria-label={`Contact via ${title}`}
                          >
                            {line}
                          </a>
                        ) : line}
                      </p>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-textLight mt-2">{subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Modes Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="font-playfair text-xl font-bold text-textDark mb-6">
            Available Consultation Modes
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {modes.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="p-4 bg-white/80 rounded-2xl border border-gray-100 shadow-soft">
                <div className="w-10 h-10 bg-lightTeal text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} />
                </div>
                <h4 className="text-sm font-semibold text-textDark mb-1">{name}</h4>
                <p className="text-xs text-textMid">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
