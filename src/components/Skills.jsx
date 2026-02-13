import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Container, Eye, Beaker, Coffee, Terminal } from 'lucide-react';

function Skills() {
  const skills = [
    { name: 'Java Development', icon: Coffee, color: 'from-blue-500 to-blue-600' },
    { name: 'Problem-Solving', icon: Cpu, color: 'from-indigo-500 to-indigo-600' },
    { name: 'MySQL', icon: Database, color: 'from-blue-600 to-blue-700' },
    { name: 'JSP & JDBC', icon: Code2, color: 'from-slate-600 to-slate-700' },
    { name: 'Data Structures', icon: Terminal, color: 'from-gray-600 to-gray-700' },
    { name: 'Core Java', icon: Coffee, color: 'from-blue-500 to-blue-600' },
    { name: 'Python', icon: Code2, color: 'from-indigo-600 to-indigo-700' },
    { name: 'React', icon: Code2, color: 'from-blue-400 to-blue-500' },
    { name: 'Docker', icon: Container, color: 'from-blue-600 to-blue-700' },
    { name: 'Flask', icon: Beaker, color: 'from-gray-700 to-gray-800' },
    { name: 'OpenCV', icon: Eye, color: 'from-slate-600 to-slate-700' },
    { name: 'C Programming', icon: Terminal, color: 'from-gray-600 to-gray-700' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
