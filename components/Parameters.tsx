"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Eye, Activity, Stethoscope, Thermometer, Settings as Lungs, UserCheck } from 'lucide-react';

const Parameters = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const parameters = [
    { icon: <UserCheck />, title: 'General Health Checkup', count: '13 parameters' },
    { icon: <Activity />, title: 'EAR TEST', count: '2 parameters' },
    { icon: <UserCheck />, title: 'MATERNAL HEALTH CARE', count: '1 parameters' },
    { icon: <Eye />, title: 'EYE TEST', count: '2 parameters' },
    { icon: <Thermometer />, title: 'ANEMIA', count: '1 parameters' },
    { icon: <Heart />, title: 'CARDIAC', count: '7 parameters' },
    { icon: <Brain />, title: 'MENTAL HEALTH', count: '1 parameters' },
    { icon: <Stethoscope />, title: 'DERMATOLOGY', count: '1 parameters' },
    { icon: <Activity />, title: 'DIABETES TEST', count: '2 parameters' },
    { icon: <Thermometer />, title: 'RAPID TEST', count: '20 parameters' },
    { icon: <Stethoscope />, title: 'AUSCULTATION', count: '2 parameters' },
    { icon: <Lungs />, title: 'PULMONARY', count: '4 parameters' },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">PARAMETERS</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            The advanced equipment in our mobile clinics enables comprehensive health assessments with over 60+ tests and screenings. These solutions support preventive healthcare and telemedicine, making health monitoring more convenient and efficient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* 3D Human Model - Center Piece */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1564711975095-4eafc858b5f3?auto=format&fit=crop&w=500"
              alt="Human Body Model"
              className="w-[400px] h-[600px] object-contain"
            />
          </div>

          {parameters.map((param, index) => (
            <motion.div
              key={param.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-400 w-10 h-10">
                  {param.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{param.title}</h3>
                  <p className="text-blue-200 text-sm">{param.count}</p>
                </div>
              </div>
              <button className="mt-4 text-sm text-blue-300 hover:text-blue-200 transition-colors duration-200">
                View Detail →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parameters;