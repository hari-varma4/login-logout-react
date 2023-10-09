// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickbutton = () => {
    this.setState(prevstate => ({isLoggedIn: !prevstate.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="apcon">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout logout={this.onClickbutton} />
        ) : (
          <Login login={this.onClickbutton} />
        )}
      </div>
    )
  }
}

export default Home
