import { SiloMap } from '../../types';

export const WHATSAPP_SILO: SiloMap = {
  'whatsapp-ai': {
    pillar: 'WhatsApp AI',
    title: 'WhatsApp AI Automation for India',
    subtitle: 'Deploy 24/7 AI agents on WhatsApp with zero monthly API costs.',
    content: 'The ultimate guide to self-hosting WhatsApp AI in 2026. Eliminate OpenAI per-message fees forever.',
    longSections: [
      {
        heading: 'The Indian WhatsApp Economy & AI Sovereignty',
        body: 'In 2026, WhatsApp is no longer just a messaging app in India; it is the primary interface for digital commerce. With over 500 million active users from Kochi to Kanpur, the platform represents the single biggest opportunity for business automation. However, the reliance on high-cost cloud LLMs creates a "token trap" where scaling actually hurts margins. CyberTeck advocates for AI Sovereignty—running your own Llama 3 or Mistral models locally in your Kerala office or data center, integrated via n8n to the WhatsApp Business API. This approach eliminates per-message fees and keeps sensitive Indian consumer data within your control.'
      },
      {
        heading: 'Strategic Implementation: Beyond Simple Chatbots',
        body: 'A truly recursive SEO strategy for WhatsApp AI involves more than just answering FAQs. It creates a complete lifecycle for the customer. Our deployments feature: (1) Instant lead qualification via local RAG (Retrieval Augmented Generation), (2) Seamless handoff to human agents when complex sentiment is detected, and (3) Automated re-engagement loops based on purchase history. By distributing authority across 19+ specialized use-case pages, we provide the most comprehensive technical resource for AI automation in the subcontinent.'
      },
      {
        heading: 'Zero-Cost Scaling for Bharat',
        body: 'For a business in Ernakulam handling 10,000 queries a day, the cost difference between OpenAI and self-hosted Ollama is staggering—potentially saving ₹5,00,000 per year. Our infrastructure setup uses secure Cloudflare tunnels and enterprise-grade servers to ensure that even a local "Free" bot performs with 99.9% reliability. We don\'t just deploy software; we architect the backbone of your future digital operations.'
      }
    ],
    faqs: [
      {
        question: 'How does running AI locally in Kochi reduce my monthly costs?',
        answer: 'By self-hosting Ollama models on your own server (or a private VPS), you bypass the "pay-per-token" model used by cloud providers. You pay once for the hardware/setup and nothing for the actual messages processed by the AI.'
      },
      {
        question: 'Can the WhatsApp bot handle Malayalam and regional dialects?',
        answer: 'Absolutely. We use specifically fine-tuned models that understand Manglish (Malayalam-English) and regional nuances common in Kerala, ensuring a natural conversation flow for local customers.'
      },
      {
        question: 'Is it legal to use the WhatsApp API for automated sales in India?',
        answer: 'Yes, as long as you use the Official WhatsApp Business API and comply with Meta\'s commerce policies. We ensure all our integrations are 100% compliant and follow best practices for opt-ins.'
      },
      {
        question: 'What hardware do I need for a high-volume WhatsApp AI agent?',
        answer: 'For small businesses, a dedicated PC with an NVIDIA RTX GPU is sufficient. For enterprises in business hubs like Infopark, we recommend rack-mount servers with NVIDIA A-series GPUs for handling thousands of concurrent sessions.'
      }
    ],
    keywords: ['whatsapp ai bot', 'zero cost whatsapp automation', 'whatsapp cloud api india']
  },
  // Sub-pages (Adding these to reach 100)
  'whatsapp-ai/india': { pillar: 'WhatsApp AI', title: 'India-Specific WhatsApp AI', subtitle: 'Optimized for Indian networks.', content: 'Focusing on 4G/5G latency and regional language nuances.', keywords: ['whatsapp india', 'regional ai bot'] },
  'whatsapp-ai/free-bot': { pillar: 'WhatsApp AI', title: 'Free WhatsApp AI Bot Guide', subtitle: 'Step by step to zero cost.', content: 'Technical manual for deploying n8n and Ollama.', keywords: ['free ai bot', 'self hosted whatsapp'] },
  'whatsapp-ai/razorpay': { pillar: 'WhatsApp AI', title: 'WhatsApp Razorpay Integration', subtitle: 'Automate payments on chat.', content: 'Connect Razorpay API to n8n for automated payment collection.', keywords: ['whatsapp razorpay', 'payment bot'] },
  'whatsapp-ai/malayalam': { pillar: 'WhatsApp AI', title: 'Malayalam WhatsApp AI', subtitle: 'Native support for Kerala.', content: 'Fine-tuned models for Malayalam script and dialect.', keywords: ['malayalam ai', 'kerala whatsapp bot'] },
  'whatsapp-ai/hindi': { pillar: 'WhatsApp AI', title: 'Hindi WhatsApp AI Bot', subtitle: 'Speak to Bharat.', content: 'Supporting the largest demographic in India with high-quality Hindi AI.', keywords: ['hindi ai bot', 'whatsapp hindi'] },
  'whatsapp-ai/tally': { pillar: 'WhatsApp AI', title: 'WhatsApp Tally Integration', subtitle: 'Accounting on the go.', content: 'Automate invoice generation and ledger checks via WhatsApp.', keywords: ['tally whatsapp', 'accounting automation'] },
  'whatsapp-ai/zoho': { pillar: 'WhatsApp AI', title: 'Zoho CRM WhatsApp Bot', subtitle: 'Sync leads to Zoho.', content: 'Real-time lead syncing between WhatsApp and Zoho CRM.', keywords: ['zoho whatsapp', 'crm sync'] },
  'whatsapp-ai/salesforce': { pillar: 'WhatsApp AI', title: 'Salesforce WhatsApp Agent', subtitle: 'Enterprise CRM integration.', content: 'High-volume lead handling for Salesforce users.', keywords: ['salesforce whatsapp', 'enterprise bot'] },
  'whatsapp-ai/google-sheets': { pillar: 'WhatsApp AI', title: 'WhatsApp to Google Sheets', subtitle: 'Simple data logging.', content: 'Log every customer interaction to Sheets for easy analysis.', keywords: ['whatsapp sheets', 'data logging'] },
  'whatsapp-ai/customer-support': { pillar: 'WhatsApp AI', title: 'AI Support Desk WhatsApp', subtitle: 'Automate 80% of tickets.', content: 'Reduce support overhead with an intelligent WhatsApp agent.', keywords: ['whatsapp support', 'customer service ai'] },
  'whatsapp-ai/payments': {
    pillar: 'WhatsApp AI',
    title: 'WhatsApp AI Payment Gateway Integration',
    subtitle: 'Razorpay, PhonePe & UPI Automation on WhatsApp.',
    content: 'Transform WhatsApp into a high-conversion sales channel. Securely integrate major Indian payment gateways to collect payments, send GST invoices, and automate reminders without any per-message AI costs.',
    longSections: [
      {
        heading: 'Automated Payment Collection via n8n',
        body: 'Manual payment follow-ups are the biggest bottleneck for Indian SMEs. Our stack uses n8n to connect your payment gateway (Razorpay, PhonePe, or Cashfree) directly to the WhatsApp Business API. When a customer confirms an order via the AI bot, a unique UPI or payment link is generated and sent instantly. Once the payment is successful, n8n receives a webhook and automatically triggers the next step—sending a confirmation and a GST-compliant invoice.'
      },
      {
        heading: 'The Power of UPI & WhatsApp',
        body: 'UPI is the backbone of Indian digital payments. By integrating UPI Deep Links or QR codes into your WhatsApp AI flow, you allow customers to pay in two taps. Combined with our zero-cost local AI (Ollama), you eliminate the middleman fees usually associated with "Smart Payment Link" services, keeping your operational costs to the absolute minimum.'
      },
      {
        heading: 'Automated Invoicing & Reminders',
        body: 'Late payments kill cash flow. Our AI doesn\'t just wait for payments; it nurtures them. If a payment link remains unpaid, the system can send polite, automated reminders at optimized intervals (e.g., 1 hour and 24 hours later). Upon payment, it pulls data from your CRM or ERP (like Tally or Zoho) to generate and deliver a PDF invoice right inside the chat.'
      }
    ],
    faqs: [
      {
        question: 'Is it safe to collect payments through a WhatsApp bot?',
        answer: 'Yes. We do not process the payment ourselves. The bot simply facilitates the transaction by generating links for regulated gateways like Razorpay or PhonePe. The actual financial transaction happens on the gateway\'s secure interface.'
      },
      {
        question: 'Does this integration support UPI Intent flows?',
        answer: 'Absolutely. On mobile devices, clicking the payment link can automatically open the user\'s preferred UPI app (GPay, PhonePe, Paytm) for a seamless "Intent" based checkout experience.'
      },
      {
        question: 'Can I send automated GST invoices?',
        answer: 'Yes, by connecting your accounting software (like Tally, Zoho Books, or even a custom Google Sheet) to the n8n workflow, we can generate and send GST invoices as PDF attachments immediately after payment confirmation.'
      }
    ],
    keywords: ['whatsapp razorpay integration', 'whatsapp upi payment bot', 'automated invoicing whatsapp', 'n8n payment automation india', 'phonepe whatsapp integration']
  },
  'whatsapp-ai/ecommerce': {
    pillar: 'WhatsApp AI',
    title: 'WhatsApp AI for E-commerce',
    subtitle: 'Scale your online store with zero API costs.',
    content: 'Automate your e-commerce customer journey on WhatsApp. From order tracking to personalized AI recommendations, all running on your own infrastructure.',
    longSections: [
      {
        heading: 'Revolutionizing E-commerce Support',
        body: 'E-commerce businesses in India face massive support volumes. Customers frequently ask "Where is my order?" or "Is this in stock?". By implementing a self-hosted AI agent on WhatsApp, you can automate these repetitive queries instantly. Our stack connects your Shopify or WooCommerce store directly to a local Ollama instance, providing accurate real-time data without the per-message fees of cloud AI providers.'
      },
      {
        heading: 'Personalized Recommendations and Upselling',
        body: 'Beyond support, AI can drive revenue. Our WhatsApp AI analyzes customer purchase history to suggest relevant products. Imagine a customer checking their order status and being offered a matching accessory based on their style preferences—all handled by a privacy-first AI that understands the Indian consumer.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle order tracking on WhatsApp?',
        answer: 'We use n8n to fetch the latest tracking info from your shipping provider or website database and present it neatly to the customer on WhatsApp.'
      },
      {
        question: 'Is it possible to automate returns and exchanges?',
        answer: 'Yes, the AI can guide customers through your return policy and generate the necessary tickets in your backend system automatically.'
      }
    ],
    keywords: ['whatsapp ecommerce', 'ecommerce automation india', 'whatsapp shop bot', 'zero cost ecommerce ai']
  },
  'whatsapp-ai/real-estate': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Real Estate', subtitle: 'Automate lead tours and follow-ups.', content: 'Capture high-value real estate leads 24/7. AI agents handle initial property queries and schedule site visits automatically.', keywords: ['real estate whatsapp', 'property bot india'] },
  'whatsapp-ai/education': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Education', subtitle: 'Automated student support & course info.', content: 'Help students get instant answers about course details, fee structures, and schedules.', keywords: ['education bot', 'whatsapp student support'] },
  'whatsapp-ai/logistics': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Logistics', subtitle: 'Real-time fleet tracking and delivery updates.', content: 'Connect your dispatch system to WhatsApp for automated cargo status updates.', keywords: ['logistics bot', 'delivery tracking whatsapp'] },
  'whatsapp-ai/hotel-booking': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Hotels', subtitle: 'Automate room service and bookings.', content: 'Allow guests to book rooms or order services directly from their phone.', keywords: ['hotel bot', 'whatsapp room service'] },
  'whatsapp-ai/hr-automation': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for HR', subtitle: 'Screen candidates and schedule interviews.', content: 'Automate the first round of candidate screening on WhatsApp.', keywords: ['hr automation', 'recruitment bot'] },
  'whatsapp-ai/dentist-booking': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Dentists', subtitle: 'Automate appointment reminders and bookings.', content: 'Native clinical support bot for dental practices.', keywords: ['dentist bot', 'dental ai support'] },
  'whatsapp-ai/travel-agent': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Travel Agents', subtitle: 'Build itineraries automatically.', content: 'AI-driven travel planning on chat.', keywords: ['travel agent bot', 'itinerary ai'] },
  'whatsapp-ai/car-rental': { pillar: 'WhatsApp AI', title: 'WhatsApp AI for Car Rentals', subtitle: 'Automate vehicle bookings.', content: 'Manage fleet availability and rental agreements on WhatsApp.', keywords: ['car rental bot', 'whatsapp fleet management'] },
};
