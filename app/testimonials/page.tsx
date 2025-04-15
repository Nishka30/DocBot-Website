"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Loader2, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import api from '@/lib/axios';

const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
});

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      rating: 5
    }
  });

  const mediaFeatures = [
    {
      name: "Hindustan Bytes",
      title: "Your Health is Their Mission: DocBot",
      link: "https://www.hindustanbytes.com/your-health-is-their-mission-docbot",
      date: "2024"
    },
    {
      name: "Jaipur Bytes",
      title: "Your Health is Their Mission: DocBot",
      link: "https://www.jaipurbytes.com/your-health-is-their-mission-docbot",
      date: "2024"
    },
    {
      name: "Business Press",
      title: "Your Health is Their Mission: DocBot",
      link: "https://businesspress.in/your-health-is-their-mission-docbot/",
      date: "2024"
    },
    {
      name: "Bhau.org",
      title: "Congratulation to All Startups",
      link: "https://bhau.org/events/congratulation-to-all-startups/",
      date: "2024"
    }
  ];

  const docbotMoments = [
    {
      title: "Emergency Care",
      description: "Quick response times in critical situations",
      image: "/images/kiosk-people.jpg"
    },
    {
      title: "Patient Consultation",
      description: "Personalized care and attention",
      image: "/images/patient-consultation.jpg"
    },
    {
      title: "Digital Health",
      description: "Modern healthcare solutions",
      image: "/images/opening.jpg"
    }
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    setValue('rating', rating);
  };

  const fetchTestimonials = async () => {
    try {
      const response = await api.get('/testimonials/');
      console.log('API response:', response.data);
      
      // Check what format the data is in
      if (Array.isArray(response.data)) {
        // If it's directly an array
        setTestimonials(response.data);
      } else if (response.data && response.data.testimonials) {
        // If testimonials are in a property called "testimonials"
        if (Array.isArray(response.data.testimonials)) {
          // If testimonials is an array
          setTestimonials(response.data.testimonials);
        } else {
          // If testimonials is a single object, put it in an array
          setTestimonials([response.data.testimonials]);
        }
      } else {
        // Fallback if data structure is unexpected
        console.error('Unexpected response format:', response.data);
        setTestimonials([]);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error("Failed to load testimonials");
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const testimonialData = {
        name: data.name,
        email: data.email,
        message: data.message,
        rating: Number(data.rating)
      };
      
      const response = await api.post('/testimonials/', testimonialData);
      toast.success("Testimonial submitted successfully!");
      reset();
      setSelectedRating(5);
      
      // After submission, fetch the updated list of testimonials
      fetchTestimonials();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error("Failed to submit testimonial. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

      {/* DocBot Moments */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            DocBot Moments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {docbotMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg"
              >
                <div className="aspect-video relative">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{moment.title}</h3>
                  <p className="text-blue-200">{moment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonial Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Share Your Experience</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register("name")}
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  rows={4}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingClick(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating <= selectedRating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <p className="text-red-400 text-sm mt-1">{errors.rating.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Testimonial"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          ) : (
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
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-white/80 italic mt-4">{testimonial.message}</p>
                    <div className="flex items-center mt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          )}
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-white font-medium text-lg text-center mb-2">{feature.name}</h3>
                <p className="text-blue-200 text-sm text-center">{feature.title}</p>
                <p className="text-blue-300 text-xs text-center mt-2">{feature.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;