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
        "Der KI-Code-Editor auf VS-Code-Basis. Das alte Gratis-Angebot von einem Jahr Pro für neue Registrierungen wurde am 25. Juni 2026 eingestellt — der kostenlose Hobby-Plan bleibt, bereits eingelöste Angebote laufen bis zum Ablauf weiter.",
      offer: "Hobby gratis (Pro-Angebot eingestellt)",
      value: "20 $/Monat (Pro)",
    },
    gemini: {
      tagline: "KI-Assistent mit Gratis-Tarif",
      description:
        "Googles KI-Assistent — der Gratis-Tarif deckt den alltäglichen Studiengebrauch ab. Studentenpreise und Verfügbarkeit variieren je nach Land und Hochschule; aktuelle Berechtigung im Google-Konto prüfen.",
      offer: "Gratis-Tarif (Studenten-Angebote variieren)",
      value: "20 $/Monat (Pro)",
    },
    mongodb: {
      tagline: "50 $ Atlas-Guthaben + Gratis-Zertifizierung",
      description:
        "NoSQL-Dokumentendatenbank. Verifizierte Studierende erhalten 50 $ Atlas-Guthaben, MongoDB Compass und die Gratis-Zertifizierung der MongoDB University — rund 200 $ Gesamtwert über das GitHub Student Pack.",
      offer: "50 $ Guthaben + Gratis-Zertifizierung",
      value: "ca. 200 $ Wert",
    },
    awseducate: {
      tagline: "AWS-Labs und Guthaben zum Lernen",
      description:
        "Gratis-Lerninhalte, Labs und AWS-Guthaben bzw. Free-Tier-Zugang je nach Berechtigung. Kein unbegrenztes kostenloses AWS — über das enthaltene Guthaben hinaus können Kosten entstehen.",
      offer: "Gratis-Lernen + AWS-Guthaben",
      value: "Je nach Programm",
    },
    gcpedu: {
      tagline: "Studenten-Guthaben für Google Cloud",
      description:
        "Google-Cloud-Bildungsprogramme stellen Studierendenguthaben bereit, z. B. Google-Skills-Guthaben, das nach einem Jahr abläuft. Höhe und Laufzeit variieren je nach Programm und Region.",
      offer: "Studenten-Guthaben (variabel)",
      value: "Je nach Programm",
    },
    oraclecloud: {
      tagline: "Immer-kostenlose Cloud-Ressourcen",
      description:
        "Der Free Tier von Oracle Cloud enthält dauerhaft kostenlose Ressourcen: zwei AMD-VMs, Arm-Instanzen mit bis zu 4 OCPUs und 24 GB RAM, dazu Datenbanken und Storage innerhalb der Limits.",
      offer: "Always-Free-Tier",
      value: "0 $ mit Limits",
    },
    postman: {
      tagline: "API-Plattform + Gratis-Zertifizierung",
      description:
        "Die branchenübliche API-Plattform zum Bauen, Testen und Dokumentieren von APIs. Das Student-Expert-Programm und die Zertifizierung sind kostenlos, wo angeboten.",
      offer: "Gratis-Programm + Zertifizierung",
      value: "0 $",
    },
    paypalsandbox: {
      tagline: "Kostenlose Zahlungs-Testumgebung",
      description:
        "Checkout- und Zahlungsflüsse in PayPals Sandbox mit fiktiven Konten und Spielgeld testen — Sandbox-Geld ist nicht echt, und die Entwicklerumgebung ist kostenlos.",
      offer: "Sandbox gratis",
      value: "0 $",
    },
    redhatdev: {
      tagline: "Gratis-RHEL-Entwickler-Abo",
      description:
        "Kostenloses Einzelentwickler-Abo inklusive Red Hat Enterprise Linux mit Entwickler-Tooling und Updates — für alle Entwickler kostenlos, nicht nur für Studierende.",
      offer: "Kostenlos für Einzelpersonen",
      value: "0 $",
    },
    inteldevzone: {
      tagline: "Gratis-Entwicklerressourcen von Intel",
      description:
        "Zugang zu Intels Entwickler-Tools, SDKs und Lernressourcen — kostenlos. Manche Tools oder Support können separate Lizenzbedingungen haben.",
      offer: "Kostenlose Ressourcen",
      value: "0 $",
    },
    interviewbit: {
      tagline: "Strukturierte Interview-Vorbereitung, gratis",
      description:
        "Strukturierte Vorbereitung auf Programmier-Interviews mit zeitlich getakteten Übungsstrecken zu Datenstrukturen, Algorithmen und Systemdesign. Übungsinhalte gratis; Premium-Features kostenpflichtig.",
      offer: "Übungsinhalte gratis",
      value: "Kostenlos",
    },
    hackerrank: {
      tagline: "Gratis-Skill-Zertifizierungen",
      description:
        "Kostenlose Skill-Verifizierungen für Python, SQL, React, Problem Solving und mehr — ein schneller Eintrag für Lebenslauf und LinkedIn. Nicht alle Vorbereitungsinhalte sind gratis.",
      offer: "Zertifizierungen gratis",
      value: "0 $",
    },
    kaggle: {
      tagline: "Gratis-Notebooks, GPU & Datensätze",
      description:
        "Kostenlose Browser-Notebooks mit begrenzter GPU-/TPU-Rechenleistung, über 100.000 öffentliche Datensätze und Wettbewerbe — der Standard-Spielplatz für Data-Science-Studierende. Nutzungsquoten gelten.",
      offer: "Kostenlos (mit Quoten)",
      value: "0 $",
    },
    gdsc: {
      tagline: "Gratis-Community-Events & Workshops",
      description:
        "Googles Campus-Communities veranstalten kostenlose Events, Workshops und Study Jams zu Cloud, KI und Android — gelegentlich mit Sponsor-Guthaben. Vorteile variieren je nach Club und Event.",
      offer: "Mitgliedschaft gratis",
      value: "0 $",
    },
    mslearn: {
      tagline: "Kostenlose Microsoft-Lernpfade",
      description:
        "Kostenlose interaktive Lernpfade und Challenges für Azure, .NET, KI und mehr — inklusive studierendenspezifischer Challenges und ausgewählter Gratis-Zertifizierungsangebote.",
      offer: "Kostenlos",
      value: "0 $",
    },
    ibmskillsbuild: {
      tagline: "Kostenlose Kurse mit Zertifikaten",
      description:
        "Kostenlose Lernressourcen und digitale Zertifikate zu KI, Cybersecurity, Daten und Nachhaltigkeit. Kursverfügbarkeit variiert je nach Region.",
      offer: "Kostenlos",
      value: "0 $",
    },
    udemyfree: {
      tagline: "Hunderte kostenlose Kurse",
      description:
        "Der Gratis-Kursbereich von Udemy bietet hunderte vollständige Kurse zu Programmierung, Design und Business — kostenlos von den Dozent:innen veröffentlicht. Nicht alle Udemy-Kurse sind gratis.",
      offer: "Kostenlose Kurse",
      value: "0 $",
    },
    mlh: {
      tagline: "Hackathons mit Guthaben & Swag",
      description:
        "Die offizielle Studenten-Hackathon-Liga: kostenlose Events mit Sponsor-Cloud-Guthaben, Swag und Preisen. Verfügbarkeit variiert je nach Event und Sponsor.",
      offer: "Teilnahme gratis",
      value: "Je nach Event",
    },
    unidays: {
      tagline: "Gratis-Studenten-Rabattportal",
      description:
        "Kostenlose Mitgliedschaft mit Markenrabatten in Mode, Tech, Food und Fitness — Nike, adidas, ASOS, McFit und viele mehr. Rabatte variieren je nach Marke und Land.",
      offer: "Mitgliedschaft gratis",
      value: "Rabatte bei 100+ Marken",
    },
    studentbeans: {
      tagline: "Gratis-Studenten-Rabattportal",
      description:
        "Kostenlose Studenten-Mitgliedschaft mit Rabattcodes bei hunderten Marken — eine Alternative zu UNiDAYS mit teils anderer Partnerliste. Rabatte variieren je nach Marke und Land.",
      offer: "Mitgliedschaft gratis",
      value: "Rabatte bei 100+ Marken",
    },
    blender: {
      tagline: "Open-Source-3D-Suite",
      description:
        "Die freie Open-Source-3D-Suite für Modeling, Sculpting, Animation, Rendering und VFX — keine Studenten-Verifizierung nötig, sie ist für alle kostenlos.",
      offer: "Kostenlos (Open Source)",
      value: "0 $",
    },
    miro: {
      tagline: "Kollaboratives Whiteboard, gratis",
      description:
        "Das unendliche kollaborative Whiteboard für Brainstorming, Diagramme und Gruppenarbeit. Der Education-Plan ist für berechtigte Studierende und Lehrende gratis; Verifizierung kann erneuert werden.",
      offer: "Kostenlos während des Studiums",
      value: "8 $/Monat",
    },
    loom: {
      tagline: "Asynchrone Video-Nachrichten, gratis",
      description:
        "Schnelle Bildschirm- und Kameravideos aufnehmen, um Code zu erklären, Feedback zu geben oder Projekte asynchron zu präsentieren. Der Education-Plan ist für Berechtigte gratis.",
      offer: "Kostenlos während des Studiums",
      value: "15 $/Monat",
    },
    clickup: {
      tagline: "Alles-in-einem für Aufgaben & Projekte",
      description:
        "Aufgaben, Docs, Ziele und Whiteboards in einem Workspace. Studierende, Lehrende und Hochschulen bekommen Rabatte auf Bezahlpläne — aktuelle Berechtigung und Konditionen prüfen.",
      offer: "Education-Rabatt",
      value: "Bei Unlimited/Business sparen",
    },
    airtable: {
      tagline: "Team-Plan bis 24 Monate gratis",
      description:
        "Tabellen-Datenbank-Hybrid zum Organisieren von allem. Qualifizierte Studierende bekommen 6–24 Monate kostenlosen Team-Plan-Zugang je voraussichtlichem Abschlussdatum.",
      offer: "6–24 Monate gratis",
      value: "20 $/Nutzer/Monat",
    },
    sketch: {
      tagline: "Mac-natives UI-Design, ca. 50% günstiger",
      description:
        "Mac-natives UI-Design-Tool mit Vektorbearbeitung und Prototyping. Education-Preise liegen für Berechtigte bei etwa der Hälfte — historisch rund 50% Rabatt statt gratis.",
      offer: "ca. 50% Rabatt",
      value: "ca. 50% sparen",
    },
    hackthebox: {
      tagline: "Praxisnahe Hacking-Labs, Studenten-Plan",
      description:
        "Praxisnahe Cybersecurity-Labs und geführte Module vom Einstieg bis zum Zertifizierungsniveau. Verifizierte Studierende zahlen 8 $/Monat für das Academy-Abo.",
      offer: "8 $/Monat Studenten-Plan",
      value: "Günstiger als Standard-Tarife",
    },
    tryhackme: {
      tagline: "Geführte Hacking-Labs, Studentenrabatt",
      description:
        "Anfängerfreundliche, geführte Cybersecurity-Labs mit Lernpfaden vom ersten Scan bis zum Red Team. Verifizierte Studierende bekommen Rabatt auf Premium-Abos.",
      offer: "Studentenrabatt",
      value: "Günstiger als Premium",
    },
    courserafinancialaid: {
      tagline: "Kurse gratis über Finanzzuschuss",
      description:
        "Courseras Finanzzuschuss kann einen einzelnen Kurs — inklusive bewertetem Zertifikat — kostenlos machen. Anträge werden pro Kurs geprüft und dauern rund zwei Wochen.",
      offer: "Kostenlos (Antrag pro Kurs)",
      value: "49–99 $/Kurs sparen",
    },
    studentsid: {
      tagline: "Studententarife bei Airlines",
      description:
        "Studententarife und Rabatte auf Flüge variieren je nach Airline und Buchungsplattform — viele Airlines bieten sie an, aber es gibt kein einziges offizielles globales Programm. Tarifpolitik je Airline prüfen.",
      offer: "Je nach Airline",
      value: "Je Airline prüfen",
    },
    opensourcedevcert: {
      tagline: "Kostenlose TLS-Zertifikate für alle",
      description:
        "Kostenlose, automatisierte TLS-Zertifikate für jede Website — der Standard für HTTPS in Studierendenprojekten und Portfolios. Zusätzlich zu Namecheaps gratis SSL im ersten Jahr über das GitHub Student Pack.",
      offer: "Kostenlos",
      value: "0 $",
    },
    blenderswap: {
      tagline: "Kostenlose CC-3D-Modelle für Projekte",
      description:
        "Sketchfab hostet tausende kostenlose 3D-Modelle unter Creative-Commons-Lizenz für Blender, Unity und Game-Projekte — praktische Assets für Design- und Game-Dev-Kurse.",
      offer: "Kostenlose CC-Modelle",
      value: "0 $",
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
    gitkraken: {
      tagline: "Git-GUI mit Merge-Conflict-Editor",
      description:
        "Visueller Git-Client mit intuitiver Oberfläche und mächtigem Merge-Conflict-Editor. Studierende erhalten 6 Monate gratis über das GitHub Student Pack, danach 80 % Rabatt.",
      offer: "6 Monate gratis, dann 80 % Rabatt",
      value: "48 $/Jahr gespart",
    },
    termius: {
      tagline: "SSH-Client für Desktop und Mobilgeräte",
      description:
        "Moderner SSH-Client mit Synchronisierung zwischen Desktop und Mobilgeräten. Das Studentenprogramm schaltet die Pro-Features während des Studiums frei.",
      offer: "Gratis bzw. Pro-Features für Studierende",
      value: "10 $/Monat",
    },
    bootstrapstudio: {
      tagline: "Responsive Websites mit Bootstrap",
      description:
        "Desktop-App zum Erstellen responsiver Websites mit dem Bootstrap-Framework — Drag-and-Drop-Komponenten und sauberer Code-Export. Gratis für Studierende über das GitHub Student Pack.",
      offer: "Gratis-Lizenz",
      value: "29 $ einmalig",
    },
    browserstack: {
      tagline: "Tests auf echten Browsern und Geräten",
      description:
        "Cross-Browser-Testing auf über 3.000 echten Geräten und Browsern in der Cloud. Ein Jahr gratis für Studierende über das GitHub Student Pack.",
      offer: "1 Jahr gratis",
      value: "1.500 $/Jahr",
    },
    localstack: {
      tagline: "Lokaler AWS-Emulator",
      description:
        "AWS-Services lokal für Entwicklung und Testing ausführen — ohne die echte Cloud anzufassen. Studierende erhalten eine Gratis-Lizenz über das GitHub Student Pack.",
      offer: "Gratis-Lizenz",
      value: "Je nach Tarif",
    },
    polypane: {
      tagline: "Browser für responsive Webentwicklung",
      description:
        "Ein für Entwickler gebauter Browser, der deine Website in mehreren Viewports gleichzeitig rendert — mit Accessibility- und Debugging-Tools. Ein Jahr gratis für Studierende.",
      offer: "1 Jahr gratis",
      value: "20 $/Monat",
    },
    travisci: {
      tagline: "Continuous Integration",
      description:
        "CI-Service, der deinen Code bei jedem Push automatisch baut und testet. Studierende erhalten gratis Private Builds über das GitHub Student Pack.",
      offer: "Gratis Private Builds",
      value: "69 $/Monat",
    },
    requestly: {
      tagline: "HTTP-Requests abfangen und mocken",
      description:
        "Netzwerk-Requests im Browser debuggen, verändern und mocken. Studierende erhalten ein Jahr Professional gratis über das GitHub Student Pack.",
      offer: "1 Jahr Professional gratis",
      value: "270 $/Jahr",
    },
    doppler: {
      tagline: "Secrets-Management",
      description:
        "Zentrale, sichere Verwaltung für Umgebungsvariablen und API-Secrets mit Synchronisation in deinen Stack. Der Team-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Team-Plan gratis",
      value: "8 $/Nutzer/Monat",
    },
    configcat: {
      tagline: "Feature-Flag-Service",
      description:
        "Features sicher ausrollen mit Feature Flags, A/B-Tests und Targeting-Regeln. Studierende erhalten 1.000 gratis Feature Flags über das GitHub Student Pack.",
      offer: "1.000 Feature Flags gratis",
      value: "99 $/Monat",
    },
    devcycle: {
      tagline: "Feature-Flag-Plattform",
      description:
        "Open-Source-Plattform für Feature Management — hinter Flags ausliefern und jederzeit zurückrollen. Ein Jahr Starter-Plan gratis für Studierende.",
      offer: "1 Jahr Starter gratis",
      value: "150+ $/Jahr",
    },
    workingcopy: {
      tagline: "Git-Client für iOS und iPadOS",
      description:
        "Vollwertiger Git-Client für iPhone und iPad mit Klonen, Bearbeiten, Committen und Pushen — sogar vom iPad aus. Das Pro-Upgrade ist für Studierende gratis.",
      offer: "Pro gratis",
      value: "24,99 $ einmalig",
    },
    tower: {
      tagline: "Git-Client für macOS und Windows",
      description:
        "Mächtiger, polierter Git-Desktop-Client mit Drag-and-Drop-Aktionen, Conflict-Wizards und Partial Commits. Pro ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Pro gratis",
      value: "99 $/Jahr",
    },
    sqlgate: {
      tagline: "SQL-IDE für viele Datenbanken",
      description:
        "Leichtgewichtige Datenbank-IDE für Oracle, MySQL, PostgreSQL, MariaDB, SQL Server und mehr. Ein Jahr gratis für Studierende.",
      offer: "1 Jahr gratis",
      value: "119 $/Jahr",
    },
    popsql: {
      tagline: "Kollaborativer SQL-Editor",
      description:
        "Moderner SQL-Editor mit geteilten Queries, Dashboards und Echtzeit-Kollaboration. Der Premium-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Premium gratis",
      value: "40 $/Nutzer/Monat",
    },
    vaadin: {
      tagline: "Java-Web-Framework",
      description:
        "Full-Stack-Java-Framework mit reichhaltiger Auswahl an Pro-UI-Komponenten und Tools. Der Pro-Zugang ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Pro-Zugang gratis",
      value: "1.400 $/Jahr",
    },
    xojo: {
      tagline: "Cross-Platform-Entwicklung",
      description:
        "Native Apps für Desktop, Web, iOS und Android mit einer Sprache bauen. Die Pro-Lizenz ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Pro-Lizenz gratis",
      value: "299 $/Jahr",
    },
    blockchair: {
      tagline: "Blockchain-Daten und APIs",
      description:
        "Blockchain-Explorer und API-Plattform mit über 40 Chains. Studierende erhalten 100.000 gratis API-Requests über das GitHub Student Pack.",
      offer: "100k API-Requests gratis",
      value: "99 $/Monat",
    },
    scrimba: {
      tagline: "Interaktive Coding-Kurse",
      description:
        "JavaScript, React und Python mit interaktiven Screencasts lernen, die sich live bearbeiten lassen. Ein Monat Pro gratis für Studierende über das GitHub Student Pack.",
      offer: "1 Monat Pro gratis",
      value: "20 $",
    },
    educative: {
      tagline: "Interaktive Programmier- und ML-Kurse",
      description:
        "Textbasierte interaktive Kurse zu Programmierung, Systemdesign und Machine Learning. Studierende erhalten 6 Monate gratis plus 30 % Rabatt über das GitHub Student Pack.",
      offer: "6 Monate gratis + 30 % Rabatt",
      value: "120 $",
    },
    symfonycasts: {
      tagline: "Symfony- und PHP-Kurse",
      description:
        "Ausführliche Videotutorials und Kurse zu Symfony, PHP und JavaScript. Drei Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "3 Monate gratis",
      value: "75 $",
    },
    gorails: {
      tagline: "Ruby-, Rails- und JavaScript-Tutorials",
      description:
        "Videotutorials zu Ruby on Rails, Ruby und JavaScript für praxisnahe Webentwicklung. 12 Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "12 Monate gratis",
      value: "228 $/Jahr",
    },
    bootdev: {
      tagline: "Backend-, DevOps- und Datenkurse",
      description:
        "Projektbasierte Kurse zu Backend-Entwicklung, DevOps und Datenanalyse. Drei Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "3 Monate gratis",
      value: "120 $",
    },
    codedex: {
      tagline: "Python-, Web- und React-Kurse",
      description:
        "Gamifizierte, interaktive Coding-Kurse für Einsteiger:innen. Sechs Monate des Club-Plans sind für Studierende gratis über das GitHub Student Pack.",
      offer: "6 Monate Club gratis",
      value: "48 $",
    },
    khanmigo: {
      tagline: "KI-Tutor für Lerninhalte",
      description:
        "Khan Academys KI-Tutor, der Schritt für Schritt durch Aufgaben führt statt nur Lösungen zu geben. Für Lehrkräfte gratis; Studierende zahlen eine kleine monatliche Gebühr.",
      offer: "Gratis für Lehrkräfte / ca. 4 $/Monat für Studierende",
      value: "4 $/Monat",
    },
    socratic: {
      tagline: "Aufgaben per Foto erklären lassen",
      description:
        "Googles Lern-App erklärt Hausaufgaben Schritt für Schritt — einfach das Problem fotografieren. Komplett kostenlos.",
      offer: "Kostenlos",
      value: "0 $",
    },
    notebooklm: {
      tagline: "KI mit Bezug zu eigenen Quellen",
      description:
        "Googles Recherche-Assistent analysiert deine eigenen Dokumente und antwortet mit Quellenangaben — ideal für Literaturrecherche und Prüfungsvorbereitung. Kostenlos.",
      offer: "Kostenlos",
      value: "0 $",
    },
    elicit: {
      tagline: "Literatur- und Paper-Recherche mit KI",
      description:
        "KI-Recherche-Assistent, der wissenschaftliche Paper findet, zusammenfasst und Kernerkenntnisse extrahiert. Gratis-Tarif mit Limits für Studierende.",
      offer: "Gratis mit Limits",
      value: "0 $",
    },
    andisearch: {
      tagline: "KI-Suche mit Quellen",
      description:
        "Werbefreie KI-Suchmaschine, die Fragen mit belegten Quellen beantwortet statt einer Linkliste. Kostenlos.",
      offer: "Kostenlos",
      value: "0 $",
    },
    chatgptplus: {
      tagline: "Fortgeschrittener KI-Assistent",
      description:
        "OpenAIs Assistent mit den neuesten Modellen, Bildgenerierung und Dateianalyse. Zeitweise Studenten-Aktionen mit Gratis-Zugang — aktuelle Konditionen prüfen.",
      offer: "Zeitweise Promo, ggf. gratis",
      value: "20 $/Monat",
    },
    claudefree: {
      tagline: "Erklärungen, Projekte und KI-Chat",
      description:
        "Anthropics KI-Assistent mit großzügiger Gratis-Nutzung — ideal für Erklärungen, Zusammenfassungen und die Arbeit mit eigenen Dokumenten und Projekten.",
      offer: "Kostenlos",
      value: "0 $",
    },
    geminiadvanced: {
      tagline: "KI-Assistant, Dokumentanalyse und Speicher-Bundle",
      description:
        "Googles stärkste KI-Modelle plus 2 TB Speicher im One-AI-Premium-Bundle. 12 Monate gratis für Studierende, regional begrenzt — Verfügbarkeit prüfen.",
      offer: "12 Monate gratis (regional begrenzt)",
      value: "20 $/Monat",
    },
    "1password": {
      tagline: "Passwort-Manager",
      description:
        "Einer der besten Passwort-Manager für Logins, Passkeys und Dokumente. Ein Jahr gratis für Studierende über das GitHub Student Pack.",
      offer: "1 Jahr gratis",
      value: "36 $/Jahr",
    },
    bitwarden: {
      tagline: "Passwort-Manager mit Synchronisierung",
      description:
        "Open-Source-Passwort-Manager mit kostenloser Synchronisierung über alle Geräte — die solide Gratis-Alternative zur Verwaltung aller Studenten-Accounts.",
      offer: "Kostenlos",
      value: "10 $/Jahr",
    },
    dashlane: {
      tagline: "Passwort-Manager",
      description:
        "Passwort-Manager mit VPN und Dark-Web-Überwachung. Studierende erhalten 6 Monate Premium gratis über das GitHub Student Pack.",
      offer: "6 Monate Premium gratis",
      value: "40 $",
    },
    astra: {
      tagline: "Website-Firewall und Malware-Scanner",
      description:
        "Security-Suite für Websites: Firewall, Malware-Scanner und Pentest. Sechs Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "6 Monate gratis",
      value: "33 $/Monat",
    },
    newrelic: {
      tagline: "Observability und Performance-Monitoring",
      description:
        "Full-Stack-Observability: Server, Apps und Infrastruktur auf einer Plattform überwachen. Der Gratis-Student-Account enthält ein großzügiges monatliches Datenkontingent.",
      offer: "Gratis-Account",
      value: "Im Wert von 300 $/Monat",
    },
    datadog: {
      tagline: "Monitoring für Server und Anwendungen",
      description:
        "Cloud-Scale-Monitoring und Observability für Infrastruktur, Logs und Traces. Studierende erhalten den Pro-Account 2 Jahre gratis über das GitHub Student Pack.",
      offer: "Pro gratis für 2 Jahre",
      value: "300 $/Monat",
    },
    honeybadger: {
      tagline: "Exception- und Uptime-Monitoring",
      description:
        "Error-Tracking und Uptime-Monitoring mit Fokus auf Developer Experience. Der Small-Plan ist für Studierende ein Jahr gratis.",
      offer: "Small-Plan gratis (1 Jahr)",
      value: "299 $/Jahr",
    },
    blackfire: {
      tagline: "Code-Performance-Analyse",
      description:
        "Profiling und Performance-Monitoring für PHP-, Python- und Go-Anwendungen. Der Developer-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Developer-Plan gratis",
      value: "109 $/Jahr",
    },
    sentry: {
      tagline: "Error-Tracking",
      description:
        "Exceptions und Performance-Probleme im gesamten Stack in Echtzeit nachverfolgen. Studierende erhalten den Team-Plan ein Jahr gratis über das GitHub Student Pack.",
      offer: "Team-Features gratis (1 Jahr)",
      value: "26 $/Monat",
    },
    deepnote: {
      tagline: "Kollaborative Data-Science-Notebooks",
      description:
        "Echtzeit-kollaborative Notebooks für Data Science, kompatibel mit Jupyter. Der Team-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Team-Plan gratis",
      value: "40 $/Nutzer/Monat",
    },
    camber: {
      tagline: "KI-gestützte Data-Science-Ressourcen",
      description:
        "Cloud-Compute-Ressourcen für Data-Science-Workloads mit KI-Unterstützung. Der Student-Plan ist gratis über das GitHub Student Pack.",
      offer: "Student-Plan gratis",
      value: "40 $/Monat",
    },
    appwrite: {
      tagline: "Backend-Infrastruktur für Apps",
      description:
        "Open-Source-Backend-as-a-Service: Auth, Datenbanken, Storage und Functions. Der Education-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Education-Plan gratis",
      value: "40 $/Monat",
    },
    gettech: {
      tagline: "Gratis .TECH-Domain für ein Jahr",
      description:
        "Eine gratis .TECH-Domain für ein Jahr registrieren — perfekt für Tech-Projekte und Portfolios. Über das GitHub Student Pack.",
      offer: "1 Jahr .TECH-Domain gratis",
      value: "50 $/Jahr",
    },
    githubpages: {
      tagline: "Statisches Hosting aus GitHub-Repos",
      description:
      "Statische Websites direkt aus einem GitHub-Repository hosten — kostenlos und mit Custom-Domain-Support. Der einfachste Weg, ein Portfolio online zu stellen.",
      offer: "Kostenlos",
      value: "0 $",
    },
    pageclip: {
      tagline: "Backend für Formulare statischer Websites",
      description:
        "Formular-Eingaben von statischen Websites sammeln, ganz ohne eigenen Server-Code. Der Basic-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Basic-Plan gratis",
      value: "8 $/Monat",
    },
    pomodone: {
      tagline: "Pomodoro-Timer und Task-Integration",
      description:
        "Pomodoro-Timer, der sich mit deinen bestehenden Task-Tools (Todoist, Trello u. a.) integriert. Zwei Jahre Lite-Plan gratis für Studierende.",
      offer: "2 Jahre Lite gratis",
      value: "58 $",
    },
    hazeover: {
      tagline: "Fokus-App für macOS",
      description:
        "Dimmt Hintergrundfenster, damit du dich auf das eine Fenster konzentrieren kannst — ideal für tiefe Lernphasen. Gratis-Lizenz für Studierende.",
      offer: "Gratis-Lizenz",
      value: "4,99 $ einmalig",
    },
    todiagram: {
      tagline: "JSON, YAML und CSV in Diagramme umwandeln",
      description:
        "JSON, YAML, CSV und mehr als interaktive Diagramme visualisieren und bearbeiten. Der Pro-Plan ist für Studierende gratis über das GitHub Student Pack.",
      offer: "Pro gratis",
      value: "10 $/Monat",
    },
    poeditor: {
      tagline: "Übersetzungs- und Lokalisierungsmanagement",
      description:
        "Übersetzungen und Lokalisierungsdateien für Apps und Websites im Team verwalten. Ein Jahr Plus-Plan gratis für Studierende.",
      offer: "1 Jahr Plus gratis",
      value: "174 $/Jahr",
    },
    themeisle: {
      tagline: "WordPress-Themes",
      description:
        "Premium-WordPress-Themes und -Plugins (Neve, Hestia u. a.). Ein Jahr gratis für Studierende über das GitHub Student Pack.",
      offer: "1 Jahr gratis",
      value: "99 $/Jahr",
    },
    icons8: {
      tagline: "Icons, Fotos und Illustrationen",
      description:
        "Riesige Bibliothek aus Icons, Fotos und Illustrationen in konsistenten Stilen. Drei Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "3 Monate gratis",
      value: "30 $",
    },
    iconscout: {
      tagline: "Icons, 3D-Assets und Animationen",
      description:
        "Millionen Icons, Illustrationen, 3D-Assets und Lottie-Animationen. 60 Premium-Icons pro Monat ein Jahr lang gratis für Studierende.",
      offer: "60 Premium-Icons/Monat (1 Jahr)",
      value: "120 $/Jahr",
    },
    visme: {
      tagline: "Präsentationen und Visual Documents",
      description:
        "Design-Tool für Präsentationen, Infografiken und Reports mit Vorlagen und Charts. Drei Monate gratis für Studierende über das GitHub Student Pack.",
      offer: "3 Monate gratis",
      value: "59 $",
    },
    simpleanalytics: {
      tagline: "Datenschutzfreundliche Web-Analytics",
      description:
        "DSGVO-freundliche Analytics ohne Cookies und ohne Cross-Site-Tracking. Ein Jahr Starter-Plan gratis für Studierende.",
      offer: "1 Jahr Starter gratis",
      value: "228 $/Jahr",
    },
    appfigures: {
      tagline: "App-Store-Analytics",
      description:
        "Downloads, Umsätze und Rankings für Apps über alle Stores in einem Dashboard verfolgen. Ein Jahr gratis für Studierende über das GitHub Student Pack.",
      offer: "1 Jahr gratis",
      value: "120 $/Jahr",
    },
  },
};
