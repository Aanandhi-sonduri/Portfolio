// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/portfolio.png";
// Profile Image
import Aanandhi from "./assets/Aanandhi.jpeg";
// Tech stack images
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import js from "./assets/icons/js.png";
import react from "./assets/icons/react.png";
import angular from "./assets/techstack/angular.svg";
import mongoDb from "./assets/icons/mongoDb.png"
import vscode from "./assets/techstack/vscode.png";
import docker from "./assets/techstack/docker.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/icons/postman.png";
import mySql from "./assets/techstack/mySql.png";
import gcp from "./assets/techstack/gcp.png";
import nodeJs from "./assets/icons/nodeJs.png";
import flask from "./assets/icons/flask.svg";
import aws from "./assets/icons/aws.png";
import swift from "./assets/icons/swift.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage10 from "./assets/projects/project10.png";
//Education Images
import srm from "./assets/icons/srm.png";
import usc from "./assets/icons/USC.png";
//Work Images
import eze from "./assets/icons/eze.png";
import mit from "./assets/icons/mitsq.png";
import workup from "./assets/icons/workup.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Aanandhi Sonduri Panthangi",
  img: Aanandhi,
  about: `
  I’m a driven Software Engineer specializing in Full Stack and Frontend development, with a deep passion for building AI-powered web applications that solve real-world problems. A USC Computer Science graduate, I combine cutting-edge AI technologies like large language models and vector search with scalable backend systems and sleek, responsive user interfaces.

  I thrive at the intersection of creativity and technology—designing intuitive, seamless experiences backed by intelligent, efficient code. Whether crafting end-to-end solutions in fast-paced startups or contributing to complex, high-traffic enterprise systems, I bring ownership, adaptability, and a growth mindset to every project

  My mission is to leverage AI and modern web tech to deliver innovative, impactful products that elevate user experiences and drive meaningful change.

`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/aanandhi-sonduri-a814a31a4/",
  github: "https://github.com/Aanandhi-sonduri",
  twitter: "https://twitter.com/",
  resume: "https://drive.google.com/file/d/1m83gjpDsH94eGMTxFB7qnF0bj4WOOi9X/view?usp=sharing",

};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Associate Software Developer",
    Company: `Eze Software (SS&C)`,
    Location: "Hyderabad, India",
    Type: "Full Time",
    Logo: eze,
    Duration: "May 2022 - July 2023",
  },
  {
    Position: "Software Engineer Intern",
    Company: `WorkUp`,
    Location: "Los Angeles, USA",
    Type: "Internship",
    Logo : workup,
    Duration: "May 2024 - July 2024",
  },
  {
    Position: "Product Development Intern",
    Company: `Eze Software (SS&C)`,
    Location: "Hyderabad, India",
    Type: "Internship",
    Logo: eze,
    Duration: "Feb 2022 - May 2022",
  },
  {
    Position: "Research Intern",
    Company: `MIT Square`,
    Location: "Remote",
    Type: "Internship",
    Logo: mit,
    Duration: "Jul 2021 - Oct 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "University of Southern California",
    Company: "Masters in Computer Science",
    Location: "Los Angeles",
    Type: "Full Time",
    Logo: usc,
    Duration: "Aug 2023 - Present",
    Subjects: [
      "Analysis of Algorithms",
      "Database Systems",
      "Web Technologies",
      "Machine Learning for Data Science",
      "Natural Language Processing",
      "Information Retrieval",
      "Applied Cryptography",
    ],
  },
  {
    Position: "SRM University",
    Company: `Bachelor of Technology in Computer Science and Engineering`,
    Location: "Chennai",
    Type: "Full Time",
    Logo: srm,
    Subjects: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Object Oriented Programming",
    ],
    Duration: "July 2018 - May 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  angular: angular,
  vscode: vscode,
  docker: docker,
  mongoDb: mongoDb,
  postman: postman,
  mySql: mySql,
  npm: npm,
  git: git,
  github: github,
  gcp: gcp,
  nodeJs: nodeJs,
  flask: flask,
  swift: swift,
};

