import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Headphones,
  Monitor,
  Globe,
  Wifi,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Handshake,
  Tv,
  Video,
  Network,
  Subtitles,
  Languages,
  Radio,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      logo: 'boe1.png',
      logoSize: 'h-12 w-21 ',
      description: 'Global leader in display technology.',
      keyServices: [
        'LCD Displays',
        'OLED Displays',
        'LCD Displays',
        'Flexible Screens',
      ],
      specialties: [
        'Display Innovation',
        'Semiconductor Tech',
        'Smart Manufacturing',
      ],
      color: 'from-indigo-500 to-blue-500',
      established: '1993',
      headquarters: 'China',
      website: 'https://www.boe.com/en/',
      specifications: {
        resolution: 'Up to 8K UHD (7680×4320)',
        brightness: 'Up to 1000 nits',
        viewingAngle: '178° horizontal/vertical',
        additionalSpecs: [
          'HDR10+ Support',
          'Wide Color Gamut (DCI-P3)',
          'Low Blue Light Technology',
          'Flexible & Foldable Options',
        ],
      },
    },
    {
      logo: 'vive1.png',
      logoSize: 'h-7 w-21',
      description:
        'Leading VR headset manufacturer and AR/VR innovation pioneer.',
      keyServices: [
        'HTC Vive Pro Series',
        'Enterprise VR Solutions',
        'VR Training Programs',
      ],
      specialties: [
        'Virtual Reality',
        'Enterprise Solutions',
        'Training Systems',
      ],
      color: 'from-green-500 to-emerald-500',
      established: '1997',
      headquarters: 'Taiwan',
      website: 'http://vive.com/us/',
    },
    {
      logo: 'vview.png',
      logoSize: 'h-7 w-21',
      description:
        'Cutting-edge display technology and immersive visual solutions.',
      keyServices: [
        'Unlimited Source & secure content routing',
        'Drag‑and‑drop layout , plug‑and‑play bundles',
      ],
      specialties: [
        'Software based video wall controller',
        'Video wall command & control room',
        'Unified AV‑Over‑IP Video Wall Platform',
      ],
      color: 'from-blue-500 to-cyan-500',
      established: '2015',
      headquarters: 'India',
      website: 'https://vviewtech.com/',
    },
    {
      logo: 'automate1.png',
      logoSize: 'h-7 w-21',
      description:
        'Advanced property automation and real estate technology solutions.',
      keyServices: [
        'Facility Management',
        'Broker Management',
        'Sales Management',
      ],
      specialties: [
        'Industry-Spanning Property',
        'Automated Lease Management',
        'Specialized Coworking Space Software',
      ],
      color: 'from-orange-500 to-red-500',
      established: '2018',
      headquarters: 'India',
      website: 'https://propertyautomate.com/',
    },
    {
      logo: 'ai-la.png',
      logoSize: 'h-12 w-17',
      description: 'innovative product solutions for smart communication.',
      keyServices: [
        'Wireless Networks',
        'IoT Connectivity',
        'Smart Building Solutions',
      ],
      specialties: ['Wireless Tech', 'IoT Solutions', 'Smart Systems'],
      color: 'from-teal-500 to-blue-500',
      established: '2020',
      headquarters: 'India',
      website: 'https://ai-la.com/',
      specifications: {
        resolution: 'Up to 4K UHD (3840×2160)',
        brightness: 'Up to 2500 nits (outdoor displays)',
        viewingAngle: '170° horizontal/160° vertical',
        additionalSpecs: [
          'IoT Integration',
          'Wireless Connectivity',
          'Smart Building Features',
        ],
      },
    },
    {
      logo: 'tele.png.png',
      logoSize: 'h-12 w-21',
      description:
        'Advanced telepresence and remote collaboration technology solutions.',
      keyServices: [
        'Computer Vision Solution',
        'Industrial Training Management platform',
        'Unburdening frontline workers',
      ],
      specialties: ['Smart ITM', 'Smart OPS', 'Smart EYE'],
      color: 'from-pink-500 to-rose-500',
      established: '2016',
      headquarters: 'India',
      website: 'https://telepresenz.com/',
    },
    {
      logo: 'nano.png',
      logoSize: 'h-12 w-21',
      description:
        'AI-powered predictive maintenance and condition monitoring solutions.',
      keyServices: [
        'Predictive Maintenance',
        'Vibration Analysis',
        'Machine Health Monitoring',
        'AI-Powered Diagnostics',
      ],
      specialties: [
        'Industrial IoT',
        'Predictive Analytics',
        'Machine Learning',
      ],
      color: 'from-emerald-500 to-green-500',
      established: '2016',
      headquarters: 'India',
      website: 'https://nanoprecise.io/',
    },
    {
      logo: 'ashton.png',
      logoSize: 'h-11 w-21',
      description:
        'A new way to deploy Audio Visual technology in meeting spaces',
      keyServices: [
        'Collaboration Spaces',
        'Chassis Display Mounts',
        'Comprehensive Monitoring and Support',
      ],
      specialties: [
        'Audio-Visual Design',
        'Technology Integration',
        'Project Management',
      ],
      color: 'from-orange-500 to-red-500',
      website: 'https://ashtonbentley.com/',
      specifications: {
        resolution: 'Up to 4K UHD',
        brightness: 'Varies by product',
        viewingAngle: 'Varies by product',
        additionalSpecs: [
          'Custom Solutions',
          'High-End Equipment',
          'Expert Consultation',
        ],
      },
    },
    // {
    //   logo: 'nuera copy.png',
    //   logoSize: 'h-11 w-21',
    //   description:
    //     'Provider of advanced communication solutions for businesses, enhancing connectivity.',
    //   keyServices: [
    //     'Unified Communications',
    //     'VoIP Solutions',
    //     'Collaboration Tools',
    //     'Network Infrastructure',
    //   ],
    //   specialties: [
    //     'Business Communication',
    //     'Cloud Solutions',
    //     'Network Security',
    //   ],
    //   color: 'from-blue-500 to-purple-500',
    //   website: 'https://www.nuera.com/',
    // },
    {
      logo: 'zeevee1.png', // Make sure to add the logo image in your project
      logoSize: 'h-11 w-13',
      description:
        'Leading provider of video distribution solutions for professional AV.',
      keyServices: [
        'Video Distribution',
        'Streaming Solutions',
        'AV over IP',
        'Content Management',
      ],
      specialties: ['Video Encoding', 'Digital Signage', 'Broadcast Solutions'],
      color: 'from-purple-500 to-violet-500',
      established: '2004',
      headquarters: 'United States',
      website: 'https://www.zeevee.com/',
    },
    {
      logo: 'viverse1.png', // Make sure to add the logo image in your project
      logoSize: 'h-11 w-70',
      description:
        'Innovative platform for immersive virtual experiences and digital content creation.',
      keyServices: [
        'Virtual Reality Solutions',
        'Content Creation',
        '3D Modeling',
        'Interactive Experiences',
      ],
      specialties: [
        'Immersive Technology',
        'Digital Content',
        'User  Engagement',
      ],
      color: 'from-blue-600 to-purple-600',
      established: '2021',
      headquarters: 'United States',
      website: 'https://www.viverse.com/',
    },
    {
      logo: 'g reigns1.png',
      logoSize: 'h-11 w-21',
      description:
        'Provider of advanced networking solutions and services for businesses.',
      keyServices: [
        'Network Infrastructure',
        'Cloud Solutions',
        'Cybersecurity',
        'Consulting Services',
      ],
      specialties: ['Networking', 'Cloud Computing', 'IT Security'],
      color: 'from-indigo-500 to-blue-500',
      established: '2010',
      headquarters: 'United States',
      website: 'https://www.reignnet.com/',
    },
    {
      logo: 'roboro.png', // Make sure to add the logo image in your project
      logoSize: 'h-11 w-21',
      description:
        'Automated FIBC and textile inspection solutions using AI machine vision.',
      keyServices: [
        'Web Inspection Systems',
        'Defect Detection',
        'Quality Control',
        'Production Optimization',
      ],
      specialties: [
        'AI Technology',
        'Textile Inspection',
        'Automation Solutions',
      ],
      color: 'from-green-400 to-blue-500',
      established: '2021',
      headquarters: 'India',
      website: 'https://www.robrosystems.com/',
    },
    {
      logo: 'deepqai copy.png', // Make sure to add the logo image in your project
      logoSize: 'h-11 w-15',
      description: 'AI-driven solutions for optimizing business processes.',
      keyServices: [
        'AI Solutions',
        'Data Analytics',
        'Machine Learning',
        'Business Intelligence',
      ],
      specialties: [
        'Artificial Intelligence',
        'Data Science',
        'Predictive Analytics',
      ],
      color: 'from-teal-500 to-blue-500',
      established: '2020',
      headquarters: 'United States',
      website: 'https://www.deepq.ai/',
    },
    {
      logo: 'polytron copy.png', // Make sure to add the logo image in your project
      logoSize: 'h-11 w-21',
      description:
        'Next-gen AI-powered 3D spatial-aware 360 4K camera solutions.',
      keyServices: [
        '3D Spatial-Aware Cameras',
        'AI-Powered Imaging Solutions',
        '360-Degree Video Capture',
      ],
      specialties: ['AI Technology', '3D Imaging', 'Video Solutions'],
      color: 'from-yellow-500 to-orange-500',
      established: '2024',
      headquarters: 'Singapore',
      website: 'https://polytron.ai/',
    },
    {
      logo: 'vizzio1.png', // Make sure to add the logo image in your project
      logoSize: 'h-10 w-21',
      description:
        'Revolutionizing the world with 3D digital twins and AI-powered solutions.',
      keyServices: [
        '3D City Modeling',
        'Geospatial Data Analysis',
        'AI-Powered Solutions',
      ],
      specialties: ['Urban Planning', 'Smart Cities', 'Real Estate'],
      color: 'from-pink-500 to-red-500',
      established: '2020',
      headquarters: 'Singapore',
      website: 'https://vizzio.ai/',
    },
    {
      logo: 'xrai1.png', // You'll need to add this logo to the public folder
      logoSize: 'h-10 w-21',
      description:
        'Revolutionary AI-powered real-time transcription and translation solutions.',
      keyServices: [
        'Real-time Subtitles',
        'Multilingual Translation',
        'Live Streaming Subtitles',
      ],
      specialties: [
        'AI Transcription',
        'Real-time Translation',
        'Accessibility Solutions',
      ],
      color: 'from-cyan-500 to-blue-500',
      established: '2020',
      headquarters: 'United Kingdom',
      website: 'https://xrai.glass/',
    },
        {

      logo: 'mago1.png', // Add the Mago logo image to your project
      logoSize: 'h-11 w-30',
      description:
        'AI-powered real-time translation and communication solutions for seamless multilingual interactions.',
      keyServices: [
        'Real-Time Translation',
        'AI Assistant',
        'Speaker Identification',
        'Smart Glasses Integration',
      ],
      specialties: [
        'Multilingual Support',
        'AI-Driven Communication',
        'Immersive Translation',
      ],
      color: 'from-purple-500 to-pink-500',
      established: '2020',
      headquarters: 'United States',
      website: 'https://mago.io/',
    },
    {
      logo: 'nearity1.png', // Add the Nearity logo image to your project
      logoSize: 'h-10 w-18',
      description:
        'Advanced spatial computing and proximity-based technology solutions for immersive experiences.',
      keyServices: [
        'Spatial Computing',
        'Proximity Detection',
        'AR Integration',
        'Location-Based Services',
      ],
      specialties: [
        'Spatial Technology',
        'AR/VR Enhancements',
        'Proximity Solutions',
      ],
      color: 'from-green-500 to-teal-500',
      established: '2021',
      headquarters: 'United States',
      website: 'https://www.nearity.co/',
    },
    {
      logo: 'weblib1.png', // Add the Weblib logo image to your project
      logoSize: 'h-16 w-22',
      description:
        'Innovative web library solutions for seamless digital experiences and content management.',
      keyServices: [
        'Web Libraries',
        'Digital Content Management',
        'API Integrations',
        'Custom Web Solutions',
      ],
      specialties: [
        'Web Development',
        'Content Delivery',
        'Digital Innovation',
      ],
      color: 'from-blue-500 to-indigo-500',
      established: '2020', // Placeholder; update with actual data
      headquarters: 'United States', // Placeholder; update with actual data
      website: 'https://weblib.com/',
    },
    {
      logo: 'nitro1.png', // Add the Nitro PDF logo image to your project
      logoSize: 'h-10 w-21',
      description:
        'Leading provider of PDF productivity solutions for creating, editing, and managing documents.',
      keyServices: [
        'PDF Creation',
        'PDF Editing',
        'PDF Conversion',
        'Document Collaboration',
      ],
      specialties: [
        'PDF Technology',
        'Document Management',
        'Digital Workflows',
      ],
      color: 'from-red-500 to-pink-500',
      established: '2005',
      headquarters: 'United States',
      website: 'https://www.gonitro.com/',
    },
    {
       logo: 'nearstream1.png', // Add the Nearstream logo image to your project
      logoSize: 'h-16 w-21',
      description:
        'Advanced streaming solutions for real-time data and media delivery.',
      keyServices: [
        'Live Streaming',
        'Data Streaming',
        'Real-Time Analytics',
        'Media Delivery',
      ],
      specialties: [
        'Streaming Technology',
        'Real-Time Processing',
        'Content Distribution',
      ],
      color: 'from-cyan-500 to-blue-500',
      established: '2020',
      headquarters: 'United States',
      website: 'https://www.nearstream.us/',
    },
   {
  logo: 'napster1.png', // Add the Napster AI logo image to your project
  logoSize: 'h-10 w-21',
  description:
    'AI-powered enterprise solutions revolutionizing business operations and customer experiences.',
  keyServices: [
    'AI Automation',
    'Customer Experience',
    'Business Intelligence',
    'Enterprise AI Solutions',
  ],
  specialties: [
    'Enterprise AI',
    'Business Transformation',
    'Customer Engagement',
  ],
  color: 'from-purple-500 to-pink-500',
  established: '2023',
  headquarters: 'United States',
  website: 'https://www.napster.ai/',
},
    {
      logo: 'disruptx1.png', // Add the Disrupt-X logo image to your project
      logoSize: 'h-21 w-24',
      description:
        'AI and IoT-powered enterprise platform transforming commercial real estate and facility operations.',
      keyServices: [
        'ALEF 360° CAFM / CMMS',
        'Integrated Building Management (iBMS)',
        'IoT Asset & Utility Monitoring',
        'AI-Powered Facility Agent',
      ],
      specialties: [
        'Enterprise AI',
        'IoT Integration',
        'Smart Facility Management',
      ],
      color: 'from-sky-500 to-indigo-500',
      established: '2020',
      headquarters: 'United Arab Emirates',
      website: 'https://disrupt-x.io/',
    },
    {
      logo: 'camsense.png', // Add the Camsense AI logo image to your project
      logoSize: 'h-10 w-21',
      description:
        'No-code AI video analytics platform that turns ordinary cameras into intelligent security systems.',
      keyServices: [
        'Face & Emotion Recognition',
        'People Counting & Crowd Analysis',
        'License Plate Recognition (ANPR)',
        'PPE & Safety Compliance Detection',
      ],
      specialties: [
        'AI Video Analytics',
        'No-Code Surveillance',
        'Safety & Compliance',
      ],
      color: 'from-slate-600 to-cyan-500',
      established: '2023',
      headquarters: 'India',
      website: 'https://camsenseai.com/',
    },
    {
      logo: 'cactus1.png', // Add the Cactus Creatives logo image to your project
      logoSize: 'h-15 w-24',
      description:
        'Official Meta Business Partner delivering enterprise software, AI, and digital innovation solutions since 2007.',
      keyServices: [
        'Enterprise Software Development',
        'WhatsApp Business Solutions',
        'AI & IoT Solutions',
        'Mobile App & UI/UX Development',
      ],
      specialties: [
        'Enterprise Solutions',
        'Artificial Intelligence',
        'AR/VR/Metaverse',
      ],
      color: 'from-green-600 to-lime-500',
      established: '2007',
      headquarters: 'India',
      website: 'https://cactuscreatives.com/',
    },
    {
  logo: 'unity.png', // Add the Unity logo image to your project
  logoSize: 'h-8 w-21',
  description:
    'Leading real-time 3D development platform for games, simulations, and interactive experiences.',
  keyServices: [
    'Real-Time 3D Engine',
    'AR/VR Development',
    'Digital Twins',
    'Cross-Platform Deployment',
  ],
  specialties: [
    'Game Development',
    'Real-Time 3D',
    'Interactive Experiences',
  ],
  color: 'from-gray-700 to-gray-900',
  established: '2004',
  headquarters: 'United States',
  website: 'https://unity.com/',
},
  ];

  const partnershipBenefits = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description:
        'All our partners maintain the highest industry certifications and standards.',
    },
    {
      icon: Handshake,
      title: 'Strategic Alliance',
      description:
        'Long-term partnerships focused on mutual growth and innovation.',
    },
    {
      icon: Users,
      title: 'Expert Local Support',
      description:
        'Access to dedicated technical teams and comprehensive training programs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Partners Cards - Horizontal Layout */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the innovative companies we work with to deliver
              cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r ${partner.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col`}
              >
                <div className="bg-white p-6 relative">
                  <div className="absolute inset-0 bg-gray-100/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`${partner.logoSize} ml-0`}
                      />
                      <div className="text-xl font-bold text-gray-900 text-right flex-1 ml-2">
                        {partner.name}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wider">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wider">
                      Key Services
                    </h4>
                    <div className="space-y-1">
                      {partner.keyServices.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-white mr-2 flex-shrink-0" />
                          <span className="text-white text-xs">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href={
                        partner.logo.includes('Vive-logo')
                          ? '/htc-solutions'
                          : partner.logo.includes('Boe')
                          ? '/boe-solutions'
                          : partner.logo.includes('vview')
                          ? '/vview-solutions'
                          : partner.logo.includes('kramer')
                          ? '/kramer-solutions'
                          : partner.logo.includes('automate')
                          ? '/property-automate-solutions'
                          : partner.logo.includes('tele')
                          ? '/tele-presenz-solutions'
                          : partner.logo.includes('nano')
                          ? '/nano-precise-solutions'
                          : partner.logo.includes('dst')
                          ? '/disruptive-technologies-solutions'
                          : partner.logo.includes('ai-la')
                          ? '/aila-solutions'
                          : partner.logo.includes('ashton')
                          ? '/Ashton-bentley-solutions'
                          : partner.logo.includes('nuera copy')
                          ? '/Nuera-solutions'
                          : partner.logo.includes('zeevee')
                          ? '/Zeevee-solutions'
                          : partner.logo.includes('viverse')
                          ? '/Viverse-solutions'
                          : partner.logo.includes('greigns')
                          ? '/reigns-solutions'
                          : partner.logo.includes('roboro')
                          ? '/robro-systems-solutions'
                          : partner.logo.includes('deep')
                          ? '/deepq-solutions'
                          : partner.logo.includes('polytron copy')
                          ? '/polytron-solutions'
                          : partner.logo.includes('vizzio copy')
                          ? '/vizzio-solutions'
                          : partner.logo.includes('xrai.png')
                          ? '/xrai-solutions'
                          : partner.logo.includes('mago2.png')
                          ? '/mago-solutions'
                          : partner.logo.includes('nearity')
                          ? '/nearity-solutions'
                          : partner.logo.includes('weblib')
                          ? '/weblib-solutions'
                          : partner.logo.includes('gonitro.png')
                          ? '/go-nitro-solutions'
                          : partner.logo.includes('nearstream')
                          ? '/nearstream-solutions'
                          : partner.logo.includes('napster.png')
                          ? '/napster-solutions'
                          : '#'
                      }
                      className="flex-1 bg-white text-gray-900 py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 text-sm"
                    >
                      Solutions
                    </a>

                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-gray-900 py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 text-sm"
                      >
                        Website
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section (Moved Below) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Brands
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technology{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brands
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading technology brands to deliver
              comprehensive solutions that drive innovation and transform
              businesses across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Brands Network?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our carefully selected partners represent the best in their
                respective fields, ensuring you receive world-class technology
                solutions backed by industry expertise and proven track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about how our partner technologies can
              transform your business and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PartnersPage;
