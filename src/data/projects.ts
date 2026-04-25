export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  oneLiner?: string; // pithy pull-quote for hero treatment
  image: string;
  link?: string;
  tags: string[];
  label?: string; // short context/funding badge (used on supporting cards)
  year?: string; // e.g. "2024", "2023–Present"
  role?: string; // e.g. "Co-founder", "Student Researcher", "Builder"
  status?: string; // e.g. "Active", "Ongoing", "Archived"
  metrics?: ProjectMetric[]; // optional sidebar metadata for hero
  tier?: "hero" | "feature" | "supporting";
  featured?: boolean;
  category: "technical" | "hackathon";
}

export const projects: Project[] = [
  {
    title: "Cultura",
    description:
      "Co-founded an app delivering crop phenology and financial tools to small-scale farmers. Placed in Buildspace's S5 Top 32. Backed by Emergent Ventures and The Iris Project.",
    oneLiner: "Crop phenology for farmers who can't afford to be wrong.",
    image: "/projects/cultura.jpg",
    tags: ["React Native", "ML", "Agriculture", "Startup"],
    year: "2024",
    role: "Co-founder",
    metrics: [
      { label: "Backing", value: "Emergent Ventures · Iris Project · Rideau Hall Foundation" },
    ],
    tier: "hero",
    featured: true,
    category: "technical",
  },
  {
    title: "Collimator",
    description:
      "Co-host of a podcast bringing together leaders in business, technology, and science to find the signal in the noise. 30+ episodes to date with guests ranging from founders to professors to investors.",
    image: "/projects/collimator.png",
    link: "https://open.spotify.com/show/0CkPu2vTedCtzkTT8vDegj",
    tags: ["Podcast", "Media", "Interviews"],
    year: "2023",
    role: "Co-host",
    status: "Ongoing",
    tier: "feature",
    featured: true,
    category: "technical",
  },
  {
    title: "UNC Applied Engineering Lab",
    description:
      "Developing a fully-waterproof, pose and movement-tracking glove for swimmers, designed to optimize hand positioning and improve performance for UNC athletes.",
    image: "/projects/AEL.jpg",
    link: "https://www.unc.edu/posts/2024/08/06/tar-heel-experts-unlock-science-behind-swimming/",
    tags: ["Hardware", "Signal Processing", "Sports Tech"],
    year: "2024",
    role: "Student Researcher",
    tier: "feature",
    featured: true,
    category: "technical",
  },
  {
    title: "GPT from Scratch",
    description:
      "Rebuilt a Shakespearean LLM to understand the architecture of GPT models, following Andrej Karpathy's curriculum.",
    image: "/projects/gpt.jpg",
    link: "https://github.com/alexyev/gpt-from-scratch",
    tags: ["Python", "PyTorch", "NLP", "Transformers"],
    year: "2024",
    role: "Self-directed",
    tier: "feature",
    featured: true,
    category: "technical",
  },
  {
    title: "Corn Disease Computer Vision",
    description:
      "Researched food supply pressures from a first-principles perspective. Developed a computer vision algorithm for drones to identify and treat corn disease in real-time.",
    image: "/projects/cd.webp",
    link: "https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949",
    tags: ["Computer Vision", "Python", "Agriculture"],
    year: "2023",
    role: "Independent Research",
    tier: "feature",
    featured: true,
    category: "technical",
  },
  {
    title: "AceGlass",
    description:
      "The ultimate interactive poker glasses with live winning percentages and betting strategies.",
    image: "/projects/ace.jpg",
    link: "https://devpost.com/software/ace-7kpg46",
    tags: ["AR", "Computer Vision", "Real-time Processing"],
    year: "2025",
    role: "Builder",
    label: "HoyaHacks '25 · Georgetown",
    tier: "supporting",
    category: "hackathon",
  },
  {
    title: "Clara",
    description:
      "An interactive, multilingual AI coach to help visa applicants prepare for interviews and navigate the immigration process.",
    image: "/projects/clara.jpg",
    link: "https://www.claraprep.co/",
    tags: ["AI", "NLP", "Immigration"],
    year: "2024",
    role: "Builder",
    label: "HackPrinceton '24",
    tier: "supporting",
    category: "hackathon",
  },
  {
    title: "brAInstorm",
    description:
      "Built a BCI that interprets brainwaves to generate artwork reflecting the user's emotional state.",
    image: "/projects/HTN.png",
    link: "https://youtu.be/r3z1rB29ZLU?si=d9o9UkN0tJxpzoO4",
    tags: ["BCI", "ML", "EEG", "Creative Tech"],
    year: "2022",
    role: "Builder",
    label: "Hack the North '22 · Winner",
    tier: "supporting",
    category: "hackathon",
  },
];
