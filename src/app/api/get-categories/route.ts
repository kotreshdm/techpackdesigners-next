import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
  try {
    // Get a connection from the pool
    const db = await pool.getConnection();
    const categoryQuery = "SELECT * FROM category";
    const [categoriesResult] = await db.execute(categoryQuery);
    db.release();
    // Return the enriched posts as JSON response
    return NextResponse.json(categoriesResult);
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
