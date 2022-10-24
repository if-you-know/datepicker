import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("xox-date")
export class xoxDate extends LitElement {
  @property({ type: String, attribute: true })
  months: string | undefined;

  @property({ type: String, attribute: true })
  year: string | undefined;

  @property({ type: Number, attribute: true })
  numberOfDaysInMonth: number = 30;

  render() {
    const days: number[] = [];
    const createRows = () => {
      for (let i = 0; i <= 6; i++) {
        days.push(i);
      }
    };

    createRows();

    return html`
      <p>${this.year}</p>
      <select>
        ${this.months?.split("_").map((month) => {
          return html`<option>${month}</option>`;
        })}
      </select>
      ${days.map((day) => {
        return html`<p>${day}</p>`;
      })}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "xox-date": xoxDate;
  }
}
