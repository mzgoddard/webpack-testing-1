import {h} from 'preact';
import render from 'preact-render-spy';

import AdjustedClock from './adjusted-clock';

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
  expect(ctx.find('.clock-hours').text()).toBe('19');
});

it('hour affected with EDT time', () => {
  const ctx = render(<AdjustedClock date={baseDate} timezone={edt} />);
  expect(ctx.find('.clock-hours').text()).toBe('15');
});

it('hour affected with NZST time', () => {
  const ctx = render(<AdjustedClock date={baseDate} timezone={nzst} />);
  expect(ctx.find('.clock-hours').text()).toBe('07');
});
