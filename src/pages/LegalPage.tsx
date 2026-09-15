import { useEffect } from "react";
import { useLocale } from "@/i18n/locale";
import { ImprintContent, PrivacyContent } from "@/pages/legal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({ kind }: { kind: "imprint" | "privacy" }) {
  const de = useLocale().locale === "de";

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
  const seoTitle = seoTitles[`${kind}-${de ? "de" : "en"}`];

  useEffect(() => {
    document.title = seoTitle;
    // Legal pages default to dark mode
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, [seoTitle]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight">{titles[kind]}</h1>
        {kind === "imprint" ? <ImprintContent /> : <PrivacyContent />}
      </main>

      <SiteFooter />
    </div>
  );
}
