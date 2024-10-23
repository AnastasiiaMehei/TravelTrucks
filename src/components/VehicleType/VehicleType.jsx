import css from './VehicleType.module.css'
export default function VehicleType() {
    return (
        <div className={css.wrapper}>
            <p className={css.title}>Vehicle type</p>
            <div className={css.icons}>
            <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Van'></use>
  </svg> 
  <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Fully-Integrated'></use>
  </svg> 
  <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Alcove'></use>
  </svg>
            </div>
            <button className={css.button} type='button'>Search</button>
        </div>
    );

}