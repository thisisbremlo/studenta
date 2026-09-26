export type MacAppCategory = "productivity" | "development" | "design" | "utilities" | "writing";

export interface MacApp {
  id: string;
  name: string;
  category: MacAppCategory;
  price: string;
  priceDe: string;
  url: string;
  description: string;
  descriptionDe: string;
  featured?: boolean;
  /** ISO date (yyyy-mm-dd) when this entry was last added or updated. */
  updated: string;
}

export const macAppCategories: { id: MacAppCategory; label: string; labelDe: string; icon: string }[] = [
  { id: "productivity", label: "Productivity", labelDe: "Produktivität", icon: "Zap" },
  { id: "development", label: "Development", labelDe: "Entwicklung", icon: "Code2" },
  { id: "design", label: "Design", labelDe: "Design", icon: "PenTool" },
  { id: "writing", label: "Writing & Notes", labelDe: "Schreiben & Notizen", icon: "NotebookPen" },
  { id: "utilities", label: "Utilities", labelDe: "Werkzeuge", icon: "Wrench" },
];

export const macApps: MacApp[] = [
  // ── Productivity ──────────────────────────────────────────────
  {
    id: "raycast",
    name: "Raycast",
    category: "productivity",
    price: "Free · Pro $8/mo",
    priceDe: "Gratis · Pro 8 $/Monat",
    url: "https://raycast.com",
    description:
      "Spotlight on steroids: launch apps, manage snippets, control windows, and extend with hundreds of extensions. The free tier covers almost everything a student needs.",
    descriptionDe:
      "Spotlight auf Steroiden: Apps starten, Snippets verwalten, Fenster steuern und mit hunderten Erweiterungen ausbauen. Die Gratis-Version deckt fast alles ab, was Studierende brauchen.",
    featured: true,
    updated: "2026-09-01",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    category: "productivity",
    price: "Free",
    priceDe: "Gratis",
    url: "https://rectangleapp.com",
    description:
      "Window management with keyboard shortcuts and snap zones. Free and open source — the essential utility for taming windows on a small laptop screen.",
    descriptionDe:
      "Fensterverwaltung mit Tastenkürzeln und Snap-Zonen. Kostenlos und Open Source — das unverzichtbare Werkzeug, um Fenster auf kleinen Laptop-Bildschirmen zu bändigen.",
    updated: "2026-08-14",
  },
  {
    id: "alt-tab",
    name: "AltTab",
    category: "productivity",
    price: "Free (pay what you want)",
    priceDe: "Gratis (Zahl nach eigenem Ermessen)",
    url: "https://alt-tab-macos.netlify.app",
    description:
      "Brings Windows-style app previews to Cmd+Tab — see window thumbnails instead of just icons. Open source and hugely popular.",
    descriptionDe:
      "Bringt Windows-artige App-Vorschauen in Cmd+Tab — Fenster-Thumbnails statt nur Icons. Open Source und enorm beliebt.",
    updated: "2026-06-20",
  },
  {
    id: "linear",
    name: "Linear",
    category: "productivity",
    price: "Free for students",
    priceDe: "Gratis für Studierende",
    url: "https://linear.app/students",
    description:
      "The fastest issue tracker for software teams. Linear's student plan is free with a verified academic email — great for group projects.",
    descriptionDe:
      "Der schnellste Issue-Tracker für Software-Teams. Der Studentenplan ist mit verifizierter Hochschul-E-Mail gratis — ideal für Gruppenprojekte.",
    updated: "2026-05-30",
  },
  {
    id: "cron",
    name: "Notion Calendar",
    category: "productivity",
    price: "Free",
    priceDe: "Gratis",
    url: "https://calendar.notion.so",
    description:
      "Beautiful calendar app (formerly Cron) with tight Notion integration, scheduling links, and multiple account support. Free.",
    descriptionDe:
      "Ansehnliche Kalender-App (ehemals Cron) mit enger Notion-Integration, Termin-Buchungslinks und Multi-Account-Support. Kostenlos.",
    updated: "2026-07-12",
  },

  // ── Development ───────────────────────────────────────────────
  {
    id: "iterm2",
    name: "iTerm2",
    category: "development",
    price: "Free",
    priceDe: "Gratis",
    url: "https://iterm2.com",
    description:
      "The classic macOS terminal replacement: split panes, search, autocomplete, profiles, and hotkey windows. Free and open source.",
    descriptionDe:
      "Der klassische macOS-Terminal-Ersatz: geteilte Panes, Suche, Autovervollständigung, Profile und Hotkey-Fenster. Kostenlos und Open Source.",
    updated: "2026-04-18",
  },
  {
    id: "warp",
    name: "Warp",
    category: "development",
    price: "Free · Pro $15/mo",
    priceDe: "Gratis · Pro 15 $/Monat",
    url: "https://warp.dev",
    description:
      "A modern, Rust-based terminal with AI command suggestions, blocks-based output, and workflows. The free tier is generous for students.",
    descriptionDe:
      "Ein moderner, Rust-basierter Terminal mit KI-Befehlsvorschlägen, blockbasiertem Output und Workflows. Die Gratis-Version ist für Studierende großzügig.",
    updated: "2026-08-25",
  },
  {
    id: "orbstack",
    name: "OrbStack",
    category: "development",
    price: "Free for personal use",
    priceDe: "Gratis für private Nutzung",
    url: "https://orbstack.dev",
    description:
      "Docker Desktop alternative that is dramatically faster and lighter on battery. Free for personal use — perfect for coursework with containers.",
    descriptionDe:
      "Docker-Desktop-Alternative, die deutlich schneller ist und den Akku schont. Gratis für private Nutzung — perfekt für Kursarbeit mit Containern.",
    updated: "2026-07-02",
  },
  {
    id: "proxyman",
    name: "Proxyman",
    category: "development",
    price: "Free tier · License $59",
    priceDe: "Gratis-Version · Lizenz 59 $",
    url: "https://proxyman.io",
    description:
      "Native HTTPS debugging proxy for macOS. Inspect requests from apps, browsers, and simulators. The free tier covers basic debugging.",
    descriptionDe:
      "Nativer HTTPS-Debugging-Proxy für macOS. Requests aus Apps, Browsern und Simulatoren inspizieren. Die Gratis-Version deckt grundlegendes Debugging ab.",
    updated: "2026-03-22",
  },
  {
    id: "devutils",
    name: "DevUtils",
    category: "development",
    price: "$39 one-time",
    priceDe: "39 $ einmalig",
    url: "https://devutils.com",
    description:
      "All-in-one developer toolbox: JSON formatter, JWT decoder, timestamp converter, and 40+ offline tools in one native app.",
    descriptionDe:
      "Alles-in-einem Entwickler-Werkzeugkasten: JSON-Formatter, JWT-Decoder, Timestamp-Konverter und über 40 Offline-Tools in einer nativen App.",
    updated: "2026-02-10",
  },

  // ── Design ────────────────────────────────────────────────────
  {
    id: "sketch",
    name: "Sketch",
    category: "design",
    price: "Free for students",
    priceDe: "Gratis für Studierende",
    url: "https://sketch.com/education",
    description:
      "Mac-native UI design tool. Students and educators get the full app free for a year with an academic email.",
    descriptionDe:
      "Mac-natives UI-Design-Tool. Studierende und Lehrende erhalten die vollständige App ein Jahr gratis mit Hochschul-E-Mail.",
    updated: "2026-05-05",
  },
  {
    id: "pixelsnap",
    name: "CleanShot X",
    category: "design",
    price: "$29 one-time (Setapp)",
    priceDe: "29 $ einmalig (Setapp)",
    url: "https://cleanshot.com",
    description:
      "The best screenshot and screen-recording tool for Mac: scrolling captures, annotations, instant editing, and cloud uploads.",
    descriptionDe:
      "Das beste Screenshot- und Screen-Recording-Tool für den Mac: Scroll-Captures, Annotationen, Sofort-Bearbeitung und Cloud-Uploads.",
    updated: "2026-08-08",
  },
  {
    id: "sip",
    name: "Sip",
    category: "design",
    price: "Free tier · Pro $10",
    priceDe: "Gratis-Version · Pro 10 $",
    url: "https://sipapp.io",
    description:
      "Color picker for the menu bar with format switching (HEX, RGB, Swift, CSS) and full-screen magnifier. Great for front-end work.",
    descriptionDe:
      "Farbwähler für die Menüleiste mit Formatwechsel (HEX, RGB, Swift, CSS) und Vollbild-Lupe. Ideal für Frontend-Arbeit.",
    updated: "2026-01-15",
  },

  // ── Writing & Notes ───────────────────────────────────────────
  {
    id: "obsidian-mac",
    name: "Obsidian",
    category: "writing",
    price: "Free",
    priceDe: "Gratis",
    url: "https://obsidian.md",
    description:
      "Local-first Markdown notes with graph views and thousands of community plugins. Free for personal use — your notes stay in plain text on your Mac.",
    descriptionDe:
      "Local-first Markdown-Notizen mit Graph-Ansicht und tausenden Community-Plugins. Privat kostenlos — deine Notizen bleiben als Klartext auf deinem Mac.",
    updated: "2026-07-28",
  },
  {
    id: "typora",
    name: "Typora",
    category: "writing",
    price: "$14.99 one-time",
    priceDe: "14,99 $ einmalig",
    url: "https://typora.io",
    description:
      "Distraction-free Markdown editor with live rendering — what you type is what you see. Great for essays, READMEs, and thesis drafts.",
    descriptionDe:
      "Ablenkungsfreier Markdown-Editor mit Live-Rendering — was du tippst, siehst du. Ideal für Essays, READMEs und Abschlussarbeiten.",
    updated: "2026-03-03",
  },
  {
    id: "craft",
    name: "Craft",
    category: "writing",
    price: "Free · Plus $10/mo",
    priceDe: "Gratis · Plus 10 $/Monat",
    url: "https://craft.do",
    description:
      "Beautifully designed docs and notes with native Mac and iOS apps. The free tier is very generous and includes daily notes and sharing.",
    descriptionDe:
      "Ansehnlich gestaltete Dokumente und Notizen mit nativen Mac- und iOS-Apps. Die Gratis-Version ist sehr großzügig und enthält Tagesnotizen und Teilen.",
    updated: "2026-06-15",
  },
  {
    id: "ia-writer",
    name: "iA Writer",
    category: "writing",
    price: "$49.99 one-time",
    priceDe: "49,99 $ einmalig",
    url: "https://ia.net/writer",
    description:
      "Minimal Markdown writing app with focus mode, style checks, and cross-device sync. A favorite for distraction-free long-form writing.",
    descriptionDe:
      "Minimaler Markdown-Schreib-App mit Fokusmodus, Stilprüfungen und geräteübergreifender Synchronisierung. Favorit für ablenkungsfreies Langschreiben.",
    updated: "2026-04-25",
  },

  // ── Utilities ─────────────────────────────────────────────────
  {
    id: "maccy",
    name: "Maccy",
    category: "utilities",
    price: "Free (pay what you want)",
    priceDe: "Gratis (Zahl nach eigenem Ermessen)",
    url: "https://maccy.app",
    description:
      "Lightweight clipboard manager with search and pinned items. Open source — pairs perfectly with Raycast.",
    descriptionDe:
      "Leichter Clipboard-Manager mit Suche und angepinnten Einträgen. Open Source — ergänzt Raycast perfekt.",
    updated: "2026-05-12",
  },
  {
    id: "amethyst",
    name: "Amethyst",
    category: "utilities",
    price: "Free",
    priceDe: "Gratis",
    url: "https://ianyh.com/amethyst",
    description:
      "Automatic tiling window manager — windows snap into layouts without any dragging. Free and open source.",
    descriptionDe:
      "Automatischer Tiling-Fenstermanager — Fenster rasten ohne Ziehen in Layouts ein. Kostenlos und Open Source.",
    updated: "2026-02-20",
  },
  {
    id: "istat",
    name: "iStat Menus",
    category: "utilities",
    price: "$11 (Setapp)",
    priceDe: "11 $ (Setapp)",
    url: "https://bjango.com/mac/istatmenus",
    description:
      "System monitoring in the menu bar: CPU, memory, disk, network, temperatures, and battery health at a glance.",
    descriptionDe:
      "Systemüberwachung in der Menüleiste: CPU, RAM, Festplatte, Netzwerk, Temperaturen und Akkuzustand auf einen Blick.",
    updated: "2026-01-30",
  },
  {
    id: "kickstart",
    name: "AppCleaner",
    category: "utilities",
    price: "Free",
    priceDe: "Gratis",
    url: "https://freemacsoft.net/appcleaner",
    description:
      "Uninstall apps properly by finding all their leftover files and preferences. Free and tiny — a Mac essential.",
    descriptionDe:
      "Apps sauber deinstallieren, indem alle übrig gebliebenen Dateien und Einstellungen gefunden werden. Kostenlos und winzig — ein Mac-Must-Have.",
    updated: "2026-08-02",
  },
  {
    id: "muzzle",
    name: "Muzzle",
    category: "utilities",
    price: "Free",
    priceDe: "Gratis",
    url: "https://muzzleapp.com",
    description:
      "Silences embarrassing notifications while screen sharing — essential for presentations and remote study groups.",
    descriptionDe:
      "Unterdrückt peinliche Benachrichtigungen beim Bildschirmteilen — unverzichtbar für Präsentationen und Remote-Lerngruppen.",
    updated: "2026-09-10",
  },
];
