"use client";

import { motion } from "framer-motion";

const educationItems = [
  {
    school: "San José State University",
    degree: "M.S. in Artificial Intelligence",
    period: "2025 – Present",
    details:
      "Focused on machine learning, deep learning, data mining, and artificial intelligence.",
  },
  {
    school: "California Polytechnic State University, San Luis Obispo",
    degree: "B.S. in Computer Science",
    period: "2021-2024",
    details:
      "Built a foundation in software engineering, algorithms, databases, and systems.",
  },
    {
    school: "San Diego Mesa College",
    degree: "A.S. in Computer Science and Mathematics",
    period: "2019-2021",
    details:
      "Completed lower-division coursework in programming, data structures, and discrete mathematics.",
  },
];

export function EducationSection() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[min(110rem,95vw)] px-[clamp(1rem,4vw,2rem)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-2 text-sm text-white/70 md:text-base">
            My academic background and studies.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.school + item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 rounded-full border border-white/30 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] md:left-1/2 md:-translate-x-1/2" />

                <div className="pl-12 md:w-[calc(50%-2rem)] md:pl-0">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-2 text-sm font-medium text-purple-300">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.school}
                    </h3>
                    <p className="mt-1 text-white/85">{item.degree}</p>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}