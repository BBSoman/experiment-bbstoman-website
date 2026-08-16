import React from 'react';
import {
  CheckCircle,
  Languages,
  Bot,
  Users,
  Globe,
  Glasses,
  ArrowLeftRight,
  Settings,
  Cast,
  Monitor,
} from 'lucide-react'; // Relevant icons for Mago solutions
import Header from '../components/Header';
import Footer from '../components/Footer';

const MagoSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CheckCircle, // Icon for High Accuracy
      title: 'High Accuracy',
      description: 'Powered by advanced AI for precise subtitling and translation.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Languages, // Icon for Real-Time Translation
      title: 'Real-Time Translation',
      description: 'Instant translation across 200+ languages for seamless communication.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Bot, // Icon for AI Assistant
      title: 'AI Assistant',
      description: 'Summarize, answer questions, and enhance conversations effortlessly.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users, // Icon for Speaker Identification
      title: 'Speaker Identification',
      description: 'Identify speakers in real-time on your device or smart glasses.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Globe, // Icon for Multi-Language Detection
      title: 'Multi-Language Detection',
      description: 'Detect and transcribe multiple languages simultaneously.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Glasses, // Icon for Smart Glasses Integration
      title: 'Smart Glasses Integration',
      description: 'Experience augmented reality conversations with Mago Glasses.',
      color: 'from-cyan-500 to-sky-500',
    },
    {
      icon: ArrowLeftRight, // Icon for Bidirectional Translation
      title: 'Bidirectional Translation',
      description: 'Enable two-way conversations in native languages.',
      color: 'from-orange-600 to-amber-600',
    },
    {
      icon: Settings, // Icon for AV Equipment Compatibility
      title: 'AV Equipment Compatibility',
      description: 'Seamlessly integrates with professional audio-visual systems.',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Cast, // Icon for Multi-Device Streaming
      title: 'Multi-Device Streaming',
      description: 'Stream translations to multiple devices in real-time.',
      color: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Monitor className="w-4 h-4 mr-2" />
            Mago Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mago Innovations
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover AI-driven solutions for real-time translation and immersive communication.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Solutions Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge features ensure accurate and efficient multilingual interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Communication with Mago?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch to learn how Mago can elevate your translation experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Request a Demo
              </a>
            </div>
            <div className="mt-8">
              <a
                href="/partners"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back to Brands
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MagoSolutionsPage;
