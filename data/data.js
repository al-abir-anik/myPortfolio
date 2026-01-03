import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaChessPawn,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandDribbbleFilled } from "react-icons/tb";

export const socialLinks = [
  {
    platform: "Github",
    logo: <FaGithub />,
    link: "https://github.com/al-abir-anik",
  },
  {
    platform: "LinkedIn",
    logo: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/al-abir-anik/",
  },
  // {
  //   platform: "Discord",
  //   logo: <FaDiscord />,
  //   link: "",
  // },
  {
    platform: "Whatsapp",
    logo: <IoLogoWhatsapp />,
    link: "https://wa.me/8801403924435",
  },
  {
    platform: "Dribbble",
    logo: <TbBrandDribbbleFilled />,
    link: "https://dribbble.com/alabiranik",
  },
  // {
  //   platform: "Chess.com",
  //   logo: <FaChessPawn />,
  //   link: "https://www.chess.com/member/anik563",
  // },
];

export const experience = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const projects = [
  {
    url: "playgrid",
    title: "PlayGrid | A Gaming Portal",
    banner: "/images/projects/playgrid.png",
    description:
      "Playgrid is a full-featured game store where users can browse, wishlist, and purchase games through a smooth and responsive interface. It showcases my ability to build scalable and modern e-commerce including authentication, secure payments and state management using React js.",
    technologies: [
      { tech: "React", logo: "/images/logo/React.svg" },
      { tech: "Node.js", logo: "/images/logo/Node.js.svg" },
      { tech: "Express", logo: "/images/logo/Express.svg" },
      { tech: "MongoDB", logo: "/images/logo/MongoDB.svg" },
      { tech: "Tailwind CSS", logo: "/images/logo/Tailwind CSS.svg" },
      { tech: "Firebase", logo: "/images/logo/Firebase.svg" },
      { tech: "Stripe Payment", logo: "" },
    ],
    liveLink: "https://playgrid-aaa.surge.sh/",
    sourceCode: "https://github.com/al-abir-anik/playgrid-client",
  },
  {
    url: "portify",
    title: "Portify | Portfolio website",
    banner: "/images/projects/portify.png",
    description:
      "Portify is a modern agency-style portfolio built to showcase my frontend skills, animations and responsive layouts. It highlights clean UI composition, smooth interactions and performance-focused components.",
    technologies: [
      { tech: "Next.js", logo: "/images/logo/Next.js.svg" },
      { tech: "React", logo: "/images/logo/React.svg" },
      { tech: "Tailwind CSS", logo: "/images/logo/Tailwind CSS.svg" },
      { tech: "Motion.dev", logo: "" },
    ],
    liveLink: "https://portfolio-template-zeta-murex.vercel.app/",
    // sourceCode: "https://github.com/al-abir-anik/portify",
  },
  {
    url: "gizmo",
    title: "Gizmo | Gadget E-Commerce store",
    banner: "/images/projects/gizmo.png",
    description:
      "Gizmo is a e-commerce platform featuring NextAuth authentication, custom API routes, an admin dashboard for managing products and orders. It emphasizes secure user flows, server-side logic and a fully responsive interface.",
    technologies: [
      { tech: "Next.js", logo: "/images/logo/Next.js.svg" },
      { tech: "React", logo: "/images/logo/React.svg" },
      { tech: "Tailwind CSS", logo: "/images/logo/Tailwind CSS.svg" },
    ],
    liveLink: "https://gizmo-server.vercel.app/",
    sourceCode: "https://github.com/al-abir-anik/gizmo",
  },
];

export const skills = {
  frontend: [
    {
      tech: "React.js",
      logo: "/images/logo/React.svg",
      link: "https://react.dev",
    },
    {
      tech: "Next.js",
      logo: "/images/logo/Next.js.svg",
      link: "https://nextjs.org",
    },
    {
      tech: "JavaScript",
      logo: "/images/logo/JavaScript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    // {
    //   tech: "TypeScript",
    //   logo: "/images/logo/TypeScript.svg",
    //   link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // },
    {
      tech: "Redux",
      logo: "/images/logo/Redux.svg",
      link: "https://redux.js.org",
    },
    {
      tech: "Tailwind CSS",
      logo: "/images/logo/Tailwind CSS.svg",
      link: "https://tailwindcss.com",
    },
    {
      tech: "CSS3",
      logo: "/images/logo/CSS3.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      tech: "HTML5",
      logo: "/images/logo/HTML5.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  ],

  backend: [
    {
      tech: "Node.js",
      logo: "/images/logo/Node.js.svg",
      link: "https://nodejs.org",
    },
    {
      tech: "Express.js",
      logo: "/images/logo/Express.svg",
      link: "https://expressjs.com",
    },
  ],

  database: [
    {
      tech: "MongoDB",
      logo: "/images/logo/MongoDB.svg",
      link: "https://www.mongodb.com",
    },
  ],

  tools: [
    {
      tech: "Git",
      logo: "/images/logo/Git.svg",
      link: "https://git-scm.com",
    },
    {
      tech: "Firebase",
      logo: "/images/logo/Firebase.svg",
      link: "https://firebase.google.com",
    },
    {
      tech: "VS Code",
      logo: "/images/logo/VS Code.svg",
      link: "https://code.visualstudio.com",
    },
    {
      tech: "Figma",
      logo: "/images/logo/Figma.svg",
      link: "https://figma.com",
    },
  ],
};

export const footer = {
  socials: [
    { name: "Dribbble", icon: "/images/dribbble.png", link: "#" },
    { name: "Behance", icon: "/images/behance.png", link: "#" },
    { name: "Figma", icon: "/images/figma.png", link: "#" },
    { name: "X", icon: "/images/twitter.png", link: "#" },
  ],
  services: [
    "UX-UI & Creative",
    "Web Development",
    "Brand Identity",
    "Design Consultation",
  ],
  explore: ["All projects", "Contact", "About Me"],
};
