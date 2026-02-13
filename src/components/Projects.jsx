import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'ShareBite – Food Rescuing Platform',
      description: 'A platform connecting food donors with recipients to reduce food waste. Features real-time tracking, user authentication, and donation management.',
      tech: ['JSP', 'MySQL', 'Java', 'JDBC'],
      gradient: 'from-slate-600 to-slate-700',      link: '#'
    },
    {
      title: 'QuickHire – Recruitment Platform',
      description: 'Streamlined recruitment system with job posting, candidate tracking, and automated screening. Built with modern Python frameworks.',
      tech: ['Python', 'Django', 'PostgreSQL', 'REST API'],
       gradient: 'from-slate-600 to-slate-700',
      link: '#'
    },
    {
      title: 'AI Vision System',
      description: 'Advanced computer vision application using OpenCV for real-time object detection and classification with NVIDIA GPU acceleration.',
      tech: ['Python', 'OpenCV', 'NVIDIA CUDA', 'TensorFlow'],
      gradient: 'from-slate-600 to-slate-700',
      link: '#'
    },
    {
      title: 'Dockerized Applications',
      description: 'Containerized full-stack applications with Docker for seamless deployment. Includes CI/CD pipelines and orchestration.',
      tech: ['Docker', 'Node.js', 'React', 'Docker Compose'],
       gradient: 'from-slate-600 to-slate-700',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
