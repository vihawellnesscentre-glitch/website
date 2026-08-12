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

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Map 1: Tenkasi */}
            <div>
              <div className="p-3 flex justify-between items-center bg-white/50">
                <p className="text-sm font-semibold text-textDark">Tenkasi Clinic</p>
                <a
                  href="https://maps.google.com/maps?q=Tenkasi,%20Tamil%20Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
                >
                  Open Maps <ExternalLink size={12} />
                </a>
              </div>
              <div className="relative w-full" style={{ height: 350 }}>
                <iframe
                  title="Tenkasi Location"
                  src="https://maps.google.com/maps?q=Tenkasi,%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Map 2: Sivakasi */}
            <div>
              <div className="p-3 flex justify-between items-center bg-white/50">
                <p className="text-sm font-semibold text-textDark">Sivakasi Clinic</p>
                <a
                  href="https://maps.google.com/maps?q=Sivakasi,%20Tamil%20Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
                >
                  Open Maps <ExternalLink size={12} />
                </a>
              </div>
              <div className="relative w-full" style={{ height: 350 }}>
                <iframe
                  title="Sivakasi Location"
                  src="https://maps.google.com/maps?q=Sivakasi,%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
