import { getPosts } from "@/lib/contentful-posts";

type Post = {
  sys: { id: string };
  fields: {
    title?: { "ja-JP"?: string };
  };
};

export default async function AdminPostsPage() {
  const posts = (await getPosts()) as Post[];

  return (
    <section>
      <h1>記事一覧</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>{post.fields.title?.["ja-JP"]}</li>
        ))}
      </ul>
    </section>
  );
}
