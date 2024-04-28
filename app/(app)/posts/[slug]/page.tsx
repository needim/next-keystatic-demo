import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await reader.collections.posts.read(params.slug);
  return post ? (
    <>
      <h1>{post.title}</h1>
      <DocumentRenderer document={await post.content()} />
      <hr />
      <a href={`/`}>Back to Posts</a>
    </>
  ) : (
    <div>No Post Found</div>
  );
}
