import {h} from 'preact';
import render from 'preact-render-spy';

import AdjustedClock from './adjusted-clock';
import style from './adjusted-clock.css';

const baseDate = new Date("2015-02-12T19:30:05.000Z");
const gmt = {
  id: 'gmt',
  name: 'Greenwich Mean Time',
  offset: 0,
};
const edt = {
  id: 'edt',
  name: 'Eastern Daylight Time',
  offset: -4 * 60 * 60 * 1000,
};
const nzst = {
  id: 'nzst',
  name: 'New Zealand Standard Time',
  offset: +12 * 60 * 60 * 1000,
};

it('hour unaffected with GMT time', () => {
  const ctx = render(<AdjustedClock date={baseDate} timezone={gmt} />);
  expect(ctx.find(`.${style.clockHours}`).text()).toBe('19');
});

it('hour unaffected with EDT time', () => {
  const ctx = render(<AdjustedClock date={baseDate} timezone={edt} />);
  expect(ctx.find(`.${style.clockHours}`).text()).toBe('15');
});

it('hour unaffected with NZST time', () => {
  const ctx = render(<AdjustedClock date={baseDate} timezone={nzst} />);
  expect(ctx.find(`.${style.clockHours}`).text()).toBe('07');
});
