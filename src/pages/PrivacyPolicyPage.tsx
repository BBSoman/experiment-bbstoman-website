import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  BookOpen,
  UserCheck,
  Database,
  Settings2,
  Scale,
  Share2,
  Clock,
  ShieldCheck,
  Globe2,
  Users,
  Link2,
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
  | { type: 'list'; items: string[] };

interface Section {
  number: string;
  title: string;
  icon: React.ElementType;
  blocks: Block[];
}

const PrivacyPolicyPage: React.FC = () => {
  const sections: Section[] = [
    {
      number: '1',
      title: 'Introduction',
      icon: BookOpen,
      blocks: [
        {
          type: 'p',
          text: 'Bright Business Services ("BBST", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, share, and protect information when you:',
        },
        {
          type: 'list',
          items: [
            'Visit our website at https://bbst.ai/ (the "Website").',
            'Request information, proposals, or quotes from us.',
            'Engage our technology services (AI, AR/VR, IIoT, ProAV/UCC).',
            'Communicate with us via email, phone, or other channels.',
            'Attend our events, webinars, or demonstrations.',
            'Interact with us in any other capacity.',
          ],
        },
        {
          type: 'p',
          text: 'This Privacy Policy is designed to comply with the Personal Data Protection Law (Royal Decree No. 6/2022) (Oman) ("PDPL") and, where applicable, the General Data Protection Regulation (EU) ("GDPR").',
        },
        {
          type: 'p',
          text: 'By using our Website or engaging our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Website or provide us with your personal data.',
        },
      ],
    },
    {
      number: '2',
      title: 'Data Controller',
      icon: UserCheck,
      blocks: [
        {
          type: 'p',
          text: 'For the purposes of applicable data protection laws, the Data Controller is:',
        },
        {
          type: 'list',
          items: [
            'Data Controller: Bright Business Services (BBST)',
            'Website: https://bbst.ai/',
            'Email: ' + CONTACT_EMAIL,
            'Address: ' + REGISTERED_ADDRESS,
            'Phone: ' + CONTACT_PHONE,
          ],
        },
        {
          type: 'p',
          text: 'If you have any questions about this Privacy Policy or our data practices, please contact us using the details above.',
        },
      ],
    },
    {
      number: '3',
      title: 'Information We Collect',
      icon: Database,
      blocks: [
        { type: 'p', text: 'We collect different types of information depending on how you interact with us.' },
        { type: 'p', text: 'Information You Provide Directly:' },
        {
          type: 'list',
          items: [
            'Contact Information: Name, email address, phone number, job title, company name, and business address.',
            'Account Information: If we create an account or portal access for you, we may collect login credentials and profile information.',
            'Business Information: Details about your organization, industry, technology requirements, project specifications, and budget.',
            'Communication Data: Records of your correspondence with us, including emails, phone calls, meeting notes, and support tickets.',
            'Payment Information: Billing address, bank details, and payment history (processed securely through our payment processors; we do not store complete credit card numbers).',
            'Feedback and Surveys: Responses to satisfaction surveys, testimonials, and product feedback.',
          ],
        },
        { type: 'p', text: 'Information We Collect Automatically:' },
        {
          type: 'list',
          items: [
            'Device and Browser Information: IP address, browser type, operating system, device type, screen resolution, and language preferences.',
            'Usage Data: Pages visited, time spent on pages, links clicked, search queries, referral sources, and download activity.',
            'Cookies and Tracking Technologies: Information collected through cookies, web beacons, and similar technologies (see our Cookie Policy for details).',
            'Location Data: General geographic location derived from your IP address (not precise GPS location).',
          ],
        },
        { type: 'p', text: 'Information from Third Parties:' },
        {
          type: 'list',
          items: [
            'Business Partners: We may receive information about you from our technology partners, resellers, or referral sources.',
            'Public Sources: Professional profiles from LinkedIn, industry directories, or publicly available business registries.',
            'Service Providers: Analytics providers, marketing platforms, and CRM systems may provide us with aggregated or individual data about your interactions.',
          ],
        },
        { type: 'p', text: 'Industrial and IoT Data (Service Clients Only): For clients engaging our IIoT Services, we may collect and process:' },
        {
          type: 'list',
          items: [
            'Operational Data: Sensor readings, machine performance metrics, environmental conditions, and production data.',
            'System Data: Network configurations, device identifiers, and system logs.',
            'Employee Data: Where IIoT systems monitor workplace environments, we may process data related to employee location or activity (only with the Client\'s authorization and in compliance with labor laws).',
          ],
        },
      ],
    },
    {
      number: '4',
      title: 'How We Use Your Information',
      icon: Settings2,
      blocks: [
        { type: 'p', text: 'To Provide and Manage Our Services:' },
        {
          type: 'list',
          items: [
            'Respond to your inquiries, requests for proposals, and service enquiries.',
            'Prepare and deliver customized technology solutions, proposals, and Statements of Work.',
            'Execute service engagements, including AI implementation, AR/VR development, IIoT integration, and ProAV installation.',
            'Provide ongoing technical support, maintenance, and system monitoring.',
            'Manage project timelines, resources, and deliverables.',
          ],
        },
        { type: 'p', text: 'To Communicate with You:' },
        {
          type: 'list',
          items: [
            'Send service-related communications, including project updates, milestone notifications, and billing information.',
            'Respond to your questions, complaints, and support requests.',
            'Send administrative messages, such as changes to our terms or policies.',
            'Conduct satisfaction surveys and request feedback on our Services.',
          ],
        },
        { type: 'p', text: 'For Marketing and Business Development:' },
        {
          type: 'list',
          items: [
            'Send promotional materials, newsletters, and information about new services, technologies, or partner offerings (only with your consent or where permitted by law).',
            'Invite you to webinars, events, product demonstrations, and industry conferences.',
            'Analyze market trends and customer needs to improve our service offerings.',
            'Create case studies, testimonials, and success stories (only with your explicit written consent and anonymized where requested).',
          ],
        },
        { type: 'p', text: 'For Website Improvement and Analytics:' },
        {
          type: 'list',
          items: [
            'Analyze Website usage patterns to improve user experience, content, and functionality.',
            'Monitor Website performance, detect technical issues, and ensure security.',
            'Measure the effectiveness of our marketing campaigns and content.',
          ],
        },
        { type: 'p', text: 'For Legal and Security Purposes:' },
        {
          type: 'list',
          items: [
            'Comply with applicable laws, regulations, and legal obligations.',
            'Enforce our Terms and Conditions and protect our legal rights.',
            'Detect, prevent, and investigate fraud, security breaches, or other prohibited activities.',
            'Establish, exercise, or defend legal claims.',
          ],
        },
        { type: 'p', text: 'For IIoT and AI Service Delivery:' },
        {
          type: 'list',
          items: [
            'Process sensor data, machine metrics, and operational information to provide predictive maintenance, real-time monitoring, and analytics dashboards.',
            'Train and refine AI models (only with Client authorization and using anonymized or aggregated data where possible).',
            'Generate automated alerts, reports, and recommendations for industrial operations.',
          ],
        },
      ],
    },
    {
      number: '5',
      title: 'Legal Basis for Processing',
      icon: Scale,
      blocks: [
        { type: 'p', text: 'Under the PDPL (Oman), we process personal data based on:' },
        {
          type: 'list',
          items: [
            'Consent: Where you have given explicit consent for specific processing activities (e.g., marketing communications, cookies, testimonials).',
            'Legitimate Uses: Processing necessary for certain legitimate purposes recognized under the PDPL, including performance of any function under any law, compliance with a court or tribunal order, response to medical emergencies involving a threat to life, employment-related purposes (where applicable), and prevention and detection of fraud or other offences.',
            'Contractual Necessity: Processing necessary to perform a contract with you or to take steps at your request before entering into a contract.',
            'Vital Interests: Processing necessary to protect the vital interests of any individual.',
          ],
        },
        { type: 'p', text: 'Under GDPR (where applicable), for individuals in the European Economic Area (EEA), we rely on:' },
        {
          type: 'list',
          items: [
            'Contractual Necessity (Article 6(1)(b)): Processing necessary for the performance of a contract or pre-contractual steps.',
            'Legitimate Interests (Article 6(1)(f)): Processing necessary for our legitimate business interests, provided your rights and interests do not override those interests.',
            'Consent (Article 6(1)(a)): Processing based on your explicit consent, which you may withdraw at any time.',
            'Legal Obligation (Article 6(1)(c)): Processing necessary to comply with a legal obligation.',
          ],
        },
      ],
    },
    {
      number: '6',
      title: 'Data Sharing and Disclosure',
      icon: Share2,
      blocks: [
        { type: 'p', text: 'We do not sell your personal data. We may share your information in the following circumstances.' },
        { type: 'p', text: 'Service Providers and Vendors: We engage trusted third-party service providers to perform functions on our behalf, including:' },
        {
          type: 'list',
          items: [
            'Cloud hosting and infrastructure providers (e.g., AWS, Azure, Google Cloud).',
            'Customer relationship management (CRM) platforms.',
            'Payment processing services.',
            'Analytics and marketing platforms.',
            'Email and communication services.',
            'Cybersecurity and fraud prevention services.',
            'Legal, accounting, and consulting professionals.',
          ],
        },
        {
          type: 'p',
          text: 'These providers are contractually bound to process data only for specified purposes and to maintain appropriate security and confidentiality measures.',
        },
        { type: 'p', text: 'Technology Partners: For service delivery, we may share relevant information with our technology partners (hardware manufacturers, software vendors, AR/VR platform providers, IIoT sensor manufacturers) to facilitate product procurement, licensing, and support; register warranties and certifications; coordinate technical implementation and integration; and access partner training and support resources.' },
        {
          type: 'p',
          text: 'Business Transfers: In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal data.',
        },
        { type: 'p', text: 'Legal and Regulatory Disclosures: We may disclose personal data when required by law, regulation, legal process, or governmental request, including compliance with court orders, subpoenas, or legal investigations; response to lawful requests by public authorities; and protection of our rights, property, or safety, or those of our users or others.' },
        {
          type: 'p',
          text: 'With Your Consent: We may share your information with third parties when you have given us explicit consent to do so.',
        },
      ],
    },
    {
      number: '7',
      title: 'Data Retention',
      icon: Clock,
      blocks: [
        { type: 'p', text: 'We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:' },
        {
          type: 'list',
          items: [
            'Website Visitor Data: Retained for up to 24 months from the date of last interaction, unless you request deletion earlier.',
            'Client and Prospect Data: Retained for the duration of the business relationship and up to 7 years thereafter for legal, accounting, and tax purposes.',
            'Contract and Billing Records: Retained for 7 years (or longer as required by applicable tax and commercial laws).',
            'IIoT Operational Data: Retained according to the terms of the applicable Statement of Work, typically for the duration of the service engagement plus a reasonable period for analytics and model improvement (with anonymization where possible).',
            'Marketing Data: Retained until you withdraw consent or opt out, after which we will delete or anonymize the data within 30 days.',
          ],
        },
        {
          type: 'p',
          text: 'When personal data is no longer needed, we will securely delete, anonymize, or aggregate it so that it can no longer be associated with you. We may retain anonymized data for research, analytics, and service improvement purposes indefinitely.',
        },
      ],
    },
    {
      number: '8',
      title: 'Data Security',
      icon: ShieldCheck,
      blocks: [
        { type: 'p', text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:' },
        {
          type: 'list',
          items: [
            'Encryption: SSL/TLS encryption for data transmitted via the Website; encryption at rest for stored data where technically feasible.',
            'Access Controls: Role-based access controls, multi-factor authentication, and least-privilege principles for our systems.',
            'Network Security: Firewalls, intrusion detection systems, and regular vulnerability assessments.',
            'Data Minimization: We collect only the data necessary for the stated purposes.',
            'Employee Training: Regular privacy and security training for staff handling personal data.',
            'Incident Response: Documented breach response procedures and notification protocols.',
          ],
        },
        {
          type: 'p',
          text: 'While we take reasonable steps to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use strong passwords and protect your account credentials.',
        },
      ],
    },
    {
      number: '9',
      title: 'Your Rights and Choices',
      icon: UserCheck,
      blocks: [
        { type: 'p', text: 'Depending on your location and applicable laws, you may have the following rights regarding your personal data.' },
        { type: 'p', text: 'Rights Under the PDPL (Oman):' },
        {
          type: 'list',
          items: [
            'Right to Access: Request confirmation of whether we process your personal data and obtain a summary of such data.',
            'Right to Correction and Erasure: Request correction of inaccurate or misleading data, completion of incomplete data, updating of data, or erasure of data that is no longer necessary for the purpose for which it was collected.',
            'Right to Grievance Redressal: Register a grievance with us regarding our processing of your personal data.',
            'Right to Nominate: Nominate another individual who may exercise your rights in the event of your death or incapacity.',
          ],
        },
        { type: 'p', text: 'If you are in the EEA, you additionally have the following rights under GDPR:' },
        {
          type: 'list',
          items: [
            'Right to Data Portability: Receive your data in a structured, commonly used, and machine-readable format.',
            'Right to Object: Object to processing based on legitimate interests or for direct marketing.',
            'Right to Restrict Processing: Request restriction of processing in certain circumstances.',
            'Right to Withdraw Consent: Withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
            'Right to Lodge a Complaint: File a complaint with a supervisory authority in your country of residence, place of work, or place of an alleged infringement.',
          ],
        },
        {
          type: 'p',
          text: 'Exercising Your Rights: To exercise any of these rights, please contact us at ' + CONTACT_EMAIL + ' with the subject line "Data Subject Request." We will respond within the timeframe required by applicable law (typically 30 days under GDPR; as prescribed under the PDPL). We may need to verify your identity before processing your request.',
        },
        {
          type: 'p',
          text: 'Marketing Preferences: You may opt out of marketing communications at any time by clicking the "unsubscribe" link in any marketing email, updating your preferences in your account settings (if applicable), or contacting us directly at ' + CONTACT_EMAIL + '.',
        },
      ],
    },
    {
      number: '10',
      title: 'Cross-Border Data Transfers',
      icon: Globe2,
      blocks: [
        {
          type: 'p',
          text: 'BBST is based in Oman. Your personal data may be transferred to, stored at, or processed in countries other than your country of residence, including Oman and other jurisdictions where our service providers or partners operate.',
        },
        { type: 'p', text: 'When transferring personal data across borders, we ensure appropriate safeguards are in place, including:' },
        {
          type: 'list',
          items: [
            'Standard Contractual Clauses (SCCs) approved by relevant data protection authorities.',
            'Adequacy decisions by the Government of Oman or the European Commission.',
            'Other lawful transfer mechanisms recognized under applicable data protection laws.',
          ],
        },
        {
          type: 'p',
          text: 'IIoT Data: Industrial data collected through IIoT sensors may be processed in cloud environments hosted outside the Client\'s jurisdiction. We will specify data residency options in the applicable Statement of Work and implement appropriate contractual and technical safeguards.',
        },
      ],
    },
    {
      number: '11',
      title: 'Children\'s Privacy',
      icon: Users,
      blocks: [
        {
          type: 'p',
          text: 'Our Website and Services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child under 18, we will take steps to delete such information promptly. If you believe we may have collected data from a child, please contact us immediately.',
        },
      ],
    },
    {
      number: '12',
      title: 'Third-Party Links and Services',
      icon: Link2,
      blocks: [
        {
          type: 'p',
          text: 'Our Website may contain links to third-party websites, partner portals, or social media platforms. This Privacy Policy does not apply to those third-party sites. We encourage you to review the privacy policies of any third-party sites you visit. We are not responsible for the privacy practices or content of such sites.',
        },
      ],
    },
    {
      number: '13',
      title: 'Changes to This Privacy Policy',
      icon: RefreshCw,
      blocks: [
        { type: 'p', text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or technology. When we make material changes, we will:' },
        {
          type: 'list',
          items: [
            'Post the updated Privacy Policy on our Website with a revised "Last Updated" date.',
            'Notify you via email or prominent notice on the Website if the changes are significant.',
            'Obtain renewed consent where required by applicable law.',
          ],
        },
        {
          type: 'p',
          text: 'Your continued use of the Website or Services after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.',
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
              <Lock className="w-4 h-4 mr-2" />
              Legal
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bright Business Services (BBST.ai) — this Privacy Policy
              explains how we collect, use, store, share, and protect your
              personal data in compliance with the Oman PDPL and, where
              applicable, the GDPR.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mt-4 text-sm text-gray-500">
              <span>Effective Date: {EFFECTIVE_DATE}</span>
              <span className="hidden sm:inline">·</span>
              <span>Last Updated: {LAST_UPDATED}</span>
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
                  {section.blocks.map((block, bIndex) =>
                    block.type === 'p' ? (
                      <p key={bIndex} className="text-gray-600 leading-relaxed">
                        {block.text}
                      </p>
                    ) : (
                      <ul key={bIndex} className="space-y-2">
                        {block.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start text-gray-600 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Acknowledgment */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-200 leading-relaxed text-sm uppercase tracking-wide">
                By using our Website and Services, you acknowledge that you
                have read and understood this Privacy Policy and agree to
                the collection, use, and sharing of your information as
                described herein.
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
                14. Contact Us
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                If you have any questions, concerns, or requests regarding
                this Privacy Policy or our data practices, please contact
                Bright Business Services (BBST):
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

            <p className="text-blue-100 text-sm text-center mb-10">
              Data Protection Officer: not currently appointed. Privacy
              requests should be directed to the email address above.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/cookies-policy"
                className="border-2 border-white/40 text-white px-8 py-3 rounded-lg font-semibold hover:border-white transition-all"
              >
                View Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
