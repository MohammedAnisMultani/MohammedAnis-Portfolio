import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/linkdin profile01.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import trendWear from '../assets/treadwear-coverpage.png'
import songApp from '../assets/songApp-redux.png'
import youtubeClone from '../assets/Youtube Clone.png'
import closeupprofile from '../assets/linkdin closeup profile.png'


export const assets = {
  profileImg,
  closeupprofile
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS','Javascript','React.js','React Router','Responsive Design','React-Redux','TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing scalable and efficient server-side applications, REST APIs, and database solutions to power dynamic web applications.',
    tags: ['Node.js', 'Express.js','REST API','CRUD Operation','Express Session', 'JWT Auth', 'Nodemailer','CORS', 'Middleware']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'Mongoose', 'MySQL', 'Schema Design','Data Validation', 'Database Design','Data Modeling']
  },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Working with modern development tools and technologies to build, test, debug, and deploy efficient web applications',
    tags: ['VS Code', 'GIT', 'Github','Postman','npm', 'Figma','Chrome DevTools', 'ServiceNow','Vercel','Netlify','Razorpay']
  }
];



export const projects = [
  {
    title: "TrendzWear E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: trendWear,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js",'Mongoose','REST API','Razorpay Integration','Nodemailer','CORS','Express Session', 'Tailwind CSS','MERN'],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://trend-wear-frontend-test.vercel.app/",
    code: "https://github.com/MohammedAnisMultani/TrendWearFrontend.test",
  },
  {
    title: "Youtube Clone App",
    description: "A YouTube clone built using HTML, CSS, and JavaScript, integrated with the Google YouTube Data API to fetch and display videos dynamically, with search functionality",
    image: youtubeClone,
    tech: ["HTML", "CSS", "Javascript", "API Integration", "FrontEnd Development", "Google Youtube API"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://youtube-clone-786.netlify.app/",
    code: "https://github.com/MohammedAnisMultani/Youtube-Clone",
  },
  {
    title: "Song App",
    description: "A Song browsing application built with React and React-Redux, focusing on centralized state management, liked songs, and dynamic UI updates. Implemented Redux for managing application state efficiently across components.",
    image: songApp,
    tech: ["React.js", "Redux"],
    icons: [FaReact, FaDatabase],
    demo: "https://songapp-redux.netlify.app/",
    code: "https://github.com/MohammedAnisMultani/SongApp-Redux",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React.js to showcase my projects, skills, and development journey.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX Design"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
 
  
];


export const workData = [
  
  {
    role: "System Engineer",
    company: "Infosys",
    duration: "Nov 2024 - Present",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "MERN Developer Apprentice",
    company: "Acciojob",
    duration: "2023-2024",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
