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

  const metaDescriptions = {
    imprint: de
      ? "Impressum und Anbieterkennzeichnung von studenta.bremlo.uk — Benjamin Michael Bremer, Uelzen."
      : "Legal notice and provider identification of studenta.bremlo.uk — Benjamin Michael Bremer, Germany.",
    privacy: de
      ? "Datenschutzerklärung von studenta.bremlo.uk: Hosting über Cloudflare, keine Cookies, keine Analyse-Tools."
      : "Privacy policy of studenta.bremlo.uk: hosted on Cloudflare, no cookies, no analytics.",
  };

  useEffect(() => {
    document.title = seoTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metaDescriptions[kind]);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://studenta.bremlo.uk/${kind === "imprint" ? "legal-notice" : "privacy-policy"}`);
  }, [seoTitle, kind, de]);

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
