import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  UserPlus,
  Calendar,
  FileSignature,
  MessageSquare,
  BarChart2,
  Plug,
  Settings,
  CheckCircle,
  Smartphone,
  ShieldCheck,
  CreditCard,
  Wrench,
  Network,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyautomateSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Property Listing Automation',
      description:
        'Automatically publish and sync listings across platforms like Zillow, Realtor.com, and more. Sync media, update statuses in real-time, and generate SEO-friendly descriptions effortlessly.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: UserPlus,
      title: 'Lead Management & Nurturing',
      description:
        'Capture and qualify leads automatically. Respond instantly via email or SMS, assign leads to agents, and integrate with CRMs like HubSpot and Salesforce to close faster.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Booking & Scheduling',
      description:
        'Enable self-service booking for property viewings with real-time calendar syncing, automated reminders, and virtual tour integrations with Zoom or Google Meet.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileSignature,
      title: 'Document Automation',
      description:
        'Speed up paperwork with auto-generated contracts, e-signature tools like DocuSign, and secure document workflows—all stored safely in the cloud.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: MessageSquare,
      title: 'Tenant & Client Communication',
      description:
        'Automate client updates, send rent reminders, respond to maintenance requests, and broadcast messages via WhatsApp, email, or SMS—effortlessly.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart2,
      title: 'Analytics & Reporting',
      description:
        'Access real-time dashboards for property performance, agent productivity, marketing ROI, and tenant engagement—all in one place.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Plug,
      title: 'Integration Ready',
      description:
        'Connect Property Automate with your existing tools—CRMs, portals, payment gateways, and more. Use Zapier or our open API for custom workflows.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const propertyAutomateProducts = [
    {
      name: 'Smart Property Management',
      description:
        'Comprehensive platform for automating property operations and tenant management',
      features: [
        'Automated Listings',
        'Lead Management',
        'Document Workflow',
        'Communication Hub',
      ],
    },
    {
      name: 'Real Estate CRM Integration',
      description:
        'Seamless integration with popular CRM systems and real estate platforms',
      features: [
        'CRM Sync',
        'Multi-platform Publishing',
        'Lead Tracking',
        'Performance Analytics',
      ],
    },
    {
      name: 'Virtual Tour Platform',
      description:
        'Advanced virtual tour and scheduling system for property viewings',
      features: [
        'Virtual Tours',
        'Online Booking',
        'Calendar Integration',
        'Automated Reminders',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-medium text-orange-700 mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Property Automate Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Property Automate{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Property Automate's comprehensive suite of real estate
              automation solutions. From property listings to tenant management,
              streamline your operations and boost productivity with intelligent
              automation.
            </p>
          </div>

          {/* Property Automate Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Property Automate Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {propertyAutomateProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-orange-600" />
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
              Real Estate{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Automation Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Property Automate's intelligent automation solutions
              are transforming real estate operations and creating new
              efficiencies for property managers, agents, and investors.
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

      {/* Why Choose Property Automate */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Property Automate?
              </h2>
              <p className="text-orange-100 max-w-3xl mx-auto">
                Property Automate delivers cutting-edge real estate automation
                with proven results, helping property professionals save time,
                reduce costs, and increase productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  80%
                </div>
                <div className="text-orange-100">Time Savings</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-orange-100">Platform Integrations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Real-time
                </div>
                <div className="text-orange-100">Sync & Updates</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-orange-100">Automation Support</div>
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
              Ready to Automate Your Real Estate Operations?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Property Automate's solutions and
              how they can transform your real estate business with intelligent
              automation and seamless integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-all"
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

export default PropertyautomateSolutionsPage;
