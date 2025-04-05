"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertCircle, CheckCircle2 } from 'lucide-react';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI-Powered Symptom Checker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant insights about your health. Our advanced AI analyzes your symptoms
            and provides preliminary health assessments in seconds.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="symptoms"
                  className="block text-lg font-medium text-gray-700 mb-3"
                >
                  Describe your symptoms
                </label>
                <div className="relative">
                  <textarea
                    id="symptoms"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="Example: I have a headache and fever since yesterday..."
                  />
                  <Search className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                <p>
                  This is not a substitute for professional medical advice. In case of
                  emergency, please contact your local emergency services.
                </p>
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg text-white text-lg font-medium transition-all duration-200 ${
                  isAnalyzing
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-6 w-6" />
                    <span>Analyze Symptoms</span>
                  </>
                )}
              </button>
            </form>

            {/* Results section would be added here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;