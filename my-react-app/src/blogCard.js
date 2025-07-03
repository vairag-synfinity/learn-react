
import {Clogs} from './utils'

import  { Component } from 'react'
import cssclass from './blogCard.module.css'


class blogCard extends Component {

    state ={
        likeCount:0
    }

    onLikeBtnClick = () => {
        this.setState((prevState) => {
            return { likeCount: prevState.likeCount + 1 }
        })
        Clogs('Like button clicked')
    }
    // Clogs('hello')
  render() {
    return (
      <div className={cssclass.divStyle}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>Like Count: {this.state.likeCount}</p>
        <button className={cssclass.btnStyle} onClick={this.onLikeBtnClick}>Like</button>
      </div>
    );
  }
}

export default blogCard;


