import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should create a new reservation with the correct information', () => {
    render(<App />)

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/d)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');
    const button = screen.getByText('Make Reservation');

    fireEvent.change(nameInput, {target: {value: 'Buffalo Bill'}});
    fireEvent.change(dateInput, {target: {value: '10/31'}});
    fireEvent.change(timeInput, {target: {value: '5:00'}});
    fireEvent.change(numberInput, {target: {value: '10'}});
    fireEvent.click(button);

    expect(screen.getByText('Name: Buffalo Bill')).toBeInTheDocument();
    expect(screen.getByText('Date: 10/31')).toBeInTheDocument();
    expect(screen.getByText('Time: 5:00')).toBeInTheDocument();
    expect(screen.getByText('Number of guests: 10')).toBeInTheDocument();
  });
});
