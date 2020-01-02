import React from 'react'

export default class GifSearch extends React.Component {
  
  onSubmitHandler = (event) => {
    console.log(event)
  }
  
  render() {
    return(
      <form onSubmit={this.onSubmitHandler}>
        <input type="text">
        <input type="submit" value="Search">
      </form>
    )
  }
  
}