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

const BOESolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Monitor,
      title: 'Display Panels & Screens',
      description:
        'Leading provider of LCD, OLED, and flexible display panels for smartphones, tablets, TVs, monitors, and industrial applications.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Smart Healthcare',
      description:
        'Offers digital medical solutions including remote diagnostics, health monitoring systems, and AI-powered imaging tools.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Home,
      title: 'IoT Smart Systems',
      description:
        'Deploys IoT-based solutions for smart homes, smart retail, and smart cities using integrated displays and sensing technology.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Car,
      title: 'Automotive Displays',
      description:
        'Supplies advanced dashboard, head-up displays (HUD), and in-car infotainment systems for modern smart vehicles.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: ShoppingCart,
      title: 'Smart Retail & Advertising',
      description:
        'Enables dynamic digital signage, shelf displays, and interactive kiosks for enhanced in-store customer engagement.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Building,
      title: 'Industrial & Commercial Displays',
      description:
        'High-performance, durable display panels for ATMs, control rooms, kiosks, and factory automation interfaces.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: Palette,
      title: 'Creative & Art Displays',
      description:
        'Ultra-high-resolution displays tailored for art galleries, museums, and digital exhibitions with lifelike clarity and color accuracy.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: GraduationCap,
      title: 'Smart Education',
      description:
        'Interactive whiteboards and digital blackboards that enhance classroom collaboration and remote learning experiences.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FlaskConical,
      title: 'R&D & Innovation Platforms',
      description:
        'Develops next-gen display and sensor technologies such as MicroLED, MiniLED, and flexible/foldable screens for future devices.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const boeProducts = [
    {
      name: 'OLED Display Technology',
      description:
        'Advanced organic light-emitting diode displays with superior color accuracy and contrast',
      features: [
        'True Black Levels',
        'Wide Color Gamut',
        'Fast Response Time',
        'Energy Efficient',
      ],
    },
    {
      name: 'Flexible Display Solutions',
      description:
        'Bendable and foldable display technology for next-generation devices',
      features: [
        'Bendable Design',
        'Durable Materials',
        'Innovative Form Factors',
        'Future-Ready',
      ],
    },
    {
      name: 'Smart Manufacturing Systems',
      description:
        'Integrated IoT and AI-powered manufacturing solutions for Industry 4.0',
      features: [
        'AI Integration',
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Quality Control',
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
              BOE Technology Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              BOE{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover BOE's comprehensive range of display technology and smart
              solutions. From cutting-edge OLED panels to IoT systems, BOE is
              driving innovation across industries worldwide.
            </p>
          </div>

          {/* BOE Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured BOE Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boeProducts.map((product, index) => (
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
              Explore how BOE's display technology and smart solutions are
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

      {/* Why Choose BOE */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose BOE Technology?
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                BOE is a global leader in display technology with decades of
                innovation, delivering cutting-edge solutions that power the
                world's most advanced devices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  30+
                </div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  8K
                </div>
                <div className="text-blue-100">Ultra HD Displays</div>
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
              Ready to Explore BOE Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about BOE's display technology and smart
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

export default BOESolutionsPage;
