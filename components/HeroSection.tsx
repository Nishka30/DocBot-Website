"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Activity, Clock, Shield, Heart, Zap, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setViewport({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x: x - 0.5, y: y - 0.5 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesArray = useMemo(() =>
    Array.from({ length: 20 }, () => ({
      xStart: Math.random() * viewport.width,
      xEnd: Math.random() * viewport.width,
      yStart: Math.random() * viewport.height,
      yEnd: Math.random() * viewport.height,
      duration: Math.random() * 10 + 20,
    })), [viewport]
  );

  const orbitIcons = [
    <Brain key="brain" className="h-6 w-6" />,
    <Activity key="activity" className="h-6 w-6" />,
    <Clock key="clock" className="h-6 w-6" />,
    <Shield key="shield" className="h-6 w-6" />,
    <Heart key="heart" className="h-6 w-6" />,
    <Zap key="zap" className="h-6 w-6" />,
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 pt-16"
    >
      {/* Background Particles */}
      {particlesArray.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
          animate={{
            x: [p.xStart, p.xEnd],
            y: [p.yStart, p.yEnd],
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
                AI-Powered Healthcare
              </span>
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              The Future of{" "}
              <span className="relative inline-block ml-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Healthcare
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-20 blur-lg"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience revolutionary AI-driven diagnostics and personalized care that's
              available 24/7. Welcome to healthcare that never sleeps.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform group-hover:translate-y-32 transition-transform duration-500" />
              <div className="relative flex items-center space-x-2">
                <Zap className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Get Started Now</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
            >
              <div className="relative flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100 font-semibold">Watch Demo</span>
              </div>
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {[
              { value: "99%", label: "Accuracy", icon: <Brain className="h-5 w-5" /> },
              { value: "24/7", label: "Support", icon: <Clock className="h-5 w-5" /> },
              { value: "50K+", label: "Users", icon: <Heart className="h-5 w-5" /> }
            ].map(stat => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="text-blue-300 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Visual Section */}
        <motion.div
          className="relative h-[64rem] md:h-[40rem] lg:h-96"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotateX: mousePosition.y * 20,
              rotateY: mousePosition.x * 20,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Sphere + Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              animate={{ scale: [1, 1.05, 1], rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-26 h-28 overflow-hidden"
                >
                  {/* Replace this with your company logo */}
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Company Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                  
                  {/* If you want to use a fallback method if Image is not available or for dev purposes */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/path-to-your-logo.png" 
                      alt="Company Logo" 
                      className="w-24 h-24 object-contain"
                    />
                  </div> */}
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting Icons */}
            {[0, 60, 120, 180, 240, 300].map((degree, index) => (
              <motion.div
                key={degree}
                className="absolute top-1/2 left-1/2 w-16 h-16"
                animate={{ rotate: [degree, degree + 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -index,
                }}
              >
                <motion.div
                  className="absolute -left-8 -top-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"
                  whileHover={{ scale: 1.2 }}
                  style={{ rotate: -degree }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {orbitIcons[index]}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Data Points */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                  y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent" />
    </div>
  );
};

export default HeroSection;