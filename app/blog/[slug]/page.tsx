import { getBlogPost, getBlogPosts } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) return { title: "Not Found" };
  return {
    title: post.seo?.title ?? `${post.title} — Aivio Health Blog`,
    description: post.seo?.description ?? post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts().catch(() => []);
  return posts.map((p: { slug: string }) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/blog" className="text-sm text-brand-600 hover:underline mb-8 inline-block">
        ← Zurück zum Blog
      </Link>

      {post.coverImage && (
        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-10">
          <Image
            src={urlFor(post.coverImage).width(1200).height(675).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mb-10">
        {post.category && (
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{post.category}</span>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4 leading-tight">{post.title}</h1>
        {post.publishedAt && (
          <div className="text-sm text-gray-400">
            {post.author && <span className="font-medium text-gray-600">{post.author} · </span>}
            {new Date(post.publishedAt).toLocaleDateString("de-DE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        )}
      </header>

      <div className="prose prose-slate max-w-none">
        {post.body && <PortableText value={post.body} />}
      </div>
    </article>
  );
}
