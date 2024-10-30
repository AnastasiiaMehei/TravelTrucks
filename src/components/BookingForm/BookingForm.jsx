import { useState } from 'react';
import css from './BookingForm.module.css'
import CalendarForm from '../CalendarForm/CalendarForm';

export default function BookingForm (){
    const [showCalendar, setShowCalendar] = useState(false);

  const handleDateInputClick = () => {
    setShowCalendar(!showCalendar);
  };
    return(
        <div className={css.wrapper}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>
        <form className={css.form} action="">
            <input className={css.input} type="text" placeholder='Name*' />
            <input className={css.input} type="text" placeholder='Email*' />
            <div className={css.dateInputContainer}>
          <input
            className={css.input}
            type="text"
            placeholder='Booking date*'
            onClick={handleDateInputClick}
          />
          {showCalendar && <CalendarForm />}
        </div>            <input  className={css.inputComment} type="text" placeholder='Comment' />


        </form>
        <button className={css.button}>Send</button>
        </div>
    ); 

}