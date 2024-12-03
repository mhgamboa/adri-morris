"server-only";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";
export default async function getblogPosts(quantity?: number) {
  //   let query = `*[_type == "blogPost"] {
  //     title,
  //     slug,
  //     publishedAt,
  //     excerpt,
  //     _id
  // }`;

  let query = `*[_type == "blogPost"] | order(publishedAt desc)${
    quantity ? `[0..${quantity - 1}]` : ""
  } {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    "imageURL": titleImage.asset->url  
  }`;

  try {
    const blogPosts = await client.fetch(query);
    return blogPosts;
  } catch (error) {
    console.error(error);
    redirect("/error");
  }
}
