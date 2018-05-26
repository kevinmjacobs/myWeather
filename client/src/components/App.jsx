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
      user: 'kjacobs',
      search: 'cities'
    };

    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.fetchCities();
  }

  setUser(user) {
    console.log(user);
    this.setState({
      user: user
    }, () => {
      this.fetchCities();
    })
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
        console.log('results from response');
        this.setState({
          locations: results
        })
      })
      .then(() => console.log('locations after set state'))
      .catch((err) => console.log('error fetching city data', err));
  }

  render() {
    return (
      <div>
        <User setUser={this.setUser}/>
        <Search search={this.state.search}/>
        <table>
          <tr>
            <th>Cities</th>
          </tr>
          <tr>
            {this.state.locations.map((location, index) => (
              <City location={location} index={index} key={index} />
            ))}
          </tr>
        </table>
      </div>
    )
  }

}

export default App;