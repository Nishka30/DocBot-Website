'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  HeartPulse, 
  Microscope, 
  Pill,
  Dna,
  Bot
} from 'lucide-react';

const ProductsServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Diagnostic Assistant",
      description: "Advanced AI-powered diagnostic tool for accurate health assessments",
      features: ["Symptom Analysis", "Risk Assessment", "Treatment Recommendations"],
      image: "https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?auto=format&fit=crop&w=800"
    },
    {
      icon: <Dna className="h-12 w-12" />,
      title: "Personalized Health Platform",
      description: "Tailored healthcare solutions based on individual genetic profiles",
      features: ["Genetic Analysis", "Personalized Plans", "Progress Tracking"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800"
    },
    {
      icon: <HeartPulse className="h-12 w-12" />,
      title: "Remote Patient Monitoring",
      description: "24/7 health monitoring system with real-time alerts",
      features: ["Vital Signs Tracking", "Emergency Alerts", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
    },
    {
      icon: <Microscope className="h-12 w-12" />,
      title: "Lab Integration Suite",
      description: "Seamless integration with laboratory systems and results",
      features: ["Digital Lab Reports", "Result Analysis", "Trend Detection"],
      image: "https://images.unsplash.com/photo-1579165466991-467135ad3875?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Products & Services</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Revolutionizing healthcare with cutting-edge AI technology and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                </div>

                <p className="text-blue-200 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-blue-300">
                      <Activity className="h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg hover:from-blue-600 hover:to-violet-600 transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>

              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;