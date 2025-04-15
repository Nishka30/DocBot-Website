'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Award, Newspaper, Camera, Heart } from 'lucide-react';

const TestimonialsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300",
      quote: "DocBot has revolutionized how we approach patient care. The AI-powered diagnostics have significantly improved our accuracy and response time.",
      rating: 5,
      color: "from-blue-500 to-purple-500",
      location: "New York Presbyterian Hospital"
    },
    // ... more testimonials
  ];

  const mediaFeatures = [
    {
      name: "TechCrunch",
      logo: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=200",
      title: "DocBot: Revolutionizing Healthcare with AI",
      link: "#",
      date: "March 2025"
    },
    // ... more media features
  ];

  const docbotMoments = [
    {
      title: "First Million Users Celebration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800",
      description: "Our team celebrating the milestone of reaching 1 million users globally",
      date: "January 2025"
    },
    // ... more moments
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/90" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000')] bg-cover bg-center"
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold text-white mb-4"
            >
              Our Success Stories
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-200"
            >
              Real experiences from healthcare professionals and patients
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-400/20" />
                <div className="relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white/20"
                  />
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-blue-200 mb-2">{testimonial.role}</p>
                  <p className="text-blue-300 text-sm mb-4">{testimonial.location}</p>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 italic">{testimonial.quote}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 bg-blue-950/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Featured In
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mediaFeatures.map((feature, index) => (
              <motion.a
                key={index}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={feature.logo}
                  alt={feature.name}
                  className="w-full h-12 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="text-white font-medium text-sm text-center">{feature.title}</h3>
                <p className="text-blue-300 text-xs text-center mt-2">{feature.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* DocBot Moments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Moments at DocBot</h2>
            <p className="text-xl text-blue-200">Celebrating our journey and milestones</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docbotMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent z-10" />
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold text-white mb-2">{moment.title}</h3>
                  <p className="text-blue-200 text-sm">{moment.description}</p>
                  <p className="text-blue-300 text-xs mt-2">{moment.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;