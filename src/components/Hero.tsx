import React from 'react';
import { ArrowRight, Sparkles, Eye, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Static background image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/vr.jpg.jpg)', // fixed file name
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 0.8,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse z-0" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white-600 to-red-600 bg-clip-text text-transparent">
                Transforming Business using Advanced Technologies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Bright Business Services specializes in cutting-edge artificial
              intelligence, augmented reality, and virtual reality technologies.
              We partner with industry leaders to deliver innovative solutions
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="/partners"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Brands
              </a>
            </div>
          </div>

          {/* Solid white cards */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">
                    AI Automation
                  </h3>
                  <p className="text-sm text-gray-700">
                    Intelligent automation and machine learning.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">
                    Immersive Tech
                  </h3>
                  <p className="text-sm text-gray-700">
                    Immersive experiences and virtual environments.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">ProAV/UCC</h3>
                  <p className="text-sm text-gray-700">
                    seamless communication, presentation, and collaboration in
                    business environments.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">IIOT</h3>
                  <p className="text-sm text-gray-700">
                    data collection, monitoring, and automation for improved
                    efficiency and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
