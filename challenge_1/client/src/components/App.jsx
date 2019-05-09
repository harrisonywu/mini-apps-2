import React, { Component } from 'react';
import Search from './Search.jsx';

// I want to add a searc

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      searchTerm: undefined,
    }
  }

  currentSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }


  render() {
    return (
      <div>
        Main App now rendering! asdfda
        <Search currentSearchTerm={this.currentSearchTerm.bind(this)}/>
      </div>
    )
  }
}

export default App;