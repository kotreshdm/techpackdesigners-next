import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
  try {
    // Get a connection from the pool
    const db = await pool.getConnection();

    // Execute SQL queries to fetch posts, categories, and users
    const postsQuery = "SELECT * FROM posts";
    const [postsResult] = await db.execute(postsQuery);
    const posts = postsResult as { categoryId: number; createdBy: number }[]; // Extract rows

    const categoryQuery = "SELECT * FROM category";
    const [categoriesResult] = await db.execute(categoryQuery);
    const categories = categoriesResult as {
      categoryId: number;
      name: string;
      slug: string;
    }[]; // Extract rows

    const userQuery = "SELECT * FROM users";
    const [allUsersResult] = await db.execute(userQuery);
    const allUsers = allUsersResult as {
      userId: number;
      userName: string;
      profilePicture: string;
    }[]; // Extract rows

    // Release the connection back to the pool
    db.release();

    // Map over the posts and enrich them with category and user information
    const postWithUserNameAndCategory = posts.map((post) => {
      const catName = categories.find(
        (cat) => cat.categoryId === post.categoryId
      );
      const user = allUsers.find((user) => user.userId === post.createdBy);
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
