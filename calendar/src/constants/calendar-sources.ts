import type { CalendarSourceType } from "../types/calendar-source.type";

export const CALENDAR_SOURCES: CalendarSourceType[] = [
  {
    slug: "leaders",
    url: "https://raw.githubusercontent.com/omergulcicek/calendar/refs/heads/main/leaders.json",
    displayName: "👑 Liderler",
    description: "Açık kaynak liderler takvimi",
  },
  {
    slug: "battles",
    url: "https://raw.githubusercontent.com/omergulcicek/calendar/refs/heads/main/battles.json",
    displayName: "⚔️ Savaşlar",
    description: "Açık kaynak savaşlar takvimi",
  },
  {
    slug: "nature",
    url: "https://raw.githubusercontent.com/omergulcicek/calendar/refs/heads/main/nature.json",
    displayName: "🌿 Doğa ve Gökyüzü",
    description: "Mevsimler, göktaşı yağmurları, gün dönümleri ve ritüeller",
  },
  {
    slug: "spiritual",
    url: "https://raw.githubusercontent.com/omergulcicek/calendar/refs/heads/main/spiritual.json",
    displayName: "🌙 Manevi günler",
    description: "Kandiller, Ramazan/Kurban Bayramları, Hicri yılbaşı ve Aşure",
  },
];

export function findCalendarSourceBySlug(
  slug: string
): CalendarSourceType | undefined {
  return CALENDAR_SOURCES.find((c) => c.slug === slug);
}
