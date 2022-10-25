import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import d from "dayjs";
import dj from "./j";

import localeDate from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "dayjs/locale/en-au";

@customElement("xox-date")
export class xoxDate extends LitElement {
  // PROPERTIES
  @property({ type: String, attribute: true })
  locale: string = 'en';

  @property({ type: Boolean, reflect: true })
  sth: boolean | undefined;

  @property({ type: Number, reflect: true })
  timestamp: number = 0;

  @property({ type: Boolean, reflect: true })
  value: boolean | undefined;


  // EVENTS
  dispatchChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        detail: { timestamp: this.timestamp, value: this.value },
      })
    );
  }

  // HANDLERS
  _handleClick = () => {
    this.timestamp += 1;
    this.dispatchChange();
  };

  // RENDER
  render() {
    d.extend(localeDate);
    d.extend(dj);
    d.extend(weekday);
    d.extend(isoWeek);
    d.extend(utc);
    d.extend(timezone);
    
    

    // console.log(this.locale);

    // const _d = d("2022/01/02", "YYYY/MM/DD")
    //   .locale(this.locale);

    // const globalLocaleData = _d.localeData();

    // _d.tz(Intl.DateTimeFormat().resolvedOptions().timeZone, true);

    // console.log(_d.utc().format('d'));

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

    return html` <button @click=${this._handleClick}>click</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "xox-date": xoxDate;
  }
}
