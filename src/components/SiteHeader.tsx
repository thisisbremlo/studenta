import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale";

export function SiteHeader({ showThemeToggle = true }: { showThemeToggle?: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="studenta.bremlo.uk logo" className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-tight">studenta.bremlo.uk</span>
        </a>
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
          {showThemeToggle && (
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex h-6 w-8 items-center justify-center rounded-md border border-border transition-colors hover:bg-accent"
              aria-label={t("toggleTheme")}
            >
              {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
