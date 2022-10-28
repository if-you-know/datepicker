import { helpers } from './days'

import { describe, expect, test } from 'vitest'

describe('Days locale', async () => {
  test('test locales', () => {
    expect(helpers({ locale: 'en', timestamp: 1603902666000 })?.year).toBe(
      '2020'
    )
    expect(helpers({ locale: 'fa', timestamp: 1603902666000 })?.year).toBe(
      '1399'
    )
    expect(helpers({ locale: 'en' }).months[0]).toBe('January')
    expect(helpers({ locale: 'fa' }).months[0]).toBe('فروردین')
  })

  // test('if no timestamp passed it datepiker should return current date', () => {
  //   expect(helpers({ locale: 'en', timestamp: 1603902666000 })?.year).toBe(
  //     '2020'
  //   );

  //   expect(helpers({ locale: 'en', timestamp: 1603902666000 })?.year).toBe(
  //     '2020'
  //   );
  // })
})
