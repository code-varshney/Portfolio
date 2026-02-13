import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Download, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID , 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
    )
    .then(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Let's Connect!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-black" />
                </div>
                <span>sagarvarshney904@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-black" />
                </div>
                <span>+91 7535949755</span>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-black" />
                </div>
                <span>Ghaziabad, India</span>
              </motion.div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/code-varshney"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl"
              >
                <Github size={24} className="text-gray-700" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sagar-varshney-9b44462a4/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl"
              >
                <Linkedin size={24} className="text-blue-600" />
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                download="Sagar_Varshney_Resume.pdf"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl"
              >
                <Download size={24} className="text-primary" />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting || isSent}
              whileHover={{ scale: isSubmitting || isSent ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting || isSent ? 1 : 0.95 }}
              className={`w-full px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold ${
                isSent 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-r from-primary to-secondary text-black'
              }`}
            >
              {isSent ? (
                <>
                  <CheckCircle size={18} />
                  Sent
                </>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
