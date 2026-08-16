import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Wrench,
  Cpu,
  Eye,
  Shield,
  BarChart2,
  Server,
  Clock,
  CheckCircle,
  Package,
  Layout,
  HardHat,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RobroSystemsSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Factory,
      title: 'Industrial Automation',
      description:
        'Complete automation solutions for manufacturing and industrial processes to improve efficiency and productivity.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Wrench,
      title: 'Custom Machinery',
      description:
        'Tailored machinery solutions designed specifically for your production requirements.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cpu,
      title: 'Control Systems',
      description:
        'Advanced control systems for precise operation monitoring and management.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Eye,
      title: 'Machine Vision',
      description:
        'Vision systems for quality control, inspection, and guidance applications.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Safety Solutions',
      description:
        'Comprehensive safety systems to protect personnel and equipment.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: BarChart2,
      title: 'Data Collection',
      description:
        'Real-time data collection and analysis for process optimization.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Server,
      title: 'Packaging Systems',
      description:
        'Automated packaging solutions for various industries and applications.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support and maintenance services.',
      color: 'from-gray-500 to-blue-500',
    },
  ];

  const robroProducts = [
    {
      name: 'Robotic Automation',
      description:
        'Custom robotic solutions for assembly, material handling, and processing applications.',
      features: [
        'Precision Engineering',
        'Custom Integration',
        'High-Speed Operation',
        'Flexible Configuration',
      ],
    },
    {
      name: 'Packaging Automation',
      description:
        'Complete packaging line solutions for various industries and product types.',
      features: [
        'End-to-End Solutions',
        'High-Speed Packaging',
        'Product Handling',
        'Quality Control',
      ],
    },
    {
      name: 'Custom Machinery',
      description:
        'Purpose-built machines designed for specific manufacturing processes.',
      features: [
        'Turnkey Solutions',
        'Process Optimization',
        'Reliable Performance',
        'Service Support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Factory className="w-4 h-4 mr-2" />
              Robro Systems Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Robro{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineering innovative automation and manufacturing solutions to
              enhance productivity, quality, and efficiency in industrial
              operations.
            </p>
          </div>

          {/* Robro Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Robro Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {robroProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <HardHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
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
              Industrial Automation{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Robro Systems delivers cutting-edge automation solutions that
              transform manufacturing processes and drive operational
              excellence.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
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

      {/* Why Choose Robro */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Robro Systems?
              </h2>
              <p className="text-orange-100 max-w-3xl mx-auto">
                With decades of experience in industrial automation, Robro
                Systems delivers reliable, innovative solutions to optimize your
                manufacturing processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-orange-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  100+
                </div>
                <div className="text-orange-100">Custom Solutions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Expert
                </div>
                <div className="text-orange-100">Engineering Team</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-orange-100">Support</div>
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
              Ready to Automate Your Process?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn how Robro Systems' automation solutions can
              enhance your manufacturing efficiency and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-all"
              >
                Request Consultation
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

export default RobroSystemsSolutionsPage;
