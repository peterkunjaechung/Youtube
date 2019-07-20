import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Button } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu 
          style={{padding: '20px'}}
          position='right'>
          <Link to="/">
            <Menu.Item
              name='home'
              id='home'
              onClick={this.props.location.pathname === '/'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
          <Link to='/videos'>
          <Menu.Item
            style={{backgroundColor: "rgba(223, 32, 56, 1)", 
                    color: 'white',
                    borderRadius: '15px'
                    }}
            name='Upload Video'
            color = "white"
            backgroundColor = "red"
            active= {location.pathname === '/videos'}

          />
          </Link>
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
               src="https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1563757200&Signature=JZOLUzbbpRRf75jc9AVKNkdgULSUJTUXonJwc11yPZ2NOCYPKfCGxMJP5iBOTiNMr-z2aTOroxhU8Q44cxiG65nXwui7CDUvjika~Jq-m~FDsdLzlRVIU9f7n4Cbu9-sxXiZykhFvoFJdBA0TPvtHMQyoik9Zr2UjkmkPFDF2FU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"   
               />

          </Menu.Item 
          >
          
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
