
// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import BlogCard from './blogCard';

import { isArrayEmpty } from './utils'






class App extends Component {

  state = {
    showBlog: true,
  
  // const blogArr = null
  blogArr : [
    {
      title: "Heading 1",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements.",
      likecount: 10
    },
    {
      title: "Heading 2",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements.",
      likecount: 0  
    },

    {
      title: "Heading 3",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements.",
      likecount: 0
    }

  ]
  }

onLikeBtnClick = (pos) => {
  const updateBlogList= this.state.blogArr
  const updateBlogobj = updateBlogList[pos]

  updateBlogobj.likecount = updateBlogobj.likecount + 1
  updateBlogList[pos] = updateBlogobj 

  console.log(updateBlogobj)
  this.setState({ blogArr: updateBlogList })
}



 

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
     const blogCard = isArrayEmpty(this.state.blogArr) ? ['hello'] : this.state. blogArr.map((item, pos) => {
    return (
      <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likecount} onClickBtn={() =>this.onLikeBtnClick(pos)} />
      
    )

  })
    return (
      <div className="App">
        <h1>Learn React</h1>
        <button onClick={this.onHideBtnClick}>{this.state.showBlog ? 'Hide List' : 'Show List'}</button>
        {/* <button onClick={this.onHideBtnClick}>{this.buttonLabel()}</button> */}
        <br></br>
        {
          this.state.showBlog ? blogCard : null
        }



      </div>


    );
  }
}

export default App;





