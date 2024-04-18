import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CustomResponse from "@/utils/CustomResponse";

export async function POST(req: any, res: any) {
  const { email, password } = await req.json();
  if (!email || !password || email === "" || password === "") {
    return CustomResponse("All fields are required");
  }

  const db = await pool.getConnection();
  const query = "SELECT * FROM users WHERE email = ?";
  const [results] = await db.execute(query, [email]);
  db.release();

  let result = Object.values(JSON.parse(JSON.stringify(results)));
  if (result.length === 0) {
    return CustomResponse("User not found");
  }

  const user: any = result[0];

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return CustomResponse("Invalid password");
  }

  const { password: pass, ...rest } = user;
  const token = jwt.sign(
    { id: user.userId, isAdmin: user.isAdmin },
    process.env.JWT_SECRET
  );

  return NextResponse.json({ status: 200, success: true, data: rest });
}
