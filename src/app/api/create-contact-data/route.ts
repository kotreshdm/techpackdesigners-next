import pool from "@/app/libs/mysql";
import { sendMail } from "@/utils/mailService";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const data = await req.json();
  const { name, email, subject, country, telephone, comment } = data;

  const source = "Techpack Blog";

  const db = await pool.getConnection();
  const insertQuery =
    "INSERT INTO contacts (name,email,subject,country,telephone,comment,source) VALUES (?,?,?,?,?,?,?)";
  const [result] = await db.execute(insertQuery, [
    name,
    email,
    subject,
    country,
    telephone,
    comment,
    source,
  ]);
  db.release();

  const content = `<p>Name : ${name}</p>
  <p>Email : ${email}</p>
  <p>Subject : ${subject}</p>
  <p>Country : ${country}</p>
  <p>Telephone : ${telephone}</p>
  <p>Comment : ${comment}</p>`;
  await sendMail({
    subject: name + "-" + subject,
    fromMail: email,
    content: content,
  });
  return NextResponse.json(result);
}
