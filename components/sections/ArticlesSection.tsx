import React from 'react';
import { getArticles } from '@/lib/cms';
import ArticlesGrid, { type ArticleCardData } from './ArticlesGrid';

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

  return (
    <section id="articles" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="decorated-heading animated-element opacity-0">المقالات والمنشورات</h2>
          <p className="animated-element opacity-0 max-w-3xl mx-auto text-lg text-gray-600">
            اطلع على أحدث المقالات والمنشورات من مجتمع الكتابة والمساهمين فيه
          </p>
        </div>

        <ArticlesGrid articles={cards} />
      </div>
    </section>
  );
}
