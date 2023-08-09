import React, { useState } from 'react';

function Filter() {
  let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56];
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);
  const names = ['James', 'John', 'Paul', 'Canada', 'Ringo', 'George'];

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length < 6);

console.log(result);

  const radioChangeHandler = (e) => {
    const value = e.target.value;
    if (value === 'even') {
      setFilteredNumbers(numbers.filter(number => number % 2 === 0));
    } else {
      setFilteredNumbers(numbers.filter(number => number % 2 !== 0));
    }
  };

  return (
    <>
      <h2>Number filtering</h2>
      <input
        type="radio"
        name="evenOrOdd"
        id="even"
        value="even"
        onChange={radioChangeHandler}
      />
      <label htmlFor="even">Even</label>
      <input
        type="radio"
        name="evenOrOdd"
        id="odd"
        value="odd"
        onChange={radioChangeHandler}
      />
      <label htmlFor="odd">Odd</label>
      <ul>
        {filteredNumbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>

      <h2>Names filtering</h2>
      <ul>
        {names.filter(name => name.includes('J')).map((filteredName, index) => (
          <li key={index}>{filteredName}</li>
        ))}
      </ul>

      <h2>Countries filtering</h2>
      <ul>
        {names.filter(country => country[0].toLowerCase() === 'a').map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </>
  );
}

export default Filter;
