export type Category = "development" | "productivity" | "design" | "entertainment" | "cloud" | "learning";

export interface Benefit {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  offer: string;
  url: string;
  value: string;
  featured?: boolean;
}

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: "development", label: "Development", icon: "Code2" },
  { id: "productivity", label: "Productivity", icon: "LayoutGrid" },
  { id: "design", label: "Design", icon: "PenTool" },
  { id: "entertainment", label: "Entertainment", icon: "Headphones" },
  { id: "cloud", label: "Cloud", icon: "Cloud" },
  { id: "learning", label: "Learning", icon: "GraduationCap" },
];

export const benefits: Benefit[] = [
  {
    id: "github",
    name: "GitHub Student Developer Pack",
    category: "development",
    tagline: "Pro tools, free for students",
    description:
      "Free GitHub Pro with Copilot Pro, JetBrains IDEs, free domains, cloud credits, and 100+ partner offers. The single most valuable student pack for developers.",
    offer: "Free while enrolled",
    url: "https://education.github.com/pack",
    value: "$200k+ in partner offers",
    featured: true,
  },
  {
    id: "jetbrains",
    name: "JetBrains All Products Pack",
    category: "development",
    tagline: "Every JetBrains IDE, free",
    description:
      "IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm, CLion, Rider, GoLand, DataGrip, and more — all free with a student license. Renew yearly.",
    offer: "Free while enrolled",
    url: "https://www.jetbrains.com/community/education/",
    value: "$249/year per IDE",
    featured: true,
  },
  {
    id: "copilot",
    name: "GitHub Copilot Pro",
    category: "development",
    tagline: "AI pair programming",
    description:
      "AI-powered code completion in VS Code, JetBrains, and Neovim. Included with the GitHub Student Developer Pack at no cost.",
    offer: "Free while enrolled",
    url: "https://github.com/features/copilot",
    value: "$10/month",
  },
  {
    id: "cursor",
    name: "Cursor Pro",
    category: "development",
    tagline: "AI-first code editor",
    description:
      "The AI code editor built on VS Code. Students get one year of Cursor Pro with unlimited completions and premium model requests.",
    offer: "1 year free",
    url: "https://cursor.com/students",
    value: "$20/month",
  },
  {
    id: "perplexity",
    name: "Perplexity Education Pro",
    category: "development",
    tagline: "AI research assistant, 50% off",
    description:
      "AI-powered answer engine with advanced models. Students and educators get 50% off the Pro plan after SheerID verification — roughly $9/month instead of $20.",
    offer: "50% off (was $20/month)",
    url: "https://www.perplexity.ai/education",
    value: "Save $11/month",
  },
  {
    id: "microsoft365",
    name: "Microsoft 365 Education",
    category: "productivity",
    tagline: "Word, Excel, PowerPoint & 1 TB OneDrive",
    description:
      "Full Office suite including Word, Excel, PowerPoint, OneNote, and Teams — plus 1 TB of OneDrive cloud storage. Free with a valid school email.",
    offer: "Free while enrolled",
    url: "https://www.microsoft.com/education/products/office",
    value: "$99/year",
    featured: true,
  },
  {
    id: "notion",
    name: "Notion Education Plus",
    category: "productivity",
    tagline: "All Plus features, free",
    description:
      "Unlimited blocks, file uploads, version history, and advanced collaboration. Sign up with your school email and switch to the Education plan in billing settings.",
    offer: "Free while enrolled",
    url: "https://www.notion.so/students",
    value: "$10/month",
  },
  {
    id: "figma",
    name: "Figma Education",
    category: "design",
    tagline: "Professional design, free",
    description:
      "Full Figma Professional plan with unlimited projects, unlimited editors, and FigJam collaborative whiteboarding. The industry-standard UI/UX design tool.",
    offer: "Free while enrolled",
    url: "https://www.figma.com/education/",
    value: "$15/month",
    featured: true,
  },
  {
    id: "adobe",
    name: "Adobe Creative Cloud",
    category: "design",
    tagline: "60%+ off the full suite",
    description:
      "Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, and 20+ more creative apps. Verify with your .edu email through SheerID.",
    offer: "60%+ off",
    url: "https://www.adobe.com/creativecloud/buy/students.html",
    value: "$65.99/month → $19.97/month",
  },
  {
    id: "canva",
    name: "Canva for Education",
    category: "design",
    tagline: "Pro design tools, free",
    description:
      "Canva Pro with 100+ million photos, videos, audio, and graphics. Create presentations, social media, posters, and more — free for students and educators.",
    offer: "Free while enrolled",
    url: "https://www.canva.com/education/",
    value: "$15/month",
  },
  {
    id: "autodesk",
    name: "Autodesk Education",
    category: "design",
    tagline: "AutoCAD, Maya, Fusion 360 & more",
    description:
      "Free 1-year educational licenses for AutoCAD, Fusion 360, Maya, 3ds Max, Revit, Inventor, and the full Autodesk portfolio. Ideal for engineering and 3D design.",
    offer: "Free 1-year license",
    url: "https://www.autodesk.com/education",
    value: "$2,000+/year",
  },
  {
    id: "unity",
    name: "Unity Student",
    category: "design",
    tagline: "Game engine, free",
    description:
      "Free Unity Student plan with all core Unity features for game development and real-time 3D. Includes the same engine used by professionals, no watermark.",
    offer: "Free while enrolled",
    url: "https://unity.com/products/unity-student",
    value: "$2,200/year",
  },
  {
    id: "spotify",
    name: "Spotify Premium Student + Hulu",
    category: "entertainment",
    tagline: "Music + TV, bundled",
    description:
      "Ad-free Spotify Premium plus Hulu (With Ads) for a single discounted price. First month free, then $6.99/month. Eligible for up to 4 years.",
    offer: "$6.99/month (was $24.98)",
    url: "https://www.spotify.com/student",
    value: "Save $17.99/month",
    featured: true,
  },
  {
    id: "applemusic",
    name: "Apple Music Student + Apple TV+",
    category: "entertainment",
    tagline: "100M songs + Apple TV+, free",
    description:
      "Ad-free Apple Music with Spatial Audio plus free access to Apple TV+ shows like Severance and The Morning Show. $5.99/month for eligible students.",
    offer: "$5.99/month (was $19.98)",
    url: "https://offers.applemusic.apple/student-offer",
    value: "Save $13.99/month",
  },
  {
    id: "amazon",
    name: "Amazon Prime for Young Adults",
    category: "entertainment",
    tagline: "6 months free, then 50% off",
    description:
      "Free 2-day shipping, Prime Video, Prime Music, and 5% cash back. Six months free for students, then $7.49/month or $69/year — half the regular price.",
    offer: "6 months free, then $7.49/mo",
    url: "https://www.amazon.com/amazonprime",
    value: "Save $139/year",
  },
  {
    id: "youtube",
    name: "YouTube Premium Student",
    category: "entertainment",
    tagline: "Ad-free YouTube + Music",
    description:
      "Ad-free videos, background play, offline downloads, and YouTube Music Premium included. Verify student status with SheerID.",
    offer: "$7.99/month (was $13.99)",
    url: "https://www.youtube.com/premium",
    value: "Save $6/month",
  },
  {
    id: "peacock",
    name: "Peacock Premium Student",
    category: "entertainment",
    tagline: "NBC, movies & live sports",
    description:
      "Stream NBC shows, blockbuster movies, Premier League, and live sports. Students get Peacock Premium for $2.99/month — 73% off the regular price.",
    offer: "$2.99/month (was $10.99)",
    url: "https://www.peacocktv.com/student",
    value: "Save $8/month",
  },
  {
    id: "paramount",
    name: "Paramount+ Student",
    category: "entertainment",
    tagline: "50% off all plans",
    description:
      "Stream movies, shows, and live sports from Paramount. Students get 50% off any plan for the first 12 months — starting at $4.50/month.",
    offer: "50% off (from $4.50/mo)",
    url: "https://www.paramountplus.com/student",
    value: "Save 50%",
  },
  {
    id: "digitalocean",
    name: "DigitalOcean Cloud Credits",
    category: "cloud",
    tagline: "$200 in cloud hosting",
    description:
      "Spin up droplets, manage Kubernetes, and deploy apps with $200 in DigitalOcean cloud credits. Included in the GitHub Student Developer Pack.",
    offer: "$200 free credits",
    url: "https://education.github.com/pack",
    value: "$200",
  },
  {
    id: "azure",
    name: "Microsoft Azure for Students",
    category: "cloud",
    tagline: "$100 in Azure credits",
    description:
      "Build, deploy, and manage apps on Microsoft Azure with $100 in free credits and access to free-tier services. No credit card required to start.",
    offer: "$100 free credits",
    url: "https://azure.microsoft.com/free/students",
    value: "$100",
  },
  {
    id: "namecheap",
    name: "Namecheap .me Domain + SSL",
    category: "cloud",
    tagline: "Free domain + SSL for 1 year",
    description:
      "Register a free .me domain for one year and get a free SSL certificate. Perfect for building your personal portfolio site. Via the GitHub Student Pack.",
    offer: "Free 1-year domain",
    url: "https://education.github.com/pack",
    value: "$20/year",
  },
  {
    id: "namedotcom",
    name: "Name.com Domain",
    category: "cloud",
    tagline: "Free domain across 25+ extensions",
    description:
      "Get a free domain name for one year from Name.com, available across 25+ extensions. Build your personal brand or project site. Via the GitHub Student Pack.",
    offer: "Free 1-year domain",
    url: "https://education.github.com/pack",
    value: "$15/year",
  },
  {
    id: "heroku",
    name: "Heroku Postgres + Dynos",
    category: "cloud",
    tagline: "Free app hosting tier",
    description:
      "Deploy web apps with Heroku's free dynos and a free Heroku Postgres database. Great for hosting side projects and portfolios. Via the GitHub Student Pack.",
    offer: "Free tier access",
    url: "https://education.github.com/pack",
    value: "$5/month",
  },
  {
    id: "frontendmasters",
    name: "Frontend Masters",
    category: "learning",
    tagline: "Expert-led courses, free",
    description:
      "Access to the full Frontend Masters library of expert-led courses on JavaScript, React, CSS, and more. Free subscription via the GitHub Student Pack.",
    offer: "Free 6-month subscription",
    url: "https://education.github.com/pack",
    value: "$39/month",
  },
  {
    id: "datacamp",
    name: "DataCamp",
    category: "learning",
    tagline: "Data science courses, free",
    description:
      "Learn Python, R, SQL, and machine learning with interactive courses and projects. Free 3-month subscription through the GitHub Student Pack.",
    offer: "Free 3-month subscription",
    url: "https://education.github.com/pack",
    value: "$39/month",
  },
  {
    id: "codecademy",
    name: "Codecademy Pro",
    category: "learning",
    tagline: "35% off Pro",
    description:
      "Interactive coding courses in Python, JavaScript, Java, C++, SQL, and more. Get 35% off the Pro subscription with student verification.",
    offer: "35% off Pro",
    url: "https://www.codecademy.com/pages/student-discount",
    value: "Save ~$140/year",
  },
  {
    id: "nytimes",
    name: "The New York Times",
    category: "learning",
    tagline: "Digital access for $1/week",
    description:
      "Unlimited access to NYT articles, cooking, games, and The Athletic. Special introductory rate of $1/week for students for the first year.",
    offer: "$1/week for 1 year",
    url: "https://www.nytimes.com/subscription/student",
    value: "Save 80%+",
  },
];
