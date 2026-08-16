import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Package,
  Cpu,
  Eye,
  Shield,
  BarChart2,
  Server,
  Clock,
  CheckCircle,
  Layout,
  HardHat,
  Brain,
  HeartPulse,
  Stethoscope,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DeepQSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description:
        'AI-powered clinical decision support systems that enhance diagnostic accuracy and treatment planning.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: HeartPulse,
      title: 'Patient Monitoring',
      description:
        'Real-time patient monitoring solutions powered by predictive analytics for proactive care.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Brain,
      title: 'Medical AI Assistants',
      description:
        'Intelligent virtual assistants that help healthcare professionals with documentation and workflows.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Activity,
      title: 'Healthcare Analytics',
      description:
        'Advanced analytics platforms that transform healthcare data into actionable insights.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description:
        'AI solutions designed to meet strict healthcare compliance and data security requirements.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Cpu,
      title: 'Natural Language Processing',
      description:
        'State-of-the-art NLP for processing medical literature and clinical notes.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Server,
      title: 'Healthcare Cloud',
      description:
        'Secure cloud infrastructure designed specifically for healthcare applications.',
      color: 'from-gray-500 to-blue-500',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support for critical healthcare systems.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const deepqProducts = [
    {
      name: 'DeepQ Clinical AI',
      description:
        'Comprehensive AI platform that assists clinicians in diagnosis, treatment recommendations, and patient monitoring.',
      features: [
        'Evidence-Based Recommendations',
        'Real-Time Alerts',
        'Seamless EHR Integration',
        'Continual Learning',
      ],
    },
    {
      name: 'DeepQ Medical Chatbot',
      description:
        'Conversational AI solution that handles patient queries and triage with medical accuracy.',
      features: [
        'Symptom Assessment',
        'Appointment Scheduling',
        'Medication Reminders',
        'Multilingual Support',
      ],
    },
    {
      name: 'DeepQ Analytics',
      description:
        'Advanced analytics platform that transforms healthcare data into predictive insights.',
      features: [
        'Population Health Management',
        'Risk Stratification',
        'Operational Efficiency',
        'Custom Reporting',
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
              <Activity className="w-4 h-4 mr-2" />
              DeepQ Healthcare AI Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DeepQ{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming healthcare with artificial intelligence that enhances
              clinical decision-making, improves patient outcomes, and optimizes
              healthcare workflows.
            </p>
          </div>

          {/* DeepQ Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured DeepQ Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deepqProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-600" />
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
              Healthcare AI{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DeepQ delivers cutting-edge artificial intelligence solutions
              designed specifically for healthcare providers, payers, and
              pharmaceutical companies.
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

      {/* Why Choose DeepQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose DeepQ?
              </h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                DeepQ combines medical expertise with cutting-edge AI technology
                to deliver solutions that enhance clinical outcomes while
                reducing healthcare costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  FDA-Cleared
                </div>
                <div className="text-blue-100">AI Solutions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Medical
                </div>
                <div className="text-blue-100">Expertise Built-In</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Seamless
                </div>
                <div className="text-blue-100">EHR Integration</div>
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
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn how DeepQ's healthcare AI solutions can
              enhance your clinical workflows, improve patient care, and reduce
              operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Request Demo
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Speak to Our Team
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

export default DeepQSolutionsPage;
