"use client";

import { motion } from 'framer-motion';
import { Brain, Activity, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Revolutionizing Healthcare with{" "}
            <span className="text-blue-600">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your Smart Doctor, Available 24/7. Experience the future of healthcare
            with AI-powered diagnostics and personalized care.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100" />
            <div className="relative p-8">
              {/* Add your hero image or 3D illustration here */}
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 -right-10 bg-white p-4 rounded-lg shadow-lg"
          >
            <Brain className="h-8 w-8 text-blue-600 mb-2" />
            <p className="text-sm font-semibold">AI-Powered Diagnostics</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
            className="absolute bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg"
          >
            <Activity className="h-8 w-8 text-green-600 mb-2" />
            <p className="text-sm font-semibold">Real-time Monitoring</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute bottom-40 right-10 bg-white p-4 rounded-lg shadow-lg"
          >
            <Clock className="h-8 w-8 text-purple-600 mb-2" />
            <p className="text-sm font-semibold">24/7 Availability</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;