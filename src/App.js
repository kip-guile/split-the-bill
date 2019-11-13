import React from 'react';
import './App.css';
import Counter from './components/Counter';
import RegistrationForm from '../src/Register/register'

function App() {
  return (
    <div className="App">
      <Counter/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
