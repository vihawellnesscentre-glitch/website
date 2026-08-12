import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Krishnaswamy',
    role: 'Working Professional, Chennai',
    text: 'ViHa Wellness completely transformed my approach to health. Dr. Harini\'s homeopathic treatment for my chronic skin condition worked wonderfully when nothing else had. The care and attention I received was exceptional.',
    rating: 5,
    service: 'Homeopathy',
    avatar: 'PK',
    color: '#069494',
    bg: '#E0F4F4',
  },
  {
    id: 2,
    name: 'Rajesh Murugan',
    role: 'IT Professional, Bangalore',
    text: 'Vanitha\'s counselling sessions helped me navigate through one of the most challenging periods of my life. Her empathetic approach and practical guidance made all the difference. I\'m truly grateful.',
    rating: 5,
    service: 'Counselling',
    avatar: 'RM',
    color: '#7ED957',
    bg: '#E9F9EF',
  },
  {
    id: 3,
    name: 'Meena Sundaram',
    role: 'Mother of Two, Coimbatore',
    text: 'My children\'s health has improved so much with ViHa\'s homeopathic treatments. No more frequent colds and infections. The online consultation feature is incredibly convenient for busy parents like me.',
    rating: 5,
    service: 'Child Health',
    avatar: 'MS',
    color: '#07B5B5',
    bg: '#E0F4F4',
  },
  {
    id: 4,
    name: 'Arun Thiruvenkatam',
    role: 'College Student, Madurai',
    text: 'I was struggling with exam anxiety and stress during my final year. Vanitha helped me develop coping strategies that genuinely worked. My performance improved and so did my overall well-being.',
    rating: 5,
    service: 'Student Counselling',
    avatar: 'AT',
    color: '#069494',
    bg: '#E0F4F4',
  },
  {
    id: 5,
    name: 'Lakshmi Rajan',
    role: 'Homemaker, Trichy',
    text: 'ViHa Wellness is a blessing. Dr. Harini\'s treatment for my thyroid issues has been incredible. I also attended a stress management workshop by Vanitha — it was eye-opening and extremely helpful.',
    rating: 5,
    service: 'Women\'s Health',
    avatar: 'LR',
    color: '#7ED957',
    bg: '#E9F9EF',
  },
  {
    id: 6,
    name: 'Sathish Kumar',
    role: 'HR Manager, Hyderabad',
    text: 'We partnered with ViHa Wellness for our corporate wellness program and the response from employees was overwhelmingly positive. The workshops were professional, engaging, and truly impactful.',
    rating: 5,
    service: 'Corporate Wellness',
    avatar: 'SK',
    color: '#07B5B5',
    bg: '#E0F4F4',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  // Show 3 cards at a time on desktop
  const getVisibleIndices = () => {
    const total = testimonials.length;
    return [
      current % total,
      (current + 1) % total,
      (current + 2) % total,
    ];
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-lightTeal/20 to-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#7ED957 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Real Stories</p>
          <h2 id="testimonials-heading" className="section-title mb-4">
            What Our Patients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-textMid max-w-xl mx-auto text-base">
            Real experiences from real people whose lives have been touched by ViHa Wellness.
          </p>
        </motion.div>

        {/* Carousel - Desktop: show 3, Mobile: show 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Desktop grid carousel */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleIndices().map((idx, position) => {
              const t = testimonials[idx];
              return (
                <AnimatePresence key={`${current}-${position}`} mode="wait">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: position * 0.07 }}
                    className="glass-card p-6 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                  >
                    <TestimonialContent t={t} />
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Mobile single carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6"
              >
                <TestimonialContent t={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              id="testimonial-prev"
              className="w-10 h-10 rounded-2xl bg-white border border-gray-100 shadow-soft flex items-center justify-center hover:bg-lightTeal hover:border-primary/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-textMid" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              id="testimonial-next"
              className="w-10 h-10 rounded-2xl bg-white border border-gray-100 shadow-soft flex items-center justify-center hover:bg-lightTeal hover:border-primary/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-textMid" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialContent({ t }) {
  return (
    <>
      {/* Quote icon */}
      <div
        className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center opacity-20"
        style={{ background: t.bg }}
      >
        <Quote size={18} style={{ color: t.color }} />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-textMid text-sm leading-relaxed flex-1 mb-5 italic">"{t.text}"</p>

      {/* Service badge */}
      <span
        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
        style={{ background: t.bg, color: t.color }}
      >
        {t.service}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: t.bg, color: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-textDark">{t.name}</p>
          <p className="text-xs text-textLight">{t.role}</p>
        </div>
      </div>
    </>
  );
}
