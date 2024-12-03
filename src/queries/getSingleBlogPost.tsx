import "server-only";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";

export default async function getSingleBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    content,
    titleImage,
    _id
    }`;

  try {
    const blogPost = await client.fetch(query);
    if (!blogPost) redirect("/error");
    return blogPost;
  } catch (error) {
    console.error(error);
    redirect("/error");
  }
}
