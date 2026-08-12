import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

// Floating blob component
function Blob({ className, delay = 0, size = 400 }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute opacity-40 blur-3xl ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

// Floating icon
function FloatingIcon({ children, className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Hero illustration SVG
function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Main SVG illustration */}
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
        {/* Background circle */}
        <circle cx="250" cy="250" r="220" fill="url(#heroGrad1)" opacity="0.15" />
        <circle cx="250" cy="250" r="180" fill="url(#heroGrad2)" opacity="0.12" />



        {/* Lotus flower at base */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          {/* Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx={250 + 28 * Math.cos((angle * Math.PI) / 180)}
              cy={362 + 14 * Math.sin((angle * Math.PI) / 180)}
              rx="14"
              ry="6"
              transform={`rotate(${angle}, ${250 + 28 * Math.cos((angle * Math.PI) / 180)}, ${362 + 14 * Math.sin((angle * Math.PI) / 180)})`}
              fill={i % 2 === 0 ? '#07B5B5' : '#7ED957'}
              opacity="0.75"
            />
          ))}
          <circle cx="250" cy="362" r="10" fill="#E0F4F4" />
          <circle cx="250" cy="362" r="5" fill="#069494" opacity="0.6" />
        </motion.g>

        {/* Floating leaves */}
        <FloatingIllustrationLeaf x={80} y={120} color="#7ED957" scale={1.2} delay={0} />
        <FloatingIllustrationLeaf x={380} y={100} color="#069494" scale={1} delay={1.5} />
        <FloatingIllustrationLeaf x={60} y={300} color="#07B5B5" scale={0.8} delay={0.8} />
        <FloatingIllustrationLeaf x={400} y={280} color="#7ED957" scale={1.1} delay={2} />

        {/* Brain icon top */}
        <motion.g
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <circle cx="250" cy="100" r="32" fill="url(#brainBg)" />
          {/* Simplified brain outline */}
          <path
            d="M238 90 Q235 80 242 78 Q248 76 250 82 Q252 76 258 78 Q265 80 262 90 Q268 88 270 95 Q272 102 266 106 Q268 112 263 115 Q258 118 254 114 Q252 118 250 118 Q248 118 246 114 Q242 118 237 115 Q232 112 234 106 Q228 102 230 95 Q232 88 238 90Z"
            fill="#069494" opacity="0.7"
          />
          <path d="M250 82 L250 118" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <path d="M240 95 Q245 100 250 98 Q255 100 260 95" stroke="white" strokeWidth="1.2" fill="none" opacity="0.5" />
        </motion.g>

        {/* Sparkle dots */}
        {[[140, 170], [360, 180], [120, 370], [390, 370], [200, 130], [310, 145]].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x} cy={y} r={4}
            fill={i % 3 === 0 ? '#7ED957' : i % 3 === 1 ? '#07B5B5' : '#069494'}
            opacity={0.6}
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Gradient Defs */}
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#069494" />
            <stop offset="100%" stopColor="#07B5B5" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7ED957" />
            <stop offset="100%" stopColor="#B5F27B" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#069494" />
            <stop offset="100%" stopColor="#07B5B5" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5DEB3" />
            <stop offset="100%" stopColor="#DEBA8C" />
          </linearGradient>
          <radialGradient id="brainBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0F4F4" />
            <stop offset="100%" stopColor="#E9D8FF" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating features cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-2 sm:-left-4 top-1/3 glass-card px-4 py-3 flex items-center gap-3 shadow-glass"
      >
        <div className="w-10 h-10 rounded-xl bg-lightTeal flex items-center justify-center text-xl">🧠</div>
        <div>
          <p className="text-xs text-textLight font-medium">Mental Wellness</p>
          <p className="text-sm font-bold text-primary">Counselling</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-2 sm:-right-4 top-2/3 glass-card px-4 py-3 flex items-center gap-3 shadow-glass"
      >
        <div className="w-10 h-10 rounded-xl bg-lightGreen flex items-center justify-center text-xl">🌿</div>
        <div>
          <p className="text-xs text-textLight font-medium">Homeopathy</p>
          <p className="text-sm font-bold text-secondary-dark">Holistic Care</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper SVG leaf
function FloatingIllustrationLeaf({ x, y, color, scale, delay }) {
  return (
    <motion.g
      animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <ellipse
        cx={x} cy={y}
        rx={18 * scale} ry={9 * scale}
        fill={color}
        opacity="0.65"
        transform={`rotate(-30, ${x}, ${y})`}
      />
      <line
        x1={x - 12 * scale} y1={y + 4 * scale}
        x2={x + 12 * scale} y2={y - 4 * scale}
        stroke="white" strokeWidth="1.2" opacity="0.5"
      />
    </motion.g>
  );
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToAppointment = () => {
    document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20 pb-10"
    >
      {/* Animated Background Blobs */}
      <Blob className="bg-primary/20" style={{ top: '-10%', left: '-10%' }} delay={0} size={600} />
      <Blob className="bg-secondary/20" style={{ bottom: '-15%', right: '-10%' }} delay={3} size={500} />
      <Blob className="bg-accent/15" style={{ top: '40%', left: '40%' }} delay={6} size={350} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #069494 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            {/* Tag */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-primary/15 shadow-soft w-fit"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-slow" />
              <span className="text-xs font-semibold text-primary">Now Accepting Online Consultations</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-textDark leading-tight"
            >
              <span className="gradient-text">ViHa</span>{' '}
              <span className="text-secondary-dark">Wellness</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg sm:text-xl text-primary font-semibold"
            >
              Your Partner in Mind and Holistic Health.<br/>
              Holistic Care for a Healthier Mind and Body
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-textMid text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Professional Homeopathic Care &amp; Psychological Counselling—Compassionate, Personalized, and Accessible Online.
            </motion.p>



            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={scrollToAppointment}
                id="hero-book-consultation"
                className="btn-primary flex items-center justify-center gap-2 text-base"
                aria-label="Book a consultation"
              >
                <Calendar size={18} />
                Book Consultation
              </button>
              <button
                onClick={scrollToAbout}
                id="hero-learn-more"
                className="btn-secondary flex items-center justify-center gap-2 text-base"
                aria-label="Learn more about ViHa Wellness"
              >
                Learn More
                <ChevronDown size={18} />
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap items-center gap-4 text-xs text-textMid"
            >
              {['✅ Certified Professionals', '🔒 100% Confidential', '💻 Online & Offline'].map((badge) => (
                <span key={badge} className="font-medium">{badge}</span>
              ))}
            </motion.div>
          </div>

          {/* Right - Illustration */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            <HeroIllustration />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          onClick={scrollToAbout}
          role="button"
          aria-label="Scroll down"
        >
          <span className="text-xs text-textLight font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
