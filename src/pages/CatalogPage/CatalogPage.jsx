import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Location from '../../components/Location/Location.jsx'
import VehicleType from '../../components/VehicleType/VehicleType.jsx'
import { fetchCampers } from '../../redux/campers/operations.js'
import { selectFilterLocation } from '../../redux/filters/selectors';

// import CamperPage from '../CamperPage/CamperPage.jsx'
import CampersList from '../../components/CamperList/CampersList.jsx'
import css from './CatalogPage.module.css' 
export default function CatalogPage () {
    const dispatch = useDispatch();
    const campers = useSelector(state => state.campers.items);
    const filterLocation = useSelector(selectFilterLocation);


    useEffect(() => {
        dispatch(fetchCampers());
      }, [dispatch]);
      const filteredCampers = campers.filter(camper => 
        filterLocation === '' || camper.location.toLowerCase().includes(filterLocation.toLowerCase())
      );
return(
    <div className={css.wrapper}>
    <div className={css.sidebar}>
    <Location />
     <p className={css.filters}>Filters</p>

     <VehicleType />
    </div>
    <div className={css.camper}>
    <CampersList campers={filteredCampers} />

        {/* <CamperPage/> */}
    </div>
    </div>
)
};