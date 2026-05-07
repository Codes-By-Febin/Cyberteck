export interface SiloSection {
  heading: string;
  body: string;
}

export interface SiloFAQ {
  question: string;
  answer: string;
}

export interface SiloPageContent {
  title: string;
  subtitle: string;
  content: string;
  keywords: string[];
  pillar: string;
  longSections?: SiloSection[];
  faqs?: SiloFAQ[];
}

export interface SiloMap {
  [path: string]: SiloPageContent;
}
