'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export interface ArticleCardData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string | null;
  image: string;
}

function Article({ title, excerpt, author, date, category, image, slug }: ArticleCardData) {
  return (
    <div className="article-card animated-element opacity-0">
      <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {category && (
          <div className="absolute top-3 right-3 bg-gold text-white text-xs px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User size={14} className="ml-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="ml-1" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        <Link href={`/articles/${slug}`}>
          <Button variant="link" className="text-gold p-0 hover:text-gold-dark">
            قراءة المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ArticlesGrid({ articles }: { articles: ArticleCardData[] }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [articles]);

  if (!articles.length) {
    return (
      <p className="text-center text-gray-500">لا توجد مقالات منشورة حاليًا.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((a) => (
        <Article key={a.slug} {...a} />
      ))}
    </div>
  );
}
