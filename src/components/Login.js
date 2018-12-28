import React, { Component } from 'react'

class Login extends Component {
    componentDidMount() {
        const token = localStorage.getItem('isLoggedIn')
        if(token) {
            window.location = '/dashboard'
        }
    }
    render() {
        return(
            <div>Login Page

                <br />
                <button onClick={this.props.auth.login()} >Sign in</button>
            </div>
        )
    }
}

export default Login