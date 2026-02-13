import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/Python Essential 1 Cisco.pdf'
    },
    {
      title: 'JSP & MySQL Foundation Program',
      issuer: 'ABESIT',
      logo: '/images/abesit.png',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/Foundation Program of JSP and MySQL-25.pdf'
    },
    {
      title: 'Fair AI Algorithms',
      issuer: 'Fred Hutch',
      logo: '/images/fred.png',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/fred hutch.pdf'
    },
    {
      title: 'Data Structures',
      issuer: 'CodeChef',
      logo: 'https://cdn.codechef.com/images/cc-logo.svg',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/CodeChef Certificate.pdf'
    },
    {
      title: 'Data Science using Python',
      issuer: 'NITTTR Chandigarh',
      logo: '/images/nittr.png',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/NITTR Chandigarh University.pdf'
    },
    {
      title: 'Java Foundation Certificate',
      issuer: 'Infosys Springboard',
      logo: '/images/springboard-logo.png',
      color: 'from-slate-600 to-slate-700',
      link: '/certificates/Java Foundation Certificate Infosys.pdf'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={cert.logo} alt={cert.issuer} className="w-16 h-16 object-contain" />
                <div className={`flex-1 h-1 bg-gradient-to-r ${cert.color} rounded`} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{cert.issuer}</p>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-primary text-sm font-semibold"
              >
                View Certificate <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
