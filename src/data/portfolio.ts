export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    mobile: string[];
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Shaurya Damathia",
  role: "Full-Stack and Data Scientist Enthusiast",
  about:
    "I’m a Computer Engineering undergraduate passionate about building end-to-end ML, full-stack, and cybersecurity-driven systems. I enjoy turning ideas into scalable, real-world solutions deployed across cloud platforms. When I’m not building systems, you’ll probably find me on the basketball court or planning my next move on a chessboard.",
  profileImage: "/images/My_Image.jpeg",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/ShauryaDamathia",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shauryadamathia/",
      icon: "Linkedin",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/shaurya_damathia/",
      icon: "Instagram",
    },
    {
      platform: "Email",
      url: "mailto:shauryadamathia@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    mobile: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScipt",
      "R",
      "Kotlin",
      "SQL",
    ],
    libraries: [
      "Numpy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Matplot",
      "Seaborn",
      "PyCaret",
      "TF-IDF (NLP)",
    ],
    web: [
      "REST APIs",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MERN Stack",
      "Flask",
      "Angular"
    ],
    tools: ["Git", "Docker", "Linux/Unix", "VS Code", "IntelliJ IDEA", "GNS3", "Matlab", "RStudio", "AutoCAD"],
  },
  experience: [
    {
      company: "Airtel Digital (Xtelify)",
      role: "Digital Services Intern",
      period: "Jan 2026 - Present",
      description: [
        "Contributing to data privacy and regulatory compliance initiatives aligned with the DPDP Act, 2023.",
        "Assisting in documentation, workflow analysis and implementation support for enterprise digital service systems.",
        "Collaborating with cross-functional teams to ensure regulatory alignment across internal platforms.",
      ],
    },
    {
      company: "Celebal Technologies",
      role: "Data Science Intern",
      period: "June 2025 - Aug 2025",
      description: [
        "Engaged in an 8-week program covering OOP in Python, SQL, clustering, and GenAI tools",
        "Built 5+ ML models with 80%+ accuracy on real-world datasets",
        "Processed 10,000+ records using scikit-learn pipelines and data preprocessing",
        "Developed interactive dashboards using Streamlit for data insights",
      ],
    },
  ],
  projects: [
    {
      title: "SignBridge",
      description:
        "Developed a wearable gesture recognition system using a 1D-CNN model for real-time classification, deployed via a Flask API on Google Cloud and integrated with a React Native application.",
      techStack: ["ESP32", "Accelerometer", "Python", "React-Native", "GCP", "Postman"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7410748958290980866/",
      github: "https://github.com/ShauryaDamathia/SignBridge",
      thumbnail: "/images/projects/Glove.webp",
    },
    {
      title: "NeuroRhythm",
      description:
        "Designed and deployed a full-stack cognitive testing platform to analyze the impact of music tempo on behavioral response patterns, collecting and processing real-time data from 100+ participants.",
      techStack: ["HTML/CSS", "JavaScript", "Python", "Flask"],
      link: "http://shauryadamathia.pythonanywhere.com/",
      github: "https://github.com/ShauryaDamathia/Music-Tempo-Cognitive-Test",
      thumbnail: "/images/projects/NeuroRhythm.webp",
    },
    {
      title: "Portfolio Website",
      description:
        "A version of my personal portfolio website showcasing my projects, work experience, and resume built in modern tech stack.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostCSS", "npm"],
      link: "https://damathia-portfolio.vercel.app/",
      github: "https://github.com/ShauryaDamathia/Portfolio",
      thumbnail: "/images/projects/myportfolio.webp",
    },
    {
      title: "MashItUp",
      description:
        "MashItUp is an automated mashup generator that fetches videos of a chosen artist, extracts audio segments, and merges them into a seamless compilation using Python-based audio processing.",
      techStack: ["Python", "yt-dlp", "NumPy", "Flask", "Audio Processing"],
      github: "https://github.com/ShauryaDamathia/Mashup",
      thumbnail: "/images/projects/MashItup.webp",
    },
    {
      title: "House Price Prediction",
      description:
        "Built a house price prediction system using Linear Regression, deployed with Streamlit to provide an interactive web interface for real-time property price estimation.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
      github: "https://github.com/ShauryaDamathia/House_Price_Streamlit",
      thumbnail: "/images/projects/houseprice.webp",
    },
  ],
};
