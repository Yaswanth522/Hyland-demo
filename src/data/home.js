// Content for the home page. Images are hotlinked from Hyland's CDN.
const CDN = "https://site-cdn.hyland.com/www";
export const SITE = "https://www.hyland.com";

// Hyland's CDN resizes on the fly: append /m/{w}x0/smart.
export const img = (path, width) => (width ? `${CDN}/${path}/m/${width}x0/smart` : `${CDN}/${path}`);

export const hero = {
  eyebrow: "Hyland recognized as a Leader",
  cta: { label: "Read the IDC MarketScape excerpt", href: `${SITE}/en` },
  image: img("6800x6767/9547165fae/idc-ics-marketscape-2026-graphic.png", 900),
  band: `${CDN}/4612x2600/b73b20a128/home-nook.jpg/m/1000x90/smart`,
};

export const cic = {
  background: img("4612x2600/b73b20a128/home-nook.jpg", 1920),
  heading: "The platform to power content innovation",
  body: "Content Innovation Cloud brings AI to your enterprise content, processes and applications, so information turns into action.",
  infographic: img("31b648ef8d/cic_infographic.png"),
  link: { label: "Realize the full potential of your unstructured data", href: `${SITE}/en/platform` },
};

export const capabilities = [
  { title: "Content intelligence", text: "Use AI to surface meaning and value from all of your enterprise content.", href: "/en/platform/enterprise-ai" },
  { title: "Agentic Document Processing", text: "Let AI agents resolve capture and extraction exceptions automatically.", href: "/en/platform/agentic-document-processing" },
  { title: "Process automation", text: "Automate work end to end, driven by the right information at the right time.", href: "/en/platform/process-automation" },
  { title: "Content management", text: "Organize documents, records and rich media in one place.", href: "/en/platform/content-management" },
  { title: "Governance", text: "Keep content secure, compliant and protected against risk.", href: "/en/platform/governance" },
  { title: "Application development", text: "Build content-driven apps quickly with low-code tools.", href: "/en/platform/application-development" },
  { title: "Systems integration", text: "Connect your core business applications to your content.", href: "/en/platform/systems-integrations" },
  { title: "Collaboration", text: "Work together securely, inside and outside the organization.", href: "/en/platform/collaboration" },
  { title: "Content-tailored cloud architecture", text: "Scale with a secure cloud designed for content workloads.", href: "/en/platform/cloud" },
].map((c) => ({ ...c, href: `${SITE}${c.href}` }));

export const customerLogos = [
  "1128x208/1bbd1b4c28/company-logo-19.png",
  "650x243/7aceeba811/company-logo-18.jpg",
  "1200x266/b3a37fae24/company-logo-20.png",
  "5000x1923/a1b880bfa3/company-logo-21.png",
  "3547x1158/5e845957d8/company-logo-22.png",
].map((p) => img(p, 400));

export const video = {
  uuid: "x2wcpX2YarMQTm3612PQsd",
  poster: "https://play.vidyard.com/x2wcpX2YarMQTm3612PQsd.jpg",
};

export const whyHyland = [
  { title: "Drive content intelligence", text: "Turn the information you already hold into insight your teams can act on." },
  { title: "Stay agile", text: "Adapt quickly with a flexible platform that grows as your needs change." },
  { title: "Integrate across the enterprise", text: "Bring content into the systems your people use every day." },
  { title: "Work with an industry leader", text: "Partner with a recognized leader trusted by organizations worldwide." },
];

