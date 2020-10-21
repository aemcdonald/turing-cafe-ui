import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('Should allow a user to fill out the inputs', () => {
    const mockResFunction = jest.fn();
    render(<Form handleReservation={mockResFunction}/>);

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/d)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');
    const button = screen.getByText('Make Reservation');

    fireEvent.change(nameInput, {target: {value: 'Ashley'}});
    fireEvent.change(dateInput, {target: {value: '10/1'}});
    fireEvent.change(timeInput, {target: {value: '11:00'}});
    fireEvent.change(numberInput, {target: {value: '4'}});
    fireEvent.click(button);

    expect(nameInput.value).toBe('Ashley');
    expect(dateInput.value).toBe('10/1');
    expect(timeInput.value).toBe('11:00');
    expect(numberInput.value).toBe('4');
    expect(mockResFunction).toHaveBeenCalledTimes(1);
  });
});
