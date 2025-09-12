import "server-only";
export const dynamic = "force-static";
import { NextRequest } from "next/server";
import { CALENDAR_SOURCES } from "@/constants/calendar-sources";
import { buildIcsResponse } from "@/helpers/build-ics-response";

export function generateStaticParams() {
  return CALENDAR_SOURCES.map((s) => ({ slug: s.slug }));
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    return buildIcsResponse(slug);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
