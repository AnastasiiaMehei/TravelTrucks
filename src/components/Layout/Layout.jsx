// import { NavLink } from "react-router-dom";
// import css from './Layout.module.css'
import Header from "../Header/Header";

export default function Layout({ children }) {
    return (
      <div >
        <Header />
        {children}
      </div>
    );
  }
  