import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { game, playerName, score } = await req.json();
    await prisma.gameScore.create({ data: { game, playerName, score } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const game = searchParams.get("game");
    if (!game) return NextResponse.json([]);
    const scores = await prisma.gameScore.findMany({
      where: { game },
      orderBy: { score: "desc" },
      take: 10,
    });
    return NextResponse.json(scores);
  } catch {
    return NextResponse.json([]);
  }
}
