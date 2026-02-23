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
  {
    id: "gsdbot",
    num: "PROJECT_06",
    name: "GSDBot",
    description:
      "A kernel-based operating system for AI agents with safety-first design. Provides robust, secure, and scalable platform for running AI agents with centralized control, system call interface, and fine-grained permission system.",
    tags: ["Rust", "AI Safety", "Kernel", "OS", "TUI", "Event Sourcing", "Agents"],
    metrics: [
      { value: "Kernel", label: "Architecture" },
      { value: "Active", label: "Development" },
    ],
    features: [
      "Kernel-based architecture with centralized safety enforcement",
      "System call interface for controlled agent operations",
      "Device abstraction layer for LLMs and tools",
      "Fine-grained permission system and security policies",
      "Event sourcing with complete audit trail",
      "Task tree management with hierarchical organization",
      "Interactive TUI for real-time monitoring",
    ],
    links: {
      github: "https://github.com/jjhbk/gsdbot",
    },
    status: "in-development",
  },
  {
    id: "vailam",
    num: "PROJECT_07",
    name: "Vailam",
    description:
      "Confidential AI via TEEs — privacy-focused LLM infrastructure that uses Trusted Execution Environments to provide cloud-based inference with strong confidentiality guarantees. End-to-end encrypted with X25519 key exchange and AES-GCM.",
    tags: ["TEE", "Confidential AI", "Python", "Flask", "Docker", "Cryptography", "Privacy"],
    metrics: [
      { value: "TEE", label: "Architecture" },
      { value: "E2E", label: "Encrypted" },
    ],
    features: [
      "Prompts encrypted in browser, decrypted only inside hardware-isolated enclave",
      "Inference runs in isolated memory with no plaintext touching disk or logs",
      "Flask-based agent with ECDH encryption and MCP integration for tool calls",
      "X25519 key exchange with AES-GCM for end-to-end encrypted chat",
      "Containerized Docker deployment on Fly.io",
      "Privacy enforced by architecture — not policy",
    ],
    links: {
      github: "https://github.com/jjhbk/vailam",
      website:"https://www.vailam.com/"
    },
    status: "in-development",
  },
  
  {
    id: "humanlayer",
    num: "PROJECT_09",
    name: "HumanLayer",
    description:
      "Decentralized Services Marketplace — a blockchain-powered freelance platform with escrow payments, AI integration, and dispute resolution. Built with Next.js, Node.js, Prisma, PostgreSQL, and Solidity on Base.",
    tags: ["Next.js", "Solidity", "Node.js", "Prisma", "PostgreSQL", "Base", "MCP", "Wagmi"],
    metrics: [
      { value: "Base", label: "Mainnet" },
      { value: "Live", label: "Demo" },
    ],
    features: [
      "Smart contract escrow for trustless transactions between buyers and providers",
      "Quote-to-Order workflow: custom quotes → provider quotes → escrow deposit → milestone delivery",
      "Dual authentication: Email/password and wallet-based (SIWE) with JWT refresh tokens",
      "Provider dashboard with analytics, order management, and revenue tracking",
      "On-chain dispute resolution with admin arbitration",
      "API Key system for AI agents and third-party integrations",
      "Real-time updates with optimized polling (80% query reduction)",
      "State machine enforcement for order lifecycle (PENDING → CONFIRMED → IN_PROGRESS → DELIVERED → COMPLETED)",
    ],
    links: {
      github: "https://github.com/jjhbk/humanTouch",
      demo: "https://lokham.xyz/",
    },
    status: "live",
  },

  {
    id: "sivex",
    num: "PROJECT_08",
    name: "Sivex",
    description:
      "Agentic Market Coordination Layer — a decentralized marketplace where autonomous AI agents discover tasks, compete through bidding, execute work, and receive payment via smart contracts. Human-in-the-loop review with trustless escrow payments.",
    tags: ["Fastify", "Solidity", "Next.js", "TypeScript", "MCP", "Turborepo", "Web3"],
    metrics: [
      { value: "Monorepo", label: "Architecture" },
      { value: "Live", label: "Demo" },
    ],
    features: [
      "Real-time task discovery via SSE broadcasting",
      "Competitive bidding system based on agent capabilities and reputation",
      "On-chain escrow for automatic payment settlement",
      "Human-in-the-loop review workflow",
      "Multi-agent orchestration with isolated runtimes",
      "Fastify + SQLite backend with Server-Sent Events",
      "Solidity escrow contract (Foundry) for trustless payments",
    ],
    links: {
      github: "https://github.com/jjhbk/sivex",
    },
    status: "archived",
  },
  {
    id: "hiredaf",
    num: "PROJECT_10",
    name: "HiredAF",
    description:
      "AI-Powered Resume Builder & Mock Interview Platform — combines intelligent resume optimization with role-specific AI mock interviews. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Anthropic Claude API.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Anthropic", "AI", "shadcn/ui"],
    metrics: [
      { value: "Next.js 16", label: "Framework" },
      { value: "Live", label: "Production" },
    ],
    features: [
      "Intelligent Resume Optimizer — Anthropic Claude API rewrites resume bullet points to incorporate missing keywords from job descriptions",
      "AI Mock Interview Platform — Multi-round simulator with 11 role-specific configurations (SWE, Frontend, Backend, Data Science, PM, UX, etc.)",
      "11 interview types: behavioral, technical, coding, system design, and HR rounds with progressive difficulty",
      "Guided Skills Wizard — Multi-step flow that detects user experience and auto-adds relevant skills",
      "Session Persistence — LocalStorage-based interview history with scoring and round-by-round feedback",
      "PDF Processing & Export — Client-side PDF parsing, DOCX generation for resumes, and cover letter creation",
    ],
    links: {
      github: "https://github.com/jjhbk/HiredAF",
      demo: "https://www.hiredaf.xyz/",
    },
    status: "live",
  },
];
