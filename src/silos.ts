import { SiloMap } from './types';
import { WHATSAPP_SILO } from './data/silos/whatsapp';
import { OLLAMA_SILO } from './data/silos/ollama';
import { N8N_SILO } from './data/silos/n8n';
import { NICHE_SILO } from './data/silos/niches';
import { LOCATION_SILO } from './data/silos/locations';
import { INFRA_SILO } from './data/silos/infra';
import { SEO_SILO } from './data/silos/seo';
import { STARTUP_SILO } from './data/silos/startups';

export const SILO_DATA: SiloMap = {
  ...WHATSAPP_SILO,
  ...OLLAMA_SILO,
  ...N8N_SILO,
  ...NICHE_SILO,
  ...LOCATION_SILO,
  ...INFRA_SILO,
  ...SEO_SILO,
  ...STARTUP_SILO
};
