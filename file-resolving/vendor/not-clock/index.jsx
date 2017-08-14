import {h} from 'preact';

const pad = n => ((Number(n) <= 9) ? '0' : '') + n;

const Clock = ({date}) => {
  return (<div>
    <span class="clock-hours">{pad(date.getUTCHours())}</span> :{' '}
    <span class="clock-minutes">{pad(date.getUTCMinutes())}</span> :{' '}
    <span class="clock-seconds">{pad(date.getUTCSeconds())}</span>
  </div>);
};

export default Clock;
