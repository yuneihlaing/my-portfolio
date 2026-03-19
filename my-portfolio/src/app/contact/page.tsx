'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const EMAIL = 'yuneihlaing14@gmail.com';
const LINKEDIN = 'www.linkedin.com/in/yun-ei-hlaing-b663231ba';
const GITHUB = 'https://github.com/yuneihlaing';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Yun Ei Hlaing';
  }, []);

  return (
    <section className="relative min-h-[70vh] pt-20 md:pt-28">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge className="px-3 py-1 bg-gradient-to-r from-rose-400/10 to-fuchsia-600/10 border-rose-300/20 text-white">
            Contact
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s build something great
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Open to internships, software engineering roles, and research collaborations.
            I usually reply within a day.
          </p>
        </div>

        {/* Single centered card */}
        <div className="mt-10 flex justify-center w-1/3 align-middle mx-auto">
          <Card className="w-full max-w-xl p-6 space-y-10 border-white/10 bg-slate-950/90">
            <div className="space-y-2">
              <div className="font-semibold text-center text-white">Reach me at:</div>
            </div>

            <div className="flex flex-col gap-5">
              <Button asChild variant="outline" className="justify-start rounded-full">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-8" />
                  {EMAIL}
                </a>
              </Button>

              <Button asChild variant="outline" className="justify-start rounded-full">
                <Link href={LINKEDIN} target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>

              <Button asChild variant="outline" className="justify-start rounded-full">
                <Link href={GITHUB} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
