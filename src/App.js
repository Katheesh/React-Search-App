import React, { Component } from "react";

class App extends Component {
  state = {
    searchValue: "",
    meals: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals });
      });
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
            >Search</button>
        </div>
          <hr/>
        {this.state.meals ? (
          <div class="flex flex-wrap mt-2 mx-2">
            {this.state.meals.map((meal, index) => (
              <div class="w-full md:w-1/2 lg:w-1/3 px-2 my-2"  key={index}>
                  <div class="shadow-md bg-white">
                      <img class="h-48 w-full object-cover" src={meal.strMealThumb} alt="image"/>
                      <div class="flex flex-col p-4">
                          <p class="text-lg">{meal.strMeal}</p>
                          <p class="text-gray-600">Your description here...</p>
                          <button class="self-end mt-4">Show more...</button>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching more..</p>
        )}
      </div>
    );
  }
}

export default App;
