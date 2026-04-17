import Image from "next/image";
import Link from "next/link";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/lib/contentful";
import { formatJapaneseDate } from "@/lib/format-date";
import { notFound } from "next/navigation";

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

export default async function SecretDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await contentfulClient.getEntries<PostSkeleton>({
    content_type: "andCoffeeStand",
    "fields.slug": slug,
    limit: 1,
    include: 2,
  });

  const post = res.items[0];

  if (!post) {
    notFound();
  }

  const imageUrl = getImageUrl(post.fields.coverImage);
  const publishedAt = post.fields.publishedAt
    ? formatJapaneseDate(post.fields.publishedAt)
    : null;
  const tags = post.fields.tags ?? [];

  return (
    <main className="post_detail">
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
      <article className="post_detail_article">
        <Link href="/secret" className="post_detail_back">
          Secret Index
        </Link>

        <header className="post_detail_header">
          {tags.length > 0 && (
            <div className="post_tags">
              {tags.map((tag) => (
                <span key={tag} className="post_tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="post_detail_title">{post.fields.title}</h1>

          {publishedAt && (
            <p className="post_date post_detail_date">{publishedAt}</p>
          )}
        </header>

        {imageUrl && (
          <div className="post_detail_media">
            <Image
              src={imageUrl}
              alt={post.fields.title}
              className="post_detail_image"
              width={1200}
              height={800}
            />
          </div>
        )}

        <div className="post_body">{post.fields.bodyText}</div>
      </article>
    </main>
  );
}
