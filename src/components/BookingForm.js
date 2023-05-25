import {useState} from 'react';

const GuestsErrorMessage = () => { 
    return ( 
      <p id='FieldError' className="FieldError">Number of guests should be from 1 to 10</p> 
    ); 
   }; 

function BookingForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date: date,
            time: time,
            guests: guests.value,
            occasion: occasion
        }
        console.log(formData);

        props.submitForm(formData);
    };

    const [date, setDate] = useState((new Date()).toISOString().slice(0, 10));
    const [time, setTime] = useState(props.availableTimes[0]);
    const [guests, setGuests] = useState({ 
        value: 0, 
        isTouched: false, 
      });
    const [occasion, setOccasion] = useState("Birthday");

    const [finalTimes, setFinalTime] = useState(props.availableTimes);

    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);

        setFinalTime(props.availableTimes);
    }

    function isFormValid(){
        return (guests.value > 0 && guests.value < 11)
            && (date !== '')
            && (time !== '')
            && (occasion === 'Birthday' || occasion === 'Anniversary');
    }

    return (
        <form className='booking-form' onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" aria-label="Choose Date"
            value={date}
            required
            onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" aria-label="Choose Time"
            value={time}
            required
            onChange={e => setTime(e.target.value)}>
                {finalTimes.map((times) => <option key={times}>{times}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" aria-label="Number of guests"
            placeholder="1" min="1" max="10"
            value={guests.value}
            required
            onChange={e => setGuests({...guests, value: e.target.value})} 
            onBlur={() => { setGuests({ ...guests, isTouched: true }); }} />
            {guests.isTouched && (guests.value < 1 || guests.value > 10) ? ( 
            <GuestsErrorMessage /> 
            ) : null}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" aria-label="Occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" id='submit'  aria-label="Make Your reservation"
            className='yellow-button' 
            disabled={!isFormValid()}>
                Make Your reservation
            </button>
        </form>
    );
  }

  export default BookingForm;