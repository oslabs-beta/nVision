import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('http://localhost:8080/getSpans', {
    mode:'no-cors',
    cache: 'no-store'
  });
  const data = await res.json();
  return NextResponse.json(data , { status: 200 });
}