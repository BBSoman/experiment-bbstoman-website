import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { getConsent, saveConsent, applyConsent } from '../utils/cookies';

type RowProps = {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

const Row: React.FC<RowProps> = ({ title, desc, checked, disabled, onChange }) => (
  <label className="flex items-start justify-between gap-4 cursor-pointer">
    <span>
      <span className="block font-medium">{title}</span>
      <span className="block text-sm text-gray-400">{desc}</span>
    </span>
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      className="mt-1 h-5 w-5 accent-blue-600 disabled:opacity-50"
    />
  </label>
);

const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getConsent();

    if (existing) {
      applyConsent(existing);
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      setOpen(true);
    }

    // Let the footer (or any other element) reopen the preferences panel.
    const reopen = () => {
      setShowSettings(true);
      setOpen(true);
    };

    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  const commit = (choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setOpen(false);
    setShowSettings(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">We use cookies</h3>
              <p className="text-gray-400 text-sm max-w-2xl">
                We use essential cookies to run this site and, with your permission,
                analytics cookies to understand how it is used. Read our{' '}
                <Link to="/cookies-policy" className="text-blue-400 underline hover:text-white">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cookie banner"
            className="text-gray-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showSettings && (
          <div className="mt-5 space-y-3 border-t border-gray-800 pt-5">
            <Row
              title="Strictly necessary"
              desc="Required for the site to work. Always active."
              checked
              disabled
            />
            <Row
              title="Analytics"
              desc="Google Analytics, to measure traffic and improve the site."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Row
              title="Marketing"
              desc="Used to personalise ads and measure campaigns."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => setShowSettings((s) => !s)}
            className="px-5 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
          >
            {showSettings ? 'Hide settings' : 'Cookie settings'}
          </button>
          <button
            onClick={() => commit({ analytics: false, marketing: false })}
            className="px-5 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
          >
            Reject all
          </button>
          {showSettings && (
            <button
              onClick={() => commit({ analytics, marketing })}
              className="px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              Save preferences
            </button>
          )}
          <button
            onClick={() => commit({ analytics: true, marketing: true })}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
