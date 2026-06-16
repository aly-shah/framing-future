import { Locale } from "./i18n";

export type PartnersContent = (typeof partnersContent)["en"];

type PartnersDict = {
  hero: { title: string; subtitle: string; button: string };
  features: { heading: string; paragraphs: string[] }[];
  band: { heading: string; text: string; button: string };
  collaborate: { heading: string; items: { name: string; desc: string }[] };
  cta: { heading: string; subtitle: string; button: string };
};

export const partnersContent: Record<Locale, PartnersDict> = {
  en: {
    hero: {
      title: "Shaping the Future Together.",
      subtitle: "We partner with companies, foundations, and educational organizations that want more than the status quo—that live change.",
      button: "Become a Partner",
    },
    features: [
      {
        heading: "For Companies – CSR with Impact",
        paragraphs: [
          "Invest in the future of young people. Our programs build future skills, emotional intelligence, and self-efficacy—measurable, transparent, sustainable.",
          "Your employees can engage as mentors; your brand becomes part of a movement for conscious education.",
        ],
      },
      {
        heading: "For Foundations – Scalable Impact",
        paragraphs: [
          "Do you fund education? We deliver. FramingFuture™ combines evidence-based methods with emotional depth—for programs that show measurable results.",
          "Together we reach more teens, more families, more schools.",
        ],
      },
    ],
    band: {
      heading: "For Educational Organizations – Strong Networks",
      text: "We believe in cooperation over competition. Together with partners from research, practice, and policy, we create structures that last.",
      button: "Become a Partner",
    },
    collaborate: {
      heading: "How We Collaborate",
      items: [
        { name: "Sponsoring – Visible Impact", desc: "Finance programs for schools or teens from disadvantaged backgrounds. We ensure transparency, reporting, and public recognition." },
        { name: "Co-Creation – Develop Together", desc: "Develop customized programs for your target audience with us. Whether corporate academy, employee workshops, or educational initiatives." },
        { name: "Mentoring & Engagement", desc: "Your employees become mentors for teens. We guide the process, create structures, and make impact visible." },
        { name: "Research Partnership", desc: "Universities, institutes, think tanks—we open our programs for research and evaluation. Together we create evidence." },
      ],
    },
    cta: {
      heading: "Let's Talk.",
      subtitle: "Whether sponsoring, co-creation, or mentoring—we will find the right model for you.",
      button: "Schedule a Partnership Talk",
    },
  },

  de: {
    hero: {
      title: "Gemeinsam die Zukunft gestalten.",
      subtitle: "Wir arbeiten mit Unternehmen, Stiftungen und Bildungsorganisationen zusammen, die mehr wollen als den Status quo—die Veränderung leben.",
      button: "Partner werden",
    },
    features: [
      {
        heading: "Für Unternehmen – CSR mit Wirkung",
        paragraphs: [
          "Investiere in die Zukunft junger Menschen. Unsere Programme bauen Zukunftskompetenzen, emotionale Intelligenz und Selbstwirksamkeit auf—messbar, transparent, nachhaltig.",
          "Deine Mitarbeitenden können sich als Mentoren engagieren; deine Marke wird Teil einer Bewegung für bewusste Bildung.",
        ],
      },
      {
        heading: "Für Stiftungen – Skalierbare Wirkung",
        paragraphs: [
          "Förderst du Bildung? Wir liefern. FramingFuture™ verbindet evidenzbasierte Methoden mit emotionaler Tiefe—für Programme mit messbaren Ergebnissen.",
          "Gemeinsam erreichen wir mehr Jugendliche, mehr Familien, mehr Schulen.",
        ],
      },
    ],
    band: {
      heading: "Für Bildungsorganisationen – Starke Netzwerke",
      text: "Wir glauben an Kooperation statt Konkurrenz. Gemeinsam mit Partnern aus Forschung, Praxis und Politik schaffen wir Strukturen, die bleiben.",
      button: "Partner werden",
    },
    collaborate: {
      heading: "Wie wir zusammenarbeiten",
      items: [
        { name: "Sponsoring – Sichtbare Wirkung", desc: "Finanziere Programme für Schulen oder Jugendliche aus benachteiligten Verhältnissen. Wir sorgen für Transparenz, Berichterstattung und öffentliche Anerkennung." },
        { name: "Co-Creation – Gemeinsam entwickeln", desc: "Entwickle mit uns maßgeschneiderte Programme für deine Zielgruppe. Ob Corporate Academy, Mitarbeiter-Workshops oder Bildungsinitiativen." },
        { name: "Mentoring & Engagement", desc: "Deine Mitarbeitenden werden Mentoren für Jugendliche. Wir begleiten den Prozess, schaffen Strukturen und machen Wirkung sichtbar." },
        { name: "Forschungspartnerschaft", desc: "Universitäten, Institute, Think Tanks—wir öffnen unsere Programme für Forschung und Evaluation. Gemeinsam schaffen wir Evidenz." },
      ],
    },
    cta: {
      heading: "Sprechen wir.",
      subtitle: "Ob Sponsoring, Co-Creation oder Mentoring—wir finden das richtige Modell für dich.",
      button: "Partnergespräch vereinbaren",
    },
  },

  tr: {
    hero: {
      title: "Geleceği Birlikte Şekillendirmek.",
      subtitle: "Statükodan fazlasını isteyen—değişimi yaşayan şirketler, vakıflar ve eğitim kuruluşlarıyla iş birliği yapıyoruz.",
      button: "Partner Ol",
    },
    features: [
      {
        heading: "Şirketler için – Etkili KSS",
        paragraphs: [
          "Gençlerin geleceğine yatırım yap. Programlarımız geleceğin becerilerini, duygusal zekâyı ve öz-yeterliği inşa eder—ölçülebilir, şeffaf, sürdürülebilir.",
          "Çalışanların mentor olarak katkıda bulunabilir; markan bilinçli eğitim hareketinin parçası olur.",
        ],
      },
      {
        heading: "Vakıflar için – Ölçeklenebilir Etki",
        paragraphs: [
          "Eğitimi mi finanse ediyorsun? Biz sonuç getiririz. FramingFuture™ kanıta dayalı yöntemleri duygusal derinlikle birleştirir—ölçülebilir sonuçlar gösteren programlar için.",
          "Birlikte daha çok gence, daha çok aileye, daha çok okula ulaşırız.",
        ],
      },
    ],
    band: {
      heading: "Eğitim Kuruluşları için – Güçlü Ağlar",
      text: "Rekabet yerine iş birliğine inanıyoruz. Araştırma, uygulama ve politikadan ortaklarla birlikte kalıcı yapılar kuruyoruz.",
      button: "Partner Ol",
    },
    collaborate: {
      heading: "Nasıl İş Birliği Yapıyoruz",
      items: [
        { name: "Sponsorluk – Görünür Etki", desc: "Okullar ya da dezavantajlı gençler için programları finanse et. Şeffaflık, raporlama ve kamuoyu tanınırlığı sağlarız." },
        { name: "Birlikte Üretim – Birlikte Geliştir", desc: "Hedef kitlen için bizimle özel programlar geliştir. İster kurumsal akademi, ister çalışan atölyeleri, ister eğitim girişimleri olsun." },
        { name: "Mentorluk & Katılım", desc: "Çalışanların gençlere mentor olur. Süreci yönlendirir, yapılar kurar ve etkiyi görünür kılarız." },
        { name: "Araştırma Ortaklığı", desc: "Üniversiteler, enstitüler, düşünce kuruluşları—programlarımızı araştırma ve değerlendirmeye açıyoruz. Birlikte kanıt üretiyoruz." },
      ],
    },
    cta: {
      heading: "Konuşalım.",
      subtitle: "İster sponsorluk, ister birlikte üretim, ister mentorluk—senin için doğru modeli buluruz.",
      button: "Partnerlik Görüşmesi Planla",
    },
  },
};
