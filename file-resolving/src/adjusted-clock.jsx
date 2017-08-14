import {h} from 'preact';
import Clock from 'clock';

const AdjustedClock = ({date, timezone}) => {
  const adjusted = new Date(date.getTime() + timezone.offset);
  return <Clock date={adjusted} />;
};

export default AdjustedClock;
