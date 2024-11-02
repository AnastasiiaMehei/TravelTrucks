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
  const setEngineFilter = (engine) => {
    ((prevFilters) => ({
      ...prevFilters,
      engine: prevFilters.engine === engine ? '' : engine, 
    }));
  };
  const setTransmissionFilter = (transmission) => {
    dispatch((prevFilters) => ({
      ...prevFilters,
      transmission: prevFilters.transmission === transmission ? '' : transmission, 
    }));
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
          <button className={`${css.iconDiv} ${filters.features.includes("automatic") ? css.active : ""}`}
            onClick={() => setTransmissionFilter('automatic')}
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
            className={`${css.iconDiv} ${filters.features.includes("panelTruck") ? css.active : ""}`}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Van`}></use>
            </svg>
            <p className={css.paragraph}>Van</p>
          </button>
          <button
            className={`${css.iconDiv} ${filters.features.includes("fullyIntegrated") ? css.active : ""}`}
            onClick={() => handleFormChange("fullyIntegrated")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Fully-Integrated`}></use>
            </svg>
            <p className={css.paragraph}>Fully Integrated</p>
          </button>
          <button
            className={`${css.iconDiv} {filters.features.includes("alcove") ? css.active : ""}`}
            onClick={() => handleFormChange("alcove")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Alcove`}></use>
            </svg>
            <p className={css.paragraph}>Alcove</p>
          </button>
        </div>
        <p>Engine type</p>
        <button
            className={`${css.iconDiv} ${filters.features.includes("alcove") ? css.active : ""}`}
            onClick={() => handleFormChange("alcove")}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Petrol`}></use>
            </svg>
            <p className={css.paragraph}>Diesel</p>
          </button>
          <button
             className={`${css.iconDiv} ${filters.engine === 'diesel' ? css.active : ''} `}
            
             onClick={() => setEngineFilter('diesel')}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-Petrol`}></use>
            </svg>
            <p className={css.paragraph}>Petrol</p>
          </button>
        <button className={css.button} type="button">
          Search
        </button>
      </div>
    </div>
  );
}
