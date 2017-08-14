import {h} from 'preact';

const Zone = ({activeZone, zone, onChange}) => {
  let style = null;
  if (zone.id === activeZone.id) {
    style = {background: '#8f8'};
  }
  return (<li
    style={style}
    onClick={event => onChange(event, zone)}>
      {zone.name}
  </li>);
};

export default Zone;
