import React from "react";
import Link from "next/link";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function CMSNavbar() {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/"></Link>
    </div>
  );
}
