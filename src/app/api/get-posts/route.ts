import { NextResponse } from "next/server";
import connectDB from "@/app/libs/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    const catCollection = db.collection("categories");
    const categories = await catCollection.find().toArray();

    const postCollection = db.collection("posts");
    const posts = await postCollection.find().toArray();

    const userCollection = db.collection("users");
    const allUsers = await userCollection.find().toArray();

    const postWithUserNameAndCategory = posts.map((post) => {
      const catName = categories.find((cat) => cat._id.equals(post.categoryId));
      const user = allUsers.find((user) => user._id.equals(post.createdBy));
      return {
        ...post,
        categoryName: catName ? catName.name : null,
        categorySlug: catName ? catName.slug : null,
        userName: user ? user.userName : null,
        userProfilePicture: user ? user.profilePicture : null,
      };
    });

    // Return the enriched posts as JSON response
    return NextResponse.json(postWithUserNameAndCategory);
  } catch (error) {
    // If an error occurs, return a JSON response with the error message and status code 500
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
