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
    tone: 'from-indigo-500/20 to-purple-500/20 border-indigo-400/30',
    items: A([
      { src: '/my-portfolio/stack/c.svg', label: 'C' },
      // { src: '/stack/cplusplus.svg', label: 'C++' },
      { src: '/my-portfolio/stack/Java.svg' , label: 'Java'},
      { src: '/my-portfolio/stack/python.svg', label: 'Python' },
      { src: '/my-portfolio/stack/javascript.svg', label: 'JavaScript' },
      { src: '/my-portfolio/stack/typescript.svg', label: 'TypeScript' },
    ]),
  },
  {
    title: 'Web Stack',
    tone: 'from-purple-500/20 to-fuchsia-500/20 border-purple-400/30',
    items: A([
      { src: '/my-portfolio/stack/next-js.svg', label: 'Next.js' },
      { src: '/my-portfolio/stack/react.svg', label: 'React' },
      { src: '/my-portfolio/stack/node-js.svg', label: 'Node.js' },
      { src: '/my-portfolio/stack/tailwind.svg', label: 'Tailwind' },
      { src: '/my-portfolio/stack/shadcnui.svg', label: 'shadcn/ui' },
    ]),
  },
  {
    title: 'Databases',
    tone: 'from-indigo-600/20 to-blue-500/20 border-indigo-500/30',
    items: A([
      { src: '/my-portfolio/stack/postgresql.svg', label: 'PostgreSQL' },
      { src: '/my-portfolio/stack/mysql.svg', label: 'MySQL' },
      { src: '/my-portfolio/stack/mongodb.svg', label: 'MongoDB' },
      { src: '/my-portfolio/stack/sqlite.svg', label: 'SQLite' },
    ]),
  },
  {
    title: 'Infra & Deploy',
    tone: 'from-indigo-500/20 to-violet-500/20 border-indigo-400/30',
    items: A([
      { src: '/my-portfolio/stack/vercel.svg', label: 'Vercel' },
      { src: '/my-portfolio/stack/github-actions.svg', label: 'GitHub Actions' },
    ]),
  },
  {
    title: 'Data & ML',
    tone: 'from-purple-600/20 to-indigo-500/20 border-purple-400/30',
    items: A([
      // { src: '/stack/apachespark.svg', label: 'Apache Spark' },
      { src: '/my-portfolio/stack/pandas.svg', label: 'Pandas' },
      { src: '/my-portfolio/stack/scikitlearn.svg', label: 'scikit-learn' },
      { src: '/my-portfolio/stack/tensorflow.svg', label: 'TensorFlow' },
      { src: '/my-portfolio/stack/pytorch.svg', label: 'PyTorch' },
    ]),
  },
  {
    title: 'Visualization',
    tone: 'from-indigo-500/20 to-purple-600/20 border-indigo-400/30',
    items: A([
      { src: '/my-portfolio/stack/matplotlib.svg', label: 'Matplotlib' },
      { src: '/my-portfolio/stack/seaborn.svg', label: 'Seaborn' },
      { src: '/my-portfolio/stack/plotly.svg', label: 'Plotly' },
      { src: '/my-portfolio/stack/tableau.svg', label: 'Tableau' },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-600">
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
