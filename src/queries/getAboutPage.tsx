import "server-only";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";

export default async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0] {
    heading,
    content,
    "imageURL": aboutImage.asset->url  
    }`;

  try {
    const aboutPage = await client.fetch(query);
    if (!aboutPage) redirect("/error");
    return aboutPage;
  } catch (error) {
    console.error(error);
    redirect("/error");
  }
}
