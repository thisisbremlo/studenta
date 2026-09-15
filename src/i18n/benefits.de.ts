import type { Locale } from "./locale";

/**
 * German translations for benefit content.
 * Falls back to the English source values in benefits.ts when no entry exists.
 */
export interface BenefitTranslation {
  name?: string;
  tagline?: string;
  description?: string;
  offer?: string;
  value?: string;
}

export const benefitTranslations: Record<Locale, Record<string, BenefitTranslation>> = {
  en: {},
  de: {
    github: {
      tagline: "Pro-Tools, gratis für Studierende",
      description:
        "Kostenloses GitHub Pro mit Copilot Pro, JetBrains-IDEs, gratis Domains, Cloud-Guthaben und über 100 Partner-Angeboten. Das wertvollste Studentenpaket für Entwickler:innen.",
      offer: "Kostenlos während des Studiums",
    },
    jetbrains: {
      tagline: "Alle JetBrains-IDEs, kostenlos",
      description:
        "IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm, CLion, Rider, GoLand, DataGrip und mehr — alles gratis mit der Studierenden-Lizenz. Jährlich zu erneuern.",
      offer: "Kostenlos während des Studiums",
    },
    copilot: {
      tagline: "KI-Pair-Programming",
      description:
        "KI-gestützte Codevervollständigung in VS Code, JetBrains und Neovim. Im GitHub Student Developer Pack ohne Aufpreis enthalten.",
      offer: "Kostenlos während des Studiums",
    },
    cursor: {
      tagline: "KI-first Code-Editor",
      description:
        "Der KI-Code-Editor auf VS-Code-Basis. Studierende bekommen ein Jahr Cursor Pro mit unbegrenzten Completions und Premium-Modell-Requests.",
      offer: "1 Jahr kostenlos",
    },
    perplexity: {
      tagline: "KI-Rechercheassistent, 50% günstiger",
      description:
        "KI-Antwort-Engine mit fortschrittlichen Modellen. Studierende und Lehrende bekommen 50% Rabatt auf den Pro-Tarif nach SheerID-Verifizierung — rund 9 $/Monat statt 20 $.",
      offer: "50% Rabatt (statt 20 $/Monat)",
      value: "11 $/Monat sparen",
    },
    microsoft365: {
      tagline: "Word, Excel, PowerPoint & 1 TB OneDrive",
      description:
        "Die komplette Office-Suite mit Word, Excel, PowerPoint, OneNote und Teams — plus 1 TB OneDrive-Cloudspeicher. Gratis mit gültiger Schul-E-Mail.",
      offer: "Kostenlos während des Studiums",
    },
    notion: {
      tagline: "Alle Plus-Features, kostenlos",
      description:
        "Unbegrenzte Blöcke, Datei-Uploads, Versionshistorie und erweiterte Zusammenarbeit. Mit der Hochschul-E-Mail registrieren und in den Abrechnungseinstellungen zum Education-Tarif wechseln.",
      offer: "Kostenlos während des Studiums",
    },
    figma: {
      tagline: "Professionelles Design, kostenlos",
      description:
        "Voller Figma-Professional-Tarif mit unbegrenzten Projekten, Editoren und FigJam-Whiteboards. Das Branchenstandard-Tool für UI/UX-Design.",
      offer: "Kostenlos während des Studiums",
    },
    adobe: {
      tagline: "Über 60% Rabatt auf die komplette Suite",
      description:
        "Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom und über 20 weitere Creative-Apps. Verifizierung über die .edu-E-Mail per SheerID.",
      offer: "Über 60% Rabatt",
    },
    canva: {
      tagline: "Pro-Design-Tools, kostenlos",
      description:
        "Canva Pro mit über 100 Millionen Fotos, Videos, Audio und Grafiken. Erstelle Präsentationen, Social-Media-Posts, Poster und mehr — gratis für Studierende und Lehrende.",
      offer: "Kostenlos während des Studiums",
    },
    autodesk: {
      tagline: "AutoCAD, Maya, Fusion 360 & mehr",
      description:
        "Kostenlose 1-Jahres-Bildungslizenzen für AutoCAD, Fusion 360, Maya, 3ds Max, Revit, Inventor und das komplette Autodesk-Portfolio. Ideal für Ingenieurwesen und 3D-Design.",
      offer: "Kostenlose 1-Jahres-Lizenz",
    },
    unity: {
      tagline: "Game-Engine, kostenlos",
      description:
        "Kostenloser Unity-Student-Tarif mit allen Kernfunktionen für Game Development und Real-Time-3D. Enthält dieselbe Engine wie im Profibereich, ohne Wasserzeichen.",
      offer: "Kostenlos während des Studiums",
    },
    spotify: {
      tagline: "Musik + TV im Bundle",
      description:
        "Werbefreies Spotify Premium plus Hulu (mit Werbung) zum vergünstigten Gesamtpreis. Erster Monat gratis, dann 6,99 $/Monat. Bis zu 4 Jahre nutzbar.",
      offer: "6,99 €/Monat (statt 24,98 €)",
      value: "17,99 €/Monat sparen",
    },
    applemusic: {
      tagline: "100 Mio. Songs + Apple TV+, gratis",
      description:
        "Werbefreies Apple Music mit Spatial Audio plus gratis Zugang zu Apple-TV+-Serien wie Severance und The Morning Show. 5,99 €/Monat für berechtigte Studierende.",
      offer: "5,99 €/Monat (statt 19,98 €)",
      value: "13,99 €/Monat sparen",
    },
    amazon: {
      tagline: "6 Monate gratis, dann 50% Rabatt",
      description:
        "Gratis-Lieferung, Prime Video, Prime Music und 5% Cashback. Sechs Monate kostenlos für Studierende, dann 7,49 $/Monat oder 69 $/Jahr — halber regulärer Preis.",
      offer: "6 Monate gratis, dann 7,49 €/Monat",
      value: "139 €/Jahr sparen",
    },
    youtube: {
      tagline: "YouTube ohne Werbung + Music",
      description:
        "Videos ohne Werbung, Hintergrundwiedergabe, Offline-Downloads und YouTube Music Premium inklusive. Studierendenstatus per SheerID verifizieren.",
      offer: "8,99 €/Monat (statt 13,99 €)",
      value: "5 €/Monat sparen",
    },
    peacock: {
      tagline: "NBC, Filme & Live-Sport",
      description:
        "NBC-Shows, Blockbuster, Premier League und Live-Sport im Stream. Studierende zahlen 2,99 $/Monat für Peacock Premium — 73% unter dem regulären Preis.",
      offer: "2,99 $/Monat (statt 10,99 $)",
      value: "8 $/Monat sparen",
    },
    paramount: {
      tagline: "50% auf alle Tarife",
      description:
        "Filme, Serien und Live-Sport von Paramount im Stream. Studierende bekommen 50% Rabatt auf jeden Tarif für die ersten 12 Monate — ab 4,50 $/Monat.",
      offer: "50% Rabatt (ab 4,50 $/Monat)",
      value: "50% sparen",
    },
    digitalocean: {
      tagline: "200 $ Cloud-Hosting-Guthaben",
      description:
        "Droplets hochfahren, Kubernetes verwalten und Apps deployen mit 200 $ DigitalOcean-Cloudguthaben. Im GitHub Student Developer Pack enthalten.",
      offer: "200 $ Gratis-Guthaben",
    },
    azure: {
      tagline: "100 $ Azure-Guthaben",
      description:
        "Apps auf Microsoft Azure bauen, deployen und verwalten mit 100 $ Gratis-Guthaben und Zugang zu Free-Tier-Diensten. Keine Kreditkarte nötig.",
      offer: "100 $ Gratis-Guthaben",
    },
    namecheap: {
      tagline: "Gratis-Domain + SSL für 1 Jahr",
      description:
        "Eine kostenlose .me-Domain für ein Jahr registrieren inklusive kostenlosem SSL-Zertifikat. Perfekt für die persönliche Portfolio-Seite. Über das GitHub Student Pack.",
      offer: "Kostenlose Domain für 1 Jahr",
    },
    namedotcom: {
      tagline: "Gratis-Domain aus über 25 Endungen",
      description:
        "Eine gratis Domain für ein Jahr von Name.com, wählbar aus über 25 Endungen. Baue deine persönliche Marke oder Projektseite. Über das GitHub Student Pack.",
      offer: "Kostenlose Domain für 1 Jahr",
    },
    heroku: {
      tagline: "Kostenloses App-Hosting",
      description:
        "Web-Apps mit Herokus gratis Dynos und einer kostenlosen Heroku-Postgres-Datenbank deployen. Ideal für Side-Projekte und Portfolios. Über das GitHub Student Pack.",
      offer: "Kostenloser Tarif",
    },
    frontendmasters: {
      tagline: "Expertenkurse, kostenlos",
      description:
        "Zugang zur kompletten Frontend-Masters-Bibliothek mit Expertenkursen zu JavaScript, React, CSS und mehr. Gratis-Abo über das GitHub Student Pack.",
      offer: "6-Monats-Abo gratis",
    },
    datacamp: {
      tagline: "Data-Science-Kurse, kostenlos",
      description:
        "Python, R, SQL und Machine Learning mit interaktiven Kursen und Projekten lernen. 3-Monats-Abo gratis über das GitHub Student Pack.",
      offer: "3-Monats-Abo gratis",
    },
    codecademy: {
      tagline: "35% Rabatt auf Pro",
      description:
        "Interaktive Programmierkurse in Python, JavaScript, Java, C++, SQL und mehr. 35% Rabatt auf das Pro-Abo mit Studierendenverifizierung.",
      offer: "35% Rabatt auf Pro",
      value: "~140 $/Jahr sparen",
    },
    nytimes: {
      tagline: "Digitaler Zugang für 1 $/Woche",
      description:
        "Unbegrenzter Zugang zu NYT-Artikeln, Cooking, Games und The Athletic. Spezieller Einführungstarif von 1 $/Woche für Studierende im ersten Jahr.",
      offer: "1 $/Woche für 1 Jahr",
      value: "Über 80% sparen",
    },
    grammarly: {
      tagline: "KI-Schreibassistent",
      description:
        "Grammatik-, Rechtschreib- und Stilvorschläge überall, wo du schreibst. Die Kernversion ist für Studierende gratis; Premium schaltet erweiterte Vorschläge frei.",
      offer: "Kostenlose Basisversion",
    },
    zotero: {
      tagline: "Literaturverwaltung, gratis für alle",
      description:
        "Quellen sammeln, organisieren, zitieren und teilen. Die Open-Source-Literaturverwaltung, die jede Thesis braucht — komplett kostenlos.",
      offer: "Kostenlos",
      value: "Gold wert für die thesis",
    },
    anki: {
      tagline: "Lernkarten mit Spaced Repetition",
      description:
        "Die Auswendig-Lern-Maschine, die Medizinstudierende weltweit nutzen. Desktop- und Android-Version sind gratis — nur die iOS-App kostet etwas.",
      offer: "Kostenlos (Desktop/Android)",
    },
    obsidian: {
      tagline: "Markdown-Notizen im Wissens-Graph",
      description:
        "Eine mächtige Notiz-App auf lokalen Markdown-Dateien. Privat kostenlos inklusive aller Core-Plugins; Sync und Publish sind kostenpflichtig.",
      offer: "Kostenlose Core-App",
    },
    appletvplus: {
      tagline: "Apple TV+ ohne Aufpreis dabei",
      description:
        "Mit dem Apple-Music-Studententarif ist Apple TV+ gratis dabei — Severance, Ted Lasso und mehr ohne Aufpreis.",
      offer: "Inklusive, kostenlos",
      value: "6,99 €/Monat gespart",
    },
    quizlet: {
      tagline: "Lernkarten & Studienmodi",
      description:
        "Lernkarten erstellen und mit Lern-, Test- und Spielmodi büffeln. Die Basisversion ist gratis; Plus schaltet erweiterte Erstellung und Offline-Zugang frei.",
      offer: "Kostenlose Basisversion",
    },
    studysmarter: {
      tagline: "Lern-App aus Deutschland",
      description:
        "Geteilte Lernkarten, Lerngruppen und Zusammenfassungen geräteübergreifend synchronisiert. Kostenlose Basisversion für Studierende, Vaia Plus ist der Bezahl-Tarif.",
      offer: "Kostenlose Basisversion",
    },
    khanacademy: {
      tagline: "Gratis-Kurse zu allem",
      description:
        "Weltklass-Unterricht in Mathe, Naturwissenschaften, Wirtschaft und mehr mit Übungsaufgaben und Lernfortschritt. Non-Profit und 100% kostenlos.",
      offer: "Kostenlos",
      value: "Für immer kostenlos",
    },
    duolingo: {
      tagline: "Sprachenlernen, spielerisch",
      description:
        "Über 40 Sprachen mit kurzen täglichen Lektionen lernen. Der Gratis-Tarif deckt alles ab; Super entfernt Werbung und gibt unbegrenzte Herzen.",
      offer: "Kostenlose Basisversion",
    },
    blinkist: {
      tagline: "Buchzusammenfassungen in 15 Minuten",
      description:
        "Kernerkenntnisse aus Tausenden Sachbüchern und Podcasts als 15-Minuten-Lesen oder Audio. Der Studentenrabatt macht daraus rund 6,67 €/Monat.",
      offer: "~55% Rabatt (6,67 €/Monat)",
      value: "8,32 €/Monat sparen",
    },
    coursera: {
      tagline: "Unikurse, kostenlos im Audit-Modus",
      description:
        "Kurse von Stanford, Google, IBM und Hunderten Universitäten. Fast jeden Kurs kostenlos belegen; Zertifikate und benotete Aufgaben brauchen Plus.",
      offer: "Kostenlos (Audit-Modus)",
    },
    edx: {
      tagline: "MIT- & Harvard-Kurse, gratis im Audit",
      description:
        "Kurse von MIT, Harvard und Top-Unis weltweit im Audit-Modus ohne Kosten — eine Goldgrube für Informatik- und Ingenieursstudierende.",
      offer: "Kostenlos (Audit-Modus)",
      value: "Kostenlos",
    },
    asos: {
      tagline: "10% auf alles",
      description:
        "10% Rabatt auf Mode-Bestellungen bei ASOS nach Studierendenverifizierung über UNiDAYS — stapelbar mit bestehenden Sale-Preisen.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    aboutyou: {
      tagline: "10% Rabatt auf Mode",
      description:
        "Verifizierte Studierende bekommen 10% Rabatt auf Bestellungen bei ABOUT YOU, einem der größten Online-Modehändler Europas.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    nike: {
      tagline: "20% auf Sneaker & Sportswear",
      description:
        "Einer der besten Mode-Studentenrabatte: 20% auf Nike.com nach Verifizierung über UNiDAYS oder SheerID.",
      offer: "20% Rabatt",
      value: "20% sparen",
    },
    adidas: {
      tagline: "15% auf Sportswear",
      description:
        "15% auf Vollpreis-Artikel auf adidas.com für verifizierte Studierende — oft kombinierbar mit laufenden Sales.",
      offer: "15% Rabatt",
      value: "15% sparen",
    },
    zalando: {
      tagline: "10% über UNiDAYS",
      description:
        "Europas größte Mode-Plattform gibt Studierenden 10% Rabatt über die UNiDAYS-Verifizierung — gilt in regelmäßigen Studenten-Aktionen.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    samsung: {
      tagline: "Bis zu 15% auf Handys & Laptops",
      description:
        "Studentenpreise für Galaxy-Smartphones, Tablets, Laptops und Monitore — bis zu 15% Rabatt plus zusätzliche Aktionen obendrauf.",
      offer: "Bis zu 15% Rabatt",
      value: "Bis zu 15% sparen",
    },
    hostelworld: {
      tagline: "10% auf Hostel-Buchungen",
      description:
        "10% auf Hostel-Aufenthalte weltweit für Studierende — perfekt für Semesterferien und Interrail-Trips mit kleinem Budget.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    flixtrain: {
      tagline: "15% auf Zugtickets",
      description:
        "Studierende sparen 15% auf FlixTrain-Fernverkehrstickets in ganz Deutschland — günstige Wochenendtrips nach Hause.",
      offer: "15% Rabatt",
      value: "15% sparen",
    },
    hotelscom: {
      tagline: "10% auf Hotelbuchungen",
      description:
        "10% auf ausgewählte Hotelbuchungen für verifizierte Studierende — buche Exkursions- und Urlaubsreisen günstiger.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    fluege: {
      tagline: "10 € Rabatt auf Flüge",
      description:
        "Einmalig 10 € Rabatt auf Flugbuchungen als Studierende:r — praktisch für Auslandssemester und Gap-Year-Reisen.",
      offer: "10 € Rabatt",
      value: "10 € sparen",
    },
    emirates: {
      tagline: "10% auf Langstreckenflüge",
      description:
        "Studierende fliegen 10% günstiger mit Emirates, inklusive Extra-Gepäck auf berechtigten Tarifen — ideal für Auslandssemester und Heimreise.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    lieferando: {
      tagline: "12–13 € Einmalrabatt",
      description:
        "Einmaliger Studierendenrabatt von 12–13 € auf deine Lieferando-Bestellung nach Verifizierung — ein Gratis-Essen auf Kosten des Anbieters.",
      offer: "12–13 € Rabatt (einmalig)",
      value: "~12 € sparen",
    },
    mcdonalds: {
      tagline: "10 € Rabatt auf Lieferung",
      description:
        "McDonald's über Lieferando als Studierende:r bestellen und einmalig 10 € Rabatt auf die Lieferung bekommen.",
      offer: "10 € Rabatt (einmalig)",
      value: "10 € sparen",
    },
    ing: {
      tagline: "Kostenloses Girokonto für Studierende",
      description:
        "Deutschlands beliebte Direktbank verzichtet für Studierende auf alle Kontoführungsgebühren — gratis Karte, gratis Zahlungen, kein Mindesteinkommen nötig.",
      offer: "Kostenlos während des Studiums",
      value: "4,90 €/Monat gespart",
    },
    sparkasse: {
      tagline: "Kostenloses Studienkonto in deiner Filiale",
      description:
        "Die meisten lokalen Sparkassen bieten Studierenden ein kostenloses Girokonto mit EC-Karte — praktisch, wenn du Bankgeschäfte vor Ort erledigen willst.",
      offer: "Kostenlos während des Studiums",
      value: "3–5 €/Monat gespart",
    },
    comdirect: {
      tagline: "Kostenloses Online-Girokonto",
      description:
        "Commerzbank-Direktbank-Marke gibt Studierenden ein kostenloses Girokonto inklusive Visa-Debitkarte.",
      offer: "Kostenlos während des Studiums",
      value: "4,90 €/Monat gespart",
    },
    sparda: {
      tagline: "Kostenloses Konto ohne Altersfallen",
      description:
        "Studierende banken bei der Sparda-Bank kostenlos — keine Kontoführungsgebühren während des Studiums, mit Debitkarte und Online-Banking.",
      offer: "Kostenlos während des Studiums",
      value: "3–5 €/Monat gespart",
    },
    bahncard: {
      tagline: "50% auf jede Zugfahrt",
      description:
        "Studierende zahlen nur rund 60 €/Jahr statt 127 € für die BahnCard 50 — halber Preis auf alle DB-Fahrten, hat sich nach wenigen Fahrten amortisiert.",
      offer: "~60 €/Jahr (statt 127 €)",
      value: "~53% sparen",
    },
    sixt: {
      tagline: "Sondertarife für Mietwagen",
      description:
        "Studierende bekommen Sondertarife bei Sixt-Mietwagen — nützlich für den Umzug oder Wochenendtrips, wenn die Bahn nicht reicht.",
      offer: "Sondertarif für Studierende",
      value: "Variabel sparen",
    },
    starcar: {
      tagline: "Günstige Mietwagen & Transporter",
      description:
        "Studenten-Sondertarife für Mietwagen und Transporter bei Starcar — die Budget-Option für den Umzugstag.",
      offer: "Sondertarif für Studierende",
      value: "Variabel sparen",
    },
    mendeley: {
      tagline: "Literaturverwaltung von Elsevier",
      description:
        "Kostenlose Literaturverwaltung und akademisches Netzwerk. PDFs organisieren, annotieren und Zitationen in Word oder LaTeX automatisch generieren.",
      offer: "Kostenlos",
    },
    citavi: {
      tagline: "Literatur- & Wissensmanagement",
      description:
        "Beliebte deutsche Literaturverwaltung für Literaturrecherche und Zitationen. An vielen Unis für Studierende über Campus-Lizenzen kostenlos.",
      offer: "Kostenlos (Campus-Lizenz)",
    },
    netflix: {
      tagline: "Streaming — ohne Studentenrabatt",
      description:
        "Der größte Streaming-Dienst hat keine Studierendenpreise. Steht hier, damit du es weißt: kein Rabatt zu erwarten — lieber einen Account teilen.",
      offer: "Kein Studentenrabatt",
      value: "Ab 7,99 €/Monat",
    },
    disneyplus: {
      tagline: "Streaming — ohne Studentenrabatt",
      description:
        "Disney, Marvel, Star Wars und Pixar — aber ohne Studierendenpreise in Deutschland. Bundle-Optionen mit anderen Diensten sparen oft mehr.",
      offer: "Kein Studentenrabatt",
      value: "Ab 8,99 €/Monat",
    },
    audible: {
      tagline: "50% auf Hörbücher",
      description:
        "Ein Hörbuch-Credit pro Monat plus exklusive Originale. Studierende zahlen 4,99 €/Monat statt 9,99 € — halber Preis während des Studiums.",
      offer: "4,99 €/Monat (statt 9,99 €)",
      value: "50% sparen",
    },
    skyticket: {
      tagline: "50% auf Sport & Serien",
      description:
        "Bundesliga, F1 und Sky-Originale live im Stream. Studierende zahlen 14,99 €/Monat statt 29,99 €.",
      offer: "14,99 €/Monat (statt 29,99 €)",
      value: "50% sparen",
    },
    jstor: {
      tagline: "Fachzeitschriften, kostenloser Tarif",
      description:
        "Registrierte Privatkonten können 10 Artikel pro 30 Tagen gratis aus JSTORs wissenschaftlichem Archiv lesen. Der Zugriff über deine Unibibliothek ist meist deutlich großzügiger — dort zuerst nachschauen.",
      offer: "10 Artikel/30 Tage gratis",
    },
    googleaiplus: {
      tagline: "Gemini Pro 1 Jahr kostenlos",
      description:
        "Google schenkt Studierenden ein Jahr AI-Plus-Abo: Gemini-Fortschrittsmodelle, NotebookLM Plus und 2 TB Speicher fürs Studium.",
      offer: "1-Jahres-Abo gratis",
    },
    isic: {
      tagline: "Der internationale Studentenausweis",
      description:
        "Der von der UNESCO anerkannte internationale Studierendenausweis schaltet Zehntausende Rabatte in über 130 Ländern frei.",
      offer: "15 €/Jahr",
      value: "Rabatte in über 130 Ländern",
    },
    appleedu: {
      tagline: "5–15% Rabatt + Geschenkkarte",
      description:
        "Studierende bekommen 5–9% auf Macs und iPads, in der Back-to-School-Aktion oft plus Geschenkkarte bis 120 € — direkt im Apple-Bildungsshop.",
      offer: "5–15% Rabatt",
      value: "Bis zu 120 € extra sparen",
    },
    ikea: {
      tagline: "15% Rabatt, saisonal",
      description:
        "In IKEAs saisonalen Back-to-College-Aktionen sparen Studierende 15% auf Einrichtung — perfekt fürs erste Wohnheim- oder WG-Zimmer.",
      offer: "15% Rabatt (saisonal)",
      value: "15% sparen",
    },
    home24: {
      tagline: "11% auf Möbel & Deko",
      description:
        "11% Studierendenrabatt auf Möbel, Lampen und Wohnaccessoires bei home24 — dein Lernzimmer für weniger.",
      offer: "11% Rabatt",
      value: "11% sparen",
    },
    emma: {
      tagline: "15% auf Matratzen",
      description:
        "15% auf Emma-Matratzen und Bettwaren für Studierende — denn guter Schlaf ist der günstigste Leistungsbooster.",
      offer: "15% Rabatt",
      value: "15% sparen",
    },
    studentuniverse: {
      tagline: "Bis zu 20% auf Flüge",
      description:
        "Flugbuchungen für verifizierte Studierende mit Tarifen bis zu 20% unter den regulären Preisen — speziell für studentisches Reisen gebaut.",
      offer: "Bis zu 20% Rabatt",
      value: "Bis zu 20% sparen",
    },
    foodora: {
      tagline: "5–10 € Rabatt auf Food-Lieferung",
      description:
        "Foodoras rosa Fahrerinnen und Fahrer liefern mit regelmäßigen Studierendenrabatten von 5–10 € auf deine Bestellung — noch ein Grund, das Kochen zu skippen.",
      offer: "5–10 € Rabatt",
      value: "5–10 € sparen",
    },
    dkb: {
      tagline: "Kostenloses Konto + Gratis-Karte weltweit",
      description:
        "Deutschlands größte Direktbank gibt Studierenden ein kostenloses Girokonto mit Visa-Debitkarte, die an Geldautomaten weltweit gratis nutzbar ist.",
      offer: "Kostenlos während des Studiums",
      value: "4,90 €/Monat gespart",
    },
    hanseatic: {
      tagline: "Kostenlose Studenten-Kreditkarte",
      description:
        "Studentenversionen von Kreditkarten wie der Hanseatic Bank erlassen die übliche Jahresgebühr von 20–40 € — Kreditgeschichte gratis aufbauen.",
      offer: "Keine Jahresgebühr",
      value: "20–40 €/Jahr gespart",
    },
    "kv-u25": {
      tagline: "Familienversicherung — 0 € pro Monat",
      description:
        "Wer unter 25 ist und studiert, ist über die Familienversicherung der gesetzlichen Krankenkassen wie TK, AOK oder Barmer kostenlos versichert.",
      offer: "Kostenlos (Familienversicherung)",
      value: "~140 €/Monat gespart",
    },
    "kv-25-30": {
      tagline: "Studententarif ~130–140 €/Monat",
      description:
        "Studierende über 25 zahlen den vergünstigten gesetzlichen Studententarif von rund 130–140 €/Monat statt des vollen freiwilligen Tarifs von ~230 €.",
      offer: "~130–140 €/Monat",
      value: "~40% sparen",
    },
    haftpflicht: {
      tagline: "Privathaftpflicht ab ~30 €/Jahr",
      description:
        "Die Privathaftpflicht ist die eine Versicherung, die jeder haben sollte. Junge/Studenten-Tarife von Versicherern wie HDI kosten etwa 30–35 €/Jahr.",
      offer: "~30–35 €/Jahr",
      value: "~30% sparen",
    },
    mcfit: {
      tagline: "~17% Rabatt auf die Mitgliedschaft",
      description:
        "Deutschlands größte Fitnessstudio-Kette bietet Studierende eine vergünstigte Mitgliedschaft von rund 24,99 €/Monat statt 29,99 € — über UNiDAYS.",
      offer: "~24,99 €/Monat",
      value: "~17% sparen",
    },
    allinclusive: {
      tagline: "40% Rabatt auf die Mitgliedschaft",
      description:
        "Multi-Studio-Zugang in ganz Deutschland zum Studentenpreis von rund 17,99 €/Monat statt 29,99 € — über UNiDAYS.",
      offer: "17,99 €/Monat (statt 29,99 €)",
      value: "40% sparen",
    },
    hochschulsport: {
      tagline: "Günstige Kurse von deiner Hochschule",
      description:
        "Yoga, Klettern, Fußball, Rudern — Hochschulsport-Programme kosten zwischen 0 und 30 € pro Semester, ein Bruchteil kommerzieller Studios.",
      offer: "0–30 €/Semester",
      value: "100% vs. Fitnessstudio sparen",
    },
    smb: {
      tagline: "50% auf die Berliner Museumsinsel",
      description:
        "Pergamon, Neues Museum, Alte Nationalgalerie — Studierende zahlen 7–8 € statt 14–16 € in den Berliner Staatlichen Museen.",
      offer: "7–8 € (statt 14–16 €)",
      value: "50% sparen",
    },
    philharmoniker: {
      tagline: "Standby-Tickets für 15 €",
      description:
        "Weltklasse-Orchester zum Budgetpreis: Standby-Tickets für Studierende kosten 15 € statt der üblichen 50–100 €. Die Schlange lohnt sich.",
      offer: "15 € Standby (statt 50–100 €)",
      value: "70–85% sparen",
    },
    deutschestheater: {
      tagline: "50% auf Theaterkarten",
      description:
        "Studierende sehen Premieren und Klassiker am Berliner Deutschen Theater für 10–15 € statt 20–40 €.",
      offer: "10–15 € (statt 20–40 €)",
      value: "50% sparen",
    },
    yorck: {
      tagline: "Kino Di/Mi günstiger",
      description:
        "Arthouse und Mainstream-Kino in den Yorck-Kinos und im Babylon Mitte: Studierendentickets 6–8 € dienstags und mittwochs statt 12–14 €.",
      offer: "6–8 € (statt 12–14 €)",
      value: "40–50% sparen",
    },
    zooberlin: {
      tagline: "Studenten-Tagesticket 13,50 €",
      description:
        "Deutschlands ältester und artenreichster Zoo bietet Studierende den Eintritt für 13,50 € statt 17 € — eine günstige Lernpause im Tiergarten.",
      offer: "13,50 € (statt 17 €)",
      value: "21% sparen",
    },
    surface: {
      tagline: "5–10% auf Surface-Geräte",
      description:
        "Surface-Laptops, -Tablets und -Zubehör zum Studentenpreis über Microsofts Education-Store — typischerweise 5–10% Rabatt.",
      offer: "5–10% Rabatt",
      value: "~10% sparen",
    },
    macbook: {
      tagline: "5–9% Rabatt + Geschenkkarte",
      description:
        "MacBook Air und Pro zum Bildungspreis, gelegentlich mit Geschenkkarten bis 120 € — das Standard-Setup für Design- und Informatik-Studierende.",
      offer: "5–9% Rabatt",
      value: "Bis zu 120 € extra sparen",
    },
    ipad: {
      tagline: "5–7% Rabatt + Geschenkkarte",
      description:
        "iPads zum Bildungspreis, in der Aktionssaison oft mit Geschenkkarten bis 80 € — ideal für handschriftliche Notizen mit dem Apple Pencil.",
      offer: "5–7% Rabatt",
      value: "Bis zu 80 € extra sparen",
    },
    applecare: {
      tagline: "10% auf Geräteschutz",
      description:
        "Verlängere den Schutz für deinen Mac oder iPad aus dem Education-Store mit 10% Rabatt auf AppleCare+ — günstige Versicherung für ein teures Gerät.",
      offer: "10% Rabatt",
      value: "10% sparen",
    },
    codex: {
      tagline: "2.500 extra Codex-Credits",
      description:
        "Eine einmalige Reserve von 2.500 Codex-Credits, die greift, nachdem dein reguläres Wochenkontingent aufgebraucht ist. Studierendenstatus verifizieren, dann im Codex-Student-Perks-Bereich beantragen.",
      offer: "Gratis-Credit-Aufladung",
    },
    kiro: {
      tagline: "Studentenprogramm für KI-Entwicklung",
      description:
        "Kiros Studentenprogramm für KI-gestützte Softwareentwicklung. Prüfe, ob deine Hochschule auf der Liste der berechtigten Institutionen steht.",
      offer: "Je nach Hochschule",
      value: "Je nach Programm",
    },
    runway: {
      tagline: "KI-Video- & Bildgenerierung, rabattiert",
      description:
        "Akademischer Rabatt auf Runways KI-Video- und Bildgenerierung-Tools für verifizierte Studierende und Lehrende — den Endpreis im Verifizierungs- bzw. Checkout-Prozess prüfen, da er je nach Region und Tarif variiert.",
      offer: "Akademischer Rabatt",
      value: "Je nach Tarif",
    },
  },
};
