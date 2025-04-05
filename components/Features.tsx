"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Clock,
  Shield,
  Smartphone,
  MessageSquare,
  Activity,
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Advanced AI Diagnostics',
      description:
        'Cutting-edge artificial intelligence for accurate preliminary health assessments.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description:
        'Access healthcare support anytime, anywhere with our always-available platform.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Private',
      description:
        'Your health data is protected with military-grade encryption and security measures.',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Health Tracking',
      description:
        'Monitor your health metrics and get personalized insights on your mobile device.',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'AI Chat Support',
      description:
        'Get instant answers to your health queries from our intelligent chatbot.',
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-time Monitoring',
      description:
        'Continuous health monitoring with instant alerts for critical changes.',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our innovative features designed
            to provide you with the best possible care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;