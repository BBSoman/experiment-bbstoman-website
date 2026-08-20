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
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";

/* ---------------------------------------------------------------------------
   Dynamic hero
   Replaces the single fixed-attachment background with a crossfading,
   slowly-zooming slideshow, plus a floating product visual and drifting tech
   glyphs. All animation CSS is inlined below on purpose: no new component
   file and no index.css change, so nothing can be left half-applied.
--------------------------------------------------------------------------- */

/**
 * Background slides. `bg` is any CSS background-image value, so a slide can be
 * a photograph or pure gradient — the crossfade treats them identically.
 * `soft: true` applies a light blur, which hides the upscaling on the smaller
 * source files and reads as intentional depth of field behind the headline.
 */
const SLIDES: Array<{ id: string; bg: string; soft?: boolean }> = [
  {
    // No photograph on this slide by design. It used to be 'vr.jpg.jpg', a
    // two-portrait composite; the people competed with the headline and the
    // globe, so the gradient carries it instead.
    id: "gradient",
    bg: [
      "radial-gradient(90% 80% at 78% 42%, rgba(59,130,246,0.42), transparent 62%)",
      "radial-gradient(70% 70% at 12% 78%, rgba(139,92,246,0.34), transparent 65%)",
      "radial-gradient(50% 60% at 50% 0%, rgba(56,189,248,0.20), transparent 70%)",
      "linear-gradient(135deg, #0b1220 0%, #172554 48%, #1e1b4b 100%)",
    ].join(", "),
  },
  { id: "av", bg: 'url("/av.jpg")', soft: true }, // 600x400
  { id: "ai", bg: 'url("/ai.jpg")', soft: true }, // 600x316
];

/** Faint drifting glyphs, scattered across the hero. */
const GLYPHS = [
  { Icon: Brain, className: "top-[18%] left-[6%] h-16 w-16", delay: "0s" },
  { Icon: Boxes, className: "top-[64%] left-[12%] h-14 w-14", delay: "-3s" },
  { Icon: Radio, className: "top-[30%] right-[8%] h-16 w-16", delay: "-6s" },
  { Icon: Cpu, className: "bottom-[16%] right-[16%] h-20 w-20", delay: "-9s" },
  { Icon: Waves, className: "top-[8%] right-[32%] h-12 w-12", delay: "-12s" },
];

/**
 * Icons that orbit the globe. No labels by design — each still carries a
 * title/aria-label so the meaning is available to screen readers and on hover.
 * `a` is the starting angle in degrees, `r` the orbit radius as a CSS length.
 */
const ORBIT_OUTER = [
  { Icon: Brain, label: "AI & machine learning", a: 0 },
  { Icon: Eye, label: "AR / VR & immersive tech", a: 60 },
  { Icon: MonitorPlay, label: "ProAV & collaboration", a: 120 },
  { Icon: Cpu, label: "Industrial IoT", a: 180 },
  { Icon: Radio, label: "Connectivity & networks", a: 240 },
  { Icon: ShieldCheck, label: "Secure deployment", a: 300 },
];

const ORBIT_INNER = [
  { Icon: Boxes, label: "Smart spaces", a: 30 },
  { Icon: Waves, label: "Sensing & analytics", a: 150 },
  { Icon: Sparkles, label: "Innovation services", a: 270 },
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

/* --- Globe + orbits ---------------------------------------------------- */
.bbs-globe-stage {
  /* Both orbits must clear the sphere: orbit radius - half a badge > globe/2.
     Outer badges are 56px, inner badges 44px. */
  --globe: 230px;
  --orbit-inner: 170px;
  --orbit-outer: 230px;
  position: relative;
  width: calc(var(--orbit-outer) * 2 + 64px);
  height: calc(var(--orbit-outer) * 2 + 64px);
  max-width: 100%;
}
@media (max-width: 1279px) {
  .bbs-globe-stage { --globe: 200px; --orbit-inner: 150px; --orbit-outer: 202px; }
}
@media (max-width: 1023px) {
  .bbs-globe-stage { --globe: 210px; --orbit-inner: 156px; --orbit-outer: 210px; }
}
@media (max-width: 420px) {
  .bbs-globe-stage { --globe: 140px; --orbit-inner: 112px; --orbit-outer: 150px; }
}

.bbs-globe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--globe);
  height: var(--globe);
  margin: calc(var(--globe) / -2) 0 0 calc(var(--globe) / -2);
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    inset 0 0 60px rgba(30, 64, 175, 0.55),
    inset -18px -12px 50px rgba(0, 0, 0, 0.55),
    0 0 70px rgba(59, 130, 246, 0.35);
  background:
    radial-gradient(circle at 32% 28%, rgba(147, 197, 253, 0.55), transparent 55%),
    radial-gradient(circle at 50% 50%, #1e40af 0%, #0f172a 78%);
}

/* Meridian grid: a repeating gradient that scrolls sideways, so the sphere
   reads as spinning without needing a texture file. */
