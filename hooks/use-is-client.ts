import { useSyncExternalStore } from "react"

/**
 * True on the client after hydration; false on the server and during SSR.
 * Safe for avoiding hydration mismatches with browser-only UI (see React docs for useSyncExternalStore).
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}
