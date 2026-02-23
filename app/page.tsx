"use client";

import { useState, useEffect } from "react";
import { CustomCursor, ScrollReveal, ActiveNav } from "@/components/ClientScripts";

export default function Home() {
  const [openExpIndex, setOpenExpIndex] = useState<number>(0);

  const toggleExp = (index: number) => {
    setOpenExpIndex(openExpIndex === index ? -1 : index);
  };

  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <ActiveNav />

      {/* ── NAV ── */}
      <nav>
        <a href="#hero" className="nav-logo">
          JJ<span>.dev</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="mailto:jathin@example.com" className="nav-cta">
          Hire Me
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-eyebrow">
            <span>Available for AI / Developer Advocate roles</span>
          </div>
          <h1 className="hero-name">
            Jathin
            <br />
            <span className="highlight">Jagannath</span>
          </h1>
          <p className="hero-title">
            <strong>AI Systems Engineer & Developer Advocate</strong> with ~5 years building
            production AI agents, verifiable ML pipelines, and developer ecosystems at the
            intersection of <strong>Gen AI · Web3 · Edge ML</strong>.
          </p>
          <div className="hero-badges">
            <span className="badge active">LLM Systems</span>
            <span className="badge active">Agentic AI</span>
            <span className="badge active">Developer Advocacy</span>
            <span className="badge">Web3 + AI</span>
            <span className="badge">AI Safety</span>
            <span className="badge">RAG Systems</span>
            <span className="badge">On-Device ML</span>
            <span className="badge">Verifiable Compute</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              ↓ View Work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>

          {/* Terminal */}
          <div className="hero-terminal">
            <div className="terminal-bar">
              <div className="terminal-dot r"></div>
              <div className="terminal-dot y"></div>
              <div className="terminal-dot g"></div>
              <span className="terminal-title">~ jathin@ai-systems</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="t-dim">$</span>{" "}
                <span className="t-green">whoami</span>
              </div>
              <div className="t-blue">→ AI Engineer · Dev Advocate · Founder</div>
              <br />
              <div>
                <span className="t-dim">$</span>{" "}
                <span className="t-green">cat expertise.json</span>
              </div>
              <div className="t-dim">{"{"}</div>
              <div>
                &nbsp;&nbsp;<span className="t-blue">&quot;current&quot;</span>:{" "}
                <span className="t-amber">&quot;Sahaai — AI Agent Hub&quot;</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="t-blue">&quot;prev&quot;</span>:{" "}
                <span className="t-amber">&quot;Cartesi DevRel&quot;</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="t-blue">&quot;stack&quot;</span>: [
                <span className="t-amber">&quot;LLMs&quot;</span>,{" "}
                <span className="t-amber">&quot;Langchain&quot;</span>,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="t-amber">&quot;Next.js&quot;</span>,{" "}
                <span className="t-amber">&quot;Solidity&quot;</span>],
              </div>
              <div>
                &nbsp;&nbsp;<span className="t-blue">&quot;iit&quot;</span>:{" "}
                <span className="t-amber">&quot;IIT Roorkee · M.Sc Physics&quot;</span>
              </div>
              <div className="t-dim">{"}"}</div>
              <br />
              <div>
                <span className="t-dim">$</span>{" "}
                <span className="t-green">status --hiring</span>
              </div>
              <div>
                <span className="t-green">✓</span> Open to AI/DevRel opportunities
                <span className="t-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="container">
        <div className="stats-bar reveal">
          <div className="stat-item">
            <span className="stat-number">1K+</span>
            <span className="stat-label">Developers Reached</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Global Workshops</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">120+</span>
            <span className="stat-label">Projects Deployed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">35K</span>
            <span className="stat-label">Hardware Units Sold</span>
          </div>
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num">01 //</span>
            <h2 className="section-title">Experience</h2>
          </div>

          <div className="exp-list reveal">
            {/* Sahaai */}
            <div className={`exp-item ${openExpIndex === 0 ? "open" : ""}`}>
              <div className="exp-header" onClick={() => toggleExp(0)}>
                <div>
                  <div className="exp-role">Founder & Developer</div>
                  <div className="exp-company">Sahaai — AI Agent Hub</div>
                  <div className="exp-tags">
                    <span className="exp-tag">LLMs</span>
                    <span className="exp-tag">Langchain</span>
                    <span className="exp-tag">Next.js</span>
                    <span className="exp-tag">Web3</span>
                    <span className="exp-tag">Multi-Agent</span>
                    <span className="exp-tag">RAG</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="exp-date">Nov 2024 — Present</div>
                  <div className="exp-expand">+</div>
                </div>
              </div>
              <div className="exp-body">
                <div className="exp-content">
                  <ul>
                    <li>
                      Designed and built <span className="exp-highlight">Sahaai</span>, an AI Agent
                      Hub/marketplace for automating real-world workflows, combining Gen AI, Web3,
                      and full-stack systems
                    </li>
                    <li>
                      Created a <span className="exp-highlight">crypto AI agent</span> enabling
                      blockchain transactions and NFT minting via natural language using Solidity,
                      Langchain, and LLMs
                    </li>
                    <li>
                      Built a browser automation agent for complex tasks (groceries, travel
                      planning) via natural language
                    </li>
                    <li>
                      Implemented containerized Python backend supporting modular{" "}
                      <span className="exp-highlight">multi-agent orchestration</span>, optimized
                      for horizontal scalability
                    </li>
                    <li>
                      Built <span className="exp-highlight">Rasphia</span>, an AI-native
                      conversational commerce platform using RAG + multimodal models (OpenAI,
                      Claude, Gemini) for cross-site product search
                    </li>
                    <li>
                      Achieved <span className="exp-highlight">300+ user sessions, 100+ active users</span>,
                      10+ automated workflows in production
                    </li>
                    <li>
                      Developed lightweight <span className="exp-highlight">evaluation harnesses</span>{" "}
                      for prompt sensitivity testing and behavior regression detection
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cartesi */}
            <div className={`exp-item ${openExpIndex === 1 ? "open" : ""}`}>
              <div className="exp-header" onClick={() => toggleExp(1)}>
                <div>
                  <div className="exp-role">Developer Advocate</div>
                  <div className="exp-company">Cartesi</div>
                  <div className="exp-tags">
                    <span className="exp-tag">Developer Relations</span>
                    <span className="exp-tag">On-chain ML</span>
                    <span className="exp-tag">RISC-V</span>
                    <span className="exp-tag">Docker</span>
                    <span className="exp-tag">LLaMA</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="exp-date">Jan 2023 — Oct 2024</div>
                  <div className="exp-expand">+</div>
                </div>
              </div>
              <div className="exp-body">
                <div className="exp-content">
                  <ul>
                    <li>
                      Worked at the forefront of on-chain compute using Cartesi Rollups — L2
                      running Docker/Linux on-chain via RISC-V architecture
                    </li>
                    <li>
                      Led integration of <span className="exp-highlight">LLaMA into RISC-V architecture</span>{" "}
                      to enable deterministic, verifiable LLM computation on-chain
                    </li>
                    <li>
                      Enabled decentralized ML: Stable Diffusion, KNN classifiers, image recognition
                      systems deployed on-chain
                    </li>
                    <li>
                      Delivered <span className="exp-highlight">25+ technical workshops</span> globally
                      at ETHGlobal, Hackathons, Web3 AI Summits — reaching 1,000+ developers
                    </li>
                    <li>
                      Identified critical developer pain point: RISC-V Python package compilation
                      causing 2–3 hour build delays → collaborated with engineering to implement
                      prebuilt binary directory, achieving{" "}
                      <span className="exp-highlight">87–90% reduction</span> in build time and 200%+
                      increase in adoption
                    </li>
                    <li>
                      Created official <span className="exp-highlight">Cartesi Quickstart Udemy course</span>{" "}
                      for deploying containerized dApps on-chain
                    </li>
                    <li>
                      Designed system-level interpretability strategies: made agent steps, tool
                      calls, and constraints explicit for auditability and traceability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accumulate */}
            <div className={`exp-item ${openExpIndex === 2 ? "open" : ""}`}>
              <div className="exp-header" onClick={() => toggleExp(2)}>
                <div>
                  <div className="exp-role">Blockchain Engineer</div>
                  <div className="exp-company">Accumulate Network</div>
                  <div className="exp-tags">
                    <span className="exp-tag">Golang</span>
                    <span className="exp-tag">Cosmos-SDK</span>
                    <span className="exp-tag">CLI Tooling</span>
                    <span className="exp-tag">JSON-RPC</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="exp-date">Feb 2022 — Jan 2023</div>
                  <div className="exp-expand">+</div>
                </div>
              </div>
              <div className="exp-body">
                <div className="exp-content">
                  <ul>
                    <li>
                      Contributed to <span className="exp-highlight">Accumulate Network</span> —
                      open-source Layer-2 blockchain for RWA tokenization built with Cosmos-SDK,
                      Stateful Merkle Tree anchoring, and DPoS; platform achieved 10–20k active
                      wallets
                    </li>
                    <li>
                      Designed and enhanced CLI tooling for key developer workflows: account
                      management, key operations, transaction queries
                    </li>
                    <li>
                      Implemented wallet initialization and vault management with local daemon
                      integration via JSON-RPC and Unix-socket-based wallet access
                    </li>
                    <li>
                      Authored documentation facilitating developer adoption through Accumulate&apos;s
                      identity-based ADIs and key hierarchies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vyaan */}
            <div className={`exp-item ${openExpIndex === 3 ? "open" : ""}`}>
              <div className="exp-header" onClick={() => toggleExp(3)}>
                <div>
                  <div className="exp-role">Founder & CTO</div>
                  <div className="exp-company">Vyaan Health</div>
                  <div className="exp-tags">
                    <span className="exp-tag">TensorFlow Lite</span>
                    <span className="exp-tag">Edge ML</span>
                    <span className="exp-tag">React Native</span>
                    <span className="exp-tag">Android</span>
                    <span className="exp-tag">Hardware</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="exp-date">Jan 2019 — Feb 2022</div>
                  <div className="exp-expand">+</div>
                </div>
              </div>
              <div className="exp-body">
                <div className="exp-content">
                  <ul>
                    <li>
                      Founded and led development of{" "}
                      <span className="exp-highlight">Vyaan Health Smart Respirator</span> — sold
                      35,000+ units, ~4M INR revenue
                    </li>
                    <li>
                      Trained TensorFlow Lite model on Coswara dataset to predict PEFR and detect
                      coughs/wheezing — achieved <span className="exp-highlight">92% accuracy</span>
                    </li>
                    <li>
                      Deployed ML on-device (Android) with{" "}
                      <span className="exp-highlight">200–300ms inference latency</span> for
                      real-time respiratory health assessment
                    </li>
                    <li>
                      Built cross-platform mobile app (React Native) with AQI alerts, filter life
                      tracking, and personalized breathing exercises
                    </li>
                    <li>
                      Led full interdisciplinary team from concept to launch: software, data
                      science, product, manufacturing, supply chain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num">02 //</span>
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-grid reveal">
            {/* Sahaai - Featured */}
            <div className="project-card featured">
              <div>
                <div className="project-num">PROJECT_01 · FEATURED</div>
                <h3 className="project-name">Sahaai</h3>
                <p className="project-desc">
                  AI Agent Hub & marketplace enabling real-world workflow automation. Combines crypto
                  agents (blockchain transactions, NFT minting via natural language), browser
                  automation, and a multi-LLM orchestration backend. USDC escrow and reputation
                  system built-in for developer monetization.
                </p>
                <div className="project-stack">
                  <span className="project-tech">Langchain</span>
                  <span className="project-tech">OpenAI</span>
                  <span className="project-tech">Claude</span>
                  <span className="project-tech">Solidity</span>
                  <span className="project-tech">Next.js</span>
                  <span className="project-tech">Python</span>
                  <span className="project-tech">Web3</span>
                  <span className="project-tech">Docker</span>
                </div>
              </div>
              <div>
                <div className="project-metrics">
                  <div className="metric">
                    <span className="metric-val">300+</span>
                    <br />
                    <span className="metric-key">User Sessions</span>
                  </div>
                  <div className="metric">
                    <span className="metric-val">100+</span>
                    <br />
                    <span className="metric-key">Active Users</span>
                  </div>
                  <div className="metric">
                    <span className="metric-val">10+</span>
                    <br />
                    <span className="metric-key">Live Workflows</span>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-dim)",
                    lineHeight: "1.8",
                    marginTop: "16px",
                    padding: "16px",
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="t-green">▸</span> Multi-agent orchestration
                  <br />
                  <span className="t-green">▸</span> Containerized modular backend
                  <br />
                  <span className="t-green">▸</span> Web3 wallet auth + chat history
                  <br />
                  <span className="t-green">▸</span> Eval harnesses for behavior regression
                </div>
              </div>
            </div>

            {/* Rasphia */}
            <div className="project-card">
              <div className="project-num">PROJECT_02</div>
              <h3 className="project-name">Rasphia</h3>
              <p className="project-desc">
                AI-native conversational commerce platform using RAG + multimodal models to search,
                compare, and purchase across multiple e-commerce sites using natural language.
              </p>
              <div className="project-stack">
                <span className="project-tech">RAG</span>
                <span className="project-tech">Multimodal</span>
                <span className="project-tech">OpenAI</span>
                <span className="project-tech">Gemini</span>
                <span className="project-tech">Claude</span>
              </div>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-val">3</span>{" "}
                  <span className="metric-key">LLM Platforms</span>
                </div>
                <div className="metric">
                  <span className="metric-val">Live</span>{" "}
                  <span className="metric-key">Production</span>
                </div>
              </div>
            </div>

            {/* LLaMA on RISC-V */}
            <div className="project-card">
              <div className="project-num">PROJECT_03</div>
              <h3 className="project-name">LLaMA on RISC-V</h3>
              <p className="project-desc">
                Integration of LLaMA into RISC-V architecture enabling deterministic, verifiable LLM
                computation on-chain. First-of-kind implementation for auditable AI inference.
              </p>
              <div className="project-stack">
                <span className="project-tech">LLaMA</span>
                <span className="project-tech">RISC-V</span>
                <span className="project-tech">Docker</span>
                <span className="project-tech">Cartesi</span>
              </div>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-val">On-chain</span>{" "}
                  <span className="metric-key">Verifiable LLM</span>
                </div>
              </div>
            </div>

            {/* Vyaan Health */}
            <div className="project-card">
              <div className="project-num">PROJECT_04</div>
              <h3 className="project-name">Vyaan Smart Respirator</h3>
              <p className="project-desc">
                Mobile-powered respiratory health monitoring with on-device ML inference.
                TensorFlow Lite model detecting coughs, wheezing, and breathing anomalies at
                200–300ms latency.
              </p>
              <div className="project-stack">
                <span className="project-tech">TFLite</span>
                <span className="project-tech">Edge ML</span>
                <span className="project-tech">React Native</span>
                <span className="project-tech">Android</span>
              </div>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-val">35K+</span>{" "}
                  <span className="metric-key">Units Sold</span>
                </div>
                <div className="metric">
                  <span className="metric-val">92%</span>{" "}
                  <span className="metric-key">Accuracy</span>
                </div>
              </div>
            </div>

            {/* Cartesi Privado */}
            <div className="project-card">
              <div className="project-num">PROJECT_05</div>
              <h3 className="project-name">Cartesi-Privado ID</h3>
              <p className="project-desc">
                Integration tool combining Cartesi&apos;s verifiable compute with decentralized identity
                (DID), enabling on-chain identity verification workflows. Achieved strong adoption
                among builders.
              </p>
              <div className="project-stack">
                <span className="project-tech">DID</span>
                <span className="project-tech">Cartesi</span>
                <span className="project-tech">Web3</span>
                <span className="project-tech">Identity</span>
              </div>
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-val">High</span>{" "}
                  <span className="metric-key">Adoption Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num">03 //</span>
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="skills-section reveal">
            <div className="skill-group">
              <div className="skill-group-title">AI & ML</div>
              <div className="skill-pills">
                <span className="skill-pill core">LLMs</span>
                <span className="skill-pill core">Langchain</span>
                <span className="skill-pill core">RAG Systems</span>
                <span className="skill-pill core">Agentic AI</span>
                <span className="skill-pill core">Multi-Agent Orchestration</span>
                <span className="skill-pill">Anthropic Claude</span>
                <span className="skill-pill">OpenAI</span>
                <span className="skill-pill">Gemini</span>
                <span className="skill-pill">PyTorch</span>
                <span className="skill-pill">TensorFlow</span>
                <span className="skill-pill">TFLite</span>
                <span className="skill-pill">Quantized Models</span>
                <span className="skill-pill">MCP</span>
                <span className="skill-pill">Multimodal Models</span>
                <span className="skill-pill">TTS</span>
                <span className="skill-pill">Scikit-learn</span>
                <span className="skill-pill">Prompt Engineering</span>
                <span className="skill-pill">LLM Eval Frameworks</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-title">Web3 & Systems</div>
              <div className="skill-pills">
                <span className="skill-pill core">Solidity</span>
                <span className="skill-pill core">Verifiable Compute</span>
                <span className="skill-pill core">Smart Contracts</span>
                <span className="skill-pill">Ethereum</span>
                <span className="skill-pill">RISC-V</span>
                <span className="skill-pill">Cartesi Rollups</span>
                <span className="skill-pill">Cosmos-SDK</span>
                <span className="skill-pill">Tendermint</span>
                <span className="skill-pill">DID</span>
                <span className="skill-pill">Docker</span>
                <span className="skill-pill">FastAPI</span>
                <span className="skill-pill">JSON-RPC</span>
                <span className="skill-pill">Golang</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Next.js</span>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-title">Developer Relations & Safety</div>
              <div className="skill-pills">
                <span className="skill-pill core">Developer Advocacy</span>
                <span className="skill-pill core">AI Safety Primitives</span>
                <span className="skill-pill core">System Interpretability</span>
                <span className="skill-pill">Technical Content</span>
                <span className="skill-pill">Eval Frameworks</span>
                <span className="skill-pill">Behavior Regression Detection</span>
                <span className="skill-pill">Agent Auditability</span>
                <span className="skill-pill">Developer Empathy</span>
                <span className="skill-pill">Feedback Loop Design</span>
                <span className="skill-pill">Public Speaking</span>
                <span className="skill-pill">Community Building</span>
                <span className="skill-pill">Workshop Delivery</span>
                <span className="skill-pill">DX Optimization</span>
                <span className="skill-pill">Observable AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num">04 //</span>
            <h2 className="section-title">About</h2>
          </div>

          <div className="about-grid reveal">
            <div className="about-text">
              <p>
                I&apos;m a builder at the intersection of{" "}
                <strong>AI systems, developer experience, and emerging compute paradigms</strong>. My
                career has been defined by one thesis: the most impactful work happens where complex
                technology meets the humans who build with it.
              </p>
              <p>
                At Cartesi, I turned a 2–3 hour developer pain point into a 15-minute workflow — not
                through clever code alone, but through systematic feedback loops, empathy, and
                cross-functional execution. That&apos;s the kind of 10x I care about.
              </p>
              <p>
                Today I&apos;m focused on the hardest problem in AI: making increasingly powerful models{" "}
                <strong>observable, debuggable, and trustworthy</strong>. I think about
                interpretability as an engineering discipline — not an academic one — and I design
                production systems with that constraint built in from day one.
              </p>
              <p>
                IIT Roorkee physics graduate. Shipped hardware to 35,000+ customers. Spoken at
                ETHGlobal. Currently building AI agent infrastructure that actually works.
              </p>
            </div>

            <div className="about-terminal">
              <div className="terminal-bar">
                <div className="terminal-dot r"></div>
                <div className="terminal-dot y"></div>
                <div className="terminal-dot g"></div>
                <span className="terminal-title">~ jathin --full-profile</span>
              </div>
              <div className="terminal-body">
                <div className="t-line">
                  <span className="t-dim"># core values</span>
                </div>
                <div className="t-line">
                  <span className="t-green">INTERPRET</span> = &quot;build observable systems&quot;
                </div>
                <div className="t-line">
                  <span className="t-green">EMPATHY</span> = &quot;developer pain → product fix&quot;
                </div>
                <div className="t-line">
                  <span className="t-green">VELOCITY</span> = &quot;ship, measure, iterate&quot;
                </div>
                <br />
                <div className="t-line">
                  <span className="t-dim"># education</span>
                </div>
                <div className="t-line">
                  <span className="t-blue">MSc Physics</span> @ IIT Roorkee
                </div>
                <div className="t-line t-dim">Indian Institute of Technology · 2018</div>
                <br />
                <div className="t-line">
                  <span className="t-dim"># currently interested in</span>
                </div>
                <div className="t-line">
                  <span className="t-amber">→</span> LLM evaluation frameworks
                </div>
                <div className="t-line">
                  <span className="t-amber">→</span> Agentic system design
                </div>
                <div className="t-line">
                  <span className="t-amber">→</span> AI safety primitives
                </div>
                <div className="t-line">
                  <span className="t-amber">→</span> Verifiable computation + ML
                </div>
                <br />
                <div className="t-line">
                  <span className="t-green">status</span>:{" "}
                  <span className="t-amber">open to work</span> ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          <div className="contact-tag">05 // Get In Touch</div>
          <h2 className="contact-headline">
            Let&apos;s build
            <br />
            <span>something serious</span>.
          </h2>
          <p className="contact-sub">
            Open to AI engineering, developer advocacy, and technical leadership roles. Especially
            interested in teams working on LLM evaluation, agentic systems, or AI safety tooling.
          </p>
          <div className="contact-links">
            <a href="mailto:jathin@example.com" className="contact-link primary">
              ✉ Email Me
            </a>
            <a
              href="https://linkedin.com/in/jathin-jagannath"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/jathin-jagannath"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub →
            </a>
            <a href="#" className="contact-link">
              Resume PDF →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span>JATHIN JAGANNATH · AI SYSTEMS ENGINEER</span>
        <span>IIT ROORKEE · 2018</span>
        <span style={{ color: "var(--green)" }}>OPEN TO WORK ✓</span>
      </footer>
    </>
  );
}
