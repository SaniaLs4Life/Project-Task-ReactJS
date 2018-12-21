import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

class  Navbar extends React.Component {
    render() {
        return (
            <Menu
                mode="horizontal"
                theme="dark"
                style={{textAlign: 'center'}}
            >
                <Menu.Item key="dashboard">
                    <Link to='/'>                    
                        <Icon type="dashboard" />Project Task Dashboard
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export default Navbar
