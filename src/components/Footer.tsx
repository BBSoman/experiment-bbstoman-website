import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';

/**
 * Set this to the real Facebook page URL to show the Facebook icon again.
 * It was previously href="#", which rendered a dead link.
 */
const FACEBOOK_URL = '';

const CONTACT_EMAIL = 'support@bbst.ai';
const CONTACT_PHONE_DISPLAY = '+968 92882417';
const CONTACT_PHONE_DIAL = '+96892882417';

/**
 * Floating WhatsApp button.
 *
 * It lives in the footer because the footer renders exactly once per page -
 * the home page renders two Headers, so putting it there would stack two
 * buttons on the same spot.
 *
 * api.whatsapp.com rather than the wa.me shortener: wa.me is a separate domain
 * that some DNS resolvers fail to resolve at all, which shows the visitor a
 * browser error page instead of WhatsApp.
 *
 * Stacked directly above the Microsoft support chat bubble, which is fixed at
 * right: 25px / bottom: 10px and is 58px square (so its top edge is 68px from
 * the bottom of the viewport). bottom-24 puts this button at 96px, leaving a
 * 28px gap, and right-6 lines the two up on the same vertical axis. If that
 * widget is ever moved or removed, this is the offset to revisit.
 */
const WHATSAPP_DIGITS = '96892882417';
const WHATSAPP_GREETING =
  'Hello Bright Business Services, I would like to know more about your solutions.';
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_DIGITS}&text=${encodeURIComponent(
  WHATSAPP_GREETING
)}`;

const WhatsAppFloatingButton: React.FC = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
    className="group fixed bottom-24 right-6 z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] transition-all duration-300 h-14 pl-[0.9375rem] pr-[0.9375rem] hover:pr-6 hover:gap-2"
  >
    {/* The WhatsApp mark, since lucide has no brand glyph for it. */}
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 flex-shrink-0 fill-current"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
    {/* Dark text rather than white: WhatsApp's brand green is light enough that
        white lettering only reaches 1.98:1. The glyph above stays white because
        it is the brand mark, which WCAG exempts from contrast rules. */}
    <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold text-[#04301f] group-hover:max-w-[10rem] transition-all duration-300">
      Chat with us
    </span>
  </a>
);
const OFFICE_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Dohat+Al+Adab+Street,+Al+Khuwair+South,+Muscat+133,+Oman';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // The newsletter box used to be a dead button. It now carries the address
  // the visitor typed straight into the contact form.
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ intent: 'newsletter' });
    if (newsletterEmail.trim()) params.set('email', newsletterEmail.trim());
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <>
      <WhatsAppFloatingButton />
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
             <Link to="/" className="flex items-center space-x-3">
            <img src="/service horizontal.png" alt="Bright Business Services Logo" className="h-8 w-auto mb-4" />
             </Link>        
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of cutting-edge technology services. 
              We partner with industry leaders to deliver innovative solutions that 
              transform businesses and drive growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/brightbusinesssolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/BBSolutionsOman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5 text-white" />
              </a>
              {FACEBOOK_URL && (
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center group"
              >
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </a>
              <a
                href={`tel:${CONTACT_PHONE_DIAL}`}
                className="flex items-center group"
              >
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </span>
              </a>
              <a
                href={OFFICE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  Muscat, Oman
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news and updates from Bright Business Services.</p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full md:w-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                aria-label="Subscribe to updates"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 - 2026 Bright Business Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
