import { Locale } from "./i18n";

/* ---------------------------------------------------------------- *
 * Privacy Policy
 * ---------------------------------------------------------------- */

export type PrivacyContent = (typeof privacyContent)["en"];

type PrivacyDict = {
  eyebrow: string;
  title: string;
  meta: string;
  responsibleLabels: { owner: string; email: string; phone: string };
  s1h: string;
  s2: { h: string; p1: string; p2: string; p3: string };
  s3: { h: string; p1: string; p2: string };
  s4: { h: string; p1: string; p2: string };
  s5: { h: string; p1: string };
  tools: [string, string][];
  s6: { h: string; p: string };
  s7: { h: string; p: string };
  s8: { h: string; p1: string; p2pre: string; p2post: string };
  s9: { h: string; p: string };
  s10: { h: string; p: string };
};

export const privacyContent: Record<Locale, PrivacyDict> = {
  en: {
    eyebrow: "Legal information",
    title: "Privacy Policy",
    meta: "FramingFuture.com — As of June 2026",
    responsibleLabels: { owner: "Owner", email: "Email", phone: "Telephone" },
    s1h: "1. Responsible body",
    s2: {
      h: "2. Basic principles & legal basis",
      p1: "We process personal data exclusively within the framework of the General Data Protection Regulation (GDPR) and the Telecommunications and Telemedia Data Protection Act (TTDSG).",
      p2: "Legal basis: Art. 6 para. 1 lit. a–f GDPR (consent, performance of a contract, legal obligation, legitimate interest).",
      p3: "Legitimate interests include, in particular, technical security, the optimization of our services, and customer communication.",
    },
    s3: {
      h: "3. Visit the website",
      p1: "When you visit our website, technical data (e.g., IP address, browser type, time) is automatically recorded in server log files. This is for the purpose of ensuring system stability and for error analysis.",
      p2: "This data will be deleted after a maximum of 7 days. Legal basis: Art. 6 para. 1 lit. f GDPR.",
    },
    s4: {
      h: "4. Cookies & Consent",
      p1: "Our website uses a cookie consent tool from a European provider to manage your consent to the storage of cookies.",
      p2: "Optional cookies (analysis, statistics) are only set after explicit consent (Section 25 Paragraph 1 TTDSG, Article 6 Paragraph 1 Letter a GDPR). Consent can be withdrawn at any time.",
    },
    s5: {
      h: "5. Tools & Systems Used",
      p1: "All external service providers have a data processing agreement in place (Art. 28 GDPR). The following list reflects the status of the tools currently in use as of June 2026.",
    },
    tools: [
      ["Hosting (ALL-INKL.COM)", "Secure hosting on EU servers, data processing agreement in place."],
      ["WordPress & Hazel Theme", "Technical basis of the website, no data is transferred to third parties."],
      ["RankMath Pro", "SEO optimization, no storage of personal data."],
      ["SureForms", "Contact form and bookings; data is transferred to Brevo (CRM)."],
      ["WhatsApp Widget (Meta Platforms Ireland Ltd.)", "Communication via Meta servers; data transfer to DPF/SCC."],
      ["TinyTalk AI Assistant", "Chat communication, processed on EU servers, anonymized."],
      ["Brevo (Sendinblue GmbH, Berlin)", "Email communication, EU server, data processing agreement."],
      ["Lunacal", "Appointment management; synchronization with Brevo."],
      ["FuseBase", "Parent & school portals (portal.framingfuture.com); Data processing agreement, SCC protection."],
      ["Dadan", "Video embedding; no tracking cookies, no storage of personal data."],
      ["Gamma", "Interactive presentations; US provider with DPF certification, no storage of user data."],
      ["Late", "Internal social media planning, no processing at the website level."],
      ["Note", "Locally hosted UI component library, no data transfer."],
      ["Academy LMS", "Online courses, voluntary registration, processing on EU servers."],
      ["WbizTool & Lancepilot", "Internal management of contracts, invoices and tasks."],
    ],
    s6: {
      h: "6. Data transfer to third countries",
      p: "For services located outside the EU (e.g., Meta, Gamma, FuseBase), processing is carried out solely on the basis of the EU-US Data Privacy Framework (DPF) or the Standard Contractual Clauses (SCCs) pursuant to Article 46 GDPR. Despite existing safeguards, an equivalent level of data protection cannot be guaranteed in individual cases.",
    },
    s7: {
      h: "7. Storage period & deletion",
      p: "Data is deleted as soon as the purpose for which it was collected no longer applies or you withdraw your consent. Server logs: 7 days. Contract data: in accordance with statutory retention requirements (§ 257 HGB, § 147 AO).",
    },
    s8: {
      h: "8. Rights of those affected",
      p1: "You have the right to information, rectification, erasure, restriction of processing, data portability, and objection (Articles 15–21 GDPR). You can withdraw your consent at any time (Article 7(3) GDPR).",
      p2pre: "Complaints should be addressed to the State Commissioner for Data Protection and Freedom of Information NRW (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, ",
      p2post: ".",
    },
    s9: {
      h: "9. Security & SSL Encryption",
      p: "This website uses SSL/TLS encryption to protect your data from unauthorized access.",
    },
    s10: {
      h: "10. Scope & Amendments",
      p: "This privacy policy applies exclusively to www.framingfuture.com. We reserve the right to make changes. The current version can be found online at any time at /datenschutz.",
    },
  },

  de: {
    eyebrow: "Rechtliche Informationen",
    title: "Datenschutzerklärung",
    meta: "FramingFuture.com — Stand: Juni 2026",
    responsibleLabels: { owner: "Inhaberin", email: "E-Mail", phone: "Telefon" },
    s1h: "1. Verantwortliche Stelle",
    s2: {
      h: "2. Grundsätze & Rechtsgrundlagen",
      p1: "Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der Datenschutz-Grundverordnung (DSGVO) und des Telekommunikation-Telemedien-Datenschutz-Gesetzes (TTDSG).",
      p2: "Rechtsgrundlagen: Art. 6 Abs. 1 lit. a–f DSGVO (Einwilligung, Vertragserfüllung, rechtliche Verpflichtung, berechtigtes Interesse).",
      p3: "Berechtigte Interessen umfassen insbesondere die technische Sicherheit, die Optimierung unserer Leistungen sowie die Kundenkommunikation.",
    },
    s3: {
      h: "3. Besuch der Website",
      p1: "Beim Besuch unserer Website werden technische Daten (z. B. IP-Adresse, Browsertyp, Uhrzeit) automatisch in Server-Logfiles erfasst. Dies dient der Sicherstellung der Systemstabilität und der Fehleranalyse.",
      p2: "Diese Daten werden nach spätestens 7 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
    },
    s4: {
      h: "4. Cookies & Einwilligung",
      p1: "Unsere Website nutzt ein Cookie-Consent-Tool eines europäischen Anbieters, um deine Einwilligung zur Speicherung von Cookies zu verwalten.",
      p2: "Optionale Cookies (Analyse, Statistik) werden erst nach ausdrücklicher Einwilligung gesetzt (§ 25 Abs. 1 TTDSG, Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung kann jederzeit widerrufen werden.",
    },
    s5: {
      h: "5. Eingesetzte Tools & Systeme",
      p1: "Mit allen externen Dienstleistern besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Die folgende Liste gibt den Stand der aktuell eingesetzten Tools im Juni 2026 wieder.",
    },
    tools: [
      ["Hosting (ALL-INKL.COM)", "Sicheres Hosting auf EU-Servern, Auftragsverarbeitungsvertrag vorhanden."],
      ["WordPress & Hazel Theme", "Technische Grundlage der Website, keine Datenweitergabe an Dritte."],
      ["RankMath Pro", "SEO-Optimierung, keine Speicherung personenbezogener Daten."],
      ["SureForms", "Kontaktformular und Buchungen; Daten werden an Brevo (CRM) übermittelt."],
      ["WhatsApp Widget (Meta Platforms Ireland Ltd.)", "Kommunikation über Meta-Server; Datenübermittlung nach DPF/SCC."],
      ["TinyTalk AI Assistant", "Chat-Kommunikation, Verarbeitung auf EU-Servern, anonymisiert."],
      ["Brevo (Sendinblue GmbH, Berlin)", "E-Mail-Kommunikation, EU-Server, Auftragsverarbeitungsvertrag."],
      ["Lunacal", "Terminverwaltung; Synchronisation mit Brevo."],
      ["FuseBase", "Eltern- & Schulportale (portal.framingfuture.com); Auftragsverarbeitungsvertrag, SCC-Schutz."],
      ["Dadan", "Video-Einbindung; keine Tracking-Cookies, keine Speicherung personenbezogener Daten."],
      ["Gamma", "Interaktive Präsentationen; US-Anbieter mit DPF-Zertifizierung, keine Speicherung von Nutzerdaten."],
      ["Late", "Interne Social-Media-Planung, keine Verarbeitung auf Website-Ebene."],
      ["Note", "Lokal gehostete UI-Komponentenbibliothek, keine Datenweitergabe."],
      ["Academy LMS", "Online-Kurse, freiwillige Registrierung, Verarbeitung auf EU-Servern."],
      ["WbizTool & Lancepilot", "Interne Verwaltung von Verträgen, Rechnungen und Aufgaben."],
    ],
    s6: {
      h: "6. Datenübermittlung in Drittländer",
      p: "Bei Diensten mit Sitz außerhalb der EU (z. B. Meta, Gamma, FuseBase) erfolgt die Verarbeitung ausschließlich auf Grundlage des EU-US Data Privacy Framework (DPF) oder der Standardvertragsklauseln (SCC) gemäß Art. 46 DSGVO. Trotz bestehender Schutzmaßnahmen kann im Einzelfall kein gleichwertiges Datenschutzniveau garantiert werden.",
    },
    s7: {
      h: "7. Speicherdauer & Löschung",
      p: "Daten werden gelöscht, sobald der Zweck ihrer Erhebung entfällt oder du deine Einwilligung widerrufst. Server-Logs: 7 Tage. Vertragsdaten: gemäß den gesetzlichen Aufbewahrungsfristen (§ 257 HGB, § 147 AO).",
    },
    s8: {
      h: "8. Rechte der Betroffenen",
      p1: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Du kannst deine Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO).",
      p2pre: "Beschwerden richtest du an die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, ",
      p2post: ".",
    },
    s9: {
      h: "9. Sicherheit & SSL-Verschlüsselung",
      p: "Diese Website nutzt eine SSL/TLS-Verschlüsselung, um deine Daten vor unbefugtem Zugriff zu schützen.",
    },
    s10: {
      h: "10. Geltungsbereich & Änderungen",
      p: "Diese Datenschutzerklärung gilt ausschließlich für www.framingfuture.com. Änderungen behalten wir uns vor. Die aktuelle Version ist jederzeit online unter /datenschutz abrufbar.",
    },
  },

  tr: {
    eyebrow: "Yasal bilgiler",
    title: "Gizlilik Politikası",
    meta: "FramingFuture.com — Haziran 2026 itibarıyla",
    responsibleLabels: { owner: "Sahibi", email: "E-posta", phone: "Telefon" },
    s1h: "1. Sorumlu kuruluş",
    s2: {
      h: "2. Temel ilkeler & yasal dayanak",
      p1: "Kişisel verileri yalnızca Genel Veri Koruma Tüzüğü (GDPR) ve Telekomünikasyon-Telemedya Veri Koruma Yasası (TTDSG) çerçevesinde işliyoruz.",
      p2: "Yasal dayanak: GDPR Madde 6 fıkra 1 bent a–f (rıza, sözleşmenin ifası, yasal yükümlülük, meşru menfaat).",
      p3: "Meşru menfaatler özellikle teknik güvenliği, hizmetlerimizin iyileştirilmesini ve müşteri iletişimini kapsar.",
    },
    s3: {
      h: "3. Web sitesini ziyaret",
      p1: "Web sitemizi ziyaret ettiğinizde, teknik veriler (ör. IP adresi, tarayıcı türü, zaman) sunucu günlük dosyalarına otomatik olarak kaydedilir. Bu, sistem kararlılığının sağlanması ve hata analizi amacıyla yapılır.",
      p2: "Bu veriler en fazla 7 gün sonra silinir. Yasal dayanak: GDPR Madde 6 fıkra 1 bent f.",
    },
    s4: {
      h: "4. Çerezler & rıza",
      p1: "Web sitemiz, çerezlerin saklanmasına ilişkin rızanızı yönetmek için bir Avrupa sağlayıcısının çerez onay aracını kullanır.",
      p2: "İsteğe bağlı çerezler (analiz, istatistik) yalnızca açık rızanın ardından ayarlanır (TTDSG § 25 fıkra 1, GDPR Madde 6 fıkra 1 bent a). Rıza istediğiniz zaman geri alınabilir.",
    },
    s5: {
      h: "5. Kullanılan araçlar & sistemler",
      p1: "Tüm harici hizmet sağlayıcılarla bir veri işleme sözleşmesi mevcuttur (GDPR Madde 28). Aşağıdaki liste, Haziran 2026 itibarıyla kullanılan araçların durumunu yansıtır.",
    },
    tools: [
      ["Hosting (ALL-INKL.COM)", "AB sunucularında güvenli barındırma, veri işleme sözleşmesi mevcut."],
      ["WordPress & Hazel Theme", "Web sitesinin teknik temeli, üçüncü taraflara veri aktarılmaz."],
      ["RankMath Pro", "SEO optimizasyonu, kişisel veri saklanmaz."],
      ["SureForms", "İletişim formu ve rezervasyonlar; veriler Brevo'ya (CRM) aktarılır."],
      ["WhatsApp Widget (Meta Platforms Ireland Ltd.)", "Meta sunucuları üzerinden iletişim; DPF/SCC kapsamında veri aktarımı."],
      ["TinyTalk AI Assistant", "Sohbet iletişimi, AB sunucularında işlenir, anonimleştirilir."],
      ["Brevo (Sendinblue GmbH, Berlin)", "E-posta iletişimi, AB sunucusu, veri işleme sözleşmesi."],
      ["Lunacal", "Randevu yönetimi; Brevo ile senkronizasyon."],
      ["FuseBase", "Ebeveyn & okul portalları (portal.framingfuture.com); veri işleme sözleşmesi, SCC koruması."],
      ["Dadan", "Video gömme; izleme çerezi yok, kişisel veri saklanmaz."],
      ["Gamma", "Etkileşimli sunumlar; DPF sertifikalı ABD sağlayıcısı, kullanıcı verisi saklanmaz."],
      ["Late", "Dahili sosyal medya planlaması, web sitesi düzeyinde işleme yok."],
      ["Note", "Yerel olarak barındırılan UI bileşen kütüphanesi, veri aktarımı yok."],
      ["Academy LMS", "Çevrimiçi kurslar, gönüllü kayıt, AB sunucularında işleme."],
      ["WbizTool & Lancepilot", "Sözleşmelerin, faturaların ve görevlerin dahili yönetimi."],
    ],
    s6: {
      h: "6. Üçüncü ülkelere veri aktarımı",
      p: "AB dışında bulunan hizmetler için (ör. Meta, Gamma, FuseBase) işleme, yalnızca AB-ABD Veri Gizliliği Çerçevesi (DPF) veya GDPR Madde 46 uyarınca Standart Sözleşme Hükümleri (SCC) temelinde gerçekleştirilir. Mevcut güvencelere rağmen, bireysel durumlarda eşdeğer bir veri koruma düzeyi garanti edilemez.",
    },
    s7: {
      h: "7. Saklama süresi & silme",
      p: "Veriler, toplanma amacı ortadan kalkar kalkmaz veya rızanızı geri çektiğinizde silinir. Sunucu günlükleri: 7 gün. Sözleşme verileri: yasal saklama yükümlülüklerine uygun olarak (§ 257 HGB, § 147 AO).",
    },
    s8: {
      h: "8. İlgili kişilerin hakları",
      p1: "Bilgi edinme, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz hakkına sahipsiniz (GDPR Madde 15–21). Rızanızı istediğiniz zaman geri çekebilirsiniz (GDPR Madde 7 fıkra 3).",
      p2pre: "Şikayetler, NRW Veri Koruma ve Bilgi Edinme Özgürlüğü Eyalet Komiserliği'ne (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf adresine iletilmelidir: ",
      p2post: ".",
    },
    s9: {
      h: "9. Güvenlik & SSL şifreleme",
      p: "Bu web sitesi, verilerinizi yetkisiz erişime karşı korumak için SSL/TLS şifreleme kullanır.",
    },
    s10: {
      h: "10. Kapsam & değişiklikler",
      p: "Bu gizlilik politikası yalnızca www.framingfuture.com için geçerlidir. Değişiklik yapma hakkımız saklıdır. Güncel sürüme istediğiniz zaman /datenschutz adresinden çevrimiçi olarak ulaşabilirsiniz.",
    },
  },
};

