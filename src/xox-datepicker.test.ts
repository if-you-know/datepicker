import { beforeEach, describe, expect, it, vi, test } from 'vitest'
import { XoxDatepicker } from '../src/xox-datepicker'
import '../src/xox-datepicker'

describe('xox-datepicker defaults', async () => {
  function getDatepicker(): XoxDatepicker | null | undefined {
    return document.body.querySelector('xox-datepicker')
  }

  // ?.shadowRoot?.querySelector("button");

  beforeEach(async () => {
    document.body.innerHTML = '<xox-datepicker></xox-datepicker>'
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (getDatepicker()) {
          clearInterval(interval)
          resolve()
        }
      })
    })
  })

  test('datepicker default values', () => {
    expect(getDatepicker()?.locale).toBe('en')
    expect(getDatepicker()?.timestamp).toBe(0)
    expect(getDatepicker()?.value).toBe('')
  })

  // it('should increment the count on each click', () => {
  //   getInsideButton()?.click();
  //   expect(getInsideButton()?.textContent).toContain('1');
  // });

  // it('should show name props', () => {
  //   getInsideButton();
  //   expect(
  //     document.body.querySelector('my-button')?.shadowRoot?.innerHTML
  //   ).toContain('World');
  // });

  // it('should dispatch count event on button click', () => {
  //   const spyClick = vi.fn();

  //   document.querySelector('my-button')!.addEventListener('count', spyClick);

  //   getInsideButton()?.click();

  //   expect(spyClick).toHaveBeenCalled();
  // });
})
