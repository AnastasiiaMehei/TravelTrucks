import css from './BookingForm.module.css'
export default function BookingForm (){
    return(
        <div className={css.wrapper}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>
        </div>
    ); 

}