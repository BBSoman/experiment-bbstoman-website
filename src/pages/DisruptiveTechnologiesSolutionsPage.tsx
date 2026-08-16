import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Thermometer, Droplets, Activity, Users, Building, Factory, TreePine, Shield, CheckCircle, Zap, Eye, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DisruptiveTechnologiesSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Thermometer,
      title: 'Temperature Monitoring',
      description: 'Ultra-small wireless temperature sensors for precise environmental monitoring in buildings, cold chains, and industrial processes.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Activity,
      title: 'Proximity Detection',
      description: 'Advanced proximity sensors that detect presence and movement for space utilization, occupancy tracking, and security applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Droplets,
      title: 'Humidity & Moisture Sensing',
      description: 'Precise humidity and water leak detection sensors for facility management, agriculture, and environmental monitoring.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'People Counting',
      description: 'Accurate people counting and occupancy monitoring for retail analytics, building management, and space optimization.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Building,
      title: 'Smart Building Solutions',
      description: 'Comprehensive building automation with wireless sensors for HVAC optimization, energy management, and tenant comfort.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Factory,
      title: 'Industrial Monitoring',
      description: 'Robust wireless sensors for industrial environments, monitoring equipment performance, environmental conditions, and safety.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: TreePine,
      title: 'Environmental Monitoring',
      description: 'Long-range environmental sensors for outdoor monitoring, agriculture, forestry, and climate research applications.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Asset Tracking',
      description: 'Secure asset tracking and monitoring solutions for valuable equipment, inventory management, and theft prevention.',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Wifi,
      title: 'Wireless Infrastructure',
      description: 'Ultra-low power wireless communication technology with years of battery life and extensive range coverage.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const disruptiveProducts = [
    {
      name: 'Wireless Sensors',
      description: 'World\'s smallest wireless sensors with up to 15-year battery life',
      features: ['15-year Battery Life', 'Cloud Connectivity', 'Real-time Data', 'Easy Installation']
    },
    {
      name: 'DT Cloud Platform',
      description: 'Comprehensive cloud platform for sensor data management and analytics',
      features: ['Real-time Dashboard', 'API Integration', 'Data Analytics', 'Alert System']
    },
    {
      name: 'Studio Development Kit',
      description: 'Complete development platform for building custom IoT solutions',
      features: ['Custom Applications', 'SDK Tools', 'Integration APIs', 'Developer Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full text-sm font-medium text-slate-700 mb-6">
              <Wifi className="w-4 h-4 mr-2" />
              Disruptive Technologies Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Disruptive Technologies{' '}
              <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Disruptive Technologies' revolutionary wireless sensor solutions. 
              The world's smallest wireless sensors with unprecedented battery life, enabling seamless IoT deployments for smart buildings, environmental monitoring, and industrial applications.
            </p>
          </div>

          {/* Disruptive Technologies Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Featured Disruptive Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {disruptiveProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                    <Wifi className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-slate-500 mr-2" />
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
              Wireless Sensor{' '}
              <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how Disruptive Technologies' ultra-small wireless sensors are transforming industries 
              with unprecedented battery life, easy deployment, and comprehensive monitoring capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors">
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

      {/* Why Choose Disruptive Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Disruptive Technologies?
              </h2>
              <p className="text-slate-100 max-w-3xl mx-auto">
                Disruptive Technologies delivers the world's smallest wireless sensors with revolutionary battery life, 
                enabling seamless IoT deployments that were previously impossible with traditional sensor technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15 Years</div>
                <div className="text-slate-100">Battery Life</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">World's</div>
                <div className="text-slate-100">Smallest Sensors</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Cloud</div>
                <div className="text-slate-100">Connected</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-100">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary Sensor Technology
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience the future of wireless sensing with technology that redefines what's possible in IoT deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ultra-Low Power</h3>
                <p className="text-gray-600">Revolutionary power management enables 15+ year battery life without maintenance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smallest Form Factor</h3>
                <p className="text-gray-600">World's smallest wireless sensors that can be deployed anywhere without visual impact.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Insights</h3>
                <p className="text-gray-600">Instant data transmission and cloud analytics for immediate actionable insights.</p>
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
              Ready to Deploy Disruptive Technologies?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about Disruptive Technologies' wireless sensor solutions 
              and how they can transform your monitoring and automation capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a href="/contact" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-600 hover:text-slate-600 transition-all">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisruptiveTechnologiesSolutionsPage;