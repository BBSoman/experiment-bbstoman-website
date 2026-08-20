import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Eye,
  Brain,
  Cpu,
  Boxes,
  Radio,
  Waves,
} from "lucide-react";

/* ---------------------------------------------------------------------------
   Dynamic hero
   Replaces the single fixed-attachment background with a crossfading,
   slowly-zooming slideshow, plus a floating product visual and drifting tech
   glyphs. All animation CSS is inlined below on purpose: no new component
   file and no index.css change, so nothing can be left half-applied.
--------------------------------------------------------------------------- */

/**
 * Background slides — only real photography from /public, no product shots or
 * anything with baked-in text. Adding another is one line here.
 * `soft: true` applies a light blur, which hides the upscaling on the smaller
 * source files and reads as intentional depth of field behind the headline.
 */
const SLIDES: Array<{ src: string; soft?: boolean }> = [
  { src: "/vr.jpg.jpg" }, // 1200x800, sharp enough at full width
  { src: "/av.jpg", soft: true }, // 600x400
  { src: "/ai.jpg", soft: true }, // 600x316
];

/** Faint drifting glyphs, scattered across the hero. */
const GLYPHS = [
  { Icon: Brain, className: "top-[18%] left-[6%] h-16 w-16", delay: "0s" },
  { Icon: Boxes, className: "top-[64%] left-[12%] h-14 w-14", delay: "-3s" },
  { Icon: Radio, className: "top-[30%] right-[8%] h-16 w-16", delay: "-6s" },
  { Icon: Cpu, className: "bottom-[16%] right-[16%] h-20 w-20", delay: "-9s" },
  { Icon: Waves, className: "top-[8%] right-[32%] h-12 w-12", delay: "-12s" },
];

/** The four capability cards. Tilt lives on a wrapper; see the JSX below. */
const FEATURES = [
  {
    Icon: Brain,
    title: "AI Automation",
    body: "Intelligent automation and machine learning.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    tilt: "rotate-3",
  },
  {
    Icon: Eye,
    title: "Immersive Tech",
    body: "Immersive experiences and virtual environments.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    tilt: "-rotate-3 mt-8",
  },
  {
    Icon: Sparkles,
    title: "ProAV/UCC",
    body: "seamless communication, presentation, and collaboration in business environments.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    tilt: "rotate-2 -mt-4",
  },
  {
    Icon: ArrowRight,
    title: "IIOT",
    body: "data collection, monitoring, and automation for improved efficiency and decision-making.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    tilt: "-rotate-2",
  },
];

/**
 * One slide is visible for a third of the cycle, with a ~1.5s crossfade and a
 * continuous scale to give the Ken Burns drift.
 */
