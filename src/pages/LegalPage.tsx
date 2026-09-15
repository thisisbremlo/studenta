import { useEffect } from "react";
import { useLocale } from "@/i18n/locale";
import { ImprintContent, PrivacyContent } from "@/pages/legal";

export function LegalPage({ kind }: { kind: "imprint" | "privacy" }) {
  const { locale, setLocale } = useLocale();
  const de = locale === "de";

  const titles = {
    imprint: de ? "Impressum" : "Legal Notice",
    privacy: de ? "Datenschutzerklärung" : "Privacy Policy",
  };

  const seoTitles: Record<string, string> = {
    "imprint-de": "Impressum — studenta.bremlo.uk",
    "imprint-en": "Legal Notice — studenta.bremlo.uk",
    "privacy-de": "Datenschutzerklärung — studenta.bremlo.uk",
    "privacy-en": "Privacy Policy — studenta.bremlo.uk",
  };
  const seoTitle = seoTitles[`${kind}-${locale}`];

  useEffect(() => {
    document.title = seoTitle;
    // Legal pages default to dark mode
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, [seoTitle]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="studenta.bremlo.uk logo" className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-tight">studenta.bremlo.uk</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex overflow-hidden rounded-md border border-border" role="group" aria-label="Language">
              {(["en", "de"] as const).map((l) => (
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
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight">{titles[kind]}</h1>
        {kind === "imprint" ? <ImprintContent /> : <PrivacyContent />}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-6 text-center text-sm">
          <a
            href={kind === "imprint" ? "/privacy-policy" : "/legal-notice"}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {kind === "imprint" ? (de ? "Datenschutzerklärung" : "Privacy Policy") : de ? "Impressum" : "Legal Notice"}
          </a>
          <span aria-hidden="true" className="text-muted-foreground/40">·</span>
          <a href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            {de ? "← Zurück zu den Angeboten" : "← Back to offers"}
          </a>
        </div>
      </footer>
    </div>
  );
}
