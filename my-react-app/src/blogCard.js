
import {Clogs} from './utils'

const blogCard = (properties) => {

    Clogs('hello')
    return (
        <div className='divStyle'>

            <h1> {properties.title}</h1>

            <p>{properties.description}</p>

        </div>
    )
}

export default blogCard;


