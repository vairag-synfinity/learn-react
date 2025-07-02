
// import logo from './logo.svg';
import './App.css';

import BlogCard from './blogCard';  

import {isArrayEmpty} from './utils'






function App() {
  // const blogArr = null
  const blogArr = [
    {
      title: "Heading 1",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    },
    {
      title: "Heading 2",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    },

    {
      title: "Heading 3",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    }

  ]
 


  const blogCard = isArrayEmpty(blogArr) ?['hello'] : blogArr.map((item,pos) => {
    // console.log(item)

    return (
      <BlogCard key={pos} title={item.title} description={item.description} />
      // <div className='divStyle'>

      //   <h1> {item.title}</h1>

      //   <p>{item.description} </p>

      // </div>
    )

  })



  // const blogCard1 =  <BlogCard/>



  return (
    <div className="App">
      <h1>Learn React</h1>
      {blogCard}
      {/* {blogCard1} */}











    </div>


  )
}

export default App;





