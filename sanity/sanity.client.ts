import { createClient } from "next-sanity";
import type { ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId: "wt7y33vj",
  dataset: "production",
  apiVersion: "2023-08-13",
  useCdn: false,
};

const client = createClient(config);

export default client;
