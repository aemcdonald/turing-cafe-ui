import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('Should render a reservation card with the correct information', () => {
    const fakeReservation = {
      id: 1,
      name: 'Ashley',
      date: '10/21',
      time: '10:00',
      number: 2
    }
    render(
      <Card
        reservation={fakeReservation}
      />);

  expect(screen.getByText('Name: Ashley')).toBeInTheDocument();
  expect(screen.getByText('Date: 10/21')).toBeInTheDocument();
  expect(screen.getByText('Time: 10:00')).toBeInTheDocument();
  expect(screen.getByText('Number of guests: 2')).toBeInTheDocument();
  })
})
