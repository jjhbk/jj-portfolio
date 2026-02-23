"use client";

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.links && Object.keys(project.links).length > 0;

  if (project.featured) {
    return (
      <div className="project-card featured">
        <div>
          <div className="project-num">
            {project.num} · FEATURED
            {project.status === "in-development" && (
              <span style={{ marginLeft: "8px", color: "var(--amber)" }}>● Building</span>
            )}
          </div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-stack">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tech">
                {tag}
              </span>
            ))}
          </div>
          {hasLinks && <ProjectLinks links={project.links!} />}
        </div>
        <div>
          <div className="project-metrics">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="metric">
                <span className="metric-val">{metric.value}</span>
                <br />
                <span className="metric-key">{metric.label}</span>
              </div>
            ))}
          </div>
          {project.features && (
            <>
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
                {project.features.map((feature, idx) => (
                  <div key={idx}>
                    <span className="t-green">▸</span> {feature}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div className="project-num">
        {project.num}
        {project.status === "in-development" && (
          <span style={{ marginLeft: "8px", color: "var(--amber)" }}>● Building</span>
        )}
        {project.status === "archived" && (
          <span style={{ marginLeft: "8px", color: "var(--text-dim)" }}>○ Archived</span>
        )}
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-stack">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tech">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-metrics">
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="metric">
            <span className="metric-val">{metric.value}</span>{" "}
            <span className="metric-key">{metric.label}</span>
          </div>
        ))}
      </div>
      {hasLinks && <ProjectLinks links={project.links!} compact />}
    </div>
  );
}

interface ProjectLinksProps {
  links: {
    demo?: string;
    github?: string;
    website?: string;
    docs?: string;
  };
  compact?: boolean;
}

function ProjectLinks({ links, compact }: ProjectLinksProps) {
  const linkStyle: React.CSSProperties = compact
    ? {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "10px",
        color: "var(--green)",
        textDecoration: "none",
        marginRight: "12px",
        marginTop: "12px",
        transition: "opacity 0.2s",
      }
    : {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "11px",
        color: "var(--green)",
        textDecoration: "none",
        marginRight: "16px",
        marginTop: "16px",
        padding: "6px 12px",
        border: "1px solid var(--green-dim)",
        transition: "all 0.2s",
      };

  return (
    <div style={{ marginTop: compact ? "8px" : "12px" }}>
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "var(--green-glow)";
            }
          }}
          onMouseLeave={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          ▶ Live Demo
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "var(--green-glow)";
            }
          }}
          onMouseLeave={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          ↗ Website
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "var(--green-glow)";
            }
          }}
          onMouseLeave={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          ⌘ GitHub
        </a>
      )}
      {links.docs && (
        <a
          href={links.docs}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "var(--green-glow)";
            }
          }}
          onMouseLeave={(e) => {
            if (!compact) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          📄 Docs
        </a>
      )}
    </div>
  );
}
