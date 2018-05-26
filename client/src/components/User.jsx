import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
    this.setUser = props.setUser;
  }

  selectUser(user) {
    this.setUser(user);
  }


  onChange(e) {
    this.setState({
      user: e.target.value
    })
  }

  render() {
    return(
      <div>
          Enter a username
          <input type='text' onKeyUp={(e) => this.onChange(e)} />
          <button onClick={(e) => this.selectUser(this.state.user)}>Enter</button>
      </div>
    )
  }
}

export default User;