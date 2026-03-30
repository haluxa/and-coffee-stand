import { createClient } from "contentful-management";

export function getContentfulPlainClient() {
  return createClient(
    {
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
    },
    {
      defaults: {
        spaceId: process.env.CONTENTFUL_SPACE_ID!,
        environmentId: process.env.CONTENTFUL_ENVIRONMENT || "master",
      },
    },
  );
}
