import css from "./Features.module.css";
import sprite from "../../images/icons-sprite.svg";

export default function Features({ camper }) {
  if (!camper) {
    return null; // or return a loading indicator
  }
  const {
    transmission,
    engine,
    kitchen,
    AC,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.additionInformation}>
          <div className={css.cards}>
            {transmission === "automatic" && (
              <div className={css.contentInfo}>
                <svg className="icon">
                  <use xlinkHref={`${sprite}#icon-Automatic`}></use>
                </svg>
                <p className={css.paragraph}>Automatic</p>
              </div>
            )}
            {engine === "petrol" && (
              <div className={css.contentInfo}>
                <svg className="icon">
                  <use xlinkHref={`${sprite}#icon-Petrol`}></use>
                </svg>
                <p className={css.paragraph}>Petrol</p>
              </div>
            )}

            {kitchen && (
              <div className={css.contentInfo}>
                <svg className="icon">
                  <use xlinkHref={`${sprite}#icon-Kitchen`}></use>
                </svg>
                <p className={css.paragraph}>Kitchen</p>
              </div>
            )}
            {AC && (
              <div className={css.contentInfoAc}>
                <svg className="icon">
                  <use xlinkHref={`${sprite}#icon-AC`}></use>
                </svg>
                <p className={css.paragraph}>AC</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className={css.vehicleDetails}>Vehicle details</p>
          <svg className={css.iconDivider}>
            <use xlinkHref={`${sprite}#icon-links-divider`}></use>
          </svg>
          <div className={css.details}>
            <div className={css.detailsParagraph}>
              <p>Form</p>
              <p>{form}</p>
            </div>
            <div className={css.detailsParagraph}>
              <p>Length</p>
              <p>{length}</p>
            </div>
            <div className={css.detailsParagraph}>
              <p>Width</p>
              <p>{width}</p>
            </div>
            <div className={css.detailsParagraph}>
              <p>Height</p>
              <p>{height}</p>
            </div>
            <div className={css.detailsParagraph}>
              <p>Tank</p>
              <p>{tank}</p>
            </div>
            <div className={css.detailsParagraph}>
              <p>Consumption</p>
              <p>{consumption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
