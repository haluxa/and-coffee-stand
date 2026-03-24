import Link from "next/link";
import Image from "next/image";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/lib/contentful";

type PostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    coverImage: EntryFieldTypes.AssetLink;
    published_at: EntryFieldTypes.Date;
  },
  "andCoffeeStand"
>;

function getImageUrl(asset?: Asset | UnresolvedLink<"Asset">) {
  if (!asset || !("fields" in asset) || !asset.fields.file) return null;
  return `https:${asset.fields.file.url}`;
}

export default async function SecretPage() {
  const res = await contentfulClient.getEntries<PostSkeleton>({
    content_type: "andCoffeeStand",
    include: 2,
  });

  const posts = res.items;

  return (
    <main className="secret_page">
      <h1 className="secret_title">Secret</h1>

      <div className="post_list">
        {posts.map((post) => {
          const imageUrl = getImageUrl(post.fields.coverImage);

          return (
            <article key={post.sys.id} className="post_card">
              <Link href={`/secret/${post.fields.slug}`}>
                <h2 className="post_title">{post.fields.title}</h2>
              </Link>

              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={post.fields.title}
                  className="post_image"
                  width={600}
                  height={400}
                />
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
