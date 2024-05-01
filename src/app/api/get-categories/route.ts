import { NextResponse } from "next/server";
import connectDB from "@/app/libs/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    const collection = db.collection("categories");
    const categories = await collection.find().toArray();

    const categoryQuery = "SELECT * FROM category";
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
