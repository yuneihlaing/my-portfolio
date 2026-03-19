import Image from "next/image";

type Experience = {
  title: string;
  org: string;
  location: string;
  dates: string;
  image: { src: string; alt: string };
  oneLiner: string;
  story: string;
  impact: string;
  stack: string;
  links?: { label: string; href: string }[];
};

const experiences: Experience[] = [
];

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="grid gap-6 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:grid-cols-[2fr_3fr]">
      <div className="relative self-center overflow-hidden rounded-xl border border-border/60 bg-muted">
        <div className="relative w-full">
          <Image
            src={exp.image.src}
            alt={exp.image.alt}
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="w-full h-[40vh]object-cover object-center"
            priority={false}
          />
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-semibold">{exp.title}</h2>
            <p className="mt-1 text-sm text-foreground/70">
              <span className="font-medium text-foreground">{exp.org}</span>
              <span className="text-foreground/60">{"  "}</span>
              <span className="text-foreground/60">{exp.location}</span>
            </p>
          </div>
          <p className="shrink-0 whitespace-nowrap text-sm text-foreground/60">{exp.dates}</p>
        </div>

        <p className="mt-4 text-base text-foreground">{exp.oneLiner}</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-background/40 p-4">
            <p className="text-sm font-medium">What it felt like</p>
            <p className="mt-2 text-sm text-foreground/70">{exp.story}</p>
          </div>

          <div className="rounded-xl border border-border/60 bg-background/40 p-4">
            <p className="text-sm font-medium">What I delivered</p>
            <p className="mt-2 text-sm text-foreground/70">{exp.impact}</p>

            <p className="mt-4 text-sm font-medium">Tools and skills</p>
            <p className="mt-2 text-sm text-foreground/70">{exp.stack}</p>
          </div>
        </div>

        {exp.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3 text-white">
            {exp.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border/60 px-3 py-1 text-sm text-white underline hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="container-max py-16">
      <header className="max-w-2xl justify-center">
        <h1 className="text-3xl m-5 font-semibold">Experience</h1>
        <p className="m-5 text-foreground/70 ">
          A more personal look at the roles that shaped how I build, lead, and
          learn.
        </p>
      </header>

      <section className="mt-10 grid gap-6">
        {experiences.map((exp) => (
          <ExperienceCard key={`${exp.title}-${exp.org}`} exp={exp} />
        ))}
      </section>
    </main>
  );
}
