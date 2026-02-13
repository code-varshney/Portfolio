import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

function Education() {
  const subjects = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Web Development',
    'Object-Oriented Programming',
    'Computer Networks'
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
            >
              <GraduationCap size={32} className="text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology</h3>
              <p className="text-xl text-primary font-semibold">Computer Science & Engineering</p>
              <p className="text-gray-600">ABESIT, Ghaziabad</p>
              <p className="text-gray-500">2023 - 2027</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-primary" />
              <h4 className="text-lg font-semibold text-gray-800">Core Subjects</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-primary">▹</span>
                  {subject}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
