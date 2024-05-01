import { NextResponse } from "next/server";
import connectDB from "@/app/libs/mongodb";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const db = await connectDB();
    const postCollection = db.collection("posts");
    const post = await postCollection.findOne({ postSlug: params.slug });
    if (post) {
      return NextResponse.json({
        postName: post.pageTitle || post.postName,
        description: post.SEODescription,
        keywords: post.keywords,
        bannerImage: post.bannerImage,
      });
    } else {
      return NextResponse.json({});
    }
  } catch (error) {
    return NextResponse.json({});
  }
}
