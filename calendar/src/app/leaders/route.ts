import "server-only";
export const dynamic = "force-static";
import { buildIcsResponse } from "@/helpers/build-ics-response";

export async function GET() {
  return buildIcsResponse("leaders");
}
