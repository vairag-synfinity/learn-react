
// import logo from './logo.svg';
import './App.css';






function App() {
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


  const blogCard = blogArr.map((item) => {
    console.log(item)

    return (
      <div className='divStyle'>

        <h1> {item.title}</h1>

        <p>{item.description} </p>

      </div>
    )

  })


  return (
    <div className="App">
      <h1>Learn React</h1>
      {blogCard}











    </div>


  )
}

export default App;




