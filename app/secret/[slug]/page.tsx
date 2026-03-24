import Image from "next/image";
import type {
  Asset,
  EntryFieldTypes,
  EntrySkeletonType,
  UnresolvedLink,
} from "contentful";
import { contentfulClient } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";

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
    <main className="secret_detail_page">
      <h1>{post.fields.title}</h1>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.fields.title}
          width={800}
          height={500}
        />
      )}

      <div>{documentToReactComponents(post.fields.body)}</div>
    </main>
  );
}
