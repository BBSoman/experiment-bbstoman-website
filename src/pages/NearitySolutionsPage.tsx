import React from 'react';
import {
  CheckCircle,
  MapPin,
  Eye,
  Zap,
  Users,
  Globe,
  Glasses,
  ArrowLeftRight,
  Settings,
  Cast,
  Monitor,
} from 'lucide-react'; // Relevant icons for Nearity solutions
import Header from '../components/Header';
import Footer from '../components/Footer';

const NearitySolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CheckCircle, // Icon for High Precision
      title: 'High Precision',
      description: 'Advanced spatial computing for accurate proximity detection and mapping.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: MapPin, // Icon for Proximity Detection
      title: 'Proximity Detection',
      description: 'Real-time detection of nearby devices and users for seamless interactions.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Eye, // Icon for AR Integration
      title: 'AR Integration',
      description: 'Enhance augmented reality experiences with spatial awareness technology.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Zap, // Icon for Location-Based Services
      title: 'Location-Based Services',
      description: 'Deliver personalized content and services based on precise location data.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Globe, // Icon for Spatial Mapping
      title: 'Spatial Mapping',
      description: 'Create detailed 3D maps of environments for immersive applications.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Glasses, // Icon for VR/AR Enhancements
      title: 'VR/AR Enhancements',
      description: 'Boost virtual and augmented reality with proximity-based features.',
      color: 'from-cyan-500 to-sky-500',
    },
    {
      icon: ArrowLeftRight, // Icon for Multi-Device Sync
      title: 'Multi-Device Sync',
      description: 'Synchronize experiences across multiple devices in real-time.',
      color: 'from-orange-600 to-amber-600',
    },
    {
      icon: Settings, // Icon for Customizable Solutions
      title: 'Customizable Solutions',
      description: 'Tailor spatial computing tools to fit specific business needs.',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Cast, // Icon for Immersive Streaming
      title: 'Immersive Streaming',
      description: 'Stream spatial data for enhanced remote collaboration and experiences.',
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
            Nearity Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nearity Innovations
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover advanced spatial computing solutions for proximity-based technology and immersive experiences.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spatial Computing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge features enable precise spatial awareness and proximity-driven interactions.
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
              Ready to Transform Experiences with Nearity?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch to learn how Nearity can elevate your spatial computing and proximity-based solutions.
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

export default NearitySolutionsPage;
