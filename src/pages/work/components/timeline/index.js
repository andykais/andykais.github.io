import * as React from 'react'
import { Info } from 'luxon'

import styles from './index.module.css'
import data from '../../../../data/work'

const monthNames = Info.months('long')

const timelineObj = data.reduce(
  (accYear, { durations, title }) => ({
    ...accYear,
    ...durations.reduce(
      (accMonth, { begin, end }) => ({
        ...accMonth,
        [begin.year]: {
          ...accYear[begin.year],
          [begin.month]: [
            title,
            ...((accYear[begin.year] || {})[begin.month] || []),
          ],
          [end.month]: [title, ...((accYear[end.year] || {})[end.month] || [])],
        },
      }),
      {}
    ),
  }),
  {}
)
const years = Object.keys(timelineObj).sort((a, b) => b - a)
const titlesForYears = {}

for (const year of years) {
  const months = []
  titlesForYears[year] = []
  for (const month of Object.keys(timelineObj[year])) {
    const titles = Array.from(new Set(timelineObj[year][month]))

    months.push({
      titles,
      month,
      monthName: monthNames[parseInt(month) - 1],
    })
    titlesForYears[year] = [...titlesForYears[year], ...titles]
  }
  titlesForYears[year] = Array.from(new Set(titlesForYears[year]))
  months.sort((a, b) => b.month - a.month)
  timelineObj[year] = months
}

class Timeline extends React.PureComponent {
  render() {
    const { activeTitle, className } = this.props

    return (
      <ul className={className}>
        {years.map(year => (
          <li key={year} className={styles.year}>
            <h2
              className={`${styles.yearTitle} ${
                titlesForYears[year].includes(activeTitle) ? styles.active : ''
              }`}
            >
              {year}
            </h2>
            <ul>
              {timelineObj[year].map(({ month, monthName, titles }) => (
                <li
                  key={month}
                  className={titles.includes(activeTitle) ? styles.active : ''}
                >
                  {monthName}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Timeline
