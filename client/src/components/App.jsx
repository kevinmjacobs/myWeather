//import libraries and components
import React from 'react';
import axios from 'axios';

import City from './City.jsx';
import Search from './Search.jsx';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      user: '',
      search: ''
    };

    this.setSearch = this.setSearch.bind(this);
    this.setUser = this.setUser.bind(this);
    this.callCallback = this.callCallback.bind(this);
    // this.fetchWeather = this.fetchWeather.bind(this);
  }


  componentDidMount() {
    this.fetchCities();
  }
  
  setSearch(term) {
    this.setState({
      search: term,
      locations: [...this.state.locations, term]
    }
      , () => this.addCity()
    );
  }

  addUser() {
    let user = this.state.user
    axios.post('/users', {
      params: {
        user: user
      }
    })
      .then((response) => {
        console.log('received response from fetch weather');
        // this.setState({
        //   forecasts: results
        // })
        this.fetchCities();
      })
      .catch((err) => console.log('error fetching weather data', err));
  }

  setUser(user) {
    console.log(user);
    this.setState({
      user: user
    }, () => {
      this.addUser();
    })
  }

  callCallback(cb) {
    cb();
  }

  addCity() {
    let location = this.state.search;
    axios.post('/weather', {
      params: {
        location: location
      }
    })
    .then((response) => {
      console.log('received response from add city');
    })
    .then(() => this.fetchCities())
    .catch((err) => console.log('error fetching city data', err));
  }

  fetchCities() {
    let user = this.state.user;
    axios.get('/weather', {
      params: {
        user: user
      }
    })
      .then((response) => {
        console.log('received response from fetch cities');
        let results = response.data;
        this.setState({
          locations: results
        })
      })
      .catch((err) => console.log('error fetching city data', err));
  }

  render() {
    return (
      <div>
        <div><User setUser={this.setUser}/> <Search setSearch={this.setSearch}/></div>
        <table id="weatherTable">
          <tr>
            {this.state.locations.map((location, index) => (
              <City callCallback={this.callCallback} location={location} index={index} key={index} />
            ))}
          </tr>
        </table>
      </div>
    )
  }

}

export default App;