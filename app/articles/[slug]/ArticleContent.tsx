'use client';

import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import Link from 'next/link';

interface Article {
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/#articles">المقالات</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gold text-white text-sm px-4 py-2 rounded-full">
              {article.category}
            </div>
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

            <div className="prose prose-lg max-w-none text-gray-700">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link 
            href="/#articles"
            className="inline-flex items-center text-gold hover:text-gold-dark"
          >
            <ArrowRight className="ml-2" />
            العودة إلى المقالات
          </Link>
        </div>
      </div>
    </div>
  );
} 