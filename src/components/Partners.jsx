import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-12 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-textLight mb-2">Backed By</p>
          <h2 className="text-2xl font-playfair font-bold text-textDark">Our Proud Partners</h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center p-6 bg-gray-50/80 border border-gray-100 rounded-3xl min-w-[260px] hover:shadow-soft transition-all"
          >
            <p className="text-xs text-textMid font-medium mb-3 uppercase tracking-wider">Official Partner</p>
            <h3 className="text-xl font-bold text-primary font-playfair">Jeyam Health Care</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center p-6 bg-gray-50/80 border border-gray-100 rounded-3xl min-w-[260px] hover:shadow-soft transition-all"
          >
            <p className="text-xs text-textMid font-medium mb-3 uppercase tracking-wider">Technology Partner</p>
            <h3 className="text-xl font-bold text-secondary-dark font-playfair">Xpertio Technologies</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
