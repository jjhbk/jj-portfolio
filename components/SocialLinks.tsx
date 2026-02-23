"use client";

import { socialLinks, navSocials, footerSocials, SocialLink } from "@/data/socials";

interface SocialLinksProps {
  variant?: "nav" | "contact" | "footer";
  filter?: string[];
}

export function SocialLinks({ variant = "contact", filter }: SocialLinksProps) {
  const linksToShow = filter
    ? socialLinks.filter((s) => filter.includes(s.id))
    : variant === "nav"
    ? socialLinks.filter((s) => navSocials.includes(s.id))
    : variant === "footer"
    ? socialLinks.filter((s) => footerSocials.includes(s.id))
    : socialLinks;

  if (variant === "contact") {
    return (
      <div className="contact-links">
        {linksToShow.map((social, index) => (
          <SocialLinkButton key={social.id} social={social} primary={index === 0} />
        ))}
        <a href="#" className="contact-link">
          Resume PDF →
        </a>
      </div>
    );
  }

  if (variant === "nav") {
    return (
      <div style={{ display: "flex", gap: "12px" }}>
        {linksToShow.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              color: "var(--text-dim)",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            title={social.name}
          >
            <span>{social.icon}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        {linksToShow.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "10px",
              color: "var(--text-dim)",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <span>{social.icon}</span> {social.name}
          </a>
        ))}
      </div>
    );
  }

  return null;
}

interface SocialLinkButtonProps {
  social: SocialLink;
  primary?: boolean;
}

function SocialLinkButton({ social, primary }: SocialLinkButtonProps) {
  if (primary) {
    return (
      <a href={social.url} className="contact-link primary">
        {social.icon} {social.name} Me
      </a>
    );
  }

  const isExternal = social.url.startsWith("http");
  return (
    <a
      href={social.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="contact-link"
    >
      {social.name} →
    </a>
  );
}

export function MiniSocials() {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginTop: "24px",
      }}
    >
      {socialLinks
        .filter((s) => ["twitter", "github", "linkedin"].includes(s.id))
        .map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--green)";
              e.currentTarget.style.color = "var(--green)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-dim)";
            }}
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
    </div>
  );
}
