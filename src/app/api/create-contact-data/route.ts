import connectDB from "@/app/libs/mongodb";
import { sendMail } from "@/utils/mailService";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const data = await req.json();
  const { name, email, subject, country, telephone, comment } = data;

  const source = "Techpack Blog";

  const db = await connectDB();

  const collection = db.collection("contacts");

  try {
    await collection.insertOne({
      name,
      email,
      subject,
      country,
      telephone,
      comment,
      source,
    });

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

    return NextResponse.json("Success inserting data into MongoDB");
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    return NextResponse.json("Error inserting data into MongoDB");
  }
}
