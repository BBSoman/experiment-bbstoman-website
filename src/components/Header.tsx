import React, { useCallback, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

/* ==========================================================================
   Light / dark theme
   --------------------------------------------------------------------------
   Everything the theme switch needs lives in this file: the palette, the
   toggle button, and the state that drives them. Nothing else in the project
   has to change.

   The dark palette is taken from the footer (Tailwind gray-900 / gray-800), so
   dark mode uses the shade visitors already see at the bottom of every page.

   The pages themselves are written entirely in light-mode Tailwind utilities,
   so rather than adding `dark:` variants to thousands of class names, the
   stylesheet below remaps the light utilities the site actually uses whenever
   `<html>` carries the `dark` class. Each rule is `.dark` + the utility, so it
   outranks the utility it overrides no matter which stylesheet loads first.

   Adding new pages later? If they introduce light utilities that aren't listed
   here (say `bg-lime-50`), add a matching line to the relevant section.
   ========================================================================== */

const THEME_STYLE_ID = 'bbs-theme-styles';

/* String.raw keeps the `\/` escapes that Tailwind puts in class names such as
   `bg-slate-50/70` - a normal template literal would swallow the backslash. */
const THEME_CSS = String.raw`
  :root {
    color-scheme: light;
  }

  .dark {
    color-scheme: dark;

    --bbs-surface: #111827;        /* gray-900 - the footer shade, page base */
    --bbs-surface-raised: #1f2937; /* gray-800 - cards and panels */
    --bbs-surface-mid: #18202f;    /* midpoint, used for gradient via-stops */
    --bbs-border: #374151;         /* gray-700 */
    --bbs-text: #f9fafb;
    --bbs-text-muted: #d1d5db;
    --bbs-text-subtle: #9ca3af;
  }

  .dark body {
    background-color: var(--bbs-surface);
    color: var(--bbs-text-muted);
  }

  /* This header. Its own translucent white is left out of the generic rules
     below so the blur effect keeps working. */
  .dark header.bg-white\/95 {
    background-color: rgb(17 24 39 / 0.95);
  }

  /* The hero headline is clipped gradient text built on 'from-white-600',
     which is not a real Tailwind class - it only ever looked white because it
     inherited the section's gradient variables, so it would follow the section
     into the dark. It sits on a dark photo either way, so paint it white. */
  .dark .bg-clip-text.from-white-600 {
    background-image: none;
    color: #ffffff;
  }

  /* Controls that sit on hero photography or on the vivid brand gradient bands
     stay white in both themes - a dark button on a bright purple band reads as
     a hole punched in it. A white surface paired with brand-coloured or near
     black text is always one of those buttons; ordinary cards never carry an
     accent text colour, and the one sticky table cell that uses
     'bg-white text-gray-900' has no 'rounded-lg'. */
  .dark .bg-white\/95.text-blue-700 {
    color: #1d4ed8;
  }

  .dark .bg-white\/95.text-slate-900 {
    color: #0f172a;
  }

  .dark .bg-white.text-blue-600,
  .dark .bg-white.text-blue-700,
  .dark .bg-white.text-slate-900,
  .dark .bg-white.rounded-lg.text-gray-900 {
    background-color: #ffffff;
  }

  .dark .bg-white.text-blue-600 {
    color: #2563eb;
  }

  .dark .bg-white.text-blue-700 {
    color: #1d4ed8;
  }

  .dark .bg-white.text-slate-900 {
    color: #0f172a;
  }

  .dark .bg-white.rounded-lg.text-gray-900 {
    color: #111827;
  }

  .dark .bg-white.text-blue-600.hover\:bg-gray-100:hover {
    background-color: #f3f4f6;
  }

  .dark .bg-white.text-blue-600.hover\:bg-blue-50:hover {
    background-color: #eff6ff;
  }

  .dark .bg-white.text-slate-900.hover\:bg-slate-100:hover {
    background-color: #f1f5f9;
  }

  /* Partner and brand logos are artwork drawn for a white background - several
     are black or dark navy and vanish on a dark card - so the plate they sit on
     keeps its light surface. The first rule catches the bare logo plates on the
     products page; the second catches the partner card header, identified by
     its tint overlay. */
  .dark .bg-white:has(> img:only-child),
  .dark .bg-white.rounded-xl.px-6.py-5,
  .dark .bg-white.rounded-xl.px-4.py-3 {
    background-color: #ffffff;
  }

  /* Brands with no logo file fall back to their name inside the same plate. */
  .dark .bg-white.rounded-xl.px-6.py-5 .text-slate-900,
  .dark .bg-white.rounded-xl.px-4.py-3 .text-slate-900 {
    color: #0f172a;
  }

  /* The category sidebar lists brands with a small inline logo and no plate of
     its own, so it gets one in dark mode. */
  .dark img.object-left {
    background-color: #ffffff;
    border-radius: 0.25rem;
    padding: 1px;
  }

  .dark .bg-white:has(> .bg-gray-100\/10) {
    background-color: #ffffff;
  }

  .dark .bg-white:has(> .bg-gray-100\/10) .text-gray-900 {
    color: #111827;
  }

  .dark .bg-white:has(> .bg-gray-100\/10) .text-gray-700 {
    color: #374151;
  }

  /* Drop shadows disappear against dark surfaces, so cards get a hairline
     outline plus a deeper shadow to keep their edges readable. */
  .dark .shadow-md,
  .dark .shadow-lg,
  .dark .shadow-xl,
  .dark .shadow-2xl {
    box-shadow: 0 0 0 1px rgb(255 255 255 / 0.06), 0 12px 28px rgb(0 0 0 / 0.45);
  }

  /* The swap should feel deliberate rather than instant, but never fight with
     visitors who have asked for reduced motion. */
  @media (prefers-reduced-motion: no-preference) {
    html.bbs-theme-transition,
    html.bbs-theme-transition * {
      transition: background-color 200ms ease, border-color 200ms ease,
        color 200ms ease;
    }
  }

  /* Surfaces */
  .dark .bg-blue-100 { background-color: rgb(59 130 246 / 0.16); }
  .dark .bg-blue-50 { background-color: rgb(59 130 246 / 0.16); }
  .dark .bg-cyan-100 { background-color: rgb(6 182 212 / 0.16); }
  .dark .bg-emerald-100 { background-color: rgb(16 185 129 / 0.16); }
  .dark .bg-gray-100 { background-color: var(--bbs-surface); }
  .dark .bg-gray-200 { background-color: var(--bbs-border); }
  .dark .bg-gray-400 { background-color: var(--bbs-border); }
  .dark .bg-gray-50 { background-color: var(--bbs-surface); }
  .dark .bg-green-100 { background-color: rgb(34 197 94 / 0.16); }
  .dark .bg-orange-100 { background-color: rgb(249 115 22 / 0.16); }
  .dark .bg-pink-100 { background-color: rgb(236 72 153 / 0.16); }
  .dark .bg-purple-100 { background-color: rgb(168 85 247 / 0.16); }
  .dark .bg-red-50 { background-color: rgb(239 68 68 / 0.16); }
  .dark .bg-slate-100 { background-color: var(--bbs-surface); }
  .dark .bg-slate-50 { background-color: var(--bbs-surface); }
  .dark .bg-slate-50\/70 { background-color: var(--bbs-surface-raised); }
  .dark .bg-white { background-color: var(--bbs-surface-raised); }
  .dark .hover\:bg-blue-100:hover { background-color: rgb(59 130 246 / 0.16); }
  .dark .hover\:bg-blue-50:hover { background-color: rgb(59 130 246 / 0.16); }
  .dark .hover\:bg-gray-100:hover { background-color: var(--bbs-surface); }
  .dark .hover\:bg-gray-300:hover { background-color: var(--bbs-border); }
  .dark .hover\:bg-indigo-50:hover { background-color: rgb(99 102 241 / 0.16); }
  .dark .hover\:bg-purple-50:hover { background-color: rgb(168 85 247 / 0.16); }
  .dark .hover\:bg-slate-100:hover { background-color: var(--bbs-surface); }
  .dark .hover\:bg-white:hover { background-color: var(--bbs-surface-raised); }

  /* Text */
  .dark .group:hover .group-hover\:text-blue-600 { color: #60a5fa; }
  .dark .group:hover .group-hover\:text-blue-700 { color: #60a5fa; }
  .dark .group:hover .group-hover\:text-cyan-600 { color: #22d3ee; }
  .dark .group:hover .group-hover\:text-emerald-600 { color: #34d399; }
  .dark .group:hover .group-hover\:text-gray-800 { color: var(--bbs-text); }
  .dark .group:hover .group-hover\:text-green-600 { color: #4ade80; }
  .dark .group:hover .group-hover\:text-orange-600 { color: #fb923c; }
  .dark .group:hover .group-hover\:text-pink-600 { color: #f472b6; }
  .dark .group:hover .group-hover\:text-purple-600 { color: #c084fc; }
  .dark .group:hover .group-hover\:text-slate-600 { color: var(--bbs-text-muted); }
  .dark .group:hover .group-hover\:text-slate-900 { color: var(--bbs-text); }
  .dark .hover\:text-blue-600:hover { color: #60a5fa; }
  .dark .hover\:text-blue-700:hover { color: #60a5fa; }
  .dark .hover\:text-cyan-600:hover { color: #22d3ee; }
  .dark .hover\:text-emerald-600:hover { color: #34d399; }
  .dark .hover\:text-green-600:hover { color: #4ade80; }
  .dark .hover\:text-green-700:hover { color: #4ade80; }
  .dark .hover\:text-green-800:hover { color: #4ade80; }
  .dark .hover\:text-orange-600:hover { color: #fb923c; }
  .dark .hover\:text-pink-600:hover { color: #f472b6; }
  .dark .hover\:text-purple-600:hover { color: #c084fc; }
  .dark .hover\:text-slate-600:hover { color: var(--bbs-text-muted); }
  .dark .hover\:text-slate-900:hover { color: var(--bbs-text); }
  .dark .text-black { color: var(--bbs-text); }
  .dark .text-blue-600 { color: #60a5fa; }
  .dark .text-blue-700 { color: #60a5fa; }
  .dark .text-cyan-600 { color: #22d3ee; }
  .dark .text-cyan-700 { color: #22d3ee; }
  .dark .text-emerald-600 { color: #34d399; }
  .dark .text-emerald-700 { color: #34d399; }
  .dark .text-gray-400 { color: var(--bbs-text-subtle); }
  .dark .text-gray-500 { color: var(--bbs-text-subtle); }
  .dark .text-gray-600 { color: var(--bbs-text-muted); }
  .dark .text-gray-700 { color: var(--bbs-text-muted); }
  .dark .text-gray-800 { color: var(--bbs-text); }
  .dark .text-gray-900 { color: var(--bbs-text); }
  .dark .text-green-600 { color: #4ade80; }
  .dark .text-green-700 { color: #4ade80; }
  .dark .text-green-800 { color: #4ade80; }
  .dark .text-orange-600 { color: #fb923c; }
  .dark .text-orange-700 { color: #fb923c; }
  .dark .text-pink-600 { color: #f472b6; }
  .dark .text-pink-700 { color: #f472b6; }
  .dark .text-purple-600 { color: #c084fc; }
  .dark .text-purple-700 { color: #c084fc; }
  .dark .text-purple-800 { color: #c084fc; }
  .dark .text-red-600 { color: #f87171; }
  .dark .text-slate-400 { color: var(--bbs-text-subtle); }
  .dark .text-slate-500 { color: var(--bbs-text-subtle); }
  .dark .text-slate-600 { color: var(--bbs-text-muted); }
  .dark .text-slate-700 { color: var(--bbs-text-muted); }
  .dark .text-slate-800 { color: var(--bbs-text); }
  .dark .text-slate-900 { color: var(--bbs-text); }

  /* Borders and dividers */
  .dark .border-gray-100 { border-color: var(--bbs-border); }
  .dark .border-gray-200 { border-color: var(--bbs-border); }
  .dark .border-gray-300 { border-color: var(--bbs-border); }
  .dark .border-slate-100 { border-color: var(--bbs-border); }
  .dark .border-slate-200 { border-color: var(--bbs-border); }
  .dark .border-slate-300 { border-color: var(--bbs-border); }
  .dark .divide-gray-100 > :not([hidden]) ~ :not([hidden]) { border-color: var(--bbs-border); }
  .dark .divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: var(--bbs-border); }

  /* Gradient stops */
  .dark .from-blue-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-blue-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-cyan-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-emerald-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-emerald-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-gray-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-green-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-orange-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-orange-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-pink-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-pink-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-purple-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-purple-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-slate-100 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .from-slate-50 { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .hover\:from-purple-200:hover { --tw-gradient-from: var(--bbs-surface) var(--tw-gradient-from-position); }
  .dark .via-white { --tw-gradient-stops: var(--tw-gradient-from), var(--bbs-surface-mid) var(--tw-gradient-via-position), var(--tw-gradient-to); }
  .dark .hover\:to-pink-200:hover { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-amber-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-amber-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-blue-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-emerald-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-gray-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-gray-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-green-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-green-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-indigo-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-indigo-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-pink-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-pink-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-purple-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-purple-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-red-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-red-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-rose-100 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .to-slate-50 { --tw-gradient-to: var(--bbs-surface-raised) var(--tw-gradient-to-position); }
  .dark .bg-clip-text.from-slate-600 { --tw-gradient-from: #cbd5e1 var(--tw-gradient-from-position); }
  .dark .bg-clip-text.from-gray-500 { --tw-gradient-from: #d1d5db var(--tw-gradient-from-position); }
  .dark .bg-clip-text.from-gray-700 { --tw-gradient-from: #d1d5db var(--tw-gradient-from-position); }
  .dark .bg-clip-text.to-gray-600 { --tw-gradient-to: #9ca3af var(--tw-gradient-to-position); }
  .dark .bg-clip-text.to-slate-500 { --tw-gradient-to: #94a3b8 var(--tw-gradient-to-position); }
  .dark .bg-clip-text.to-gray-900 { --tw-gradient-to: #e5e7eb var(--tw-gradient-to-position); }
`;

type Theme = 'light' | 'dark';

/** Absent means "no choice made yet", in which case we follow the OS. */
const STORAGE_KEY = 'bbs-theme';

const readStoredTheme = (): Theme | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    // Private browsing or storage disabled - fall back to the system setting.
    return null;
  }
};

