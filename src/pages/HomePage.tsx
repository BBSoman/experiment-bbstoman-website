import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BrandPartners from '../components/BrandPartners';
import Footer from '../components/Footer';

/* ---------------------------------------------------------------------------
   Partner logo marquee
   Everything the strip needs lives in this file on purpose: no new component
   file and no index.css change, so the home page can never import something
   that does not exist.
--------------------------------------------------------------------------- */

type Brand = {
  name: string;
  logo: string;
  /** Internal route for the brand's solution page. */
  route: string;
};

/** Logo file names are all present in /public; routes are all in App.tsx. */
const BRANDS: Brand[] = [
  { name: 'HTC VIVE', logo: '/vive1.png', route: '/htc-solutions' },
  { name: 'BOE', logo: '/boe1.png', route: '/boe-solutions' },
  { name: 'V View', logo: '/vview.png', route: '/vview-solutions' },
  { name: 'Ashton Bentley', logo: '/ashton.png', route: '/Ashton-bentley-solutions' },
  { name: 'ZeeVee', logo: '/zeevee1.png', route: '/Zeevee-solutions' },
  { name: 'Mago', logo: '/mago2.png', route: '/mago-solutions' },
  { name: 'Nearity', logo: '/nearity1.png', route: '/nearity-solutions' },
  { name: 'Nearstream', logo: '/nearstream1.png', route: '/nearstream-solutions' },
  { name: 'Viverse', logo: '/viverse1.png', route: '/Viverse-solutions' },
  { name: 'Vizzio', logo: '/vizzio copy.png', route: '/vizzio-solutions' },
  { name: 'Polytron', logo: '/polytron copy.png', route: '/polytron-solutions' },
  { name: 'Telepresenz', logo: '/tele.png.png', route: '/tele-presenz-solutions' },
  { name: 'Robro Systems', logo: '/roboro.png', route: '/robro-systems-solutions' },
  { name: 'Napster', logo: '/napster1.png', route: '/napster-solutions' },
  { name: 'XRAI', logo: '/xrai1.png', route: '/xrai-solutions' },
  { name: 'DeepQ', logo: '/deepqai.png', route: '/deepq-solutions' },
  { name: 'AI-LA', logo: '/ai-la.png', route: '/aila-solutions' },
  { name: 'Disruptive Technologies', logo: '/disruptx1.png', route: '/disruptive-technologies-solutions' },
  { name: 'Nanoprecise', logo: '/nano.png', route: '/nano-precise-solutions' },
  { name: 'Property Automate', logo: '/automate1.png', route: '/property-automate-solutions' },
  { name: 'Weblib', logo: '/weblib1.png', route: '/weblib-solutions' },
  { name: 'G-Reigns', logo: '/g reigns1.png', route: '/reigns-solutions' },
  { name: 'GoNitro', logo: '/nitro1.png', route: '/go-nitro-solutions' },
  { name: 'Nuera', logo: '/Untitled-3 copy.png', route: '/Nuera-solutions' },
];

/**
 * The track holds the logo list twice, so sliding it by exactly -50% lands on
 * an identical frame and the loop looks endless.
 */
const MARQUEE_CSS = `
.bbs-marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.bbs-marquee__track {
  display: flex;
  width: max-content;
  align-items: center;
  will-change: transform;
}
/* Logos travel left -> right */
.bbs-marquee__track--rtl { animation: bbs-marquee-rtl 45s linear infinite; }
/* Logos travel right -> left */
.bbs-marquee__track--ltr { animation: bbs-marquee-ltr 45s linear infinite; }
.bbs-marquee:hover .bbs-marquee__track,
.bbs-marquee:focus-within .bbs-marquee__track { animation-play-state: paused; }
@keyframes bbs-marquee-rtl {
  from { transform: translate3d(-50%, 0, 0); }
  to   { transform: translate3d(0, 0, 0); }
}
@keyframes bbs-marquee-ltr {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}
@media (max-width: 640px) {
  .bbs-marquee__track--rtl,
  .bbs-marquee__track--ltr { animation-duration: 30s; }
}
@media (prefers-reduced-motion: reduce) {
  .bbs-marquee { overflow-x: auto; }
  .bbs-marquee__track--rtl,
  .bbs-marquee__track--ltr { animation: none; transform: none; }
}
`;

const LogoCard: React.FC<{ brand: Brand; duplicate?: boolean }> = ({
  brand,
  duplicate,
}) => (
  <Link
    to={brand.route}
    aria-hidden={duplicate}
    tabIndex={duplicate ? -1 : undefined}
    title={brand.name}
    className="group mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:mx-4 sm:h-28 sm:w-52"
  >
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      /* Eager, not lazy: the strip sits inside an overflow-hidden track, so a
         lazy logo would only start loading as it slid in and would pop. */
      loading="eager"
      decoding="async"
      className="max-h-14 max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-16"
      onError={(e) => {
        // Keep the strip tidy if a logo file is ever renamed or removed.
        const el = e.currentTarget;
        el.style.display = 'none';
        el.parentElement?.insertAdjacentHTML(
          'afterbegin',
          `<span class="text-sm font-semibold text-gray-500">${brand.name}</span>`
        );
      }}
    />
  </Link>
);

const PartnerMarquee: React.FC = () => {
  const half = Math.ceil(BRANDS.length / 2);
  const rowOne = BRANDS.slice(0, half);
  const rowTwo = BRANDS.slice(half);

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-16 sm:py-20"
    >
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      <div className="container mx-auto mb-10 px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700">
          <Handshake className="mr-2 h-4 w-4" />
          Trusted Technology Partners
        </div>
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          Powered by the{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            world&apos;s best brands
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          We work with global technology leaders across AI, immersive tech,
          ProAV and IIoT to deliver solutions built for Oman.
        </p>
      </div>

      {/* Row 1 — logos travel left to right */}
      <div className="bbs-marquee">
        <div className="bbs-marquee__track bbs-marquee__track--rtl">
          {rowOne.map((brand) => (
            <LogoCard key={brand.name} brand={brand} />
          ))}
          {rowOne.map((brand) => (
            <LogoCard key={`${brand.name}-dup`} brand={brand} duplicate />
          ))}
        </div>
      </div>

      {/* Row 2 — travels the other way for contrast */}
      <div className="bbs-marquee mt-4 sm:mt-6">
        <div className="bbs-marquee__track bbs-marquee__track--ltr">
          {rowTwo.map((brand) => (
            <LogoCard key={brand.name} brand={brand} />
          ))}
          {rowTwo.map((brand) => (
            <LogoCard key={`${brand.name}-dup`} brand={brand} duplicate />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/partners"
          className="inline-flex items-center rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
        >
          View all partners
        </Link>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <PartnerMarquee />
      <BrandPartners />
      <Footer />
    </>
  );
};

export default HomePage;
