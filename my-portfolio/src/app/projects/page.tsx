import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Github, ExternalLink, Calendar, Clock, Code, CodeXml, Cpu, Microscope, Rocket, Database } from "lucide-react";
import YouTubeThumb from "@/components/YouTubeThumb";

/* --------------------------------- SEO --------------------------------- */
export const metadata: Metadata = {
  title: "Projects | Yun Ei Hlaing",
  description: "Selected projects in web, and AI.",
};

export const revalidate = 86400; // cache enriched thumbnails for 1 day

import { getOgImage } from '@/lib/getOgImage';

// ...

async function enrichProjectsForThumbs(list: Project[]): Promise<Project[]> {
  return Promise.all(
    list.map(async (p) => {
      // Only fetch if no image is already set:
      if (!p.image) {
        const paperUrl = p.links?.find((l) => l.type === 'paper')?.url;
        // const demoUrl  = p.links?.find((l) => l.type === 'demo')?.url;

        // Prefer demo (YouTube handled already), else use paper page
        const pageToProbe = paperUrl ?? null;

        if (pageToProbe) {
          const og = await getOgImage(pageToProbe).catch(() => null);
          if (og) {
            return { ...p, image: og, imageMode: 'cover' as const };
          }
        }
      }
      return p;
    })
  );
}

/* --------------------------------- Data -------------------------------- */
type LinkType = "github" | "live" | "paper" | "demo";
type Category = "All" | "Web" | "Embedded" | "Research" | "Club/Org" | "AI" | "ML";

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string | null;
  imageGradient?: string | null;
  tags: string[];
  category: Exclude<Category, "All">;
  status: "Completed" | "In Progress" | "Optimization Process";
  timeline?: string;
  year?: string;
  featured?: boolean;
  links?: { type: LinkType; url: string }[];
  imageMode?: "cover" | "logo";
  logoSize?: number; // px
};

const projects: Project[] = [
  {
    id: "brain-tumor",
    title: "3D Brain Tumor Segmentation",
    description:
      "Knowledge distillation pipeline compressing SegResNet segmentation model into efficient UNet-based models",
    imageGradient: "from-cyan-500 to-purple-950",
    imageMode: "logo",
    logoSize: 64,
    tags: ["PyTorch", "MONAI", "Docker", "Streamlit"],
    category: "AI",
    status: "Optimization Process",
    timeline: "Aug-Dec",
    year: "2025",
    featured: true,
    links: [],
  },
  {
    id: "pacman-rl",
    title: "Pacman Ghost Reinforcement Learning",
    description:
      "Trained Pacman Ghosts using Q-learning and Deep Q Networks",
    image: null,
    imageGradient: "from-emerald-500 to-teal-600",
    tags: ["Python", "Reinforcement Learning", "Q-learning", "Deep Q Networks"],
    category: "AI",
    status: "Completed",
    timeline: "Aug-Dec",
    year: "2025",
    links: [{ type: "github", url: "https://github.com/kaushika-uppu/pac-man-rl"}],
  },
  {
    id: "NBA",
    title: "NBA Game Predictor",
    description:
      "Trained an XGBoost and Random Forest model to predict the 2025 playoffs using historial team stats",
    image: null,
    imageGradient: "from-rose-200 to-purple-950",
    tags: ["Python", "ML", "XGBoost"],
    category: "ML",
    status: "Completed",
    timeline: "Jan-June",
    year: "2025",
    links: [ { type: "github", url: "https://github.com/tanmbillawala/nba_game_predictor5" } ],
  },
  {
    id: "music-rs",
    title: "Music Recommendation System",
    description:
      "Implemented a music recommender offering both diverse and similar recommendations based on user-selected songs, emotions and lyrics similarity",
    image: null,
    imageGradient: "from-amber-500 to-orange-600",
    tags: ["AI/ML", "K-Means Clustering", "K-Nearest Neighbors", "MiniLM sentence transformer"],
    category: "AI",
    status: "Completed",
    timeline: "Jan-June",
    year: "2025",
    links: [{ type: "github", url: "https://github.com/yuneihlaing/music_recommender"}],
  },
  {
    id: "grad-planner",
    title: "Cal Poly GradPlanner",
    description:
      "User-friendly, interactive platform for Cal Poly students to plan their academic journey",
    image: null, // again, you could drop in a screenshot if you have one
    imageGradient: "from-cyan-500 to-sky-600",
    tags: ["Node.js", "AWS", "Express"],
    category: "Web",
    status: "Completed",
    year: "2024",
    // Repo is private so no public GitHub/demo link — TO DO: make public?"
    links: [{ type: "github", url: "https://github.com/yuneihlaing/GradPlanner"}],
  },

];

const categories: Category[] = ["All", "Web", "AI", "ML"];

/* -------------------------------- UI utils ------------------------------ */
function categoryIcon(c: Category, className = "") {
  switch (c) {
    case "Web": return <CodeXml className={`text-white ${className}`} />;
    // case "Embedded": return <Cpu className={`text-white ${className}`} />;
    // case "Research": return <Microscope className={`text-white ${className}`} />;
    // case "Club/Org": return <Rocket className={`text-white ${className}`} />;
    case "AI": return <Database className={`text-white ${className}`} />;
    case "ML": return <Database className={`text-white ${className}`} />;
    default: return <Code className={`text-white ${className}`} />;
  }
}


