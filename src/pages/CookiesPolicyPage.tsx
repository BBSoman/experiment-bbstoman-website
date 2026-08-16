import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cookie,
  BookOpen,
  Layers,
  ShieldCheck,
  BarChart3,
  Settings2,
  Megaphone,
  Share2,
  Table2,
  ToggleLeft,
  Globe2,
  Clock,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EFFECTIVE_DATE = 'June 15, 2026';
const LAST_UPDATED = 'June 15, 2026';

const CONTACT_EMAIL = 'sck@bbst.ai';
const CONTACT_PHONE = '+968 9288 2417';
const REGISTERED_ADDRESS =
  'Level 4, Business Center, Building #325, Office #411, Dohat Al Adab Street, Al Khuwair South, Muscat 133, Oman';

type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; rows: string[][] };

interface Section {
  number: string;
  title: string;
  icon: React.ElementType;
  blocks: Block[];
}

const cookieTypes = [
  {
    icon: ShieldCheck,
    title: 'Strictly Necessary',
    description:
      'Essential for the Website to function: session management, security, and load balancing. These cannot be disabled.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: BarChart3,
    title: 'Performance & Analytics',
    description:
      'Help us understand how visitors use the Website (e.g., Google Analytics) so we can improve performance and content.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Settings2,
    title: 'Functionality',
    description:
      'Remember your preferences, such as language, region, and form inputs, for a more personalized experience.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Megaphone,
    title: 'Targeting & Marketing',
    description:
      'Used to deliver relevant advertising (e.g., LinkedIn Insight Tag, Google Ads) and measure campaign effectiveness.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description:
      'Set by embedded social platforms (LinkedIn, Twitter/X, YouTube) to enable sharing and track activity across sites.',
    color: 'from-rose-500 to-pink-500',
  },
];

const cookieTableRows: string[][] = [
  ['_ga', 'Google Analytics', 'Analytics', 'Distinguish unique users', '2 years'],
  ['_gid', 'Google Analytics', 'Analytics', 'Distinguish unique users', '24 hours'],
  ['_gat', 'Google Analytics', 'Analytics', 'Throttle request rate', '1 minute'],
  ['cookie_consent', 'BBST', 'Essential', 'Store cookie consent preferences', '1 year'],
  ['session_id', 'BBST', 'Essential', 'Maintain user session', 'Session'],
  ['lang', 'BBST', 'Functionality', 'Store language preference', '1 year'],
  ['li_sugr', 'LinkedIn', 'Marketing', 'Store user identity for retargeting', '3 months'],
  ['li_gc', 'LinkedIn', 'Marketing', 'Store consent for non-essential cookies', '2 years'],
  ['AnalyticsSyncHistory', 'LinkedIn', 'Marketing', 'Store analytics synchronization', '30 days'],
  ['UserMatchHistory', 'LinkedIn', 'Marketing', 'Synchronize LinkedIn Ads ID', '30 days'],
  ['bcookie', 'LinkedIn', 'Marketing', 'Browser ID cookie', '2 years'],
  ['bscookie', 'LinkedIn', 'Marketing', 'Secure browser ID cookie', '2 years'],
  ['lidc', 'LinkedIn', 'Marketing', 'Facilitate data center selection', '24 hours'],
  ['_fbp', 'Meta/Facebook', 'Marketing', 'Deliver advertisements', '3 months'],
  ['fr', 'Meta/Facebook', 'Marketing', 'Deliver advertisements', '3 months'],
  ['VISITOR_INFO1_LIVE', 'YouTube', 'Marketing', 'Track embedded video views', '6 months'],
  ['YSC', 'YouTube', 'Marketing', 'Track embedded video views', 'Session'],
  ['CONSENT', 'YouTube', 'Marketing', 'Store consent for video embeds', '2 years'],
];

