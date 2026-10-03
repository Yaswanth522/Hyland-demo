import { SITE, img } from "./home";

const l = (label, path) => ({ label, href: path.startsWith("http") ? path : `${SITE}${path}` });

export const mainNav = [
  {
    label: "Platform",
    links: [
      l("Platform", "/en/platform"),
      l("Enterprise AI", "/en/platform/enterprise-ai"),
      l("Agentic Document Processing", "/en/platform/agentic-document-processing"),
      l("Process Automation", "/en/platform/process-automation"),
      l("Content Management", "/en/platform/content-management"),
      l("Digital Asset Management", "/en/platform/digital-asset-management"),
      l("Governance", "/en/platform/governance"),
      l("Application Development", "/en/platform/application-development"),
      l("Systems Integrations", "/en/platform/systems-integrations"),
      l("Collaboration", "/en/platform/collaboration"),
      l("Cloud", "/en/platform/cloud"),
    ],
    feature: {
      title: "2026 Gartner® Magic Quadrant™ for Document Management",
      text: "See where Hyland is positioned in the latest analyst evaluation.",
      cta: "Read the report",
      image: img("2893x3200/aae4dc162e/gmq_dm_figure1.png", 600),
    },
  },
  {
    label: "Solutions",
    groups: [
      {
        title: "By Industry",
        links: [
          l("Healthcare", "/en/solutions/industries/healthcare"),
          l("Financial Services", "/en/solutions/industries/financial-services"),
          l("Government", "/en/solutions/industries/government"),
          l("Insurance", "/en/solutions/industries/insurance"),
          l("Education", "/en/solutions/industries/higher-education"),
          l("Media & Entertainment", "/en/solutions/industries/media-and-entertainment"),
          l("Manufacturing", "/en/solutions/industries/manufacturing"),
          l("CPG & Retail", "/en/solutions/industries/cpg-and-retail"),
          l("Other Industries", "/en/solutions/industries"),
        ],
      },
      {
        title: "By Department",
        links: [
          l("Accounting & Finance", "/en/solutions/departments/accounting-finance"),
          l("Human Resources", "/en/solutions/departments/human-resources"),
          l("Legal", "/en/solutions/departments/legal"),
        ],
      },
      {
        title: "Services",
        links: [
          l("Education", "/en/solutions/services/education"),
          l("Implementation", "/en/solutions/services/implementation"),
          l("Managed", "/en/solutions/services/managed"),
          l("Consulting", "/en/solutions/services/consulting"),
          l("Data Conversion Services", "/en/solutions/services/data-conversion"),
        ],
      },
    ],
    links: [l("Solutions Overview", "/en/solutions"), l("Technical Support", "https://community.hyland.com/customer-portal"), l("All Products", "/en/solutions/products")],
    feature: {
      title: "Intelligent document processing",
      text: "Capture, classify and extract data from any document with AI.",
      cta: "Learn about Hyland IDP",
      image: img("0b0a066ed3/adobestock_1004554714.jpeg", 600),
    },
  },
  {
    label: "Customers",
    links: [l("Customer Overview", "/en/customers"), l("Case Studies", "/en/customers/case-studies")],
    feature: {
      title: "Hear from our customers",
      text: "Real stories from organizations transforming how they work.",
      cta: "Explore stories",
      image: img("578402622f/adobestock_567652292.jpeg", 600),
    },
  },
  {
    label: "Partners",
    links: [
      l("Partner Network", "/en/partners"),
      l("Become a Partner", "/en/partners/become-a-partner"),
      l("Find a Partner", "/en/partners/find-a-partner"),
      l("Partner Resources", "/en/partners/resources"),
    ],
    feature: {
      title: "Grow with Hyland",
      text: "Join a global ecosystem of technology and services partners.",
      cta: "Find a partner",
      image: img("44d4fda34a/adobestock_1064084710.jpeg", 600),
    },
  },
  {
    label: "Resources",
    links: [
      l("Resources Overview", "/en/resources"),
      l("Analyst Reports", "/en/resources/analyst-reports"),
      l("Articles", "/en/resources/articles"),
      l("Downloads", "/en/resources/downloads"),
      l("Events", "/en/resources/events"),
      l("Product Releases", "/en/resources/product-releases"),
      l("Terminology", "/en/resources/terminology"),
      l("Webinars", "https://webinars.hyland.com"),
      l("Resource Center", "/en/resources/resource-center"),
    ],
    feature: {
      title: "Get monthly insights",
      text: "Product news, research and events delivered to your inbox.",
      cta: "Register now",
      image: img("e97b355c4f/adobestock_484008983.jpeg", 600),
    },
  },
  {
    label: "Company",
    links: [
      l("Overview of Hyland", "/en/company"),
      l("About", "/en/company/about"),
      l("Why Hyland?", "/en/company/why-hyland"),
      l("Newsroom", "/en/company/newsroom"),
      l("Careers", "/en/company/careers"),
    ],
    feature: {
      title: "Why choose Hyland?",
      text: "Decades of content expertise behind every solution.",
      cta: "Dig deeper",
      image: img("f3cdef6f92/adobestock_726890036.jpeg", 600),
    },
  },
];

export const languages = [
  { code: "EN", label: "English", href: `${SITE}/en` },
  { code: "DE", label: "Deutsch", href: `${SITE}/de` },
  { code: "ES", label: "Español", href: `${SITE}/es` },
  { code: "FR", label: "Français", href: `${SITE}/fr` },
  { code: "JA", label: "日本語", href: `${SITE}/ja` },
  { code: "PT", label: "Português", href: `${SITE}/pt` },
];

export const footerColumns = [
  {
    title: "Why Hyland",
    links: [l("Case Studies", "/en/customers/case-studies"), l("Analyst Reports", "/en/resources/analyst-reports"), l("Insights", "/en/resources/articles"), l("Integrations", "/en/platform/systems-integrations")],
  },
  {
    title: "Discover & Learn",
    links: [l("Resource Center", "/en/resources/resource-center"), l("Terminology", "/en/resources/terminology"), l("Downloads", "/en/resources/downloads"), l("Product Updates", "/en/resources/product-releases"), l("All Pages", "/en/sitemap")],
  },
  {
    title: "Hyland Services",
    links: [l("Implementation", "/en/solutions/services/implementation"), l("Managed", "/en/solutions/services/managed"), l("Consulting", "/en/solutions/services/consulting"), l("Data Conversion", "/en/solutions/services/data-conversion")],
  },
  {
    title: "About Hyland",
    links: [l("Careers", "/en/company/careers"), l("About", "/en/company/about"), l("Partners", "/en/partners"), l("Corporate Responsibility", "/en/company/about/corporate-responsibility"), l("Newsroom", "/en/company/newsroom")],
  },
  {
    title: "Connect",
    links: [
      l("Community", "https://community.hyland.com"),
      l("Events", "/en/resources/events"),
      l("Training", "https://university.hyland.com"),
      l("Product Documentation", "https://docs.hyland.com"),
      l("Tech Support", "https://community.hyland.com/customer-portal"),
    ],
  },
];

export const legalLinks = [
  l("Privacy Policy", "/en/legal/privacy-policy"),
  l("Cookie Policy", "/en/legal/cookie-policy"),
  l("Do Not Sell or Share My Personal Information", "/en/legal/privacy-policy"),
  l("Terms of Use", "/en/legal/terms-of-use"),
  l("Security and Compliance", "/en/legal/trust-center"),
  l("Legal and Compliance", "/en/legal"),
];
