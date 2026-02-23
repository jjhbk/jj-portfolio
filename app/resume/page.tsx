"use client";

import { useEffect } from "react";
import "./resume.css";

export default function ResumePage() {
  useEffect(() => {
    // Auto-print dialog when loaded
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  return (
    <div className="resume-container">
      <button className="print-btn no-print" onClick={() => window.print()}>
        📄 Save as PDF
      </button>

      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">JATHIN JAGANNATH</h1>
        <div className="resume-title">
          AI Systems Engineer & Developer Advocate
        </div>
        <div className="resume-contact">
          <span>jathinjagannath@gmail.com</span>
          <span>|</span>
          <a href="https://www.linkedin.com/in/jathin-jagannath-39670a119/">linkedin.com/in/jathin-jagannath</a>
          <span>|</span>
          <a href="https://github.com/jjhbk">github.com/jathin-jagannath</a>
          <span>|</span>
          <a href="https://x.com/jjhbk26">@jjhbk26</a>
        </div>
      </header>

      {/* Summary */}
      <section className="resume-section">
        <h2 className="resume-section-title">Professional Summary</h2>
        <p style={{ fontSize: '9.5pt', lineHeight: '1.5' }}>
          AI Systems Engineer and Developer Advocate with ~5 years of experience building production AI agents, 
          verifiable ML pipelines, and developer ecosystems. Specialized in LLM systems, agentic AI, on-chain ML, 
          and developer relations. Proven track record of delivering 25+ technical workshops globally, reaching 1,000+ developers. 
          Passionate about AI safety, interpretability, and building observable, trustworthy AI systems.
        </p>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>

        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Founder & Developer</span>
            <span className="resume-item-date">Nov 2024 — Present</span>
          </div>
          <div className="resume-item-company">Sahaai — AI Agent Hub</div>
          <ul className="resume-item-desc">
            <li>Designed and built Sahaai, an AI Agent Hub/marketplace for automating real-world workflows with Gen AI, Web3, and full-stack systems</li>
            <li>Created crypto AI agent enabling blockchain transactions and NFT minting via natural language using Solidity, Langchain, and LLMs</li>
            <li>Built Rasphia, an AI-native conversational commerce platform using RAG + multimodal models for cross-site product search</li>
            <li>Implemented containerized Python backend supporting modular multi-agent orchestration, optimized for horizontal scalability</li>
            <li>Achieved 300+ user sessions, 100+ active users, 10+ automated workflows in production</li>
            <li>Developed evaluation harnesses for prompt sensitivity testing and behavior regression detection</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Developer Advocate</span>
            <span className="resume-item-date">Jan 2023 — Oct 2024</span>
          </div>
          <div className="resume-item-company">Cartesi</div>
          <ul className="resume-item-desc">
            <li>Led integration of LLaMA into RISC-V architecture to enable deterministic, verifiable LLM computation on-chain</li>
            <li>Enabled decentralized ML: Stable Diffusion, KNN classifiers, image recognition systems deployed on-chain</li>
            <li>Delivered 25+ technical workshops globally at ETHGlobal, Hackathons, Web3 AI Summits — reaching 1,000+ developers</li>
            <li>Identified critical pain point: RISC-V Python compilation causing 2–3 hour builds → implemented prebuilt binaries, achieving 87–90% reduction</li>
            <li>Created official Cartesi Quickstart Udemy course for deploying containerized dApps on-chain</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Blockchain Engineer</span>
            <span className="resume-item-date">Feb 2022 — Jan 2023</span>
          </div>
          <div className="resume-item-company">Accumulate Network</div>
          <ul className="resume-item-desc">
            <li>Contributed to Accumulate Network — open-source L2 blockchain for RWA tokenization with Cosmos-SDK; 10–20k active wallets</li>
            <li>Designed and enhanced CLI tooling for account management, key operations, transaction queries</li>
            <li>Implemented wallet initialization with local daemon integration via JSON-RPC and Unix-socket-based wallet access</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Founder & CTO</span>
            <span className="resume-item-date">Jan 2019 — Feb 2022</span>
          </div>
          <div className="resume-item-company">Vyaan Health</div>
          <ul className="resume-item-desc">
            <li>Founded Vyaan Health Smart Respirator — sold 35,000+ units, ~4M INR revenue</li>
            <li>Built and scaled e-commerce platform and B2B partnerships, driving customer acquisition and retention</li>
            <li>Trained TensorFlow Lite model on Coswara dataset for respiratory health metrics; achieved 92% accuracy</li>
            <li>Deployed ML on-device (Android) with 200–300ms inference latency for real-time health assessment</li>
            <li>Developed cross-platform mobile app (React Native) with AQI alerts, filter tracking, breathing exercises</li>
            <li>Designed cloud pipeline for data storage and predictive analytics for longitudinal tracking</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2 className="resume-section-title">Featured Projects</h2>
        <ul className="resume-item-desc">
          <li><strong>Sahaai</strong> — AI Agent Hub with crypto agents, browser automation, multi-LLM orchestration (300+ sessions, 100+ users)</li>
          <li><strong>Rasphia</strong> — AI-native conversational commerce using RAG + multimodal models (OpenAI, Claude, Gemini)</li>
          <li><strong>LLaMA on RISC-V</strong> — First-of-kind verifiable LLM computation on-chain using Cartesi Rollups</li>
          <li><strong>Agent Eval Kit</strong> — Open-source toolkit for evaluating LLM agents with prompt sensitivity testing</li>
          <li><strong>MCP Toolkit</strong> — Model Context Protocol implementation for context-aware AI agents</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2 className="resume-section-title">Technical Skills</h2>
        <div className="resume-skills">
          <span className="resume-skill core">LLMs</span>
          <span className="resume-skill core">Langchain</span>
          <span className="resume-skill core">Agentic AI</span>
          <span className="resume-skill core">RAG Systems</span>
          <span className="resume-skill core">Multi-Agent Orchestration</span>
          <span className="resume-skill core">Solidity</span>
          <span className="resume-skill core">Developer Advocacy</span>
          <span className="resume-skill">Python</span>
          <span className="resume-skill">TypeScript</span>
          <span className="resume-skill">Next.js</span>
          <span className="resume-skill">PyTorch</span>
          <span className="resume-skill">TensorFlow</span>
          <span className="resume-skill">TFLite</span>
          <span className="resume-skill">Docker</span>
          <span className="resume-skill">RISC-V</span>
          <span className="resume-skill">Cosmos-SDK</span>
          <span className="resume-skill">Golang</span>
          <span className="resume-skill">FastAPI</span>
          <span className="resume-skill">React Native</span>
          <span className="resume-skill">AI Safety</span>
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <span className="resume-item-title">Master of Science in Physics</span>
            <span className="resume-item-date">2018</span>
          </div>
          <div className="resume-item-company">Indian Institute of Technology (IIT) Roorkee</div>
        </div>
      </section>
    </div>
  );
}
