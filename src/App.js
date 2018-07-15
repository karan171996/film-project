import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Content from './components/mainContainer/contentContainer';

class App extends Component {
  constructor(){
    super();
  this.state ={
    movie:[],
    isFetching:false,
    movieName:''
  }
  this.onInputChange = this.onInputChange.bind(this);
}
  onInputChange=e=> {
    this.setState({movieName:e.target.value,isFetching:true})
    fetch(`http://www.omdbapi.com/?t=${e.target.value}&apikey=aabca0d`)
    .then(response => response.json())
    .then((json) => this.setState({movie:json,isFetching:false}))
  }
  render() {
      var {movie,isFetching,movieName} = this.state;
     
    return (
      <div>
      <div className="App-header clearfix">
        <div className="logo box">MovieMania</div>
        <div className="search-bar box">
        <input type="text"  placeholder ="Search for Movies"  onChange ={this.onInputChange} value={movieName} />
        </div>
      </div>
      <Content details ={movie} isFetching={isFetching} name={movieName}/> 
      </div>
    );
  }
}

export default App;
