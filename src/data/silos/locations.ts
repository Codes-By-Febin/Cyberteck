import { SiloMap } from '../../types';

export const LOCATION_SILO: SiloMap = {};

// 20 Locations in Kerala
[
  { id: 'kochi', name: 'Kochi', desc: 'The silicon coast of Kerala. We serve the greater Ernakulam area from our Thrippunithura base, providing high-touch AI setups for Infopark tech firms and MG Road retailers.' },
  { id: 'infopark', name: 'Infopark Kochi', desc: 'Enterprise-grade LLM clusters and n8n scalability for tech-first companies in Phase 1 and Phase 2. Specialized in VPC deployments and high-HA clusters.' },
  { id: 'trivandrum', name: 'Trivandrum', desc: 'Direct support for Technopark startups. Implementing private AI for government projects and international BPOs in the capital city.' },
  { id: 'kozhikode', name: 'Kozhikode', desc: 'Empowering the Malabar trading community with WhatsApp AI. Automating order flows for footwear, food, and logistics firms.' },
  { id: 'thrissur', name: 'Thrissur', desc: 'The financial capital of Kerala meets modern AI. Private LLM setups for gold, banking and retail giants who prioritize data privacy.' }
].forEach(loc => {
  LOCATION_SILO[`locations/${loc.id}`] = {
    pillar: 'Local Hub',
    title: `AI Automation in ${loc.name}`,
    subtitle: `Helping ${loc.name} businesses scale with zero-cost AI.`,
    content: `${loc.desc} Our local presence ensures 4-hour on-site response for critical server maintenance.`,
    longSections: [
      {
        heading: `Why ${loc.name} Businesses are Choosing Local AI`,
        body: `Businesses in ${loc.name} are moving away from centralized cloud AI providers. The combination of high internet latency during peak hours and the recurring dollar-denominated costs of OpenAI are making local Ollama setups more attractive. By hosting AI on your own premises in ${loc.name}, you ensure that your automation remains active even during ISP outages, and your sensitive business logic never leaves the state.`
      }
    ],
    keywords: [`ai automation ${loc.id}`, `whatsapp bot ${loc.name}`, `ollama expert ${loc.name}`, `n8n agency Kerala`],
    faqs: [
      { question: `Do you provide on-site installation in ${loc.name}?`, answer: `Yes, we provide physical server installation, network cabling, and on-site staff training throughout ${loc.name} and surrounding districts.` }
    ]
  };
});

// 27 Blog topics
[
  'ollama-setup-india', 'n8n-whatsapp-guide', 'free-whatsapp-ai-bot', 'local-ai-vs-openai',
  'cost-savings-ai', 'privacy-dpdp-compliance', 'ai-for-accounting', 'whatsapp-marketing-2026',
  'self-hosted-llm-benefits', 'llama-3-performance-india', 'mistral-vs-llama', 'n8n-vs-zapier',
  'whatsapp-api-pricing', 'ai-triage-clinics', 'automated-gym-leads', 'restaurant-ai-case-study',
  'ai-for-law-docs', 'startups-ai-stack', 'enterprise-ollama-cluster', 'gpu-mining-to-ai',
  'cloud-vs-local-ai', 'whatsapp-invoice-automation', 'customer-support-ai-bot', 'zero-cost-ai-setup',
  'ai-security-best-practices', 'future-of-ai-india', 'cyberteck-vision-2026'
].forEach(post => {
  const title = post.split('-').join(' ').toUpperCase();
  LOCATION_SILO[`blog/${post}`] = {
    pillar: 'Insights',
    title: title,
    subtitle: 'Deep technical deep dive.',
    content: `Detailed research and implementation guide for ${title}.`,
    keywords: [post.replace(/-/g, ' '), 'ai blog india'],
    faqs: []
  };
});
