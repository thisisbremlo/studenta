import { useLocale } from "@/i18n/locale";

export function SiteFooter() {
  const { locale, t } = useLocale();
  return (
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
              className="h-4 w-4 rounded brightness-0 invert"
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
          <a href="/legal-notice" className="text-muted-foreground transition-colors hover:text-foreground">
            {locale === "de" ? "Impressum" : "Legal Notice"}
          </a>
          <span aria-hidden="true" className="text-muted-foreground/40">·</span>
          <a href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-foreground">
            {locale === "de" ? "Datenschutz" : "Privacy"}
          </a>
          <span aria-hidden="true" className="text-muted-foreground/40">·</span>
          <a href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            {locale === "de" ? "Angebote" : "Offers"}
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          {t("footerCopyright").replace("{year}", String(new Date().getFullYear()))}
        </p>
        <p className="text-xs text-muted-foreground/70">{t("footerNote")}</p>
      </div>
    </footer>
  );
}
