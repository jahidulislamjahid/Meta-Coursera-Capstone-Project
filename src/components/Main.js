import {Routes, Route} from 'react-router-dom';
import {useReducer} from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import {initializeTimes, updateTimesFunc, submitForm} from '../mainAPI';

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimesFunc, initializeTimes());

    return (
        <main>
            <Routes>
                <Route path="/" element= {
                    <HomePage />
                } />

                <Route path="/about" element={
                    <AboutPage />
                } />

                <Route path="/booking" element={
                    <BookingPage availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
                } />

                <Route path="/confirmation" element={
                    <ConfirmationPage />
                } />
            </Routes>
        </main>
    );
  }

  export default Main;