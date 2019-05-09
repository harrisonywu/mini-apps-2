import React, { Component } from 'react';
import Search from './Search.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      searchTerm: undefined,
      searchResult: undefined,
    }
  }

  currentSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  searchJSON(e) {
    e.preventDefault();
    axios.get(`/events?q=${this.state.searchTerm}`)
      .then((search) => {
        let searchResult = search.data;
        this.setState({
          searchResult
        });
      })
  }

  render() {
    return (
      <div>
        <Search
          currentSearchTerm={this.currentSearchTerm.bind(this)}
          searchJSON={this.searchJSON.bind(this)}
        />
      </div>
    )
  }
}

export default App;