import { NextResponse } from "next/server";
import CustomResponse from "@/utils/CustomResponse";
import connectDB from "@/app/libs/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string; // Add password field to User interface
}

export async function POST(req: any, res: any) {
  const { email, password } = await req.json();

  if (!email || !password || email.trim() === "" || password.trim() === "") {
    return CustomResponse("All fields are required");
  }

  const db = await connectDB();
  const collection = db.collection<User>("users"); // Specify User interface as generic type

  try {
    const result = await collection.findOne({ email });

    if (!result) {
      return CustomResponse("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, result.password);

    if (!passwordMatch) {
      return CustomResponse("Incorrect password");
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: result._id, email: result.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    // Omit sensitive data from the response
    const { password: _, ...userData } = result;

    return NextResponse.json({
      status: 200,
      success: true,
      data: { user: userData, token },
    });
  } catch (error) {
    console.error("Error querying database:", error);
    return NextResponse.json("Error querying database");
  }
}