// Enter your Project Details here
export const projectDetails = [
   {
    title: "BigBrain Application",
    description: `Developed a smart document management platform that allows users to upload files securely, take notes, and access their content instantly with seamless authentication. Utilized advanced vector search powered by Convex and Hugging Face embeddings to deliver highly relevant and context-sensitive information from documents. Integrated an AI-driven conversational interface and summarization tools through GROQ API, enabling users to interact naturally with their data and quickly extract key points. This project highlights my ability to combine cutting-edge AI technologies with modern web frameworks to create intuitive and powerful productivity tools.`,
    techstack: "Next.js, React, ShadCN, Hugging Face, GROQ API, Clerk, Convex",



  }, 
  {
    title: "Real-Time Stock Trading Platform",
    image: projectImage1,
    description: `Built a user-friendly web and iOS app that lets people search for stocks, track their portfolio, and get live updates on prices, news, and charts. Using APIs from Finnhub and Polygon AI, the app provides real-time stock information to help users stay informed. It also includes a simulated trading feature where users can buy and sell stocks with a virtual wallet and watch their portfolio grow. The app stores all data securely in MongoDB, ensuring everything updates quickly and smoothly. This project combines modern tech to make stock trading easy and fun.`,
    techstack: "React, JavaScript, Node.js, MongoDB, GCP, SwiftUI, Bootstrap",
  },
  {
    title:"Medgaurd - Secure Decentralized EHR Audit System ",
    image: projectImage10,
    description: `A secure web-based audit logging system for electronic health records (EHRs) using React and Flask. The system allows patients and auditors to view access logs while preserving privacy and ensuring tamper detection. Access is authenticated via role-based login, and all audit entries include time, user ID, and action type. To ensure immutability and decentralization, I integrated Ethereum-based blockchain logging, so any unauthorized changes to audit data can be detected. The system supports secure queries, encrypted storage, and a clear UI that allows users to track who accessed their health data and when—enabling transparency and accountability.`,
    techstack: "React, Flask, MongoDB, Ethereum",

  },
  {
    title: "ExploreEase – AI Travel Planner",
    image: projectImage5,
    description: `ExploreEase is an intelligent travel assistant designed to simplify trip planning through real-time conversational AI. Built with Next.js and GROQ API, it enables users to craft personalized itineraries effortlessly. By integrating Clerk, ExploreEase ensures a secure and seamless authentication experience, allowing users to log in and manage their sessions with ease. The chatbot is fine-tuned with a structured system prompt, ensuring it delivers accurate and relevant travel recommendations.`,
    techstack: "React, Next.js, GROQ API, Clerk, JavaScript, Vercel",
    previewLink: "https://explore-ease-psi.vercel.app/",
    githubLink: "https://github.com/Aanandhi-sonduri/ExploreEase",
  },

  {
    title: "Real-Time Color Detection Algorithm: Precision in RGB Identification with Python",
    image: projectImage2,
    description: `I engineered a real-time color detection algorithm in Python, integrating advanced computer vision techniques to accurately identify a diverse range of colors, including vital RGB variations such as red, green, and blue. Achieving an outstanding average accuracy of 95%, this project showcases my expertise in leveraging Python's robust libraries like NumPy and Pandas alongside sophisticated NLP and Markov Chain methodologies. By delivering a solution that balances precision with computational efficiency, I demonstrated not only my technical proficiency but also my capability to innovate and solve complex challenges in computer vision."`,
    techstack: "Python, OpenCV, NumPy, Pandas",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Aanandhi-sonduri/Color-Detection-Project-Using-Open-Cv",
  },
  {
    title: "Song Lyrics Generator using Markov Chains",
    image: projectImage3,
    description: `I created an 85% accurate predictive text model using Markov Chains for generating song lyrics. This project utilized Python's NLP capabilities to analyze and predict song lyrics based on existing data. By leveraging advanced techniques in machine learning, I demonstrated both technical proficiency in Python and creative application of AI algorithms in artistic contexts.`,
    techstack: "Python, NLP, Markov Chain, NumPy, Pandas",
    githubLink: "https://github.com/Aanandhi-sonduri/Text-Generation-Using-Markovs-Chain",
  },
  {
    title: "Cryptocurrency Price Prediction Using ARIMA",
    image: projectImage4,
    description: `As a Research Intern, I developed a machine learning model leveraging cryptocurrency and blockchain data to predict daily cryptocurrency prices. By analyzing historical data, I enhanced the model's accuracy, achieving a significant 20% improvement over previous approaches. Using Python, I implemented advanced techniques including Time Series Analysis and Feature Engineering, resulting in an impressive 90% accuracy rate. This project not only deepened my understanding of machine learning in financial markets but also culminated in a research paper documenting my findings.`,
    techstack: "Python, ARIMA, Machine Learning, Time Series Analyis, Feature EaQ2ngineering",
    githubLink: "https://github.com/Aanandhi-sonduri/Cryptocurrency-Price-Prediction-ARIMA",
  },
  
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "asonduri@usc.edu",
  phone: "+1 2242476922",
};
