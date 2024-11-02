import { useDispatch, useSelector } from "react-redux";
import { setFilterForm, toggleFeature } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import sprite from "../../images/icons-sprite.svg";
import css from "./VehicleType.module.css";
export default function VehicleType() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleFormChange = (form) => {
    dispatch(setFilterForm(form));
  };

  const handleFeatureToggle = (feature) => {
    dispatch(toggleFeature(feature));
  };

  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.title}>Vehicle equipment</p>
        <svg className={css.divider}>
          <use xlinkHref={`${sprite}#icon-divider`}></use>
        </svg>
        <div className={css.vehicleEquipment}>
          <button
            className={filters.features.includes("AC") ? css.active : ""}
            onClick={() => handleFeatureToggle("AC")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-AC`}></use>
            </svg>
            <p className={css.paragraph}>AC</p>
          </button>
          <button className={css.iconDiv}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Automatic`}></use>
            </svg>
            <p className={css.paragraph}>Automatic</p>
          </button>
          <button
            className={filters.features.includes("Kitchen") ? css.active : ""}
            onClick={() => handleFeatureToggle("Kitchen")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <p className={css.paragraph}>Kitchen</p>
          </button>
          <button className={css.iconDiv}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Bathroom`}></use>
            </svg>
            <p className={css.paragraph}>Bathroom</p>
          </button>
          <button className={css.iconDiv}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-TV`}></use>
            </svg>
            <p className={css.paragraph}>TV</p>
          </button>
          <button className={css.iconDiv}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Radio`}></use>
            </svg>
            <p className={css.paragraph}>Radio</p>
          </button>
          <button className={css.iconDiv}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <p className={css.paragraph}>Kitchen</p>
          </button>
        </div>
      </div>
      <div>
        <p className={css.title}>Vehicle type</p>
        <svg className={css.divider}>
          <use xlinkHref={`${sprite}#icon-divider`}></use>
        </svg>
        <div className={css.icons}>
          <button
            onClick={() => handleFormChange("Van")}
            className={filters.features.includes("Van") ? css.active : ""}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Van`}></use>
            </svg>
            <p className={css.paragraph}>Van</p>
          </button>
          <button
            className={`${css.iconDiv} ${css.fully}`}
            onClick={() => handleFormChange("Fully Integrated")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Fully-Integrated`}></use>
            </svg>
            <p className={css.paragraph}>Fully Integrated</p>
          </button>
          <button
            className={filters.features.includes("Alcove") ? css.active : ""}
            onClick={() => handleFormChange("Alcove")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Alcove`}></use>
            </svg>
            <p className={css.paragraph}>Alcove</p>
          </button>
        </div>
        <button className={css.button} type="button">
          Search
        </button>
      </div>
    </div>
  );
}
