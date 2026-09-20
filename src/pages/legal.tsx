import { useLocale } from "@/i18n/locale";

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-8 mb-3 text-lg font-semibold text-foreground first:mt-0">{children}</h2>;
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-3 text-sm leading-relaxed text-muted-foreground ${className}`}>{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="mb-1.5 ml-4 list-disc text-sm leading-relaxed text-muted-foreground">{children}</li>;
}

const ADDRESS = {
  name: "Benjamin Michael Bremer",
  street: "Gartenstraße 58a",
  city: "29525 Uelzen",
  country: "Germany",
  email: "hi@bremlo.uk",
};

function AddressBlock({ label }: { label: string }) {
  return (
    <div className="mb-3 rounded-md border border-border bg-card p-4 text-sm">
      <p className="mb-1 font-medium text-foreground">{label}</p>
      <p className="text-muted-foreground">{ADDRESS.name}</p>
      <p className="text-muted-foreground">{ADDRESS.street}</p>
      <p className="text-muted-foreground">
        {ADDRESS.city}, {ADDRESS.country}
      </p>
      <p className="mt-2 text-muted-foreground">
        Email:{" "}
        <a href={`mailto:${ADDRESS.email}`} className="underline underline-offset-2 hover:text-foreground">
          {ADDRESS.email}
        </a>
      </p>
    </div>
  );
}

export function ImprintContent() {
  const { locale } = useLocale();
  const de = locale === "de";
  return (
    <div className="max-w-2xl">
      <H>{de ? "Angaben gemäß § 5 DDG" : "Information According to § 5 DDG"}</H>
      <AddressBlock label={de ? "Anbieter" : "Website operator"} />
      <H>{de ? "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" : "Responsible for Content According to § 18 Abs. 2 MStV"}</H>
      <p className="mb-3 text-sm text-muted-foreground">
        {ADDRESS.name}, {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.country}
      </p>

      <H>{de ? "Zweck der Website" : "Website Purpose"}</H>
      <P>
        {de
          ? "studenta.bremlo.uk ist eine kostenlose Informationsplattform, die Studenten-Vorteile, Rabatte und Gratis-Angebote verschiedener Anbieter übersichtlich zusammenstellt und auf die jeweiligen Anbieter verlinkt."
          : "studenta.bremlo.uk is a free informational platform that curates student benefits, discounts, and free offers from various providers and links to the respective providers."}
      </P>

      <H>{de ? "Keine Vertragsbeziehung mit Anbietern" : "No Contractual Relationship with Providers"}</H>
      <P>
        {de
          ? "Diese Website verkauft keine Produkte und vermittelt keine Verträge. Alle Angebote, Preise und Konditionen werden ausschließlich von den verlinkten Drittanbietern bereitgestellt. Für Kauf, Verifizierung, Anspruchsberechtigung und Vertragsabwicklung ist ausschließlich der jeweilige Anbieter verantwortlich."
          : "This website does not sell products or broker contracts. All offers, prices, and conditions are provided solely by the linked third-party providers. Purchases, verification, eligibility, and contract handling are the sole responsibility of the respective provider."}
      </P>

      <H>{de ? "Haftung für Inhalte" : "Liability for Content"}</H>
      <P>
        {de
          ? "Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt."
          : "As a service provider, I am responsible for my own content on these pages in accordance with applicable laws. However, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate unlawful activity. Obligations to remove or block the use of information under general laws remain unaffected."}
      </P>
      <P>
        {de
          ? "Die Angebotsdaten auf dieser Website (Preise, Rabatte, Konditionen) werden mit Sorgfalt zusammengestellt, können sich jedoch jederzeit ohne Vorankündigung ändern. Es wird keine Gewähr für Aktualität, Richtigkeit und Vollständigkeit der angezeigten Informationen übernommen. Bitte überprüfe alle Angaben direkt auf der Website des jeweiligen Anbieters."
          : "The offer data on this website (prices, discounts, conditions) is compiled with care but can change at any time without notice. No guarantee is given for the accuracy, completeness, or timeliness of the displayed information. Please verify all information directly on the respective provider's website."}
      </P>

      <H>{de ? "Haftung für Links" : "Liability for Links"}</H>
      <P>
        {de
          ? "Diese Website enthält Links zu externen Websites Dritter (u. a. Anbieter-Websites, Tool-Websites und externe Plattformen). Auf den Inhalt dieser externen Websites habe ich keinen Einfluss und kann dafür keine Haftung übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
          : "This website contains links to external third-party websites (including provider websites, tool websites, and external platforms). I have no influence over the content of these external websites and cannot accept liability for them. The respective provider or operator of linked websites is always responsible for their own content."}
      </P>

      <H>{de ? "Urheberrecht" : "Copyright"}</H>
      <P>
        {de
          ? "Die durch den Betreiber erstellten Inhalte, das Design und die Werke dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Fremdinhalte (z. B. Logos und Markenzeichen der gelisteten Anbieter) gehören den jeweiligen Rechteinhabern und werden nur zur Kennzeichnung der Angebote verwendet."
          : "The content, design, and works created by the operator of this website are subject to German copyright law. Duplication, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Third-party content (e.g., logos and trademarks of the listed providers) belongs to the respective rights holders and is used solely to identify the offers."}
      </P>

      <H>{de ? "Kontakt" : "Contact"}</H>
      <P>
        {de ? "Bei Fragen zu dieser Website oder rechtlichen Angelegenheiten:" : "For inquiries regarding this website or legal matters:"}{" "}
        <a href={`mailto:${ADDRESS.email}`} className="underline underline-offset-2 hover:text-foreground">
          {ADDRESS.email}
        </a>
      </P>
      <P className="text-muted-foreground/70">{de ? "Stand: September 2026" : "Last updated: September 2026"}</P>
    </div>
  );
}

export function PrivacyContent() {
  const { locale } = useLocale();
  const de = locale === "de";
  return (
    <div className="max-w-2xl">
      <H>{de ? "Datenschutz auf einen Blick" : "Data Protection at a Glance"}</H>
      <P>
        {de
          ? "Die folgenden Informationen geben einen Überblick darüber, welche personenbezogenen Daten verarbeitet werden, wenn du diese Website besuchst. Diese Datenschutzerklärung gilt für studenta.bremlo.uk, eine Studenten-Vorteils-Plattform von Benjamin Michael Bremer."
          : "The following information provides an overview of how personal data is processed when visiting this website. This privacy policy applies to studenta.bremlo.uk, a student benefits platform by Benjamin Michael Bremer."}
      </P>
      <P>
        {de
          ? "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen, z. B. Name, E-Mail-Adresse, IP-Adresse oder Geräteinformationen."
          : "Personal data means any information relating to an identified or identifiable person, such as name, email address, IP address, or device information."}
      </P>

      <H>{de ? "Verantwortliche Stelle" : "Controller"}</H>
      <AddressBlock label={de ? "Verantwortlich" : "Controller"} />

      <H>{de ? "Hosting und Auslieferung über Cloudflare" : "Hosting and Website Delivery via Cloudflare"}</H>
      <P>
        {de
          ? "Diese Website wird über Cloudflare Pages ausgeliefert. Beim Besuch der Website werden technisch notwendige Verbindungsdaten wie IP-Adresse, Anfrage-Metadaten, Browser-Informationen, Zugriffszeit und angeforderte Ressourcen verarbeitet, um die Website sicher und zuverlässig auszuliefern, ihre Stabilität sicherzustellen und Missbrauch zu verhindern."
          : "This website is hosted and delivered through Cloudflare Pages. When visiting the website, technically necessary connection data such as IP addresses, request metadata, browser information, access times, and requested resources are processed to deliver the website securely and reliably, ensure stability, and prevent abuse."}
      </P>
      <P>
        {de
          ? "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und effizienten Betrieb der Website)."
          : "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in the secure and efficient operation of the website)."}
      </P>
      <P>
        {de ? "Anbieter: Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA." : "Provider: Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA."}{" "}
        <a href="https://www.cloudflare.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
          cloudflare.com/legal/privacy-policy
        </a>
      </P>
      <P>
        {de
          ? "Soweit Daten in die USA übertragen werden, erfolgt dies auf Grundlage der EU-Standardvertragsklauseln (Art. 46 DSGVO) sowie zusätzlicher Schutzmaßnahmen von Cloudflare, einschließlich eines Transfer Impact Assessments."
          : "Where data is transferred to the United States, the transfer is based on the EU Standard Contractual Clauses (Art. 46 GDPR) and additional safeguards implemented by Cloudflare, including a Transfer Impact Assessment."}
      </P>

      <H>{de ? "Externe Favicons (DuckDuckGo Icon Service)" : "External Favicons (DuckDuckGo Icon Service)"}</H>
      <P>
        {de
          ? "Zur Darstellung der Anbieter-Logos in den Angebotskarten lädt diese Website Favicons vom DuckDuckGo Icon Service (icons.duckduckgo.com). Beim Laden dieser Bilder wird deine IP-Adresse an DuckDuckGo übertragen. Wenn du dies nicht möchtest, kannst du das Laden externer Bilder in deinen Browsereinstellungen blockieren."
          : "To display provider logos on the offer cards, this website loads favicons from the DuckDuckGo Icon Service (icons.duckduckgo.com). When these images load, your IP address is transmitted to DuckDuckGo. If you do not want this, you can block the loading of external images in your browser settings."}
      </P>
      <P>
        {de
          ? "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung der Angebote)."
          : "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a visually appealing presentation of the offers)."}
      </P>
      <P>
        {de ? "Anbieter: DuckDuckGo, 20 Pocket Rd, Paoli, PA 19301, USA." : "Provider: DuckDuckGo, 20 Pocket Rd, Paoli, PA 19301, USA."}{" "}
        <a href="https://duckduckgo.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
          duckduckgo.com/privacy
        </a>
      </P>

      <H>{de ? "Externe Links zu Anbieter-Websites" : "External Links to Provider Websites"}</H>
      <P>
        {de
          ? "Die Angebotskarten verlinken auf externe Websites der jeweiligen Anbieter (z. B. Spotify, GitHub, Adobe). Sobald du eine dieser Websites besuchst, gelten die dortigen Datenschutzbestimmungen des jeweiligen Anbieters. Ich habe keinen Einfluss auf deren Datenverarbeitung."
          : "The offer cards link to the external websites of the respective providers (e.g., Spotify, GitHub, Adobe). As soon as you visit one of these websites, that provider's privacy policy applies. I have no control over their data processing practices."}
      </P>

      <H>{de ? "Keine Kontaktaufnahme über diese Website" : "No Contact Forms on This Website"}</H>
      <P>
        {de
          ? "Diese Website bietet kein Kontaktformular und keine Anmeldung an. Wenn du mit mir in Kontakt treten möchtest, nutze bitte die E-Mail-Adresse im Impressum. Dabei verarbeite ich deine E-Mail-Adresse und deine Nachricht ausschließlich zur Bearbeitung deiner Anfrage (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO)."
          : "This website does not offer a contact form or sign-up. If you want to contact me, please use the email address in the legal notice. When you do, I process your email address and message solely to handle your inquiry (Art. 6(1)(b) or (f) GDPR)."}
      </P>

      <H>{de ? "Cookies und Local Storage" : "Cookies and Local Storage"}</H>
      <P>
        {de
          ? "Diese Website verwendet keine Marketing- oder Tracking-Cookies. Es kommt ausschließlich sogenannter Local Storage zum Einsatz, um deine Sprachauswahl (Deutsch/Englisch) und dein Design-Thema (hell/dunkel) lokal auf deinem Gerät zu speichern. Dies ist technisch notwendig für die von dir angeforderte Funktionalität und erfordert keine Einwilligung."
          : "This website does not use marketing or tracking cookies. Only local storage is used to save your language selection (German/English) and theme preference (light/dark) locally on your device. This is technically necessary for the functionality you request and requires no consent."}
      </P>

      <H>{de ? "Keine Analyse-Tools" : "No Analytics"}</H>
      <P>
        {de
          ? "Aktuell werden keine Analyse- oder Tracking-Dienste (z. B. Google Analytics) eingesetzt. Falls künftig Analysetools eingesetzt werden, wird diese Datenschutzerklärung entsprechend aktualisiert und ggf. eine Einwilligung eingeholt."
          : "Currently, no analytics or tracking services (e.g., Google Analytics) are used. If analytics tools are added in the future, this privacy policy will be updated accordingly and consent will be obtained where required."}
      </P>

      <H>{de ? "Datenweitergabe" : "Data Sharing"}</H>
      <P>
        {de
          ? "Personenbezogene Daten werden nicht verkauft. Eine Weitergabe erfolgt nur an die oben genannten technischen Dienstleister (Hosting, Favicon-Auslieferung), soweit für den Betrieb der Website notwendig."
          : "Personal data is not sold. It is only shared with the technical service providers named above (hosting, favicon delivery) where necessary to operate the website."}
      </P>

      <H>{de ? "Speicherdauer" : "Storage Duration"}</H>
      <P>
        {de
          ? "Technische Server- und Sicherheits-Logs werden von Cloudflare nur temporär gespeichert. Deine lokalen Einstellungen (Sprache, Thema) verbleiben in deinem Browser, bis du sie selbst löschst."
          : "Technical server and security logs are stored by Cloudflare only temporarily. Your local settings (language, theme) remain in your browser until you clear them yourself."}
      </P>

      <H>{de ? "Deine Rechte" : "Your Rights"}</H>
      <P>{de ? "Du hast das Recht auf:" : "You have the right to:"}</P>
      <ul className="mb-3">
        <Li>{de ? "Auskunft über deine gespeicherten personenbezogenen Daten (Art. 15 DSGVO)" : "access the personal data stored about you (Art. 15 GDPR)"}</Li>
        <Li>{de ? "Berichtigung unrichtiger Daten (Art. 16 DSGVO)" : "correction of inaccurate data (Art. 16 GDPR)"}</Li>
        <Li>{de ? "Löschung deiner Daten (Art. 17 DSGVO)" : "erasure of your data (Art. 17 GDPR)"}</Li>
        <Li>{de ? "Einschränkung der Verarbeitung (Art. 18 DSGVO)" : "restriction of processing (Art. 18 GDPR)"}</Li>
        <Li>{de ? "Datenübertragbarkeit (Art. 20 DSGVO)" : "data portability (Art. 20 GDPR)"}</Li>
        <Li>{de ? "Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)" : "object to processing based on legitimate interests (Art. 21 GDPR)"}</Li>
      </ul>
      <P>
        {de ? "Um deine Rechte auszuüben, kontaktiere mich bitte unter:" : "To exercise your rights, please contact me at:"}{" "}
        <a href={`mailto:${ADDRESS.email}`} className="underline underline-offset-2 hover:text-foreground">
          {ADDRESS.email}
        </a>
      </P>

      <H>{de ? "Beschwerderecht bei einer Aufsichtsbehörde" : "Right to Lodge a Complaint"}</H>
      <P>
        {de
          ? "Du hast das Recht, dich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu beschweren, z. B. bei der Landesbeauftragten für den Datenschutz Niedersachsen (Aufsichtsbehörde für den Standort des Betreibers)."
          : "You have the right to lodge a complaint with a competent data protection supervisory authority, e.g., the State Commissioner for Data Protection of Lower Saxony (supervisory authority for the operator's location)."}
      </P>

      <H>{de ? "SSL/TLS-Verschlüsselung" : "SSL/TLS Encryption"}</H>
      <P>
        {de
          ? "Diese Website nutzt SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du am „https://“ in der Adresszeile deines Browsers."
          : "This website uses SSL/TLS encryption. You can recognize an encrypted connection by the “https://” in your browser's address bar."}
      </P>
      <P className="text-muted-foreground/70">{de ? "Stand: September 2026" : "Last updated: September 2026"}</P>
    </div>
  );
}
