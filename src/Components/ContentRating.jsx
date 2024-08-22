
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      totalratings: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },

      handledislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      },
    };
  }
  render() {
    return (
     <>
      <div className='content-rating'>
        <p> MOVIE: KAALA</p>
        <div className='ratingButtons'>
        <button className='likebutton'>Like({this.state.likes})</button>
        <button className='likebutton'>Dislike({this.state.dislikes})</button>
        <p>Total Ratings: {this.state.totalratings}</p>
        </div>
      </div>
     </>
    );
  }
}

export default ContentRating;
