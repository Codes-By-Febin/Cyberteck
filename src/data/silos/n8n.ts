import { SiloMap } from '../../types';

export const N8N_SILO: SiloMap = {
  'n8n-automation': {
    pillar: 'n8n Automation',
    title: 'n8n Workflow Automation India',
    subtitle: 'The open source Zapier alternative.',
    content: 'Mastering n8n for Indian enterprise scale.',
    longSections: [
      { 
        heading: 'Escaping the SaaS Subscription Trap', 
        body: 'In the high-growth phase of an Indian business, automation is essential. However, platforms like Zapier or Make charge per "task" or "operation," creating a ceiling on your efficiency. Self-hosted n8n is the ultimate antidote. By deploying n8n on your own infrastructure (AWS Mumbai, DigitalOcean Bangalore, or local servers in Kochi), you unlock infinite scalability. You can process millions of data rows, sync thousands of leads, and automate complex logic chains without the monthly bill reaching lakhs of rupees.' 
      },
      {
        heading: 'The Kochi Automation Playbook',
        body: `We’ve engineered a library of production-ready n8n templates specifically for the Indian business ecosystem. These are battle-tested workflows used by firms across Kerala:
        
        - **Lead Machine Alpha:** Full-stack lead processing. Scrapes Facebook/Instagram Ads, passes data to a local Ollama instance for sentiment analysis, and updates Zoho CRM while initiating a WhatsApp introduction.
        - **The GST Automatician:** Listen for successful payments on Razorpay/PhonePe, pull customer details from a Google Sheet, and generate/send a GST-compliant PDF invoice over WhatsApp within 10 seconds.
        - **Supply Chain Pulse:** Monitor inventory levels in WooCommerce, automatically generate Purchase Orders when stock is low, and alert the procurement team via Telegram.`
      },
      {
        heading: 'High-Availability Architectures for Bharat',
        body: 'For mission-critical operations, a single-instance setup isn\'t enough. We specialize in deploying n8n in Queue Mode with Redis and PostgreSQL on high-performance Linux clusters. This ensures that even during a massive traffic surge—like a festive sale—your automation engine remains responsive and resilient. We bring Infopark-grade engineering to every SME we serve.'
      }
    ],
    faqs: [
      {
        question: 'Is n8n really free to use for my business?',
        answer: 'Yes, n8n\'s "Fair-Code" license allows you to self-host and use the standard version for free in most business environments. For advanced features like single sign-on or external logging, an enterprise license is required, but the core automation power remains accessible without recurring fees.'
      },
      {
        question: 'How difficult is it to migrate from Zapier to n8n?',
        answer: 'While the logic is similar, the interface is more powerful and visual. We provide full migration services where we replicate your existing Zapier Zaps into n8n workflows, often improving them with conditional logic that Zapier makes difficult or expensive.'
      }
    ],
    keywords: ['n8n automation india', 'zapier alternative self hosted', 'workflow automation kochi', 'n8n expert kerala']
  }
};

// Generate 19 more n8n pages with richer content
[
  { id: 'whatsapp', title: 'n8n WhatsApp API Automation', desc: 'The gold standard for zero-cost chat automation.' },
  { id: 'ollama', title: 'n8n & Ollama AI Integration', desc: 'Connecting local LLMs directly to your business workflows.' },
  { id: 'zoho', title: 'n8n Zoho CRM Integration', desc: 'Bi-directional lead sync without per-task fees.' },
  { id: 'shopify', title: 'n8n Shopify Store Automation', desc: 'From order confirm to delivery notifications.' },
  { id: 'security', title: 'n8n Hardening & Security', desc: 'Enterprise-grade security for your self-hosted engine.' }
].forEach(sub => {
  N8N_SILO[`n8n-automation/${sub.id}`] = {
    pillar: 'n8n Automation',
    title: sub.title,
    subtitle: `Scalable ${sub.id} automation solutions.`,
    content: `${sub.desc} Engineered for high-performance Indian business ecosystems.`,
    keywords: [`n8n ${sub.id}`, `automate ${sub.id} india`, `n8n workflow ${sub.id}`],
    faqs: [
      { question: `How secure is the ${sub.id} connection?`, answer: `We use encrypted credential storage and TLS 1.3 to ensure all data between n8n and ${sub.id} is invisible to third parties.` }
    ]
  };
});
