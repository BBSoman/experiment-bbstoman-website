import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";

/* ---------------------------------------------------------------------------
   Our Expertise
   The six lines of business, mirroring the Products page so a visitor sees the
   same names in both places. Each `categoryId` is a real id from CATEGORIES in
   ProductsPage.tsx, and each card deep-links to that filtered category via
   /products?category=<id>. Names, gradients and images are taken from the
   matching category on purpose — one wording, one colour, one photo per line.
--------------------------------------------------------------------------- */

type Service = {
  title: string;
  categoryId: string;
  description: string;
  features: string[];
  gradient: string;
  /** File in /public. */
  image: string;
  /**
   * 'cover' for photographs that can fill the header.
   * 'contain' for cut-out product art with a transparent background — those
   * are centred on the card's own gradient instead, because stretching a
   * cut-out edge-to-edge just shows empty space.
   */
  fit: "cover" | "contain";
};

const SERVICES: Service[] = [
  {
    title: "Screens, LED Walls & Digital Signage",
    categoryId: "display-projection",
    description:
      "Professional displays, LED video walls and digital signage — from panel-level manufacturing with BOE to complete visual installations, indoor and outdoor.",
    features: [
      "LED Video Walls",
      "LED Poster Screens",
      "Outdoor LED",
      "Digital Signage",
      "All-In-One Displays",
    ],
    gradient: "from-indigo-500 to-blue-600",
    // BOE outdoor LED cabinets: unmistakably LED, and no baked-in text.
    image: "outdoorseries.png",
    fit: "cover",
  },
  {
    title: "Meeting Room & AV Systems",
    categoryId: "professional-av",
    description:
      "End-to-end audio-visual systems for meeting rooms, auditoriums and control rooms — signal distribution, room kits and fully integrated environments.",
    features: [
      "Room Kits",
      "AV over IP",
      "Control Rooms",
      "Auditoriums",
      "Video Conferencing",
    ],
    gradient: "from-sky-500 to-cyan-600",
    image: "av.jpg",
    fit: "cover",
  },
  {
    title: "AI & Video Analytics",
    categoryId: "enterprise-ai",
    description:
      "Applied AI for the enterprise — language, diagnostics and decision support, plus camera-based intelligence for inspection, monitoring and analytics.",
    features: [
      "Machine Learning",
      "Computer Vision",
      "Predictive Analytics",
      "Smart Cameras",
    ],
    gradient: "from-amber-500 to-orange-600",
    image: "ai.jpg",
    fit: "cover",
  },
  {
    title: "VR, AR & Immersive",
    categoryId: "immersive-xr",
    description:
      "Headsets, smart glasses and immersive platforms for training, remote assistance and enterprise extended reality — plus 3D digital twins and simulation.",
    features: [
      "Enterprise VR",
      "Smart Glasses",
      "Training Simulation",
      "Remote Assistance",
      "3D Digital Twins",
    ],
    gradient: "from-fuchsia-500 to-pink-600",
    image: "vr.jpg.jpg",
    fit: "cover",
  },
  {
    title: "Smart Buildings & IoT Sensors",
    categoryId: "smart-spaces-iot",
    description:
      "Wireless sensing, condition monitoring and connected-building infrastructure that makes physical spaces measurable — and machines predictable.",
    features: [
      "Wireless Sensors",
      "Condition Monitoring",
      "Predictive Maintenance",
      "Real-Time Monitoring",
    ],
    gradient: "from-rose-500 to-red-600",
    image: "workplacegoto.png",
    fit: "cover",
  },
  {
    title: "Networking, Wi-Fi & Private 5G",
    categoryId: "networking",
    description:
      "Wired and wireless network infrastructure, guest access and captive-portal platforms for demanding environments — the layer everything else runs on.",
    features: ["Wi-Fi 6 / 6E", "Private 5G", "Guest Access", "Captive Portal"],
    gradient: "from-cyan-500 to-blue-600",
    /* Not 'advancednetwork.png': that file is a fully transparent line diagram
       (0% opaque pixels), so it renders as a washed-out smudge on a card.
       G-Reigns 'core' is a cut-out of real network hardware instead. */
    image: "core.png",
    fit: "contain",
  },
];

/**
 * The theme switch in Header.tsx remaps light utilities under '.dark'. There,
 * a 'bg-white' section and a 'bg-white' card resolve to the same raised
 * surface, which would make the cards vanish into the band — so the band gets
 * its own class and sits one step darker than the cards it holds.
 */
const SERVICES_CSS = `
.bbs-expertise-band { background-color: #ffffff; }
.dark .bbs-expertise-band { background-color: var(--bbs-surface, #111827); }
`;

const Services: React.FC = () => {
  return (
    <section id="services" className="bbs-expertise-band py-20">
      <style dangerouslySetInnerHTML={{ __html: SERVICES_CSS }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Solutions That Drive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From LED video walls and meeting rooms to AI, immersive technology,
            connected buildings and the networks underneath — we design, supply
            and support the technology that transforms how businesses operate.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.categoryId}
              to={`/products?category=${service.categoryId}`}
              className="group relative flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden"
            >
              {/* Image header */}
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                {service.fit === "contain" && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                  />
                )}
                <img
                  src={`/${service.image}`}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                    service.fit === "cover"
                      ? "object-cover"
                      : "object-contain p-4"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium transition-colors group-hover:bg-blue-100 group-hover:text-blue-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* mt-auto keeps this pinned to the card foot, so the six cards
                    line up however long their copy runs. */}
                <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-blue-600">
                  Explore products
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
