import React from 'react';
import {
  Wifi,
  MonitorSmartphone,
  LayoutDashboard,
  Building2,
  AppWindow,
  TabletSmartphone,
  Tv2,
  BookOpen,
  Layers,
  PanelTopOpen,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AilaSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: LayoutDashboard,
      title: 'Digital Signage',
      description:
        'High-brightness, super slim, anti-glare signage displays with Android/Monitor OS, suitable for 24/7 operations and various size formats.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: MonitorSmartphone,
      title: 'IFPD (Interactive Displays)',
      description:
        'Advanced 4K interactive panels with Android OS, built-in camera/mic, 20-point touch, ideal for education and meetings.',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Building2,
      title: 'OOH (Outdoor Displays)',
      description:
        'High-brightness, weather-resistant free-standing/wall-mounted displays with fan or AC cooling and IP56/IP65 protection.',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: PanelTopOpen,
      title: 'Special-shaped Displays',
      description:
        'Custom ratio displays with various dimensions and high brightness, ideal for creative commercial applications.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Tv2,
      title: 'Free Standing Displays',
      description:
        'Multi-size kiosk displays with Android/Windows OS, multiple touch options, and customizable features.',
      color: 'from-purple-600 to-violet-600',
    },
    {
      icon: AppWindow,
      title: 'Monitor Displays',
      description:
        'Professional office and gaming monitors with high refresh rates, HDMI/Type-C inputs, and UHD options.',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      icon: TabletSmartphone,
      title: 'Elevator Screens',
      description:
        'Android-based slim design screens for elevators, with low power, dual display, and customizable content publishing.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: BookOpen,
      title: 'Electronic Paper Displays',
      description:
        'Battery-powered, dual-screen e-paper displays with color options and WiFi/NFC, ideal for labels and signage.',
      color: 'from-lime-500 to-green-500',
    },
    {
      icon: Layers,
      title: 'Video Wall Displays',
      description:
        'Ultra-narrow bezel displays with loop support and auto color calibration for immersive video wall experiences.',
      color: 'from-indigo-700 to-fuchsia-700',
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
            AILA Display Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              AILA’s Display Innovations
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive range of cutting-edge commercial display
            technologies—from interactive touch panels to weather-resistant
            outdoor signage.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Display Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AILA’s display solutions cover a wide spectrum of applications,
              designed for high performance, visual impact, and long-term
              durability.
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
              Ready to Upgrade with AILA Displays?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to explore tailored solutions for digital
              signage, interactive panels, smart advertising, and more.
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

export default AilaSolutionsPage;
