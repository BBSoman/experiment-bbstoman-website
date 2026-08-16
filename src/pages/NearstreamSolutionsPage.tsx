import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Video, Network, Radio, Activity, Users, Building, Factory, TreePine, Shield, CheckCircle, Zap, Eye, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NearstreamSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Video,
      title: 'Live Event Streaming',
      description: 'High-quality, low-latency live streaming for events, conferences, and broadcasts with global reach and interactive features.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Real-Time Data Broadcasting',
      description: 'Seamless broadcasting of real-time data streams for analytics, monitoring, and decision-making across industries.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Radio,
      title: 'Media Content Distribution',
      description: 'Efficient distribution of media content to multiple platforms, ensuring high availability and adaptive bitrate streaming.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Interactive Streaming',
      description: 'Engage audiences with interactive features like live chat, polls, and real-time feedback during streams.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Building,
      title: 'Enterprise Streaming Solutions',
      description: 'Scalable streaming platforms for corporate communications, training, and internal broadcasts.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Factory,
      title: 'Industrial Data Streaming',
      description: 'Real-time streaming of industrial data for IoT applications, predictive maintenance, and operational insights.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: TreePine,
      title: 'Environmental Data Streaming',
      description: 'Continuous streaming of environmental data for research, agriculture, and climate monitoring.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Secure Content Delivery',
      description: 'Protected streaming with encryption, DRM, and secure access controls for sensitive media and data.',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Wifi,
      title: 'Global CDN Integration',
      description: 'Integrated content delivery networks for worldwide streaming with minimal latency and high reliability.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const nearstreamProducts = [
    {
      name: 'Live Streaming Platform',
      description: 'End-to-end platform for broadcasting live events with ultra-low latency and multi-device support.',
      features: ['Ultra-Low Latency', 'Multi-Platform Broadcasting', 'Interactive Tools', 'Analytics Dashboard']
    },
    {
      name: 'Data Streaming Suite',
      description: 'Comprehensive suite for real-time data streaming and processing across various data sources.',
      features: ['Real-Time Processing', 'API Integration', 'Scalable Architecture', 'Customizable Pipelines']
    },
    {
      name: 'Media Delivery Engine',
      description: 'Powerful engine for distributing media content with adaptive streaming and global reach.',
      features: ['Adaptive Bitrate', 'Global CDN', 'Content Protection', 'Performance Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full text-sm font-medium text-slate-700 mb-6">
              <Video className="w-4 h-4 mr-2" />
              Nearstream Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nearstream{' '}
              <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Nearstream's advanced streaming solutions for real-time data and media delivery. 
              Revolutionize your streaming capabilities with ultra-low latency, scalable platforms, and seamless content distribution for live events, data broadcasting, and more.
            </p>
          </div>

          {/* Nearstream Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Featured Nearstream Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nearstreamProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Streaming{' '}
              <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Nearstream's streaming solutions are transforming industries 
              with real-time processing, global distribution, and interactive capabilities for data and media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors">
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

      {/* Why Choose Nearstream */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Nearstream?
              </h2>
              <p className="text-slate-100 max-w-3xl mx-auto">
                Nearstream delivers cutting-edge streaming technology with ultra-low latency and scalable solutions, 
                enabling real-time data and media delivery that powers modern applications and global connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Ultra-Low</div>
                <div className="text-slate-100">Latency</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Global</div>
                <div className="text-slate-100">Reach</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Real-Time</div>
                <div className="text-slate-100">Processing</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Scalable</div>
                <div className="text-slate-100">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary Streaming Technology
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience the future of streaming with technology that delivers unparalleled real-time performance and content distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ultra-Low Latency</h3>
                <p className="text-gray-600">Near-instantaneous streaming ensures real-time interactions without delays.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Scalability</h3>
                <p className="text-gray-600">Seamlessly scale to millions of viewers with integrated CDN and cloud infrastructure.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Instant insights and analytics for optimizing streams and engaging audiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Stream with Nearstream?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Nearstream's streaming solutions 
              and how they can enhance your real-time data and media delivery capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a href="/contact" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-600 hover:text-slate-600 transition-all">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NearstreamSolutionsPage;
