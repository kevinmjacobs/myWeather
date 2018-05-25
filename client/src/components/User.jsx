import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  render() {
    return(
      <div>User: {this.state.user}</div>
    )
  }
}

export default User;