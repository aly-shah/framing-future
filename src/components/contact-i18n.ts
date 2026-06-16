import { Locale } from "./i18n";

export type ContactContent = (typeof contactContent)["en"];

export const CONTACT_DETAILS = {
  email: "info@framingfuture.com",
  phone: "+49 15202339664",
  location: "Neuss, Germany",
};

type ContactDict = {
  hero: { title: string[]; subtitle: string; button: string };
  info: { eyebrow: string; heading: string[]; text: string; locationSub: string };
  form: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    thankYou: string;
    thankYouText: string;
  };
  faq: { heading: string; subtitle: string; items: { q: string; a: string }[] };
};

export const contactContent: Record<Locale, ContactDict> = {
  en: {
    hero: {
      title: ["Book a Free", "Consultation"],
      subtitle: "Book a 30-minute introductory call with Coach Sevda.",
      button: "Schedule a Call",
    },
    info: {
      eyebrow: "Contact us",
      heading: ["Let's Start the", "Conversation"],
      text: "Whether you are a parent seeking support, a teen ready for growth, or a school looking for transformation—we are here to help.",
      locationSub: "Online coaching available nationwide",
    },
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      message: "Message",
      submit: "Submit",
      thankYou: "Thank you!",
      thankYouText: "We've received your message and will get back to you shortly.",
    },
    faq: {
      heading: "Frequently asked questions",
      subtitle: "Frequently asked questions ordered by popularity. Please note that if the visitor has not yet committed to the call to action, they may still have questions (doubts) that can be addressed.",
      items: [
        { q: "How are FramingFuture programs structured?", a: "Programs are offered as clearly defined modules with different focus areas and formats. Depending on the audience, they are available as individual modules, combined pathways, school packages, or partnership models." },
        { q: "Who are the programs designed for?", a: "Our programs serve youth (ages 10–18), parents and families, schools, and corporate or foundation partners. Each audience has tailored modules and formats." },
        { q: "Can modules be combined?", a: "Yes. Modules are designed to stand alone or combine into pathways. Many families start with one module and add others as the journey grows." },
        { q: "How does pricing work?", a: "Pricing depends on the format (group Basis or 1:1 Premium) and the number of modules. Individual modules, combined pathways, school packages, and partnership models each have transparent, fixed pricing." },
        { q: "What is included in school partnerships?", a: "School packages include integrated SEVDA™ modules, parent evenings and teacher training, an end-of-year evaluation report, a dedicated liaison, and annual renewal with progression tracking." },
        { q: "Do you offer custom solutions?", a: "Absolutely. For schools, companies, and foundations we co-design tailored programs aligned with your context, goals, and audience." },
        { q: "Who delivers the programs?", a: "Programs are delivered by certified, ICF-oriented coaches led by founder Sevda Yücel, combining scientific expertise with emotional depth." },
        { q: "How do I get started?", a: "Book a free 30-minute Clarity Call. We'll explore your needs and recommend the right module, pathway, or partnership model — with no pressure." },
      ],
    },
  },

  de: {
    hero: {
      title: ["Kostenlose Beratung", "buchen"],
      subtitle: "Buche ein 30-minütiges Erstgespräch mit Coach Sevda.",
      button: "Gespräch vereinbaren",
    },
    info: {
      eyebrow: "Kontakt",
      heading: ["Lass uns ins", "Gespräch kommen"],
      text: "Ob du als Elternteil Unterstützung suchst, als Jugendliche:r bereit für Wachstum bist oder als Schule Transformation suchst—wir sind für dich da.",
      locationSub: "Online-Coaching bundesweit verfügbar",
    },
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefonnummer",
      message: "Nachricht",
      submit: "Senden",
      thankYou: "Vielen Dank!",
      thankYouText: "Wir haben deine Nachricht erhalten und melden uns in Kürze.",
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      subtitle: "Häufig gestellte Fragen nach Beliebtheit geordnet. Bitte beachte: Wenn Besucher sich noch nicht zur Handlung entschlossen haben, können noch Fragen (Zweifel) bestehen, die geklärt werden können.",
      items: [
        { q: "Wie sind die FramingFuture-Programme aufgebaut?", a: "Die Programme werden als klar definierte Module mit unterschiedlichen Schwerpunkten und Formaten angeboten. Je nach Zielgruppe sind sie als Einzelmodule, kombinierte Lernwege, Schulpakete oder Partnerschaftsmodelle verfügbar." },
        { q: "Für wen sind die Programme gedacht?", a: "Unsere Programme richten sich an Jugendliche (10–18 Jahre), Eltern und Familien, Schulen sowie Unternehmens- und Stiftungspartner. Jede Zielgruppe hat maßgeschneiderte Module und Formate." },
        { q: "Können Module kombiniert werden?", a: "Ja. Module sind so gestaltet, dass sie für sich stehen oder zu Lernwegen kombiniert werden können. Viele Familien starten mit einem Modul und ergänzen weitere, wenn die Reise wächst." },
        { q: "Wie funktioniert die Preisgestaltung?", a: "Der Preis hängt vom Format (Gruppe Basis oder 1:1 Premium) und der Anzahl der Module ab. Einzelmodule, kombinierte Lernwege, Schulpakete und Partnerschaftsmodelle haben jeweils transparente, feste Preise." },
        { q: "Was ist in Schulpartnerschaften enthalten?", a: "Schulpakete umfassen integrierte SEVDA™ Module, Elternabende und Lehrerfortbildungen, einen Evaluationsbericht zum Jahresende, eine feste Ansprechperson und eine jährliche Verlängerung mit Fortschrittsverfolgung." },
        { q: "Bietet ihr individuelle Lösungen an?", a: "Auf jeden Fall. Für Schulen, Unternehmen und Stiftungen gestalten wir gemeinsam maßgeschneiderte Programme, die zu deinem Kontext, deinen Zielen und deiner Zielgruppe passen." },
        { q: "Wer führt die Programme durch?", a: "Die Programme werden von zertifizierten, ICF-orientierten Coaches unter der Leitung von Gründerin Sevda Yücel durchgeführt—mit wissenschaftlicher Expertise und emotionaler Tiefe." },
        { q: "Wie fange ich an?", a: "Buche ein kostenloses 30-minütiges Klarheits-Gespräch. Wir erkunden deine Bedürfnisse und empfehlen das richtige Modul, den richtigen Lernweg oder das richtige Partnerschaftsmodell—ganz ohne Druck." },
      ],
    },
  },

  tr: {
    hero: {
      title: ["Ücretsiz Danışma", "Ayırt"],
      subtitle: "Koç Sevda ile 30 dakikalık bir tanışma görüşmesi ayırt.",
      button: "Görüşme Planla",
    },
    info: {
      eyebrow: "İletişim",
      heading: ["Sohbete", "Başlayalım"],
      text: "İster destek arayan bir ebeveyn, ister büyümeye hazır bir genç, ister dönüşüm arayan bir okul ol—buradayız.",
      locationSub: "Çevrimiçi koçluk ülke genelinde mevcuttur",
    },
    form: {
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta",
      phone: "Telefon Numarası",
      message: "Mesaj",
      submit: "Gönder",
      thankYou: "Teşekkürler!",
      thankYouText: "Mesajını aldık ve kısa süre içinde sana döneceğiz.",
    },
    faq: {
      heading: "Sıkça sorulan sorular",
      subtitle: "Popülerliğe göre sıralanmış sıkça sorulan sorular. Lütfen unutmayın: Ziyaretçi henüz harekete geçmemişse, ele alınabilecek sorularının (tereddütlerinin) olması mümkündür.",
      items: [
        { q: "FramingFuture programları nasıl yapılandırılır?", a: "Programlar, farklı odak alanları ve formatlara sahip net tanımlanmış modüller olarak sunulur. Hedef kitleye bağlı olarak; bireysel modüller, birleşik yollar, okul paketleri veya ortaklık modelleri olarak mevcuttur." },
        { q: "Programlar kimler için tasarlandı?", a: "Programlarımız gençlere (10–18 yaş), ebeveynlere ve ailelere, okullara ve kurumsal veya vakıf ortaklarına hizmet eder. Her kitle için özel modüller ve formatlar vardır." },
        { q: "Modüller birleştirilebilir mi?", a: "Evet. Modüller tek başına kullanılacak ya da yollar halinde birleştirilecek şekilde tasarlanmıştır. Birçok aile bir modülle başlar ve yolculuk büyüdükçe başkalarını ekler." },
        { q: "Fiyatlandırma nasıl işliyor?", a: "Fiyat, formata (grup Temel veya 1:1 Premium) ve modül sayısına bağlıdır. Bireysel modüller, birleşik yollar, okul paketleri ve ortaklık modellerinin her birinin şeffaf, sabit fiyatları vardır." },
        { q: "Okul ortaklıklarına neler dâhildir?", a: "Okul paketleri; entegre SEVDA™ modüllerini, veli akşamlarını ve öğretmen eğitimini, yıl sonu değerlendirme raporunu, özel bir irtibat kişisini ve ilerleme takibiyle yıllık yenilemeyi içerir." },
        { q: "Özel çözümler sunuyor musunuz?", a: "Kesinlikle. Okullar, şirketler ve vakıflar için bağlamınıza, hedeflerinize ve kitlenize uygun özel programları birlikte tasarlıyoruz." },
        { q: "Programları kimler yürütür?", a: "Programlar, kurucu Sevda Yücel liderliğinde sertifikalı, ICF odaklı koçlar tarafından yürütülür—bilimsel uzmanlığı duygusal derinlikle birleştirerek." },
        { q: "Nasıl başlarım?", a: "Ücretsiz 30 dakikalık bir Netlik Görüşmesi ayırt. İhtiyaçlarını keşfeder ve doğru modülü, yolu veya ortaklık modelini öneririz—hiçbir baskı olmadan." },
      ],
    },
  },
};
