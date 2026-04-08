import { createClient } from "contentful-management";

export function getContentfulPlainClient() {
  const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master";

  if (!accessToken) {
    throw new Error("CONTENTFUL_MANAGEMENT_TOKEN が未設定です");
  }

  if (!spaceId) {
    throw new Error("CONTENTFUL_SPACE_ID が未設定です");
  }

  return createClient(
    {
      accessToken,
    },
    {
      defaults: {
        spaceId,
        environmentId,
      },
    },
  );
}
