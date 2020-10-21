import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import Card from '../Card/Card.js';
import { getAllReservations } from '../apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = async () => {
    await getAllReservations()
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
          <Card />
        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
