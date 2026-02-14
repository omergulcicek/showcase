import axios from "axios";
import { findCalendarSourceBySlug } from "@/constants/calendar-sources";
import type { CalendarJsonType } from "@/types/calendar-json.type";
import { buildDownloadName, buildIcs } from "@/utils/ics-builder";

/**
 * Builds an ICS file Response for the given calendar slug.
 * @param slug Source slug to build ICS for
 * @returns Response containing ICS, or 404/500
 */
export async function buildIcsResponse(slug: string): Promise<Response> {
  const source = findCalendarSourceBySlug(slug);
  if (!source) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const response = await axios.get<CalendarJsonType>(source.url, {
      responseType: "json",
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
        "Cache-Control": "public, max-age=300, must-revalidate",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
