// This component is functional based, a dumb component, stateless
import React from 'react';

const person = props => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I have {props.age} years old! </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default person;