// Components
import NavigationLinks from './NavigationLinks'

// Assets
import Hamburger from "../../assets/Hamburger.png"

const MobileNav = ({showMobileMenu, toggleMenu}) => {
  return (
    <>
      <div id="mobile-overlay" className={showMobileMenu ? "open" : ""}>
        <menu onClick={toggleMenu} className={showMobileMenu ? "open" : ""}>
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