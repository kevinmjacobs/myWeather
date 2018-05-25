import React from 'react';

class Search extends React.Componet {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div>
        Here is your search
      </div>
    )
  }
}

export default Search;