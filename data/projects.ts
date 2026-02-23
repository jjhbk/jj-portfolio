export interface Project {
  id: string;
  num: string;
  name: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  features?: string[];
  featured?: boolean;
  links?: {
    demo?: string;
    github?: string;
    website?: string;
    docs?: string;
  };
  status?: "live" | "in-development" | "archived";
}

export const projects: Project[] = [
  {
    id: "sahaai",
    num: "PROJECT_01",
    name: "Sahaai",
    description:
      "AI Agent Hub & marketplace enabling real-world workflow automation. Combines crypto agents (blockchain transactions, NFT minting via natural language), browser automation, and a multi-LLM orchestration backend. USDC escrow and reputation system built-in for developer monetization.",
    tags: ["Langchain", "OpenAI", "Claude", "Solidity", "Next.js", "Python", "Web3", "Docker"],
    metrics: [
      { value: "300+", label: "User Sessions" },
      { value: "100+", label: "Active Users" },
      { value: "10+", label: "Live Workflows" },
    ],
    features: [
      "Multi-agent orchestration",
      "Containerized modular backend",
      "Web3 wallet auth + chat history",
      "Eval harnesses for behavior regression",
    ],
    featured: true,
    links: {
      demo: "https://sahaaai.com",
      github: "https://github.com/jjhbk/Sahaai",
    },
    status: "live",
  },
  {
    id: "rasphia",
    num: "PROJECT_02",
    name: "Rasphia",
    description:
      "AI-native conversational commerce platform using RAG + multimodal models to search, compare, and purchase across multiple e-commerce sites using natural language.",
    tags: ["RAG", "Multimodal", "OpenAI", "Gemini", "Claude", "Next.js", "TypeScript"],
    metrics: [
      { value: "3", label: "LLM Platforms" },
      { value: "Live", label: "Production" },
    ],
    links: {
      website: "https://rasphia.com",
      demo: "https://chromewebstore.google.com/detail/lhcccmjjmabkbaiidfeljkmheodijgmc?utm_source=item-share-cb",
    },
    status: "live",
  },
  {
    id: "llama-riscv",
    num: "PROJECT_03",
    name: "LLaMA on RISC-V",
    description:
      "Integration of LLaMA into RISC-V architecture enabling deterministic, verifiable LLM computation on-chain. First-of-kind implementation for auditable AI inference.",
    tags: ["LLaMA", "RISC-V", "Docker", "Cartesi", "Python", "Web3"],
    metrics: [{ value: "On-chain", label: "Verifiable LLM" }],
    links: {
      github: "https://github.com/jjhbk",
    },
    status: "live",
  },
  {
    id: "vyaan-health",
    num: "PROJECT_04",
    name: "Vyaan Smart Respirator",
    description:
      "Mobile-powered respiratory health monitoring with on-device ML inference. TensorFlow Lite model detecting coughs, wheezing, and breathing anomalies at 200–300ms latency.",
    tags: ["TFLite", "Edge ML", "React Native", "Android", "IoT"],
    metrics: [
      { value: "35K+", label: "Units Sold" },
      { value: "92%", label: "Accuracy" },
    ],
    links: {
      website: "https://www.youtube.com/@vyaanpurifiers2411",
    },
    status: "live",
  },
  {
    id: "cartesi-privado",
    num: "PROJECT_05",
    name: "Cartesi-Privado ID",
    description:
      "Integration tool combining Cartesi's verifiable compute with decentralized identity (DID), enabling on-chain identity verification workflows. Achieved strong adoption among builders.",
    tags: ["DID", "Cartesi", "Web3", "Identity", "Solidity"],
    metrics: [{ value: "High", label: "Adoption Rate" }],
    links: {
      github: "https://medium.com/@jathinjagannath/building-secure-scalable-and-private-dapps-with-decentralized-identity-management-f755991f012b",
      docs: "https://docs.cartesi-privado.id",
    },
    status: "live",
  },
  
];
