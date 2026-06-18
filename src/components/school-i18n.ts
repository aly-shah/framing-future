import { Locale } from "./i18n";

export type SchoolContent = (typeof schoolContent)["en"];

export const SCHOOL_PROGRAM_META = [
  { title: "SEVDA™ Core", img: "/assets/sch-core.webp", color: "#2f80ed", colorTo: "#5b9bf5", cat: "Identity & Resilience", icon: "M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3zM9 12l2 2 4-4" },
  { title: "SEVDA™ Flow", img: "/assets/sch-flow.webp", color: "#8b5cf6", colorTo: "#a78bfa", cat: "Learning How to Learn", icon: "M4 5h11a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4zM20 5h-1a3 3 0 0 0-3 3v11" },
  { title: "SEVDA™ Connect", img: "/assets/sch-connect.webp", color: "#ec4899", colorTo: "#f472b6", cat: "Communication & Teamwork", icon: "M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.7A8.4 8.4 0 1 1 21 11.5z" },
  { title: "SEVDA™ Digital", img: "/assets/sch-digital.webp", color: "#f0673b", colorTo: "#fb8a63", cat: "Media Literacy & Ethics", icon: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2" },
  { title: "SEVDA™ Launch", img: "/assets/sch-launch.webp", color: "#22b07d", colorTo: "#4fcf9e", cat: "Life Readiness", icon: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 20h6M10 22h4" },
];

export const SCHOOL_OFFERS_META = [
  { priceFrom: "€22,000" },
  { priceFrom: "€85,000" },
];

type SchoolDict = {
  hero: { title: string; subtitle: string; button: string };
  features: { heading: string; text: string }[];
  band: { heading: string; text: string; button: string };
  programs: { heading: string; learnMore: string; items: { desc: string; tags: string[] }[] };
  partnership: { heading: string; steps: { name: string; desc: string }[] };
  offers: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    fromLabel: string;
    cards: { tier: string; name: string; desc: string; features: string[]; priceUnit: string }[];
  };
  cta: { heading: string; subtitle: string; button: string };
};

export const schoolContent: Record<Locale, SchoolDict> = {
  en: {
    hero: {
      title: "Schools That Go Further.",
      subtitle: "We partner with schools to teach what curricula do not cover: emotional intelligence, resilience, and future-ready skills.",
      button: "Schedule a Consultation",
    },
    features: [
      { heading: "Competence Training for Teachers", text: "Teachers have limited time for social-emotional learning. We provide preventive workshops and coaching—evidence-based and emotionally effective." },
      { heading: "Early Support Over Crisis Intervention", text: "Our programmes meet young people where they are—building resilience, focus, and emotional skills before challenges turn into crises." },
    ],
    band: {
      heading: "Flexible & Modular",
      text: "Whether a project day, afternoon program, or year-long partnership—our SEVDA™ modules adapt to your needs. GDPR-compliant, measurable, evidence-based.",
      button: "Schedule a Consultation",
    },
    programs: {
      heading: "Our Programs For Your School",
      learnMore: "Learn More",
      items: [
        { desc: "Teens learn to turn setbacks into opportunities, recognize their strengths, and show up with confidence.", tags: ["12+", "8 weeks", "Hybrid"] },
        { desc: "Students develop effective learning strategies, focus, and self-organization—powered by NeuroCami™ mechanisms.", tags: ["10+", "6 weeks", "Modular"] },
        { desc: "Students learn to communicate with empathy, resolve conflicts constructively, and grow as a team.", tags: ["10+", "6 sessions", "Group"] },
        { desc: "Teens develop digital sovereignty, conscious use of social media, data privacy, AI tools, and fake news awareness.", tags: ["12+", "6 weeks", "Hybrid"] },
        { desc: "Teens acquire practical life skills: finances, contracts, household management, self-organization.", tags: ["15+", "6 weeks", "hands-on"] },
      ],
    },
    partnership: {
      heading: "How the Partnership Works",
      steps: [
        { name: "Needs Assessment", desc: "We explore your school's goals, challenges, and development priorities." },
        { name: "Program Design", desc: "Together, we build a tailored concept aligned with your context and needs." },
        { name: "Implementation", desc: "We support integration through practical tools, guidance, and ongoing collaboration." },
        { name: "Evaluation", desc: "Measure impact through clear feedback, progress indicators, and sustainable outcomes." },
      ],
    },
    offers: {
      eyebrow: "Two Institutional Offers",
      heading: "Curriculum integration. Or societal impact.",
      subtitle: "Each offer is a true partnership – co-designed, measured, and reported. Pilot phases available on request.",
      fromLabel: "from",
      cards: [
        {
          tier: "For Schools",
          name: "School Pack",
          desc: "Complements your curriculum with life & future skills — GDPR-compliant and measurable.",
          features: [
            "SEVDA™ Connect, Digital & Launch as integrated modules",
            "Parent evening & teacher training included",
            "Evaluation report at year end",
            "Dedicated school liaison",
            "Annual renewal with progression tracking",
          ],
          priceUnit: "per school / year · plus VAT",
        },
        {
          tier: "For Companies",
          name: "Corporate Partner",
          desc: "Societal impact and employee engagement through purpose — sponsor places, gain brand alignment.",
          features: [
            "Sponsorship of scholarship places for teens",
            "Future Partner branding & co-communication",
            "Quarterly impact reports",
            "Optional employee family access (HR benefit)",
            "Annual partner gathering invitation",
          ],
          priceUnit: "per year · plus VAT",
        },
      ],
    },
    cta: {
      heading: "Ready For the Next Step?",
      subtitle: "Let us explore together how FramingFuture™ can support your school.",
      button: "Schedule a Consultation Now",
    },
  },

  de: {
    hero: {
      title: "Schulen, die weiter gehen.",
      subtitle: "Wir kooperieren mit Schulen, um zu vermitteln, was Lehrpläne nicht abdecken: emotionale Intelligenz, Resilienz und Zukunftskompetenzen.",
      button: "Beratung vereinbaren",
    },
    features: [
      { heading: "Kompetenztraining für Lehrkräfte", text: "Lehrkräfte haben wenig Zeit für sozial-emotionales Lernen. Wir bieten präventive Workshops und Coaching—evidenzbasiert und emotional wirksam." },
      { heading: "Frühe Unterstützung statt Krisenintervention", text: "Unsere Programme holen junge Menschen dort ab, wo sie stehen—sie bauen Resilienz, Fokus und emotionale Fähigkeiten auf, bevor Herausforderungen zu Krisen werden." },
    ],
    band: {
      heading: "Flexibel & Modular",
      text: "Ob Projekttag, Nachmittagsprogramm oder ganzjährige Partnerschaft—unsere SEVDA™ Module passen sich deinen Bedürfnissen an. DSGVO-konform, messbar, evidenzbasiert.",
      button: "Beratung vereinbaren",
    },
    programs: {
      heading: "Unsere Programme für deine Schule",
      learnMore: "Mehr erfahren",
      items: [
        { desc: "Jugendliche lernen, Rückschläge in Chancen zu verwandeln, ihre Stärken zu erkennen und selbstbewusst aufzutreten.", tags: ["12+", "8 Wochen", "Hybrid"] },
        { desc: "Schüler entwickeln effektive Lernstrategien, Fokus und Selbstorganisation—angetrieben von NeuroCami™ Mechanismen.", tags: ["10+", "6 Wochen", "Modular"] },
        { desc: "Schüler lernen, mit Empathie zu kommunizieren, Konflikte konstruktiv zu lösen und als Team zu wachsen.", tags: ["10+", "6 Sitzungen", "Gruppe"] },
        { desc: "Jugendliche entwickeln digitale Souveränität, bewussten Umgang mit Social Media, Datenschutz, KI-Tools und Fake-News-Bewusstsein.", tags: ["12+", "6 Wochen", "Hybrid"] },
        { desc: "Jugendliche erwerben praktische Lebenskompetenzen: Finanzen, Verträge, Haushaltsführung, Selbstorganisation.", tags: ["15+", "6 Wochen", "praxisnah"] },
      ],
    },
    partnership: {
      heading: "So funktioniert die Partnerschaft",
      steps: [
        { name: "Bedarfsanalyse", desc: "Wir erkunden die Ziele, Herausforderungen und Entwicklungsprioritäten deiner Schule." },
        { name: "Programmdesign", desc: "Gemeinsam entwickeln wir ein maßgeschneidertes Konzept, das zu deinem Kontext passt." },
        { name: "Umsetzung", desc: "Wir unterstützen die Integration durch praktische Tools, Begleitung und kontinuierliche Zusammenarbeit." },
        { name: "Evaluation", desc: "Wirkung messen durch klares Feedback, Fortschrittsindikatoren und nachhaltige Ergebnisse." },
      ],
    },
    offers: {
      eyebrow: "Zwei institutionelle Angebote",
      heading: "Lehrplan-Integration. Oder gesellschaftliche Wirkung.",
      subtitle: "Jedes Angebot ist eine echte Partnerschaft – gemeinsam gestaltet, gemessen und berichtet. Pilotphasen auf Anfrage verfügbar.",
      fromLabel: "ab",
      cards: [
        {
          tier: "Für Schulen",
          name: "Schul-Paket",
          desc: "Ergänzt deinen Lehrplan um Lebens- & Zukunftskompetenzen — DSGVO-konform und messbar.",
          features: [
            "SEVDA™ Connect, Digital & Launch als integrierte Module",
            "Elternabend & Lehrerfortbildung inklusive",
            "Evaluationsbericht am Jahresende",
            "Feste Ansprechperson für die Schule",
            "Jährliche Verlängerung mit Fortschrittsverfolgung",
          ],
          priceUnit: "pro Schule / Jahr · zzgl. MwSt.",
        },
        {
          tier: "Für Unternehmen",
          name: "Unternehmenspartner",
          desc: "Gesellschaftliche Wirkung und Mitarbeiterengagement durch Sinn — Plätze sponsern, Markenausrichtung gewinnen.",
          features: [
            "Sponsoring von Stipendienplätzen für Jugendliche",
            "Future-Partner-Branding & Co-Kommunikation",
            "Vierteljährliche Wirkungsberichte",
            "Optionaler Familienzugang für Mitarbeitende (HR-Benefit)",
            "Einladung zum jährlichen Partnertreffen",
          ],
          priceUnit: "pro Jahr · zzgl. MwSt.",
        },
      ],
    },
    cta: {
      heading: "Bereit für den nächsten Schritt?",
      subtitle: "Lass uns gemeinsam erkunden, wie FramingFuture™ deine Schule unterstützen kann.",
      button: "Jetzt Beratung vereinbaren",
    },
  },

  tr: {
    hero: {
      title: "Daha İleri Giden Okullar.",
      subtitle: "Müfredatın kapsamadığını öğretmek için okullarla iş birliği yapıyoruz: duygusal zekâ, dayanıklılık ve geleceğe hazır beceriler.",
      button: "Danışma Planla",
    },
    features: [
      { heading: "Öğretmenler için Yetkinlik Eğitimi", text: "Öğretmenlerin sosyal-duygusal öğrenme için sınırlı vakti var. Önleyici atölyeler ve koçluk sunuyoruz—kanıta dayalı ve duygusal olarak etkili." },
      { heading: "Kriz Müdahalesi Yerine Erken Destek", text: "Programlarımız gençleri oldukları yerde karşılar—zorluklar krize dönüşmeden önce dayanıklılık, odak ve duygusal beceriler inşa eder." },
    ],
    band: {
      heading: "Esnek & Modüler",
      text: "İster bir proje günü, ister öğleden sonra programı, ister bir yıllık ortaklık olsun—SEVDA™ modüllerimiz ihtiyaçlarına uyum sağlar. GDPR uyumlu, ölçülebilir, kanıta dayalı.",
      button: "Danışma Planla",
    },
    programs: {
      heading: "Okulun için Programlarımız",
      learnMore: "Daha fazla",
      items: [
        { desc: "Gençler aksilikleri fırsata çevirmeyi, güçlü yönlerini fark etmeyi ve özgüvenle var olmayı öğrenir.", tags: ["12+", "8 hafta", "Hibrit"] },
        { desc: "Öğrenciler etkili öğrenme stratejileri, odak ve öz-organizasyon geliştirir—NeuroCami™ mekanizmalarıyla güçlendirilmiş.", tags: ["10+", "6 hafta", "Modüler"] },
        { desc: "Öğrenciler empatiyle iletişim kurmayı, çatışmaları yapıcı şekilde çözmeyi ve bir takım olarak büyümeyi öğrenir.", tags: ["10+", "6 seans", "Grup"] },
        { desc: "Gençler dijital egemenlik, sosyal medyanın bilinçli kullanımı, veri gizliliği, yapay zekâ araçları ve sahte haber farkındalığı geliştirir.", tags: ["12+", "6 hafta", "Hibrit"] },
        { desc: "Gençler pratik yaşam becerileri edinir: finans, sözleşmeler, ev yönetimi, öz-organizasyon.", tags: ["15+", "6 hafta", "uygulamalı"] },
      ],
    },
    partnership: {
      heading: "Ortaklık Nasıl İşler",
      steps: [
        { name: "İhtiyaç Analizi", desc: "Okulunun hedeflerini, zorluklarını ve gelişim önceliklerini keşfederiz." },
        { name: "Program Tasarımı", desc: "Birlikte, bağlamına ve ihtiyaçlarına uygun özel bir konsept oluştururuz." },
        { name: "Uygulama", desc: "Pratik araçlar, rehberlik ve sürekli iş birliğiyle entegrasyonu destekleriz." },
        { name: "Değerlendirme", desc: "Net geri bildirim, ilerleme göstergeleri ve sürdürülebilir sonuçlarla etkiyi ölçeriz." },
      ],
    },
    offers: {
      eyebrow: "İki Kurumsal Teklif",
      heading: "Müfredat entegrasyonu. Ya da toplumsal etki.",
      subtitle: "Her teklif gerçek bir ortaklıktır – birlikte tasarlanır, ölçülür ve raporlanır. Pilot aşamalar talep üzerine mevcuttur.",
      fromLabel: "başlangıç",
      cards: [
        {
          tier: "Okullar için",
          name: "Okul Paketi",
          desc: "Müfredatını yaşam & gelecek becerileriyle tamamlar — GDPR uyumlu ve ölçülebilir.",
          features: [
            "Entegre modüller olarak SEVDA™ Connect, Digital & Launch",
            "Veli akşamı & öğretmen eğitimi dâhil",
            "Yıl sonunda değerlendirme raporu",
            "Okula özel irtibat kişisi",
            "İlerleme takibiyle yıllık yenileme",
          ],
          priceUnit: "okul başına / yıl · KDV hariç",
        },
        {
          tier: "Şirketler için",
          name: "Kurumsal Ortak",
          desc: "Amaç yoluyla toplumsal etki ve çalışan katılımı — kontenjan sponsorluğu, marka uyumu kazanın.",
          features: [
            "Gençler için burs kontenjanı sponsorluğu",
            "Future Partner markalaması & ortak iletişim",
            "Üç aylık etki raporları",
            "Opsiyonel çalışan aile erişimi (İK avantajı)",
            "Yıllık partner buluşması daveti",
          ],
          priceUnit: "yıl başına · KDV hariç",
        },
      ],
    },
    cta: {
      heading: "Sonraki Adıma Hazır mısın?",
      subtitle: "FramingFuture™'ın okulunu nasıl destekleyebileceğini birlikte keşfedelim.",
      button: "Hemen Danışma Planla",
    },
  },
};
