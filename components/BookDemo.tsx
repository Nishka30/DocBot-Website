"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Users, Monitor } from 'lucide-react';
import api from '@/lib/axios'; // Adjust the import based on your project structure

const BookDemo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    work_email: '',
    organization: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await api.post('/demo-request', formData);
      setSuccess(true);
      setFormData({
        name: '',
        work_email: '',
        organization: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-demo-section" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience the Future of Healthcare
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo to see how DocBot can transform your healthcare practice with AI-powered solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <Calendar className="h-8 w-8 text-blue-400" />,
                  title: "Flexible Scheduling",
                  description: "Choose a time that works best for your team",
                },
                {
                  icon: <Clock className="h-8 w-8 text-blue-400" />,
                  title: "30-Minute Demo",
                  description: "Comprehensive overview of all features",
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-400" />,
                  title: "Expert-Led",
                  description: "Demo by healthcare technology specialists",
                },
                {
                  icon: <Monitor className="h-8 w-8 text-blue-400" />,
                  title: "Live Platform Tour",
                  description: "See real-time AI diagnostics in action",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-blue-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Book Your Demo</h3>
            {success ? (
              <div className="text-green-400 p-4 rounded-lg bg-green-400/10 mb-4">
                Thank you for your interest! We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-red-400 p-4 rounded-lg bg-red-400/10 mb-4">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email</label>
                  <input
                    type="email"
                    name="work_email"
                    value={formData.work_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    rows={4}
                    placeholder="Tell us about your specific needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors duration-200 ${
                    loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Submitting...' : 'Schedule Demo'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;