import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getArticles } from '@/lib/cms';
import { Button } from '@/components/ui/button';
import ArticlesGrid, { type ArticleCardData } from './ArticlesGrid';

// Number of articles to preview on the homepage. The rest live on /articles.
const PREVIEW_COUNT = 3;

// Server component: fetches published articles from the CMS at build time and
// hands them to the client grid (which renders the cards + scroll animation).
export default async function ArticlesSection() {
  const articles = await getArticles();

  const cards: ArticleCardData[] = articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    author: a.author,
    date: a.date,
    category: a.category,
    image: a.image,
  }));

  const preview = cards.slice(0, PREVIEW_COUNT);

  return (
    <section id="articles" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <h2 className="decorated-heading animated-element opacity-0">المقالات والمنشورات</h2>
          <p className="animated-element opacity-0 max-w-3xl text-lg text-muted-foreground">
            اطلع على أحدث المقالات والمنشورات من مجتمع الكتابة والمساهمين فيه
          </p>
        </div>

        <ArticlesGrid articles={preview} />

        {cards.length > PREVIEW_COUNT && (
          <div className="mt-12 text-center">
            <Link href="/articles">
              <Button size="lg" className="inline-flex items-center">
                عرض جميع المقالات
                <ChevronLeft className="mr-1" size={20} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
