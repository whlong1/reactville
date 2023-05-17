import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'

const Landing = ({ isDay }) => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${isDay ? Day : Night})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing