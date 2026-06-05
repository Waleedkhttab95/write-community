import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getArticles } from '@/lib/cms';
import ArticlesGrid, { type ArticleCardData } from '@/components/sections/ArticlesGrid';

// Full articles listing. The homepage only previews a few articles and links
// here for the complete archive. Static export — rebuilt when the CMS changes.
export default async function ArticlesPage() {
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

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container-custom pt-24 pb-16">
        <nav className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Link href="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="mx-1">/</span>
              <span className="font-medium text-foreground">المقالات</span>
            </li>
          </ol>
        </nav>

        <div className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            المقالات والمنشورات
          </h1>
          <p className="text-lg text-muted-foreground">
            اطلع على أحدث المقالات والمنشورات من مجتمع الكتابة والمساهمين فيه
          </p>
        </div>

        <ArticlesGrid articles={cards} />

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="ml-2" size={20} />
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
