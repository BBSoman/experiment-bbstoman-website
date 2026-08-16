import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BrandPartners from '../components/BrandPartners';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <BrandPartners />
      <Footer />
    </>
  );
};

export default HomePage;