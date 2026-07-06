import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaCertificate,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "8.4", label: "CGPA in AI & ML Engineering" },
  { value: "10+", label: "Innovation workshops led" },
  { value: "20+", label: "Students mentored" },
  { value: "2026", label: "Microsoft Build AI Hackathon" },
];

const skillGroups = [
  {
    icon: FaTools,
    title: "Engineering",
    items: ["Python", "Robot Framework", "FastAPI", "REST APIs", "Git", "CI/CD"],
  },
  {
    icon: FaDatabase,
    title: "Data & Cloud",
    items: ["SQL Server", "MySQL", "Oracle SQL", "Databricks", "AWS", "Airflow"],
  },
  {
    icon: FaRocket,
    title: "Analytics & Frontend",
    items: ["Power BI", "DAX", "React", "Next.js", "TypeScript", "Tableau"],
  },
];

const experience = [
  {
    role: "Associate Engineer",
    company: "Blue Ridge Global",
    period: "Sept 2025 - Present",
    summary:
      "Working on enterprise Supply Chain Planning projects across SCP Classic, XPression, and XPression2 (DPI).",
    bullets: [
      "Leading the XPression automation initiative by coordinating testing activities and supporting delivery of automation solutions.",
      "Building and improving automation testing frameworks with Python and Robot Framework.",
      "Working with Databricks, AWS, SQL Server, SDLC practices, and CI/CD workflows to support scalable delivery.",
      "Designing automated test cases that reduce manual effort and improve product quality.",
    ],
  },
];

const projects = [
  {
    title: "AI Release Guardian",
    tag: "Hackathon 2026",
    desc:
      "AI-powered release risk platform that analyzes GitHub pull requests, security gaps, testing coverage, and deployment risk with LLMs.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "OpenAI API", "SQLite"],
  },
  {
    title: "Data Validation & Workflow Automation",
    tag: "Enterprise Automation",
    desc:
      "Scalable framework for enterprise data validation, workflow monitoring, and automated Airflow DAG triggering.",
    tech: ["Python", "MS-SQL", "Databricks", "Pandas", "Robot Framework", "Airflow"],
  },
  {
    title: "Data Migration Application",
    tag: "Full Stack",
    desc:
      "Migration validation app with mandatory-field checks, duplicate detection, orphan validation, and pre/post migration controls.",
    tech: ["Angular", "Python", "Flask", "Pandas", "Regex", "Matplotlib"],
  },
];

const certificates = [
  {
    title: "Machine Learning Specialization",
    text: "Supervised learning, unsupervised learning, and deep learning foundations.",
    href: "https://coursera.org/share/229f0071bc321bef7fa5838b45857ce7",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    text: "Data cleaning, visualization, SQL, R, Tableau, and analytical storytelling.",
    href: "https://www.coursera.org/account/accomplishments/specialization/T9UP4J8VEC7Z",
  },
  {
    title: "Python Full Stack Development",
    text: "Frontend, backend, databases, deployment, and production-oriented development.",
  },
];

