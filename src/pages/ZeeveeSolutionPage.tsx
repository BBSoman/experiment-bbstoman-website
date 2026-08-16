import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Activity,
  Zap,
  AlertTriangle,
  BarChart3,
  Cpu,
  Wrench,
  Factory,
  TrendingUp,
  Shield,
  CheckCircle,
  Network,
  Eye,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ZeeVeeSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Activity,
      title: 'AV over IP Solutions',
      description:
        'Innovative solutions for distributing audio and video over IP networks, ensuring high-quality streaming and reliability.',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Zap,
      title: 'Streaming Technology',
      description:
        'Advanced streaming technology that delivers high-definition video content seamlessly across various platforms.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: AlertTriangle,
      title: 'Content Management',
      description:
        'Robust content management systems that simplify the organization and distribution of media assets.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Network Monitoring',
      description:
        'Comprehensive monitoring solutions to ensure optimal performance and reliability of AV networks.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Cpu,
      title: 'Integration Solutions',
      description:
        'Seamless integration with existing AV systems and infrastructure for enhanced functionality.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description:
        'Expert technical support to assist with installation, configuration, and troubleshooting of AV systems.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Factory,
      title: 'Scalable Solutions',
      description:
        'Flexible and scalable AV solutions that grow with your business needs and technology advancements.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description:
        'Detailed analytics and reporting to track system performance and optimize AV operations.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const zeeveeProducts = [
    {
      name: 'ZeeVee AV over IP',
      description:
        'High-performance AV over IP solutions for seamless video distribution.',
      features: [
        '4K Video Support',
        'Low Latency',
        'Scalable Architecture',
        'Easy Deployment',
      ],
    },
    {
      name: 'ZeeVee Streaming Solutions',
      description:
        'Robust streaming solutions for delivering high-quality content across networks.',
      features: [
        'Multi-Platform Support',
        'Adaptive Bitrate Streaming',
        'Content Security',
        'User -Friendly Interface',
      ],
    },
    {
      name: 'ZeeVee Content Management',
      description:
        'Comprehensive content management system for organizing and distributing media assets.',
      features: [
        'Centralized Control',
        'User  Permissions',
        'Asset Tagging',
        'Reporting Tools',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full text-sm font-medium text-emerald-700 mb-6">
              <Network className="w-4 h-4 mr-2" />
              ZeeVee Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ZeeVee{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover ZeeVee's innovative AV over IP solutions and streaming
              technology. Transform your audio and video distribution with
              high-quality, reliable systems.
            </p>
          </div>

          {/* ZeeVee Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured ZeeVee Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {zeeveeProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
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
              AV over IP{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how ZeeVee's AV over IP solutions and streaming technology
              are transforming media distribution and enhancing operational
              efficiency.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
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

      {/* Why Choose ZeeVee */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ZeeVee?
              </h2>
              <p className="text-emerald-100 max-w-3xl mx-auto">
                ZeeVee provides cutting-edge AV over IP solutions with proven
                performance, helping businesses enhance their media distribution
                and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  10+
                </div>
                <div className="text-emerald-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  4K
                </div>
                <div className="text-emerald-100">Video Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Global
                </div>
                <div className="text-emerald-100">Market Leader</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-emerald-100">Technical Support</div>
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
              Ready to Experience ZeeVee Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about ZeeVee's AV over IP solutions and
              streaming technology and how they can enhance your media
              distribution operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
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

export default ZeeVeeSolutionsPage;
