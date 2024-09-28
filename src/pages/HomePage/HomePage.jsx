import AppBar from "../../components/AppBar/AppBar";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.div}>
     <img src="../../images/background.png" alt="background" />
     <h1>Campers of your dreams</h1>
     <p>You can find everything you want in our catalog</p>
     <button>View Now</button>
    </div>
  );
}