.bbs-globe__grid {
  position: absolute;
  inset: -10%;
  opacity: 0.55;
  background-image:
    repeating-linear-gradient(to right, rgba(191, 219, 254, 0.45) 0 1px, transparent 1px 34px),
    repeating-linear-gradient(to bottom, rgba(191, 219, 254, 0.3) 0 1px, transparent 1px 30px);
  animation: bbs-globe-spin 14s linear infinite;
}
@keyframes bbs-globe-spin {
  from { background-position: 0 0, 0 0; }
  to   { background-position: -34px 0, 0 0; }
}

/* Latitude arcs, drawn on top to sell the curvature. */
.bbs-globe__arcs { position: absolute; inset: 0; }

/* Specular highlight. */
.bbs-globe__gloss {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 24%, rgba(255, 255, 255, 0.35), transparent 42%);
}

.bbs-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(191, 219, 254, 0.22);
  transform: translate(-50%, -50%);
}
.bbs-ring--outer { width: calc(var(--orbit-outer) * 2); height: calc(var(--orbit-outer) * 2); }
.bbs-ring--inner { width: calc(var(--orbit-inner) * 2); height: calc(var(--orbit-inner) * 2); }

.bbs-orbit { position: absolute; inset: 0; }
.bbs-orbit--outer { animation: bbs-orbit-spin 44s linear infinite; }
.bbs-orbit--inner { animation: bbs-orbit-spin 32s linear infinite reverse; }

@keyframes bbs-orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.bbs-orbit__node {
  position: absolute;
  top: 50%;
  left: 50%;
  /* Rotate out to the angle, push along the radius, then un-rotate so the
     badge itself stays square to the page. */
  transform: translate(-50%, -50%) rotate(var(--a)) translateX(var(--r))
    rotate(calc(var(--a) * -1));
}

/* Cancels the parent ring's rotation so icons never appear upside down. */
.bbs-orbit__keep-upright {
  animation: bbs-orbit-spin 44s linear infinite reverse;
}
.bbs-orbit--inner .bbs-orbit__keep-upright {
  animation: bbs-orbit-spin 32s linear infinite normal;
}

@media (prefers-reduced-motion: reduce) {
  .bbs-hero-slide { animation: none; transform: none; }
  /* Hold the first slide so the hero still has its image. */
  .bbs-hero-slide--1 { opacity: 0.85; }
  .bbs-hero-float,
  .bbs-hero-drift,
  .bbs-globe__grid,
  .bbs-orbit,
  .bbs-orbit__keep-upright { animation: none; }
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
            key={slide.id}
            className={`bbs-hero-slide bbs-hero-slide--${i + 1}${
              slide.soft ? " bbs-hero-slide--soft" : ""
            }`}
            style={{ backgroundImage: slide.bg }}
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

          {/* Globe with orbiting capability icons — icons only, no labels */}
          <div className="mt-14 flex flex-1 justify-center lg:mt-0">
            <div className="bbs-globe-stage">
              {/* Orbit guide rings */}
              <div className="bbs-ring bbs-ring--outer" />
              <div className="bbs-ring bbs-ring--inner" />

              {/* The globe */}
              <div className="bbs-globe">
                <div className="bbs-globe__grid" />
                <svg
                  className="bbs-globe__arcs"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="rgba(191,219,254,0.35)"
                    strokeWidth="0.6"
                  >
                    <ellipse cx="50" cy="50" rx="49" ry="49" />
                    <ellipse cx="50" cy="50" rx="49" ry="17" />
                    <ellipse cx="50" cy="50" rx="49" ry="33" />
                    <ellipse cx="50" cy="50" rx="17" ry="49" />
                    <ellipse cx="50" cy="50" rx="33" ry="49" />
                  </g>
                </svg>
                <div className="bbs-globe__gloss" />
              </div>

              {/* Outer orbit */}
              <div className="bbs-orbit bbs-orbit--outer">
                {ORBIT_OUTER.map(({ Icon, label, a }) => (
                  <div
                    key={label}
                    className="bbs-orbit__node"
                    style={
                      {
                        "--a": `${a}deg`,
                        "--r": "var(--orbit-outer)",
                      } as React.CSSProperties
                    }
                  >
                    <div className="bbs-orbit__keep-upright">
                      <span
                        title={label}
                        aria-label={label}
                        role="img"
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-slate-900/55 text-blue-50 shadow-lg ring-1 ring-inset ring-white/10 backdrop-blur-md transition-colors hover:border-blue-300/60 hover:bg-slate-900/80 hover:text-white"
                      >
                        <Icon className="h-7 w-7" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inner orbit, turning the other way */}
              <div className="bbs-orbit bbs-orbit--inner">
                {ORBIT_INNER.map(({ Icon, label, a }) => (
                  <div
                    key={label}
                    className="bbs-orbit__node"
                    style={
                      {
                        "--a": `${a}deg`,
                        "--r": "var(--orbit-inner)",
                      } as React.CSSProperties
                    }
                  >
                    <div className="bbs-orbit__keep-upright">
                      <span
                        title={label}
                        aria-label={label}
                        role="img"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-slate-900/55 text-blue-50 shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-md transition-colors hover:border-blue-300/60 hover:bg-slate-900/80 hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
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
