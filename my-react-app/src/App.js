
// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import BlogCard from './blogCard';

import { isArrayEmpty } from './utils'






class App extends Component {

  state = {
    showBlog: true
  }
  // const blogArr = null
  blogArr = [
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



  blogCard = isArrayEmpty(this.blogArr) ? ['hello'] : this.blogArr.map((item, pos) => {



    return (
      <BlogCard key={pos} title={item.title} description={item.description} />
      // <div className='divStyle'>

      //   <h1> {item.title}</h1>

      //   <p>{item.description} </p>

      // </div>
    )

  })

  onHideBtnClick = () => {
  //  let updatedShowBlog = !this.state.showBlog
  //  console.log(updatedShowBlog)
  //  this.setState({ showBlog: updatedShowBlog })

  this.setState((prevState) => {
    return { showBlog: !prevState.showBlog }
  })
  }



  
//  buttonLabel = () => {
//   return <>{this.state.showBlog ? 'Hide List' : 'Show List'}</>
//  }
  

  render() {
    return (
      <div className="App">
        <h1>Learn React</h1>
        <button onClick={this.onHideBtnClick}>{this.state.showBlog ? 'Hide List' : 'Show List'}</button>
        {/* <button onClick={this.onHideBtnClick}>{this.buttonLabel()}</button> */}
        <br></br>
        {
          this.state.showBlog ? this.blogCard : null
        }



      </div>


    );
  }
}

export default App;





