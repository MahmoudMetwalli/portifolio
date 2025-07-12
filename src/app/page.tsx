"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaAward, FaGraduationCap } from "react-icons/fa";
import NewHero from "../components/NewHero";
import NewSection from "../components/NewSection";
import NewProjectCard from "../components/NewProjectCard";
import NewSkillBadge from "../components/NewSkillBadge";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";
import DownloadCVButton from '../components/DownloadCVButton';
import CVPage from './cv/page';

export default function Home() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Vconnct",
      duration: "March 2025 – Present",
      details: [
        "Write effective, scalable code",
        "Develop back-end components to improve responsiveness and overall performance",
        "Test and debug programs",
        "Building reusable code and libraries for future use"
      ]
    },
    {
      title: "Software Engineer",
      company: "TLC Care Services",
      duration: "March 2025 – Present",
      details: [
        "Building, maintaining, and optimizing scalable APIs",
        "Ensuring data security, performance, and reliability",
        "Collaborating with the front-end team",
        "Debugging and troubleshooting full-stack issues"
      ]
    },
    {
      title: "Software Engineer",
      company: "Ramses International LLC",
      duration: "Oct 2024 – March 2025",
      details: [
        "Built scalable backend systems using microservices architecture",
        "Integrated RabbitMQ for asynchronous task processing",
        "Designed MQTT-based solutions for IoT communication"
      ]
    },
    {
      title: "Hospital Pharmacist",
      company: "Ain Shams University Hospitals, AllDemerdash Hospital",
      duration: "Jan 2023 – Sep 2024",
      details: []
    },
    {
      title: "Community Pharmacist",
      company: "Care Pharmacies",
      duration: "Dec 2021 – Feb 2023",
      details: []
    },
    {
      title: "Compulsory Military Service",
      company: "Egyptian Armed Forces",
      duration: "Oct 2020 – Dec 2021",
      details: []
    }
  ];

  const skills = [
    { name: "Python", category: "language" },
    { name: "JavaScript/TypeScript", category: "language" },
    { name: "Java", category: "language" },
    { name: "C#", category: "language" },
    { name: "C", category: "language" },
    { name: "NestJS", category: "backend" },
    { name: "NextJS", category: "frontend" },
    { name: "FastAPI", category: "backend" },
    { name: "Spring Boot", category: "backend" },
    { name: ".NET", category: "backend" },
    { name: "Flask", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "RabbitMQ", category: "devops" },
    { name: "Mosquitto", category: "devops" },
    { name: "Redis", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "AWS", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "Agile Methodologies", category: "devops" },
    { name: "Microservices Architecture", category: "backend" },
    { name: "RESTful APIs", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "gRPC", category: "backend" },
    { name: "Protocol Buffers", category: "backend" },
    { name: "WebRTC", category: "backend" },
    { name: "WebSockets", category: "backend" },
    { name: "MQTT", category: "backend" },
    { name: "AMQP", category: "backend" },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <NewHero />

      <NewSection title="About Me" id="about" bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pic.jpeg"
                alt="Mahmoud Metwalli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-lg text-gray-600 leading-relaxed">
              I am a Software Engineer with a unique background that combines healthcare expertise with cutting-edge technology. 
              With experience in building scalable systems using microservices architecture, I bring a distinctive perspective 
              to software development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey from pharmacy to programming has taught me the importance of precision, attention to detail, 
              and user-centered design. I&apos;m passionate about creating solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <FaGraduationCap className="text-blue-600" />
                <span className="text-blue-800 font-semibold">Pharmacist</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <FaAward className="text-green-600" />
                <span className="text-green-800 font-semibold">Software Engineer</span>
              </div>
            </div>
            <div className="mt-8">
              <DownloadCVButton />
            </div>
          </motion.div>
        </div>
      </NewSection>

      <NewSection title="Experience" bgColor="bg-gray-50">
        <Timeline experiences={experiences} />
      </NewSection>

      <NewSection title="Skills & Technologies" bgColor="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <NewSkillBadge key={index} skill={skill.name} category={skill.category} />
          ))}
        </div>
      </NewSection>

      <NewSection title="Featured Projects" id="projects" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewProjectCard
            title="Snacky"
            description="A healthy food ordering application built with Next.js and PostgreSQL."
            details={[
              "Full-stack web application",
              "User authentication & authorization",
              "Real-time order tracking",
              "Payment integration"
            ]}
            liveUrl="https://snacky-mahmoud-metwallis-projects.vercel.app/login"
            githubUrl="https://github.com/MahmoudMetwalli/snacky"
            featured={true}
          />
          <NewProjectCard
            title="Wasla"
            description="Python package for event-driven architecture with RabbitMQ."
            details={[
              "Event-based systems",
              "Middleware chain pattern",
              "Pydantic validation",
              "Published to PyPI"
            ]}
            liveUrl="https://pypi.org/project/wasla/0.0.1/"
            githubUrl="https://github.com/MahmoudMetwalli/wasla"
            liveUrlText="PyPI"
            featured={true}
          />
          <NewProjectCard
            title="Simple Shell"
            description="A custom command-line interpreter written in C."
            details={[
              "Command execution with arguments",
              "Environment variable management",
              "Built-in commands implementation"
            ]}
            githubUrl="https://github.com/MahmoudMetwalli/simple_shell"
          />
          <NewProjectCard
            title="Printf Clone"
            description="Custom implementation of the C printf function."
            details={[
              "Multiple format specifiers",
              "Memory management",
              "Error handling"
            ]}
            githubUrl="https://github.com/MahmoudMetwalli/printf"
          />
          <NewProjectCard
            title="Binary Trees"
            description="Comprehensive C implementation of binary tree data structures."
            details={[
              "Tree traversal algorithms",
              "Insertion and deletion",
              "Balance operations"
            ]}
            githubUrl="https://github.com/MahmoudMetwalli/binary_trees"
          />
          <NewProjectCard
            title="Sorting Algorithms"
            description="Collection of fundamental sorting algorithms in C."
            details={[
              "Bubble, Quick, Merge sort",
              "Time complexity analysis",
              "Performance comparisons"
            ]}
            githubUrl="https://github.com/MahmoudMetwalli/sorting_algorithms"
          />
          <NewProjectCard
            title="Hash Tables"
            description="C implementation of hash tables with chaining for collision handling."
            details={[]}
            githubUrl="https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x1A-hash_tables"
          />
          <NewProjectCard
            title="Singly Linked Lists"
            description="C implementation of singly linked lists."
            details={[]}
            githubUrl="https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x12-singly_linked_lists"
          />
          <NewProjectCard
            title="Doubly Linked Lists"
            description="C implementation of doubly linked lists."
            details={[]}
            githubUrl="https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x17-doubly_linked_lists"
          />
          <NewProjectCard
            title="Search Algorithms"
            description="A collection of fundamental searching algorithms in C."
            details={[]}
            githubUrl="https://github.com/MahmoudMetwalli/alx-low_level_programming/tree/master/0x1E-search_algorithms"
          />
          <NewProjectCard
            title="Monty Interpreter"
            description="A bytecode interpreter for the Monty language, implemented in C."
            details={[]}
            githubUrl="https://github.com/MahmoudMetwalli/monty"
          />
        </div>
      </NewSection>

      <NewSection title="Education & Certifications" bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaGraduationCap className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">ALX Software Engineering Program</h3>
            <p className="text-blue-600 font-semibold mb-2">Holberton School | 2023–2024</p>
            <p className="text-gray-600">Computer Science Fundamentals</p>
            <a
              href="https://intranet.alxswe.com/certificates/JRPPZLBFnG"
              className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate →
            </a>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaGraduationCap className="text-3xl text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Pharmacy</h3>
            <p className="text-purple-600 font-semibold mb-2">Ain Shams University | 2020</p>
            <p className="text-gray-600">Overall grade: Very Good, 80.47%</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaAward className="text-3xl text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">AWS Cloud Practitioner</h3>
            <p className="text-orange-600 font-semibold mb-2">Amazon Web Services | 2024</p>
            <a
              href="https://www.credly.com/badges/a6142965-a3a7-4782-a7f4-4f583764a02a/public_url"
              className="inline-block mt-4 text-orange-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential →
            </a>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaAward className="text-3xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">McKinsey Forward Program</h3>
            <p className="text-green-600 font-semibold mb-2">McKinsey & Company</p>
            <p className="text-gray-600">Leadership & Business Skills</p>
            <a
              href="https://www.credly.com/badges/0bb34f67-63fd-45aa-9c0f-05221da21fa1/public_url"
              className="inline-block mt-4 text-green-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential →
            </a>
          </motion.div>
        </div>
      </NewSection>

      <div id="cv-content" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <CVPage />
      </div>

      <NewSection title="Let's Connect" id="contact" bgColor="bg-gray-50">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to build something amazing together?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              I&apos;m always open to discussing new opportunities, collaborating on projects, or just having a conversation about technology and innovation.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:mammkbih@gmail.com"
                className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+201018615864"
                className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Phone"
              >
                <FaPhone size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoud-metwalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-4 rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/MahmoudMetwalli"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://portfolio-mahmoud-metwalli.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Portfolio"
              >
                <FaGlobe size={24} />
              </a>
            </div>
            
            <p className="text-gray-500 text-lg">
              📍 Heliopolis, Cairo, Egypt
            </p>
          </motion.div>
        </div>
      </NewSection>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Mahmoud Metwalli. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
