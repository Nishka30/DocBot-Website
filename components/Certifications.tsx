'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle, Award, Medal } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "HIPAA Compliant",
      description: "Certified secure healthcare data handling and storage",
      year: "2025"
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "ISO 27001",
      description: "Information security management system certification",
      year: "2024"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "FDA Approved",
      description: "Medical device software certification",
      year: "2024"
    },
    {
      icon: <Medal className="h-12 w-12" />,
      title: "CE Mark",
      description: "European conformity for medical devices",
      year: "2024"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Compliance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and compliance standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <div className="text-sm text-blue-600 font-semibold">
                Certified {cert.year}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Shield className="h-5 w-5" />
            <span>View All Certifications</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;