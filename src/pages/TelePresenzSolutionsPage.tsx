import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Headphones,
  Eye,
  Wrench,
  GraduationCap,
  Video,
  Users,
  Zap,
  CheckCircle,
  Monitor,
  Smartphone,
  Cloud,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TelePresenzSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Headphones,
      title: 'Remote Expert Assistance',
      description:
        'Connect field technicians with remote experts via live video and AR tools to resolve issues faster.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Eye,
      title: 'Augmented Reality Collaboration',
      description:
        'Overlay visual instructions on real-world environments for hands-free collaboration and guidance.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Wrench,
      title: 'Field Service Operations',
      description:
        'Streamline maintenance, inspection, and repair tasks with digital workflows and live support.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Training & Knowledge Transfer',
      description:
        'Record sessions and deliver step-by-step instructions to onboard and upskill employees efficiently.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Video,
      title: 'Live Video Collaboration',
      description:
        'High-quality video conferencing with screen sharing, annotation tools, and multi-participant support.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration Platform',
      description:
        'Unified workspace for teams to collaborate, share knowledge, and manage projects remotely.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Monitor,
      title: 'Digital Workspace Solutions',
      description:
        'Virtual workspaces that enable seamless remote collaboration and productivity enhancement.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Experience',
      description:
        'Access all telepresence features on mobile devices with optimized interfaces for field work.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Infrastructure',
      description:
        'Scalable cloud platform ensuring reliable connectivity and data security for all communications.',
      color: 'from-gray-500 to-slate-500',
    },
  ];

  const telePresenzProducts = [
    {
      name: 'AR Remote Assistance',
      description:
        'Advanced augmented reality platform for real-time remote expert guidance',
      features: [
        'AR Overlays',
        'Live Video Support',
        'Voice Communication',
        'Session Recording',
      ],
    },
    {
      name: 'Collaboration Suite',
      description:
        'Comprehensive telepresence platform for team collaboration and communication',
      features: [
        'Multi-party Calls',
        'Screen Sharing',
        'File Transfer',
        'Digital Whiteboard',
      ],
    },
    {
      name: 'Training Platform',
      description:
        'Interactive training and knowledge transfer system with immersive experiences',
      features: [
        'Interactive Tutorials',
        'Progress Tracking',
        'Skill Assessment',
        'Knowledge Base',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full text-sm font-medium text-pink-700 mb-6">
              <Video className="w-4 h-4 mr-2" />
              TelePresenz Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TelePresenz{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover TelePresenz's advanced telepresence and remote
              collaboration technology solutions. Empowering your teams with
              AR-enabled remote collaboration and operational excellence.
            </p>
          </div>

          {/* TelePresenz Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured TelePresenz Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {telePresenzProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
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
              Telepresence{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how TelePresenz's advanced telepresence and remote
              collaboration technologies are transforming how teams work
              together and enabling seamless remote operations across
              industries.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
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

      {/* Why Choose TelePresenz */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose TelePresenz?
              </h2>
              <p className="text-pink-100 max-w-3xl mx-auto">
                TelePresenz delivers cutting-edge telepresence technology with
                proven results, enabling seamless remote collaboration and
                enhancing operational efficiency across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  99.9%
                </div>
                <div className="text-pink-100">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  4K
                </div>
                <div className="text-pink-100">Video Quality</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Real-time
                </div>
                <div className="text-pink-100">AR Collaboration</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-pink-100">Technical Support</div>
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
              Ready to Experience TelePresenz?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about TelePresenz's telepresence
              solutions and how they can transform your remote collaboration and
              operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-pink-600 hover:text-pink-600 transition-all"
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

export default TelePresenzSolutionsPage;
