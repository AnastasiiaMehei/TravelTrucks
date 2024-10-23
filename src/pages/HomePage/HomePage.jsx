import css from './HomePage.module.css'
export default function HomePage() {
    return (
      <div className={css.wrapper} >
        <p className={css.title}>Campers of your dreams</p>
        <p className={css.paragraph}>You can find everything you want in our catalog</p>
        <button className={css.button} type="button">View Now</button>
      </div>
    );
  }