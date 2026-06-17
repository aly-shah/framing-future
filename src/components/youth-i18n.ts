import { Locale } from "./i18n";

export type YouthContent = (typeof youthContent)["en"];

/** Brand-constant data shared across languages (titles, prices, colors). */
export const PROGRAM_META = [
  { title: "SEVDA™ Flow", color: "#8b5cf6", colorTo: "#a78bfa", img: "/assets/prog-flow.png", icon: "M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3zM18.5 13l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" },
  { title: "SEVDA™ Core", color: "#ec4899", colorTo: "#f472b6", img: "/assets/prog-core.png", icon: "M7 11V7a2 2 0 0 1 4 0M11 11V5a2 2 0 0 1 4 0v6M15 9a2 2 0 0 1 4 0v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3l-2-3.5a1.6 1.6 0 0 1 2.7-1.6L7 12" },
  { title: "SEVDA™ Launch", color: "#f0673b", colorTo: "#fb8a63", img: "/assets/prog-launch.png", icon: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 20h6M10 22h4" },
];

export const MODULE_META = [
  { cat: "SELF", title: "SEVDA™ Core", basis: "€1,428", premium: "€2,975" },
  { cat: "SELF", title: "SEVDA™ Flow", basis: "€1,071", premium: "€2,380" },
  { cat: "WORLD", title: "SEVDA™ Connect", basis: "€1,785", premium: "€3,570" },
  { cat: "WORLD", title: "SEVDA™ Digital", basis: "€1,071", premium: "€2,380" },
  { cat: "FUTURE", title: "SEVDA™ Launch", basis: "€1,071", premium: "€2,380" },
];

type YouthDict = {
  hero: { title: string; subtitle: string; button: string };
  steps: { title: string; desc: string }[];
  programs: {
    heading: string;
    subtitle: string;
    learnMore: string;
    items: { badge: string; desc: string; tags: string[] }[];
  };
  why: { title: string; desc: string }[];
  whyTitle: string;
  modules: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    basisLabel: string;
    premiumLabel: string;
    items: { age: string; duration: string; desc: string }[];
  };
  cta: { heading: string };
};

