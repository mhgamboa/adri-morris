// import Image from "next/image";
import getblogPosts from "@/queries/getblogPosts";
import Link from "next/link";
import React from "react";

const blogPreviews = [
  {
    title: "How to build coffee inside your home in 5 minutes.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
    url: "https://rareblocks.xyz/blog/how-to-build-coffee-inside-your-home-in-5-minutes",
  },
  {
    title: "7 Tips to run your remote team faster and better.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
    url: "https://rareblocks.xyz/blog/7-tips-to-run-your-remote-team-faster-and-better",
  },
  {
    title: "5 Productivity tips to write faster at morning.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
    url: "https://rareblocks.xyz/blog/5-productivity-tips-to-write-faster-at-morning",
  },
];

export default async function Blog() {
  const blogPosts = await getblogPosts();

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis.
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {/* {blogPreviews.map((blogPreview, index) => (
            <div key={index} className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href={blogPreview.url} title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src={blogPreview.image} alt="" />
                  </a>
                </div>
                <p className="mt-5 text-2xl font-semibold">
                  <a href={blogPreview.url} title="" className="text-black">
                    {" "}
                    {blogPreview.title}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">{blogPreview.description}</p>
                <a
                  href={blogPreview.url}
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))} */}

          {blogPosts.map((blog: any) => {
            const slug = blog.slug.current;
            return (
              <div key={blog.title} className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                  <div className="relative">
                    <Link href={`/blog/${slug}`}>
                      <img className="object-cover w-full h-full" src={blog.imageURL} alt="" />
                    </Link>
                  </div>
                  <p className="mt-5 text-2xl font-semibold">
                    <Link href={`/blog/${slug}`} title="" className="text-black">
                      {blog.title}
                    </Link>
                  </p>
                  <p className="mt-4 text-base text-gray-600">{blog.excerpt}</p>
                  <Link
                    href={`/blog/${slug}`}
                    title=""
                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
