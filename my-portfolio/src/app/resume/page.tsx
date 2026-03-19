'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import {
  Mail,
  MapPin,
  GraduationCap,
  Building,
  Code,
  Star,
  ExternalLink,
  Calendar,
  Github,
  Linkedin,
  Briefcase,
  Rocket
} from 'lucide-react'

/* ----------------------------- Personal info ----------------------------- */
const personalInfo = {
  name: 'Win Thant Tin Han',
  title: 'M.S. Computer Science Student @ USC',
  email: 'winthant1601@gmail.com',
  location: 'Los Angeles, CA',
  linkedin: 'https://www.linkedin.com/in/win-thant-tin-han',
  github: 'https://github.com/WinThant16',
}

/* --------------------------- Professional summary ----------------------- */
const summary = `M.S. Computer Science student at the University of Southern California with a background in web development and embedded systems. Graduated with Honors in Computer Science from UC Riverside. Passionate about building reliable, data-driven technologies and exploring the intersection of AI, design, and human decision-making. Demonstrated ability to lead technical teams, complete research projects, and deliver practical software solutions through academic and extracurricular work. Seeking opportunities to apply technical skills, contribute to impactful projects, and continue growing through real-world experience.`

/* ----------------------------- Education list --------------------------- */
const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Southern California',
    location: 'Los Angeles, CA',
    period: 'Aug 2025 – May 2027',
  },
  {
    degree: 'B.S. Computer Science (Honors), Cum Laude',
    school: 'University of California, Riverside',
    location: 'Riverside, CA',
    period: 'Sep 2021 – Jun 2025',
    details: [
      'Awards: Best Virtual Presentation (Undergraduate Research Symposium 2025), Chancellor’s Honors List (2021–2024), Non-Resident Achievement Scholarship, University Honors HEIR Scholarship',
    ],
  },
]

/* ----------------------------- Leadership -------------------------------- */
const leadership = [
  {
    title: 'Vice President',
    company: 'Engineers Without Borders @ UCR',
    location: 'Riverside, CA',
    period: 'Sep 2023 – Jun 2025',
    achievements: [
      'Led the Soil Deposition Robot project, involving C++ and Arduino programming, CAD modeling, and 3D printing',
      'Organized fundraising and secured $500+ through the 2024 BCOE Match Challenge',
    ],
  },
  {
    title: 'Operations Lead',
    company: 'BearHack Hackathon',
    location: 'Riverside, CA',
    period: 'Jan 2025 – Apr 2025',
    achievements: [
      'Managed grants, budget, and prize distribution for a 2-day engineering make-a-thon',
      'Coordinated workshops, judging panels, and logistics for over 100 participants',
    ],
  },
]

/* ----------------------------- Experience list --------------------------- */
const experience = [
  {
    title: 'Undergraduate Research Assistant',
    company: 'Behavioral Economics & Decision-Making Lab, UCR School of Business',
    location: 'Riverside, CA',
    period: 'Sep 2023 – Jun 2025',
    achievements: [
      'Conducted research under Professor Ye Li, contributing to 5 + projects through weekly lab meetings',
      'Collaborated with peers on survey deployment, qualitative coding, and experimental design feedback',
    ],
  },
]

/* ----------------------------- Projects ---------------------------------- */
const projects = [
  {
    title: 'Generative AI in Higher Education (Honors Capstone Research)',
    period: 'Jan 2023 – Jun 2025',
    details: [
      'Analyzed how risk preference, time discounting, and loss aversion predict student academic use of ChatGPT, using Bayesian Truth Serum-scored survey data and OLS regression on 200 + UCR students',
      'Designed and deployed a behavioral survey using Qualtrics and Python (pandas, matplotlib)',
      'Presented at UCR Undergraduate Research Symposium; received Best Virtual Presentation Award',
    ],
  },
  {
    title: 'Quantitative Analysis Club Website',
    period: 'Jan 2025 – Apr 2025',
    details: [
      'Developed a responsive website for a student-run finance club using Next.js, TypeScript, and Tailwind CSS',
      'Collaborated with 13 developers (via ACM) to design and implement features',
      'Utilized Tailwind CSS and Framer Motion for improved UI design and animation',
    ],
  },
  {
    title: 'Flappy Dot – Embedded Game Development',
    period: 'Aug 2024 – Dec 2024',
    details: [
      'Created a Flappy Bird-inspired game using C on an Arduino-compatible microcontroller',
      'Integrated SPI TFT LCD, piezo buzzer for sound effects, and collision / scoring logic',
    ],
  },
]

