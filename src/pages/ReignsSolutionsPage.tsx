import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  HardDrive,
  Shield,
  Zap,
  Cpu,
  Wifi,
  Server,
  Clock,
  CheckCircle,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReignsSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Globe,
      title: 'Global Internet Services',
      description:
        'Reliable high-speed internet connectivity solutions for businesses and communities worldwide.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: HardDrive,
      title: 'Enterprise Data Solutions',
      description:
        'Secure and scalable data management solutions for businesses of all sizes.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description:
        'Comprehensive security solutions to protect your digital assets and infrastructure.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Hybrid Cloud Infrastructure',
      description:
        'Flexible cloud solutions combining public and private cloud environments.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description:
        'Intelligent automation solutions powered by artificial intelligence.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Wifi,
      title: 'Wireless Connectivity',
      description:
        'Advanced wireless solutions for seamless connectivity anywhere.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Server,
      title: 'Data Center Solutions',
      description:
        'State-of-the-art data center services with maximum uptime guarantees.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: '24/7 Technical Support',
      description:
        'Round-the-clock expert support for all your technology needs.',
      color: 'from-gray-500 to-blue-500',
    },
  ];

  const reignsProducts = [
    {
      name: 'Reign Enterprise Internet',
      description:
        'High-performance internet solutions for businesses with guaranteed uptime.',
      features: [
        'Dedicated Bandwidth',
        '99.99% Uptime',
        'Enterprise-Grade Security',
        'Global Connectivity',
      ],
    },
    {
      name: 'Reign Cloud Solutions',
      description:
        'Flexible cloud services tailored to your business requirements.',
      features: [
        'Public & Private Cloud',
        'Hybrid Solutions',
        'AI Integration',
        'Scalable Infrastructure',
      ],
    },
    {
      name: 'Reign Cybersecurity Suite',
      description:
        'Comprehensive protection for your digital assets and network.',
      features: [
        'Threat Detection',
        '24/7 Monitoring',
        'DDoS Protection',
        'Compliance Management',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              ReignNet Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ReignNet{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powering the digital transformation of businesses worldwide with
              reliable internet, cloud, and cybersecurity solutions you can
              trust.
            </p>
          </div>

          {/* ReignNet Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured ReignNet Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reignsProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <HardDrive className="w-6 h-6 text-blue-600" />
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
              Internet & Technology{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ReignNet delivers comprehensive technology solutions that help
              businesses connect, secure, and optimize their digital operations.
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

      {/* Why Choose ReignNet */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ReignNet?
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                With years of experience in the technology sector, ReignNet
                delivers reliable, secure, and innovative solutions for
                businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  15+
                </div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  99.99%
                </div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Global
                </div>
                <div className="text-blue-100">Network</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-blue-100">Support</div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn how ReignNet's technology solutions can power
              your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Schedule Demo
              </Link>
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

export default ReignsSolutionsPage;
