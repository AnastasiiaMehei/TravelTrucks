import { NavLink } from "react-router-dom";

export default function Navigation (){
    <nav>
         <NavLink className={css.link} to="/">
         Home
         </NavLink>
         <NavLink className={css.link} to="/catalog">
         CatalogPage
        </NavLink>
    </nav>
};