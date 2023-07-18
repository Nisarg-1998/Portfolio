// import images
import Hero_person from "./assets/images/Hero/main_comp.json";

export const resumeLink = "https://drive.google.com/file/d/13eoXyM7t8T-fkqDZBgmXRRLgRqgAk-aU/view?usp=sharing"
export const repoLink = "https://github.com/Nisarg-1998"

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiJquery,
  SiVisualstudiocode,
  SiGit,
  SiMysql,
  SiNetlify,
  SiHtml5,
  SiVite,
  SiCss3,
  SiMongodb,
  SiRedux,
  SiJava,
  SiDart,
  SiFlutter,
  SiExpress,
  SiIntellijidea,
  SiReactivex
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import * as ic from 'react-icons/all'


import clothing from "./assets/images/Projects/clothing.jpg";
import portfolio_logo from "./assets/images/Projects/faviCon.jpg"
import Notepad from "./assets/images/Projects/Notepad.png";
import RBC from './assets/images/Projects/RBC.png';
import CD from './assets/images/Projects/CD.jpg';
import GU from './assets/images/Projects/Ganpat_University.png';
import intouch from './assets/images/Projects/247intouch.png';


export const content = {
  navs: [
    {
      link: "#skills",
      title: "Skills & Experience",
    },
    {
      link: "#education",
      title: "Education",
    },
    {
      link: "#projects",
      title: "Projects",
    },
    {
      link: "#contact",
      title: "Contact Me",
    },
  ],
  hero: {
    title: `Hello,`,
    sub1: "there",
    sub2: "I am",
    firstName: "NISARG",
    LastName: "THAKKAR",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "I'm passionate AI Engineer having experience of Robotic Process Automation.",
      },
    ],
  },
  skillsList: [
    {
      title: "Programming Languages",
      items: [
        {
          id: "pl-1",
          icon: ic.SiDotnet,
          name: ".Net",
        },
        {
          id: "pl-2",
          icon: SiPython,
          name: "Python",
        },
        {
          id: "pl-3",
          icon: ic.SiScala,
          name: "Scala",
        },
        {
          id: "pl-4",
          icon: SiC,
          name: "C",
        },
        {
          id: "pl-4",
          icon: SiCplusplus,
          name: "C++",
        },
        {
          id: "pl-8",
          icon: ic.HiDatabase,
          name: "SQL",
        },
        {
          id: "pl-5",
          icon: SiHtml5,
          name: "HTML",
        },
        {
          id: "pl-6",
          icon: SiCss3,
          name: "CSS",
        },
        {
          id: "pl-7",
          icon: SiJavascript,
          name: "JavaScript",
        },
        
      ],
    },
    {
      title: "Frameworks/ Libraries",
      items: [
        {
          id: "f-1",
          icon: SiReact,
          name: "React",
        },
        {
          id: "f-1",
          icon: ic.SiFlask,
          name: "Flask",
        },
        {
          id: "f-2",
          icon: ic.SiTensorflow,
          name: "TensorFlow",
        },
        {
          id: "f-3",
          icon: ic.SiOpencv,
          name: "OpenCV",
        },
        {
          id: "f-4",
          icon: ic.SiPytorch,
          name: "PyTorch",
        },
        {
          id: "f-5",
          icon: ic.SiSelenium,
          name: "Selenium",
        },
        {
          id: "f-6",
          icon: SiFlutter,
          name: "Flutter",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          id: "f-1",
          icon: ic.FaRobot,
          name: "RPA",
        },
        {
          id: "t-2",
          icon: SiMysql,
          name: "MySQL",
        },

        {
          id: "t-3",
          icon: SiVisualstudiocode,
          name: "VS Code",
        },
        {
          id: "t-4",
          icon: SiGit,
          name: "Git",
        },
        {
          id: "t-5",
          icon: AiFillGithub,
          name: "GitHub",
        },
        {
          id: "t-6",
          icon: ic.DiSpark,
          name: "Spark",
        },
        {
          id: "t-8",
          icon: SiIntellijidea,
          name: "IntelliJ",
        },
      ],
    },
  ],

  experiences: [
    {
      organisation: "Royal Bank Of Canada",
      logo: RBC,
      positions: [
        {
          title: "Online Banking Advisor",
          duration: "August 2023 - December 2023",
          content: [
          ],
        },
      ],
    },
    {
      organisation: "24-7 Intouch",
      logo: intouch,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Technical Support Advisor",
          duration: "February 2021 - March 2022",
          content: [
            ],
        },
      ],
    },

    {
      organisation: "CIGNEX Datamatics",
      logo: CD,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "RPA Developer",
          duration: "January 2018 - April 2019",
          content: [
          ],
        },
      ],
    },
  ],

  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};

export const educationList = [
  {
    id: "education-1",
    icon: GU,
    title: "Ganpat Universuty, Mehsana, Gujarat, India",
    degree: "Bachelor of Computer Applications",
    duration: "June 2015 - May 2018",
    content1: "Data Engineering",
    content2: "Web Development"
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Outfit Suggestion Automation",
    github: "https://github.com/Nisarg-1998/Outfit_Suggestion_Automation",
    link: "",
    image: clothing,
    content:
      "This UiPath robot is designed to suggest outfits based on the weather in a given city. It interacts with the user, asking for the name of the city, and then retrieves the weather information for that city. Based on the weather conditions, it provides suitable outfit recommendations.",
    stack: [
      {
        id: "icon-1",
        icon: ic.SiDotnet,
        name: ".Net"
      },
      {
        id: "icon-2",
        icon: ic.FaRobot,
        name: "UiPath"
      },
    ],
  },
  {
    id: "project-2",
    title: "Portfolio",
    github: "https://github.com/Nisarg-1998/Portfolio",
    image: portfolio_logo,
    content:
      "An impressive portfolio showcasing my expertise in React and Tailwind CSS, demonstrating sleek and responsive web design.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },

    ],
  },
  {
    id: "project-3",
    title: "Notepad Automation",
    github: "https://github.com/Nisarg-1998/Notepad_Automation",
    link: "",
    image: Notepad,
    content: "This UiPath robot is designed to automate the Notepad activities.",
    stack: [
      {
        id: "icon-1",
        icon: ic.SiDotnet,
        name: ".Net"
      },
      {
        id: "icon-2",
        icon: ic.FaRobot,
        name: "UiPath"
      },

    ],
  },

]



export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/nisarg-thakkar-0b3308284/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/nisarg-1998",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:nisargt13598@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/nt13.598/",
  },
];

export const aboutMe = {
  name: "Nisarg Thakkar",
}
