"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle, Award, Medal, Sparkles } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const certifications = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "HIPAA Compliant",
      description: "Certified secure healthcare data handling and storage",
      year: "2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "ISO 27001",
      description: "Information security management system certification",
      year: "2024",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "FDA Approved",
      description: "Medical device software certification",
      year: "2024",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Medal className="h-12 w-12" />,
      title: "CE Mark",
      description: "European conformity for medical devices",
      year: "2024",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Animated DNA Helix Background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-2"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: [-100, 100],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ y }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
              Trust & Security
            </span>
            <Sparkles className="h-5 w-5 text-blue-400" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Certifications & Compliance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Our commitment to excellence is backed by industry-leading certifications and compliance standards
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 rounded-xl blur-xl transition-all duration-500 group-hover:scale-110`} />
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`mb-6 p-3 rounded-lg bg-gradient-to-br ${cert.color} inline-block`}
                >
                  {cert.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-200 mb-4">{cert.description}</p>
                <div className="text-sm text-blue-300 font-semibold">
                  Certified {cert.year}
                </div>

                {/* Animated gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{
                    x: [-100, 400],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
          >
            <Shield className="h-5 w-5" />
            <span>View All Certifications</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;