import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Code2,
  LayoutGrid,
  PenTool,
  Headphones,
  Cloud,
  GraduationCap,
  ShoppingBag,
  Plane,
  UtensilsCrossed,
  Landmark,
  TrainFront,
  ShieldCheck,
  Dumbbell,
  Theater,
  Laptop,
  ExternalLink,
  Sparkles,
  Moon,
  Sun,
  ArrowUpRight,
  Filter,
  ChevronDown,
  Check,
} from "lucide-react";
import { benefits, categories, type Category, type Benefit, type Pricing } from "@/data/benefits";
import { useLocale, type Locale, type StringKey } from "@/i18n/locale";
import { benefitTranslations, type BenefitTranslation } from "@/i18n/benefits.de";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  LayoutGrid,
  PenTool,
  Headphones,
  Cloud,
  GraduationCap,
  ShoppingBag,
  Plane,
  UtensilsCrossed,
  Landmark,
  TrainFront,
  ShieldCheck,
  Dumbbell,
  Theater,
  Laptop,
};

const pricingLabels: Record<Pricing, string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

const pricingFilters: (Pricing | "all")[] = ["all", "free", "freemium", "paid"];

function faviconUrl(url: string) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  } catch {
    return null;
  }
}

function localizedBenefit(benefit: Benefit, locale: Locale): Benefit & BenefitTranslation {
  const tr = benefitTranslations[locale]?.[benefit.id];
  return { ...benefit, ...tr };
}

function BenefitCardView({ benefit, locale }: { benefit: Benefit; locale: Locale }) {
  const b = localizedBenefit(benefit, locale);
  const { t } = useLocale();
  const catLabel =
    categories.find((c) => c.id === b.category)?.[locale === "de" ? "labelDe" : "label"] ?? b.category;
  const favicon = faviconUrl(b.url);
  return (
    <a
      href={benefit.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-foreground/20 hover:bg-accent"
    >
      {b.featured && (
        <span className="absolute -top-2 left-5 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
          <Sparkles className="h-2.5 w-2.5" /> {t("topPick")}
        </span>
      )}

      <div className="mb-3 flex items-start justify-between">
        <span className="text-xs font-medium text-muted-foreground capitalize">{catLabel}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground" />
      </div>

      <div className="mb-3 flex items-center gap-3">
        {favicon && (
          <img
            src={favicon}
            alt=""
            loading="lazy"
            className="h-8 w-8 rounded-md grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
          />
        )}
        <h3 className="text-base font-semibold leading-tight text-card-foreground">{b.name}</h3>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm font-semibold text-foreground">{b.offer}</span>
        <span className="text-xs text-muted-foreground">{b.value}</span>
      </div>
    </a>
  );
}

function App() {
  const { locale, setLocale, t } = useLocale();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [activePricing, setActivePricing] = useState<Pricing | "all">("all");
  const [dark, setDark] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const filtered = useMemo(() => {
    return benefits.filter((b) => {
      const matchesCategory = activeCategory === "all" || b.category === activeCategory;
      const matchesPricing = activePricing === "all" || b.pricing === activePricing;
      const q = query.toLowerCase().trim();
      if (!matchesCategory || !matchesPricing) return false;
      if (q === "") return true;
      const lb = localizedBenefit(b, locale);
      return (
        lb.name.toLowerCase().includes(q) ||
        lb.description.toLowerCase().includes(q) ||
        lb.offer.toLowerCase().includes(q) ||
        lb.tagline.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory, activePricing, locale]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="studenta.bremlo.uk logo" className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-tight">studenta.bremlo.uk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex overflow-hidden rounded-md border border-border" role="group" aria-label="Language">
              {(["en", "de"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2 py-1 text-xs font-semibold uppercase transition-colors ${
                    locale === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors hover:bg-accent"
              aria-label={t("toggleTheme")}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          {benefits.length} {t("offers")} · {t("heroBadge")}
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t("heroTitle1")}
          <br />
          <span className="text-muted-foreground">{t("heroTitle2")}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          {t("heroSubtitle")}
        </p>

        {/* Search + pricing filter */}
        <div className="relative mx-auto mt-6 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-md border border-input bg-secondary py-2.5 pl-10 pr-11 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          <button
            onClick={() => setFilterOpen((o) => !o)}
            aria-label={t("filterLabel")}
            aria-expanded={filterOpen}
            className={`absolute right-1.5 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md transition-all ${
              activePricing !== "all"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <Filter className="h-3.5 w-3.5" />
          </button>

          {filterOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setFilterOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">
                {pricingFilters.map((p) => {
                  const isActive = activePricing === p;
                  return (
                    <button
                      key={p}
                      onClick={() => {
                        setActivePricing(p);
                        setFilterOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {p === "all" ? <></> : <Filter className="h-3 w-3" />}
                        {p === "all" ? t("pricingAll") : t(`pricing${p[0].toUpperCase()}${p.slice(1)}` as StringKey)}
                      </span>
                      {isActive && <Check className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("categoryAll")}
          </button>
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {locale === "de" ? cat.labelDe : cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <BenefitCardView key={b.id} benefit={b} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="mb-3 h-6 w-6 text-muted-foreground/40" />
            <p className="text-sm font-medium text-foreground">{t("noResults")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("noResultsHint")}</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl space-y-3 px-6 py-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <a
              href="https://bremlo.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <img
                src="https://www.google.com/s2/favicons?domain=bremlo.uk&sz=64"
                alt=""
                loading="lazy"
                className="h-4 w-4 rounded grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
              />
              bremlo.uk
            </a>
            <a
              href="https://savault.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <img
                src="https://www.google.com/s2/favicons?domain=savault.de&sz=64"
                alt=""
                loading="lazy"
                className="h-4 w-4 rounded grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
              />
              savault.de
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            <a
              href="/legal-notice"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale === "de" ? "Impressum" : "Legal Notice"}
            </a>
            <span aria-hidden="true" className="text-muted-foreground/40">·</span>
            <a
              href="/privacy-policy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale === "de" ? "Datenschutz" : "Privacy"}
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            {t("footerCopyright").replace("{year}", String(new Date().getFullYear()))}
          </p>
          <p className="text-xs text-muted-foreground/70">{t("footerNote")}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
