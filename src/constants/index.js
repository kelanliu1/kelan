import {
  reactjs,
  waymo,
  intuidex,
  torch,
  django,
  cry,
} from "../assets";

import linkedin from "../assets/linkedin-in.svg";
import github from "../assets/github.svg";
import mail from "../assets/envelope-solid.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: torch,
  },
  {
    title: "Front-End",
    icon: reactjs,
  },
  {
    title: "Back-End",
    icon: django,
  },
];

const socials = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kelan-liu/"
  },
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/kelanliu1"
  },
  {
    title: "Email",
    icon: mail,
    link: "mailto:kelanliu01@gmail.com"
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Intuidex",
    icon: intuidex,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2021",
    points: [
      "Ported and optimized video processing and machine learning algorithms to develop new supporting software infrastructure for embedded systems with CUDA and GPU support (Docker, Python)",
      "Created and optimized algorithms for real-time motion detection and image snapshotting to support CNN and YOLO models, facilitating live license plate detection on video streams (OpenCV)",
      "Reduced object detection and classification training runtime by 4 minutes on a large training dataset of thousands of vehicles with license plate images",
    ],
  },
  {
    title: "Software Engineer, Machine Learning, Research Intern",
    company_name: "Waymo",
    icon: waymo,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Jan 2022",
    points: [
      "Contributed to building a real-time driving simulation platform through kinematics simulation and cloud visualization integration (C++, Python)",
      "Developed a driving user interface to facilitate human-simulation interaction and established a data collection pipeline with real-time latency visualization for driving simulation (Angular, RxJS, Typescript)",
      "Optimized end-to-end latency to under 200ms by utilizing D3.js for latency visualization, which allowed for better monitoring of related graphics rendering and road mapping plugins (GFX)",
      "Cross functionally collaborated with 3D modeling team and simulation team to incorporate 3D car models and realistic graphics for simulation",
      "Significantly improved intern permission pitfalls by implementing intern-friendly scripts for existing software infrastructure"
    ],
  },
  {
    title: "Hire Me Pls ❤️",
    company_name: "Unemployed",
    icon: cry,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
    ],
  },
];

export { services, experiences, socials };