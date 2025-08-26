import type {
  CalendarEventType,
  LeapPolicyType,
} from "../types/calendar-event.type";
import type { CalendarJsonType } from "../types/calendar-json.type";

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

function formatUtcStamp(date: Date): string {
  const year = date.getUTCFullYear();
  const month = pad2(date.getUTCMonth() + 1);
  const day = pad2(date.getUTCDate());
  const hours = pad2(date.getUTCHours());
  const minutes = pad2(date.getUTCMinutes());
  const seconds = pad2(date.getUTCSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

function formatValueDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = pad2(date.getUTCMonth() + 1);
  const day = pad2(date.getUTCDate());
  return `${year}${month}${day}`;
}

function sanitizeIcsText(input: string): string {
  return input
    .replace(/\\r\\n/g, "\n")
    .replace(/\\r/g, "\n")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function foldIcsLine(line: string): string[] {
  // RFC5545: max 75 octets per line (excluding CRLF). Continuations start with a space.
  // Accumulate by character to avoid splitting multi-byte UTF-8 sequences.
  const encoder = new TextEncoder();
  const segments: string[] = [];
  let current = "";
  let currentBytes = 0;
  for (const ch of line) {
    const chLen = encoder.encode(ch).length;
    if (currentBytes + chLen > 75) {
      segments.push(current);
      current = " " + ch; // leading space counts toward 75
      currentBytes = 1 + chLen;
    } else {
      current += ch;
      currentBytes += chLen;
    }
  }
  if (current) segments.push(current);
  return segments;
}

function isLeapDay(month: number, day: number): boolean {
  return month === 2 && day === 29;
}

function resolveLeapDate(
  baseYear: number,
  month: number,
  day: number,
  policy: LeapPolicyType = "skip"
): Date | null {
  if (!isLeapDay(month, day)) {
    return new Date(Date.UTC(baseYear, month - 1, day));
  }
  const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  if (isLeap(baseYear)) {
    return new Date(Date.UTC(baseYear, month - 1, day));
  }
  if (policy === "skip") return null;
  if (policy === "previous") return new Date(Date.UTC(baseYear, 1, 28)); // Feb 28
  // policy === "next"
  return new Date(Date.UTC(baseYear, 2, 1)); // Mar 1
}

function buildRRule(event: CalendarEventType): string {
  const monthStr = pad2(event.month);
  const dayStr = pad2(event.day);
  const parts: string[] = [
    "FREQ=YEARLY",
    `BYMONTH=${monthStr}`,
    `BYMONTHDAY=${dayStr}`,
  ];
  if (typeof event.toYear === "number") {
    const until = new Date(
      Date.UTC(event.toYear, event.month - 1, event.day, 23, 59, 59)
    );
    const untilStr = formatUtcStamp(until).replace(/Z$/, ""); // UNTIL is local-like (no Z)
    parts.push(`UNTIL=${untilStr}`);
  }
  return `RRULE:${parts.join(";")}`;
}

function addAlarm(lines: string[], alarmDaysBefore?: number): void {
  if (!alarmDaysBefore || alarmDaysBefore <= 0) return;
  lines.push("BEGIN:VALARM");
  lines.push("ACTION:DISPLAY");
  lines.push("DESCRIPTION:Reminder");
  lines.push(`TRIGGER:-P${Math.floor(alarmDaysBefore)}D`);
  lines.push("END:VALARM");
}

export function buildIcs(json: CalendarJsonType): string {
  const now = new Date();
  const dtstamp = formatUtcStamp(now);
  const yearAnchor = now.getUTCFullYear();

  const lines: string[] = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("PRODID:-//showcase//calendar//EN");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  if (json.calendarName)
    lines.push(`X-WR-CALNAME:${sanitizeIcsText(json.calendarName)}`);
  if (json.calendarDesc)
    lines.push(`X-WR-CALDESC:${sanitizeIcsText(json.calendarDesc)}`);

  json.events.forEach((ev, idx) => {
    const start = resolveLeapDate(yearAnchor, ev.month, ev.day, ev.leapPolicy);
    if (!start) return; // skip non-leap years if policy says so

    const dtstart = formatValueDate(start);
    const uidBase = ev.id
      ? slugify(ev.id)
      : `${slugify(ev.summary)}-${pad2(ev.month)}-${pad2(ev.day)}`;
    const uid = `${uidBase}-${idx}@showcase`;
    const summary = sanitizeIcsText(ev.summary);
    const description = ev.description
      ? sanitizeIcsText(ev.description)
      : undefined;

    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${uid}`);
    lines.push(`DTSTAMP:${dtstamp}`);
    lines.push(`DTSTART;VALUE=DATE:${dtstart}`);
    lines.push(`SUMMARY:${summary}`);
    if (description) lines.push(`DESCRIPTION:${description}`);
    if (ev.location) lines.push(`LOCATION:${sanitizeIcsText(ev.location)}`);
    if (ev.url) lines.push(`URL:${sanitizeIcsText(ev.url)}`);
    if (ev.tags && ev.tags.length > 0)
      lines.push(`CATEGORIES:${ev.tags.map(sanitizeIcsText).join(",")}`);

    // Duration for all-day events: DTSTART is inclusive; DTEND is exclusive
    const durationDays = Math.max(1, Math.floor(ev.durationDays ?? 1));
    if (durationDays > 1) {
      const end = new Date(start);
      end.setUTCDate(end.getUTCDate() + durationDays);
      lines.push(`DTEND;VALUE=DATE:${formatValueDate(end)}`);
    }

    lines.push(buildRRule(ev));
    lines.push("TRANSP:TRANSPARENT");
    addAlarm(lines, ev.alarmDaysBefore);
    lines.push("END:VEVENT");
  });

  lines.push("END:VCALENDAR");

  // Fold lines for RFC compliance
  const folded = lines.flatMap(foldIcsLine);
  return folded.join("\r\n");
}

export function buildDownloadName(slug?: string, fallback?: string): string {
  const base = slug ? slugify(slug) : fallback ? slugify(fallback) : "calendar";
  return `omergulcicek-calendars-${base}.ics`;
}
