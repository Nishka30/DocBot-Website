"use client";
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Sparkles,
  ArrowRight,
  ChevronDown,
  Star,
  Shield,
  Clock,
  Users
} from 'lucide-react';

function App() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 100]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Activity className="h-6 w-6 text-purple-400" />,
      title: "Real-time Monitoring",
      description: "Continuous health tracking with instant alerts"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-400" />,
      title: "Vital Signs",
      description: "Comprehensive vital sign monitoring and analysis"
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      title: "AI Diagnostics",
      description: "Advanced AI-powered health assessment"
    },
    {
      icon: <Eye className="h-6 w-6 text-green-400" />,
      title: "Vision Analysis",
      description: "Complete eye examination and vision testing"
    }
  ];

  const basicTests = [
    "Height & Weight", "BMI", "Muscle Mass", "Bone Mass", "Protein",
    "Hydration", "Metabolic Age", "Blood Glucose", "Blood Pressure",
    "SpO2", "Temperature", "Health Score"
  ];

  const advancedTests = [
    "12 Lead ECG", "Lipid Profile", "Vision Tests", "Infectious Disease Tests",
    "Hormone Analysis", "Urine Analysis", "Digital Stethoscope", "Dermoscope"
  ];

  const faqs = [
    {
      question: "How long does a complete health assessment take?",
      answer: "A complete health assessment in the DocBot Health Pod typically takes 5-7 minutes. This includes all basic and advanced tests, providing you with comprehensive health data in a fraction of the time of traditional medical examinations."
    },
    {
      question: "Is the DocBot Health Pod FDA approved?",
      answer: "Yes, the DocBot Health Pod has received FDA clearance for its diagnostic capabilities. All our medical devices and testing procedures comply with international healthcare standards and regulations."
    },
    {
      question: "How accurate are the test results?",
      answer: "The DocBot Health Pod achieves a 99% accuracy rate across all its diagnostic tests, validated through extensive clinical trials and real-world usage data. Our AI-powered analysis system continuously learns and improves its accuracy."
    },
    {
      question: "Can the health data be integrated with existing EMR systems?",
      answer: "Yes, the DocBot Health Pod seamlessly integrates with major EMR systems through standard HL7 and FHIR protocols. We also provide custom API solutions for specific healthcare management systems."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: "Time Efficient",
      description: "Complete health assessment in minutes"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Privacy Focused",
      description: "HIPAA compliant data protection"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "High Accuracy",
      description: "99% accurate diagnostic results"
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "User Friendly",
      description: "Intuitive interface for all ages"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-indigo-900/60 to-violet-900/80" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-purple-200">Revolutionary Healthcare Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            DocBot Health Pod
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Advanced diagnostics and AI-powered health insights in a revolutionary medical device
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="btn-secondary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet The DocBot Health Pod</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced diagnostic technology in a compact, user-friendly design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src="https://docbot-public.s3.ap-south-1.amazonaws.com/website/bg3.png"
                alt="DocBot Health Pod Front View"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src="https://docbot-public.s3.ap-south-1.amazonaws.com/website/bg4.png"
                alt="DocBot Health Pod Side View"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Benefits */}
      <div className="py-12 px-4 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-lg"
              >
                <div className="p-3 rounded-full bg-white/5">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-blue-200">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
            <p className="text-xl text-blue-200">Cutting-edge technology for comprehensive health monitoring</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-white/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Categories */}
      <div className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-violet-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Health Assessment</h2>
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

      {/* FAQ Section */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-blue-200">Everything you need to know about the DocBot Health Pod</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-300 transform transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-blue-200">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-violet-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">5min</div>
              <div className="text-blue-200">Average Scan Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-blue-200">Monitoring</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gradient mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 mb-8"
          >
            Join thousands of healthcare providers who trust our technology
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Started Today
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;