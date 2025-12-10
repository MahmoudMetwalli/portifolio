"use client";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import NewHero from "../components/NewHero";
import NewSection from "../components/NewSection";
import NewProjectCard from "../components/NewProjectCard";
import NewSkillBadge from "../components/NewSkillBadge";
import Timeline from "../components/Timeline";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";

export default function Home() {
  const experiences = [
    {
      title: "Mid Senior Backend Engineer",
      company: "Vconnct",
      duration: "March 2025 – Present",
      details: [
        "Implemented real-time video/audio communication using WebRTC, reliably supporting up to 80 concurrent participants.",
        "Integrated backend with a dedicated SFU to manage signaling, achieving 25% lower latency and 99.7% connection success.",
        "Built in-meeting chat module with WebSockets for real-time messaging, typing indicators, and user presence.",
        "Designed persistent message storage powered by RabbitMQ handling 15k-20k messages/day with <150ms delivery.",
        "Implemented live transcription pipeline using WebSocket streaming to AI service with 1-2 second latency.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Ramses International LLC",
      duration: "April 2024 – March 2025",
      details: [
        "Designed and built scalable microservices handling peak loads of 2K+ RPS with 99.9% uptime.",
        "Introduced event-driven architecture using RabbitMQ, reducing synchronous blocking calls by ~70%.",
        "Built MQTT-based real-time communication layer supporting 5K+ concurrent IoT devices with <500ms latency.",
        "Engineered co-working space reservation system with distributed locks, handling 1K+ daily bookings.",
        "Added comprehensive logging and distributed tracing, reducing incident debugging time by 60%.",
      ],
    },
    {
      title: "Backend Developer",
      company: "TLC Care Services",
      duration: "March 2022 – March 2024",
      details: [
        "Modernized legacy codebase for a 10K MAU app, reducing critical bugs by 40% and API latency by 45%.",
        "Designed and rolled out two major versioned REST APIs (v2 & v3) with zero-downtime deployments.",
        "Built 40+ high-traffic REST APIs handling 5M+ daily requests at 99.99% uptime.",
        "Developed interactive analytics dashboards processing 100M+ data points monthly.",
        "Collaborated with an 8-person frontend team, accelerating feature delivery by 25%.",
      ],
    },
  ];

  const skills = [
    { name: "Python", category: "language" },
    { name: "JavaScript/TypeScript", category: "language" },
    { name: "Java", category: "language" },
    { name: "C#", category: "language" },
    { name: "C", category: "language" },
    { name: "Go", category: "language" },
    { name: "Gin", category: "backend" },
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <NewHero />

      <NewSection
        title="About Me"
        id="about"
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center order-1 lg:order-1"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative rounded-2xl overflow-hidden shadow-2xl">
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
            className="space-y-4 lg:space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Results-driven Senior Backend Engineer with 4+ years of experience
              owning and scaling high-traffic consumer applications. Proven
              track record of modernizing legacy codebases, reducing critical
              bugs by 40%, cutting API latency by 45%, and delivering
              zero-downtime major API version upgrades while maintaining 100%
              backward compatibility and 99.99% uptime. Specialized in building
              and optimizing REST APIs, secure payment/auth integrations, and
              analytics systems processing. Excel at cross-functional
              collaboration across time zones, consistently achieving 100%
              on-time delivery and faster release cycles.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 px-3 py-2 sm:px-4 sm:py-2 rounded-lg">
                <FaAward className="text-green-600 dark:text-green-400 text-sm sm:text-base" />
                <span className="text-green-800 dark:text-green-300 font-semibold text-sm sm:text-base">
                  Software Engineer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </NewSection>

      <NewSection title="Experience" bgColor="bg-gray-50 dark:bg-gray-900">
        <Timeline experiences={experiences} />
      </NewSection>

      <NewSection
        title="Skills & Technologies"
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <NewSkillBadge
              key={index}
              skill={skill.name}
              category={skill.category}
            />
          ))}
        </div>
      </NewSection>

      <NewSection
        title="Featured Projects"
        id="projects"
        bgColor="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <NewProjectCard
            title="Snacky"
            description="Full-Stack Food Ordering App • Next.js 14 / App Router"
            details={[
              "Beautiful, high-performance food ordering web app",
              "Smooth animations & mock payment integration (Stripe-ready)",
              "Real-time order tracking & fully functional admin dashboard",
              "Responsive design, dark mode, and email notifications",
            ]}
            liveUrl=""
            githubUrl="https://github.com/MahmoudMetwalli/snacky"
            featured={true}
          />
          <NewProjectCard
            title="Secure Banking Core System"
            description="Multi-tenant banking platform • .NET / C#"
            details={[
              "Supports unlimited user accounts & instant transfers",
              "Real-time multi-currency conversion (100+ currencies)",
              "Clean architecture, CQRS, and Entity Framework Core",
              "Role-based authentication for production-scale apps",
            ]}
            liveUrl=""
            githubUrl="https://github.com/MahmoudMetwalli/BankingSystem"
            featured={true}
          />
          <NewProjectCard
            title="Intelligent Product Catalog"
            description="Smart Search Engine • Django / Python"
            details={[
              "Advanced hybrid search with typo tolerance",
              "Arabic–English bilingual search using Elasticsearch",
              "Full CRUD, category hierarchy, and image uploads",
              "Admin dashboard for e-commerce backends",
            ]}
            liveUrl=""
            githubUrl="https://github.com/MahmoudMetwalli/product_management"
            featured={true}
          />
          <NewProjectCard
            title="PCI-DSS Payment Gateway"
            description="Enterprise Payment System • NestJS / TypeScript"
            details={[
              "Secure card tokenization & 3D Secure",
              "Fraud detection hooks & guaranteed delivery (RabbitMQ)",
              "Event-driven architecture with Outbox/Inbox patterns",
              "High-throughput transactions using MongoDB",
            ]}
            liveUrl=""
            githubUrl="https://github.com/MahmoudMetwalli/payment-gateway"
            featured={true}
          />
          <NewProjectCard
            title="IoT Fleet Management"
            description="Real-time IoT Platform • Express.js / Node.js"
            details={[
              "Multi-tenancy, remote configuration & OTA updates",
              "Live telemetry visualization with Socket.IO",
              "Manage thousands of gateways & millions of devices",
              "JWT auth & responsive React + Tailwind frontend",
            ]}
            liveUrl=""
            githubUrl="https://github.com/MahmoudMetwalli/gateway"
            featured={true}
          />
        </div>
      </NewSection>

      <NewSection
        title="Education & Certifications"
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaAward className="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              AWS Solutions Architect Associate
            </h3>
            <p className="text-blue-600 dark:text-blue-300 font-semibold mb-2 text-sm lg:text-base">
              Amazon Web Services
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Scalable, highly available, and fault-tolerant systems on AWS.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaAward className="text-2xl lg:text-3xl text-orange-600 dark:text-orange-400 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              AWS Cloud Practitioner
            </h3>
            <p className="text-orange-600 dark:text-orange-300 font-semibold mb-2 text-sm lg:text-base">
              Amazon Web Services
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Foundational knowledge of AWS Cloud concepts and security.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaAward className="text-2xl lg:text-3xl text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              McKinsey Forward Program
            </h3>
            <p className="text-green-600 dark:text-green-300 font-semibold mb-2 text-sm lg:text-base">
              McKinsey & Company
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Problem-solving, personal productivity, and digital leadership.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaGraduationCap className="text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              ALX Software Engineering Program
            </h3>
            <p className="text-purple-600 dark:text-purple-300 font-semibold mb-2 text-sm lg:text-base">
              Holberton School | 2023–2024
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Computer Science Fundamentals and Backend Specialization.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaAward className="text-2xl lg:text-3xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              ALX Soft Skills Program
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2 text-sm lg:text-base">
              ALX Africa | 2023–2024
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
              Professional Development Skills for the Digital Age.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-slate-200 dark:from-gray-800 dark:to-gray-700/50 p-6 lg:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaGraduationCap className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-4" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
              Bachelor of Pharmacy
            </h3>
            <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2 text-sm lg:text-base">
              Ain Shams University, Cairo
            </p>
          </motion.div>
        </div>
      </NewSection>

      <NewSection
        title="Let's Connect"
        id="contact"
        bgColor="bg-gray-50 dark:bg-gray-900"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 lg:mb-6">
              Ready to build something amazing together?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 lg:mb-8">
              I&apos;m always open to discussing new opportunities,
              collaborating on projects, or just having a conversation about
              technology and innovation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 lg:mb-8">
              <a
                href="mailto:mammkbih@gmail.com"
                className="bg-blue-600 text-white p-3 sm:p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Email"
              >
                <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+201018615864"
                className="bg-green-600 text-white p-3 sm:p-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Phone"
              >
                <FaPhone size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoud-metwalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-3 sm:p-4 rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="LinkedIn"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/MahmoudMetwalli"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 sm:p-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="GitHub"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://portfolio-mahmoud-metwalli.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white p-3 sm:p-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Portfolio"
              >
                <FaGlobe size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </NewSection>

      <footer className="bg-gray-800 dark:bg-black text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-base sm:text-lg">
            &copy; {new Date().getFullYear()} Mahmoud Metwalli.
          </p>
        </div>
      </footer>
    </div>
  );
}
