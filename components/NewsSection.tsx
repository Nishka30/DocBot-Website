"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Award, TrendingUp, Newspaper, Sparkles } from 'lucide-react';

const NewsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const news = [
    {
      type: "Award",
      icon: <Award className="h-8 w-8" />,
      title: "DocBot Wins Healthcare Innovation Award 2025",
      source: "HealthTech Magazine",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500",
      color: "from-blue-500 to-purple-500"
    },
    {
      type: "Press",
      icon: <Newspaper className="h-8 w-8" />,
      title: "AI in Healthcare: DocBot Leading the Revolution",
      source: "Tech Daily",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "Growth",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "DocBot Reaches 1 Million Patient Milestone",
      source: "MedTech Weekly",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1576091160291-31957027c424?auto=format&fit=crop&w=500",
      color: "from-pink-500 to-blue-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
      {typeof window !== "undefined" &&
  [...Array(20)].map((_, i) => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    return (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
        animate={{
          x: [randomX, Math.random() * window.innerWidth],
          y: [randomY, Math.random() * window.innerHeight],
          scale: [0.5, 1, 0.5],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  })}

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ y }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
              Latest Updates
            </span>
            <Sparkles className="h-5 w-5 text-blue-400" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            News & Media
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Stay updated with the latest news, awards, and media coverage about DocBot's impact on healthcare.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/0 z-10" />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20`} />
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 z-30 p-6 flex flex-col justify-end">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-white/80 mb-3"
                >
                  <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg`}>
                    {item.icon}
                  </div>
                  <span>{item.type}</span>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-white/80">
                  <span>{item.source}</span>
                  <span>{item.date}</span>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  Read More <ArrowUpRight className="h-4 w-4 ml-1" />
                </motion.button>

                {/* Animated gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
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

export default NewsSection;