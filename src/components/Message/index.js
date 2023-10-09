// Write your code here
import './index.css'

const Message = props => {
  const {isloggedIn} = props
  const message = isloggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="m">{message}</h1>
}

export default Message
