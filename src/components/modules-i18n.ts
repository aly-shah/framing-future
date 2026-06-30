import { Locale } from "./i18n";

export type ModuleSlug = "core" | "flow" | "connect" | "digital" | "launch";

/** Map a program title like "SEVDA™ Core" to its module slug ("core"). */
export function moduleSlug(title: string): ModuleSlug {
  return title.split(/\s+/).pop()!.toLowerCase() as ModuleSlug;
}

export const MODULE_ORDER: ModuleSlug[] = ["core", "flow", "connect", "digital", "launch"];

/** Brand-level meta shared across locales. */
export const MODULE_META: Record<
  ModuleSlug,
  { title: string; color: string; colorTo: string }
> = {
  core: { title: "SEVDA™ Core", color: "#ec4899", colorTo: "#f472b6" },
  flow: { title: "SEVDA™ Flow", color: "#8b5cf6", colorTo: "#a78bfa" },
  connect: { title: "SEVDA™ Connect", color: "#5b6b8c", colorTo: "#7d8db0" },
  digital: { title: "SEVDA™ Digital", color: "#f0673b", colorTo: "#fb8a63" },
  launch: { title: "SEVDA™ Launch", color: "#22b07d", colorTo: "#4fcf9e" },
};

type ModuleCopy = { category: string; tagline: string; intro: string };

type ModuleDict = {
  eyebrow: string;
  back: string;
  placeholderTitle: string;
  placeholderText: string;
  ctaHeading: string;
  modules: Record<ModuleSlug, ModuleCopy>;
};