const activities = [
  {
    title: "Vice President - ED Cell and IIC",
    image: "/images/img5.webp",
    text: "Organized 10+ innovation and entrepreneurship workshops that encouraged creative problem solving.",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    image: "/images/mlsa.jpg",
    text: "Mentored and supported 20+ students across technical learning, communication, and career readiness.",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref && ref.offsetTop <= scrollPos && ref.offsetTop + ref.offsetHeight > scrollPos) {
          setActiveSection(key);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8f4] font-sans text-slate-950 scroll-smooth">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-black uppercase tracking-[0.22em] text-slate-950">
            Aman
          </a>
          <ul className="fixed bottom-4 left-4 right-4 flex items-center gap-2 overflow-x-auto rounded-full border border-slate-200 bg-white/90 p-1 text-sm font-semibold text-slate-600 shadow-lg backdrop-blur-xl md:static md:overflow-visible md:bg-white/80 md:shadow-sm">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block rounded-full px-4 py-2 transition ${
                    activeSection === id ? "bg-slate-950 text-white" : "hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:ingleaman22@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-teal-700"
            aria-label="Email Aman"
          >
            <FaEnvelope />
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          ref={(el) => (sectionRefs.current.home = el)}
          className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_32%),linear-gradient(135deg,#f7f8f4_0%,#eef6f2_42%,#f6f0df_100%)]" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm">
                <FaAward className="text-amber-500" />
                Spot Award winner at Blue Ridge Global
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Aman Ingle
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold text-slate-700 sm:text-2xl">
                AI/ML Engineer, Data Analyst, and automation-focused Associate Engineer.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I build practical AI, data, and workflow automation systems for teams that care about reliable
                delivery, cleaner decisions, and measurable impact.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-teal-700"
                >
                  View Experience <FaArrowRight />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-bold text-slate-900 transition hover:border-teal-500 hover:text-teal-700"
                >
                  Explore Projects
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white bg-white/75 p-4 shadow-sm">
                    <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-5 rounded-[2rem] bg-teal-500/10" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-900/15">
                <img src="/images/profile.png" alt="Aman Ingle" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
                <div className="mt-3 rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm font-semibold text-teal-200">Current focus</p>
                  <p className="mt-1 text-lg font-bold">Automation testing, data workflows, and AI-assisted release quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={(el) => (sectionRefs.current.about = el)}
          className="mx-auto max-w-6xl px-5 py-20"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="section-title">Engineer with a data-first mindset.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                I completed my Bachelor of Engineering in Artificial Intelligence and Machine Learning from P.E.S.
                Modern College of Engineering, Pune, with an 8.4 CGPA. My work sits at the intersection of automation,
                analytics, and AI-assisted product delivery.
              </p>
              <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">B.E. in AI and Machine Learning</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      Savitribai Phule Pune University | 2021 - 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {skillGroups.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current.experience = el)}
          className="bg-slate-950 px-5 py-20 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker text-teal-200">Experience</p>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="section-title text-white">Building automation for enterprise supply chain teams.</h2>
              <div className="space-y-5">
                {experience.map((item) => (
                  <article key={item.company} className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-400 text-slate-950">
                          <FaBriefcase />
                        </div>
                        <h3 className="text-2xl font-black">{item.role}</h3>
                        <p className="mt-1 text-lg font-bold text-teal-200">{item.company}</p>
                      </div>
                      <p className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-slate-200">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-5 text-slate-300">{item.summary}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
          className="mx-auto max-w-6xl px-5 py-20"
        >
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">Applied AI, data, and automation work.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Selected work from hackathons, enterprise workflows, and full-stack data validation projects.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-800">
                  {project.tag}
                </p>
                <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="section-kicker">Proof</p>
                <h2 className="section-title">Certificates, achievements, and community leadership.</h2>
                <div className="mt-6 rounded-lg border border-teal-200 bg-teal-50 p-5 text-teal-950">
                  <p className="text-sm font-black uppercase tracking-wide">Achievement</p>
                  <p className="mt-2 text-lg font-bold">
                    Received the Spot Award at Blue Ridge Global for testing across different verticals to ensure
                    quality.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {certificates.map((certificate) => {
                  const content = (
                    <>
                      <FaCertificate className="text-2xl text-teal-700" />
                      <h3 className="mt-4 text-lg font-black text-slate-950">{certificate.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{certificate.text}</p>
                    </>
                  );

                  if (certificate.href) {
                    return (
                      <a
                        key={certificate.title}
                        href={certificate.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={certificate.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {activities.map((activity) => (
                <article key={activity.title} className="overflow-hidden rounded-lg border border-slate-200 bg-[#f7f8f4] shadow-sm">
                  <img src={activity.image} alt={activity.title} className="h-56 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-950">{activity.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{activity.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="section-kicker justify-center">Publication</p>
          <h2 className="section-title">Automated News Aggregation and Analysis System for Finance</h2>
          <p className="mt-4 text-slate-600">Published with E-ISSN: 2582-5208.</p>
        </section>

        <section
          id="contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className="bg-slate-950 px-5 py-20 text-white"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-kicker justify-center text-teal-200">Contact</p>
            <h2 className="section-title text-white">Let us build something useful.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Open to conversations around AI products, data automation, analytics dashboards, and engineering roles.
            </p>
            <div className="mt-8 flex justify-center gap-3 text-xl">
              <a
                href="https://www.linkedin.com/in/amaningle11102003/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/itzaman2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a href="mailto:ingleaman22@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-semibold text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Aman Ingle. Built with React and Tailwind CSS.</p>
          <nav className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-slate-950">
              About
            </a>
            <a href="#experience" className="hover:text-slate-950">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-950">
              Projects
            </a>
            <a href="#home" className="hover:text-slate-950">
              Back to top
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
