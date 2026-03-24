import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const raw = await prisma.vote.groupBy({
      by: ["battleId", "choice"],
      _count: { choice: true },
    });
    const result: Record<string, { seren: number; taffy: number }> = {};
    for (const row of raw) {
      if (!result[row.battleId]) result[row.battleId] = { seren: 0, taffy: 0 };
      result[row.battleId][row.choice as "seren" | "taffy"] = row._count.choice;
    }
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(req: Request) {
  try {
    const { battleId, choice } = await req.json();
    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitor_id")?.value;

    if (!visitorId) {
      visitorId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }

    const existing = await prisma.vote.findFirst({
      where: { battleId, visitorId },
    });

    if (existing) {
      const raw = await prisma.vote.groupBy({
        by: ["battleId", "choice"],
        _count: { choice: true },
      });
      const result: Record<string, { seren: number; taffy: number }> = {};
      for (const row of raw) {
        if (!result[row.battleId]) result[row.battleId] = { seren: 0, taffy: 0 };
        result[row.battleId][row.choice as "seren" | "taffy"] = row._count.choice;
      }
      return NextResponse.json(result[battleId] || { seren: 0, taffy: 0 });
    }

    await prisma.vote.create({ data: { battleId, choice, visitorId } });

    const raw = await prisma.vote.groupBy({
      by: ["battleId", "choice"],
      _count: { choice: true },
    });
    const result: Record<string, { seren: number; taffy: number }> = {};
    for (const row of raw) {
      if (!result[row.battleId]) result[row.battleId] = { seren: 0, taffy: 0 };
      result[row.battleId][row.choice as "seren" | "taffy"] = row._count.choice;
    }

    const res = NextResponse.json(result[battleId] || { seren: 0, taffy: 0 });
    res.cookies.set("visitor_id", visitorId, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
