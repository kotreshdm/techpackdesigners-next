import { NextResponse } from "next/server";

function CustomResponse(message: string, status = 400, success = false) {
  return NextResponse.json({ status, success, message });
}

export default CustomResponse;
