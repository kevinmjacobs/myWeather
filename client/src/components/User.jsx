import React from 'react';

class User extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  render() {
    return (
      <div>
        Here is your user
      </div>
    )
  }
}

export default User;