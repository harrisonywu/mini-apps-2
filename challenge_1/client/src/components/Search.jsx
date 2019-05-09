import React from 'react';

function Search(props) {
  const { currentSearchTerm } = props;
  return (
    <form>
      <input onChange={currentSearchTerm} type="search"></input>
      <input type="button"></input>
    </form>
  )
}

export default Search;
