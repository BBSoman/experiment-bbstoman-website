import React from 'react';
import {
  Brain,
  Zap,
  Users,
  BarChart3,
  Settings,
  Shield,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NapsterSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Agentic AI Workflows',
      description:
        'Deploy intelligent AI agents that autonomously handle complex business workflows and decision-making.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Enterprise Automation',
      description:
        'Automate repetitive tasks and processes across your organization with scalable AI-powered solutions.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'Custom AI Agents',
      description:
        'Build tailored AI agents for your specific business needs with no-code configuration.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: BarChart3,
      title: 'Business Process Intelligence',
      description:
        'Gain deep insights into your operations with AI-driven process analytics and optimization.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Settings,
      title: 'Multi-Modal AI',
      description:
        'Harness text, voice, and vision AI capabilities integrated into unified workflows.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Deploy AI at scale with SOC2 compliance, data privacy, and enterprise governance.',
      color: 'from-slate-500 to-gray-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700 mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Napster AI Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Napster AI
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise AI platform delivering agentic workflows, custom AI agents, 
            and secure automation for business transformation at scale.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Solution Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Napster AI delivers comprehensive enterprise solutions designed for scalability, 
              security, and measurable business impact.
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
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
              Ready to Power Your Business with Enterprise AI?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how Napster AI can automate your operations, enhance customer experiences, 
              and unlock new business opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-purple-200 text-purple-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-400 hover:bg-purple-50 transition-all"
              >
                Request a Demo
              </a>
            </div>
            <div className="mt-8">
              <a
                href="/partners"
                className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-2 rounded-lg font-semibold hover:from-purple-200 hover:to-pink-200 transition-all"
              >
                ← Back to Brands
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NapsterSolutionsPage;
