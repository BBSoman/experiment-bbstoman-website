import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  BookOpen,
  Layers,
  ClipboardList,
  Lightbulb,
  Lock,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  EyeOff,
  Gavel,
  XCircle,
  CloudRain,
  Scale,
  Globe2,
  Settings2,
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
const ARBITRATION_CITY = 'Muscat';

type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] };

interface Section {
  number: string;
  title: string;
  icon: React.ElementType;
  blocks: Block[];
}

const TermsAndConditionsPage: React.FC = () => {
  const sections: Section[] = [
    {
      number: '1',
      title: 'Definitions and Interpretation',
      icon: BookOpen,
      blocks: [
        {
          type: 'list',
          items: [
            '"BBST", "we", "us", or "our" means Bright Business Services, operating through the website https://bbst.ai/ and its affiliated entities.',
            '"Client", "you", or "your" means any individual, business, or entity that accesses our website, requests information, or engages our services.',
            '"Services" means the technology solutions, consulting, implementation, and support services provided by BBST, including but not limited to Artificial Intelligence (AI) automation, Augmented Reality (AR) solutions, Virtual Reality (VR) solutions, Industrial Internet of Things (IIoT) integrations, and Professional Audio-Visual (ProAV) / Unified Communications and Collaboration (UCC) services.',
            '"Deliverables" means any software, applications, hardware installations, documentation, reports, or other materials provided to the Client as part of the Services.',
            '"Statement of Work" or "SOW" means a written document executed by both parties that describes the specific Services, timelines, milestones, and fees for a particular engagement.',
            '"Intellectual Property" or "IP" means all patents, copyrights, trademarks, trade secrets, know-how, software code, algorithms, models, and other proprietary rights.',
            '"Confidential Information" means all non-public, proprietary, or confidential information disclosed by either party, including but not limited to business plans, technical data, customer information, pricing, and trade secrets.',
          ],
        },
        {
          type: 'p',
          text: 'These Terms apply to: (i) all use of the BBST website; (ii) all proposals, quotations, and service engagements; and (iii) all SOWs and contracts entered into between BBST and the Client. In the event of a conflict, the terms of a signed SOW shall prevail over these general Terms.',
        },
      ],
    },
    {
      number: '2',
      title: 'Scope of Services',
      icon: Layers,
      blocks: [
        { type: 'p', text: 'BBST specializes in delivering cutting-edge technology solutions across the following domains:' },
        {
          type: 'list',
          items: [
            'AI Automation: Machine learning, deep learning, natural language processing (NLP), and predictive analytics solutions designed to automate and optimize business processes.',
            'Immersive Technology (AR/VR): Augmented reality applications, virtual reality training simulations, immersive experiences, virtual showrooms, and interactive displays.',
            'Industrial Internet of Things (IIoT): Smart sensor integration, edge computing, real-time monitoring systems, predictive maintenance solutions, and industrial data analytics.',
            'ProAV / UCC: Professional audio-visual systems, high-definition video solutions, crystal-clear audio systems, live streaming infrastructure, and interactive display installations for business environments.',
          ],
        },
        {
          type: 'p',
          text: 'The specific scope, deliverables, timelines, and responsibilities for each engagement shall be detailed in a mutually executed SOW or formal proposal.',
        },
        {
          type: 'p',
          text: "BBST reserves the right to engage subcontractors, third-party vendors, and technology partners to fulfill its obligations under any SOW, provided that BBST remains fully responsible for the quality and performance of the Services.",
        },
        {
          type: 'p',
          text: "Third-Party Products: Certain Deliverables may incorporate hardware, software, or services provided by BBST's technology partners (including but not limited to VR hardware manufacturers, sensor providers, and cloud platform vendors). Such third-party products are subject to the applicable manufacturer's terms, conditions, and warranties. BBST does not extend warranties beyond those provided by the original manufacturer.",
        },
      ],
    },
    {
      number: '3',
      title: 'Engagement Process',
      icon: ClipboardList,
      blocks: [
        {
          type: 'p',
          text: 'Proposals and Quotations: All proposals and quotations provided by BBST are valid for the period specified therein (default: thirty (30) days from the date of issue) unless otherwise stated in writing. BBST reserves the right to withdraw or modify any proposal prior to acceptance by the Client.',
        },
        {
          type: 'p',
          text: "Acceptance: A Client's engagement of BBST Services is confirmed by: (i) execution of a SOW; (ii) issuance of a purchase order referencing these Terms; or (iii) written confirmation of acceptance of a proposal. Upon acceptance, a binding contract is formed between BBST and the Client.",
        },
        { type: 'p', text: 'Client Obligations: The Client agrees to:' },
        {
          type: 'list',
          items: [
            'Provide timely access to facilities, systems, data, personnel, and resources reasonably required for BBST to perform the Services.',
            'Designate a primary point of contact with authority to make decisions and provide approvals.',
            'Review and approve deliverables, designs, and project milestones within the timeframes specified in the SOW.',
            'Ensure that all data, content, and materials provided to BBST are accurate, lawful, and do not infringe upon the rights of any third party.',
            'Maintain site readiness for hardware installations (ProAV, IIoT, VR equipment), including adequate power, network infrastructure, physical space, and environmental conditions as specified by BBST or the hardware manufacturer.',
            'Obtain all necessary internal approvals, licenses, and consents required for BBST to perform the Services.',
          ],
        },
        {
          type: 'p',
          text: 'Delays: If the Client fails to fulfill its obligations above, causing delays to the project timeline, BBST reserves the right to: (i) adjust the project schedule and delivery dates accordingly; (ii) invoice for standby time and additional resources; and (iii) terminate the engagement for cause if the delay exceeds thirty (30) days.',
        },
      ],
    },
    {
      number: '4',
      title: 'Intellectual Property Rights',
      icon: Lightbulb,
      blocks: [
        {
          type: 'p',
          text: "BBST Pre-Existing IP: All Intellectual Property owned, developed, or licensed by BBST prior to the engagement or outside the scope of the SOW (including proprietary algorithms, frameworks, software libraries, tools, methodologies, and reusable components) shall remain the exclusive property of BBST. BBST grants the Client a non-exclusive, non-transferable, perpetual license to use such Pre-Existing IP solely as integrated into the Deliverables and for the Client's internal business purposes.",
        },
        {
          type: 'p',
          text: "Custom Deliverables: Subject to full payment of all fees, BBST assigns or grants the Client ownership or a broad license (as specified in the SOW) to the custom Deliverables specifically created for the Client under the engagement. This assignment or license does not include BBST's Pre-Existing IP, third-party software, or open-source components incorporated into the Deliverables.",
        },
        {
          type: 'p',
          text: "Third-Party and Open-Source Components: Where Deliverables incorporate third-party software, open-source libraries, or partner technologies, the Client's use of such components is governed by the respective third-party licenses. BBST shall identify any significant open-source components in the Deliverables and provide copies of applicable licenses upon request.",
        },
        {
          type: 'p',
          text: 'Client Data and Content: The Client retains all ownership rights to its data, content, trademarks, and proprietary information provided to BBST in connection with the Services. BBST is granted a limited license to use such materials solely for the purpose of performing the Services and fulfilling its obligations under the SOW.',
        },
        { type: 'p', text: 'AI-Generated Outputs: For AI automation Services, the Client acknowledges that:' },
        {
          type: 'list',
          items: [
            'AI-generated outputs (predictions, recommendations, automated decisions, content) are based on data, models, and algorithms that may have inherent limitations and biases.',
            'BBST does not guarantee that AI outputs will be 100% accurate, error-free, or suitable for every business decision.',
            'The Client is responsible for implementing appropriate human oversight, review, and validation of AI-generated outputs before relying on them for critical business, legal, or safety decisions.',
            "BBST retains ownership of its AI models, training methodologies, and underlying algorithms; the Client receives a license to use the AI outputs and any custom models developed specifically for the Client.",
          ],
        },
        {
          type: 'p',
          text: "Moral Rights: To the extent permitted by applicable law, the Client waives any moral rights in the Deliverables that may restrict BBST's ability to use, modify, or adapt its work product.",
        },
        {
          type: 'p',
          text: "Feedback: The Client may provide suggestions, feedback, or feature requests regarding BBST's Services. The Client hereby grants BBST a perpetual, irrevocable, royalty-free license to use such feedback for any purpose, including product improvement and marketing, without compensation or attribution.",
        },
      ],
    },
    {
      number: '5',
      title: 'Data Privacy, Security, and Compliance',
      icon: Lock,
      blocks: [
        {
          type: 'p',
          text: 'Data Handling: BBST shall collect, process, store, and transmit Client data in accordance with applicable data protection laws, including but not limited to the Personal Data Protection Law (Royal Decree No. 6/2022) (Oman), and the General Data Protection Regulation (GDPR) where applicable to EU data subjects.',
        },
        { type: 'p', text: 'Data Security: BBST implements commercially reasonable technical and organizational security measures to protect Client data, including:' },
        {
          type: 'list',
          items: [
            'Encryption of data in transit and at rest where technically feasible and appropriate.',
            'Access controls and authentication mechanisms.',
            'Regular security assessments and monitoring.',
            'Employee training on data protection and confidentiality.',
          ],
        },
        {
          type: 'p',
          text: 'Data Processing Agreement: Where BBST processes personal data on behalf of the Client, the parties shall execute a separate Data Processing Agreement (DPA) that complies with applicable data protection regulations. In the absence of a separate DPA, the data processing provisions of these Terms shall apply.',
        },
        { type: 'p', text: 'Industrial and IoT Data: For IIoT engagements involving the collection of operational, sensor, or machine data from industrial environments:' },
        {
          type: 'list',
          items: [
            'The Client warrants that it has the legal right and authority to collect, share, and process such data.',
            'BBST shall use such data solely for the purposes of delivering the agreed Services, including system optimization, predictive maintenance, and analytics.',
            "BBST is not responsible for operational downtime, safety incidents, or production losses caused by the Client's legacy systems, network failures, or improper integration of IIoT solutions.",
          ],
        },
        {
          type: 'p',
          text: 'Data Breach Notification: BBST shall notify the Client without undue delay (and in any event within seventy-two (72) hours of becoming aware) of any unauthorized access, disclosure, or breach affecting Client data. BBST shall cooperate with the Client in investigating and mitigating the breach.',
        },
        {
          type: 'p',
          text: "Data Retention and Deletion: Upon termination of the engagement or upon the Client's written request, BBST shall return or securely delete all Client data in its possession, except where retention is required by law or for legitimate business purposes (such as billing records, dispute resolution, or backup archives subject to standard retention schedules).",
        },
        {
          type: 'p',
          text: 'Cross-Border Transfers: If Client data is transferred outside the jurisdiction of collection, BBST shall ensure appropriate safeguards are in place, such as standard contractual clauses, adequacy decisions, or other lawful transfer mechanisms.',
        },
      ],
    },
    {
      number: '6',
      title: 'Fees, Payment, and Expenses',
      icon: CreditCard,
      blocks: [
        {
          type: 'p',
          text: 'Fees: The fees for Services shall be set forth in the applicable SOW, proposal, or quotation. Fees may be structured as fixed project fees, time-and-materials rates, milestone-based payments, or recurring subscription fees, as specified in the SOW.',
        },
        {
          type: 'p',
          text: 'Invoicing: BBST shall invoice the Client according to the payment schedule set forth in the SOW. Unless otherwise specified, invoices are due within thirty (30) days of the invoice date ("Net 30").',
        },
        {
          type: 'p',
          text: 'Payment Methods: Payments shall be made via bank transfer, check, or other methods agreed upon in writing. The Client is responsible for all bank charges, currency conversion fees, and transaction costs.',
        },
        { type: 'p', text: 'Late Payments: If any invoice remains unpaid for more than fifteen (15) days after the due date:' },
        {
          type: 'list',
          items: [
            'BBST may charge late interest at the rate of 1.5% per month (or the maximum rate permitted by applicable law, whichever is lower) on the outstanding balance.',
            'BBST may suspend Services, withhold Deliverables, and disable access to any hosted solutions until payment is received in full.',
            'BBST may terminate the engagement for cause in accordance with Section 11 (Term, Termination, and Suspension).',
            "The Client shall reimburse BBST for all reasonable costs of collection, including attorneys' fees.",
          ],
        },
        {
          type: 'p',
          text: "Taxes: All fees are exclusive of applicable taxes, duties, levies, or governmental charges (including GST, VAT, sales tax, or withholding tax). The Client is responsible for paying all such taxes except those based on BBST's net income.",
        },
        {
          type: 'p',
          text: 'Expenses: Unless otherwise agreed in the SOW, the Client shall reimburse BBST for reasonable out-of-pocket expenses incurred in connection with the Services, including travel, accommodation, shipping, third-party software licenses, hardware procurement, and partner certification costs. BBST shall obtain the Client\'s prior written approval for expenses exceeding a reasonable threshold (e.g., OMR 500 or equivalent per item).',
        },
        {
          type: 'p',
          text: 'Deposits: For certain engagements, BBST may require an upfront deposit (typically 30-50% of the total project fee) before commencing work. Such deposits are non-refundable except where BBST fails to perform its obligations.',
        },
      ],
    },
    {
      number: '7',
      title: 'Warranties and Disclaimers',
      icon: ShieldCheck,
      blocks: [
        {
          type: 'p',
          text: 'Service Warranty: BBST warrants that the Services shall be performed in a professional and workmanlike manner consistent with industry standards for technology consulting and systems integration.',
        },
        {
          type: 'p',
          text: 'Deliverables Warranty: For a period of ninety (90) days from the date of final delivery ("Warranty Period"), BBST warrants that the Deliverables shall substantially conform to the functional specifications set forth in the SOW. If the Deliverables fail to conform, BBST shall, at its sole discretion, either: (i) correct the non-conformity; (ii) provide a workaround; or (iii) refund the fees attributable to the non-conforming Deliverables.',
        },
        {
          type: 'p',
          text: "Hardware Warranty: Hardware components provided as part of the Services are covered by the manufacturer's original warranty only. BBST does not provide additional warranties on third-party hardware beyond passing through the manufacturer's warranty terms. Any hardware defects must be reported to BBST within the Warranty Period for assistance with manufacturer claims.",
        },
        {
          type: 'p',
          text: "Remedy Limitation: The remedies set forth above constitute the Client's sole and exclusive remedies for breach of warranty.",
        },
        {
          type: 'p',
          text: 'DISCLAIMER OF IMPLIED WARRANTIES: EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, BBST DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE. BBST DOES NOT WARRANT THAT THE SERVICES OR DELIVERABLES WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR FREE FROM HARMFUL COMPONENTS.',
        },
        { type: 'p', text: 'AI and Predictive Systems Disclaimer: The Client expressly acknowledges that:' },
        {
          type: 'list',
          items: [
            'AI, machine learning, and predictive analytics systems are probabilistic in nature and may produce inaccurate, incomplete, or unexpected results.',
            'AR/VR experiences may cause discomfort, motion sickness, or other adverse effects in some users; the Client is responsible for providing appropriate user warnings and safety protocols.',
            'IIoT systems depend on network connectivity, sensor accuracy, and environmental conditions; BBST does not guarantee continuous real-time monitoring or 100% prediction accuracy for maintenance or safety alerts.',
            'ProAV installations depend on site conditions, acoustics, and third-party infrastructure; BBST does not guarantee specific performance outcomes in suboptimal environments.',
          ],
        },
        {
          type: 'p',
          text: "No Guarantee of Business Results: BBST does not guarantee that the Services will achieve any specific business outcome, revenue increase, cost reduction, efficiency gain, or competitive advantage. The Client acknowledges that technology implementation involves inherent risks and variables beyond BBST's control.",
        },
      ],
    },
    {
      number: '8',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      blocks: [
        {
          type: 'p',
          text: "CAP ON LIABILITY: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BBST'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS, THE SERVICES, OR THE DELIVERABLES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT TO BBST UNDER THE APPLICABLE SOW IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR OMR 5,000 (OMANI RIAL FIVE THOUSAND), WHICHEVER IS GREATER.",
        },
        {
          type: 'p',
          text: 'EXCLUDED DAMAGES: IN NO EVENT SHALL BBST BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, BUSINESS INTERRUPTION, LOSS OF GOODWILL, OR COST OF SUBSTITUTE SERVICES, EVEN IF BBST HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
        },
        { type: 'p', text: 'Exceptions: The limitations above shall not apply to:' },
        {
          type: 'list',
          items: [
            "BBST's gross negligence or willful misconduct.",
            "BBST's breach of confidentiality obligations under Section 9 (Confidentiality).",
            "BBST's indemnification obligations under Section 10 (Indemnification).",
            'Claims that cannot be limited or excluded under applicable law (such as statutory consumer protections, where applicable).',
          ],
        },
        {
          type: 'p',
          text: 'Basis of Bargain: The parties agree that the limitations and exclusions in this Section are reasonable and reflect a fair allocation of risk, and that BBST would not have entered into the agreement without such limitations.',
        },
      ],
    },
    {
      number: '9',
      title: 'Confidentiality',
      icon: EyeOff,
      blocks: [
        { type: 'p', text: 'Obligations: Each party agrees to:' },
        {
          type: 'list',
          items: [
            "Use the other party's Confidential Information solely for the purpose of exercising its rights and performing its obligations under these Terms.",
            "Protect the other party's Confidential Information with at least the same degree of care it uses to protect its own confidential information of like importance, but in no event less than reasonable care.",
            "Not disclose the other party's Confidential Information to any third party without the prior written consent of the disclosing party, except to employees, contractors, and advisors who have a need to know and are bound by confidentiality obligations no less protective than those herein.",
          ],
        },
        {
          type: 'p',
          text: 'Exclusions: Confidential Information does not include information that: (i) is or becomes publicly available through no fault of the receiving party; (ii) was rightfully known to the receiving party prior to disclosure; (iii) is rightfully received from a third party without restriction; or (iv) is independently developed by the receiving party without use of the disclosing party\'s Confidential Information.',
        },
        {
          type: 'p',
          text: 'Compelled Disclosure: The receiving party may disclose Confidential Information if required by law, regulation, or court order, provided that the receiving party gives the disclosing party prompt written notice (to the extent legally permitted) and cooperates in seeking a protective order.',
        },
        {
          type: 'p',
          text: 'Survival: The confidentiality obligations under this Section shall survive termination of these Terms for a period of five (5) years, or, with respect to trade secrets, for as long as such information remains a trade secret under applicable law.',
        },
      ],
    },
    {
      number: '10',
      title: 'Indemnification',
      icon: Gavel,
      blocks: [
        {
          type: 'p',
          text: "By BBST: BBST shall indemnify, defend, and hold harmless the Client from and against any third-party claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of BBST's: (i) breach of these Terms or an SOW; (ii) gross negligence or willful misconduct; or (iii) infringement of a third party's Intellectual Property rights by BBST's proprietary technology (excluding third-party components and Client materials).",
        },
        {
          type: 'p',
          text: "By Client: The Client shall indemnify, defend, and hold harmless BBST from and against any third-party claims, damages, liabilities, costs, and expenses arising out of the Client's: (i) breach of these Terms or an SOW; (ii) misuse of the Deliverables or Services; (iii) infringement of a third party's Intellectual Property rights through data, content, or materials provided by the Client; (iv) violation of applicable laws or regulations; or (v) negligent or improper operation of IIoT, ProAV, or VR systems post-installation.",
        },
        {
          type: 'p',
          text: 'Indemnification Procedure: The indemnified party shall: (i) promptly notify the indemnifying party in writing of any claim; (ii) cooperate reasonably in the defense; and (iii) allow the indemnifying party to control the defense and settlement, provided that no settlement admitting liability on behalf of the indemnified party may be made without the indemnified party\'s prior written consent.',
        },
      ],
    },
    {
      number: '11',
      title: 'Term, Termination, and Suspension',
      icon: XCircle,
      blocks: [
        {
          type: 'p',
          text: 'Term: These Terms commence on the date of first use of the website or acceptance of a proposal/SOW and continue until terminated in accordance with this Section.',
        },
        {
          type: 'p',
          text: "Termination for Convenience: Either party may terminate an engagement for convenience by providing the other party with thirty (30) days' prior written notice, unless a different notice period is specified in the SOW.",
        },
        { type: 'p', text: 'Termination for Cause: Either party may terminate an engagement immediately upon written notice if the other party:' },
        {
          type: 'list',
          items: [
            'Materially breaches these Terms or an SOW and fails to cure such breach within fifteen (15) days of receiving written notice.',
            'Becomes insolvent, files for bankruptcy, makes an assignment for the benefit of creditors, or has a receiver appointed for substantially all of its assets.',
            'Engages in fraudulent, illegal, or unethical conduct related to the engagement.',
          ],
        },
        { type: 'p', text: 'BBST Right to Suspend: BBST may suspend Services immediately, without liability, if:' },
        {
          type: 'list',
          items: [
            'The Client fails to pay any amounts when due.',
            'The Client violates acceptable use policies.',
            "BBST reasonably believes the Client's use of Services poses a security risk or legal liability.",
            'Required by law or regulatory authority.',
          ],
        },
        { type: 'p', text: 'Effect of Termination: Upon termination or expiration of an engagement:' },
        {
          type: 'list',
          items: [
            'The Client shall immediately pay all outstanding fees and expenses for Services performed and Deliverables delivered prior to termination.',
            "BBST shall deliver to the Client all completed Deliverables and Client data in BBST's possession, subject to payment of all amounts due.",
            'All licenses and rights granted by BBST to the Client shall terminate, except for licenses to Deliverables that have been fully paid for.',
            "Each party shall return or destroy the other party's Confidential Information.",
            'Sections 4 (Intellectual Property), 5 (Data Privacy), 8 (Limitation of Liability), 9 (Confidentiality), 10 (Indemnification), 13 (Governing Law and Dispute Resolution), and any other provisions that by their nature should survive termination, shall survive.',
          ],
        },
      ],
    },
    {
      number: '12',
      title: 'Force Majeure',
      icon: CloudRain,
      blocks: [
        {
          type: 'p',
          text: 'Neither party shall be liable for any failure or delay in performing its obligations under these Terms (except payment obligations) due to causes beyond its reasonable control, including but not limited to: acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, shortages of transportation, facilities, fuel, energy, labor, or materials, government actions, or failure of telecommunications or internet services.',
        },
        {
          type: 'p',
          text: 'Hardware Supply Chain: The Client acknowledges that global supply chain disruptions, semiconductor shortages, shipping delays, and customs clearance issues may affect the delivery timelines for hardware components (ProAV equipment, VR headsets, IIoT sensors). BBST shall use commercially reasonable efforts to mitigate such delays but shall not be liable for delays caused by supply chain disruptions beyond its control.',
        },
        {
          type: 'p',
          text: 'Notification and Mitigation: The affected party shall promptly notify the other party of the force majeure event and use commercially reasonable efforts to mitigate its impact and resume performance.',
        },
        {
          type: 'p',
          text: 'Extended Force Majeure: If a force majeure event continues for more than sixty (60) days, either party may terminate the affected engagement upon written notice without penalty.',
        },
      ],
    },
    {
      number: '13',
      title: 'Governing Law and Dispute Resolution',
      icon: Scale,
      blocks: [
        {
          type: 'p',
          text: 'Governing Law: These Terms and any dispute arising out of or relating to them shall be governed by and construed in accordance with the laws of the Sultanate of Oman, without regard to its conflict of law principles.',
        },
        {
          type: 'p',
          text: `Jurisdiction: The courts of ${ARBITRATION_CITY}, Oman shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms. Both parties submit to the jurisdiction of such courts.`,
        },
        {
          type: 'p',
          text: `Dispute Resolution: The parties agree to first attempt to resolve any dispute amicably through good-faith negotiations. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may escalate the matter to mediation administered by a mutually agreed mediator. If mediation fails, the dispute shall be resolved through binding arbitration in accordance with the Arbitration Law (Royal Decree No. 47/2023), conducted in ${ARBITRATION_CITY} by a sole arbitrator appointed mutually or by an arbitral institution. The arbitration proceedings shall be conducted in English, and the arbitrator's decision shall be final and binding.`,
        },
        {
          type: 'p',
          text: 'Injunctive Relief: Notwithstanding the foregoing, either party may seek injunctive or equitable relief in a court of competent jurisdiction to prevent irreparable harm, including breach of confidentiality or Intellectual Property infringement, without prior mediation or arbitration.',
        },
        {
          type: 'p',
          text: 'Class Action Waiver: To the fullest extent permitted by law, the Client agrees that any dispute resolution proceedings shall be conducted only on an individual basis and not in a class, consolidated, or representative action.',
        },
      ],
    },
    {
      number: '14',
      title: 'Website Use and Acceptable Use Policy',
      icon: Globe2,
      blocks: [
        {
          type: 'p',
          text: 'Access and Use: The Client may access and use the BBST website (https://bbst.ai/) solely for informational purposes, to request services, or to communicate with BBST. The Client agrees not to:',
        },
        {
          type: 'list',
          items: [
            'Use the website for any unlawful purpose or in violation of any applicable laws.',
            'Attempt to gain unauthorized access to any portion of the website, servers, or systems.',
            "Use any automated means (bots, scrapers, crawlers) to access or extract data from the website without BBST's express written consent.",
            'Reverse engineer, decompile, or disassemble any software or technology accessible through the website.',
            'Upload, transmit, or distribute any viruses, malware, or harmful code.',
            'Interfere with or disrupt the integrity or performance of the website or its underlying infrastructure.',
          ],
        },
        {
          type: 'p',
          text: 'Content Accuracy: The information, case studies, partner logos, and technology descriptions on the website are provided for general informational purposes only. BBST does not guarantee that all information is complete, accurate, or current. Product specifications and partner certifications are subject to change without notice.',
        },
        {
          type: 'p',
          text: 'Third-Party Links: The website may contain links to third-party websites (including partner websites). BBST is not responsible for the content, privacy practices, or terms of use of such third-party sites. The Client accesses such links at its own risk.',
        },
        {
          type: 'p',
          text: "Cookies and Tracking: BBST uses cookies and similar technologies to enhance website functionality and analyze usage. By using the website, the Client consents to such use in accordance with BBST's Cookie Policy.",
        },
      ],
    },
    {
      number: '15',
      title: 'General Provisions',
      icon: Settings2,
      blocks: [
        {
          type: 'p',
          text: 'Entire Agreement: These Terms, together with any applicable SOW, proposal, or DPA, constitute the entire agreement between the parties concerning the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, negotiations, and discussions, whether oral or written.',
        },
        {
          type: 'p',
          text: 'Amendment: No amendment, modification, or waiver of any provision of these Terms shall be effective unless in writing and signed by authorized representatives of both parties.',
        },
        {
          type: 'p',
          text: 'Severability: If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, severed from these Terms, and the remaining provisions shall continue in full force and effect.',
        },
        {
          type: 'p',
          text: 'Waiver: No failure or delay by either party in exercising any right, power, or privilege under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise of any right preclude any other or further exercise thereof.',
        },
        {
          type: 'p',
          text: 'Assignment: Neither party may assign or transfer these Terms or any rights or obligations hereunder without the prior written consent of the other party, except that BBST may assign these Terms to an affiliate or in connection with a merger, acquisition, or sale of substantially all of its assets without the Client\'s consent. Any purported assignment in violation of this Section shall be void.',
        },
        {
          type: 'p',
          text: 'Independent Contractors: The parties are independent contractors. Nothing in these Terms shall be construed to create a partnership, joint venture, agency, or employment relationship between the parties.',
        },
        {
          type: 'p',
          text: `Notices: All notices required or permitted under these Terms shall be in writing and delivered by: (i) personal delivery; (ii) registered or certified mail; (iii) nationally recognized courier service; or (iv) email with confirmation of receipt, to the addresses set forth in the SOW or as otherwise designated by written notice. Notices to BBST shall be sent to: ${REGISTERED_ADDRESS}, Email: ${CONTACT_EMAIL}.`,
        },
        {
          type: 'p',
          text: 'Counterparts: These Terms may be executed in counterparts, each of which shall be deemed an original, and all of which together shall constitute one and the same instrument. Electronic signatures and electronic copies shall have the same legal effect as original signatures and paper copies.',
        },
        {
          type: 'p',
          text: 'Headings: The headings in these Terms are for convenience only and shall not affect their interpretation.',
        },
        {
          type: 'p',
          text: 'Language: These Terms are drafted in English. In the event of any conflict between the English version and any translation, the English version shall prevail.',
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
              <FileText className="w-4 h-4 mr-2" />
              Legal
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bright Business Services (BBST.ai) — these Terms govern your
              access to and use of our website, proposals, and engagements
              for AI, AR/VR, IIoT, and ProAV / UCC services.
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
                By accessing the BBST website, requesting a proposal,
                executing a Statement of Work, or otherwise engaging BBST's
                services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and Conditions. If you
                do not agree to these Terms, you must not use the website or
                engage BBST's services.
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
                16. Contact Information
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                If you have any questions about these Terms and Conditions,
                please contact Bright Business Services (BBST):
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Mail className="w-6 h-6 text-white mx-auto mb-3" />
                <div className="text-blue-100 text-sm mb-1">Email</div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white font-semibold break-all hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Phone className="w-6 h-6 text-white mx-auto mb-3" />
                <div className="text-blue-100 text-sm mb-1">Phone</div>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
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

export default TermsAndConditionsPage;
