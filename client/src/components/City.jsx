import React from 'react';
import axios from 'axios';

import Forecast from './Forecast.jsx'

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      forecasts: []
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    let location = this.state.location;
    axios.get('/forecasts', {
      params: {
        location: location
      }
    })
      .then((response) => {
        console.log('received response from fetch weather');
        let results = response.data;
        this.setState({
          forecasts: results
        })
      })
      .then(() => console.log('forecasts after set state', this.state.forecasts))
      .catch((err) => console.log('error fetching weather data', err));
  }

  render() {
    return (
      <div>
        <td>
          {this.state.location}
        </td>
        {this.state.forecasts.map((forecast) => (
          <td><Forecast forecast={forecast} /></td>
        ))}
      </div>
    )
  }
}