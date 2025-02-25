import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mahmoud Metwalli</h1>
        <p className="text-lg sm:text-xl text-gray-300">Backend Engineer | Pharmacist</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center sm:justify-start">
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/your-photo.jpeg"
                alt="Mahmoud Metwalli"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300">
              I am a Backend Engineer with experience in building scalable systems using microservices architecture. I also hold a degree in Pharmacy and have worked in healthcare settings. I am passionate about technology, problem-solving, and continuous learning.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">ALX Software Engineering Program | Computer Science Fundamentals</h3>
            <p className="text-gray-300">Holberton School | 2023–2024</p>
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
            <h3 className="text-xl font-semibold">Back End Engineer</h3>
            <p className="text-gray-300">Ramses International LLC | Oct 2024 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Built scalable backend systems using microservices architecture.</li>
              <li>Integrated RabbitMQ for asynchronous task processing and inter-service communication.</li>
              <li>Designed MQTT-based solutions.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">Hospital Pharmacist</h3>
            <p className="text-gray-300">Ain Shams University Hospitals, AIDemerdash Hospital | Jan 2023 – Sep 2024</p>
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Certifications</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">AWS Cloud Practitioner Certification | 2024</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-4">
            <h3 className="text-xl font-semibold">McKinsey Forward Program Certificate | Leadership & Business Skills</h3>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Contact</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
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
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-300 mt-12">
        <p>&copy; {new Date().getFullYear()} Mahmoud Metwalli. All rights reserved.</p>
      </footer>
    </div>
  );
}