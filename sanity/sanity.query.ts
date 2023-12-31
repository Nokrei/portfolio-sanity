import { groq } from "next-sanity";
import client from "./sanity.client";

const revalidate = 60

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`,
    {next: {revalidate}}
  );
}

export async function getJob() {
  return client.fetch(
    groq`*[_type =="job"]{
      _id,
      name,
      jobTitle,
      "logo":logo.asset->url,
      url,
      description,
      startDate,
      endDate
    }`,
    {next: {revalidate}}
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`,
    {next: {revalidate}}
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug, next:{revalidate} }
  );
}