const CookiesPolicyPage: React.FC = () => {
  const sections: Section[] = [
    {
      number: '1',
      title: 'Introduction',
      icon: BookOpen,
      blocks: [
        {
          type: 'p',
          text: 'This Cookie Policy explains how Bright Business Services ("BBST", "we", "us", or "our") uses cookies and similar tracking technologies on our website https://bbst.ai/ (the "Website"). It describes what these technologies are, why we use them, and your rights to control their use.',
        },
        {
          type: 'p',
          text: 'This Cookie Policy is part of and should be read alongside our Privacy Policy. By continuing to browse or use our Website, you agree to our use of cookies as described in this policy, unless you have adjusted your browser settings to refuse cookies or have withdrawn consent where required.',
        },
      ],
    },
    {
      number: '2',
      title: 'What Are Cookies?',
      icon: Layers,
      blocks: [
        {
          type: 'p',
          text: 'Cookies are small text files that are placed on your computer, tablet, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners. Cookies can be:',
        },
        {
          type: 'list',
          items: [
            'Session Cookies: Temporary cookies that expire when you close your browser. They enable the Website to remember your actions during a single browsing session.',
            'Persistent Cookies: Cookies that remain on your device for a set period (ranging from a few minutes to several years) or until you delete them manually. They help the Website remember your preferences across multiple visits.',
            'First-Party Cookies: Set by the Website you are visiting (in this case, bbst.ai).',
            'Third-Party Cookies: Set by domains other than the Website you are visiting, typically by third-party services integrated into the Website (e.g., analytics providers, social media platforms).',
          ],
        },
        {
          type: 'p',
          text: 'In addition to cookies, we may use other similar technologies such as:',
        },
        {
          type: 'list',
          items: [
            'Web Beacons (Pixel Tags): Small graphic images that allow us to monitor user activity on the Website.',
            'Local Storage: Browser-based storage that allows websites to store data locally on your device.',
            'Session Storage: Similar to local storage but data is cleared when the browser session ends.',
          ],
        },
      ],
    },
    {
      number: '3',
      title: 'Types of Cookies We Use',
      icon: ShieldCheck,
      blocks: [
        {
          type: 'p',
          text: '3.1 Strictly Necessary Cookies (Essential): These cookies are essential for the Website to function properly. They enable core features such as security, network management, and accessibility. Without these cookies, the Website may not operate correctly, and certain services you have requested cannot be provided. Examples include session management cookies, security cookies, load balancing cookies, and cookie consent state recording.',
        },
        {
          type: 'p',
          text: 'Legal Basis: These cookies are necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by you. Consent is not required for essential cookies under most data protection laws.',
        },
        {
          type: 'p',
          text: '3.2 Performance and Analytics Cookies: These cookies collect information about how visitors use our Website, such as which pages are visited most often, how long visitors spend on each page, and whether they encounter error messages. All information collected by these cookies is aggregated and anonymous; we cannot identify you from this data. Examples include Google Analytics cookies (_ga, _gid, _gat), heatmap/session recording tools, page load time monitoring, and error tracking.',
        },
        {
          type: 'p',
          text: 'Legal Basis: We rely on your consent to place these cookies. You can withdraw consent at any time through our cookie banner or browser settings.',
        },
        {
          type: 'p',
          text: '3.3 Functionality Cookies: These cookies allow the Website to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have integrated into our pages. Examples include language and region preference cookies, remembering form inputs, chat widget preferences, and video player settings.',
        },
        {
          type: 'p',
          text: 'Legal Basis: We rely on your consent to place these cookies, except where they are strictly necessary for a service you have explicitly requested.',
        },
        {
          type: 'p',
          text: '3.4 Targeting and Marketing Cookies: These cookies are used to deliver advertisements and marketing communications more relevant to you and your interests. They may also limit how often you see an advertisement and help measure campaign effectiveness. These cookies may track your browsing habits across different websites and build a profile of your interests, which may be shared with third-party advertisers or ad networks. Examples include the LinkedIn Insight Tag, Google Ads conversion tracking, Meta Pixel, and other retargeting cookies.',
        },
        {
          type: 'p',
          text: 'Legal Basis: We rely on your explicit consent to place these cookies. You can withdraw consent at any time.',
        },
        {
          type: 'p',
          text: '3.5 Social Media Cookies: These cookies are set by social media services that we have added to the Website to enable you to share our content with your friends and networks. They can track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites. Examples include LinkedIn share buttons, Twitter/X embeds, YouTube video embeds, and other social media widgets.',
        },
      ],
    },
    {
      number: '4',
      title: 'Specific Cookies Used on Our Website',
      icon: Table2,
      blocks: [
        {
          type: 'p',
          text: 'The table below provides a non-exhaustive list of cookies that may be used on our Website. The specific cookies in use may change over time as we update our Website, add new features, or change service providers; we will update this list periodically.',
        },
        {
          type: 'table',
          rows: cookieTableRows,
        },
      ],
    },
    {
      number: '5',
      title: 'How to Manage Your Cookie Preferences',
      icon: ToggleLeft,
      blocks: [
        {
          type: 'p',
          text: 'Cookie Consent Banner: When you first visit our Website, you will see a cookie consent banner that allows you to accept all cookies, reject non-essential cookies (accept only essential cookies), or customize your preferences by category (Analytics, Functionality, Marketing). You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our Website.',
        },
        {
          type: 'p',
          text: 'Browser Settings: Most web browsers allow you to control cookies through their settings. You can typically view cookies stored on your device, delete all or specific cookies, block all cookies, block cookies from specific websites, block third-party cookies while allowing first-party cookies, or receive a notification before a cookie is placed. Please note that if you disable or delete cookies, some features of our Website may not function properly, and your experience may be degraded.',
        },
        {
          type: 'p',
          text: 'How to Manage Cookies in Major Browsers:',
        },
        {
          type: 'list',
          items: [
            'Google Chrome: Settings > Privacy and Security > Cookies and other site data',
            'Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data',
            'Safari: Preferences > Privacy > Cookies and website data',
            'Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies',
            'Opera: Settings > Privacy & Security > Cookies',
          ],
        },
        {
          type: 'p',
          text: 'For more detailed guidance, visit the help pages of your specific browser or device manufacturer.',
        },
        {
          type: 'p',
          text: 'Third-Party Opt-Out Tools: You can opt out of interest-based advertising from participating companies through the Network Advertising Initiative (networkadvertising.org/choices), the Digital Advertising Alliance (aboutads.info/choices), or the European Interactive Digital Advertising Alliance (youronlinechoices.eu). To opt out of Google Analytics tracking across all websites, you can install the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).',
        },
      ],
    },
    {
      number: '6',
      title: 'Third-Party Cookies and Services',
      icon: Globe2,
      blocks: [
        {
          type: 'p',
          text: "Our Website integrates services from third parties that may set cookies on your device. We do not control these third-party cookies; the relevant third party's privacy and cookie policies apply to their use.",
        },
        {
          type: 'p',
          text: "Analytics Providers: We use Google Analytics to understand Website usage; Google may process your data in accordance with its Privacy Policy and Cookie Policy. We use the LinkedIn Insight Tag for B2B marketing analytics; LinkedIn's privacy practices are governed by its Privacy Policy.",
        },
        {
          type: 'p',
          text: 'Advertising and Retargeting: We may use advertising services from LinkedIn, Google, and potentially other platforms. These services use cookies to show you relevant ads based on your browsing behavior.',
        },
        {
          type: 'p',
          text: 'Social Media Integrations: Our Website may include social media widgets or embedded content from LinkedIn, YouTube, Twitter/X, and other platforms. These integrations may set cookies and collect data according to the respective platform\'s policies.',
        },
        {
          type: 'p',
          text: 'Video and Multimedia: We may embed videos from YouTube or other platforms. These embeds may use cookies to track views, preferences, and user interactions.',
        },
      ],
    },
    {
      number: '7',
      title: 'Cookie Duration and Expiration',
      icon: Clock,
      blocks: [
        {
          type: 'p',
          text: 'The duration for which cookies remain on your device varies:',
        },
        {
          type: 'list',
          items: [
            'Session Cookies: Expire when you close your browser.',
            'Short-Term Persistent Cookies: Expire within hours or days (e.g., 24 hours, 30 days).',
            'Long-Term Persistent Cookies: Expire after months or years (e.g., 2 years for analytics cookies).',
          ],
        },
        {
          type: 'p',
          text: 'You can manually delete cookies at any time through your browser settings, regardless of their expiration date.',
        },
      ],
    },
    {
      number: '8',
      title: 'Changes to This Cookie Policy',
      icon: RefreshCw,
      blocks: [
        {
          type: 'p',
          text: 'We may update this Cookie Policy from time to time to reflect changes in the cookies we use, new third-party services, or legal requirements. When we make material changes, we will:',
        },
        {
          type: 'list',
          items: [
            'Update the "Last Updated" date at the top of this policy.',
            'Post the revised policy on our Website.',
            'Notify you through a prominent notice or cookie banner if significant changes are made.',
          ],
        },
        {
          type: 'p',
          text: 'We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Cookie className="w-4 h-4 mr-2" />
              Legal
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bright Business Services (BBST.ai) — this policy explains how
              we use cookies and similar technologies across our website,
              and how you can manage your preferences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mt-4 text-sm text-gray-500">
              <span>Effective Date: {EFFECTIVE_DATE}</span>
              <span className="hidden sm:inline">·</span>
              <span>Last Updated: {LAST_UPDATED}</span>
            </div>
          </div>

          {/* Cookie Types Grid */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Categories of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {cookieTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section) => (
              <div
                key={section.number}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mt-2">
                    {section.number}. {section.title}
                  </h2>
                </div>
                <div className="space-y-3 pl-0 md:pl-16">
                  {section.blocks.map((block, bIndex) => {
                    if (block.type === 'p') {
                      return (
                        <p key={bIndex} className="text-gray-600 leading-relaxed">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === 'list') {
                      return (
                        <ul key={bIndex} className="space-y-2">
                          {block.items.map((item, iIndex) => (
                            <li key={iIndex} className="flex items-start text-gray-600 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <div key={bIndex} className="overflow-x-auto -ml-0 md:-ml-16">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-blue-50 text-left">
                              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">Cookie Name</th>
                              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">Provider</th>
                              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">Category</th>
                              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">Purpose</th>
                              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, rIndex) => (
                              <tr key={rIndex} className={rIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, cIndex) => (
                                  <td key={cIndex} className="px-4 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Acknowledgment */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-200 leading-relaxed text-sm uppercase tracking-wide">
                By continuing to use our Website, you acknowledge that you
                have read and understood this Cookie Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                9. Contact Us
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                If you have any questions about this Cookie Policy, our use
                of cookies, or how to manage your preferences, please
                contact Bright Business Services (BBST):
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Mail className="w-6 h-6 text-white mx-auto mb-3" />
                <div className="text-blue-100 text-sm mb-1">Email</div>
                <a
                  href={'mailto:' + CONTACT_EMAIL}
                  className="text-white font-semibold break-all hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Phone className="w-6 h-6 text-white mx-auto mb-3" />
                <div className="text-blue-100 text-sm mb-1">Phone</div>
                <a
                  href={'tel:' + CONTACT_PHONE.replace(/\s+/g, '')}
                  className="text-white font-semibold hover:underline"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <MapPin className="w-6 h-6 text-white mx-auto mb-3" />
                <div className="text-blue-100 text-sm mb-1">Address</div>
                <span className="text-white font-semibold text-sm leading-snug">
                  {REGISTERED_ADDRESS}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                className="border-2 border-white/40 text-white px-8 py-3 rounded-lg font-semibold hover:border-white transition-all"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPolicyPage;