export const industries = [
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Healthcare",
    image: `${CDN}/00fe08a8a5/adobestock_505903389.jpeg/m/400x533/smart`,
    items: [
      { title: "Payers", text: "Speed up claims and member services with connected content." },
      { title: "Clinical care", text: "Give clinicians a complete view of patient information." },
      { title: "Enterprise and diagnostic medical imaging", text: "Manage and share imaging across the care network." },
      { title: "Back-office solutions", text: "Streamline finance, HR and supply chain processes." },
    ],
    href: "/en/solutions/industries/healthcare",
  },
  {
    id: "financial-services",
    label: "Financial services",
    title: "Financial services",
    image: `${CDN}/8c50dd430c/adobestock_818502573.jpg/m/400x533/smart`,
    items: [
      { title: "Banking and credit unions", text: "Modernize account opening and member experiences." },
      { title: "Lending", text: "Move loans from application to close faster." },
      { title: "Wealth management", text: "Serve clients with fast, compliant access to documents." },
    ],
    href: "/en/solutions/industries/financial-services",
  },
  {
    id: "insurance",
    label: "Insurance",
    title: "Insurance",
    image: `${CDN}/b72352e266/adobestock_1012687618.jpeg/m/400x533/smart`,
    items: [
      { title: "Claims management", text: "Resolve claims sooner with automated intake and routing." },
      { title: "Underwriting", text: "Give underwriters the full picture in one place." },
      { title: "Policy administration", text: "Simplify policy servicing across its lifecycle." },
    ],
    href: "/en/solutions/industries/insurance",
  },
  {
    id: "government",
    label: "Government",
    title: "Government",
    image: `${CDN}/810a49b19c/adobestock_1110519032.jpeg/m/400x533/smart`,
    items: [
      { title: "Secure electronic records management", text: "Protect and preserve records for the long term." },
      { title: "Meet global compliance standards", text: "Stay aligned with evolving regulations." },
      { title: "Constituent services", text: "Deliver faster, more transparent public services." },
    ],
    href: "/en/solutions/industries/government",
  },
  {
    id: "education",
    label: "Education",
    title: "Education",
    image: `${CDN}/4c288c417b/adobestock_1192440779.jpeg/m/400x533/smart`,
    items: [
      { title: "Admissions", text: "Process applications quickly and consistently." },
      { title: "Financial aid", text: "Reduce manual steps in aid packaging." },
      { title: "Registrar", text: "Keep student records accurate and accessible." },
      { title: "Student advising", text: "Help advisors support students with complete information." },
    ],
    href: "/en/solutions/industries/higher-education",
  },
  {
    id: "media-entertainment",
    label: "Media & entertainment",
    title: "Media & entertainment",
    image: `${CDN}/d96bc24de8/media-and-entertainment-source.jpeg/m/400x533/smart`,
    items: [
      { title: "Digital asset management", text: "Find, reuse and distribute rich media at scale." },
      { title: "Back-office solutions", text: "Automate contracts, rights and finance workflows." },
    ],
    href: "/en/solutions/industries/media-and-entertainment",
  },
  {
    id: "cpg-retail",
    label: "CPG & retail",
    title: "CPG & retail",
    image: `${CDN}/d78a8519ec/cpg-and-retail-source.jpeg/m/400x533/smart`,
    items: [
      { title: "Automation", text: "Remove manual work from supplier and order processes." },
      { title: "Product information unification", text: "Keep product content consistent across channels." },
      { title: "Compliance", text: "Track labeling and regulatory content with confidence." },
    ],
    href: "/en/solutions/industries/cpg-and-retail",
  },
  {
    id: "other-industries",
    label: "Other industries",
    title: "Industry-agnostic solutions",
    image: `${CDN}/70f041ef9b/adobestock_622318823.jpeg/m/400x533/smart`,
    items: [
      { title: "Built for every sector", text: "Construction, mining, oil and gas, publishing, transportation and logistics teams all rely on the same content platform." },
    ],
    href: "/en/solutions/industries",
  },
].map((i) => ({ ...i, href: `${SITE}${i.href}` }));

export const stories = [
  {
    name: "L'Oréal",
    text: "See how L'Oréal manages product content for thousands of users on the Nuxeo Platform.",
    image: `${CDN}/9e2bfeb1f2/loreal.jpeg/m/400x533/smart`,
    href: `${SITE}/en/customers/loreal`,
  },
  {
    name: "Liberty Mutual Insurance",
    text: "Learn how Liberty Mutual uses Hyland to keep information flowing across the business.",
    href: `${SITE}/en/customers/liberty-mutual`,
  },
  {
    name: "Toyota Financial Services",
    text: "Discover how Toyota Financial Services streamlined its document-heavy processes.",
    href: `${SITE}/en/customers/toyota-financial-services`,
  },
];

export const news = [
  {
    title: "Hyland customers are transforming what AI-powered enterprise operations look like",
    text: "Organizations are governing billions of documents and automating thousands of transactions as they bring AI into everyday operations.",
    image: `${CDN}/8ee2c585d1/1080x1080-hyland-social-image.png/m/600x338/smart`,
  },
  {
    title: "Hyland and AWS bring the content-powered agentic enterprise to Asia Pacific",
    text: "Content Innovation Cloud expands into the region, helping organizations scale AI while keeping data local.",
    image: `${CDN}/630x630/9e95f2d5d8/aws-logo.png/m/200x200/smart`,
  },
  {
    title: "Hyland launches next wave of AI platform innovations",
    text: "A new technology blueprint helps global organizations scale agentic automation on Content Innovation Cloud.",
    image: `${CDN}/fa95d4ee64/hyland-logo-1080x730_sm-square.png/m/200x200/smart`,
  },
  {
    title: "Hyland collaborates with Microsoft to power the agentic enterprise",
    text: "A strategic partnership bringing AI-ready content and agentic execution to Microsoft Azure.",
    image: `${CDN}/1600x1600/4c7df82b91/microsoft-logo.png/m/200x200/smart`,
  },
].map((n) => ({ ...n, href: `${SITE}/en/company/newsroom/news` }));
