import {h, render} from 'preact';

import App from './src/app';

const timezones = [
  {
    id: 'edt',
    name: 'Eastern Daylight Time',
    offset: -4 * 60 * 60 * 1000,
  },
  {
    id: 'gmt',
    name: 'Greenwich Mean Time',
    offset: 0,
  },
  {
    id: 'jst',
    name: 'Japan Standard Time',
    offset: +9 * 60 * 60 * 1000,
  },
];

render(
  <App timezones={timezones} defaultTimezone={timezones[0]} />,
  document.getElementById('root')
);
