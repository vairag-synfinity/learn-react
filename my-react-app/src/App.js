
// import logo from './logo.svg';
import './App.css';






function App() {
  const obj = {
    title: "Heading",
    description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
  }

  const cssStyle =
  {
    margin: '13px',
    border: '1px solid black',
    padding: '16px',
    boxShadow: '0 2px 8px #000'

  }


  return (
    <div className="App">
      <h1>Learn React</h1>

      <div style={                     //adding inline style//
        {
          margin: '13px',
          border: '1px solid black',
          padding: '16px',
          boxShadow: '0 2px 8px #000'

        }
      }>

        <h1> {obj.title}</h1>

        <p>{obj.description} </p>
      </div>

      <div style={cssStyle}>           {/* variable style */}

        <h1> {obj.title}</h1>

        <p>{obj.description} </p>
      </div>

      <div className='divStyle'>        {/* external style */}

        <h1> {obj.title}</h1>

        <p>{obj.description} </p>
      </div>





    </div>


  )
}

export default App;




