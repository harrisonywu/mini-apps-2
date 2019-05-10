import React from 'react';

function Search(props) {
  const { changeDateState } = props;
  // const something = props.something;

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