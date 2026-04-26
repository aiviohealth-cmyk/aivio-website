import { getBlogPosts } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Aivio Health",
  description: "Insights zu Pflege, Digitalisierung und Compliance für ambulante Pflegedienste.",
};

type BlogPost = {
  title: string;
  slug: string;
  publishedAt: string;
  author: string;
  category: string;
  excerpt: string;
  coverImage?: object;
};

const categoryLabels: Record<string, string> = {
  "pflege-praxis": "Pflege & Praxis",
  "compliance-recht": "Compliance & Recht",
  digitalisierung: "Digitalisierung",
  "produkt-updates": "Produkt-Updates",
};

export default async function BlogPage() {
  const posts: BlogPost[] = await getBlogPosts().catch(() => []);

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Aivio Blog</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Wissen, Trends und Praxistipps für moderne Pflegedienste.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">✍️</div>
              <p className="text-lg">Die ersten Artikel kommen bald.</p>
              <p className="text-sm mt-2">Inhalte werden gerade erstellt.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    {post.coverImage && (
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={urlFor(post.coverImage).width(640).height(360).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                          {categoryLabels[post.category] ?? post.category}
                        </span>
                      )}
                      <h2 className="text-lg font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-600 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      )}
                      {post.publishedAt && (
                        <p className="text-xs text-gray-400 mt-4">
                          {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
