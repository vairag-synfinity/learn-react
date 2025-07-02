

const blogCard = (properties) => {

    // console.log(properties)
    return (
        <div className='divStyle'>

            <h1> {properties.title}</h1>

            <p>{properties.description}</p>

        </div>
    )
}

export default blogCard;


