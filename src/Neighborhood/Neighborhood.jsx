import House from './House'
import { addresses } from './AddressData'

const Neigborhood = () => {



    return (
        <div>
            {addresses.map((house, index) => (
                <House house={house} key={index} />
            ))}
        </div>
    )
}

export default Neigborhood