export const modulesContent: Record<Locale, ModuleDict> = {
  en: {
    eyebrow: "SEVDA™ Module",
    back: "Back to programs",
    placeholderTitle: "Detailed content coming soon",
    placeholderText:
      "We're finalising the full breakdown for this module — outcomes, weekly arc, formats and pricing. In the meantime, book a free Clarity Call and we'll walk you through it personally.",
    ctaHeading: "Curious about this module?",
    modules: {
      core: {
        category: "SELF · Identity & Resilience",
        tagline: "Strengthen emotional intelligence and build true inner clarity.",
        intro:
          "SEVDA™ Core is where the journey begins — discovering your strengths, regulating emotions, and building the inner stability that everything else is built on.",
      },
      flow: {
        category: "SELF · Learning How to Learn",
        tagline: "Find focus, learn in flow, and see your progress clearly.",
        intro:
          "SEVDA™ Flow turns learning into a skill of its own — concentration, healthy habits, and the kind of momentum that makes growth feel natural instead of forced.",
      },
      connect: {
        category: "WORLD · Communication & Teamwork",
        tagline: "Build calm relationships, communication, and teamwork that last.",
        intro:
          "SEVDA™ Connect is about people — listening, repairing, and collaborating with empathy. It strengthens the bonds between family, peers, and community.",
      },
      digital: {
        category: "WORLD · Media Literacy & Ethics",
        tagline: "Develop digital resilience and a healthy relationship with media.",
        intro:
          "SEVDA™ Digital builds the judgement to navigate a connected world — media literacy, ethics, and the confidence to stay grounded online and offline.",
      },
      launch: {
        category: "FUTURE · Life Readiness",
        tagline: "Grow future-ready skills and a clear vision for what's next.",
        intro:
          "SEVDA™ Launch looks forward — future skills, life readiness, and a clear vision that turns today's potential into tomorrow's direction.",
      },
    },
  },

  de: {
    eyebrow: "SEVDA™ Modul",
    back: "Zurück zu den Programmen",
    placeholderTitle: "Ausführliche Inhalte folgen in Kürze",
    placeholderText:
      "Wir stellen gerade die vollständige Übersicht für dieses Modul fertig — Ergebnisse, Wochenbogen, Formate und Preise. In der Zwischenzeit kannst du ein kostenloses Klarheits-Gespräch buchen, und wir führen dich persönlich durch.",
    ctaHeading: "Neugierig auf dieses Modul?",
    modules: {
      core: {
        category: "SELBST · Identität & Resilienz",
        tagline: "Stärke emotionale Intelligenz und baue echte innere Klarheit auf.",
        intro:
          "SEVDA™ Core ist der Beginn der Reise — entdecke deine Stärken, reguliere Emotionen und baue die innere Stabilität auf, auf der alles andere ruht.",
      },
      flow: {
        category: "SELBST · Lernen lernen",
        tagline: "Finde Fokus, lerne im Flow und sieh deinen Fortschritt klar vor dir.",
        intro:
          "SEVDA™ Flow macht Lernen zu einer eigenen Fähigkeit — Konzentration, gesunde Gewohnheiten und ein Schwung, der Wachstum natürlich statt erzwungen anfühlen lässt.",
      },
      connect: {
        category: "WELT · Kommunikation & Teamwork",
        tagline: "Baue ruhige Beziehungen, Kommunikation und Teamwork auf, die halten.",
        intro:
          "SEVDA™ Connect dreht sich um Menschen — zuhören, versöhnen und mit Empathie zusammenarbeiten. Es stärkt die Bindungen zwischen Familie, Gleichaltrigen und Gemeinschaft.",
      },
      digital: {
        category: "WELT · Medienkompetenz & Ethik",
        tagline: "Entwickle digitale Resilienz und einen gesunden Umgang mit Medien.",
        intro:
          "SEVDA™ Digital schafft das Urteilsvermögen, um eine vernetzte Welt zu navigieren — Medienkompetenz, Ethik und die Sicherheit, online wie offline geerdet zu bleiben.",
      },
      launch: {
        category: "ZUKUNFT · Lebensreife",
        tagline: "Entwickle zukunftsfähige Fähigkeiten und eine klare Vision für das, was kommt.",
        intro:
          "SEVDA™ Launch blickt nach vorn — Future Skills, Lebensreife und eine klare Vision, die das heutige Potenzial in die Richtung von morgen verwandelt.",
      },
    },
  },

  tr: {
    eyebrow: "SEVDA™ Modülü",
    back: "Programlara dön",
    placeholderTitle: "Ayrıntılı içerik çok yakında",
    placeholderText:
      "Bu modül için tam dökümü hazırlıyoruz — kazanımlar, haftalık akış, formatlar ve fiyatlandırma. Bu arada ücretsiz bir Netlik Görüşmesi planla, sana bizzat anlatalım.",
    ctaHeading: "Bu modülü merak mı ettin?",
    modules: {
      core: {
        category: "ÖZ · Kimlik & Dayanıklılık",
        tagline: "Duygusal zekânı güçlendir ve gerçek bir iç netlik oluştur.",
        intro:
          "SEVDA™ Core yolculuğun başladığı yerdir — güçlü yönlerini keşfet, duygularını düzenle ve diğer her şeyin üzerine inşa edildiği iç istikrarı oluştur.",
      },
      flow: {
        category: "ÖZ · Öğrenmeyi Öğrenmek",
        tagline: "Odağını bul, akışta öğren ve ilerlemeni net bir şekilde gör.",
        intro:
          "SEVDA™ Flow öğrenmeyi başlı başına bir beceriye dönüştürür — konsantrasyon, sağlıklı alışkanlıklar ve büyümeyi zorlama değil doğal hissettiren bir ivme.",
      },
      connect: {
        category: "DÜNYA · İletişim & Takım Çalışması",
        tagline: "Kalıcı sakin ilişkiler, iletişim ve takım çalışması kur.",
        intro:
          "SEVDA™ Connect insanlarla ilgilidir — dinlemek, onarmak ve empatiyle iş birliği yapmak. Aile, akran ve topluluk arasındaki bağları güçlendirir.",
      },
      digital: {
        category: "DÜNYA · Medya Okuryazarlığı & Etik",
        tagline: "Dijital dayanıklılık ve medyayla sağlıklı bir ilişki geliştir.",
        intro:
          "SEVDA™ Digital bağlantılı bir dünyada yön bulma muhakemesini inşa eder — medya okuryazarlığı, etik ve çevrimiçi ve çevrimdışı dengede kalma özgüveni.",
      },
      launch: {
        category: "GELECEK · Hayata Hazırlık",
        tagline: "Geleceğe hazır beceriler ve sırada ne olduğuna dair net bir vizyon geliştir.",
        intro:
          "SEVDA™ Launch ileriye bakar — geleceğin becerileri, hayata hazırlık ve bugünün potansiyelini yarının yönüne çeviren net bir vizyon.",
      },
    },
  },
};
