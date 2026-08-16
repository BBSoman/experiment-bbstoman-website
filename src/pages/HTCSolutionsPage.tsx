import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Gamepad2,
  Heart,
  Factory,
  GraduationCap,
  Building,
  ShoppingBag,
  Plane,
  BarChart3,
  Megaphone,
  Headphones,
  Eye,
  Zap,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HTCSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Gamepad2,
      title: 'Gaming & Entertainment',
      description:
        'Immerse players in high-fidelity VR games and virtual experiences, offering real-time interaction, 3D spatial audio, and intuitive controls.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Healthcare & Therapy',
      description:
        'Used for pain management, physical therapy, mental health treatment, and surgical simulation to improve patient outcomes and training efficiency.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Factory,
      title: 'Industrial Training',
      description:
        'Simulate complex machinery and hazardous environments for workforce training without real-world risks.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: GraduationCap,
      title: 'Education & eLearning',
      description:
        'Bring subjects to life with interactive learning environments in history, science, engineering, and more, enhancing student engagement.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building,
      title: 'Architecture & Design',
      description:
        'Visualize building plans in VR before construction. Walk through designs and make real-time adjustments in a collaborative space.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Virtual Shopping',
      description:
        'Enable customers to experience products in a 3D environment, try on virtual items, or explore store layouts from anywhere in the world.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Plane,
      title: 'Travel & Tourism',
      description:
        'Offer virtual travel experiences or hotel tours to inspire bookings and showcase destinations before customers visit.',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: BarChart3,
      title: 'Research & Data Visualization',
      description:
        'Use immersive 3D models to explore complex data sets and conduct behavioral or scientific research in controlled VR settings.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Events',
      description:
        'Create engaging brand activations and virtual booths at trade shows, conferences, or experiential marketing campaigns.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const htcProducts = [
    {
      name: 'HTC Vive Pro 2',
      description:
        'Professional-grade VR headset with 5K resolution and 120Hz refresh rate',
      features: [
        '5K Resolution',
        '120Hz Refresh Rate',
        'SteamVR Tracking 2.0',
        'Professional Audio',
      ],
    },
    {
      name: 'HTC Vive Focus 3',
      description:
        'All-in-one business VR headset designed for enterprise applications',
      features: [
        'Standalone Design',
        'Business-Ready',
        'Hand Tracking',
        'Enterprise Management',
      ],
    },
    {
      name: 'HTC Vive Cosmos',
      description:
        'Modular VR system with inside-out tracking and flip-up design',
      features: [
        'Inside-Out Tracking',
        'Modular Design',
        'Flip-Up Visor',
        'Easy Setup',
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-700 mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              HTC Vive Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HTC Vive{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                VR Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your business with HTC Vive's cutting-edge virtual
              reality technology. From enterprise training to immersive
              entertainment, discover how VR can revolutionize your industry.
            </p>
          </div>

          {/* HTC Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured HTC Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {htcProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-500 mr-2" />
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
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how HTC Vive VR technology is transforming industries and
              creating new possibilities for businesses across various sectors.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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

      {/* Why Choose HTC Vive */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose HTC Vive?
              </h2>
              <p className="text-green-100 max-w-3xl mx-auto">
                HTC Vive delivers industry-leading VR technology with unmatched
                precision, reliability, and performance for professional
                applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  99.9%
                </div>
                <div className="text-green-100">Tracking Accuracy</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  120Hz
                </div>
                <div className="text-green-100">Refresh Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  5K
                </div>
                <div className="text-green-100">Resolution</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-green-100">Enterprise Support</div>
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
              Ready to Experience HTC Vive?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about HTC Vive solutions and how they can
              transform your business operations and customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
            <div className="mt-8">
              <Link
                to="/partners"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back to Partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HTCSolutionsPage;
