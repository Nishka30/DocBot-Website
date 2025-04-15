"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Brain, 
  HeartPulse, 
  Microscope, 
  Clock, 
  Users, 
  Building2, 
  Award,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50,000+", label: "Health Checkups" },
    { icon: <Building2 className="h-6 w-6" />, value: "100+", label: "Health Pods" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Availability" },
    { icon: <Award className="h-6 w-6" />, value: "98%", label: "Satisfaction Rate" }
  ];

  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Clinical-Grade Tests",
      description: "Comprehensive health analysis including Hemoglobin, Blood Glucose, and 50+ parameters"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Mental Health Focus",
      description: "Advanced assessments ensuring complete mental well-being"
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Risk Profiling",
      description: "Early detection of cardiovascular diseases, diabetes, and hypertension"
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Innovation Hub",
      description: "Continuous research and development in preventive healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Medical Technology"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 max-w-4xl"
        >
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Founded in 2021
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Empowering Wellness, One Health Pod at a Time
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            At DocBot, we're revolutionizing healthcare accessibility through advanced technology and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Discover Our Mission
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Features</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive healthcare solutions powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 group cursor-pointer"
              >
                <div className="mb-6 p-3 rounded-lg bg-blue-500/20 inline-block group-hover:bg-blue-500/30 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;