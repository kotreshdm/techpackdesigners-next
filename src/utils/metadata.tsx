import { Metadata } from "next";
import Constants from "./Constants";

interface PostDetails {
  postName: string;
  description: string;
  keywords: string;
  bannerImage: string;
}

export const generateMetadata = (postDetails: PostDetails | null): Metadata => {
  console.log("sdsdv sd ", postDetails);

  if (!postDetails) {
    return {
      title: Constants.SEO.title,
      description: Constants.SEO.description,
      keywords: Constants.SEO.keywords,
    };
  }

  return {
    title: postDetails.postName || Constants.SEO.title,
    description: postDetails.description || Constants.SEO.description,
    keywords: postDetails.keywords || Constants.SEO.keywords,
  };
};
