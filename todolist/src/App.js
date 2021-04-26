import React from 'react';
import './App.css';
import Form from './components/Form';

const  App = () => {

  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aquí va la todolist
        </p>
        <Form/>
      </div>
    </div>
  );
}

export default App;