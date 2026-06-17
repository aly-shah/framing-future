"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Categories = {
  necessary: true;
  functional: boolean;
  analytical: boolean;
  performance: boolean;
  advertisement: boolean;
};

const STORAGE_KEY = "ff-cookie-consent";

const CATEGORY_INFO: { key: keyof Omit<Categories, "necessary">; name: string; desc: string }[] = [
  { key: "functional", name: "Functional", desc: "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features." },
  { key: "analytical", name: "Analytical", desc: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc." },
  { key: "performance", name: "Performance", desc: "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors." },
  { key: "advertisement", name: "Advertisement", desc: "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns." },
];

const DENY: Categories = { necessary: true, functional: false, analytical: false, performance: false, advertisement: false };
const GRANT: Categories = { necessary: true, functional: true, analytical: true, performance: true, advertisement: true };

type Ctx = { openSettings: () => void };
const CookieCtx = createContext<Ctx | null>(null);
export const useCookieConsent = () => {
  const c = useContext(CookieCtx);
  if (!c) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return c;
};

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [decided, setDecided] = useState(true); // assume decided until we read storage
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<Categories>(DENY);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setPrefs({ ...DENY, ...JSON.parse(raw), necessary: true });
        setDecided(true);
      } else {
        setDecided(false); // show banner
      }
    } catch {
      setDecided(false);
    }
  }, []);

  const save = (c: Categories) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {}
    setPrefs(c);
    setDecided(true);
    setModalOpen(false);
  };

  const openSettings = () => setModalOpen(true);
  const showBanner = !decided && !modalOpen;

  return (
    <CookieCtx.Provider value={{ openSettings }}>
      {children}

      {/* Banner */}
      {showBanner && (
        <div className="fixed bottom-4 inset-x-4 z-[90] sm:right-auto sm:left-6 sm:max-w-md animate-fade-up">
          <div className="rounded-2xl border border-line bg-ink-card text-white shadow-2xl p-6">
            <h3 className="font-display text-lg font-semibold">We value your privacy</h3>
            <p className="text-white/60 text-sm mt-2 leading-relaxed">
              We use cookies to help you navigate efficiently and perform certain functions. You can accept all,
              reject all, or customise your preferences.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <button onClick={() => save(GRANT)} className="btn-primary !py-2 !px-4 text-sm flex-1 min-w-[120px]">
                Accept All
              </button>
              <button onClick={() => save(DENY)} className="btn-outline text-white !py-2 !px-4 text-sm flex-1 min-w-[100px]">
                Reject All
              </button>
              <button onClick={() => setModalOpen(true)} className="btn-outline text-white !py-2 !px-4 text-sm flex-1 min-w-[110px]">
                Customise
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customise modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto bg-ink-card border border-line rounded-3xl shadow-2xl animate-modal-in">
            <div className="sticky top-0 bg-ink-card border-b border-line p-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Customise Consent Preferences</h3>
              </div>
              <button onClick={() => setModalOpen(false)} aria-label="Close" className="p-1.5 text-white/60 hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <p className="text-white/60 text-sm leading-relaxed">
                We use cookies to help you navigate efficiently and perform certain functions. You will find
                detailed information about all cookies under each consent category below.
              </p>

              {/* Necessary — always active */}
              <div className="mt-5 rounded-xl border border-line p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Necessary</span>
                  <span className="text-xs font-semibold text-accent">Always Active</span>
                </div>
                <p className="text-white/55 text-sm mt-2 leading-relaxed">
                  Necessary cookies are required to enable the basic features of this site, such as providing
                  secure log-in or adjusting your consent preferences. These cookies do not store any personally
                  identifiable data.
                </p>
              </div>

              {/* Optional categories */}
              {CATEGORY_INFO.map((cat) => (
                <div key={cat.key} className="mt-3 rounded-xl border border-line p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">{cat.name}</span>
                    <button
                      onClick={() => setPrefs((p) => ({ ...p, [cat.key]: !p[cat.key] }))}
                      aria-pressed={prefs[cat.key]}
                      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                        prefs[cat.key] ? "bg-accent" : "bg-white/15"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          prefs[cat.key] ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-ink-card border-t border-line p-5 flex flex-wrap gap-2">
              <button onClick={() => save(DENY)} className="btn-outline text-white !py-2 !px-4 text-sm flex-1 min-w-[100px]">
                Reject All
              </button>
              <button onClick={() => save(prefs)} className="btn-outline text-white !py-2 !px-4 text-sm flex-1 min-w-[150px]">
                Save My Preferences
              </button>
              <button onClick={() => save(GRANT)} className="btn-primary !py-2 !px-4 text-sm flex-1 min-w-[110px]">
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieCtx.Provider>
  );
}
