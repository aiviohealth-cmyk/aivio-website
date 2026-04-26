import { client } from "./sanity";

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    hero {
      headline,
      subheadline,
      ctaText,
      ctaUrl,
      backgroundImage
    },
    benefits,
    socialProof,
    testimonials,
    seo
  }`);
}

export async function getFeaturesPage() {
  return client.fetch(`*[_type == "featuresPage"][0]{
    headline,
    intro,
    features,
    seo
  }`);
}

export async function getPricingPage() {
  return client.fetch(`*[_type == "pricingPage"][0]{
    headline,
    intro,
    plans,
    faq,
    seo
  }`);
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt,
    author,
    category,
    excerpt,
    coverImage,
    seo
  }`);
}

export async function getBlogPost(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    publishedAt,
    author,
    category,
    excerpt,
    coverImage,
    body,
    seo
  }`, { slug });
}
