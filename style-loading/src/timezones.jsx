import {h} from 'preact';

import Zone from './zone';

import style from './timezones.css';

const Timezones = ({activeZone, timezones, onChange}) => {
  return (<div class={style.timezones}>
    <ul class={style.list}>
      {timezones.map(zone => (
        <Zone activeZone={activeZone} zone={zone} onChange={onChange} />
      ))}
    </ul>
  </div>);
};

export default Timezones;
