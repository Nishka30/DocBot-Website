"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Award, TrendingUp, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const news = [
    {
      type: "Award",
      icon: <Award className="h-8 w-8" />,
      title: "DocBot Wins Healthcare Innovation Award 2025",
      source: "HealthTech Magazine",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500",
    },
    {
      type: "Press",
      icon: <Newspaper className="h-8 w-8" />,
      title: "AI in Healthcare: DocBot Leading the Revolution",
      source: "Tech Daily",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500",
    },
    {
      type: "Growth",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "DocBot Reaches 1 Million Patient Milestone",
      source: "MedTech Weekly",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1576091160291-31957027c424?auto=format&fit=crop&w=500",
    }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">News & Media</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, awards, and media coverage about DocBot's impact on healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10" />
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="flex items-center space-x-2 text-white/80 mb-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span>{item.type}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-white/80">
                  <span>{item.source}</span>
                  <span>{item.date}</span>
                </div>

                <button className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Read More <ArrowUpRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;