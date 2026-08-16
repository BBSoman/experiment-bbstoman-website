import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Monitor,
  Heart,
  Home,
  Car,
  ShoppingCart,
  Building,
  Palette,
  GraduationCap,
  FlaskConical,
  Tv,
  Zap,
  CheckCircle,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AshtonBentleySolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Monitor,
      title: 'AV Systems for Meeting Spaces',
      description:
        'Comprehensive audio-visual solutions designed for seamless integration in corporate meeting environments.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Smart Collaboration Tools',
      description:
        'Innovative tools that enhance collaboration and communication in hybrid work environments.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Home,
      title: 'Modular Meeting Tables',
      description:
        'Versatile and customizable meeting tables that adapt to various meeting formats and styles.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Car,
      title: 'Integrated AV Solutions',
      description:
        'All-in-one AV systems that simplify setup and operation for any meeting space.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: ShoppingCart,
      title: 'Dynamic Presentation Solutions',
      description:
        'Interactive displays and presentation tools that engage participants and enhance information sharing.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Building,
      title: 'Corporate Event Solutions',
      description:
        'Tailored AV setups for corporate events, conferences, and seminars to ensure impactful presentations.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: Palette,
      title: 'Design-Driven AV Systems',
      description:
        'Stylish AV solutions that complement modern office aesthetics while delivering high performance.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: GraduationCap,
      title: 'Training & Development Tools',
      description:
        'AV systems designed for training environments, enhancing learning experiences through technology.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const ashtonBentleyProducts = [
    {
      name: 'Smart AV Control Systems',
      description:
        'User -friendly control systems that simplify AV management in meeting spaces.',
      features: [
        'Intuitive Interface',
        'Remote Management',
        'Customizable Settings',
        'Seamless Integration',
      ],
    },
    {
      name: 'Flexible Meeting Tables',
      description:
        'Adaptable tables that can be configured for various meeting styles and group sizes.',
      features: [
        'Modular Design',
        'Durable Materials',
        'Easy Reconfiguration',
        'Aesthetic Options',
      ],
    },
    {
      name: 'High-Quality Audio Solutions',
      description:
        'Premium audio systems that deliver crystal-clear sound for all meeting participants.',
      features: [
        'Noise Cancellation',
        '360-Degree Sound',
        'Easy Setup',
        'Scalable Solutions',
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
              Ashton Bentley Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ashton Bentley{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Ashton Bentley's innovative range of AV systems and
              meeting space solutions. From smart collaboration tools to modular
              tables, we are redefining the future of workspaces.
            </p>
          </div>

          {/* Ashton Bentley Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Ashton Bentley Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ashtonBentleyProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Tv className="w-6 h-6 text-blue-600" />
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
              Explore how Ashton Bentley's AV systems and meeting space
              solutions are transforming workplaces and enhancing collaboration
              across industries.
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

      {/* Why Choose Ashton Bentley */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Ashton Bentley?
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Ashton Bentley is a leader in AV solutions, providing innovative
                products that enhance collaboration and productivity in modern
                workspaces.
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
                  100+
                </div>
                <div className="text-blue-100">AV Solutions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Global
                </div>
                <div className="text-blue-100">Market Presence</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-blue-100">Customer Support</div>
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
              Ready to Explore Ashton Bentley Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Ashton Bentley's AV systems and
              meeting space solutions, and how they can enhance your business
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
                Schedule Consultation
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

export default AshtonBentleySolutionsPage;
