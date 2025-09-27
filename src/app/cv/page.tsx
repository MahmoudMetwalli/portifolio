import React from "react";

const CVPage = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "TLC Care Services",
      duration: "March 2025 – Present",
      details: [
        "Developed a platform connecting caregivers and patients, featuring reservation systems and job posting functionalities.",
        "Built a comprehensive admin administration application for system management.",
        "Integrated third-party services such as Checkr for background checks and Stripe for payment processing.",
        "Leveraged AWS services for deploying and managing scalable and reliable infrastructure.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Vconnct",
      duration: "March 2025 – Present",
      details: [
        "Implemented real-time video and audio communication features using WebRTC.",
        "Developed a comprehensive meeting module with live chat functionality powered by WebSockets.",
        "Engineered a robust messaging system using RabbitMQ as a message broker for asynchronous communication.",
        "Designed and built scalable RESTful APIs to support front-end services and data exchange.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Ramses International LLC",
      duration: "Oct 2024 – March 2025",
      details: [
        "Built scalable backend systems using microservices architecture.",
        "Integrated RabbitMQ for asynchronous task processing and designed MQTT-based solutions for IoT communication.",
        "Developed a comprehensive stores system with branch schedules and product management.",
        "Engineered a co-working space reservation system with advanced search features and robust race condition handling.",
      ],
    },
    {
      title: "Hospital Pharmacist",
      company: "Ain Shams University Hospitals, AllDemerdash Hospital",
      duration: "Jan 2023 – Sep 2024",
      details: [],
    },
    {
      title: "Community Pharmacist",
      company: "Care Pharmacies",
      duration: "Dec 2021 – Feb 2023",
      details: [],
    },
    {
      title: "Compulsory Military Service",
      company: "Egyptian Armed Forces",
      duration: "Oct 2020 – Dec 2021",
      details: [],
    },
  ];

  const skills = [
    "Python",
    "JavaScript/TypeScript",
    "Java",
    "C#",
    "C",
    "Go",
    "Gin",
    "NestJS",
    "NextJS",
    "FastAPI",
    "Spring Boot",
    ".NET",
    "Flask",
    "Django",
    "RabbitMQ",
    "Mosquitto",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Agile Methodologies",
    "Microservices Architecture",
    "RESTful APIs",
    "GraphQL",
    "gRPC",
    "Protocol Buffers",
    "WebRTC",
    "WebSockets",
    "MQTT",
    "AMQP",
  ];

  const projects = [
    {
      title: "Snacky",
      description:
        "A healthy food ordering application built with Next.js and PostgreSQL.",
      githubUrl: "https://github.com/MahmoudMetwalli/snacky",
      liveUrl: "https://snacky-mahmoud-metwallis-projects.vercel.app/login",
      liveUrlText: "Live Demo",
    },
    {
      title: "Wasla",
      description:
        "Python package for event-driven architecture with RabbitMQ.",
      githubUrl: "https://github.com/MahmoudMetwalli/wasla",
      liveUrl: "https://pypi.org/project/wasla/0.0.1/",
      liveUrlText: "PyPI",
    },
    {
      title: "Simple Shell",
      description: "A custom command-line interpreter written in C.",
      githubUrl: "https://github.com/MahmoudMetwalli/simple_shell",
    },
    {
      title: "Printf Clone",
      description: "Custom implementation of the C printf function.",
      githubUrl: "https://github.com/MahmoudMetwalli/printf",
    },
    {
      title: "Binary Trees",
      description:
        "Comprehensive C implementation of binary tree data structures.",
      githubUrl: "https://github.com/MahmoudMetwalli/binary_trees",
    },
    {
      title: "Sorting Algorithms",
      description: "Collection of fundamental sorting algorithms in C.",
      githubUrl: "https://github.com/MahmoudMetwalli/sorting_algorithms",
    },
    {
      title: "Hash Tables",
      description:
        "C implementation of hash tables with chaining for collision handling.",
      githubUrl:
        "https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x1A-hash_tables",
    },
    {
      title: "Singly Linked Lists",
      description: "C implementation of singly linked lists.",
      githubUrl:
        "https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x12-singly_linked_lists",
    },
    {
      title: "Doubly Linked Lists",
      description: "C implementation of doubly linked lists.",
      githubUrl:
        "https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x17-doubly_linked_lists",
    },
    {
      title: "Search Algorithms",
      description: "A collection of fundamental searching algorithms in C.",
      githubUrl:
        "https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x1E-search_algorithms",
    },
    {
      title: "Monty Interpreter",
      description:
        "A bytecode interpreter for the Monty language, implemented in C.",
      githubUrl: "https://github.com/MahmoudMetwalli/monty",
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      url: "https://www.credly.com/badges/a6142965-a3a7-4782-a7f4-4f583764a02a/public_url",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      url: "https://www.credly.com/badges/aeadc319-0e7a-44f0-b83e-0185cd4e641f/public_url",
    },
    {
      name: "McKinsey Forward Program",
      url: "https://www.credly.com/badges/0bb34f67-63fd-45aa-9c0f-05221da21fa1/public_url",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-serif p-10 max-w-4xl mx-auto" style={{ fontSize: '12pt', lineHeight: '1.6' }}>
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2">Mahmoud Metwalli</h1>
        <p className="text-lg">Heliopolis, Cairo, Egypt</p>
        <p className="text-lg">
          +201018615864 | mammkbih@gmail.com
        </p>
        <p className="text-sm text-gray-600">
          LinkedIn: https://www.linkedin.com/in/mahmoud-metwalli/ | GitHub: https://github.com/MahmoudMetwalli
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Summary</h2>
        <p>
          Software Engineer with a unique background combining healthcare
          expertise with cutting-edge technology. Experienced in building
          scalable systems using microservices architecture. Passionate about
          creating solutions that make a real impact, with a strong foundation
          in precision, attention to detail, and user-centered design.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="font-medium text-gray-600">{exp.company} | {exp.duration}</p>
            {exp.details.length > 0 && (
              <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Skills & Technologies</h2>
        <p className="text-lg">{skills.join(' · ')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            ALX Software Engineering Program
          </h3>
          <p className="text-gray-600">Holberton School | 2023–2024</p>
          <p className="text-sm text-gray-600">Certificate: https://intranet.alxswe.com/certificates/JRPPZLBFnG</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Pharmacy</h3>
          <p className="text-gray-600">Ain Shams University | Graduated 2020</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Certifications</h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          {certifications.map((cert, index) => (
            <li key={index}>
              {cert.name} - <span className="text-sm text-gray-600">{cert.url.replace('https://', '')}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>
        {projects.map((proj, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-600">{proj.description}</p>
            <p className="text-sm text-gray-600">
              GitHub: {proj.githubUrl}
              {proj.liveUrl && ` | ${proj.liveUrlText}: ${proj.liveUrl}`}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVPage;