const HERO_CSS = `
.bbs-hero-slide {
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  will-change: opacity, transform;
  animation: bbs-hero-kenburns 27s ease-in-out infinite;
}
.bbs-hero-slide--1 { animation-delay: 0s; }
.bbs-hero-slide--2 { animation-delay: 9s; }
.bbs-hero-slide--3 { animation-delay: 18s; }
/* Lower-resolution sources: blur hides the upscale, and the extra scale stops
   the blurred edges from showing at the frame. */
.bbs-hero-slide--soft { filter: blur(3px); transform-origin: center; }

@keyframes bbs-hero-kenburns {
  0%   { opacity: 0; transform: scale(1.02); }
  5%   { opacity: 0.85; }
  28%  { opacity: 0.85; }
  35%  { opacity: 0; transform: scale(1.14); }
  100% { opacity: 0; transform: scale(1.14); }
}

/* Slow vertical drift for the product cut-out and the glyphs. */
.bbs-hero-float { animation: bbs-hero-float 9s ease-in-out infinite; }
@keyframes bbs-hero-float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(0, -18px, 0); }
}

.bbs-hero-drift { animation: bbs-hero-drift 18s ease-in-out infinite; }
@keyframes bbs-hero-drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
  50%      { transform: translate3d(14px, -26px, 0) rotate(2deg); }
}

/* Feature cards settle into their tilt, then breathe. */
.bbs-hero-card { animation: bbs-hero-float 7s ease-in-out infinite; }
.bbs-hero-card--1 { animation-delay: 0s; }
.bbs-hero-card--2 { animation-delay: -1.75s; }
.bbs-hero-card--3 { animation-delay: -3.5s; }
.bbs-hero-card--4 { animation-delay: -5.25s; }

@media (prefers-reduced-motion: reduce) {
  .bbs-hero-slide { animation: none; transform: none; }
  /* Hold the first slide so the hero still has its image. */
  .bbs-hero-slide--1 { opacity: 0.85; }
  .bbs-hero-float,
  .bbs-hero-drift,
  .bbs-hero-card { animation: none; }
}
`;

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 pt-16"
    >
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />

      {/* Crossfading background slideshow */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`bbs-hero-slide bbs-hero-slide--${i + 1}${
              slide.soft ? " bbs-hero-slide--soft" : ""
            }`}
            style={{ backgroundImage: `url("${slide.src}")` }}
            role="presentation"
          />
        ))}
      </div>

      {/* Scrim: keeps the headline readable no matter which slide is showing */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-slate-900/25" />

      {/* Decorative elements */}
      <div className="bg-grid-pattern absolute inset-0 z-0 opacity-5" />
      <div className="absolute left-10 top-1/4 z-0 h-72 w-72 animate-pulse rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute right-10 top-1/3 z-0 h-72 w-72 animate-pulse rounded-full bg-purple-500 opacity-20 blur-3xl delay-1000" />

      {/* Drifting tech glyphs */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        {GLYPHS.map(({ Icon, className, delay }, i) => (
          <Icon
            key={i}
            aria-hidden="true"
            style={{ animationDelay: delay }}
            className={`bbs-hero-float absolute text-white/15 ${className}`}
          />
        ))}
      </div>

      {/* Floating product cut-out (transparent PNG) */}
      <img
        src="/htcvr.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="bbs-hero-drift pointer-events-none absolute bottom-[6%] left-1/2 z-0 hidden w-64 -translate-x-1/2 opacity-30 lg:left-[46%] lg:block xl:w-80"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-between py-20 lg:flex-row">
          {/* Content */}
          <div className="flex-1 text-center lg:pr-12 lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              Leading Technology Solutions
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Transforming Business using Advanced Technologies
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl lg:mx-0">
              Bright Business Services specializes in cutting-edge artificial
              intelligence, augmented reality, and virtual reality technologies.
              We partner with industry leaders to deliver innovative solutions
              that drive your business forward.
            </p>
            <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact?intent=consultation"
                className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="flex items-center justify-center rounded-lg bg-white/95 px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all hover:bg-white hover:shadow-xl hover:scale-105"
              >
                Explore Products
              </Link>
              <Link
                to="/partners"
                className="flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-blue-700"
              >
                Brands
              </Link>
            </div>
          </div>

          {/* Feature cards — gently floating, tilt straightens on hover */}
          <div className="mt-12 flex-1 lg:mt-0">
            <div className="relative">
              <div className="mx-auto grid max-w-md grid-cols-2 gap-6">
                {FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    /* Wrapper owns the tilt so the inner float animation
                       cannot overwrite it. */
                    className={`transform transition-transform duration-300 hover:rotate-0 ${f.tilt}`}
                  >
                    <div
                      className={`bbs-hero-card bbs-hero-card--${i + 1} h-full rounded-2xl bg-white p-6 shadow-xl`}
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.iconBg}`}
                      >
                        <f.Icon className={`h-6 w-6 ${f.iconColor}`} />
                      </div>
                      <h3 className="mb-2 font-semibold text-black">
                        {f.title}
                      </h3>
                      <p className="text-sm text-gray-700">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