function linkMeta(type: LinkType) {
  switch (type) {
    case "github":  return { label: "View Code", icon: <Github className="w-4 h-4 text-white" /> };
    case "live":    return { label: "Live Site", icon: <ExternalLink className="w-4 h-4 text-white" /> };
    case "paper":   return { label: "Paper", icon: <ExternalLink className="w-4 h-4 text-white" /> };
    case "demo":    return { label: "Watch Demo", icon: <ExternalLink className="w-4 h-4 text-white" /> };
    default:        return { label: "Open", icon: <ExternalLink className="w-4 h-4 text-white" /> };
  }
}



/* --------------------------------- Page --------------------------------- */
export default async function ProjectsPage() {
  const counts = Object.fromEntries(
    categories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length])
  );
  const enriched = await enrichProjectsForThumbs(projects);
  return (
    <section className="relative min-h-screen pt-20 md:pt-28 pb-16">
      <div className="mx-auto w-full max-w-[min(80rem,80vw)] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
          <p className="text-white/70 mt-4">Personal and team projects in web dev, and AI.</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="All" className="mt-10">
          <div className="flex justify-center w-full self-center">
            <TabsList className="rounded-full bg-white/5 backdrop-blur border border-white/10 p-1 gap-1">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c} 
                              className="rounded-full
                              text-white 
                              px-[clamp(0.5rem,1.8vw,0.9rem)]
                              py-[clamp(0.30rem,1.2vw,0.55rem)]
                              data-[state=active]:bg-white/10">
                  <span 
                    className=" flex items-center
                                gap-[clamp(0.35rem,1vw,0.5rem)]
                                text-[clamp(0.82rem,1.6vw,0.95rem)]
                                leading-none text-white">
                    {categoryIcon(c, "w-[1em] h-[1em]")}
                    {/* label disappears < md */}
                    <span className="hidden md:inline">{c}</span>
                    {/* count disappears < sm and scales with text */}
                    <span className="ml-1 hidden sm:inline rounded-full bg-white/10 px-[0.6em] py-[0.2em] text-[0.72em]">
                      {counts[c]}
                    </span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((c) => {
            const list = c === "All" ? enriched : enriched.filter((p) => p.category === c);
            return (
              <TabsContent key={c} value={c} className="mt-8">  
                <div className="grid gap-x-6 gap-y-10
                                [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]
                                sm:[grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]
                                md:[grid-template-columns:repeat(auto-fit,minmax(18rem,1fr))]
                                lg:[grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]
                                xl:[grid-template-columns:repeat(auto-fit,minmax(22rem,1fr))]">
                  {list.map((p) => {
                    const demoUrl = p.links?.find((l) => l.type === "demo")?.url;

                    return (
                      <Card
                        key={p.id}
                        className="group flex flex-col overflow-hidden bg-white/[0.04] border-white/10
                                   transition-transform duration-300 hover:scale-[1.02] text-white"
                      >
                        {/* Header (image / video thumb / gradient) */}
                        <div className=" relative h-44 overflow-hidden">
                          {demoUrl ? (
                            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                              <YouTubeThumb demoUrl={demoUrl} alt={`${p.title} demo thumbnail`} overlay="none" />
                            </Link>
                          ) : p.imageMode === "logo" && p.image ? (
                            <div
                              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                                p.imageGradient ?? "from-slate-600 to-slate-800"
                              }`}
                            >
                              <Image
                                src={p.image}
                                alt={p.title}
                                width={p.logoSize ?? 112}
                                height={p.logoSize ?? 112}
                                className="object-contain drop-shadow-sm"
                              />
                            </div>
                          ) : p.image ? (
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover"
                              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                            />
                          ) : (
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${
                                p.imageGradient ?? "from-slate-600 to-slate-800"
                              }`}
                            />
                          )}

                          <div className="absolute top-3 left-3">
                            <Badge className="text-xs text-white">{p.status}</Badge>
                          </div>
                        </div>

                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs text-white">
                              {p.category}
                            </Badge>
                            <div className="flex items-center text-xs text-white/60">
                              {p.year && (
                                <>
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {p.year}
                                </>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-xl">{p.title}</CardTitle>
                          <CardDescription className="text-zinc-300">{p.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="mt-auto">
                          <div className="flex items-center gap-4 text-xs text-white/60">
                            {p.timeline && (
                              <>
                                <Clock className="w-3 h-3" /> {p.timeline}
                              </>
                            )}
                          </div>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {p.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {p.tags.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{p.tags.length - 4}
                              </Badge>
                            )}
                          </div>
                        </CardContent>

                        <CardFooter className="gap-4 border-t border-white/10 pt-4">
                          {(p.links?.length ?? 0) > 0 ? (
                            p.links!.map((l) => {
                              const { label, icon } = linkMeta(l.type);
                              return (
                                <Link
                                  key={l.type}
                                  href={l.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-sm text-white hover:underline"
                                >
                                  {icon}
                                  <span className="ml-2">{label}</span>
                                </Link>
                              );
                            })
                          ) : (
                            <span className="text-sm text-white/60 italic">Links coming soon.</span>
                          )}
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* CTA */}
        {/* <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold">Have something you want to build?</h2>
          <p className="text-white/70 mt-2 max-w-xl mx-auto">
            I’m always happy to collaborate on practical web apps, embedded ideas, or research-y explorations.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">View resume</Link>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}