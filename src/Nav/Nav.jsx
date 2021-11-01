import Wallet from "./Wallet"
import Clock from './Clock'

const Nav = (props) => {


  return (
    <div>
      <Clock />
      <Wallet cash={props.cash} />
    </div>
  )
}

export default Nav
