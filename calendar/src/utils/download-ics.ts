import axios from "axios";
import type { CalendarJsonType } from "../types/calendar-json.type";
import { buildDownloadName, buildIcs } from "./ics-builder";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function downloadIcsFromGit(
  url: string,
  fallbackName?: string
): Promise<void> {
  const response = await axios.get<CalendarJsonType>(url, {
    responseType: "json",
  });
  const data = response.data;
  const ics = buildIcs(data);
  const fileName = buildDownloadName(
    data.slug ?? slugify(data.calendarName),
    fallbackName
  );
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const href = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = href;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(href);
}
