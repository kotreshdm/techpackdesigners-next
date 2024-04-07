import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
  try {
    // Get a connection from the pool
    const db = await pool.getConnection();
    const query = "SELECT * FROM protifilioimages";
    const [resut] = await db.execute(query);
    db.release();
    return NextResponse.json(resut);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
