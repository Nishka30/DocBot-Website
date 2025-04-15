"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Stethoscope,
  Heart,
  Activity,
  Eye,
  Brain,
  Share2,
  Phone
} from 'lucide-react';

const ProductsServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const features = [
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Basic Health Checkup",
      description: "Comprehensive analysis of vital health parameters",
      highlights: ["BMI & Body Composition", "Blood Pressure", "Blood Glucose", "SpO2 & Temperature"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      //icon: <Flask className="h-12 w-12" />,
      title: "Advanced Testing",
      description: "Professional-grade diagnostic capabilities",
      highlights: ["Infectious Disease Tests", "Hormone Analysis", "Vision Tests", "ECG & Lipid Profile"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Smart Analysis",
      description: "AI-powered health assessment and risk profiling",
      highlights: ["Instant Digital Reports", "Risk Assessment", "Health Score", "Trend Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Telemedicine Suite",
      description: "Seamless connection with healthcare providers",
      highlights: ["Real-time Data Sharing", "Video Consultations", "Digital Prescriptions", "ABHA Integration"],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 relative overflow-hidden">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            DocBot Health Pod
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            The future of healthcare diagnostics - comprehensive health assessment in minutes
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-110" />
              
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>

                  <p className="text-blue-200 mb-6">{feature.description}</p>

                  <div className="space-y-3 mb-8">
                    {feature.highlights.map((highlight) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center space-x-2 text-blue-300"
                        whileHover={{ x: 10 }}
                      >
                        <Activity className="h-5 w-5" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${feature.color} rounded-lg text-white font-semibold`}
                  >
                    Learn More
                  </motion.button>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
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
      </div>
    </div>
  );
};

export default ProductsServices;