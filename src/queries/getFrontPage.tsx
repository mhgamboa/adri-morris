import "server-only";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";

export default async function getFrontPage() {
  const query = `*[_type == "frontPage"][0] {
    title,
    subtitle,
    "imageURL": heroImage.asset->url  
    }`;

  try {
    const frontPage = await client.fetch(query);
    if (!frontPage) redirect("/error");

    return frontPage;
  } catch (error) {
    console.log(error);
    redirect("/error");
  }
}
