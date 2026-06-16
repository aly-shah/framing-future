"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Locale = "en" | "de" | "tr";
export const LOCALES: Locale[] = ["en", "de", "tr"];
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  tr: "TR",
};

type Dict = (typeof dictionaries)["en"];

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      youth: "Youth",
      parents: "Parents",
      school: "School",
      partners: "Partners",
      contact: "Contact",
      book: "Book Your Clarity Call",
    },
    hero: {
      badge: "Less noise. More clarity.",
      titlePre: "For everyone who wants",
      titleHi: "more than standard",
      titlePost: "",
      subPre: "The premium coaching system with",
      subAnd: "and",
      subPost: ".",
      discover: "Discover the method",
      trust1: "ICF-oriented",
      trust2: "Neuro & Future Skills",
      trust3: "GDPR-compliant",
    },
    mission: {
      eyebrow: "Our mission",
      heading: ["Resilience.", "Growth.", "Future readiness."],
      sub: "FramingFuture™ builds resilience and digital strength — for the challenges of today and tomorrow.",
      pre: "FramingFuture™ builds",
      hi1: "resilience",
      mid: "and",
      hi2: "digital strength",
      post: "– for the challenges of today and tomorrow.",
    },
    pillars: {
      eyebrow: "The framework",
      heading: "Three steps from clarity to confidence",
      items: [
        {
          tag: "SELF",
          verb: "Frame it",
          body: "Strength from within. Discover your strengths and build true inner clarity.",
        },
        {
          tag: "WORLD",
          verb: "Shape it",
          body: "Grow together. Learn responsibility, teamwork, and respect in every interaction.",
        },
        {
          tag: "FUTURE",
          verb: "Own it",
          body: "Shape it actively. With future skills and clear vision, you master tomorrow's challenges.",
        },
      ],
    },
    why: {
      eyebrow: "Why FramingFuture™",
      heading: "Clarity, courage, and responsibility",
      body: "FramingFuture™ stands for clarity, courage, and responsibility. Not with empty promises, but with structure, empathy, and future skills. FramingFuture™ is not a trend – it is a system that makes transformation possible.",
      features: [
        {
          title: "ICF-oriented methodology",
          text: "Built on internationally recognised coaching standards.",
        },
        {
          title: "Scientifically grounded",
          text: "Rooted in Neuro & Future Skills research.",
        },
        {
          title: "GDPR-compliant & secure",
          text: "Your data is protected, always.",
        },
        {
          title: "Pilot starts 2026",
          text: "Be among the first to shape the program.",
        },
      ],
      sevdaDesc:
        "A structured, science-backed coaching system that turns pressure into focus and potential into direction.",
    },
    founder: {
      eyebrow: "Meet the founder",
      role: "Coach · KUMON instructor · ICF member",
      body: "Founder of FramingFuture™, coach, KUMON instructor and ICF member. Book one of the limited spots – now.",
      quote: "This first step will change everything.",
    },
    audiences: {
      eyebrow: "Who it's for",
      heading: "One system. Many journeys.",
      sub: "Whether you're growing up, raising a family, teaching, or leading — FramingFuture™ meets you where you are.",
      learnMore: "Learn more",
      items: [
        { title: "Families", text: "Grow together, strong and clear." },
        { title: "Youth", text: "Find focus, confidence & strength." },
        { title: "Moms", text: "Less pressure, more ease in everyday life." },
        { title: "Dads", text: "Less distance, more closeness – where it matters most." },
        { title: "Schools", text: "Bring future skills & resilience into education." },
        { title: "Companies", text: "Show responsibility, empower generations." },
      ],
    },
    cta: {
      eyebrow: "Ready when you are",
      heading: "This first step will change everything.",
      body: "Book a free Clarity Call and discover what FramingFuture™ can do for you, your family, or your organisation.",
      note: "Pilot starts 2026 · Limited spots",
    },
    footer: {
      newsletterHeading: "Stay in the loop",
      newsletterText:
        "Join our newsletter to stay up to date on features and releases.",
      tagline:
        "Less noise. More clarity. The premium coaching system with SEVDA™ and CortexCraft™.",
      returning: "Already a client? Book your next session →",
      navigate: "Navigate",
      legal: "Legal",
      legalItems: ["Imprint", "Privacy Policy", "Cookie Settings"],
      copyright: "© 2026 FramingFuture™. All rights reserved.",
      badges: "ICF-oriented · GDPR-compliant · Pilot starts 2026",
    },
    newsletter: {
      placeholder: "Your email address",
      subscribe: "Subscribe",
      subscribed: "Subscribed ✓",
    },
    booking: {
      eyebrow: "Your first step",
      title: "Book Your Clarity Call",
      subtitle:
        "A free 20-minute call to see if FramingFuture™ is the right fit. Less noise. More clarity.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      iam: "I am a…",
      roles: ["Parent / Family", "Youth", "School", "Company / Partner"],
      clarityOn: "What would you like clarity on?",
      messagePlaceholder: "Tell us a little about your situation…",
      submit: "Request my Clarity Call",
      gdpr: "GDPR-compliant and secure. We never share your data.",
      thankYou: "Thank you!",
      thankYouText:
        "We've received your request and will reach out shortly to confirm your Clarity Call.",
      close: "Close",
    },
    pages: {
      about: {
        title: "About FramingFuture™",
        subtitle:
          "Less noise. More clarity. The story, the method, and the people behind it.",
      },
      youth: {
        title: "For Youth",
        subtitle:
          "Find focus, confidence and strength — and frame a future that's truly yours.",
      },
      parents: {
        title: "For Parents & Families",
        subtitle: "Grow together, strong and clear — less pressure, more closeness.",
      },
      school: {
        title: "For Schools",
        subtitle: "Bring future skills and resilience into education.",
      },
      partners: {
        title: "For Partners & Companies",
        subtitle: "Show responsibility and empower the next generation.",
      },
      contact: {
        title: "Let's talk",
        subtitle:
          "Book your free Clarity Call or send us a message. We'll get back to you shortly.",
        emailLabel: "Email us",
        email: "hello@framingfuture.io",
        responseLabel: "Response time",
        response: "Within 2 working days",
        pilotLabel: "Pilot",
        pilot: "Starts 2026",
      },
    },
  },

  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      youth: "Jugend",
      parents: "Eltern",
      school: "Schule",
      partners: "Partner",
      contact: "Kontakt",
      book: "Klarheits-Gespräch buchen",
    },
    hero: {
      badge: "Weniger Lärm. Mehr Klarheit.",
      titlePre: "Für alle, die",
      titleHi: "mehr als Standard",
      titlePost: "wollen",
      subPre: "Das Premium-Coaching-System mit",
      subAnd: "und",
      subPost: ".",
      discover: "Die Methode entdecken",
      trust1: "ICF-orientiert",
      trust2: "Neuro & Future Skills",
      trust3: "DSGVO-konform",
    },
    mission: {
      eyebrow: "Unsere Mission",
      heading: ["Resilienz.", "Wachstum.", "Zukunftsfähigkeit."],
      sub: "FramingFuture™ stärkt Resilienz und digitale Stärke – für die Herausforderungen von heute und morgen.",
      pre: "FramingFuture™ stärkt",
      hi1: "Resilienz",
      mid: "und",
      hi2: "digitale Stärke",
      post: "– für die Herausforderungen von heute und morgen.",
    },
    pillars: {
      eyebrow: "Das Framework",
      heading: "Drei Schritte von Klarheit zu Selbstvertrauen",
      items: [
        {
          tag: "SELF",
          verb: "Rahme es ein",
          body: "Stärke von innen. Entdecke deine Stärken und baue echte innere Klarheit auf.",
        },
        {
          tag: "WORLD",
          verb: "Gestalte es",
          body: "Gemeinsam wachsen. Lerne Verantwortung, Teamwork und Respekt in jeder Begegnung.",
        },
        {
          tag: "FUTURE",
          verb: "Übernimm es",
          body: "Aktiv gestalten. Mit Future Skills und klarer Vision meisterst du die Herausforderungen von morgen.",
        },
      ],
    },
    why: {
      eyebrow: "Warum FramingFuture™",
      heading: "Klarheit, Mut und Verantwortung",
      body: "FramingFuture™ steht für Klarheit, Mut und Verantwortung. Nicht mit leeren Versprechen, sondern mit Struktur, Empathie und Future Skills. FramingFuture™ ist kein Trend – es ist ein System, das Transformation möglich macht.",
      features: [
        {
          title: "ICF-orientierte Methodik",
          text: "Basierend auf international anerkannten Coaching-Standards.",
        },
        {
          title: "Wissenschaftlich fundiert",
          text: "Verwurzelt in Neuro- & Future-Skills-Forschung.",
        },
        {
          title: "DSGVO-konform & sicher",
          text: "Deine Daten sind jederzeit geschützt.",
        },
        {
          title: "Pilot startet 2026",
          text: "Sei unter den Ersten, die das Programm mitgestalten.",
        },
      ],
      sevdaDesc:
        "Ein strukturiertes, wissenschaftlich fundiertes Coaching-System, das Druck in Fokus und Potenzial in Richtung verwandelt.",
    },
    founder: {
      eyebrow: "Die Gründerin",
      role: "Coach · KUMON-Instruktorin · ICF-Mitglied",
      body: "Gründerin von FramingFuture™, Coach, KUMON-Instruktorin und ICF-Mitglied. Sichere dir jetzt einen der limitierten Plätze.",
      quote: "Dieser erste Schritt verändert alles.",
    },
    audiences: {
      eyebrow: "Für wen",
      heading: "Ein System. Viele Wege.",
      sub: "Ob du erwachsen wirst, eine Familie führst, unterrichtest oder leitest – FramingFuture™ trifft dich dort, wo du stehst.",
      learnMore: "Mehr erfahren",
      items: [
        { title: "Familien", text: "Gemeinsam wachsen, stark und klar." },
        { title: "Jugend", text: "Finde Fokus, Selbstvertrauen & Stärke." },
        { title: "Mütter", text: "Weniger Druck, mehr Leichtigkeit im Alltag." },
        { title: "Väter", text: "Weniger Distanz, mehr Nähe – wo es am wichtigsten ist." },
        { title: "Schulen", text: "Bring Future Skills & Resilienz in die Bildung." },
        { title: "Unternehmen", text: "Verantwortung zeigen, Generationen stärken." },
      ],
    },
    cta: {
      eyebrow: "Bereit, wenn du es bist",
      heading: "Dieser erste Schritt verändert alles.",
      body: "Buche ein kostenloses Klarheits-Gespräch und entdecke, was FramingFuture™ für dich, deine Familie oder deine Organisation tun kann.",
      note: "Pilot startet 2026 · Begrenzte Plätze",
    },
    footer: {
      newsletterHeading: "Bleib auf dem Laufenden",
      newsletterText:
        "Abonniere unseren Newsletter, um über Funktionen und Releases auf dem Laufenden zu bleiben.",
      tagline:
        "Weniger Lärm. Mehr Klarheit. Das Premium-Coaching-System mit SEVDA™ und CortexCraft™.",
      returning: "Schon dabei? Buche deine nächste Session →",
      navigate: "Navigation",
      legal: "Rechtliches",
      legalItems: ["Impressum", "Datenschutz", "Cookie-Einstellungen"],
      copyright: "© 2026 FramingFuture™. Alle Rechte vorbehalten.",
      badges: "ICF-orientiert · DSGVO-konform · Pilot startet 2026",
    },
    newsletter: {
      placeholder: "Deine E-Mail-Adresse",
      subscribe: "Abonnieren",
      subscribed: "Abonniert ✓",
    },
    booking: {
      eyebrow: "Dein erster Schritt",
      title: "Klarheits-Gespräch buchen",
      subtitle:
        "Ein kostenloses 20-minütiges Gespräch, um zu sehen, ob FramingFuture™ zu dir passt. Weniger Lärm. Mehr Klarheit.",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      iam: "Ich bin…",
      roles: ["Elternteil / Familie", "Jugendliche:r", "Schule", "Unternehmen / Partner"],
      clarityOn: "Worüber möchtest du Klarheit gewinnen?",
      messagePlaceholder: "Erzähl uns ein wenig über deine Situation…",
      submit: "Klarheits-Gespräch anfragen",
      gdpr: "DSGVO-konform und sicher. Wir geben deine Daten niemals weiter.",
      thankYou: "Vielen Dank!",
      thankYouText:
        "Wir haben deine Anfrage erhalten und melden uns in Kürze, um dein Klarheits-Gespräch zu bestätigen.",
      close: "Schließen",
    },
    pages: {
      about: {
        title: "Über FramingFuture™",
        subtitle:
          "Weniger Lärm. Mehr Klarheit. Die Geschichte, die Methode und die Menschen dahinter.",
      },
      youth: {
        title: "Für Jugendliche",
        subtitle:
          "Finde Fokus, Selbstvertrauen und Stärke – und gestalte eine Zukunft, die wirklich deine ist.",
      },
      parents: {
        title: "Für Eltern & Familien",
        subtitle: "Gemeinsam wachsen, stark und klar – weniger Druck, mehr Nähe.",
      },
      school: {
        title: "Für Schulen",
        subtitle: "Bring Future Skills und Resilienz in die Bildung.",
      },
      partners: {
        title: "Für Partner & Unternehmen",
        subtitle: "Verantwortung zeigen und die nächste Generation stärken.",
      },
      contact: {
        title: "Sprechen wir",
        subtitle:
          "Buche dein kostenloses Klarheits-Gespräch oder schreib uns. Wir melden uns in Kürze.",
        emailLabel: "Schreib uns",
        email: "hello@framingfuture.io",
        responseLabel: "Antwortzeit",
        response: "Innerhalb von 2 Werktagen",
        pilotLabel: "Pilot",
        pilot: "Startet 2026",
      },
    },
  },

  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkında",
      youth: "Gençlik",
      parents: "Ebeveynler",
      school: "Okul",
      partners: "Partnerler",
      contact: "İletişim",
      book: "Netlik Görüşmesi Planla",
    },
    hero: {
      badge: "Daha az gürültü. Daha çok netlik.",
      titlePre: "Standarttan",
      titleHi: "fazlasını",
      titlePost: "isteyen herkes için",
      subPre: "",
      subAnd: "ve",
      subPost: " ile premium koçluk sistemi.",
      discover: "Yöntemi keşfet",
      trust1: "ICF odaklı",
      trust2: "Nöro & Geleceğin Becerileri",
      trust3: "GDPR uyumlu",
    },
    mission: {
      eyebrow: "Misyonumuz",
      heading: ["Dayanıklılık.", "Büyüme.", "Geleceğe hazırlık."],
      sub: "FramingFuture™ bugünün ve yarının zorlukları için dayanıklılık ve dijital güç inşa eder.",
      pre: "FramingFuture™ bugünün ve yarının zorlukları için",
      hi1: "dayanıklılık",
      mid: "ve",
      hi2: "dijital güç",
      post: "inşa eder.",
    },
    pillars: {
      eyebrow: "Çerçeve",
      heading: "Netlikten özgüvene üç adım",
      items: [
        {
          tag: "SELF",
          verb: "Çerçevele",
          body: "İçten gelen güç. Güçlü yönlerini keşfet ve gerçek bir iç netlik oluştur.",
        },
        {
          tag: "WORLD",
          verb: "Şekillendir",
          body: "Birlikte büyüyün. Her etkileşimde sorumluluk, takım çalışması ve saygıyı öğren.",
        },
        {
          tag: "FUTURE",
          verb: "Sahiplen",
          body: "Aktif olarak şekillendir. Geleceğin becerileri ve net bir vizyonla yarının zorluklarının üstesinden gel.",
        },
      ],
    },
    why: {
      eyebrow: "Neden FramingFuture™",
      heading: "Netlik, cesaret ve sorumluluk",
      body: "FramingFuture™ netlik, cesaret ve sorumluluğu temsil eder. Boş vaatlerle değil; yapı, empati ve geleceğin becerileriyle. FramingFuture™ bir trend değildir – dönüşümü mümkün kılan bir sistemdir.",
      features: [
        {
          title: "ICF odaklı metodoloji",
          text: "Uluslararası kabul görmüş koçluk standartlarına dayanır.",
        },
        {
          title: "Bilimsel temelli",
          text: "Nöro ve geleceğin becerileri araştırmalarına dayanır.",
        },
        {
          title: "GDPR uyumlu & güvenli",
          text: "Verilerin her zaman korunur.",
        },
        {
          title: "Pilot 2026'da başlıyor",
          text: "Programı şekillendiren ilk kişilerden biri ol.",
        },
      ],
      sevdaDesc:
        "Baskıyı odağa, potansiyeli yöne dönüştüren yapılandırılmış, bilime dayalı bir koçluk sistemi.",
    },
    founder: {
      eyebrow: "Kurucuyla tanışın",
      role: "Koç · KUMON eğitmeni · ICF üyesi",
      body: "FramingFuture™'ın kurucusu, koç, KUMON eğitmeni ve ICF üyesi. Sınırlı kontenjanlardan birini hemen ayırt.",
      quote: "Bu ilk adım her şeyi değiştirecek.",
    },
    audiences: {
      eyebrow: "Kimler için",
      heading: "Tek sistem. Birçok yolculuk.",
      sub: "İster büyüyor, ister bir aile yetiştiriyor, ister öğretiyor ya da liderlik ediyor ol — FramingFuture™ seni olduğun yerde karşılar.",
      learnMore: "Daha fazla",
      items: [
        { title: "Aileler", text: "Birlikte büyüyün, güçlü ve net." },
        { title: "Gençlik", text: "Odak, özgüven ve güç bul." },
        { title: "Anneler", text: "Günlük hayatta daha az baskı, daha çok rahatlık." },
        { title: "Babalar", text: "Daha az mesafe, en önemli yerde daha çok yakınlık." },
        { title: "Okullar", text: "Geleceğin becerilerini ve dayanıklılığı eğitime taşı." },
        { title: "Şirketler", text: "Sorumluluk göster, nesilleri güçlendir." },
      ],
    },
    cta: {
      eyebrow: "Sen hazır olduğunda",
      heading: "Bu ilk adım her şeyi değiştirecek.",
      body: "Ücretsiz bir Netlik Görüşmesi planla ve FramingFuture™'ın senin, ailen ya da kurumun için neler yapabileceğini keşfet.",
      note: "Pilot 2026'da başlıyor · Sınırlı kontenjan",
    },
    footer: {
      newsletterHeading: "Gelişmelerden haberdar ol",
      newsletterText:
        "Yeniliklerden ve sürümlerden haberdar olmak için bültenimize abone ol.",
      tagline:
        "Daha az gürültü. Daha çok netlik. SEVDA™ ve CortexCraft™ ile premium koçluk sistemi.",
      returning: "Zaten danışan mısın? Bir sonraki seansını ayırt →",
      navigate: "Menü",
      legal: "Yasal",
      legalItems: ["Künye", "Gizlilik Politikası", "Çerez Ayarları"],
      copyright: "© 2026 FramingFuture™. Tüm hakları saklıdır.",
      badges: "ICF odaklı · GDPR uyumlu · Pilot 2026'da başlıyor",
    },
    newsletter: {
      placeholder: "E-posta adresin",
      subscribe: "Abone ol",
      subscribed: "Abone olundu ✓",
    },
    booking: {
      eyebrow: "İlk adımın",
      title: "Netlik Görüşmesi Planla",
      subtitle:
        "FramingFuture™'ın sana uygun olup olmadığını görmek için ücretsiz 20 dakikalık bir görüşme. Daha az gürültü. Daha çok netlik.",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta",
      iam: "Ben bir…",
      roles: ["Ebeveyn / Aile", "Genç", "Okul", "Şirket / Partner"],
      clarityOn: "Hangi konuda netlik istersin?",
      messagePlaceholder: "Durumun hakkında biraz bilgi ver…",
      submit: "Netlik Görüşmesi talep et",
      gdpr: "GDPR uyumlu ve güvenli. Verilerini asla paylaşmayız.",
      thankYou: "Teşekkürler!",
      thankYouText:
        "Talebini aldık ve Netlik Görüşmeni onaylamak için kısa süre içinde seninle iletişime geçeceğiz.",
      close: "Kapat",
    },
    pages: {
      about: {
        title: "FramingFuture™ Hakkında",
        subtitle:
          "Daha az gürültü. Daha çok netlik. Arkasındaki hikâye, yöntem ve insanlar.",
      },
      youth: {
        title: "Gençler için",
        subtitle:
          "Odak, özgüven ve güç bul — ve gerçekten sana ait bir gelecek çerçevele.",
      },
      parents: {
        title: "Ebeveynler & Aileler için",
        subtitle: "Birlikte büyüyün, güçlü ve net — daha az baskı, daha çok yakınlık.",
      },
      school: {
        title: "Okullar için",
        subtitle: "Geleceğin becerilerini ve dayanıklılığı eğitime taşı.",
      },
      partners: {
        title: "Partnerler & Şirketler için",
        subtitle: "Sorumluluk göster ve yeni nesli güçlendir.",
      },
      contact: {
        title: "Konuşalım",
        subtitle:
          "Ücretsiz Netlik Görüşmeni planla ya da bize yaz. Kısa süre içinde döneriz.",
        emailLabel: "Bize yaz",
        email: "hello@framingfuture.io",
        responseLabel: "Yanıt süresi",
        response: "2 iş günü içinde",
        pilotLabel: "Pilot",
        pilot: "2026'da başlıyor",
      },
    },
  },
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("ff-locale")) as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
      return;
    }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (nav === "de" || nav === "tr") setLocaleState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("ff-locale", l);
    } catch {}
  };

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
