'use client';

import Image from 'next/image';
import { useState } from 'react';

type Overlay = 'none' | 'center' | 'corner';

export default function YouTubeThumb({
  demoUrl,
  alt,
  className = 'object-cover',
  overlay = 'none',
  priority = false,
  unoptimized = false, // set true if you didn't add img.youtube.com to next.config
}: {
  demoUrl: string;
  alt: string;
  className?: string;
  overlay?: Overlay;
  priority?: boolean;
  unoptimized?: boolean;
}) {
  const id = youtubeIdFromUrl(demoUrl);

  // Always call hooks before any early returns
  const initial = id ? youtubeThumbUrls(id) : null;
  const [src, setSrc] = useState(initial?.primary ?? '');

  // If no id, render nothing (hook was still called, so rules-of-hooks are satisfied)
  if (!id) return null;

  const fallbackSrc = initial!.fallback;

  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        className={`h-full w-full ${className}`}
        onError={() => {
          if (src !== fallbackSrc) setSrc(fallbackSrc);
        }}
        priority={priority}
        unoptimized={unoptimized}
      />

      {overlay !== 'none' && (
        <span
          className={
            overlay === 'center'
              ? 'absolute inset-0 flex items-center justify-center'
              : 'absolute right-2 top-2'
          }
        >
          <span
            className={[
              'inline-flex items-center justify-center',
              overlay === 'center' ? 'h-11 w-11' : 'h-8 w-8',
              'rounded-full bg-black/55 backdrop-blur-sm text-white ring-1 ring-white/20 shadow-md',
            ].join(' ')}
          >
            <svg viewBox="0 0 24 24" className={overlay === 'center' ? 'h-5 w-5' : 'h-4 w-4'}>
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </div>
  );
}

/* helpers */
function youtubeIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return v;
      const parts = u.pathname.split('/');
      const i = parts.findIndex((p) => p === 'shorts' || p === 'embed');
      if (i >= 0 && parts[i + 1]) return parts[i + 1];
    }
  } catch {}
  return null;
}
function youtubeThumbUrls(id: string) {
  return {
    primary: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    fallback: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
}
