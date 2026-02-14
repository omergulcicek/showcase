import type { CalendarEventType } from "./calendar-event.type";

export interface CalendarJsonType {
  calendarName: string;
  calendarDesc?: string;
  slug?: string;
  events: CalendarEventType[];
}
