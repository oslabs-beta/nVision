import { NextResponse } from "next/server";
import { fileParser } from "nvision";

export async function GET() {
  const files = await fileParser();
  console.log(files)
  return new NextResponse(JSON.stringify(files));
};