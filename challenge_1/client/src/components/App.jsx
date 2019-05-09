import React, { Component } from 'react';
import Search from './Search.jsx';
import Results from './Results.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      searchTerm: undefined,
      searchResults: undefined,
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
        let searchResults = search.data;
        this.setState({
          searchResults
        });
      })
  }

  render() {
    let results;

    if (!this.state.searchResults) {
      results = <div>No Results Currently</div>
    } else {
      results = <Results searchResults={this.state.searchResults}/>
    }

    return (
      <div>
        <Search
          currentSearchTerm={this.currentSearchTerm.bind(this)}
          searchJSON={this.searchJSON.bind(this)}
        />
        {results}
      </div>
    )
  }
}

export default App;