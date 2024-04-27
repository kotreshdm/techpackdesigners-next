import { NextResponse } from "next/server";
import CustomResponse from "@/utils/CustomResponse";
import connectDB from "@/app/libs/mongodb";
import bcrypt from "bcrypt";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export async function POST(req: any, res: any) {
  const { name, email, password } = await req.json();
  if (
    !email ||
    !password ||
    email === "" ||
    password === "" ||
    !name ||
    name === ""
  ) {
    return CustomResponse("All fields are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const db = await connectDB();
  const collection = db.collection("users");
  const isAdmin = false;
  try {
    const result = await collection.insertOne({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    const insertedUser = result.insertedId;
    const validUser = (await collection.findOne({
      _id: insertedUser,
    })) as User | null;

    if (!validUser) {
      return CustomResponse("User not found");
    }
    const { password: pass, ...rest } = validUser;
    return NextResponse.json({
      status: 200,
      success: true,
      data: rest,
    });
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    return NextResponse.json("Error inserting data into MongoDB");
  }
}
