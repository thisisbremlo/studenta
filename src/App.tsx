import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Code2,
  LayoutGrid,
  PenTool,
  Headphones,
  Cloud,
  GraduationCap,
  ExternalLink,
  Sparkles,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import { benefits, categories, type Category, type Benefit } from "@/data/benefits";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  LayoutGrid,
  PenTool,
  Headphones,
  Cloud,
  GraduationCap,
};

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <a
      href={benefit.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-foreground/20 hover:bg-accent"
    >
      {benefit.featured && (
        <span className="absolute -top-2 left-5 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
          <Sparkles className="h-2.5 w-2.5" /> Top Pick
        </span>
      )}

      <div className="mb-3 flex items-start justify-between">
        <span className="text-xs font-medium text-muted-foreground capitalize">{benefit.category}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground" />
      </div>

      <h3 className="mb-1 text-base font-semibold leading-tight text-card-foreground">{benefit.name}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm font-semibold text-foreground">{benefit.offer}</span>
        <span className="text-xs text-muted-foreground">{benefit.value}</span>
      </div>
    </a>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const filtered = useMemo(() => {
    return benefits.filter((b) => {
      const matchesCategory = activeCategory === "all" || b.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        q === "" ||
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.offer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-foreground" />
            <span className="text-sm font-semibold tracking-tight">StudentPerks</span>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          {benefits.length} offers · Updated 2026
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Student benefits,
          <br />
          <span className="text-muted-foreground">all in one place.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          Free and discounted tools you can claim with your student email.
        </p>

        {/* Search */}
        <div className="relative mx-auto mt-6 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search offers..."
            className="w-full rounded-md border border-input bg-secondary py-2.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
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
            All
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
                {cat.label}
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
              <BenefitCard key={b.id} benefit={b} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="mb-3 h-6 w-6 text-muted-foreground/40" />
            <p className="text-sm font-medium text-foreground">No offers found</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different search or category.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center">
          <p className="text-xs text-muted-foreground">
            Offers subject to change. Verify on the provider's website.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
