import { Locale } from "./i18n";

export type AboutContent = (typeof aboutContent)["en"];

export const aboutContent: Record<Locale, AboutDict> = {
  en: {
    hero: {
      title: ["We Believe in Learning", "That Moves You."],
      subtitle:
        "FramingFuture™ combines coaching, neuroscience, and emotional education into a system that empowers people to consciously shape their future.",
      button: "See How It Works",
    },
    started: {
      heading: "How It All Started",
      paragraphs: [
        "FramingFuture™ was born from the belief that education can be more than knowledge transfer. I recognized through my work with children, teens, and families: the most important skills for the future are not taught in curricula.",
        "Self-efficacy, resilience, emotional intelligence — these are the foundations on which everything else builds. Yet schools often lack time, families lack guidance.",
        "So I created a system that unites both: scientific foundation and emotional depth. The result is the SEVDA™ Coaching Model — a framework that brings mind, heart, and body into harmony.",
      ],
    },
    mission: {
      label: "Mission",
      text: "To empower youth, parents, and schools with professional coaching that unlocks potential, builds resilience, and creates lasting positive change through personalized, evidence-based methods.",
    },
    vision: {
      label: "Vision",
      text: "A future where every young person, parent, and educational institution has access to world-class coaching that enables them to navigate life's challenges with confidence, clarity, and purpose.",
    },
    heart: {
      heading: "The Heart of FramingFuture™",
      subtitle: "SEVDA™ stands for the five pillars of lasting development.",
      pillars: [
        { name: "Self-Efficacy", desc: "The belief that you can create change through your own actions.", quote: "I can do this." },
        { name: "Empathy", desc: "The ability to understand yourself and others — the foundation of every relationship.", quote: "I feel with you." },
        { name: "Embodiment", desc: "Learning becomes experience, knowledge becomes posture.", quote: "I embody it." },
        { name: "Determination", desc: "Perseverance and resilience — the courage to keep going.", quote: "I keep going." },
        { name: "Autonomy", desc: "The freedom to decide for yourself and the responsibility that comes with it.", quote: "I choose for myself." },
      ],
    },
    cortex: {
      eyebrow: "How I Facilitate Learning:",
      heading: "CortexCraft™",
      paragraphs: [
        "CortexCraft™ combines neuroscience, gamification, and emotion into a learning method that moves — in the mind and in the heart.",
        "I harness the power of flow, reward, and movement to create lasting neural connections. Learning becomes experience, knowledge comes alive.",
      ],
    },
    methodology: {
      heading: "Our Methodology",
      quote:
        "I dream of a world where learning is not a duty, but a joy. Where young people know who they are, what they can do, and where they are going.",
    },
    founder: {
      heading: "Meet the Founder",
      title: "SEVDA™ Method",
      role: "Founder & Lead Coach",
      paragraphs: [
        "I am a coach, education innovator, and creator of the SEVDA™ Method. With over 16 years of experience working with children, teens, and families, I combine scientific expertise with emotional depth.",
        "My mission: empowering people to understand their thinking, shape their learning, and consciously create their future.",
      ],
      quote: "The future begins within. I help people walk this path — clear, courageous, conscious.",
      credLabel: "Credentials & Experience",
      creds: [
        "Certified Professional Coach (CTA-CPC)",
        "ICF-oriented training and methodology",
        "Creator of the SEVDA™ coaching model",
        "16+ years experience in education and youth development",
      ],
    },
    believe: {
      heading: "What I Believe In",
      items: [
        { name: "Excellence", desc: "Quality, scientific foundation, and emotional depth." },
        { name: "Authenticity", desc: "No staging, no empty promises — just genuine relationships." },
        { name: "Transformation", desc: "Every person carries the potential to change." },
        { name: "Future Focus", desc: "Skills that last in a constantly changing world." },
      ],
    },
    howWeWork: {
      heading: "How We Work",
      items: [
        { name: "ICF-oriented", desc: "methodology" },
        { name: "SEVDA™ method", desc: "gives you clear orientation" },
        { name: "NeuroGamification™", desc: "makes learning experiential" },
      ],
    },
    values: {
      heading: "Our Core Values",
      items: [
        { name: "Empathy", desc: "We lead with compassion and understanding." },
        { name: "Integrity", desc: "Honest, ethical, transparent in all we do." },
        { name: "Innovation", desc: "Pioneering new approaches to coaching." },
        { name: "Community", desc: "Building supportive networks for growth." },
        { name: "Impact", desc: "Creating lasting positive change." },
        { name: "Excellence", desc: "Committed to the highest coaching standards." },
      ],
    },
    evidence: {
      heading: "Evidence-Based & Effective",
      subtitle:
        "FramingFuture™ is based on current research from psychology, neuroscience, and coaching science. We integrate proven frameworks such as:",
      frameworks: [
        "Growth Mindset (Carol Dweck)",
        "Self-Determination Theory (Deci & Ryan)",
        "Flow Theory (Mihaly Csikszentmihalyi)",
        "Self-Efficacy (Albert Bandura)",
      ],
    },
    cta: {
      heading: "Ready for Your First Step",
      subtitle: "Whether as a parent, school, or partner — together we shape the future.",
      button: "Get in Touch",
    },
  },

  de: {
    hero: {
      title: ["Wir glauben an Lernen,", "das dich bewegt."],
      subtitle:
        "FramingFuture™ verbindet Coaching, Neurowissenschaft und emotionale Bildung zu einem System, das Menschen befähigt, ihre Zukunft bewusst zu gestalten.",
      button: "So funktioniert es",
    },
    started: {
      heading: "Wie alles begann",
      paragraphs: [
        "FramingFuture™ entstand aus der Überzeugung, dass Bildung mehr sein kann als Wissensvermittlung. Durch meine Arbeit mit Kindern, Jugendlichen und Familien erkannte ich: Die wichtigsten Zukunftskompetenzen werden in keinem Lehrplan unterrichtet.",
        "Selbstwirksamkeit, Resilienz, emotionale Intelligenz — das sind die Fundamente, auf denen alles andere aufbaut. Doch Schulen fehlt oft die Zeit, Familien die Orientierung.",
        "Also schuf ich ein System, das beides vereint: wissenschaftliches Fundament und emotionale Tiefe. Das Ergebnis ist das SEVDA™ Coaching-Modell — ein Rahmen, der Kopf, Herz und Körper in Einklang bringt.",
      ],
    },
    mission: {
      label: "Mission",
      text: "Jugendliche, Eltern und Schulen mit professionellem Coaching zu stärken, das Potenzial entfaltet, Resilienz aufbaut und durch personalisierte, evidenzbasierte Methoden nachhaltige positive Veränderung schafft.",
    },
    vision: {
      label: "Vision",
      text: "Eine Zukunft, in der jeder junge Mensch, jedes Elternteil und jede Bildungseinrichtung Zugang zu erstklassigem Coaching hat, um die Herausforderungen des Lebens mit Selbstvertrauen, Klarheit und Sinn zu meistern.",
    },
    heart: {
      heading: "Das Herz von FramingFuture™",
      subtitle: "SEVDA™ steht für die fünf Säulen nachhaltiger Entwicklung.",
      pillars: [
        { name: "Selbstwirksamkeit", desc: "Der Glaube, durch eigenes Handeln Veränderung bewirken zu können.", quote: "Ich schaffe das." },
        { name: "Empathie", desc: "Die Fähigkeit, sich selbst und andere zu verstehen — die Grundlage jeder Beziehung.", quote: "Ich fühle mit dir." },
        { name: "Verkörperung", desc: "Lernen wird Erfahrung, Wissen wird Haltung.", quote: "Ich verkörpere es." },
        { name: "Entschlossenheit", desc: "Ausdauer und Widerstandskraft — der Mut, weiterzugehen.", quote: "Ich mache weiter." },
        { name: "Autonomie", desc: "Die Freiheit, selbst zu entscheiden — und die Verantwortung, die damit einhergeht.", quote: "Ich entscheide für mich." },
      ],
    },
    cortex: {
      eyebrow: "Wie ich Lernen ermögliche:",
      heading: "CortexCraft™",
      paragraphs: [
        "CortexCraft™ verbindet Neurowissenschaft, Gamification und Emotion zu einer Lernmethode, die bewegt — im Kopf und im Herzen.",
        "Ich nutze die Kraft von Flow, Belohnung und Bewegung, um dauerhafte neuronale Verbindungen zu schaffen. Lernen wird Erfahrung, Wissen wird lebendig.",
      ],
    },
    methodology: {
      heading: "Unsere Methodik",
      quote:
        "Ich träume von einer Welt, in der Lernen keine Pflicht ist, sondern Freude. In der junge Menschen wissen, wer sie sind, was sie können und wohin sie gehen.",
    },
    founder: {
      heading: "Die Gründerin",
      title: "SEVDA™ Methode",
      role: "Gründerin & Lead Coach",
      paragraphs: [
        "Ich bin Coach, Bildungsinnovatorin und Schöpferin der SEVDA™ Methode. Mit über 16 Jahren Erfahrung in der Arbeit mit Kindern, Jugendlichen und Familien verbinde ich wissenschaftliche Expertise mit emotionaler Tiefe.",
        "Meine Mission: Menschen zu befähigen, ihr Denken zu verstehen, ihr Lernen zu gestalten und ihre Zukunft bewusst zu erschaffen.",
      ],
      quote: "Die Zukunft beginnt im Inneren. Ich helfe Menschen, diesen Weg zu gehen — klar, mutig, bewusst.",
      credLabel: "Qualifikationen & Erfahrung",
      creds: [
        "Zertifizierter Professioneller Coach (CTA-CPC)",
        "ICF-orientierte Ausbildung und Methodik",
        "Schöpferin des SEVDA™ Coaching-Modells",
        "16+ Jahre Erfahrung in Bildung und Jugendentwicklung",
      ],
    },
    believe: {
      heading: "Woran ich glaube",
      items: [
        { name: "Exzellenz", desc: "Qualität, wissenschaftliches Fundament und emotionale Tiefe." },
        { name: "Authentizität", desc: "Keine Inszenierung, keine leeren Versprechen — nur echte Beziehungen." },
        { name: "Transformation", desc: "Jeder Mensch trägt das Potenzial zur Veränderung in sich." },
        { name: "Zukunftsfokus", desc: "Kompetenzen, die in einer sich ständig wandelnden Welt Bestand haben." },
      ],
    },
    howWeWork: {
      heading: "Wie wir arbeiten",
      items: [
        { name: "ICF-orientierte", desc: "Methodik" },
        { name: "SEVDA™ Methode", desc: "gibt dir klare Orientierung" },
        { name: "NeuroGamification™", desc: "macht Lernen erlebbar" },
      ],
    },
    values: {
      heading: "Unsere Grundwerte",
      items: [
        { name: "Empathie", desc: "Wir handeln mit Mitgefühl und Verständnis." },
        { name: "Integrität", desc: "Ehrlich, ethisch, transparent in allem, was wir tun." },
        { name: "Innovation", desc: "Wir gehen neue Wege im Coaching." },
        { name: "Gemeinschaft", desc: "Wir bauen unterstützende Netzwerke für Wachstum." },
        { name: "Wirkung", desc: "Wir schaffen nachhaltige positive Veränderung." },
        { name: "Exzellenz", desc: "Wir verpflichten uns höchsten Coaching-Standards." },
      ],
    },
    evidence: {
      heading: "Evidenzbasiert & Wirksam",
      subtitle:
        "FramingFuture™ basiert auf aktueller Forschung aus Psychologie, Neurowissenschaft und Coaching-Wissenschaft. Wir integrieren bewährte Konzepte wie:",
      frameworks: [
        "Wachstumsmentalität (Carol Dweck)",
        "Selbstbestimmungstheorie (Deci & Ryan)",
        "Flow-Theorie (Mihaly Csikszentmihalyi)",
        "Selbstwirksamkeit (Albert Bandura)",
      ],
    },
    cta: {
      heading: "Bereit für deinen ersten Schritt",
      subtitle: "Ob als Elternteil, Schule oder Partner — gemeinsam gestalten wir die Zukunft.",
      button: "Kontakt aufnehmen",
    },
  },

  tr: {
    hero: {
      title: ["Seni Harekete Geçiren", "Bir Öğrenmeye İnanıyoruz."],
      subtitle:
        "FramingFuture™; koçluğu, nörobilimi ve duygusal eğitimi, insanların geleceklerini bilinçli olarak şekillendirmesini sağlayan bir sistemde birleştirir.",
      button: "Nasıl Çalıştığını Gör",
    },
    started: {
      heading: "Her Şey Nasıl Başladı",
      paragraphs: [
        "FramingFuture™, eğitimin bilgi aktarımından daha fazlası olabileceği inancından doğdu. Çocuklar, gençler ve ailelerle çalışırken fark ettim: Geleceğin en önemli becerileri hiçbir müfredatta öğretilmiyor.",
        "Öz-yeterlik, dayanıklılık, duygusal zekâ — diğer her şeyin üzerine inşa edildiği temeller bunlar. Ama okulların çoğu zaman vakti, ailelerin ise rehberliği yok.",
        "Bu yüzden ikisini birleştiren bir sistem yarattım: bilimsel temel ve duygusal derinlik. Sonuç, SEVDA™ Koçluk Modeli — zihni, kalbi ve bedeni uyuma getiren bir çerçeve.",
      ],
    },
    mission: {
      label: "Misyon",
      text: "Gençleri, ebeveynleri ve okulları; potansiyeli açığa çıkaran, dayanıklılık inşa eden ve kişiselleştirilmiş, kanıta dayalı yöntemlerle kalıcı olumlu değişim yaratan profesyonel koçlukla güçlendirmek.",
    },
    vision: {
      label: "Vizyon",
      text: "Her genç insanın, ebeveynin ve eğitim kurumunun; hayatın zorluklarını özgüven, netlik ve amaçla aşmasını sağlayan dünya standartlarında koçluğa eriştiği bir gelecek.",
    },
    heart: {
      heading: "FramingFuture™'ın Kalbi",
      subtitle: "SEVDA™, kalıcı gelişimin beş temel direğini temsil eder.",
      pillars: [
        { name: "Öz-Yeterlik", desc: "Kendi eylemlerinle değişim yaratabileceğine olan inanç.", quote: "Bunu yapabilirim." },
        { name: "Empati", desc: "Kendini ve başkalarını anlama yeteneği — her ilişkinin temeli.", quote: "Seninle hissediyorum." },
        { name: "Bedenleştirme", desc: "Öğrenme deneyime, bilgi duruşa dönüşür.", quote: "Onu bedenliyorum." },
        { name: "Kararlılık", desc: "Azim ve dayanıklılık — devam etme cesareti.", quote: "Devam ediyorum." },
        { name: "Özerklik", desc: "Kendin için karar verme özgürlüğü — ve onunla gelen sorumluluk.", quote: "Kendim için seçiyorum." },
      ],
    },
    cortex: {
      eyebrow: "Öğrenmeyi Nasıl Kolaylaştırıyorum:",
      heading: "CortexCraft™",
      paragraphs: [
        "CortexCraft™; nörobilimi, oyunlaştırmayı ve duyguyu, harekete geçiren bir öğrenme yöntemiyle birleştirir — hem zihinde hem kalpte.",
        "Kalıcı nöral bağlantılar oluşturmak için akış, ödül ve hareketin gücünü kullanırım. Öğrenme deneyime dönüşür, bilgi hayat bulur.",
      ],
    },
    methodology: {
      heading: "Metodolojimiz",
      quote:
        "Öğrenmenin bir görev değil, bir sevinç olduğu bir dünya hayal ediyorum. Gençlerin kim olduklarını, neler yapabileceklerini ve nereye gittiklerini bildiği bir dünya.",
    },
    founder: {
      heading: "Kurucuyla Tanışın",
      title: "SEVDA™ Yöntemi",
      role: "Kurucu & Baş Koç",
      paragraphs: [
        "Ben bir koç, eğitim yenilikçisi ve SEVDA™ Yönteminin yaratıcısıyım. Çocuklar, gençler ve ailelerle 16 yılı aşkın deneyimimle bilimsel uzmanlığı duygusal derinlikle birleştiriyorum.",
        "Misyonum: İnsanların düşüncelerini anlamalarını, öğrenmelerini şekillendirmelerini ve geleceklerini bilinçli olarak yaratmalarını sağlamak.",
      ],
      quote: "Gelecek içeride başlar. İnsanların bu yolda yürümesine yardım ediyorum — net, cesur, bilinçli.",
      credLabel: "Yetkinlikler & Deneyim",
      creds: [
        "Sertifikalı Profesyonel Koç (CTA-CPC)",
        "ICF odaklı eğitim ve metodoloji",
        "SEVDA™ koçluk modelinin yaratıcısı",
        "Eğitim ve gençlik gelişiminde 16+ yıl deneyim",
      ],
    },
    believe: {
      heading: "Neye İnanıyorum",
      items: [
        { name: "Mükemmellik", desc: "Kalite, bilimsel temel ve duygusal derinlik." },
        { name: "Özgünlük", desc: "Gösteriş yok, boş vaat yok — yalnızca gerçek ilişkiler." },
        { name: "Dönüşüm", desc: "Her insan değişim potansiyelini içinde taşır." },
        { name: "Gelecek Odağı", desc: "Sürekli değişen bir dünyada kalıcı olan beceriler." },
      ],
    },
    howWeWork: {
      heading: "Nasıl Çalışıyoruz",
      items: [
        { name: "ICF odaklı", desc: "metodoloji" },
        { name: "SEVDA™ yöntemi", desc: "sana net bir yön verir" },
        { name: "NeuroGamification™", desc: "öğrenmeyi deneyimsel kılar" },
      ],
    },
    values: {
      heading: "Temel Değerlerimiz",
      items: [
        { name: "Empati", desc: "Şefkat ve anlayışla yol gösteririz." },
        { name: "Dürüstlük", desc: "Yaptığımız her şeyde dürüst, etik ve şeffaf." },
        { name: "Yenilikçilik", desc: "Koçlukta yeni yaklaşımların öncüsüyüz." },
        { name: "Topluluk", desc: "Gelişim için destekleyici ağlar kuruyoruz." },
        { name: "Etki", desc: "Kalıcı olumlu değişim yaratıyoruz." },
        { name: "Mükemmellik", desc: "En yüksek koçluk standartlarına bağlıyız." },
      ],
    },
    evidence: {
      heading: "Kanıta Dayalı & Etkili",
      subtitle:
        "FramingFuture™; psikoloji, nörobilim ve koçluk biliminden güncel araştırmalara dayanır. Kanıtlanmış çerçeveleri entegre ederiz:",
      frameworks: [
        "Gelişim Zihniyeti (Carol Dweck)",
        "Öz-Belirleme Teorisi (Deci & Ryan)",
        "Akış Teorisi (Mihaly Csikszentmihalyi)",
        "Öz-Yeterlik (Albert Bandura)",
      ],
    },
    cta: {
      heading: "İlk Adımına Hazır mısın",
      subtitle: "İster ebeveyn, ister okul, ister partner ol — geleceği birlikte şekillendiririz.",
      button: "İletişime Geç",
    },
  },
};

type AboutDict = {
  hero: { title: string[]; subtitle: string; button: string };
  started: { heading: string; paragraphs: string[] };
  mission: { label: string; text: string };
  vision: { label: string; text: string };
  heart: {
    heading: string;
    subtitle: string;
    pillars: { name: string; desc: string; quote: string }[];
  };
  cortex: { eyebrow: string; heading: string; paragraphs: string[] };
  methodology: { heading: string; quote: string };
  founder: {
    heading: string;
    title: string;
    role: string;
    paragraphs: string[];
    quote: string;
    credLabel: string;
    creds: string[];
  };
  believe: { heading: string; items: { name: string; desc: string }[] };
  howWeWork: { heading: string; items: { name: string; desc: string }[] };
  values: { heading: string; items: { name: string; desc: string }[] };
  evidence: { heading: string; subtitle: string; frameworks: string[] };
  cta: { heading: string; subtitle: string; button: string };
};
