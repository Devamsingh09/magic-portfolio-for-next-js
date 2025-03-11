import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Devam",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI/ML Engineer | Deep Learning Enthusiast",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Updated time zone identifier
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s AI/ML Newsletter</>,
  description: (
    <>
      I occasionally write about AI, deep learning, and share insights on the latest advancements in ML research.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Devamsingh09",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/devam-singh-248025265/",
  },
  {
    name: "Email",
    icon: "email",
    link: "devamsingh0009@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>AI/ML Engineer | Data Scientist | Deep Learning Enthusiast</>,
  subline: (
    <>
      I'm Devam, a passionate AI Engineer specializing in NLP, Computer Vision, and RAG-based applications. In my free time, I build and experiment with AI models.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Devam Singh, an AI/ML Engineer with expertise in machine learning, deep learning, and data science. I have hands-on experience in NLP, predictive modeling, and deploying AI solutions. My projects include sentiment analysis, RAG-based chatbots, and image captioning.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IIIT Ranchi",
        timeframe: "2022 - Present",
        role: "AI/ML Coordinator",
        achievements: [
          <>Built AI-driven applications, including Seq-to-Seq models, chatbots, and ML pipelines.</>,
          <>Designed CampusBot to assist students and faculty with academic queries.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "IIIT Ranchi",
        description: <>B.Tech in Computer Science (AI & ML specialization).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "TensorFlow & PyTorch",
        description: <>Experienced in building and fine-tuning deep learning models.</>,
        images: [],
      },
      {
        title: "FastAPI & Streamlit",
        description: <>Deploying AI models with FastAPI and creating interactive UIs using Streamlit.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "AI/ML Blog",
  description: `Read what ${person.name} has been up to recently.`,
};

const work = {
  label: "Projects",
  title: "My Projects",
  description: `AI & ML projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "AI Visuals",
  description: `Collection of AI-generated images and projects by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery };
