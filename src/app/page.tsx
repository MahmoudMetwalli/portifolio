import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mahmoud Metwalli</h1>
        <p className="text-lg sm:text-xl text-gray-300">Software Engineer | Pharmacist</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center sm:justify-start">
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/pic.jpeg"
                alt="Mahmoud Metwalli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300">
              I am a Software Engineer with experience in building scalable systems using microservices architecture. I also hold a degree in Pharmacy and have worked in healthcare settings. I am passionate about technology, problem-solving, and continuous learning.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">ALX Software Engineering Program | Computer Science Fundamentals</h3>
            <p className="text-gray-300">Holberton School | 15 Months | 2023–2024</p>
            <a
              href="https://intranet.alxswe.com/certificates/JRPPZLBFnG"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credential URL
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Bachelor of Pharmacy</h3>
            <p className="text-gray-300">Ain Shams University, Cairo, Egypt | Graduated 2020</p>
            <p className="text-gray-300">Overall grade: Very Good, 80.47%</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Professional Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-300">Vconnct | March 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Write effective, scalable code</li>
              <li>Develop back-end components to improve responsiveness and overall performance</li>
              <li>Test and debug programs</li>
              <li>Building reusable code and libraries for future use</li>
              <li>Improve functionality of existing systems</li>
              <li>Implement security and data protection solutions</li>
              <li>Assess and prioritize feature requests</li>
              <li>Coordinate with internal teams to understand user requirements and provide technical solutions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-300">TLC Care Services | March 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Building, maintaining, and optimizing scalable APIs to support app functionality</li>
              <li>Ensuring data security, performance, and reliability of the backend system</li>
              <li>Collaborating with the front-end team to deliver a seamless user experience</li>
              <li>Debugging and troubleshooting both backend and frontend issues as needed</li>
              <li>Staying up to date with best practices and emerging technologies</li>
              <li>Conducting remote sharing during meetings and updates</li>
              <li>Providing regular progress reports and updates on the project&apos;s status</li>
              <li>Responsible for completing the necessary classes required to finalize any builds as needed</li>
              <li>Must track daily tasks and monitor progress related to the application</li>
              <li>Troubleshoot issues as they arise and provide updates on the solutions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-300">Ramses International LLC | Oct 2024 – March 2025</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Built scalable backend systems using microservices architecture</li>
              <li>Integrated RabbitMQ for asynchronous task processing and inter-service communication</li>
              <li>Designed MQTT-based solutions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Hospital Pharmacist</h3>
            <p className="text-gray-300">Ain Shams University Hospitals, AllDemerdash Hospital | Jan 2023 – Sep 2024</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Community Pharmacist</h3>
            <p className="text-gray-300">Care Pharmacies | Dec 2021 – Feb 2023</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Compulsory Military Service</h3>
            <p className="text-gray-300">Egyptian Armed Forces | Oct 2020 – Dec 2021</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Skills & Technologies</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Programming Languages</h3>
            <p className="text-gray-300">Python, JavaScript/TypeScript, Java, C#, C</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Technologies</h3>
            <p className="text-gray-300">NestJS, NextJS, FastAPI, Spring Boot, .NET, Flask, Django, RabbitMQ, Mosquitto</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            <p className="text-gray-300">Problem-Solving | Cross-Functional Collaboration | Analytical Thinking | Agile Mindset | Continuous Learning | Attention to Detail</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Certifications</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">AWS Cloud Practitioner Certification | 2024</h3>
            <a
              href="https://www.credly.com/badges/a6142965-a3a7-4782-a7f4-4f583764a02a/public_url"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">McKinsey Forward Program Certificate | Leadership & Business Skills</h3>
            <a
              href="https://www.credly.com/badges/0bb34f67-63fd-45aa-9c0f-05221da21fa1/public_url"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Contact</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">Heliopolis, Cairo, Egypt</p>
            <p className="text-gray-300">Email: mammkbih@gmail.com</p>
            <p className="text-gray-300">Phone: +201018615864</p>
            <p className="text-gray-300">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mahmoud-metwalli/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/mahmoud-metwalli/
              </a>
            </p>
            <p className="text-gray-300">
              GitHub:{" "}
              <a
                href="https://github.com/MahmoudMetwalli"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/MahmoudMetwalli
              </a>
            </p>
            <p className="text-gray-300">
              Portfolio:{" "}
              <a
                href="https://portfolio-mahmoud-metwalli.vercel.app/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://portfolio-mahmoud-metwalli.vercel.app/
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-300 mt-12">
        <p>&copy; {new Date().getFullYear()} Mahmoud Metwalli. All rights reserved.</p>
      </footer>
    </div>
  );
}
