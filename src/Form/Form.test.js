import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('Should render a reservation form', () => {
    const mockFunction = jest.fn()
    render(<Form handleReservation={mockFunction}/>)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/d)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Make Reservation')).toBeInTheDocument();
  })
})
