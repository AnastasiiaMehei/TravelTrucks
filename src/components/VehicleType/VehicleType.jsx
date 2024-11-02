import { useDispatch, useSelector } from "react-redux";
import { setFilterForm, toggleFeature, setTransmission, setEngine  } from "../../redux/filters/slice";import { selectFilters } from "../../redux/filters/selectors";
import { fetchCampers } from '../../redux/campers/operations';

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
  
  const handleEngineChange = (engine) => {
    dispatch(setEngine(engine));
  };
  // const setEngineFilter = (engine) => {
  //   ((prevFilters) => ({
  //     ...prevFilters,
  //     engine: prevFilters.engine === engine ? '' : engine, 
  //   }));
  // };
  const handleTransmissionChange = (transmission) => {
    dispatch(setTransmission(transmission));
  };
  const handleSearch = () => {
    // Виконуємо запит на бекенд з поточними фільтрами
    dispatch(fetchCampers(filters));
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
            className={`${css.iconDiv} ${filters.features.includes("AC") ? css.active : ""}`}
            onClick={() => handleFeatureToggle("AC")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-AC`}></use>
            </svg>
            <p className={css.paragraph}>AC</p>
          </button>
          <button className={`${css.iconDiv} ${filters.transmission === "automatic" ? css.active : ""}`}
            onClick={() => handleTransmissionChange('automatic')}
>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Automatic`}></use>
            </svg>
            <p className={css.paragraph}>Automatic</p>
          </button>
          <button
            className={`${css.iconDiv} ${filters.features.includes("kitchen") ? css.active : ""}`}
            onClick={() => handleFeatureToggle("kitchen")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <p className={css.paragraph}>Kitchen</p>
          </button>
          <button className={`${css.iconDiv} ${filters.features.includes("bathroom") ? css.active : ""}`}
            onClick={() => handleFeatureToggle("bathroom")}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Bathroom`}></use>
            </svg>
            <p className={css.paragraph}>Bathroom</p>
          </button>
          <button className={`${css.iconDiv} ${filters.features.includes("TV") ? css.active : ""}`}
            onClick={() => handleFeatureToggle("TV")}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-TV`}></use>
            </svg>
            <p className={css.paragraph}>TV</p>
          </button>
          <button className={`${css.iconDiv} ${filters.features.includes("radio") ? css.active : ""}`}
            onClick={() => handleFeatureToggle("radio")}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Radio`}></use>
            </svg>
            <p className={css.paragraph}>Radio</p>
          </button>
          {/* <button className={filters.features.includes("Kitchen") ? css.active : ""}
            onClick={() => handleFeatureToggle("Kitchen")}>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Kitchen`}></use>
            </svg>
            <p className={css.paragraph}>Kitchen</p>
          </button> */}
        </div>
      </div>
      <div>
        <p className={css.title}>Vehicle type</p>
        <svg className={css.divider}>
          <use xlinkHref={`${sprite}#icon-divider`}></use>
        </svg>
        <div className={css.icons}>
          <button
            onClick={() => handleFormChange("panelTruck")}
            className={`${css.iconDiv} ${filters.form.includes("panelTruck") ? css.active : ""}`}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Van`}></use>
            </svg>
            <p className={css.paragraph}>Van</p>
          </button>
          <button
            className={`${css.iconDiv} ${filters.form.includes("fullyIntegrated") ? css.active : ""}`}
            onClick={() => handleFormChange("fullyIntegrated")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Fully-Integrated`}></use>
            </svg>
            <p className={css.paragraph}>Fully Integrated</p>
          </button>
          <button
            className={`${css.iconDiv} ${filters.form.includes("alcove") ? css.active : ""}`}
            onClick={() => handleFormChange("alcove")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Alcove`}></use>
            </svg>
            <p className={css.paragraph}>Alcove</p>
          </button>
        </div>
        <p className={css.title}>Engine type</p>
        <svg className={css.divider}>
          <use xlinkHref={`${sprite}#icon-divider`}></use>
        </svg>
        <div className={css.petrolDieselDiv}>
        <button
            className={`${css.iconDiv} ${filters.engine.includes("diesel") ? css.active : ""}`}
            onClick={() => handleEngineChange("diesel")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Petrol`}></use>
            </svg>
            <p className={css.paragraph}>Diesel</p>
          </button>
          <button
            className={`${css.iconDiv} ${filters.engine.includes("petrol") ? css.active : ""}`}
            onClick={() => handleEngineChange("petrol")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Petrol`}></use>
            </svg>
            <p className={css.paragraph}>Petrol</p>
          </button>

                </div>
        <button className={css.button} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
