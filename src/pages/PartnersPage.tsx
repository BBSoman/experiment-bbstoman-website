import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Handshake, Shield, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CATEGORIES,
  SafeImage,
  type Category,
  type CategoryBrand,
} from './ProductsPage';

/**
 * The category -> brand map lives on the products page, which is where it is
 * maintained. Importing it rather than restating it here means the two pages
 * cannot drift: a brand added to a category shows up in both places.
 */

/**
 * Logo plates are painted with inline styles rather than utility classes on
 * purpose. Partner logos are artwork drawn for a white background - several are
 * black or dark navy - so the plate has to stay light even when the site is in
 * dark mode, and an inline style is the one thing the theme overrides cannot
 * repaint.
 */
const LOGO_PLATE = { backgroundColor: '#ffffff', color: '#111827' } as const;

/** A single brand inside a category card: its logo, or its name if we have no artwork. */
const BrandTile: React.FC<{ brand: CategoryBrand }> = ({ brand }) => (
  <div
    style={LOGO_PLATE}
    className="flex h-16 items-center justify-center rounded-lg border border-gray-200 px-3 py-2 shadow-sm transition-shadow hover:shadow-md"
    title={brand.name}
  >
    <SafeImage
      src={brand.logo}
      alt={`${brand.name} logo`}
      className="max-h-10 max-w-full object-contain"
      fallback={
        <span className="text-center text-xs font-semibold leading-tight">
          {brand.name}
        </span>
      }
    />
  </div>
);

/** One category: a heading that opens that category on the products page, then its brands. */
const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
    {/* A thin colour bar carries the category's identity without putting text
        on a saturated background, which would fail contrast at this size. */}
    <div className={`h-1.5 w-full bg-gradient-to-r ${category.color}`} />

    <Link
      to={`/products?category=${category.id}`}
      className="group flex items-start gap-4 px-6 pt-6"
    >
      <span
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
      >
        <category.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {category.name}
          <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="mt-1 block text-sm text-gray-600">
          {category.brands.length}{' '}
          {category.brands.length === 1 ? 'brand' : 'brands'}
        </span>
      </span>
    </Link>

    <div className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-3">
      {category.brands.map((brand) => (
        <BrandTile key={brand.name} brand={brand} />
      ))}
    </div>
  </article>
);

const PartnersPage: React.FC = () => {
  const brandCount = CATEGORIES.reduce(
    (total, category) => total + category.brands.length,
    0
  );

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

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {brandCount} technology brands across {CATEGORIES.length}{' '}
              categories. Pick a category to browse what we supply in it.
            </p>
          </div>

          {/* items-start so a category with two brands does not stretch to
              match a seven-brand neighbour and leave a block of empty card. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
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
