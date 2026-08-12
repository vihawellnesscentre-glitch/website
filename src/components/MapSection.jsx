import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden" aria-label="Location maps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden"
        >
          {/* Map Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-textDark text-sm">Our Clinic Locations</h3>
                <p className="text-xs text-textLight">Visit us in Tenkasi &amp; Sivakasi</p>
              </div>
            </div>
          </div>

          <div className="relative w-full" style={{ height: 350 }}>
            <iframe
              title="ViHa Wellness Location"
              src="https://maps.google.com/maps?q=Tenkasi,%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 glass-card px-4 py-2 flex items-center gap-2 text-sm font-medium text-primary shadow-glass"
            >
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Available Online Nationwide
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
