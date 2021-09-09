import React, { useState } from 'react';

import './style.css';

import DataList from './DataList.js';

export default function App() {
  console.log('App rendered.');

  const allFruits = [
    'Apple',
    'Banana',
    'Pineapple',
    'Strawberry',
    'Pear',
    'Raspberry'
  ];

  const [fruits, setFruits] = useState(allFruits.slice(0, 2));

  const handleChangeFruits = () => {
    setFruits(allFruits.filter(() => Math.random() > 0.5));
  };

  const [nothing, setNothing] = useState(0);

  const handleNothing = () => setNothing(Math.random());

  return (
    <div>
      <h1>Mix my fruit salad</h1>
      <DataList data={fruits} />
      <button onClick={handleChangeFruits}>Change fruits</button>
      <button onClick={handleNothing}>Do nothing</button>
    </div>
  );
}
