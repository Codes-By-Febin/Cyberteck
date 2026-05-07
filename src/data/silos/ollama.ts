import { SiloMap } from '../../types';

export const OLLAMA_SILO: SiloMap = {
  'ollama-local-ai': {
    pillar: 'Ollama Local AI',
    title: 'Ollama Local AI Enterprise Guide',
    subtitle: 'High performance. Zero API costs. Total Privacy.',
    content: 'Comprehensive enterprise guide to Ollama deployments in India.',
    longSections: [
      { 
        heading: 'The Sovereign AI Mandate: Local LLMs for Indian Enterprise', 
        body: 'In an era where data is the new oil, sovereignty is the only security. With the Digital Personal Data Protection (DPDP) Act now in effect in India, enterprise reliance on foreign SaaS AI models is a serious regulatory risk. Ollama offers a strategic exit from the "Cloud Tax" and "Privacy Vacuum." By deploying models like Llama 3.1, Mistral Nemo, and Phi-3 locally on your Kerala-based hardware, you ensure that every prompt and every response remains within your secure firewall. This is not just a cost-saving measure; it is a fundamental pillar of modern organizational security.' 
      },
      {
        heading: 'Optimizing Token-per-Second (TPS) in Regional Hubs',
        body: 'Latency is the killer of AI usability. While cloud models suffer from variable API round-trip times, a local Ollama server in a Kochi business park can deliver tokens at speeds exceeding human reading levels. Our specialized NVIDIA GPU configurations (from RTX 4090 builds to Enterprise A100 clusters) are fine-tuned to maximize inference speed for multi-user environments. We don\'t just install software; we optimize the entire low-level CUDA stack to ensure your AI feels instantaneous for your team.'
      },
      {
        heading: 'RAG (Retrieval Augmented Generation) at Scale',
        body: 'The real power of local AI lies in its ability to securely "talk" to your internal data. We implement Local RAG pipelines that allow Ollama to scan your company\'s PDFs, whitepapers, and local databases without uploading a single byte to the internet. Imagine a private AI that knows your entire product inventory, history, and internal SOPs, responding with 100% accuracy and zero latency—all running on a server in your back office.'
      }
    ],
    faqs: [
      {
        question: 'Is Ollama really free for commercial use in India?',
        answer: 'Yes, Ollama itself is open-source. However, you are responsible for the license terms of the models you run (e.g., Meta Llama 3 license). Most popular models are free or have very generous terms for business use below a certain revenue threshold.'
      },
      {
        question: 'What kind of internet connection is required for local AI?',
        answer: 'Once the models are downloaded, Ollama requires zero internet connection to function. This makes it ideal for high-security environments or areas with inconsistent connectivity, as the AI processing is 100% local.'
      },
      {
        question: 'How do you handle model updates and fine-tuning remotely?',
        answer: 'We set up secure remote management via VPN or Cloudflare Tunnels, allowing our team in Kochi to push model updates, perform health checks, and optimize performance without physically entering your server room.'
      }
    ],
    keywords: ['ollama enterprise', 'local ai india', 'private llm']
  },
  'ollama-local-ai/ubuntu': { pillar: 'Ollama Local AI', title: 'Ollama on Ubuntu 24.04', subtitle: 'Server optimization.', content: 'Linux server setup guide.', keywords: ['ollama ubuntu', 'linux ai'] },
  'ollama-local-ai/docker': { pillar: 'Ollama Local AI', title: 'Ollama Docker Deployment', subtitle: 'Containerize your AI.', content: 'Scaling with Docker and K8s.', keywords: ['ollama docker', 'container ai'] },
  'ollama-local-ai/hpe': { pillar: 'Ollama Local AI', title: 'Ollama on HPE ML350', subtitle: 'Hardware deep dive.', content: 'Enterprise hardware configurations.', keywords: ['hpe ai', 'server hardware'] },
  'ollama-local-ai/nvidia': { pillar: 'Ollama Local AI', title: 'NVIDIA GPU for Ollama', subtitle: 'Price to performance.', content: 'GPU selection guide for Indian businesses.', keywords: ['gpu for ai', 'nvidia india'] },
  'ollama-local-ai/privacy': { pillar: 'Ollama Local AI', title: 'AI Privacy Guide', subtitle: 'Compliance in India.', content: 'How to meet DPDP requirements with local AI.', keywords: ['ai privacy', 'dpdp compliance'] },
};
