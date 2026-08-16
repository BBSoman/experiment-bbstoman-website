import React from 'react';
import { Brain, Eye, Zap, Lightbulb, ComputerIcon, Video } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description:
        'Advanced AI solutions including machine learning, natural language processing, and predictive analytics to automate and optimize your business processes.',
      features: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Predictive Analytics',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'ai.jpg',
    },
    {
      icon: Eye,
      title: 'Augmented Reality',
      description:
        'Immersive AR experiences that blend digital content with the real world, enhancing customer engagement and operational efficiency.',
      features: [
        'AR Apps',
        'Training Simulations',
        'Interactive Displays',
        'Product Visualization',
      ],
      gradient: 'from-purple-500 to-pink-500',
      image: '/women.png', // Must be in public/
    },
    {
      icon: Zap,
      title: 'Virtual Reality',
      description:
        'Cutting-edge VR solutions for training, visualization, and entertainment that transport users to entirely new digital environments.',
      features: [
        'VR Training',
        'Virtual Showrooms',
        'Immersive Experiences',
        '3D Visualization',
      ],
      gradient: 'from-green-500 to-teal-500',
      image: 'htcvr.png',
    },
    {
      icon: ComputerIcon,
      title: 'Industrial IoT',
      description:
        'Innovative IIoT solutions integrating smart sensors, data analytics, and real-time monitoring to enhance operational efficiency, safety, and productivity in industrial environments.',
      features: [
        'Smart Sensors',
        'Edge Computing',
        'Real-Time Monitoring',
        'Predictive Maintenance',
      ],
      gradient: 'from-orange-500 to-red-500',
      image: 'industry.jpg',
    },
     {
  icon: Video,
  title: 'Audio-Visual Solutions',
  description:
    'Cutting-edge AV solutions that blend sound and visual technologies to deliver immersive communication, impactful presentations, and engaging experiences for events, workplaces, and digital platforms.',
  features: [
    'High-Definition Video',
    'Crystal-Clear Audio',
    'Live Streaming',
    'Interactive Displays',
  ],
  gradient: 'from-purple-500 to-indigo-500',
  image: 'av.jpg',
},
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Solutions That Drive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in three core areas of emerging technology, delivering
            comprehensive solutions that transform how businesses operate and
            engage with their customers.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden"
            >
              {/* Image background section */}
              {service.image && (
                <div className="relative h-40 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-3`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {!service.image && (
                  <>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </>
                )}

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
