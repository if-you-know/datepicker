import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

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

@customElement('xox-date')
export class xoxDate extends LitElement {
  // PROPERTIES
  @property({ type: String, attribute: true })
  locale: string = 'en'

  @property({ type: Boolean, reflect: true })
  sth: boolean | undefined

  @property({ type: Number, reflect: true })
  timestamp: number = 0

  @property({ type: Boolean, reflect: true })
  value: boolean | undefined

  // EVENTS
  dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: { timestamp: this.timestamp, value: this.value },
      })
    )
  }

  // HANDLERS
  _handleClick = () => {
    this.timestamp += 1
    this.dispatchChange()
  }

  // RENDER
  render() {
    d.utc().tz(Intl.DateTimeFormat().resolvedOptions().timeZone, true)
    // d.utc().tz('America/Metlakatla', true);
    d.locale(this.locale)
    const _d = d()
    const year = _d.format('YYYY')
    const month = _d.format('MM')

    console.log({ _d, d })

    console.log(typeof month)
    // console.log(_d.utc().format("d"));

    const months = d.months()

    // const _d = d("2022/01/02", "YYYY/MM/DD")
    //   .locale(this.locale);

    // const globalLocaleData = _d.localeData();

    // _d.tz(Intl.DateTimeFormat().resolvedOptions().timeZone, true);

    // console.log(_d.utc().daysInMonth())

    // const days: { value: number; month: number; year: number }[] = [];
    // const createRows = () => {
    //   if (!this.indexOfDayInWeek) return;

    //   for (let i = 0; i < this.indexOfDayInWeek; i++) {
    //     days.push({ value: i, year: , month: 3 });
    //   }
    //   // for (let i = 0; i <= 6; i++) {
    //   //   days.push(i);
    //   // }
    // };

    // createRows();

    // return html`
    //   <p>${this.year}</p>
    //   <select>
    //     ${this.months?.map((month) => {
    //       return html`<option>${month}</option>`;
    //     })}
    //   </select>
    //   ${days.map((day) => {
    //     return html`<p>${day.value}</p>`;
    //   })}
    // `;

    // return html` <button @click=${this._handleClick}>click</button> `;

    return html`
      <div>
        <p>${year}</p>
        <select>
          ${months?.map((m) => html`<option>${m}</option>`)}
        </select>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'xox-date': xoxDate
  }
}
