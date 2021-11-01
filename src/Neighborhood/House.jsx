import { ReactComponent as HouseIcon } from './house-icon.svg'

const House = (props) => {



    return (
        <div>
            {props.house.address}
            <HouseIcon fill="red" height={100}/>
        </div>
    )
}

export default House
