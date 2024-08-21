"server-only";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";
export default async function getblogPosts() {
  const query = `*[_type == "blogPost"] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id
}`;

  try {
    const blogPosts = await client.fetch(query);
    return blogPosts;
  } catch (error) {
    console.log(error);
    redirect("/error");
  }
}
