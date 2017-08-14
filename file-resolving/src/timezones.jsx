import {h} from 'preact';

import Zone from './zone';

const Timezones = ({activeZone, timezones, onChange}) => {
  return (<div>
    <ul>
      {timezones.map(zone => (
        <Zone activeZone={activeZone} zone={zone} onChange={onChange} />
      ))}
    </ul>
  </div>);
};

export default Timezones;
