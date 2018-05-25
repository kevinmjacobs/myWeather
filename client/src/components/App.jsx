//import libraries and components
import React from 'react';

import Forecast from './Forecast.jsx';
import Search from './Search.jsx';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ['Los Angeles', 'San Francisco', 'San Diego'],
      user: 'Kevin',
      search: 'cities'
    };
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