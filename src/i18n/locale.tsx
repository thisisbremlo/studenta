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
    footerCopyright: "© {year} Benjamin Michael Bremer. All rights reserved.",
    topPick: "Top Pick",
    offers: "offers",
    toggleTheme: "Toggle theme",
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
    footerCopyright: "© {year} Benjamin Michael Bremer. Alle Rechte vorbehalten.",
    topPick: "Top-Tipp",
    offers: "Angebote",
    toggleTheme: "Design wechseln",
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
