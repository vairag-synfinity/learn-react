
import {Clogs} from './utils'


import cssclass from './blogCard.module.css'


const blogCard = (properties) => {

    Clogs('hello')
    return (
        <div className={cssclass.divStyle}>

            <h1> {properties.title}</h1>

            <p>{properties.description}</p>

            <p>Like Count: {properties.likeCount}</p>
            <button onClick={properties.onClickBtn}>Like</button>

        </div>
    )
}

export default blogCard;


