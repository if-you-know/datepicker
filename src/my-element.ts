import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./date/xox-date";

import d from "dayjs";
import dj from "./j.js";
import localeDate from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "dayjs/locale/en-au";

@customElement("my-element")
export class MyElement extends LitElement {
  @property({ type: String, attribute: true })
  locale: string = "en";

  render() {
    d.extend(localeDate);
    d.extend(dj);
    d.extend(weekday);
    d.extend(isoWeek);
    d.extend(utc);
    d.extend(timezone);

    const _d = d("2022/01/02", "YYYY/MM/DD")
      .locale("en")
      .tz("Asia/Tehran", true);
    // const _d = d("2022/01/02", "YYYY/MM/DD")
    //   .locale("en")
    //   .tz("America/New_York", true);

    const globalLocaleData = _d.localeData();

    // console.log(_d.daysInMonth());

    // console.log(_d.isoWeek());
    console.log(_d.utc().format('d'));

    return html`
      <h1>hello</h1>

      <xox-date
        months=${globalLocaleData.months().join("_")}
        year=${_d.format("YYYY")}
        numberOfDaysInMonth=${_d.daysInMonth()}
      ></xox-date>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
