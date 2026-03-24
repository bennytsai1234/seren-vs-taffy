import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const raw = await prisma.quizResult.groupBy({
      by: ["type"],
      _count: { type: true },
    });
    const result = { seren: 0, taffy: 0, both: 0 };
    for (const row of raw) {
      if (row.type === "seren" || row.type === "taffy" || row.type === "both") {
        result[row.type] = row._count.type;
      }
    }
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ seren: 0, taffy: 0, both: 0 });
  }
}
