// Components
import NavigationLinks from './NavigationLinks'

// Assets
import Hamburger from "../../assets/Hamburger.png"

const MobileNav = ({showMobileMenu, toggleMenu}) => {
  const sharedClassNames = showMobileMenu ? "open" : ""
  return (
    <>
      <div id="mobile-overlay" className={sharedClassNames}>
        <menu onClick={toggleMenu} className={sharedClassNames}>
          <NavigationLinks />
        </menu>
      </div>
      <img
        id="hamburger"
        src={Hamburger}
        alt="Hamburger symbol"
        onClick={toggleMenu}
      />
    </>
  )
}

export default MobileNav