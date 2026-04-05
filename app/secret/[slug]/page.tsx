import Image from "next/image";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/lib/contentful";
import { notFound } from "next/navigation";

type PostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    bodyText: EntryFieldTypes.Text;
    coverImage: EntryFieldTypes.AssetLink;
    published_at: EntryFieldTypes.Date;
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
  params: { slug: string };
}) {
  const res = await contentfulClient.getEntries<PostSkeleton>({
    content_type: "andCoffeeStand",
    "fields.slug": params.slug,
    limit: 1,
    include: 2,
  });

  const post = res.items[0];

  if (!post) {
    notFound();
  }

  const imageUrl = getImageUrl(post.fields.coverImage);

  return (
    <main className="post_detail">
      <h1 className="post_detail_title">{post.fields.title}</h1>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.fields.title}
          className="post_detail_image"
          width={600}
          height={400}
        />
      )}

      <div className="post_body">{post.fields.bodyText}</div>
    </main>
  );
}
