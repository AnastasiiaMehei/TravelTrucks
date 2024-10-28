import css from './Features.module.css'
import sprite from '../../images/icons-sprite.svg'

export default function Features ({camper}) {
    const  { transmission, engine, kitchen, AC }  = camper;

    return (
        <div className={css.wrapper}>
<div className={css.container}>
<div className={css.additionInformation}>
    <div className={css.cards}>

{transmission === "automatic" && (
            <div className={css.contentInfo}>
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-Automatic`} ></use>
              </svg>
              <p className={css.paragraph}>Automatic</p>
            </div>
          )}
          {engine === "petrol" && (
            <div className={css.contentInfo}>
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-Petrol`} ></use>
              </svg>
              <p className={css.paragraph}>Petrol</p>
            </div>
          )}

 {kitchen && (
            <div className={css.contentInfo}>
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-Kitchen`} ></use>
              </svg>
              <p className={css.paragraph}>Kitchen</p>
            </div>
          )}
           {AC && (
            <div className={css.contentInfoAc}>
              <svg className="icon">
                <use xlinkHref={`${sprite}#icon-AC`} ></use>
              </svg>
              <p className={css.paragraph}>AC</p>
            </div>
          )}
    </div>

</div>

</div>

        </div>
    );

}