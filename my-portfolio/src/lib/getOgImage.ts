import "server-only";
import * as cheerio from "cheerio";

function absolutize(url: string, base: string) {
  try {
    return new URL(url, base).toString();
  } catch {
    return null;
  }
}

export async function getOgImage(pageUrl: string): Promise<string | null> {
  const res = await fetch(pageUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)" },
    redirect: "follow",
    cache: "no-store",
  });
  if (!res.ok) return null;

  const html = await res.text();
  const $ = cheerio.load(html);
  const base = $('base[href]').attr('href') || pageUrl;

  const candidates = [
    $('meta[property="og:image"]').attr('content'),
    $('meta[property="og:image:url"]').attr('content'),
    $('meta[name="twitter:image"]').attr('content'),
    $('meta[itemprop="image"]').attr('content'),
    $('link[rel="image_src"]').attr('href'),
  ].filter(Boolean) as string[];

  for (const c of candidates) {
    const abs = absolutize(c, base);
    if (abs) return abs;
  }
  return null;
}
