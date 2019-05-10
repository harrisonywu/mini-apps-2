import React from 'react';

function Search(props) {
  const { changeDateState } = props;

  return (
    <div>
      <input
        type='date'
        name='start-date'
        onChange={changeDateState}
      ></input>
      <input
        type='date'
        name='end-date'
        onChange={changeDateState}
      ></input>
    </div>
  )
}

export default Search;