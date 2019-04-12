import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'sam',
            password: 'pass'
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:5000/api/login';
        console.log(this.state)
        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p> Username </p>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    <p> Password </p>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />

                    <div>
                        <button type="submit"> Login </button>
                    </div>
                </form>
            </div>
        )
    }

}


export default Login