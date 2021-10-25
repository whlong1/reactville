import { ReactComponent as HouseIcon } from './house-2374925.svg'

const House = (props) => {



    return (
        <div>
            {props.house.address}
            <HouseIcon fill="red"/>
        </div>
    )
}

export default House
