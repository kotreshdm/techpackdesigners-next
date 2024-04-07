import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const data = await req.json();
  const { name, email } = data;
  const db = await pool.getConnection();
  const insertQuery = "INSERT INTO contacts (name,email) VALUES (?,?)";
  const [result] = await db.execute(insertQuery, [name, email]);
  db.release();
  return NextResponse.json(result);
}
