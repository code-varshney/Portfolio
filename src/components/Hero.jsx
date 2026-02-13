import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Building innovative solutions with code...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) index = 0;
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sagar Varshney <span className="text-4xl">🛡️</span>
          </motion.h1>
          
          <p className="text-gray-600 mb-2">(He/Him)</p>
          
          <motion.p
            className="text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            B.Tech CSE Student | Infosys Springboard Intern | Java Developer | AI & Systems Projects | Currently Training with NVIDIA
          </motion.p>

          <motion.div
            className="h-8 mb-6 text-primary font-mono text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/Resume.pdf"
              download="Sagar_Varshney_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition-colors"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com/code-varshney"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sagar-varshney-9b44462a4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <Linkedin size={24} className="text-blue-600" />
            </motion.a>
            <motion.a
              href="mailto:sagarvarshney904@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <Mail size={24} className="text-red-500" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
            />
            <div className="relative w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <p className="text-sm text-gray-600">Upload your photo here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={32} className="text-primary" />
      </motion.div>
    </section>
  );
}

export default Hero;
