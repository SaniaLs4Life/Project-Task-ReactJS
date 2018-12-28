import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Auth from '../Auth'

const auth = new Auth()

class Navbar extends React.Component {
    login() {
        auth.login();
    }

    logout() {
        auth.logout();
        localStorage.clear('isLoggedIn')
        localStorage.removeItem('isLoggedIn')
        window.location = '/'
    }
    componentDidMount() {
        const { renewSession } = auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }
    render() {
        const token = localStorage.getItem('isLoggedIn')
        return (

            <div>
                {
                    !token &&
                    (
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            style={{ textAlign: 'center' }}
                        >
                            <Menu.Item key="signin">
                                <Link to='/'>
                                    <Icon type="dashboard" />Login
                                </Link>
                            </Menu.Item>
                        </Menu>
                    )
                }
                {
                    token && (
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            style={{ textAlign: 'center' }}
                        >
                            <Menu.Item key="dashboard">
                                <Link to='/dashboard'>
                                    <Icon type="dashboard" />Project Task Dashboard
                                                </Link>
                            </Menu.Item>
                            <Menu.Item key="logout" onClick={() => this.login()}>
                                <Link to='/'>
                                    <Icon type="dashboard" />Logout
                                                        </Link>
                            </Menu.Item>

                        </Menu>
                    )
                }
            </div>

        )

    }
}
export default Navbar
