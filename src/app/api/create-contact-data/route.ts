import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json(data);
}
