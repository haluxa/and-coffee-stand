import Link from "next/link";
import Image from "next/image";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/lib/contentful";
import Footer from "@/components/footer";

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
      <div id="bg-video-stack" aria-hidden="true">
        <div className="bg-video-track">
          <video id="bg-video-1" autoPlay loop muted playsInline>
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
            />
            Your browser does not support the video tag.
          </video>
          <video id="bg-video-2" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
          <video id="bg-video-3" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
          <video id="bg-video-4" autoPlay loop muted playsInline>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/and-coffee-stand.firebasestorage.app/o/bg-leaves_shadow.mp4?alt=media&token=76c09836-89e8-43fc-8cf8-f93c729f9413"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <h1 className="secret_title">Secret</h1>

      <div className="post_list">
        {posts.map((post) => {
          const imageUrl = getImageUrl(post.fields.coverImage);
          const tags = post.fields.tags ?? [];
          const publishedAt = post.fields.publishedAt
            ? new Date(post.fields.publishedAt).toLocaleDateString("ja-JP")
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
