import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      authorization: token
    };
    axios.get(endpoint, reqOptions).then(res => {
      this.setState({ users: res.data.users });
    });
  }
}

export default Users;
