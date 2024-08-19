import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

const getPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    content,
    _id
}
  `;

  const post = client.fetch(query);
  return post;
};

export default async function page({ params }: { params: { slug: string } }) {
  console.log(params);
  const post = await getPost(params.slug);
  console.log(post);
  return (
    <div>
      {params.slug}
      <div>
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
