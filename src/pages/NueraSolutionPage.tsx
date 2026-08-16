import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Phone, Cloud, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NueraSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Phone,
      title: 'VoIP Solutions',
      description:
        'Advanced Voice-over-IP products for seamless communication across networks.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Hosted business services that enhance collaboration and connectivity.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description:
        'Robust security features to protect your communications and data.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Monitor,
      title: 'Unified Communications',
      description:
        'Integrating voice, video, and messaging for a complete communication experience.',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  const nueraProducts = [
    {
      name: 'High-Definition Voice Technology',
      description:
        'Ensures excellent sound quality for a superior communication experience.',
      features: [
        'Crystal Clear Audio',
        'Low Latency',
        'Wideband Voice',
        'Enhanced User Experience',
      ],
    },
    {
      name: 'Converged VoIP Solutions',
      description:
        'Combines voice and data networking for efficient communication.',
      features: [
        'All-IP Networks',
        'Scalable Solutions',
        'Flexible Deployment',
        'Cost-Effective',
      ],
    },
    {
      name: 'Contact Center Solutions',
      description:
        'Advanced tools for managing customer interactions and support.',
      features: [
        'Omni-Channel Support',
        'Real-Time Analytics',
        'Customizable Workflows',
        'AI Integration',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Nuera Communications
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuera{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Communications
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Nuera's comprehensive range of VoIP products and
              solutions. From advanced voice technology to unified
              communications, Nuera is transforming the way businesses
              communicate.
            </p>
          </div>

          {/* Nuera Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Nuera Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nueraProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
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
              Industry{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Nuera's VoIP technology and solutions are
              revolutionizing industries and creating new possibilities for
              businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

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

      {/* Why Choose Nuera */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Nuera Communications?
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Nuera is a leader in VoIP technology with a commitment to
                innovation, delivering solutions that enhance communication for
                businesses globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  20+
                </div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  HD
                </div>
                <div className="text-blue-100">Voice Quality</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Global
                </div>
                <div className="text-blue-100">Market Leader</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-blue-100">Technical Support</div>
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
              Ready to Explore Nuera Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Nuera's VoIP technology and
              solutions, and how they can enhance your products and business
              operations.
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
                Schedule Demo
              </a>
            </div>
            <div className="mt-8">
              <Link
                to="/partners"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back to Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NueraSolutionsPage;
