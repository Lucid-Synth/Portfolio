
export const siteConfig = {
  name: "Ujjwal Anand",
  title: "Ujjwal Anand",
  description:
    "Personal portfolio for Ujjwal Anand",
  url: "https://www.ujjwaldev.site",
  ogImage: "#",
  keywords: ["Portfolio", "lucidsynth", "Next.js", "Minimal", "Developer"],
  author: "LucidSynth",
  locale: "en_US",
  footerText: "mail:dev.lucidsynth@gmail.com",
  defaultTheme: "dark" as const,
  enableSystemTheme: true,
};

// ========= FEATURE TOGGLES =========
export const settings = {
  showTopBar: true,
  showHero: true,
  showProjects: true,
  showTechStack: true,
  showConnect: true,
  showFooter: true,
  enableTicker: true, 
  enableScrollProgress: true, // vertical charging strip (desktop)
  enableDotGrid: true, // dot-grid background
};

// ========= PERSONAL INFO (Hero section) =========
export const personalInfo = {
  name: "UJJWAL ANAND",
  tagline: "Full-Stack Developer",
  bio: "Hi, I'm Ujjwal - a 19 year old passionate about software development and technology. I love building websites, exploring new tools, and improving my skills daily.",
  email: "dev.lucidsynth@gmail.com",
  location: "India",
  resumeUrl: "#",
  avatar: "/images/avatar.png",
  bannerLight: "/images/banner-light.png",
  bannerDark: "/images/banner-dark.png",
};

// ========= SOCIAL LINKS =========
export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/Lucid-Synth",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ujjwal-anand-5711933ba/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/LucidSynth",
    icon: "twitter",
  },
];

// ========= EXPERIENCE (optional — leave empty to hide) =========
export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  logo: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  // TODO: Uncomment and replace with your experience
  // {
  //   company: "Company Name",
  //   role: "Your Role",
  //   startDate: "Jan 2024",
  //   endDate: "Present",
  //   location: "Remote",
  //   logo: "🏢",
  //   description: [
  //     "What you did and the impact you had.",
  //     "Another achievement with measurable outcome.",
  //   ],
  //   technologies: ["React", "TypeScript", "Next.js"],
  // },
];

// ========= PROJECTS (boilerplate examples — replace all) =========
export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient?: string;
}

export const projects: Project[] = [
  {
    title: "Prismail",
    description:
      "Prismail is a cold email generator for developers. You enter your details — name, GitHub, portfolio, skills, and the role/company you're targeting — and it writes a personalized, ready-to-send cold email in one of four tones: Direct, Curious, Bold, or Warm. No more staring at a blank compose window.",
    technologies: ["FastAPI", "React", "Langchian"],
    githubUrl: "https://github.com/Lucid-Synth/prismail",
    liveUrl: "https://prismail.vercel.app",
  },
  {
    title: "BillWhiz",
    description:
      "BillWhiz is an AI-powered invoice analyzer that takes the confusion out of billing. Upload any invoice — PDF or image — and it instantly breaks down every charge in plain English, flags suspicious or duplicate fees, and sends a clean summary to any inbox via email. Open-source, free to self-host, and built for anyone tired of decoding walls of numbers.",
    technologies: ["Next.js", "Groq", "PostgreSQL"],
    githubUrl: "https://github.com/Lucid-Synth/BillWhiz",
    liveUrl: "https://bill-whiz.vercel.app/",
  },
  {
    title: "Zenvy",
    description:
      "Zenvy is a full-stack web application designed for high-quality, AI-driven image background removal, where images can be uploaded and processed instantly. The backend leverages the Cloudinary API for powerful, fast, and accurate background removal.",
    technologies: ["Next.js", "Cloudinary", "PostgreSQL"],
    githubUrl: "https://github.com/Lucid-Synth/zenvy",
    liveUrl: "https://zenvy-two.vercel.app/",
  },
];

// ========= TECH STACK (boilerplate — replace with your stack) =========
export interface TechCategory {
  name: string;
  items: { name: string; icon: string }[];
}

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
    ],
  },
];
