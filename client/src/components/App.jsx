//import libraries and components
import React from 'react';
import axios from 'axios';

import Forecast from './Forecast.jsx';
import Search from './Search.jsx';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      user: 'kevinmjacobs',
      search: 'cities'
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    let user = this.state.user;
    axios.get('/weather', {
      params: {
        user: user
      }
    })
      .then((response) => {
        console.log('received response from fetch weather');
        let results = response.data;
        console.log(results);
        this.setState({
          locations: [...this.state.locations, ...results]
        })
      })
      .catch((err) => console.log('error fetching weather data', err));
  }

  render() {
    return (
      <div>
        <User user={this.state.user}/>
        <Search search={this.state.search}/>
        <Forecast locations={this.state.locations} />
      </div>
    )
  }

}

export default App;