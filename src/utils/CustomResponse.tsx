import { NextResponse } from "next/server";

function CustomResponse(message: string) {
  return NextResponse.json({ status: 400, success: false, message });
}

export default CustomResponse;
