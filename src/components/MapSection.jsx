import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden" aria-label="Location map">
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
                <h3 className="font-semibold text-textDark text-sm">ViHa Wellness — Online Clinic</h3>
                <p className="text-xs text-textLight">Serving patients across India &amp; internationally</p>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
              aria-label="Open in Google Maps"
            >
              Open Maps <ExternalLink size={12} />
            </a>
          </div>

          {/* Map iframe placeholder */}
          <div className="relative w-full" style={{ height: 350 }}>
            <iframe
              title="ViHa Wellness Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125295.50640208788!2d78.0980573!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xde92f00db1d085d0!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
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
