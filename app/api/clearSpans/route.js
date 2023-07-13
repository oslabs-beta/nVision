import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('http://localhost:8080/clearSpans', {
    mode:'no-cors',
  });
  return NextResponse.json('', { status: 200 });
}