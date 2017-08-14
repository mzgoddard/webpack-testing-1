import {h, Component} from 'preact';

import AdjustedClock from './adjusted-clock';
import Timezones from './timezones';

class App extends Component {
  constructor(...args) {
    super(...args);
    const {defaultTimezone} = this.props;
    this.state = {
      date: new Date(),
      zone: defaultTimezone,
    };
    this.step = this.step.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.step);
  }

  step() {
    requestAnimationFrame(this.step);

    if (this.state.date.getTime() / 1000 | 0 < Date.now() / 1000 | 0) {
      this.setState({
        date: new Date(),
      });
    }
  }

  onChange(event, zone) {
    this.setState({
      zone: zone,
    });
  }

  render({timezones}, {date, zone}) {
    return (<div>
      <AdjustedClock date={date} timezone={zone} />
      <Timezones timezones={timezones} activeZone={zone} onChange={this.onChange} />
    </div>);
  }
}

export default App;
