import { Locale } from "./i18n";

export type ParentsContent = (typeof parentsContent)["en"];

export const PARENT_PROGRAM_META = [
  { title: "SEVDA™ Connect", img: "/assets/prog-flow.png", color: "#5b6b8c", colorTo: "#7d8db0", cat: "WORLD", icon: "M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10" },
  { title: "SEVDA™ Core", img: "/assets/prog-core.png", color: "#ec4899", colorTo: "#f472b6", cat: "WORLD", icon: "M7 11V7a2 2 0 0 1 4 0M11 11V5a2 2 0 0 1 4 0v6M15 9a2 2 0 0 1 4 0v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3l-2-3.5a1.6 1.6 0 0 1 2.7-1.6L7 12" },
  { title: "SEVDA™ Launch", img: "/assets/prog-launch.png", color: "#f0673b", colorTo: "#fb8a63", cat: "FUTURE", icon: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 20h6M10 22h4" },
];

export const PARENT_PACKAGES_META = [
  { name: "Basic Digital Quest", price: "€2,142", monthly: "€89", featured: false },
  { name: "Premium Focus Quest", price: "€7,735", monthly: "€323", featured: true },
  { name: "Elite Future Legacy", price: "€17,850", monthly: "€744", featured: false },
];

export const PARENT_CONNECT_META = { name: "SEVDA™ Connect", basis: "€1,785", premium: "€3,570" };

type ParentsDict = {
  hero: { title: string; subtitle: string; button: string };
  steps: { title: string; desc: string }[];
  programs: { heading: string; subtitle: string; learnMore: string; items: { desc: string; tags: string[] }[] };
  whyTitle: string;
  why: { title: string; desc: string }[];
  ladder: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    monthlyPrefix: string;
    monthlySuffix: string;
    packages: { name: string; tier: string; desc: string; features: string[] }[];
    connect: { tag: string; desc: string; basisLabel: string; premiumLabel: string };
  };
  cta: { heading: string };
};

