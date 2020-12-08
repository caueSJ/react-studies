import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Albert', age: 20 },
      { name: 'Brayan', age: 22 },
      { name: 'Charee', age: 24 }
    ],
    otherState: 'Other value here!'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Brayanão', age: 23 },
        { name: 'Chareezuda', age: 25 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Albert ', age: 21 },
        { name: event.target.value, age: 23 },
        { name: 'Chareezuda', age: 25 }
      ]
    });
  }

  render() {
    // Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={style} // Inline style
          onClick={() => this.switchNameHandler.bind('Novo nome')}>
          Switch Names
      </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Novo nominho')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
