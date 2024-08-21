import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
// import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import getSingleBlogPost from "@/lib/getSingleBlogPost";

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { slug: string } }) {
  const post = await getSingleBlogPost(params.slug);
  return (
    <div className="mt-8 flex flex-col items-center justify-center px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1>
        <span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">Adri Morrs - Blog</span>
        {/* <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Adri Morrs - Blog</span> */}
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{post.title}</span>
      </h1>

      <Image src={urlFor(post.titleImage).url()} width={400} height={400} alt="Title Image" priority className="rounded-lg mt-8 border" />

      <div className="container mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary whitespace-pre-line pb-16">
        <PortableText
          value={post.content}
          components={{
            // Styling for Lists
            list: {
              number: ({ children }) => <div className="list-decimal">{children}</div>,
              bullet: ({ children }) => <div className="list-disc">{children}</div>,
            },
          }}
        />
      </div>
    </div>
  );
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getSingleBlogPost(slug);

  return {
    title: `${post.title}`,
    description: `Adri Morrs - Blog`,
  };
}
