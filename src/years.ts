export const LATEST_YEAR = '2027' as const

export const SUPPORTED_YEARS = [LATEST_YEAR] as const

export type FestivalYear = (typeof SUPPORTED_YEARS)[number]

export function isFestivalYear(value: string): value is FestivalYear {
  return (SUPPORTED_YEARS as readonly string[]).includes(value)
}

export function yearPath(year: FestivalYear, segment = ''): string {
  return segment ? `/${year}/${segment}` : `/${year}`
}
