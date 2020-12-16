import React from 'react';
import './App.css';
import Container from './Container/abc';
import { Filler } from './Filler';

const App = () => {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="App">
      <Filler />
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      <button>Hello</button>
      
    </div>
  );
};

export default App;