/* ---------------------------------------------------------------- *
 * Imprint
 * ---------------------------------------------------------------- */

export type ImprintContent = (typeof imprintContent)["en"];

type ImprintDict = {
  eyebrow: string;
  title: string;
  intro: string;
  provider: { h: string };
  contact: { h: string; phoneLabel: string; emailLabel: string; webLabel: string };
  responsibleContent: { h: string };
  vat: { h: string; p: string };
  jobTitle: { h: string; lines: string[] };
  trademark: { h: string; p1: string; p2: string };
  trademarks: string[];
  odr: { h: string; pPre: string; pPost: string };
  consumer: { h: string; p: string };
  liabilityContent: { h: string; p1: string; p2: string };
  liabilityLinks: { h: string; p1: string; p2: string };
  copyright: { h: string; p1: string; p2: string };
  imageCredits: { h: string; p: string };
};

export const imprintContent: Record<Locale, ImprintDict> = {
  en: {
    eyebrow: "Legal information",
    title: "Imprint",
    intro:
      "Information in accordance with Section 5 of the German Digital Services Act (DDG) and Section 18 (2) of the German Interstate Broadcasting Treaty (MStV). Status: June 2026.",
    provider: { h: "Service provider" },
    contact: { h: "Contact", phoneLabel: "Telephone", emailLabel: "Email", webLabel: "Web" },
    responsibleContent: { h: "Responsible for content in accordance with Section 18 (2) MStV" },
    vat: {
      h: "VAT",
      p: "In accordance with Section 19 UStG, no VAT is shown on invoices (small business regulation).",
    },
    jobTitle: {
      h: "Job title & qualification",
      lines: [
        "Job title: Coach (Certified Professional Coach — CPC)",
        "Certifying body: Certified Coaches Alliance (CCA) — CTA-CPC certified",
        "ICF certification (International Coaching Federation) in preparation",
        "Professional titles were awarded in the Federal Republic of Germany.",
      ],
    },
    trademark: {
      h: "Trademark and design rights",
      p1: "The following designations are registered trademarks or claimed trademarks of the service provider:",
      p2: "Use of these designations by third parties—especially in connection with coaching, training, or consulting services—requires the owner's express written consent.",
    },
    trademarks: ["FramingFuture™", "SEVDA™ Flow", "CortexCraft™", "Yücel Coaching Lab™"],
    odr: {
      h: "EU dispute resolution",
      pPre: "The European Commission provides a platform for online dispute resolution (ODR): ",
      pPost: "You can find our email address in the legal notice above.",
    },
    consumer: {
      h: "Consumer dispute resolution / universal arbitration board",
      p: "We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    liabilityContent: {
      h: "Liability for content",
      p1: "As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) of the German Digital Services Act (DDG). However, under Sections 8 to 10 DDG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      p2: "Obligations to remove or block the use of information under general law remain unaffected. However, liability in this respect is only possible from the time we become aware of a specific legal infringement. Upon becoming aware of such legal infringements, we will remove the content in question immediately.",
    },
    liabilityLinks: {
      h: "Liability for links",
      p1: "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
      p2: "The linked pages were checked for possible legal violations at the time the links were created. No illegal content was apparent at that time. However, continuous monitoring of the content of linked pages is not feasible without specific indications of a legal violation. Upon notification of legal violations, we will remove such links immediately.",
    },
    copyright: {
      h: "Copyright",
      p1: "The content and works created by the service provider on these pages are subject to German copyright law. Reproduction, processing, distribution, and any form of exploitation beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are permitted only for private, non-commercial use.",
      p2: "Where content on this site has not been created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please notify us accordingly. Upon notification of legal violations, we will remove such content immediately.",
    },
    imageCredits: {
      h: "Image credits",
      p: "All images and graphics used on this website are either from our own collection, were commissioned by the service provider, or are from royalty-free sources. Third-party rights remain unaffected.",
    },
  },

  de: {
    eyebrow: "Rechtliche Informationen",
    title: "Impressum",
    intro:
      "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV). Stand: Juni 2026.",
    provider: { h: "Diensteanbieter" },
    contact: { h: "Kontakt", phoneLabel: "Telefon", emailLabel: "E-Mail", webLabel: "Web" },
    responsibleContent: { h: "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV" },
    vat: {
      h: "Umsatzsteuer",
      p: "Gemäß § 19 UStG wird keine Umsatzsteuer auf Rechnungen ausgewiesen (Kleinunternehmerregelung).",
    },
    jobTitle: {
      h: "Berufsbezeichnung & Qualifikation",
      lines: [
        "Berufsbezeichnung: Coach (Certified Professional Coach — CPC)",
        "Zertifizierende Stelle: Certified Coaches Alliance (CCA) — CTA-CPC zertifiziert",
        "ICF-Zertifizierung (International Coaching Federation) in Vorbereitung",
        "Die Berufsbezeichnungen wurden in der Bundesrepublik Deutschland verliehen.",
      ],
    },
    trademark: {
      h: "Marken- und Designrechte",
      p1: "Die folgenden Bezeichnungen sind eingetragene oder beanspruchte Marken des Diensteanbieters:",
      p2: "Die Nutzung dieser Bezeichnungen durch Dritte – insbesondere im Zusammenhang mit Coaching-, Trainings- oder Beratungsleistungen – bedarf der ausdrücklichen schriftlichen Zustimmung der Inhaberin.",
    },
    trademarks: ["FramingFuture™", "SEVDA™ Flow", "CortexCraft™", "Yücel Coaching Lab™"],
    odr: {
      h: "EU-Streitschlichtung",
      pPre: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ",
      pPost: "Unsere E-Mail-Adresse findest du im obenstehenden Impressum.",
    },
    consumer: {
      h: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
      p: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    liabilityContent: {
      h: "Haftung für Inhalte",
      p1: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 Digitale-Dienste-Gesetz (DDG) für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      p2: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    },
    liabilityLinks: {
      h: "Haftung für Links",
      p1: "Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      p2: "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    },
    copyright: {
      h: "Urheberrecht",
      p1: "Die durch den Diensteanbieter erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
      p2: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    },
    imageCredits: {
      h: "Bildnachweise",
      p: "Alle auf dieser Website verwendeten Bilder und Grafiken stammen entweder aus eigenem Bestand, wurden vom Diensteanbieter beauftragt oder stammen aus lizenzfreien Quellen. Rechte Dritter bleiben unberührt.",
    },
  },

  tr: {
    eyebrow: "Yasal bilgiler",
    title: "Künye",
    intro:
      "Alman Dijital Hizmetler Yasası (DDG) § 5 ve Alman Eyaletlerarası Yayın Sözleşmesi (MStV) § 18 fıkra 2 uyarınca bilgiler. Durum: Haziran 2026.",
    provider: { h: "Hizmet sağlayıcı" },
    contact: { h: "İletişim", phoneLabel: "Telefon", emailLabel: "E-posta", webLabel: "Web" },
    responsibleContent: { h: "MStV § 18 fıkra 2 uyarınca içerikten sorumlu" },
    vat: {
      h: "KDV",
      p: "UStG § 19 uyarınca faturalarda KDV gösterilmez (küçük işletme düzenlemesi).",
    },
    jobTitle: {
      h: "Meslek unvanı & yeterlilik",
      lines: [
        "Meslek unvanı: Koç (Certified Professional Coach — CPC)",
        "Sertifika veren kurum: Certified Coaches Alliance (CCA) — CTA-CPC sertifikalı",
        "ICF sertifikası (International Coaching Federation) hazırlık aşamasında",
        "Meslek unvanları Almanya Federal Cumhuriyeti'nde verilmiştir.",
      ],
    },
    trademark: {
      h: "Marka ve tasarım hakları",
      p1: "Aşağıdaki adlandırmalar, hizmet sağlayıcının tescilli veya hak iddia edilen markalarıdır:",
      p2: "Bu adlandırmaların üçüncü taraflarca kullanımı — özellikle koçluk, eğitim veya danışmanlık hizmetleriyle bağlantılı olarak — sahibinin açık yazılı iznini gerektirir.",
    },
    trademarks: ["FramingFuture™", "SEVDA™ Flow", "CortexCraft™", "Yücel Coaching Lab™"],
    odr: {
      h: "AB uyuşmazlık çözümü",
      pPre: "Avrupa Komisyonu çevrimiçi uyuşmazlık çözümü (ODR) için bir platform sağlar: ",
      pPost: "E-posta adresimizi yukarıdaki yasal bildirimde bulabilirsiniz.",
    },
    consumer: {
      h: "Tüketici uyuşmazlık çözümü / genel tahkim kurulu",
      p: "Bir tüketici tahkim kurulu önünde uyuşmazlık çözümü süreçlerine katılmaya ne istekli ne de yükümlüyüz.",
    },
    liabilityContent: {
      h: "İçerik sorumluluğu",
      p1: "Hizmet sağlayıcı olarak, Alman Dijital Hizmetler Yasası (DDG) § 7 fıkra 1 uyarınca bu sayfalardaki kendi içeriğimizden sorumluyuz. Ancak DDG § 8 ila 10 uyarınca, hizmet sağlayıcı olarak iletilen veya saklanan üçüncü taraf bilgilerini izlemek ya da yasa dışı bir faaliyete işaret eden koşulları araştırmakla yükümlü değiliz.",
      p2: "Genel hukuk uyarınca bilgilerin kaldırılması veya kullanımının engellenmesine ilişkin yükümlülükler bundan etkilenmez. Ancak bu konudaki sorumluluk, ancak somut bir hukuk ihlalinin farkına vardığımız andan itibaren mümkündür. Bu tür hukuk ihlallerinden haberdar olduğumuzda, söz konusu içeriği derhal kaldıracağız.",
    },
    liabilityLinks: {
      h: "Bağlantı sorumluluğu",
      p1: "Web sitemiz, içeriği üzerinde hiçbir etkimizin olmadığı harici üçüncü taraf web sitelerine bağlantılar içerir. Bu nedenle bu harici içerikten sorumlu tutulamayız. Bağlantı verilen sayfaların içeriğinden her zaman ilgili sağlayıcı veya işletmeci sorumludur.",
      p2: "Bağlantı verilen sayfalar, bağlantıların oluşturulduğu sırada olası hukuk ihlalleri açısından kontrol edilmiştir. O sırada yasa dışı bir içerik tespit edilmemiştir. Ancak somut bir hukuk ihlali belirtisi olmadan bağlantı verilen sayfaların içeriğinin sürekli izlenmesi makul değildir. Hukuk ihlalleri bildirildiğinde, bu tür bağlantıları derhal kaldıracağız.",
    },
    copyright: {
      h: "Telif hakkı",
      p1: "Hizmet sağlayıcı tarafından bu sayfalarda oluşturulan içerik ve eserler Alman telif hakkı yasasına tabidir. Çoğaltma, işleme, dağıtma ve telif hakkı yasasının sınırlarının ötesindeki her türlü değerlendirme, ilgili yazarın veya yaratıcının yazılı iznini gerektirir. Bu sayfanın indirilmesine ve kopyalanmasına yalnızca özel, ticari olmayan kullanım için izin verilir.",
      p2: "Bu sitedeki içerik işletmeci tarafından oluşturulmadığında, üçüncü tarafların telif hakları gözetilir. Özellikle üçüncü taraf içeriği bu şekilde işaretlenir. Yine de bir telif hakkı ihlalini fark ederseniz, lütfen bizi bilgilendirin. Hukuk ihlalleri bildirildiğinde, bu tür içeriği derhal kaldıracağız.",
    },
    imageCredits: {
      h: "Görsel kaynakları",
      p: "Bu web sitesinde kullanılan tüm görseller ve grafikler ya kendi arşivimizden, ya hizmet sağlayıcı tarafından sipariş edilmiş ya da telifsiz kaynaklardandır. Üçüncü tarafların hakları saklıdır.",
    },
  },
};
