import { getContentfulPlainClient } from "./contentful-management";

export async function getPosts() {
  const client = getContentfulPlainClient();

  const res = await client.entry.getMany({
    query: {
      content_type: "blogPost", // ←ここ合わせる
      order: "-sys.createdAt",
    },
  });

  return res.items;
}
