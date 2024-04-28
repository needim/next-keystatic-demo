import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";
import Link from "next/link";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const posts = await reader.collections.posts.all();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.entry.title}</Link>
        </li>
      ))}
    </ul>
  );
}
