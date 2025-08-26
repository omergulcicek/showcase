import "server-only";
import { NextRequest } from "next/server";
import axios from "axios";
import { findCalendarSourceBySlug } from "@/constants/calendar-sources";
import type { CalendarJsonType } from "@/types/calendar-json.type";
import { buildDownloadName, buildIcs } from "@/utils/ics-builder";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const source = findCalendarSourceBySlug(slug);
    if (!source) {
      return new Response("Not found", { status: 404 });
    }

    const response = await axios.get<CalendarJsonType>(source.url, {
      responseType: "json",
      // disable cache between our server and origin for freshness
      headers: { "Cache-Control": "no-cache" },
    });
    const json = response.data;
    const ics = buildIcs(json);
    const fileName = buildDownloadName(json.slug ?? slug, json.calendarName);

    return new Response(ics, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": `attachment; filename=${fileName}`,
        // Let clients (Apple Calendar) cache but ensure they can revalidate
        "Cache-Control": "public, max-age=300, must-revalidate",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
