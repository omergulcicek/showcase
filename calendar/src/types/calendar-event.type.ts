export type LeapPolicyType = "skip" | "previous" | "next";

export interface CalendarEventType {
  id?: string;
  summary: string;
  description?: string;
  month: number; // 1-12
  day: number; // 1-31
  location?: string;
  url?: string;
  tags?: string[];
  durationDays?: number; // default: 1
  fromYear?: number; // optional anchor or lower bound
  toYear?: number; // optional upper bound for RRULE (UNTIL)
  alarmDaysBefore?: number; // adds a VALARM with -P{n}D
  leapPolicy?: LeapPolicyType; // behavior for Feb 29
}
