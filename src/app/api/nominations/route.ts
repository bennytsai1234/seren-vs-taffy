import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { character, quote, source, submitter } = await req.json();
    await prisma.nomination.create({ data: { character, quote, source, submitter, votes: 0 } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function GET() {
  try {
    const nominations = await prisma.nomination.findMany({ orderBy: { votes: "desc" } });
    return NextResponse.json(nominations);
  } catch {
    return NextResponse.json([]);
  }
}
