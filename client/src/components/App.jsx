import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  render() {
    return (
      <div>App has been rendered to the page</div>
    )
  }

}

export default App;
