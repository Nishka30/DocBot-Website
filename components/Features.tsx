"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Shield,
  Smartphone,
  MessageSquare,
  Activity,
  Zap,
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Advanced AI Diagnostics',
      description:
        'Cutting-edge artificial intelligence for accurate preliminary health assessments.',
      color: 'from-blue-500/20 to-purple-500/20',
      highlight: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Private',
      description:
        'Your health data is protected with military-grade encryption and security measures.',
      color: 'from-purple-500/20 to-pink-500/20',
      highlight: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Health Tracking',
      description:
        'Monitor your health metrics and get personalized insights on your mobile device.',
      color: 'from-pink-500/20 to-red-500/20',
      highlight: 'from-pink-500 to-red-500',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'AI Chat Support',
      description:
        'Get instant answers to your health queries from our intelligent chatbot.',
      color: 'from-red-500/20 to-orange-500/20',
      highlight: 'from-red-500 to-orange-500',
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-time Monitoring',
      description:
        'Continuous health monitoring with instant alerts for critical changes.',
      color: 'from-orange-500/20 to-yellow-500/20',
      highlight: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: '24/7 Instant Access',
      description:
        'Access healthcare support anytime, anywhere with our always-available platform.',
      color: 'from-yellow-500/20 to-green-500/20',
      highlight: 'from-yellow-500 to-green-500',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
            Revolutionary Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Experience the future of healthcare with our innovative features designed
            to provide you with the best possible care.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl transition-all duration-500 group-hover:scale-110`} />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.highlight} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <motion.div
                  className={`text-white mb-4 bg-gradient-to-br ${feature.highlight} p-3 rounded-lg inline-block`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-200">
                  {feature.description}
                </p>
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

export default Features;