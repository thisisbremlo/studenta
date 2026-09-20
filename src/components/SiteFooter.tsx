import { useLocale } from "@/i18n/locale";
import { AppleLogo } from "@/components/AppleLogo";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card/40">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/" className="inline-flex items-center gap-2 font-semibold text-foreground">
              <img src="/logo.svg" alt="" className="h-5 w-5" />
              studenta.bremlo.uk
            </a>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t("footerTagline")}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav aria-label={t("footerNavProjects")} className="flex flex-col gap-2 text-sm">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                {t("footerNavProjects")}
              </span>
              <a
                href="https://bremlo.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <img
                  src="https://icons.duckduckgo.com/ip3/bremlo.uk.ico"
                  alt=""
                  loading="lazy"
                  className="h-3.5 w-3.5 rounded brightness-0 invert"
                />
                bremlo.uk
              </a>
              <a
                href="https://savault.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <img
                  src="https://icons.duckduckgo.com/ip3/savault.de.ico"
                  alt=""
                  loading="lazy"
                  className="h-3.5 w-3.5 rounded grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100"
                />
                savault.de
              </a>
              <a
                href="/mac-apps"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <AppleLogo className="h-3 w-3 fill-current" />
                {locale === "de" ? "Mac-Apps" : "Mac Apps"}
              </a>
            </nav>

            <nav aria-label={t("footerNavLegal")} className="flex flex-col gap-2 text-sm">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                {t("footerNavLegal")}
              </span>
              <a href="/legal-notice" className="text-muted-foreground transition-colors hover:text-foreground">
                {locale === "de" ? "Impressum" : "Legal Notice"}
              </a>
              <a href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-foreground">
                {locale === "de" ? "Datenschutz" : "Privacy Policy"}
              </a>
            </nav>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            aria-label={locale === "de" ? "Nach oben" : "Back to top"}
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:flex"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footerCopyright").replace("{year}", String(year))}</p>
          <p className="text-muted-foreground/70">{t("footerNote")}</p>
        </div>
      </div>
    </footer>
  );
}
