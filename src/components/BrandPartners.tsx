import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Handshake, Users } from 'lucide-react';
import Header from '../components/Header';

const PartnersPage: React.FC = () => {
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Partners
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technology{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading technology brands to deliver
              comprehensive solutions that drive innovation and transform
              businesses across various sectors.
            </p>
          </div>

          {/* Partnership Benefits */}
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
                Why Choose Our Brand Network?
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
