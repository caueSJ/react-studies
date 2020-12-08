import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Albert', age: 20 },
      { name: 'Brayan', age: 22 },
      { name: 'Charee', age: 24 }
    ]
  });

  const [otherState, setOtherState] = useState('Other value here!');

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Brayanão', age: 23 },
        { name: 'Chareezuda', age: 25 }
      ]
    });
  } 

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={() => this.switchNameHandler() }>
        Switch Names
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Nominado')} />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
