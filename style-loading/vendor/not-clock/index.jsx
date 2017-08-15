import {h} from 'preact';

const pad = n => ((Number(n) <= 9) ? '0' : '') + n;

const Clock = ({date, class: style}) => {
  return (<div class={style.clock || 'clock'}>
    <span class={style.clockHours || 'clock-hours'}>{pad(date.getUTCHours())}</span> :{' '}
    <span class={style.clockMinutes || 'clock-minutes'}>{pad(date.getUTCMinutes())}</span> :{' '}
    <span class={style.clockSeconds || 'clock-seconds'}>{pad(date.getUTCSeconds())}</span>
  </div>);
};

export default Clock;
