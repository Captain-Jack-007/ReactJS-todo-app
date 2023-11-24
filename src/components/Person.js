import React from 'react';
import MyComponent from './MyComponents';
import Persons from '../data/person';

function Person() {
  return (
    <div className="cards">
      {Persons.map((text) => (
        <MyComponent buttonName={text.first_name} key={text.id} {...text} />
      ))}
    </div>
  );
}

export default Person;
