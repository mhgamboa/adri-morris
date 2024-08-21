import React from "react";
import Link from "next/link";

import { navigation } from "@/components/ui/data";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          Logo
        </Link>

        <p className="my-6 text-gray-500 dark:text-gray-400">Placeholder text can go here.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {navigation.map(item => (
            <li key={item.title} className="hover:text-gray-900 mr-4 hover:underline md:mr-6">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Adri Morris
          </a>
        </span>
      </div>
    </footer>
  );
}
