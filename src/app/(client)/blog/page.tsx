import React from "react";
import Link from "next/link";
import getblogPosts from "@/queries/getblogPosts";

export default async function Home() {
  const posts = await getblogPosts();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Description Goes Here</p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && "No posts found."}
        <li className="py-12">
          <article>
            {posts.map((post: any) => {
              const { title, excerpt } = post;
              const slug = post.slug.current;
              return (
                <div
                  key={title}
                  className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
                >
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time>{post.publishedAt}</time>
                      {/* <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time> */}
                    </dd>
                    <div className="w-36 h-36 rounded overflow-hidden">
                      <Link href={`/blog/${slug}`}>
                        <img className="w-full object-cover" src={post.imageURL} alt="people" />
                      </Link>
                    </div>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {excerpt}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </li>
      </ul>
    </div>
  );
}
