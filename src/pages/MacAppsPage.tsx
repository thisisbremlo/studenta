import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Zap,
  Code2,
  PenTool,
  NotebookPen,
  Wrench,
  Apple,
  ExternalLink,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import {
  macApps,
  macAppCategories,
  type MacApp,
  type MacAppCategory,
} from "@/data/macapps";
import { useLocale } from "@/i18n/locale";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Code2,
  PenTool,
  NotebookPen,
  Wrench,
};

export function MacAppsPage() {
  const { locale, t } = useLocale();
  const de = locale === "de";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MacAppCategory | null>(null);

  useEffect(() => {
    document.title = de
      ? "Die besten Mac-Apps für Studierende — studenta.bremlo.uk"
      : "Best Mac Apps for Students — studenta.bremlo.uk";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        de
          ? "Handverlesene macOS-Apps für Produktivität, Entwicklung, Design und Studium — die besten Gratis-Tools zuerst."
          : "Hand-picked macOS apps for productivity, development, design and studying — the best free tools first."
      );
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", "https://studenta.bremlo.uk/mac-apps");
  }, [de]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return macApps.filter((app) => {
      if (category && app.category !== category) return false;
      if (!q) return true;
      const hay = [
        app.name,
        de ? app.descriptionDe : app.description,
        app.category,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, category, de]);

  const sorted = useMemo(() => {
    const apps = [...filtered];
    // Sort: free first, then featured, then alphabetical
    apps.sort((a, b) => {
      const aPrice = de ? a.priceDe : a.price;
      const bPrice = de ? b.priceDe : b.price;
      const aFree = /gratis|free/i.test(aPrice) ? 0 : 1;
      const bFree = /gratis|free/i.test(bPrice) ? 0 : 1;
      if (aFree !== bFree) return aFree - bFree;
      if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
      return a.name.localeCompare(b.name);
    });
    return apps;
  }, [filtered, de]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Back + hero */}
        <Reveal variant="right" className="mb-8 inline-block">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          studenta.bremlo.uk
        </a>
        </Reveal>

        <div className="mb-10 flex flex-col items-start gap-4">
          <Reveal delay={60} variant="down">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Apple className="h-3.5 w-3.5" />
            {t("macAppsBadge")}
          </span>
          </Reveal>
          <Reveal delay={120}>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("macAppsPageTitle")}
          </h1>
          </Reveal>
          <Reveal delay={180}>
          <p className="max-w-2xl text-muted-foreground">{t("macAppsPageSubtitle")}</p>
          </Reveal>
        </div>

        {/* Search */}
        <Reveal delay={240} className="relative mb-8 max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={de ? "Apps suchen..." : "Search apps..."}
            className="w-full rounded-full border border-input bg-background py-2.5 pl-10 pr-4 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </Reveal>

        {/* Category pills */}
        <Reveal delay={300} className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setCategory(null)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              category === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {t("macAppsCategoryAll")}
          </button>
          {macAppCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(category === cat.id ? null : cat.id)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  category === cat.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {de ? cat.labelDe : cat.label}
              </button>
            );
          })}
        </Reveal>

        {/* App grid */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">
            <p className="font-medium text-foreground">{t("macAppsNoResults")}</p>
            <p className="mt-1 text-sm">{t("macAppsNoResultsHint")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sorted.map((app, i) => (
              <Reveal key={app.id} delay={(i % 2) * 90} variant="up">
                <MacAppCard app={app} de={de} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={200}>
        <p className="mt-10 text-center text-xs text-muted-foreground">{t("macAppsNote")}</p>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
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

function MacAppCard({ app, de }: { app: MacApp; de: boolean }) {
  const cat = macAppCategories.find((c) => c.id === app.category);
  const Icon = cat ? iconMap[cat.icon] : Zap;
  const favicon = faviconUrl(app.url);

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md"
    >
      {app.featured && (
        <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground shadow">
          <Sparkles className="h-3 w-3" />
          {de ? "Empfehlung" : "Pick"}
        </span>
      )}
      <div className="mb-3 flex items-start justify-between gap-2">
        {favicon ? (
          <img
            src={favicon}
            alt=""
            loading="lazy"
            className="h-10 w-10 rounded-xl bg-muted object-contain p-1.5 grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:text-foreground">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          {de ? app.priceDe : app.price}
        </span>
      </div>
      <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
        {app.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {de ? app.descriptionDe : app.description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {de ? (cat?.labelDe ?? "") : (cat?.label ?? "")}
        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}
