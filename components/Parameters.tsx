"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Eye, Activity, Stethoscope, Thermometer, Settings as Lungs, UserCheck, Dna, Microscope, Pill, Zap } from 'lucide-react';

const Parameters = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const parameters = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'General Health',
      count: '13 parameters',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Neural Health',
      count: '8 parameters',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Cardiac Health',
      count: '7 parameters',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <Lungs className="h-6 w-6" />,
      title: 'Respiratory',
      count: '4 parameters',
      color: 'from-green-500 to-yellow-500'
    },
    {
      icon: <Dna className="h-6 w-6" />,
      title: 'Genetic Analysis',
      count: '6 parameters',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Vital Signs',
      count: '5 parameters',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Vision Health',
      count: '4 parameters',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Lab Analysis',
      count: '12 parameters',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: 'Temperature',
      count: '3 parameters',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Auscultation',
      count: '2 parameters',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Pill className="h-6 w-6" />,
      title: 'Medication',
      count: '8 parameters',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Neural Activity',
      count: '6 parameters',
      color: 'from-cyan-500 to-teal-500'
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-6 h-full">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="border-r border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

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
            Health Parameters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Comprehensive health monitoring with over 60+ advanced parameters for complete wellness assessment
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {parameters.map((param, index) => (
            <motion.div
              key={param.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${param.color} opacity-5 rounded-xl blur-xl transition-all duration-500 group-hover:scale-110`} />
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${param.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${param.color} inline-block`}
                  >
                    {param.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {param.title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {param.count}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-sm text-blue-300 hover:text-blue-200 transition-colors duration-200 flex items-center gap-2"
                  >
                    View Details
                    <Zap className="h-4 w-4" />
                  </motion.button>
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
      </div>
    </div>
  );
};

export default Parameters;