/* ----------------------------- Skills ----------------------------------- */
const skills = {
  Languages: ['Python', 'C++', 'JavaScript', 'SQL', 'HTML/CSS', 'Rust'],
  Tools: ['PySpark', 'MySQL', 'MongoDB', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Pandas'],
}

/* ----------------------------- Component -------------------------------- */
export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Win Thant Tin Han'
  }, [])

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-14">
        {/* ---------- Header ---------- */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-600 mb-4">
            {personalInfo.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" /> {personalInfo.email}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {personalInfo.location}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/60 text-xs hover:bg-muted/40 transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/win-thant-tin-han
            </Link>
            <Link
              href={personalInfo.github}
              target="_blank"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/60 text-xs hover:bg-muted/40 transition"
            >
              <Github className="w-3.5 h-3.5" />
              github.com/WinThant16
            </Link>
          </div>
        </header>

        {/* ---------- Summary ---------- */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <Star className="w-5 h-5 mr-2 text-primary" />
            Professional Summary
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
            {summary}
          </p>
        </section>

        <hr className="my-8 border-border/60" />

        {/* ---------- Education ---------- */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-primary" />
            Education
          </h3>
          {education.map((edu, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <div>
                  <h4 className="font-semibold text-base">{edu.degree}</h4>
                  <p className="text-xs text-muted-foreground">
                    {edu.school} | {edu.location}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {edu.period}
                </div>
              </div>
              {edu.details && (
                <ul className="mt-2 text-[13px] text-muted-foreground leading-relaxed space-y-1.5">
                  {edu.details.map((d, j) => (
                    <li
                      key={j}
                      className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <hr className="my-8 border-border/60" />

        {/* ---------- Leadership ---------- */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-primary" />
            Leadership
          </h3>
          {leadership.map((role, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <div>
                  <h4 className="font-semibold text-base">{role.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {role.company} | {role.location}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {role.period}
                </div>
              </div>
              <ul className="mt-2 text-[13px] text-muted-foreground leading-relaxed space-y-1.5 text-justify">
                {role.achievements.map((a, j) => (
                  <li
                    key={j}
                    className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="my-8 border-border/60" />

        {/* ---------- Experience ---------- */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Building className="w-5 h-5 mr-2 text-primary" />
            Experience
          </h3>
          {experience.map((job, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <div>
                  <h4 className="font-semibold text-base">{job.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {job.company} | {job.location}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {job.period}
                </div>
              </div>
              <ul className="mt-2 text-[13px] text-muted-foreground leading-relaxed space-y-1.5 text-justify">
                {job.achievements.map((a, j) => (
                  <li
                    key={j}
                    className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="my-8 border-border/60" />

        {/* ---------- Projects ---------- */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-primary" />
            Projects
          </h3>
          {projects.map((proj, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h4 className="font-semibold text-base">{proj.title}</h4>
                <p className="text-xs text-muted-foreground flex items-center mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {proj.period}
                </p>
              </div>
              <ul className="mt-2 text-[13px] text-muted-foreground leading-relaxed space-y-1.5 text-justify">
                {proj.details.map((d, j) => (
                  <li
                    key={j}
                    className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="my-8 border-border/60" />

        {/* ---------- Skills ---------- */}
        <section>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Code className="w-5 h-5 mr-2 text-primary" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat}>
                <h4 className="font-semibold mb-2">{cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 text-[11px] rounded-md bg-muted/70 text-foreground/80 uppercase tracking-wide"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="mt-16 pt-8 border-t border-border/60 text-center text-sm text-muted-foreground">
          <p>References available upon request.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:bg-muted/40 transition text-xs"
            >
              <ExternalLink className="w-4 h-4" /> View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:bg-muted/40 transition text-xs"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
