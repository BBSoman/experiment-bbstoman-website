export type Consent = {
  necessary: true;          // always on
  analytics: boolean;
  marketing: boolean;
  version: number;
  updatedAt: string;
};

const COOKIE_NAME = 'bbs_cookie_consent';
const CONSENT_VERSION = 1;
const DAYS = 180;

export function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

export function getCookie(name: string): string | null {
  const hit = document.cookie.split('; ').find((c) => c.startsWith(name + '='));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
}

export function getConsent(): Consent | null {
  try {
    const raw = getCookie(COOKIE_NAME);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return parsed.version === CONSENT_VERSION ? parsed : null; // re-ask if the policy changed
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }) {
  const consent: Consent = {
    necessary: true,
    ...choice,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  setCookie(COOKIE_NAME, JSON.stringify(consent), DAYS);
  applyConsent(consent);
  return consent;
}

export function applyConsent(c: Consent) {
  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied',
    });
  }

  if (!c.analytics) {
    // Clean up Google Analytics cookies if the user withdraws consent.
    document.cookie
      .split('; ')
      .map((s) => s.split('=')[0])
      .filter((n) => n === '_ga' || n.startsWith('_ga_') || n === '_gid')
      .forEach(deleteCookie);
  }
}
