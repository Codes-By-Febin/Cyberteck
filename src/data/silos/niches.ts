import { SiloMap } from '../../types';

const NICHES = [
  'gyms', 'restaurants', 'clinics', 'schools', 'startups', 'lawyers', 'real-estate', 'ecommerce',
  'hotels', 'spas', 'car-rentals', 'logistics', 'manufacturing', 'jewellery', 'retail', 'coaching',
  'dentists', 'salons', 'event-planners', 'travel-agencies'
];

export const NICHE_SILO: SiloMap = {};

const CORE_NICHES = [
  { id: 'gyms', title: 'Gyms', desc: 'Automate member bookings and renewals. Our WhatsApp AI for gyms in Kochi handles membership queries and payment reminders 24/7.', keywords: ['gym automation india', 'fitness center bot'] },
  { id: 'restaurants', title: 'Restaurants', desc: 'Real-time order taking and table reservations. Direct integration with your POS or Google Sheets for seamless kitchen workflows.', keywords: ['restaurant whatsapp bot', 'food order automation'] },
  { id: 'clinics', title: 'Clinics', desc: 'Patient triage and automated follow-ups. Ensure patients get instant instructions and schedule appointments without receptionist lag.', keywords: ['doctor appointment bot', 'clinic ai support'] }
];

CORE_NICHES.forEach(n => {
  NICHE_SILO[`ai-for-${n.id}`] = {
    pillar: 'Industry Niches',
    title: `AI Automation for ${n.title}`,
    subtitle: `Customized zero-cost AI stacks for ${n.title} in India.`,
    content: n.desc,
    longSections: [
      {
        heading: `Dominating the ${n.title} Market with Sovereign AI`,
        body: `In the highly fragmented ${n.title} sector in India, speed of communication is the ultimate competitive advantage. While your competitors are manually replying to chat messages, our zero-cost AI agents are qualifying leads and closing bookings instantly. By hosting your AI locally, you ensure that guest/patient records remain private, complying with regional healthcare and data protection standards.`
      },
      {
        heading: `Automated Engagement Loops`,
        body: `Our bots don't just wait for queries. They proactively engage. For ${n.title}, we set up automated check-ins, membership renewal alerts, and feedback request cycles that drive retention by 40% on average.`
      }
    ],
    faqs: [
      { question: `Can the ${n.title} bot handle multiple languages?`, answer: `Yes, it is fully bilingual, supporting English and Malayalam (or Hindi) to ensure all your clients feel comfortable.` }
    ],
    keywords: n.keywords
  };
});

NICHES.filter(n => !CORE_NICHES.find(cn => cn.id === n)).forEach(niche => {
  const title = niche.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
  NICHE_SILO[`ai-for-${niche}`] = {
    pillar: 'Industry Niches',
    title: `AI Automation for ${title}`,
    subtitle: `Customized zero-cost AI stacks for ${title} in India.`,
    content: `Transforming ${title} with WhatsApp AI and local intelligence.`,
    longSections: [
      { heading: `Why ${title} Need AI in 2026`, body: `The competition in the ${title} sector is fierce. Instant responses are the difference between a conversion and a bounce.` }
    ],
    faqs: Array.from({ length: 5 }, (_, i) => ({ 
      question: `${title} AI Q ${i+1}: How long does setup take?`, 
      answer: `Ans ${i+1}: We can have you live in 72 hours.` 
    })),
    keywords: [`ai for ${niche}`, `${niche} automation`, `whatsapp bot for ${niche}`]
  };
});
