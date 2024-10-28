import css from './BookingForm.module.css'
export default function BookingForm (){
    return(
        <div className={css.wrapper}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>
        <form className={css.form} action="">
            <input className={css.input} type="text" placeholder='Name*' />
            <input className={css.input} type="text" placeholder='Email*' />
            <input  className={css.input} type="text" placeholder='Booking date*' />
            <input  className={css.inputComment} type="text" placeholder='Comment' />


        </form>
        <button className={css.button}>Send</button>
        </div>
    ); 

}