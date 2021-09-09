import React from 'react';
import DataItem from './DataItem.js';

function DataList({ data }) {
  console.log('DataList rendered.');

  if (data && data.length) {
    return (
      <ul>
        {data.map(entry => (
          <DataItem key={entry} entry={entry} />
        ))}
      </ul>
    );
  }
  return <p>No data found.</p>;
}

export default DataList;
// export default React.memo(DataList);