const systemTheme = (): Theme =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
};

const injectThemeStyles = () => {
  if (document.getElementById(THEME_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = THEME_STYLE_ID;
  style.textContent = THEME_CSS;
  document.head.appendChild(style);
};

/* The theme lives in a tiny module-level store rather than component state,
   because the home page renders more than one Header - every toggle on the
   page has to show the same icon after a click. */
let currentTheme: Theme = 'light';
const listeners = new Set<() => void>();

const setTheme = (next: Theme, remember: boolean) => {
  if (remember) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable - the choice just won't survive a reload.
    }
  }
  currentTheme = next;
  applyTheme(next);
  listeners.forEach((notify) => notify());
};

if (typeof document !== 'undefined') {
  injectThemeStyles();
  // Runs while the bundle is still evaluating - before React paints anything -
  // so dark-mode visitors never see a flash of the light theme.
  setTheme(readStoredTheme() ?? systemTheme(), false);

  if (typeof window.matchMedia === 'function') {
    // Visitors who never touched the toggle keep following their OS.
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        if (readStoredTheme() === null) {
          setTheme(event.matches ? 'dark' : 'light', false);
        }
      });
  }

  // Keep other open tabs in sync.
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    setTheme(readStoredTheme() ?? systemTheme(), false);
  });
}

const subscribe = (notify: () => void) => {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
};

const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const theme = useSyncExternalStore(
    subscribe,
    () => currentTheme,
    () => 'light' as Theme
  );

  const toggleTheme = useCallback(() => {
    // Only animate colour changes that come from a deliberate switch.
    const root = document.documentElement;
    root.classList.add('bbs-theme-transition');
    window.setTimeout(() => root.classList.remove('bbs-theme-transition'), 250);
    setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
  }, []);

  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      aria-pressed={isDark}
      className={`p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition-colors ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/service horizontal.png"
              alt="Bright Business Services Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <Link to="/partners" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Partners
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>

            <ThemeToggle />

            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile: the theme toggle stays reachable without opening the menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <Link to="/partners" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Partners
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Products
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full font-medium"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
