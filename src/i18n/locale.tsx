import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "de";

const strings = {
  en: {
    heroBadge: "Updated 2026",
    heroTitle1: "Student benefits,",
    heroTitle2: "all in one place.",
    heroSubtitle: "Free and discounted tools you can claim with your student email.",
    searchPlaceholder: "Search offers...",
    filterLabel: "Filter by pricing",
    pricingAll: "All pricing",
    pricingFree: "Free",
    pricingFreemium: "Freemium",
    pricingPaid: "Paid",
    categoryAll: "All",
    noResults: "No offers found",
    noResultsHint: "Try a different search or filter.",
    footerNote: "Offers subject to change. Verify on the provider's website.",
    footerTagline: "Free and discounted student benefits — searchable and filterable, in English and German.",
    footerNavProjects: "Projects",
    footerNavLegal: "Legal",
    footerCopyright: "© {year} Benjamin Michael Bremer. All rights reserved.",
    topPick: "Top Pick",
    offers: "offers",
    statOffers: "Offers",
    statCategories: "Categories",
    statFree: "Free",
    statTopPicks: "Top Picks",
    statBrowse: "Browse offers",
    toggleTheme: "Toggle theme",
    macAppsBadge: "Mac Tips",
    macAppsTitle: "Essential Mac apps for students",
    macAppsSubtitle: "Hand-picked productivity, dev & design tools to supercharge your Mac.",
    macAppsCta: "Browse Mac apps",
    macAppsPageTitle: "Best Mac Apps for Students",
    macAppsPageSubtitle: "Hand-picked macOS apps for productivity, development, design and more — with the best free options first.",
    macAppsCategoryAll: "All apps",
    macAppsNoResults: "No apps found",
    macAppsNoResultsHint: "Try a different search or category.",
    macAppsNote: "Independent recommendations. No affiliation with the app developers.",
  },
  de: {
    heroBadge: "Stand 2026",
    heroTitle1: "Studenten-Vorteile,",
    heroTitle2: "alle an einem Ort.",
    heroSubtitle: "Gratis- und Rabatt-Tools, die du mit deiner Studien-E-Mail bekommst.",
    searchPlaceholder: "Angebote suchen...",
    filterLabel: "Nach Preis filtern",
    pricingAll: "Alle Preise",
    pricingFree: "Kostenlos",
    pricingFreemium: "Freemium",
    pricingPaid: "Kostenpflichtig",
    categoryAll: "Alle",
    noResults: "Keine Angebote gefunden",
    noResultsHint: "Versuche eine andere Suche oder einen anderen Filter.",
    footerNote: "Angebote können sich ändern. Bitte auf der Anbieter-Website prüfen.",
    footerTagline: "Gratis- und Rabatt-Angebote für Studierende — durchsuchbar und filterbar, auf Deutsch und Englisch.",
    footerNavProjects: "Projekte",
    footerNavLegal: "Rechtliches",
    footerCopyright: "© {year} Benjamin Michael Bremer. Alle Rechte vorbehalten.",
    topPick: "Top-Tipp",
    offers: "Angebote",
    statOffers: "Angebote",
    statCategories: "Kategorien",
    statFree: "Kostenlos",
    statTopPicks: "Top-Tipps",
    statBrowse: "Angebote ansehen",
    toggleTheme: "Design wechseln",
    macAppsBadge: "Mac-Tipps",
    macAppsTitle: "Essenzielle Mac-Apps für Studierende",
    macAppsSubtitle: "Handverlesene Produktivitäts-, Dev- & Design-Tools, die deinen Mac aufboosten.",
    macAppsCta: "Mac-Apps ansehen",
    macAppsPageTitle: "Die besten Mac-Apps für Studierende",
    macAppsPageSubtitle: "Handverlesene macOS-Apps für Produktivität, Entwicklung, Design und mehr — die besten Gratis-Optionen zuerst.",
    macAppsCategoryAll: "Alle Apps",
    macAppsNoResults: "Keine Apps gefunden",
    macAppsNoResultsHint: "Versuche eine andere Suche oder Kategorie.",
    macAppsNote: "Unabhängige Empfehlungen. Keine Verbindung zu den App-Entwicklern.",
  },
} as const;

export type StringKey = keyof (typeof strings)["en"];

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: StringKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "de") return stored;
  return navigator.language?.toLowerCase().startsWith("de") ? "de" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t = (key: StringKey) => strings[locale][key] ?? strings.en[key];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
