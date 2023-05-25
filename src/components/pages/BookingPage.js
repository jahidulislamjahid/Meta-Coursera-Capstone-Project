import BookingForm from '../BookingForm';

function BookingPage(props) {
    return (
        <>
        <div className='booking-section'>
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes} submitForm={props.submitForm} />
        </div>
        </>
    );
  }

  export default BookingPage;