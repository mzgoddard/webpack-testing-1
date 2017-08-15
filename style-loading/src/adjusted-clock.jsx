import {h} from 'preact';
import Clock from 'clock';

import style from './adjusted-clock.css';

const AdjustedClock = ({date, timezone}) => {
  const adjusted = new Date(date.getTime() + timezone.offset);
  return <Clock class={style} date={adjusted} />;
};

export default AdjustedClock;
