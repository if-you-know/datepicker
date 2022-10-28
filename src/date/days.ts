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

export default d
