import d from 'dayjs'

import localeDate from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import dj from './j.js'

import 'dayjs/locale/en-au'

d.extend(localeDate)
d.extend(dj)
d.extend(weekday)
d.extend(isoWeek)
d.extend(utc)
d.extend(timezone)

type THelperParams = { locale: string; timestamp?: number }
export type THelper = (params: THelperParams) => {
  months: string[]
  month: string
  year: string
}
export const helpers: THelper = ({ locale, timestamp }) => {
  d.utc().tz(Intl.DateTimeFormat().resolvedOptions().timeZone, true)
  // d.utc().tz('America/Metlakatla', true);
  d.locale(locale)

  const _d = timestamp ? d(timestamp) : d()

  const months = d.months()
  const year = _d.format('YYYY')
  const month = _d.format('MM')

  return {
    months,
    year,
    month,
  }
}
