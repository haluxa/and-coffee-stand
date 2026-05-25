import Link from "next/link";
import Image from "next/image";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/_lib/contentful";
import Footer from "@/_components/Footer/page";
import { formatJapaneseDate } from "@/_lib/format-date";

export const dynamic = "force-dynamic";

type PostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    bodyText: EntryFieldTypes.Text;
    coverImage: EntryFieldTypes.AssetLink;
    publishedAt: EntryFieldTypes.Date;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
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
          const tags = post.fields.tags ?? [];
          const publishedAt = post.fields.publishedAt
            ? formatJapaneseDate(post.fields.publishedAt)
            : null;

          return (
            <article key={post.sys.id} className="post_card">
              <div className="post_content">
                {tags.length > 0 && (
                  <div className="post_tags">
                    {tags.map((tag) => (
                      <span key={tag} className="post_tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/secret/${post.fields.slug}`}>
                  <h2 className="post_title">{post.fields.title}</h2>
                </Link>
                {publishedAt && <p className="post_date">{publishedAt}</p>}
              </div>

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
      <div className="admin_link">
        <Link href="/admin">管理者画面</Link>
      </div>
      <Footer />
    </main>
  );
}
