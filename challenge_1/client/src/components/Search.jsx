import React from 'react';

function Search(props) {
  const { currentSearchTerm, searchJSON } = props;
  return (
    <form >
      <input type="search" placeholder="Enter search term" onChange={currentSearchTerm}></input>
      <input type="button" value="Search!" onClick={searchJSON} ></input>
    </form>
  )
}

export default Search;

