import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Activity,
  Zap,
  AlertTriangle,
  BarChart3,
  Cpu,
  Wrench,
  Factory,
  TrendingUp,
  Shield,
  CheckCircle,
  Network,
  Brain,
  Eye,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NanoPreciseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description:
        'Advanced vibration monitoring and analysis to detect machine anomalies, imbalances, and potential failures before they occur.',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description:
        'AI-powered predictive maintenance solutions that reduce unplanned downtime and optimize maintenance schedules.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: AlertTriangle,
      title: 'Fault Detection',
      description:
        'Real-time fault detection and diagnosis using machine learning algorithms to identify equipment issues early.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Condition Monitoring',
      description:
        'Continuous monitoring of machine health parameters including temperature, vibration, and acoustic emissions.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Analytics',
      description:
        'Machine learning algorithms that analyze sensor data to provide actionable insights and maintenance recommendations.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Wrench,
      title: 'Maintenance Optimization',
      description:
        'Optimize maintenance schedules and resource allocation based on actual machine condition and performance data.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Factory,
      title: 'Industrial IoT Integration',
      description:
        'Seamless integration with existing industrial systems and IoT infrastructure for comprehensive monitoring.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description:
        'Detailed performance analytics and reporting to track equipment efficiency and maintenance ROI.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description:
        'Protect critical assets from unexpected failures with proactive monitoring and early warning systems.',
      color: 'from-gray-500 to-slate-500',
    },
  ];

  const nanoPreciseProducts = [
    {
      name: 'NanoSense Platform',
      description:
        'Comprehensive AI-powered condition monitoring platform for industrial equipment',
      features: [
        'Real-time Monitoring',
        'AI Analytics',
        'Predictive Alerts',
        'Cloud Dashboard',
      ],
    },
    {
      name: 'Vibration Sensors',
      description:
        'Advanced wireless vibration sensors for continuous machine health monitoring',
      features: [
        'Wireless Connectivity',
        'Long Battery Life',
        'High Precision',
        'Easy Installation',
      ],
    },
    {
      name: 'Maintenance Intelligence',
      description: 'AI-driven maintenance optimization and scheduling system',
      features: [
        'Predictive Scheduling',
        'Resource Optimization',
        'Cost Analysis',
        'Performance Tracking',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full text-sm font-medium text-emerald-700 mb-6">
              <Network className="w-4 h-4 mr-2" />
              Nano Precise Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nano Precise{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Nano Precise's AI-powered predictive maintenance and
              condition monitoring solutions. Transform your industrial
              operations with intelligent monitoring that prevents failures
              before they happen.
            </p>
          </div>

          {/* Nano Precise Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured Nano Precise Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nanoPreciseProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
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
              Predictive Maintenance{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Nano Precise's AI-powered condition monitoring and
              predictive maintenance solutions are transforming industrial
              operations and preventing costly equipment failures.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
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

      {/* Why Choose Nano Precise */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Nano Precise?
              </h2>
              <p className="text-emerald-100 max-w-3xl mx-auto">
                Nano Precise delivers cutting-edge AI-powered predictive
                maintenance solutions with proven results, helping industrial
                companies reduce downtime, optimize maintenance, and improve
                operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  95%
                </div>
                <div className="text-emerald-100">Downtime Reduction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  AI-Powered
                </div>
                <div className="text-emerald-100">Machine Learning</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Real-time
                </div>
                <div className="text-emerald-100">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-emerald-100">Technical Support</div>
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
              Ready to Experience Nano Precise Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Nano Precise's AI-powered
              predictive maintenance solutions and how they can transform your
              industrial operations with intelligent condition monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
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

export default NanoPreciseSolutionsPage;
