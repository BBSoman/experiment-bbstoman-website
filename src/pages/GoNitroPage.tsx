import React from 'react';
import {
  FileText, // Icon for PDF Tools
  Database, // Icon for Document Management
  Link, // Icon for Integrations
  Settings, // Icon for Custom Solutions
  Globe, // Icon for Software Development
  Zap, // Icon for Document Delivery
  Monitor, // Icon for Digital Productivity
  CheckCircle,
  Users,
} from 'lucide-react'; // Relevant icons for Go Nitro solutions
import Header from '../components/Header';
import Footer from '../components/Footer';

const GoNitroPage: React.FC = () => {
  const solutions = [
    {
      icon: FileText, // Icon for PDF Tools
      title: 'PDF Tools',
      description: 'Powerful PDF editing, conversion, and creation tools for efficient document handling.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Database, // Icon for Document Management
      title: 'Document Management',
      description: 'Advanced tools for organizing, storing, and delivering documents across platforms.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Link, // Icon for Integrations
      title: 'Integrations',
      description: 'Seamless integrations with popular apps and systems to enhance productivity.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Settings, // Icon for Custom Solutions
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed to meet unique business requirements.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Globe, // Icon for Software Development
      title: 'Software Development',
      description: 'Comprehensive development expertise for building scalable and innovative applications.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Zap, // Icon for Document Delivery
      title: 'Document Delivery',
      description: 'Optimized delivery networks for fast, secure access to digital documents.',
      color: 'from-cyan-500 to-sky-500',
    },
    {
      icon: Monitor, // Icon for Digital Productivity
      title: 'Digital Productivity',
      description: 'Cutting-edge solutions driving productivity and digital transformation.',
      color: 'from-orange-600 to-amber-600',
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
            Go Nitro Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Go Nitro Innovations
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover innovative PDF and document solutions for seamless digital productivity and management.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Go Nitro Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge features enable efficient document handling, productivity, and digital innovation.
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
              Ready to Transform Productivity with Go Nitro?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch to learn how Go Nitro can elevate your document management and productivity solutions.
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
                href="https://www.gonitro.com/?srsltid=AfmBOorBnOwbPx77w2h4bUEJD0cfHOFEPFdmMR7Z4POssVlefARJ9veq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Visit Go Nitro
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoNitroPage;
