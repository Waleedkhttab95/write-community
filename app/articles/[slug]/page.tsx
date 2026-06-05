import React from 'react';
import { Clock, User, ChevronLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { getArticle, getArticles } from '@/lib/cms';

// Static export: pre-render a page for every published article known at build
// time. New articles appear after the next rebuild (the CMS triggers one on
// write-community article changes).
export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <Link href="/#articles" className="text-gold hover:text-gold-dark inline-flex items-center">
          <ChevronLeft className="ml-1" size={20} />
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom pt-24 pb-8">
        <nav className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500">
            <li className="inline-flex items-center gap-1.5">
              <Link href="/" className="hover:text-gold transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="mx-1">/</span>
              <Link href="/#articles" className="hover:text-gold transition-colors">
                المقالات
              </Link>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="mx-1">/</span>
              <span className="font-medium text-gray-900">{article.title}</span>
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {article.category && (
              <div className="absolute top-4 right-4 bg-gold text-white text-sm px-4 py-2 rounded-full">
                {article.category}
              </div>
            )}
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{article.title}</h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User size={18} className="ml-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="ml-2" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>

            {/* Content is sanitized HTML produced by the CMS editor. */}
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/#articles"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <ChevronLeft className="ml-2" size={20} />
            العودة إلى المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
