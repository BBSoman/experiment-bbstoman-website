import React from 'react';
import {
  Wifi,
  Globe,
  Layers,
  Monitor,
  AppWindow,
  TabletSmartphone,
  Video,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VizzioSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Globe,
      title: '3D City Modeling',
      description:
        'Create detailed 3D models of urban environments to visualize and analyze city planning and development.',
      color: 'from-blue-500 to-green-500',
    },
    {
      icon: Layers,
      title: 'Geospatial Data Analysis',
      description:
        'Utilize advanced geospatial data analytics to gain insights into urban dynamics and infrastructure.',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Monitor,
      title: 'AI-Powered Solutions',
      description:
        'Leverage AI technologies to enhance decision-making processes in urban planning and management.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: AppWindow,
      title: 'Smart City Solutions',
      description:
        'Implement smart city technologies to improve urban living and optimize resource management.',
      color: 'from-purple-600 to-violet-600',
    },
    {
      icon: TabletSmartphone,
      title: 'Interactive Urban Dashboards',
      description:
        'Develop interactive dashboards for real-time monitoring and management of urban systems.',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      icon: Video,
      title: 'Virtual Tours',
      description:
        'Create immersive virtual tours of urban spaces to engage stakeholders and the public.',
      color: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full text-sm font-medium text-slate-700 mb-6">
            <Wifi className="w-4 h-4 mr-2" />
            Vizzio Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              Vizzio’s Innovative Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive range of AI-powered solutions and 3D
            digital twins designed to enhance urban environments.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solution Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vizzio’s solutions cover a wide spectrum of applications, designed
              for high performance and urban impact.
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Urban Environment with Vizzio?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to explore tailored solutions for smart cities,
              urban planning, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-600 hover:text-slate-600 transition-all"
              >
                Request a Demo
              </a>
            </div>
            <div className="mt-8">
              <a
                href="/partners"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back to Brands
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VizzioSolutionsPage;
