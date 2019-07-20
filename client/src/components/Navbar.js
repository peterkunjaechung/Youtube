import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
          <Menu.Item
            name='Upload Video'
            color = "white"
            backgroundColor = "red"
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
      
      
        <Menu pointing secondary>
          <Menu.Item>
            <Image
              size=' extra small'
              style={{padding: "5px",}}
               src="https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1563757200&Signature=JZOLUzbbpRRf75jc9AVKNkdgULSUJTUXonJwc11yPZ2NOCYPKfCGxMJP5iBOTiNMr-z2aTOroxhU8Q44cxiG65nXwui7CDUvjika~Jq-m~FDsdLzlRVIU9f7n4Cbu9-sxXiZykhFvoFJdBA0TPvtHMQyoik9Zr2UjkmkPFDF2FU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" />
          </Menu.Item>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
