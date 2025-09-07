import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref && ref.offsetTop <= scrollPos && (ref.offsetTop + ref.offsetHeight) > scrollPos) {
          setActiveSection(key);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition ${
                    activeSection === id
                      ? "text-purple-600 font-semibold"
                      : "hover:text-purple-600"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        ref={(el) => (sectionRefs.current["home"] = el)}
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-purple-50 px-6 pt-24 animate-fadeIn"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">Aman Ingle</h1>
        <p className="text-lg sm:text-xl text-purple-600 font-medium mb-6">
          · AI/ML Engineer · Data Analyst · Tech Enthusiast
        </p>
        <p className="text-gray-700 max-w-2xl mb-8 text-base sm:text-lg leading-relaxed">
          <strong>Driven mind. Analytical instinct. High energy.</strong> — I create with code, analyze with data, and thrive in AI-driven spaces where <span className="text-purple-600 font-medium">innovation meets impact</span>.
        </p>

        <div className="flex space-x-4">
          <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">Learn More</a>
          <a href="#projects" className="border border-purple-600 text-purple-600 hover:bg-purple-100 px-6 py-2 rounded-lg transition">See Projects</a>
        </div>

        <div className="mt-16 animate-bounce">
          <span className="text-2xl text-gray-400">↓</span>
        </div>
        
      </section>

{/* About */}
<section
  id="about"
  ref={(el) => (sectionRefs.current["about"] = el)}
  className="min-h-screen bg-white font-sans text-gray-900 max-w-6xl mx-auto px-6 py-16"
>
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Photo */}
    <div className="flex justify-center">

      <img
        src="/images/profile.png"
        alt="Aman Ingle"
        className="rounded-2xl shadow-lg w-80 h-80 object-cover" />
    </div>

    {/* Right Column - About + Skills */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        About <span className="text-purple-600">Me</span>
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        I am a passionate and results-driven individual with experience in 
        designing, developing, and delivering impactful solutions. My work 
        blends creativity and technical expertise, allowing me to approach 
        challenges with innovative and practical solutions.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        With a strong foundation in modern tools and technologies, I aim to 
        contribute meaningfully to projects and continuously grow my 
        knowledge and skills.
      </p>

      {/* Core Skills */}
      <div className="border border-purple-600 rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-purple-600 mb-4 border-b-2 border-purple-600 inline-block">
          Core Skills
        </h3>
        <ul className="space-y-3 text-gray-800">
          <li>
            <span className="font-semibold text-purple-600">Language:</span> Python, C++
          </li>
          <li>
            <span className="font-semibold text-purple-600">Frontend:</span> React, Tailwind CSS, JavaScript
          </li>
          <li>
            <span className="font-semibold text-purple-600">Backend:</span> Node.js, Express.js, Django
          </li>
          <li>
            <span className="font-semibold text-purple-600">Database:</span> MySQL, Oracle SQL, PL/SQL, MongoDB
          </li>
          <li>
            <span className="font-semibold text-purple-600">Tools:</span> Power BI, DAX, Excel, Tableau
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Projects */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="py-20 px-6 bg-gray-50 animate-fadeIn"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fin Trend AI",
              desc: "Real-time financial news aggregator with scraping, NLP sentiment analysis, and Streamlit dashboard.",
            },
            {
              title: "Link Write – AI LinkedIn Assistant",
              desc: "AI tool for auto LinkedIn posts using LangChain & Groq API. Boosted engagement by 30%.",
            },
            {
              title: "Hospitality Revenue Dashboard",
              desc: "Power BI dashboard with SQL & Excel automation for pricing optimization.",
            },
            // {
            //   title: "Modern-Apperal-Sales-Report",
            //   desc: "Built an interactive Excel dashboard from 30,000+ sales records to track performance, trends, and customer segments for better targeting.",
            // },
            
          ].map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Certifications */}
<section id="certificates" className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Machine Learning Specialization */}
          <a
            href="https://coursera.org/share/229f0071bc321bef7fa5838b45857ce7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transform hover:scale-105 transition duration-300 h-64"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Machine Learning Specialization
            </h3>
            <p className="text-gray-600 text-center">
              Completed specialization covering supervised, unsupervised learning, and deep learning concepts.
            </p>
          </a>

        {/* Google Data Analytics Specialization */}
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/T9UP4J8VEC7Z"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transform hover:scale-105 transition duration-300 h-64"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Google Data Analytics Specialization
            </h3>
            <p className="text-gray-600 text-center">
              Gained hands-on skills in data cleaning, visualization, and dashboard creation using tools like SQL, R, and Tableau.
            </p>
          </a>

        {/* Python Full Stack (No Link) */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transform hover:scale-105 transition duration-300 h-64">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Python Full Stack (QSpiders)
          </h3>
          <p className="text-gray-600 text-center">
            In-depth course covering frontend, backend, databases, and deployment.
          </p>
        </div>

      </div>
    </div>
</section>

      {/* Leadership & Activities Section */}
<section id="leadership" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership & Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Activity 1 */}
            <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="images/img5.webp" // Replace with your image
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Vice President At ED CELL AND IIC</h3>
                <p className="text-gray-600 mt-2">
                      <ol>
                        <li>
                          Successfully organized 10+ innovation and entrepreneurship-focused workshops, 
                          fostering a culture of creativity and learning.
                        </li>
                      </ol>
                </p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src="images/mlsa.jpg"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Microsoft Learn Student Ambassador</h3>
                <p className="text-gray-600 mt-2">
                  Mentored and supported 20+ students in technical and soft skills.
                </p>
              </div>
            </div>

          </div>
        </div>
</section>

      {/* Publication */}
      <section className="py-20 px-6 max-w-4xl mx-auto animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-6 text-center">Publication</h2>
        <p className="text-gray-700 text-center">
          <strong>“Automated News Aggregation and Analysis System for Finance”</strong> – E-ISSN: 2582-5208
        </p>
      </section>


      {/* Contact */}
      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className="py-20 px-6 max-w-4xl mx-auto text-center animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-700 underline">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you want to collaborate, need insights for projects, or just want to say hello — I’d love to hear from you!
        </p>
        <div className="flex justify-center space-x-4 text-white text-xl">
          <a href="https://www.linkedin.com/in/amaningle11102003/" target="_blank" className="bg-blue-700 p-3 rounded-full hover:opacity-80">
            <FaLinkedin />
          </a>
          <a href="https://github.com/itzaman2003" target="_blank" className="bg-gray-800 p-3 rounded-full hover:opacity-80">
            <FaGithub />
          </a>
          <a href="mailto:ingleaman22@gmail.com" className="bg-red-500 p-3 rounded-full hover:opacity-80">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm leading-relaxed">
              Ready to build impactful products, lead passionate communities, and create meaningful content — all while having fun along the way.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-xs text-gray-400">© 2025 Aman Ingle. All rights reserved.</p>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.linkedin.com/in/amaningle11102003/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://github.com/itzaman2003/itzaman2003" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="mailto:ingleaman22@gmail.com" className="hover:text-white">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <nav className="space-x-4 text-sm">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#top" className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



