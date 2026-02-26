import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = await getCollection("news");
  posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
};
