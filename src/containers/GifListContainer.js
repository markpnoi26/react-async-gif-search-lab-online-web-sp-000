import React from 'react'
import GifList from './src/components/GifList'
import GifSearch from './src/components/GifSearch'

export default class GifListContainer extends React.Component {
  
  constructor() {
    this.state = {
      gifList: []
    }
  }
  
  gifFetchCallBack = query => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(gifList => {
        this.setState({
          gifList = gifList
        })
      })
      .catch(error => console.log(error))
  }
  
  gifListGenerator = () => {
    this.state.gifList.map(gif => {
      return <GifList key={gif.id} gifItem={gif} />
    })
  }  
  
  render() {
    return(
      <div>
        <GifSearch gifSearch={this.gifFetchCallBack}/>
        {this.gifListGenerator()}
      </div>
    )
  }
  
  
}