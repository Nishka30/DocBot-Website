"use client";
import React, { useState } from 'react';
import { Building2, GraduationCap, Heart, Dumbbell, Clover as Government, ShieldCheck, ArrowRight, Download, CheckCircle2, Users } from 'lucide-react';
import api from '@/lib/axios'; // Adjust the import based on your project structure

function App() {
  const [formData, setFormData] = useState({
    name: '',
    work_email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await api.post('/demo-request/', formData);
      setSubmitStatus({
        type: 'success',
        message: 'Demo request submitted successfully! We will contact you soon.'
      });
      setFormData({ name: '', work_email: '', organization: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit demo request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const featuredUseCases = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Hospitals & Clinics",
      description: "Transform your hospital's first impression with automated pre-OPD screening, reduced wait times, and enhanced patient experience.",
      benefits: [
        "Save 5-7 minutes per consultation",
        "Automated vitals & history collection",
        "Early detection of health risks",
        "Improved patient flow management",
        "Integration with hospital systems"
      ],
      link: "https://docbot-public.s3.ap-south-1.amazonaws.com/website/DocBot+Hospital.pdf"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Schools & Educational Institutions",
      description: "Comprehensive student health monitoring system aligned with NEP 2020, featuring automated assessments and real-time parent updates.",
      benefits: [
        "NEP 2020 & CBSE compliance",
        "Real-time parent notifications",
        "Mental & physical health screening",
        "Automated health assessments",
        "24/7 AI health assistant"
      ],
      link: "https://docbot-public.s3.ap-south-1.amazonaws.com/website/DocBot+Pod+(School).pdf"
    }
  ];

  const additionalUseCases = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Insurance Industry",
      description: "Streamline health assessments and risk evaluation for insurance providers, enabling data-driven policy decisions and proactive care management."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness & Sports",
      description: "Enhance athlete performance monitoring and fitness tracking with precise vital measurements and AI-powered health insights."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Wellness",
      description: "Elevate employee wellness programs with automated health screening, personalized health plans, and comprehensive monitoring."
    },
    {
      icon: <Government className="w-8 h-8" />,
      title: "Government & NGOs",
      description: "Support public health initiatives with scalable health screening solutions for community outreach and preventive care programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            DocBot Use Cases
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how DocBot's AI-powered health screening solutions are transforming healthcare across different sectors
          </p>
          <button 
            onClick={() => window.location.href = '/products'}
            className="btn-primary mt-8 group"
          >
            Explore Products
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredUseCases.map((useCase, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-lg bg-white/10 mr-4">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold">{useCase.title}</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">{useCase.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href={useCase.link}
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Detailed Proposal
              </a>
            </div>
          ))}
        </div>

        {/* Additional Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Additional Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalUseCases.map((useCase, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-white/10 mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Request Form */}
        <div className="text-center" id="demo-form">
          <div className="card max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h2>
            <p className="text-gray-300 mb-6">
              Join the growing network of institutions using DocBot to revolutionize health screening and preventive care.
            </p>
            
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="work_email"
                  value={formData.work_email}
                  onChange={handleInputChange}
                  placeholder="Work Email"
                  required
                  className="input-field"
                />
              </div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Organization"
                required
                className="input-field w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your requirements (Optional)"
                className="input-field w-full h-32 resize-none"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;