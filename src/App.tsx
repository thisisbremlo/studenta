import { useState, useMemo } from "react";
import {
  Search,
  Code2,
  Apple,
  ArrowRight,
  ArrowDown,
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
  Lock,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Filter,
  ChevronDown,
  Check,
} from "lucide-react";
import { benefits, categories, type Category, type Benefit, type Pricing } from "@/data/benefits";
import { useLocale, type Locale, type StringKey } from "@/i18n/locale";
import { benefitTranslations, type BenefitTranslation } from "@/i18n/benefits.de";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Sparkles,
  Lock,
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

/** Official Apple logo mark (from Apple's font — the Unicode  glyph, rendered as a path). */
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 814 1000" className={className} aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

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
      className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-foreground/20 hover:bg-accent"
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

      <div className="flex items-end justify-between gap-3 border-t border-border pt-3">
        <span className="text-sm font-semibold leading-snug text-foreground">{b.offer}</span>
        <span className="shrink-0 whitespace-nowrap text-right text-xs leading-snug text-muted-foreground">{b.value}</span>
      </div>
    </a>
  );
}

function App() {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [activePricing, setActivePricing] = useState<Pricing | "all">("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

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
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
        <Reveal delay={0} variant="down" className="mb-5 flex items-center justify-center">
          <a
            href="/mac-apps"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-ring/50 hover:text-foreground"
          >
            <AppleLogo className="h-3 w-3 fill-current" />
            {t("macAppsTitle")}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
        <Reveal delay={80}>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t("heroTitle1")}
          <br />
          <span className="text-muted-foreground">{t("heroTitle2")}</span>
        </h1>
        </Reveal>
        <Reveal delay={160}>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          {t("heroSubtitle")}
        </p>
        </Reveal>

        {/* Search + category + pricing filter */}
        <Reveal delay={240} className="relative mx-auto mt-6 flex max-w-md items-center gap-2">
          {/* Category dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen((o) => !o)}
              aria-expanded={categoryOpen}
              className={`inline-flex h-10 items-center gap-1.5 rounded-md border px-3 text-sm font-medium transition-all ${
                activeCategory !== "all"
                  ? "border-primary/50 bg-primary text-primary-foreground"
                  : "border-input bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {(() => {
                const activeCat = categories.find((c) => c.id === activeCategory);
                const Icon = activeCat ? iconMap[activeCat.icon] : LayoutGrid;
                return (
                  <>
                    <Icon className="h-3.5 w-3.5" />
                    <span className="max-w-24 truncate">
                      {activeCat ? (locale === "de" ? activeCat.labelDe : activeCat.label) : t("categoryAll")}
                    </span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
                  </>
                );
              })()}
            </button>

            {categoryOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCategoryOpen(false)}
                  aria-hidden="true"
                />
                <div className="no-scrollbar absolute left-0 top-full z-50 mt-2 max-h-72 w-48 overflow-y-auto rounded-md border border-border bg-card py-1 shadow-lg">
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setCategoryOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-sm transition-colors ${
                      activeCategory === "all"
                        ? "bg-accent font-medium text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <LayoutGrid className="h-3 w-3" />
                      {t("categoryAll")}
                    </span>
                    {activeCategory === "all" && <Check className="h-3.5 w-3.5" />}
                  </button>
                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon];
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setCategoryOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-sm transition-colors ${
                          isActive
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-3 w-3" />
                          {locale === "de" ? cat.labelDe : cat.label}
                        </span>
                        {isActive && <Check className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Search + pricing filter */}
          <div className="relative flex-1">
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
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={320} className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border text-left sm:grid-cols-5">
          {[
            { label: t("statOffers"), value: String(benefits.length) },
            { label: t("statCategories"), value: String(categories.length) },
            { label: t("statFree"), value: String(benefits.filter((b) => b.pricing === "free").length) },
            { label: t("statTopPicks"), value: String(benefits.filter((b) => b.featured).length) },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-3">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
              <div className="mt-0.5 text-sm font-bold text-foreground">{stat.value}</div>
            </div>
          ))}
          <a
            href="#offers"
            aria-label={t("statBrowse")}
            className="flex items-center justify-center bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </section>

      {/* Grid */}
      <section id="offers" className="mx-auto max-w-5xl scroll-mt-6 px-6 py-8">
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => {
              // Stagger by grid column (0-2) so each visible row reveals
              // left-to-right together instead of sequentially by index.
              const cols = 3;
              const col = i % cols;
              return (
                <Reveal key={b.id} delay={col * 90} variant="up">
                  <BenefitCardView benefit={b} locale={locale} />
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="mb-3 h-6 w-6 text-muted-foreground/40" />
            <p className="text-sm font-medium text-foreground">{t("noResults")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("noResultsHint")}</p>
          </div>
        )}
      </section>

      {/* Mac apps hint section */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <Reveal variant="scale">
        <a
          href="/mac-apps"
          className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <AppleLogo className="h-6 w-6 fill-current" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-foreground transition-colors group-hover:text-primary">
              {t("macAppsTitle")}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("macAppsSubtitle")}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            {t("macAppsCta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

export default App;
