import React from 'react';

function Results(props) {
  const { searchResults } = props;

  return (
    <div>
      {searchResults.map(result => {
        return <div>{result.description}</div>;
      })}
    </div>
  )
}

export default Results;
