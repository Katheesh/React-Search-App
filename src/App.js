import React, { Component } from "react";
import axios from "axios";
import ImageList from './components/imageList';

class App extends Component {
  state = {
    searchValue: "",
    images: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = async (searchInput) => {

    await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchInput},
      headers: {
          Authorization: 'Client-ID b79d009ec0a36fceefd796ecf2c8f7981dba4259264bcf5db2cadc07100b697d'
      }
    })
    .then(response => {
      this.setState({ images: response.data.results })
    })
    .catch(err => {
        if (err.response) {
          console.log('client received an error response (5xx, 4xx)');
        } else if (err.request) {
          console.log('client never received a response, or request never left');
        } else {
          console.log('anything else');
        }
    })
    //console.log(response);

    /*var searchUrl = `https://api.unsplash.com/search/photos?query=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        
      });*/
  };

  render() {
    return (
      <div id="main">
        <div class="m-4 flex">
          <input 
            class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" 
            type="search" 
            name="search" 
            placeholder="Search"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
          />
          <button 
            class="px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 uppercase border-green-500 border-t border-b border-r"
            onClick={this.handleSearch}
            type="button"
            >Go</button>
        </div>
        <hr/>
        <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}

export default App;
