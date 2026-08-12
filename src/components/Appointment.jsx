import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitAppointment } from '../utils/googleSheets';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  age: '',
  gender: '',
  service: '',
  doctor: '',
  preferredDate: '',
  preferredTime: '',
  consultationMode: 'online',
  reason: '',
  message: '',
};

const services = [
  'General Consultation (Homeopathy)',
  'Acute & Chronic Diseases',
  'Women Health',
  'Child Health',
  'Skin & Hair',
  'Allergies',
  'Digestive Disorders',
  'Lifestyle Disorders',
  'Preventive Care',
  'Individual Counselling',
  'Student Mental Health',
  'Adolescent Counselling',
  'Stress & Anxiety',
  'Depression',
  'Relationship Counselling',
  'Career Guidance',
  'Self Esteem',
  'Corporate Counselling',
  'Online Counselling',
  'Therapeutic Yoga & Mindfulness',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
];

export default function Appointment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const result = await submitAppointment(form);
    if (result.success) {
      setStatus('success');
      setMessage(result.message);
      setForm(initialForm);
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden" aria-labelledby="appointment-heading">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#069494 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-subtitle mb-3">Book an Online Consultation</p>
          <h2 id="appointment-heading" className="section-title mb-4">
            Book an <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-textMid max-w-xl mx-auto text-base mb-6">
            Fill out our appointment request form and we'll get back to you shortly to confirm your consultation.
          </p>

          {/* Tele & Online Consultations Notice Box */}
          <div className="glass-card p-6 max-w-3xl mx-auto text-left border-l-4 border-l-primary bg-white/90 shadow-soft">
            <h3 className="font-playfair text-lg font-bold text-primary mb-2 flex items-center gap-2">
              💻 Tele &amp; Online Consultations
            </h3>
            <p className="text-sm text-textMid leading-relaxed mb-2">
              At present, all our consultations are offered online, allowing you to access professional care from the comfort of your home. We offer secure and confidential virtual consultations for both psychological counselling and homeopathic care.
            </p>
            <p className="text-xs font-semibold text-secondary-dark">
              ✓ Once we receive your request, we will contact you to confirm your appointment and share the consultation details.
            </p>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-6 md:p-10 relative overflow-hidden"
        >
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-t-3xl" />

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-lightGreen rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-secondary-dark" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-textDark mb-3">Appointment Requested!</h3>
              <p className="text-textMid max-w-md mx-auto mb-8 text-lg">
                {message || "Thank you! We've received your request and will contact you shortly to confirm."}
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn-primary px-8 py-3 rounded-xl"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <>
              {/* Error messages */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl mb-6"
                >
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Row 1 - Name, Phone */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label" htmlFor="appt-fullName">Full Name *</label>
                    <input
                      id="appt-fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="appt-phone">Phone Number *</label>
                    <input
                      id="appt-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2 - Email, Age */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label" htmlFor="appt-email">Email Address *</label>
                    <input
                      id="appt-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="appt-age">Age</label>
                    <input
                      id="appt-age"
                      name="age"
                      type="number"
                      min="1"
                      max="120"
                      placeholder="Your age"
                      value={form.age}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3 - Gender, Service */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label" htmlFor="appt-gender">Gender</label>
                    <select
                      id="appt-gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="appt-service">Service Required *</label>
                    <select
                      id="appt-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4 - Doctor, Date */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label" htmlFor="appt-doctor">Preferred Doctor</label>
                    <select
                      id="appt-doctor"
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select doctor</option>
                      <option value="Dr. Harini Santhiya S">Dr. Harini Santhiya S (Homeopathy)</option>
                      <option value="Vanitha Rani S">Vanitha Rani S (Yoga & Counselling)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="appt-date">Preferred Date *</label>
                    <input
                      id="appt-date"
                      name="preferredDate"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={form.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 5 - Time */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="appt-time">Preferred Time *</label>
                  <select
                    id="appt-time"
                    name="preferredTime"
                    required
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Consultation Mode */}
                <div className="mb-4">
                  <label className="form-label">Consultation Mode *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'online', label: '💻 Online', desc: 'Text' },
                      { value: 'video', label: '📱 Video Call', desc: 'WhatsApp/Zoom' },
                      { value: 'tele', label: '📞 Tele Consultation', desc: 'Phone call' },
                    ].map(({ value, label, desc }) => (
                      <label
                        key={value}
                        htmlFor={`mode-${value}`}
                        className={`relative flex flex-col items-center p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                          form.consultationMode === value
                            ? 'border-primary bg-lightTeal'
                            : 'border-gray-100 bg-white hover:border-primary/30'
                        }`}
                      >
                        <input
                          id={`mode-${value}`}
                          type="radio"
                          name="consultationMode"
                          value={value}
                          checked={form.consultationMode === value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-textDark text-center">{label}</span>
                        <span className="text-xs text-textLight">{desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reason */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="appt-reason">Primary Reason for Consultation</label>
                  <input
                    id="appt-reason"
                    name="reason"
                    type="text"
                    placeholder="e.g., Chronic back pain, Anxiety, Skin allergy..."
                    value={form.reason}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="form-label" htmlFor="appt-message">Additional Message</label>
                  <textarea
                    id="appt-message"
                    name="message"
                    rows={3}
                    placeholder="Any additional details, previous medical history, or specific concerns..."
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  id="appointment-submit"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Booking Your Appointment...
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      Confirm Appointment Request
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-textLight mt-3">
                  🔒 Your information is safe and confidential. We'll contact you within 24 hours.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
