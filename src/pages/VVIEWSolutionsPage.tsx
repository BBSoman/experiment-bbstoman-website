import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Factory,
  Car,
  Heart,
  Package,
  ShoppingCart,
  BarChart3,
  Plane,
  BookOpen,
  Monitor,
  Eye,
  Zap,
  CheckCircle,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VVIEWSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Search,
      title: 'AI-Powered Vision Systems',
      description:
        "VVIEW's smart vision systems use AI to enable real-time object detection, quality inspection, and process automation across industries.",
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Factory,
      title: 'Industrial Automation',
      description:
        'Optimizes manufacturing with intelligent cameras and sensors for defect detection, counting, alignment, and robotic guidance.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Car,
      title: 'Automotive Solutions',
      description:
        'Advanced driver-assistance systems (ADAS), parking assistance, and in-vehicle monitoring powered by embedded vision and AI.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Heart,
      title: 'Medical Imaging & Diagnostics',
      description:
        'Offers smart imaging solutions for diagnostics, endoscopy, lab automation, and patient monitoring systems.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Package,
      title: 'Logistics & Warehousing',
      description:
        'Enhances package sorting, tracking, and scanning accuracy with high-speed vision recognition systems.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Smart Checkout',
      description:
        'Deploys AI vision for unmanned retail, smart checkout, shelf monitoring, and customer analytics.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Visualization',
      description:
        'Integrates visual data with analytics dashboards for process optimization and decision-making in industrial environments.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Plane,
      title: 'Aerospace & Defense',
      description:
        'Precision vision modules for navigation, surveillance, and component inspection in aerospace and defense applications.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: BookOpen,
      title: 'Research & Innovation',
      description:
        'Collaborates with academic and R&D sectors for custom AI vision models and edge device prototyping.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const vviewProducts = [
    {
      name: 'Video Walls',
      description:
        'From classrooms, meeting spaces, and collaboration suites to mission-critical control rooms, VView puts you in control with its Video Wall solutions.',
      features: [
        'Video Wall Control: Manage multiple hardware controllers and share content in real-time.',
        'Desktop Sharing: Stream desktop content with audio support from any video wall on the network.',
        'Video Wall Streaming: Capture and share video wall content securely to remote locations.',
        'Alerts & War Rooms: Integrate external data sources for real-time alerting and crisis management.',
        'VMS Integration: Manage existing VMS sources directly from the VView Video Wall controller.',
      ],
    },
    {
      name: 'Digital Signage',
      description:
        'Enhance visitor experiences with eye-popping visuals in various environments, from lobbies to museums.',
      features: [
        'Multi-Display: Organize and map content to multiple outputs in real-time.',
        'Multi-Site: Centrally control content across multiple locations for effective communication.',
        'Audience Specific: Distribute the right content at the right time to the right audience.',
        'Real-Time: Roll pre-programmed content or push live data to multiple displays.',
        'Interactive: Combine content output with multi-touch input for engaging experiences.',
      ],
    },
    {
      name: 'Streaming',
      description:
        'Deliver captivating visual experiences and engage audiences with high-quality streaming solutions.',
      features: [
        'Advertising: Centrally manage ad content and live stream to public displays.',
        'Drone Footage: Capture and stream high-resolution video data from drones securely.',
        'Record & Stream: Capture video, audio, and presentations for live streaming.',
        'CDN LiveStream: Stream videos and live event feeds to platforms like YouTube and Twitch.',
        'Capture Anything, Stream Anywhere: Consolidate and output content to various services.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-medium text-cyan-700 mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              VVIEW Technologies Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              VVIEW{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Technologies Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover VVIEW's cutting-edge AI-powered vision systems and smart
              technology solutions. From industrial automation to medical
              imaging, VVIEW is revolutionizing how businesses see and
              understand their world.
            </p>
          </div>

          {/* VVIEW Products Overview */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Featured VVIEW Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vviewProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
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
              Industry{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how VVIEW's AI-powered vision systems and smart
              technologies are transforming industries and creating new
              possibilities for automation and intelligence.
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
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

      {/* Why Choose VVIEW */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose VVIEW Technologies?
              </h2>
              <p className="text-cyan-100 max-w-3xl mx-auto">
                VVIEW delivers cutting-edge AI-powered vision systems with
                unmatched accuracy, reliability, and performance for industrial
                and commercial applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  99.8%
                </div>
                <div className="text-cyan-100">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Real-time
                </div>
                <div className="text-cyan-100">Processing Speed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  AI-Powered
                </div>
                <div className="text-cyan-100">Smart Analytics</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-cyan-100">Technical Support</div>
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
              Ready to Experience VVIEW Solutions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about VVIEW's AI-powered vision systems
              and how they can transform your business operations with
              intelligent automation and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-all"
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

export default VVIEWSolutionsPage;
