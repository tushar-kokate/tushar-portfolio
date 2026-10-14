function App() {
const skills = [
"Java",
"Python",
"C++",
"C#",
"React",
"TypeScript",
"JavaScript",
"HTML & CSS",
"Tailwind CSS",
"Node.js",
"MySQL",
"MongoDB",
"Git & GitHub",
]

const projects = [
{
title: "Personal Portfolio",
category: "WEB DEVELOPMENT",
description:
"A personal website showcasing my skills, projects, education, and professional journey.",
tech: ["React", "TypeScript", "Tailwind CSS"],
github: "https://github.com/tushar-kokate/tushar-portfolio",
number: "01",
},
{
title: "RouteMate AI",
category: "TRAVEL TECHNOLOGY",
description:
"A travel-planning application concept designed to help users discover destinations and organize journeys.",
tech: ["React", "TypeScript", "Vite"],
github: "https://github.com/tushar-kokate",
number: "02",
},
{
title: "Car Spare Parts Marketplace",
category: "WEB APPLICATION",
description:
"A marketplace project concept for finding and exploring car spare parts through a user-friendly interface.",
tech: ["Web Development", "Database"],
github: "https://github.com/tushar-kokate",
number: "03",
},
]

const experiences = [
{
role: ".NET Developer Intern",
company: "WebTech Solution, Pune",
period: "Jun – Dec 2025",
},
{
role: "Web Operation Intern",
company: "TGCT TechGeekConnect Technologies LLP, Pune",
period: "Jan – Feb 2025",
},
{
role: "Android Developer Intern",
company: "Mountreach Solution Pvt. Ltd., Amravati",
period: "Jul – Aug 2022",
},
]

return (
<main className="overflow-hidden bg-[#080b14] text-slate-100">
{/* Navigation */}
<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080b14]/85 backdrop-blur-xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
<a href="#home" className="text-2xl font-black tracking-tight">
TK<span className="text-cyan-400">.</span>
</a>

      <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
        <a href="#about" className="transition hover:text-cyan-400">About</a>
        <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
        <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
        <a href="#experience" className="transition hover:text-cyan-400">Experience</a>
        <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
      </div>

      <a
        href="/resume.pdf"
        download="Tushar-Kokate-Resume.pdf"
        className="rounded-full border border-cyan-400/50 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
      >
        Resume ↗
      </a>
    </nav>
  </header>

  {/* Hero */}
  <section
    id="home"
    className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:gap-20"
  >
    <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="relative z-10">
      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to opportunities
      </div>

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Hello, I'm
      </p>

      <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
        Tushar
        <br />
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          Kokate.
        </span>
      </h1>

      <h2 className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
        Computer Engineering Graduate
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
        I build web experiences, explore modern technologies, and turn
        ideas into practical digital solutions. I'm ready to learn,
        contribute, and grow through real-world software development.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
        >
          Explore Projects →
        </a>

        <a
          href="/resume.pdf"
          download="Tushar-Kokate-Resume.pdf"
          className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
        >
          Download CV ↓
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5 text-sm text-slate-400">
        <a
          href="https://github.com/tushar-kokate"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-400"
        >
          GitHub ↗
        </a>
        <span className="h-1 w-1 rounded-full bg-slate-600" />
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-400"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>

    {/* Profile image */}
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
      <div className="absolute h-64 w-64 rounded-full bg-cyan-400/20 blur-[90px] sm:h-80 sm:w-80" />

      <div className="absolute inset-5 rounded-full border border-cyan-400/20 sm:inset-0" />

      <div className="absolute inset-0 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-slate-600/50" />

      <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/40 sm:h-80 sm:w-80">
        <img
          src="/profile.png"
          alt="Tushar Kokate"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 shadow-xl sm:-left-10">
        <p className="text-xs text-slate-400">Education</p>
        <p className="mt-1 font-bold text-white">B.E. Computer Engineering</p>
      </div>

      <div className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl sm:-right-7">
        <p className="text-sm font-bold text-cyan-300">Developer</p>
        <p className="text-xs text-slate-400">Always learning</p>
      </div>
    </div>
  </section>

  {/* About */}
  <section id="about" className="border-t border-white/[0.07] px-6 py-24 sm:px-10">
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          A little about me
        </p>
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          Building my
          <br />
          <span className="text-slate-500">next chapter.</span>
        </h2>
      </div>

      <div>
        <p className="text-lg leading-9 text-slate-300">
          I'm a Computer Engineering graduate from Pune interested in
          software development, web technologies, and problem-solving.
          Through my education, projects, and internships, I've explored
          different areas of development and learned how technology can
          solve practical problems.
        </p>

        <p className="mt-5 leading-8 text-slate-400">
          I'm now focused on strengthening my skills, developing useful
          applications, and finding an opportunity where I can learn from
          experienced professionals while contributing to a team.
        </p>
      </div>
    </div>
  </section>

  {/* Skills */}
  <section id="skills" className="bg-white/[0.02] px-6 py-24 sm:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        What I work with
      </p>

      <h2 className="text-4xl font-black sm:text-5xl">
        Skills & Technologies<span className="text-cyan-400">.</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-8 text-slate-400">
        Technologies I've worked with through learning, development,
        and project experience.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="group rounded-2xl border border-white/[0.08] bg-[#0c101b] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
          >
            <p className="mb-4 text-xs text-slate-600">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-semibold text-slate-200 transition group-hover:text-cyan-300">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="px-6 py-24 sm:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Selected work
          </p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Featured Projects<span className="text-cyan-400">.</span>
          </h2>
        </div>

        <a
          href="https://github.com/tushar-kokate"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          Explore GitHub ↗
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group flex flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.04]"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-700 transition group-hover:text-cyan-400/50">
                {project.number}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-slate-400">
                {project.category}
              </span>
            </div>

            <h3 className="mt-8 text-xl font-bold">{project.title}</h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-slate-800/80 px-3 py-2 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:gap-3"
            >
              View project <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Experience */}
  <section id="experience" className="bg-white/[0.02] px-6 py-24 sm:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        My journey
      </p>

      <h2 className="text-4xl font-black sm:text-5xl">
        Internship Experience<span className="text-cyan-400">.</span>
      </h2>

      <div className="mt-12 space-y-5">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="grid gap-4 rounded-2xl border border-white/[0.08] bg-[#0c101b] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
          >
            <div>
              <h3 className="text-xl font-bold">{experience.role}</h3>
              <p className="mt-2 text-slate-400">{experience.company}</p>
            </div>

            <p className="text-sm font-medium text-cyan-300">
              {experience.period}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Education */}
  <section id="education" className="px-6 py-24 sm:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        Academic background
      </p>

      <h2 className="text-4xl font-black sm:text-5xl">
        Education<span className="text-cyan-400">.</span>
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9">
          <p className="text-sm text-cyan-300">Bachelor's Degree</p>
          <h3 className="mt-4 text-xl font-bold">
            B.E. Computer Engineering
          </h3>
          <p className="mt-3 leading-7 text-slate-400">
            P. G. Moze College of Engineering, Pune
          </p>
          <p className="mt-6 font-semibold text-white">CGPA: 8.29</p>
        </article>

        <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9">
          <p className="text-sm text-cyan-300">Diploma</p>
          <h3 className="mt-4 text-xl font-bold">
            Information Technology
          </h3>
          <p className="mt-3 leading-7 text-slate-400">
            Government Polytechnic, Murtizapur
          </p>
          <p className="mt-6 font-semibold text-white">
            Percentage: 84.31%
          </p>
        </article>
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="px-6 py-24 sm:px-10">
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.10] via-[#0c101b] to-violet-500/[0.08] px-7 py-16 text-center sm:px-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      <div className="relative">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Have an opportunity?
        </p>

        <h2 className="text-4xl font-black sm:text-6xl">
          Let's work together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
          I'm interested in opportunities where I can apply my skills,
          learn from others, and help build meaningful digital products.
          Let's connect.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="mt-9 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
        >
          Get in Touch ↗
        </a>

        <div className="mt-8 flex justify-center gap-7 text-sm text-slate-400">
          <a
            href="https://github.com/tushar-kokate"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-white/[0.08] px-6 py-8 sm:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} Tushar Kokate. All rights reserved.
      </p>
      <a href="#home" className="transition hover:text-cyan-300">
        Back to top ↑
      </a>
    </div>
  </footer>
</main>

)
}

export default App