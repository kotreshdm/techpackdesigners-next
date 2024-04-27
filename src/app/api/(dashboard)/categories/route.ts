import connectDB from "@/app/libs/mongodb";
import CustomResponse from "@/utils/CustomResponse";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const data = await req.json();
  const { name, description, slug } = data;

  const db = await connectDB();

  const collection = db.collection("categories");

  try {
    const result = await collection.findOne({ slug });
    if (result) {
      return CustomResponse("Category already exists!");
    }
    await collection.insertOne({
      name,
      slug,
      description,
    });
    return CustomResponse("Category created", 200, true);
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    return CustomResponse("Error inserting data into MongoDB");

    return NextResponse.json("Error inserting data into MongoDB");
  }
}
