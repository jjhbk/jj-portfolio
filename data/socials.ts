export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    name: "Email",
    handle: "jathinjagannath@gmail.com",
    url: "mailto:jathinjagannath@gmail.com",
    icon: "✉",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "jathin-jagannath",
    url: "https://www.linkedin.com/in/jathin-jagannath-39670a119/",
    icon: "in",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "jathin-jagannath",
    url: "https://github.com/jjhbk",
    icon: "⌘",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    handle: "@jjhbk26",
    url: "https://x.com/jjhbk26",
    icon: "𝕏",
  },
  {
    id: "discord",
    name: "Discord",
    handle: "jathin.ai",
    url: "https://discord.com/users/jathin.ai",
    icon: "◆",
  },
];

export const navSocials = ["email", "linkedin", "github", "twitter"];
export const footerSocials = ["linkedin", "github", "twitter", "discord"];