export const parentsContent: Record<Locale, ParentsDict> = {
  en: {
    hero: {
      title: "Because the future begins at home",
      subtitle: "I help you empower your child – with clarity, transparency, and sustainable growth.",
      button: "Book a Parent Call",
    },
    steps: [
      { title: "Transparent progress", desc: "Gain insights into your child's development – clear and easy to understand." },
      { title: "Empowerment instead of control", desc: "I strengthen your child's self-responsibility – without pressure or chasing." },
    ],
    programs: {
      heading: "Our Programs For Parents",
      subtitle: "Coaching that meets you where you are – practical, empathetic, and sustainable.",
      learnMore: "Learn More",
      items: [
        { desc: "Build calm routines and family systems that work. Learn how to balance boundaries and empathy for long-term connection.", tags: ["6 Weeks", "Family Planner"] },
        { desc: "Strengthen your emotional intelligence as a parent. Gain tools for conflict resolution and compassionate conversations.", tags: ["8 Weeks", "Live Sessions"] },
        { desc: "Empower your child's growth with future-oriented coaching methods and digital resilience.", tags: ["8 Weeks", "SEVDA™ Framework"] },
      ],
    },
    whyTitle: "Why it works",
    why: [
      { title: "ICF-oriented", desc: "methodology" },
      { title: "SEVDA™", desc: "method gives you clear orientation" },
      { title: "Certified", desc: "Professional Coach (CTA-CPC)" },
      { title: "Pilot starts 2026", desc: "Transparent, no overpromises" },
    ],
    ladder: {
      eyebrow: "The Package Ladder",
      heading: "Three doors. One direction.",
      subtitle: "Each package is self-contained. Start where your family is – upgrade later if the journey grows.",
      monthlyPrefix: "or",
      monthlySuffix: "/month over 24 months",
      packages: [
        {
          name: "Basic Digital Quest",
          tier: "Entry Tier",
          desc: "A focused starting point. One module, group format, fully gamified. The first real change happens here.",
          features: [
            "One SEVDA™ module of your choice (group format)",
            "CortexCraft™ gamification access",
            "Parent kickoff & closing call",
            "Written progress report",
          ],
        },
        {
          name: "Premium Focus Quest",
          tier: "Most Chosen · Most Balanced",
          desc: "The complete coaching journey – two SEVDA™ modules with deep 1:1 work, ideal for teens at a turning point.",
          features: [
            "Two SEVDA™ modules in Premium 1:1 format",
            "Personalised CortexCraft™ progression",
            "Monthly parent integration session",
            "Mid-point & final development reports",
            "Priority communication access",
          ],
        },
        {
          name: "Elite Future Legacy",
          tier: "Full Transformation",
          desc: "A 12-month transformation arc – all five SEVDA™ pillars, 1:1 throughout, with full family integration.",
          features: [
            "All five SEVDA™ modules in Premium 1:1",
            "12 months of continuous mentorship",
            "Family system integration (both parents)",
            "Quarterly development dossier",
            "VIP access & flexible scheduling",
          ],
        },
      ],
      connect: {
        tag: "Parent · Child · Connection",
        desc: "For families who want to work together. A 6-session program for parent and child – communication, repair, mutual understanding. Available as standalone module without the full package.",
        basisLabel: "Basis (group)",
        premiumLabel: "Premium (1:1)",
      },
    },
    cta: { heading: "Start Shaping Your Future" },
  },

  de: {
    hero: {
      title: "Weil die Zukunft zu Hause beginnt",
      subtitle: "Ich helfe dir, dein Kind zu stärken – mit Klarheit, Transparenz und nachhaltigem Wachstum.",
      button: "Eltern-Gespräch buchen",
    },
    steps: [
      { title: "Transparenter Fortschritt", desc: "Erhalte Einblicke in die Entwicklung deines Kindes – klar und leicht verständlich." },
      { title: "Stärkung statt Kontrolle", desc: "Ich stärke die Eigenverantwortung deines Kindes – ohne Druck oder Hinterherlaufen." },
    ],
    programs: {
      heading: "Unsere Programme für Eltern",
      subtitle: "Coaching, das dich dort abholt, wo du stehst – praktisch, empathisch und nachhaltig.",
      learnMore: "Mehr erfahren",
      items: [
        { desc: "Baue ruhige Routinen und Familiensysteme auf, die funktionieren. Lerne, Grenzen und Empathie für eine langfristige Verbindung auszubalancieren.", tags: ["6 Wochen", "Familienplaner"] },
        { desc: "Stärke deine emotionale Intelligenz als Elternteil. Erhalte Werkzeuge für Konfliktlösung und mitfühlende Gespräche.", tags: ["8 Wochen", "Live-Sitzungen"] },
        { desc: "Stärke das Wachstum deines Kindes mit zukunftsorientierten Coaching-Methoden und digitaler Resilienz.", tags: ["8 Wochen", "SEVDA™ Framework"] },
      ],
    },
    whyTitle: "Warum es funktioniert",
    why: [
      { title: "ICF-orientierte", desc: "Methodik" },
      { title: "SEVDA™", desc: "Methode gibt dir klare Orientierung" },
      { title: "Zertifiziert", desc: "Professional Coach (CTA-CPC)" },
      { title: "Pilot startet 2026", desc: "Transparent, keine leeren Versprechen" },
    ],
    ladder: {
      eyebrow: "Die Paket-Leiter",
      heading: "Drei Türen. Eine Richtung.",
      subtitle: "Jedes Paket ist in sich abgeschlossen. Starte dort, wo deine Familie steht – und steige später auf, wenn die Reise wächst.",
      monthlyPrefix: "oder",
      monthlySuffix: "/Monat über 24 Monate",
      packages: [
        {
          name: "Basis Digital-Quest",
          tier: "Einstiegsstufe",
          desc: "Ein fokussierter Startpunkt. Ein Modul, Gruppenformat, voll gamifiziert. Die erste echte Veränderung passiert hier.",
          features: [
            "Ein SEVDA™ Modul deiner Wahl (Gruppenformat)",
            "CortexCraft™ Gamification-Zugang",
            "Eltern-Kickoff & Abschlussgespräch",
            "Schriftlicher Fortschrittsbericht",
          ],
        },
        {
          name: "Premium Fokus-Quest",
          tier: "Am beliebtesten · Am ausgewogensten",
          desc: "Die komplette Coaching-Reise – zwei SEVDA™ Module mit intensiver 1:1-Arbeit, ideal für Jugendliche an einem Wendepunkt.",
          features: [
            "Zwei SEVDA™ Module im Premium-1:1-Format",
            "Personalisierte CortexCraft™ Progression",
            "Monatliche Eltern-Integrationssitzung",
            "Zwischen- & Abschlussberichte",
            "Bevorzugter Kommunikationszugang",
          ],
        },
        {
          name: "Elite Zukunfts-Vermächtnis",
          tier: "Volle Transformation",
          desc: "Ein 12-monatiger Transformationsbogen – alle fünf SEVDA™ Säulen, durchgehend 1:1, mit voller Familienintegration.",
          features: [
            "Alle fünf SEVDA™ Module im Premium 1:1",
            "12 Monate kontinuierliches Mentoring",
            "Familiensystem-Integration (beide Eltern)",
            "Vierteljährliches Entwicklungsdossier",
            "VIP-Zugang & flexible Terminplanung",
          ],
        },
      ],
      connect: {
        tag: "Eltern · Kind · Verbindung",
        desc: "Für Familien, die gemeinsam arbeiten wollen. Ein 6-Sitzungen-Programm für Eltern und Kind – Kommunikation, Versöhnung, gegenseitiges Verständnis. Auch als eigenständiges Modul ohne das volle Paket verfügbar.",
        basisLabel: "Basis (Gruppe)",
        premiumLabel: "Premium (1:1)",
      },
    },
    cta: { heading: "Beginne, deine Zukunft zu gestalten" },
  },

  tr: {
    hero: {
      title: "Çünkü gelecek evde başlar",
      subtitle: "Çocuğunu güçlendirmene yardım ediyorum – netlik, şeffaflık ve sürdürülebilir büyümeyle.",
      button: "Ebeveyn Görüşmesi Ayırt",
    },
    steps: [
      { title: "Şeffaf ilerleme", desc: "Çocuğunun gelişimine dair içgörüler edin – net ve anlaşılması kolay." },
      { title: "Kontrol yerine güçlendirme", desc: "Çocuğunun öz-sorumluluğunu güçlendiririm – baskı ya da kovalamaca olmadan." },
    ],
    programs: {
      heading: "Ebeveynler için Programlarımız",
      subtitle: "Seni olduğun yerde karşılayan koçluk – pratik, empatik ve sürdürülebilir.",
      learnMore: "Daha fazla",
      items: [
        { desc: "İşe yarayan sakin rutinler ve aile sistemleri kur. Uzun vadeli bağ için sınırları ve empatiyi dengelemeyi öğren.", tags: ["6 Hafta", "Aile Planlayıcı"] },
        { desc: "Bir ebeveyn olarak duygusal zekânı güçlendir. Çatışma çözümü ve şefkatli konuşmalar için araçlar edin.", tags: ["8 Hafta", "Canlı Seanslar"] },
        { desc: "Geleceğe yönelik koçluk yöntemleri ve dijital dayanıklılıkla çocuğunun gelişimini güçlendir.", tags: ["8 Hafta", "SEVDA™ Çerçevesi"] },
      ],
    },
    whyTitle: "Neden işe yarıyor",
    why: [
      { title: "ICF odaklı", desc: "metodoloji" },
      { title: "SEVDA™", desc: "yöntemi sana net bir yön verir" },
      { title: "Sertifikalı", desc: "Profesyonel Koç (CTA-CPC)" },
      { title: "Pilot 2026'da başlıyor", desc: "Şeffaf, abartılı vaatler yok" },
    ],
    ladder: {
      eyebrow: "Paket Merdiveni",
      heading: "Üç kapı. Tek yön.",
      subtitle: "Her paket kendi içinde bağımsızdır. Ailenin olduğu yerden başla – yolculuk büyürse sonra yükselt.",
      monthlyPrefix: "veya",
      monthlySuffix: "/ay, 24 ay boyunca",
      packages: [
        {
          name: "Temel Dijital Görev",
          tier: "Giriş Seviyesi",
          desc: "Odaklı bir başlangıç noktası. Tek modül, grup formatı, tamamen oyunlaştırılmış. İlk gerçek değişim burada olur.",
          features: [
            "Seçtiğin bir SEVDA™ modülü (grup formatı)",
            "CortexCraft™ oyunlaştırma erişimi",
            "Ebeveyn başlangıç & kapanış görüşmesi",
            "Yazılı ilerleme raporu",
          ],
        },
        {
          name: "Premium Odak Görevi",
          tier: "En Çok Seçilen · En Dengeli",
          desc: "Eksiksiz koçluk yolculuğu – derin 1:1 çalışmayla iki SEVDA™ modülü, dönüm noktasındaki gençler için ideal.",
          features: [
            "Premium 1:1 formatında iki SEVDA™ modülü",
            "Kişiselleştirilmiş CortexCraft™ ilerlemesi",
            "Aylık ebeveyn entegrasyon seansı",
            "Ara & final gelişim raporları",
            "Öncelikli iletişim erişimi",
          ],
        },
        {
          name: "Elit Gelecek Mirası",
          tier: "Tam Dönüşüm",
          desc: "12 aylık bir dönüşüm yayı – beş SEVDA™ direğinin tamamı, baştan sona 1:1, tam aile entegrasyonuyla.",
          features: [
            "Premium 1:1'de beş SEVDA™ modülünün tamamı",
            "12 ay kesintisiz mentorluk",
            "Aile sistemi entegrasyonu (her iki ebeveyn)",
            "Üç aylık gelişim dosyası",
            "VIP erişim & esnek planlama",
          ],
        },
      ],
      connect: {
        tag: "Ebeveyn · Çocuk · Bağ",
        desc: "Birlikte çalışmak isteyen aileler için. Ebeveyn ve çocuk için 6 seanslık bir program – iletişim, onarım, karşılıklı anlayış. Tam paket olmadan bağımsız modül olarak da mevcuttur.",
        basisLabel: "Temel (grup)",
        premiumLabel: "Premium (1:1)",
      },
    },
    cta: { heading: "Geleceğini Şekillendirmeye Başla" },
  },
};
