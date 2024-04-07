import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // Get a connection from the pool
    const db = await pool.getConnection();

    // Execute SQL query with parameterized query and limit to one row
    const postsQuery = "SELECT * FROM posts WHERE postSlug = ? LIMIT 1";
    const [postsResult]: any = await db.execute(postsQuery, [params.slug]);

    db.release();

    if (postsResult.length > 0) {
      const post = {
        postName: postsResult[0].pageTitle || postsResult[0].postName,
        description: postsResult[0].SEODescription,
        keywords: postsResult[0].keywords,
        bannerImage: postsResult[0].bannerImage,
      };
      return NextResponse.json(post);
    } else {
      // If it's empty (no matching post found), return a 404 response
      return NextResponse.json({});
    }
  } catch (error) {
    // If an error occurs, return a JSON response with the error message and status code 500
    return NextResponse.json({});
  }
}