export const youthContent: Record<Locale, YouthDict> = {
  en: {
    hero: {
      title: "Your Future starts now",
      subtitle: "Coaching that feels like an adventure – with quests, badges, and visible achievements.",
      button: "See Why It Works",
    },
    steps: [
      { title: "Find your focus and self-confidence", desc: "With practical tools that help you immediately in everyday life." },
      { title: "Playful challenges instead of dry theory", desc: "Learn in flow and see your progress clearly before you." },
      { title: "Become part of a motivating community", desc: "That supports you – no pressure, no comparison, just yourself." },
    ],
    programs: {
      heading: "Our Programs For Youth",
      subtitle: "Choose your path – or combine them all for maximum impact.",
      learnMore: "Learn More",
      items: [
        { badge: "Self-Mastery", desc: "Find your focus, build resilience, and create routines that sustain you. 8 weeks – with habit tracking and visible results.", tags: ["8 Weeks", "Habit Tracker", "Gamified"] },
        { badge: "Empathy & Ethics", desc: "Enhance your emotional intelligence, learn conflict resolution, and live your values – online and offline. 6 weeks – with role plays and empathy badges.", tags: ["6 Weeks", "Empathy Badges", "Role Plays"] },
        { badge: "Vision & Change", desc: "Discover your strengths, set goals, and build a clear vision of your future. 8 weeks – with a vision board and quest map.", tags: ["8 Weeks", "Vision Board", "Quest Map"] },
      ],
    },
    why: [
      { title: "CortexCraft™", desc: "makes learning experiential" },
      { title: "SEVDA™", desc: "method gives you clear orientation" },
      { title: "Pilot starts 2026", desc: "Transparent, no overpromises" },
    ],
    whyTitle: "Why it works",
    modules: {
      eyebrow: "The Five SEVDA™ Modules",
      heading: "Calm structure. Real movement.",
      subtitle: "Every module runs 6–8 weeks with a clear arc — diagnose, train, integrate. Basis is group coaching with peer rhythm. Premium is 1:1 with full personalisation.",
      basisLabel: "Basis (group)",
      premiumLabel: "Premium (1:1)",
      items: [
        { age: "Age 12+", duration: "8 weeks", desc: "The foundational module. Identity, inner stability, self-worth. Who am I when no grade is being measured?" },
        { age: "Age 10+", duration: "6 weeks", desc: "Learning techniques, concentration, self-organisation. The original flagship – now integrated with CortexCraft™ gamification." },
        { age: "Age 10+", duration: "6 sessions", desc: "Communication, empathy, conflict, friendship. Designed as a small-group experience – siblings welcome." },
        { age: "Age 12+", duration: "6 weeks", desc: "Healthy digital presence, attention economy, social media, AI literacy. Not a fear talk – a strategy." },
        { age: "Age 15+", duration: "6 weeks", desc: "Career clarity, study choice, first projects. Bridge from school identity to self-chosen direction." },
      ],
    },
    cta: { heading: "Start Shaping Your Future" },
  },

  de: {
    hero: {
      title: "Deine Zukunft beginnt jetzt",
      subtitle: "Coaching, das sich wie ein Abenteuer anfühlt – mit Quests, Badges und sichtbaren Erfolgen.",
      button: "So funktioniert es",
    },
    steps: [
      { title: "Finde deinen Fokus und dein Selbstvertrauen", desc: "Mit praktischen Tools, die dir sofort im Alltag helfen." },
      { title: "Spielerische Herausforderungen statt trockener Theorie", desc: "Lerne im Flow und sieh deinen Fortschritt klar vor dir." },
      { title: "Werde Teil einer motivierenden Gemeinschaft", desc: "Die dich unterstützt – kein Druck, kein Vergleich, nur du selbst." },
    ],
    programs: {
      heading: "Unsere Programme für Jugendliche",
      subtitle: "Wähle deinen Weg – oder kombiniere sie alle für maximale Wirkung.",
      learnMore: "Mehr erfahren",
      items: [
        { badge: "Selbstmeisterung", desc: "Finde deinen Fokus, baue Resilienz auf und schaffe Routinen, die dich tragen. 8 Wochen – mit Habit-Tracking und sichtbaren Ergebnissen.", tags: ["8 Wochen", "Habit-Tracker", "Gamified"] },
        { badge: "Empathie & Ethik", desc: "Stärke deine emotionale Intelligenz, lerne Konfliktlösung und lebe deine Werte – online und offline. 6 Wochen – mit Rollenspielen und Empathie-Badges.", tags: ["6 Wochen", "Empathie-Badges", "Rollenspiele"] },
        { badge: "Vision & Wandel", desc: "Entdecke deine Stärken, setze Ziele und entwickle eine klare Vision deiner Zukunft. 8 Wochen – mit Vision Board und Quest Map.", tags: ["8 Wochen", "Vision Board", "Quest Map"] },
      ],
    },
    why: [
      { title: "CortexCraft™", desc: "macht Lernen erlebbar" },
      { title: "SEVDA™", desc: "Methode gibt dir klare Orientierung" },
      { title: "Pilot startet 2026", desc: "Transparent, keine leeren Versprechen" },
    ],
    whyTitle: "Warum es funktioniert",
    modules: {
      eyebrow: "Die fünf SEVDA™ Module",
      heading: "Ruhige Struktur. Echte Bewegung.",
      subtitle: "Jedes Modul läuft 6–8 Wochen mit klarem Bogen — diagnostizieren, trainieren, integrieren. Basis ist Gruppencoaching im Peer-Rhythmus. Premium ist 1:1 mit voller Personalisierung.",
      basisLabel: "Basis (Gruppe)",
      premiumLabel: "Premium (1:1)",
      items: [
        { age: "Alter 12+", duration: "8 Wochen", desc: "Das Grundmodul. Identität, innere Stabilität, Selbstwert. Wer bin ich, wenn keine Note gemessen wird?" },
        { age: "Alter 10+", duration: "6 Wochen", desc: "Lerntechniken, Konzentration, Selbstorganisation. Das ursprüngliche Flaggschiff – jetzt mit CortexCraft™ Gamification integriert." },
        { age: "Alter 10+", duration: "6 Sitzungen", desc: "Kommunikation, Empathie, Konflikt, Freundschaft. Konzipiert als Kleingruppen-Erfahrung – Geschwister willkommen." },
        { age: "Alter 12+", duration: "6 Wochen", desc: "Gesunde digitale Präsenz, Aufmerksamkeitsökonomie, Social Media, KI-Kompetenz. Kein Angst-Gespräch – eine Strategie." },
        { age: "Alter 15+", duration: "6 Wochen", desc: "Berufsklarheit, Studienwahl, erste Projekte. Brücke von der Schulidentität zur selbstgewählten Richtung." },
      ],
    },
    cta: { heading: "Beginne, deine Zukunft zu gestalten" },
  },

  tr: {
    hero: {
      title: "Geleceğin şimdi başlıyor",
      subtitle: "Bir macera gibi hissettiren koçluk – görevler, rozetler ve görünür başarılarla.",
      button: "Neden İşe Yaradığını Gör",
    },
    steps: [
      { title: "Odağını ve özgüvenini bul", desc: "Günlük hayatta sana hemen yardımcı olan pratik araçlarla." },
      { title: "Kuru teori yerine eğlenceli meydan okumalar", desc: "Akışta öğren ve ilerlemeni net bir şekilde gör." },
      { title: "Motive edici bir topluluğun parçası ol", desc: "Seni destekleyen – baskı yok, kıyaslama yok, sadece sen." },
    ],
    programs: {
      heading: "Gençler için Programlarımız",
      subtitle: "Yolunu seç – ya da maksimum etki için hepsini birleştir.",
      learnMore: "Daha fazla",
      items: [
        { badge: "Öz-Ustalık", desc: "Odağını bul, dayanıklılık geliştir ve seni ayakta tutan rutinler oluştur. 8 hafta – alışkanlık takibi ve görünür sonuçlarla.", tags: ["8 Hafta", "Alışkanlık Takibi", "Oyunlaştırılmış"] },
        { badge: "Empati & Etik", desc: "Duygusal zekânı geliştir, çatışma çözümünü öğren ve değerlerini yaşa – çevrimiçi ve çevrimdışı. 6 hafta – rol oyunları ve empati rozetleriyle.", tags: ["6 Hafta", "Empati Rozetleri", "Rol Oyunları"] },
        { badge: "Vizyon & Değişim", desc: "Güçlü yönlerini keşfet, hedefler belirle ve geleceğin için net bir vizyon oluştur. 8 hafta – vizyon panosu ve görev haritasıyla.", tags: ["8 Hafta", "Vizyon Panosu", "Görev Haritası"] },
      ],
    },
    why: [
      { title: "CortexCraft™", desc: "öğrenmeyi deneyimsel kılar" },
      { title: "SEVDA™", desc: "yöntemi sana net bir yön verir" },
      { title: "Pilot 2026'da başlıyor", desc: "Şeffaf, abartılı vaatler yok" },
    ],
    whyTitle: "Neden işe yarıyor",
    modules: {
      eyebrow: "Beş SEVDA™ Modülü",
      heading: "Sakin yapı. Gerçek hareket.",
      subtitle: "Her modül 6–8 hafta sürer ve net bir yay izler — teşhis et, eğit, bütünleştir. Temel, akran ritminde grup koçluğudur. Premium, tam kişiselleştirmeyle 1:1'dir.",
      basisLabel: "Temel (grup)",
      premiumLabel: "Premium (1:1)",
      items: [
        { age: "Yaş 12+", duration: "8 hafta", desc: "Temel modül. Kimlik, içsel istikrar, öz-değer. Hiçbir not ölçülmezken ben kimim?" },
        { age: "Yaş 10+", duration: "6 hafta", desc: "Öğrenme teknikleri, konsantrasyon, öz-organizasyon. Orijinal amiral gemisi – artık CortexCraft™ oyunlaştırmasıyla entegre." },
        { age: "Yaş 10+", duration: "6 seans", desc: "İletişim, empati, çatışma, arkadaşlık. Küçük grup deneyimi olarak tasarlandı – kardeşler de katılabilir." },
        { age: "Yaş 12+", duration: "6 hafta", desc: "Sağlıklı dijital varlık, dikkat ekonomisi, sosyal medya, yapay zekâ okuryazarlığı. Korku konuşması değil – bir strateji." },
        { age: "Yaş 15+", duration: "6 hafta", desc: "Kariyer netliği, bölüm seçimi, ilk projeler. Okul kimliğinden kendi seçtiğin yöne köprü." },
      ],
    },
    cta: { heading: "Geleceğini Şekillendirmeye Başla" },
  },
};
