"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot,
  Dna,
  HeartPulse,
  Microscope,
  Brain,
  Shield,
  Activity,
  Zap
} from 'lucide-react';

const ProductsServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const products = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Diagnostic Assistant",
      description: "Advanced AI-powered diagnostic tool for accurate health assessments",
      features: ["Neural Network Analysis", "Real-time Diagnostics", "Predictive Healthcare"],
      image: "https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?auto=format&fit=crop&w=800",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Dna className="h-12 w-12" />,
      title: "Personalized Health Platform",
      description: "Tailored healthcare solutions based on individual genetic profiles",
      features: ["DNA Sequencing", "Personalized Medicine", "Genetic Risk Assessment"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Remote Patient Monitoring",
      description: "24/7 health monitoring system with real-time alerts",
      features: ["Continuous Monitoring", "Emergency Response", "Health Analytics"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Microscope className="h-12 w-12" />,
      title: "Lab Integration Suite",
      description: "Seamless integration with laboratory systems and results",
      features: ["Automated Analysis", "Result Integration", "Smart Reporting"],
      image: "https://images.unsplash.com/photo-1579165466991-467135ad3875?auto=format&fit=crop&w=800",
      color: "from-pink-500 to-red-500"
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Next-Gen Health Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Revolutionizing healthcare with cutting-edge AI technology and innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-110" />
              
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`p-3 rounded-lg bg-gradient-to-br ${product.color}`}
                    >
                      {product.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                  </div>

                  <p className="text-blue-200 mb-6">{product.description}</p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-blue-300"
                        whileHover={{ x: 10 }}
                      >
                        <Activity className="h-5 w-5" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${product.color} rounded-lg text-white font-semibold`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Animated gradient border */}
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