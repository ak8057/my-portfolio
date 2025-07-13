export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Log anomaly detection",
    description:
      "A web application that detects anomalies in log files using machine learning algorithms.",
    technologies: ["ElasticSearch", "Flask", "Kibana"],
    github: "https://github.com/ak8057/API_log_Monitoring.git",
    demo: "https://github.com/ak8057/API_log_Monitoring.git",
    image: require(".//../../public/projects/logs.png"),
    available: true,
  },
  {
    id: 1,
    name: "AURA:Mental Health",
    description:
      "AURA is a mental health web application that provides resources and support for individuals struggling with mental health issues.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/ak8057/mental_health_v1.0.git",
    demo: "https://github.com/ak8057/mental_health_v1.0.git",
    image: require(".//../../public/projects/auraa.png"),
    available: true,
  },
  {
    id: 2,
    name: "BIS Quiz Platform",
    description:
      "An Interactive website for BIS, a company that provides innovative solutions in the field of technology and design.",
    technologies: ["React, Three.js"],
    github: "https://github.com/ak8057/BIS_awareness_platform.git",
    demo: "https://bisworld.netlify.app/",
    image: require(".//../../public/projects/bis.png"),
    available: true,
  },
  // {
  //   id: 3,
  //   name: "Propellent",
  //   description:
  //     "A website built for a software startup and small business, to showcase their services and mark their online presence.",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com/victorcodess/propellent",
  //   demo: "https://propellent.vercel.app/",
  //   image: require(".//../../public/projects/propellent-new.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Flixify",
  //   description:
  //     "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
  //   technologies: ["Next.js", "Typescript", "Prisma"],
  //   github: "https://github.com/victorcodess/flixify",
  //   demo: "https://flixify.victorwilliams.me/",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "BIS Interactive website",
    description:
      "An Interactive website for BIS, a company that provides innovative solutions in the field of technology and design.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
