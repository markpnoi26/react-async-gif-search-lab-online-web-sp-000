import React from 'react'

export default class GifList extends React.Component {
  
  
  
  render() {
    return(
      <ul>
        <li>{this.props.gifList.slug}</li>
        <li>{this.props.gifList.url}</li>
        <li>{this.props.gifList.images.original.url}</li>
        <li>{this.props.gifList.images.fixed_height_still.url}</li>
      </ul>
    )
  }
  
}