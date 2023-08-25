import { NavLink } from 'react-router-dom'

const NavigationLinks = () => {
  return (
    <>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
    </>
  )
}

export default NavigationLinks