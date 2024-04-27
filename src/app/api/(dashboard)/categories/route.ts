import connectDB from "@/app/libs/mongodb";
import CustomResponse from "@/utils/CustomResponse";

export async function POST(req: any, res: any) {
  try {
    const data = await req.json();
    const { name, description, slug } = data;

    const db = await connectDB();

    const collection = db.collection("categories");

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
    console.error("Error verifying or decoding token:", error);
    return CustomResponse("Invalid or expired token", 401);
  }
}
