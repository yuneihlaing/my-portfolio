'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

type IconItem = { src: string; label: string };
type ColumnSpec = { title: string; tone: string; items: IconItem[] };

const A = (arr: IconItem[]): IconItem[] => arr;
const ICON_HOVER_SPRING = { type: 'spring' as const, stiffness: 420, damping: 22, mass: 0.3 };

/* --------------------------------- Data ---------------------------------- */
const COLUMNS: ColumnSpec[] = [
  {
    title: 'Languages',
    tone: 'from-rose-500/25 to-fuchsia-500/25 border-rose-500/30',
    items: A([
      { src: '/stack/c.svg', label: 'C' },
      // { src: '/stack/cplusplus.svg', label: 'C++' },
      { src: '/stack/Java.svg' , label: 'Java'},
      { src: '/stack/python.svg', label: 'Python' },
      { src: '/stack/javascript.svg', label: 'JavaScript' },
      { src: '/stack/typescript.svg', label: 'TypeScript' },
    ]),
  },
  {
    title: 'Web Stack',
    tone: 'from-purple-500/25 to-indigo-500/25 border-purple-500/30',
    items: A([
      { src: '/stack/next-js.svg', label: 'Next.js' },
      { src: '/stack/react.svg', label: 'React' },
      { src: '/stack/node-js.svg', label: 'Node.js' },
      { src: '/stack/tailwind.svg', label: 'Tailwind' },
      { src: '/stack/shadcnui.svg', label: 'shadcn/ui' },
    ]),
  },
  {
    title: 'Databases',
    tone: 'from-indigo-500/25 to-blue-500/25 border-indigo-500/30',
    items: A([
      { src: '/stack/postgresql.svg', label: 'PostgreSQL' },
      { src: '/stack/mysql.svg', label: 'MySQL' },
      { src: '/stack/mongodb.svg', label: 'MongoDB' },
      { src: '/stack/sqlite.svg', label: 'SQLite' },
    ]),
  },
  {
    title: 'Infra & Deploy',
    tone: 'from-blue-500/25 to-sky-500/25 border-blue-500/30',
    items: A([
      { src: '/stack/vercel.svg', label: 'Vercel' },
      { src: '/stack/github-actions.svg', label: 'GitHub Actions' },
    ]),
  },
  {
    title: 'Data & ML',
    tone: 'from-sky-500/25 to-cyan-500/25 border-sky-500/30',
    items: A([
      // { src: '/stack/apachespark.svg', label: 'Apache Spark' },
      { src: '/stack/pandas.svg', label: 'Pandas' },
      { src: '/stack/scikitlearn.svg', label: 'scikit-learn' },
      { src: '/stack/tensorflow.svg', label: 'TensorFlow' },
      { src: '/stack/pytorch.svg', label: 'PyTorch' },
    ]),
  },
  {
    title: 'Visualization',
    tone: 'from-cyan-500/25 to-teal-500/25 border-cyan-500/30',
    items: A([
      { src: '/stack/matplotlib.svg', label: 'Matplotlib' },
      { src: '/stack/seaborn.svg', label: 'Seaborn' },
      { src: '/stack/plotly.svg', label: 'Plotly' },
      { src: '/stack/tableau.svg', label: 'Tableau' },
    ]),
  },
];

/* ---------------------------- Column (card) ------------------------------- */
function ColumnCard({ title, tone, items }: ColumnSpec) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.45 }}
      className={`
        relative rounded-2xl border bg-gradient-to-r ${tone}
        p-6 shadow-sm hover:shadow-md transition-shadow
        min-h-[clamp(10rem,18vw,10rem)]
      `}
    >
      <div className="mb-4 text-center text-sm font-semibold tracking-wide text-white/90">
        {title}
      </div>

      {/* FLEX WRAP so the last row centers */}
      <div
        className="
          flex flex-wrap justify-center
          gap-x-3 gap-y-5 sm:gap-x-5 sm:gap-y-6
        "
      >
        {items.map((it, i) => (
          <motion.div
            key={it.label + i}
            whileHover={{ scale: 1.06, y: -2, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={ICON_HOVER_SPRING}
            className="
              group/icon relative
              flex flex-col items-center justify-center text-center
              /* each tile uses a responsive fixed basis so rows align nicely */
              basis-[clamp(3.75rem,5vw,3.25rem)] grow-0 shrink-0
            "
          >
            {/* icon */}
            <div className="relative aspect-square w-[clamp(3rem,4vw,1rem)]">
              <Image
                src={it.src}
                alt={it.label}
                fill
                sizes="(min-width:1024px) 6vw, 10vw"
                className="
                  object-contain
                  drop-shadow-[0_4px_16px_rgba(255,255,255,0.10)]
                  group-hover/icon:drop-shadow-[0_6px_22px_rgba(0,0,0,0.24)]
                  transition-[filter] duration-300
                "
              />
            </div>

            {/* label */}
            <div
              className="
                mt-2 font-medium leading-none text-white/90 group-hover/icon:text-white
                text-[clamp(0.75rem,1.6vw,0.95rem)]
                transition-colors duration-300
              "
            >
              {it.label}
            </div>

            {/* contained hover glow */}
            <span
              className="
                pointer-events-none absolute inset-1 rounded-xl
                opacity-0 group-hover/icon:opacity-100
                transition-opacity duration-300
                after:absolute after:inset-0 after:rounded-xl after:blur
                after:bg-white/5
              "
              aria-hidden
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------- Main block ------------------------------- */
export function TechStrip() {
  const cols = useMemo(() => COLUMNS, []);
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[min(110rem,95vw)] px-[clamp(1rem,4vw,2rem)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-600">
              Tools {' '}
            </span>
            I am familiar with
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70">
            The stack I use across coursework, research, and personal projects.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cols.map((c) => (
            <ColumnCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
