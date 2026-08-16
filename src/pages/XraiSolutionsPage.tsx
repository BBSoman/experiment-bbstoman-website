import React from 'react';
 import {
  ArrowLeft,
  Search,
  Factory,
  Car,
  Heart,
  Package,
  ShoppingCart,
  BarChart3,
  Plane,
  BookOpen,
  Monitor,
  Eye,
  Zap,
  CheckCircle,
   translate,
   glasses,
} from 'lucide-react';// Example icons
import Header from '../components/Header';
import Footer from '../components/Footer';

const XraiSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CheckCircle, // Example icon for High Accuracy
      title: 'High Accuracy',
      description: 'Built using the best subtitling engines in the world.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Monitor, // Example icon for Translation
      title: 'Translation',
      description: 'Real-time translation for over 220+ different languages.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Monitor, // Example icon for AI Assistant
      title: 'AI Assistant',
      description: 'Summarize conversations, ask questions, and much more.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BookOpen, // Example icon for Speaker ID
      title: 'Speaker ID',
      description: 'See who\'s talking, on your phone or in your smart glasses.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Monitor, // Example icon for Language Detector
      title: 'Language Detector',
      description: 'Automatically transcribe up to 10 languages at once.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Monitor, // Example icon for Smart Glasses
      title: 'Smart Glasses',
      description: 'See the conversation with a pair of augmented reality glasses.',
      color: 'from-cyan-500 to-sky-500',
    },
    {
      icon: Monitor, // Example icon for Auto-Reverse
      title: 'Auto-Reverse',
      description: 'True two-way conversations in both of your languages.',
      color: 'from-orange-600 to-amber-600',
    },
    {
      icon: Monitor, // Example icon for Dante Ready
      title: 'Dante® Ready',
      description: 'Our app works seamlessly with Dante Ready AV equipment.',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Monitor, // Example icon for XRAI Stream
      title: 'XRAI Stream',
      description: 'Stream your conversations to multiple devices at once.',
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
            XRAI Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              XRAI Innovations
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions for seamless communication and enhanced interaction.
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
              Our solutions provide high performance and clarity in communication across different languages and formats.
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
              Ready to Enhance Communication with XRAI?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to explore tailored solutions for seamless audio-visual experiences.
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
              <div className="mt-8">
              </div>
            </div>
               <div className="mt-8">
            <div>
                       <a
                  href="/partners"
                  className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Back to Brands
                </a>
            </div>
               </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XraiSolutionsPage;
