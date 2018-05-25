import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: props.search
    }
  }

  render() {
    return (
      <div>
        Search: {this.state.search}
      </div>
    )
  }
}

export default Search;