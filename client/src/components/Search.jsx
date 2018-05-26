import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.setSearch = props.setSearch;
  }

  searchCity(city) {
    this.setSearch(city);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div>
        Add a city {this.state.search}
        <input type='text' onKeyUp={(e) => this.onChange(e)} />
        <button onClick={(e) => this.searchCity(this.state.term)}>Enter</button>
      </div>
    )
  }
}

export default Search;