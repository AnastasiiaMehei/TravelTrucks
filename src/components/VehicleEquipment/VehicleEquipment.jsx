import sprite from '../../images/icons-sprite.svg'
import css from './VehicleEquipment.module.css'
export default function VehicleEquipment () {
    return(
        <div className={css.wrapper}>
            <p className={css.title}>Vehicle equipment</p>
            <div className={css.icons}>
            <svg className="icon">
                <use xlinkHref={`${sprite}#icon-AC`} ></use>
              </svg>
  <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Automatic'></use>
  </svg> 
  <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Kitchen'></use>
  </svg> 
  <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-Bathroom'></use>
  </svg> <svg className={css.icon}>
    <use href='../../images/symbol-defs.svg#icon-TV'></use>
  </svg> 
            </div>
        </div>
    );
}