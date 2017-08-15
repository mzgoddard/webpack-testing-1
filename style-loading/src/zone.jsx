import {h} from 'preact';
import classnames from 'classnames';

import style from './zone.css';

const Zone = ({activeZone, zone, onChange}) => {
  let active = '';
  if (zone.id === activeZone.id) {
    active = style.active;
  }
  return (<li
    class={classnames(style.zone, active)}
    onClick={event => onChange(event, zone)}>
    {zone.name}
  </li>);
};

export default Zone;
