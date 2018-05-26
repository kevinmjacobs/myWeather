import React from 'react';

import Forecast from './Forecast.jsx'

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      forecasts: ['Monday', 'Tuesday']
    };
  }

  weather() {
    let location = this.state.location;
    axios.get('/forecast', {
      params: {
        location: location
      }
    })
      .then((response) => {
        console.log('received response from fetch weather');
        let results = response.data;
        console.log('results from response',results);
        this.setState({
          forecasts: results
        })
      })
      .then(() => console.log('forecasts after set state,',this.state.forecasts))
      .catch((err) => console.log('error fetching weather data', err));
  }

  render() {
    return (
      <div>
        <td>
          {this.state.location}
        </td>
        {this.state.forecasts.map((forecast, index) => (
          <td><Forecast forecast={forecast} index={index} key={index} /></td>
        ))}
      </div>
    )
  }
}