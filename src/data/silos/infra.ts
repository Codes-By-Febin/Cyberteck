import { SiloMap } from '../../types';

export const INFRA_SILO: SiloMap = {
  'ai-infra': {
    pillar: 'AI Infra',
    title: 'Enterprise AI Infrastructure & Server Setup',
    subtitle: 'Deploying the backbone of private AI in India.',
    content: 'Comprehensive guide to building, securing, and scaling local AI servers using Ollama, Docker, and enterprise-grade hardware like HPE or Dell.',
    longSections: [
      {
        heading: 'Sovereign Infrastructure: Building the Data Fortress',
        body: 'In the rapidly evolving landscape of AI, the infrastructure you choose defines your operational security. For Indian businesses, "Cloud AI" is often a pseudonym for "Data Export." Our AI Infrastructure services in Kochi focus on reclaiming data sovereignty. We design custom server architectures that host your LLMs locally, ensuring that proprietary business intelligence remains within your physical or virtual private control. From small-format NVIDIA RTX towers to multi-node A100/H100 clusters, we build the fortress that powers your autonomous future.'
      },
      {
        heading: 'Hardware Optimization for Tropical Climates',
        body: 'Setting up an AI server in Kerala presents unique environmental challenges. High humidity and ambient temperatures can drastically shorten the lifespan of high-wattage GPUs. Our engineering team specializes in specialized thermal management—implementing liquid-cooling loops, high-static pressure airflow environments, and industrial-grade de-humidification within server racks. We ensure your NVIDIA hardware operates at peak performance even during the peak of the monsoon or summer heat, maximizing your Return on Computation (ROC).'
      },
      {
        heading: 'Scalable Inference & High-Availability Clusters',
        body: 'As your AI needs grow from a single WhatsApp bot to a company-wide intelligence layer, your infrastructure must scale horizontally. We architect high-availability clusters using Proxmox or Kubernetes, allowing for seamless resource allocation between multiple Ollama model instances and n8n workers. By utilizing load balancers and redundant storage arrays (NVMe RAID 10), we guarantee that your AI services remain online 24/7, even during hardware failures or maintenance windows.'
      }
    ],
    faqs: [
      {
        question: 'Which is better for AI in India: AWS Mumbai or Local Hardware?',
        answer: 'While AWS Mumbai is excellent for rapid prototyping, the long-term cost of continuous GPU instances is 3-4x higher than owning physical hardware. For production-scale AI agents, local hardware in a Kochi colocation facility or your own office typically pays for itself within 8-12 months.'
      },
      {
        question: 'How do you protect local AI servers from Kerala\'s power fluctuations?',
        answer: 'Power stability is critical for GPUs. We mandate the use of double-conversion Online UPS systems with active power factor correction. This ensures a "clean" sine wave and zero-millisecond switching during power outages, protecting your sensitive CUDA cores from voltage spikes.'
      },
      {
        question: 'Can we run multiple LLMs on a single enterprise server?',
        answer: 'Yes, by utilizing NVIDIA VRAM partitioning and containerization (Docker/Proxmox), we can host several models (e.g., Llama 3 for chat, Mistral for summarization, and DeepSeek for coding) on the same physical machine, optimizing your hardware utilization efficiency.'
      }
    ],
    keywords: ['ai server setup india', 'enterprise ollama infrastructure', 'gpu server kochi', 'private ai deployment', 'hpe ai server config']
  },
  'ai-infra/gpu-optimization': {
    pillar: 'AI Infra',
    title: 'NVIDIA GPU Optimization for AI',
    subtitle: 'Maximize token-per-second performance.',
    content: 'Tuning CUDA cores and VRAM allocation for peak Ollama performance on local servers.',
    keywords: ['cuda optimization', 'gpu tuning', 'ai hardware india']
  },
  'ai-infra/security-hardening': {
    pillar: 'AI Infra',
    title: 'AI Server Security & Hardening',
    subtitle: 'Zero-trust architecture for local AI.',
    content: 'Protecting your model weights and customer data from internal and external threats.',
    keywords: ['ai security', 'server hardening', 'data privacy india']
  },
  'ai-infra/hpe-dell-setup': {
    pillar: 'AI Infra',
    title: 'HPE & Dell Enterprise AI Config',
    subtitle: 'Standardized layouts for enterprise clusters.',
    content: 'Detailed specifications for Dell PowerEdge and HPE ProLiant AI server builds.',
    keywords: ['hpe ml350 ai', 'dell poweredge ollama', 'enterprise ai server']
  },
  'ai-infra/proxmox-virtualization': {
    pillar: 'AI Infra',
    title: 'Proxmox Virtualization for AI',
    subtitle: 'Containerize your AI instances.',
    content: 'Running Ollama and n8n on Proxmox VE for maximum resource efficiency.',
    keywords: ['proxmox ai', 'virtualized llm', 'server virtualization india']
  },
  'ai-infra/power-redundancy': {
    pillar: 'AI Infra',
    title: 'Power Redundancy for AI Servers',
    subtitle: 'UPS and Backup in Kerala.',
    content: 'Protecting your server hardware from Kerala\'s power fluctuations and outages.',
    keywords: ['ups for ai server', 'power backup kochi', 'server protection']
  },
  'ai-infra/storage-raid': {
    pillar: 'AI Infra',
    title: 'Storage & RAID for LLMs',
    subtitle: 'High-speed model loading.',
    content: 'NVMe RAID configurations for sub-second model state switching.',
    keywords: ['raid for ai', 'nvme ai storage', 'fast model loading']
  },
  'ai-infra/cooling-humidity': {
    pillar: 'AI Infra',
    title: 'Advanced Cooling & Humidity Control',
    subtitle: 'Kerala-specific server care.',
    content: 'Maintaining hardware longevity in high-humidity tropical environments.',
    keywords: ['server cooling kerala', 'humidity control ai', 'gpu thermal management']
  }
};
