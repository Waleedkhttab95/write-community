// Reads مجتمع الكتابة articles from the shared Cultural Initiative CMS.
//
// Articles are authored in the CMS admin (under the "مجتمع الكتابة" site) and
// served from its public API. These helpers run at build time (this site is a
// static export), so when an article changes in the CMS the site is rebuilt to
// pick it up (the CMS pings a deploy hook on write-community article changes).

const CMS_URL = (
  process.env.CMS_API_URL || "https://cultural-managment.com"
).replace(/\/+$/, "");

const SITE = "write-community";

export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  content: string; // sanitized HTML
  category: string | null;
}

async function cmsFetch(pathWithQuery: string): Promise<Response> {
  return fetch(`${CMS_URL}${pathWithQuery}`, {
    headers: { Accept: "application/json" },
  });
}

// Returns all published write-community articles, newest first. On any failure
// (CMS unreachable at build time) returns an empty list so the build never
// breaks — better an empty section than a failed deploy.
export async function getArticles(): Promise<Article[]> {
  try {
    const res = await cmsFetch(`/api/articles?site=${SITE}`);
    if (!res.ok) throw new Error(`CMS responded ${res.status}`);
    return (await res.json()) as Article[];
  } catch (err) {
    console.warn("[cms] Failed to load write-community articles:", err);
    return [];
  }
}

// Returns a single published article by slug, or null if not found / on error.
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await cmsFetch(
      `/api/articles/${encodeURIComponent(slug)}?site=${SITE}`,
    );
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`CMS responded ${res.status}`);
    return (await res.json()) as Article;
  } catch (err) {
    console.warn(`[cms] Failed to load article "${slug}":`, err);
    return null;
  }
}
