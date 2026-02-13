import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Infosys Springboard',
      logo: '/images/springboard-logo.png',
      period: '2024 - Present',
      description: 'Working on enterprise Java applications using Spring Boot framework. Implementing Agile workflows and collaborating with cross-functional teams.',
      achievements: [
        'Developed scalable REST APIs using Spring Boot',
        'Implemented microservices architecture',
        'Participated in Agile sprints and code reviews'
      ]
    },
    {
      title: 'AI & Advanced Computing Training',
      company: 'NVIDIA Deep Learning Institute',
      logo: '/images/nvidia.png',
      period: '2024',
      description: 'Intensive training program focused on GPU-accelerated computing, deep learning, and AI model optimization.',
      achievements: [
        'Completed advanced CUDA programming',
        'Optimized AI models for GPU acceleration',
        'Implemented computer vision applications'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <Briefcase size={16} className="text-white" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-primary mt-1">▹</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
