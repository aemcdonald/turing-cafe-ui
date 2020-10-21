import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import Card from '../Card/Card.js';
import { getAllReservations } from '../apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    await getAllReservations()
    .then(data => this.setState({ reservations: data }))
    .catch(error => alert(error.message))
  }

  displayReservations = () => {
    if (this.state.reservations.length > 0) {
      return this.state.reservations.map(reservation => {
        return <Card reservation={reservation} />
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          {this.displayReservations()}

        </div>
      </div>
    )
  }
}

export default App;
