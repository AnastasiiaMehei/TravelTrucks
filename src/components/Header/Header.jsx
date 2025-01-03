import { NavLink } from "react-router-dom";
import css from './Header.module.css'
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Header() {
    
    return (
      <div className={css.wrapper}>
      <div className={css.logo}></div>
      <nav className={css.nav}>
        <NavLink to={'/'} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={'/catalog'} className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
      </div>
    );
  }