//import libraries and components
import React from 'react';

// import Forecast from './Forecast';
// import Search from './Search';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      locations: []
    }
  }

  render() {
    return (
      <div>
        Here is your app
        {/* <User user={this.state.user}/> */}
        {/* <Search searchItem={this.state.search}/>
        <Forecast forecasts={this.state.location}/> */}
      </div>
    )
  }

}
export default App;
