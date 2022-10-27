import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./date/xox-date";

@customElement("xox-datepicker")
export class XoxDatepicker extends LitElement {
  @property({ type: String, attribute: true })
  locale: string = "en";

  @property({ type: Number, attribute: true })
  timestamp: number = 0;

  @property({ type: String, attribute: true })
  value: string = "";

  // HANDLERS
  _update = (e: CustomEvent) => {
    const d = e.detail;
    if (d) {
      console.log(d);
    }
  };

  render() {
    return html`
      <h1>hello</h1>
      <xox-date
        locale=${this.locale}
        timestamp=${this.timestamp}
        value=${this.value}
        @change=${this._update}
      ></xox-date>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "xox-datepicker": XoxDatepicker;
  }
}
