import sprite from '../../images/icons-sprite.svg'
import css from './VehicleType.module.css'
export default function VehicleType() {
    return (
      <div className={css.wrapper}>
        <div  >
            <p className={css.title}>Vehicle equipment</p>
            <svg className={css.divider} >
                <use xlinkHref={`${sprite}#icon-divider`} ></use>
              </svg>
            <div className={css.vehicleEquipment}>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-AC`} ></use>
              </svg>
              <p className={css.paragraph}>AC</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Automatic`} ></use>
              </svg>
              <p className={css.paragraph}>Automatic</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Kitchen`} ></use>
              </svg>
              <p className={css.paragraph}>Kitchen</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Bathroom`} ></use>
              </svg>
              <p className={css.paragraph}>Bathroom</p>
           </div> 
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-TV`} ></use>
              </svg>
              <p className={css.paragraph}>TV</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Radio`} ></use>
              </svg>
              <p className={css.paragraph}>Radio</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Kitchen`} ></use>
              </svg>
              <p className={css.paragraph}>Kitchen</p>
           </div>
          
            </div>
        </div>
        <div >
            <p className={css.title}>Vehicle type</p>
            <svg className={css.divider}>
                <use xlinkHref={`${sprite}#icon-divider`} ></use>
              </svg>
            <div className={css.icons}>
            <div className={css.iconDiv} >
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Van`} ></use>
              </svg>
              <p className={css.paragraph}>Van</p>
           </div>
           <div className={`${css.iconDiv} ${css.fully}`}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Fully-Integrated`} ></use>
              </svg>
              <p className={css.paragraph} >Fully Integrated</p>
           </div>
           <div className={css.iconDiv}>
           <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-Alcove`} ></use>
              </svg>
              <p className={css.paragraph}>Alcove</p>
           </div>
            </div>
            <button className={css.button} type='button'>Search</button>
        </div>

      </div>
       
    );

}