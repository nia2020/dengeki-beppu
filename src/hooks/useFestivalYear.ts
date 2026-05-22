import { useParams } from 'react-router-dom'
import { isFestivalYear, LATEST_YEAR, type FestivalYear } from '../years'

export function useFestivalYear(): FestivalYear {
  const { year } = useParams<{ year: string }>()
  if (year && isFestivalYear(year)) return year
  return LATEST_YEAR
}
