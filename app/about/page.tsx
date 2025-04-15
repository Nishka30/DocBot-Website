"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Activity,
  Heart,
  Brain,
  Eye,
  Microscope,
  Stethoscope,
  Share2,
  Phone,
  FileText,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const ProductPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const basicTests = [
    "Height & Weight", "BMI", "Muscle Mass", "Bone Mass", "Protein",
    "Hydration", "Metabolic Age", "Blood Glucose", "Blood Pressure",
    "SpO2", "Temperature", "Health Score"
  ];

  const advancedTests = [
    "12 Lead ECG", "Lipid Profile", "Vision Tests", "Infectious Disease Tests",
    "Hormone Analysis", "Urine Analysis", "Digital Stethoscope", "Dermoscope"
  ];

  const features = [
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Real-time Data Sharing",
      description: "Instant sharing of health data and reports with healthcare providers"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telemedicine",
      description: "On-demand video consultations with qualified doctors"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Reports",
      description: "Comprehensive digital health reports with trend analysis"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Analysis",
      description: "Advanced AI-powered health risk assessment"
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
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Advanced Health Diagnostics
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gradient mb-6"
          >
            DocBot Health Pod
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            The future of healthcare diagnostics - comprehensive health assessment in minutes
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Book a Demo
          </motion.button>
        </div>

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

      {/* Product Showcase */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Meet The DocBot Health Pod</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Advanced diagnostic technology in a compact, user-friendly design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-xl"
            >
              <Image
                src="/api/placeholder/400/600"
                alt="DocBot Health Pod Front View"
                width={400}
                height={600}
                className="rounded-lg w-full h-auto object-contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-xl"
            >
              <Image
                src="/api/placeholder/400/600"
                alt="DocBot Health Pod Side View"
                width={400}
                height={600}
                className="rounded-lg w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Cutting-edge technology that's changing healthcare delivery
            </p>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-4 group-hover:bg-blue-500/30 transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Test Categories */}
      <div className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Health Assessment</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Over 20 different health parameters measured in a single session
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Basic Tests */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Basic Health Tests</h3>
              <div className="grid grid-cols-2 gap-4">
                {basicTests.map((test) => (
                  <div key={test} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100">{test}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Advanced Tests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Advanced Tests</h3>
              <div className="grid grid-cols-2 gap-4">
                {advancedTests.map((test) => (
                  <div key={test} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" />
                    <span className="text-blue-100">{test}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Simple process, comprehensive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="rounded-full bg-blue-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-300 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Step In</h3>
              <p className="text-blue-200">Enter the DocBot Health Pod and follow the simple on-screen instructions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 text-center"
            >
              <div className="rounded-full bg-blue-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-300 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get Tested</h3>
              <p className="text-blue-200">Complete the non-invasive tests - only takes 5-7 minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6 text-center"
            >
              <div className="rounded-full bg-blue-500/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-300 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Receive Results</h3>
              <p className="text-blue-200">Get instant digital reports with AI-powered health insights</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What Healthcare Professionals Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card p-6"
            >
              <p className="text-blue-100 italic mb-4">"The DocBot Health Pod has revolutionized how we conduct initial health assessments. It's efficient, accurate, and our patients love the experience."</p>
              <div className="font-semibold text-white">Dr. Sarah Johnson</div>
              <div className="text-sm text-blue-300">Medical Director, HealthFirst Clinic</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6"
            >
              <p className="text-blue-100 italic mb-4">"We've seen a 40% increase in preventive care engagement since implementing the DocBot Health Pod in our hospital."</p>
              <div className="font-semibold text-white">Dr. Michael Chen</div>
              <div className="text-sm text-blue-300">Chief Innovation Officer, Metro General Hospital</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6"
            >
              <p className="text-blue-100 italic mb-4">"The comprehensive data we get from DocBot has improved our diagnostic accuracy and helped us catch health issues earlier."</p>
              <div className="font-semibold text-white">Dr. Emily Rodriguez</div>
              <div className="text-sm text-blue-300">Preventive Care Specialist, Wellness Center</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Image with Overlay */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/api/placeholder/1200/600"
                alt="DocBot Health Pod"
                width={1200}
                height={600}
                className="rounded-2xl shadow-2xl opacity-80"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Experience the Future of Healthcare</h3>
              <p className="text-blue-200 max-w-lg">DocBot Health Pod combines advanced diagnostics with AI-powered insights for comprehensive health monitoring.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gradient mb-6"
          >
            Ready to Transform Healthcare at Your Facility?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 mb-8"
          >
            Join the healthcare revolution with DocBot Health Pod
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Request Pricing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;