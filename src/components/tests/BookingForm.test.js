import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";
import {fetchAPI, submitAPI} from '../../bookingsAPI'

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('The BookingForm can be submitted by the user', () => {

    render(<BookingForm availableTimes={['17:00']} />);
    // save the button in a variable
    const btn = screen.getByRole('button');

    // click the btn
    fireEvent.click(btn);
})

test("Date input contains required attributes", () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const element = screen.getByLabelText('Choose date');
    expect(element).toHaveAttribute('aria-label');
})

test("Time input contains required attributes", () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const element = screen.getByLabelText('Choose time');
    expect(element).toHaveAttribute('aria-label');
})

test("Guests input contains required attributes", () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const element = screen.getByLabelText('Number of guests');
    expect(element).toHaveAttribute('aria-label');
})

test("Date input contains required attributes", () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const element = screen.getByLabelText('Occasion');
    expect(element).toHaveAttribute('aria-label');
})

test("Submit button contains required attributes", () => {
    render(<BookingForm availableTimes={['17:00']} />);
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('aria-label');
})