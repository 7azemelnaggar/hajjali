import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    labelAr: 'الهاتف',
    value: '+20 XXX XX XX XX',
    href: 'tel:+20XXXXXXXXX',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    labelAr: 'واتساب',
    value: '+20 XXX XX XX XX',
    href: 'https://wa.me/20XXXXXXXXX',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    labelAr: 'البريد الإلكتروني',
    value: 'info@hajali.com',
    href: 'mailto:info@hajali.com',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: MapPin,
    label: 'Address',
    labelAr: 'العنوان',
    value: 'Zone Industrielle, ELBehira',
    href: '#',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-navy-600" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-50 rounded-full translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-50 rounded-full -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center">
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
            Get In Touch — تواصل معنا
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
            Let's Start a
            <span className="text-gradient"> Conversation</span>
          </h2>
          <p className="font-arabic text-xl text-gray-400 mb-4">لنبدأ محادثة</p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Whether you're a retailer, wholesaler, or home buyer — we'd love to
            hear from you. Our team responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info + Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, labelAr, value, href, color }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-cream-200
                           hover:border-brand-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${color} group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="font-semibold text-navy-800 text-sm">{label}</div>
                  <div className="text-brand-500 text-xs font-arabic mb-0.5">{labelAr}</div>
                  <div className="text-gray-500 text-sm">{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-cream-200 shadow-sm h-52 bg-cream-100 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3565225.4996062657!2d29.218958749999995!3d29.23339122212074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDEzJzUxLjciTiAzM8KwNDgnMzQuNCJF!5e0!3m2!1sen!2seg!4v1781522413759!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haj Ali Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border border-cream-200 rounded-2xl" />
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-gradient-to-br from-cream-50 to-white rounded-3xl border border-cream-200 p-8 lg:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle size={40} className="text-green-600" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">Message Sent!</h3>
                <p className="font-arabic text-xl text-gray-400 mb-4">تم إرسال رسالتك!</p>
                <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-navy-800 mb-1">Send Us a Message</h3>
                <p className="font-arabic text-gray-400 mb-7">أرسل لنا رسالة</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name / اسمك"
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+213 XX XX XX XX"
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type</label>
                    <select
                      name="type"
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all text-gray-600"
                    >
                      <option>Wholesale / بالجملة</option>
                      <option>Retail / بالتجزئة</option>
                      <option>Product Inquiry / استفسار عن منتج</option>
                      <option>Partnership / شراكة</option>
                      <option>Other / أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your needs... / أخبرنا عن احتياجاتك..."
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
