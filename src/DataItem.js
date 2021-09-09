import React from 'react';

const log = x => {
  console.log(x);
  return x;
};

const DataItem = ({ entry }) => <li>{log(entry)}</li>;

export default DataItem;
