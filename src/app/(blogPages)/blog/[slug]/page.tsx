import BlogDetails from "@/components/blog/BlogDetails";
import Constants from "@/utils/Constants";
import axios from "axios";
import { Metadata } from "next";
import React from "react";
type Props = {
  params: { slug: string };
};

// const getPostDetails = async (slug: string): Promise<string> => {
//   console.log(`${Constants.apiRoutes.getpostOnslug}/${slug}`);

//   const response: any = await axios.get(
//     `${Constants.apiRoutes.getpostOnslug}/${slug}`
//   );
//   return response.data;
// };

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const { slug } = params;
//   const response: any = await getPostDetails(slug);
//   return {
//     title: response.postName ? `${response.postName}` : Constants.SEO.title,
//     description: response.description
//       ? `${response.description}`
//       : Constants.SEO.description,
//     keywords: response.keywords
//       ? `${response.keywords}`
//       : Constants.SEO.keywords,
//   };
// };

interface BlogDetailsDisplayProps {
  slug: String;
}

const BlogDetailsDisplayComponent: React.FC<BlogDetailsDisplayProps> =
  BlogDetails;

export default async function Details({ params }: Props) {
  return (
    <div>
      <BlogDetailsDisplayComponent slug={params.slug} />
    </div>
  );
}
