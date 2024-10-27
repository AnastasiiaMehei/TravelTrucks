import { useDispatch, useSelector } from 'react-redux'
import Location from '../../components/Location/Location.jsx'
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.JSX'
import VehicleType from '../../components/VehicleType/VehicleType.jsx'
import { fetchCampers } from '../../redux/campers/operations.js'
import CamperPage from '../CamperPage/CamperPage.jsx'

import css from './CatalogPage.module.css' 
import CampersList from '../../components/CamperList/CampersList.jsx'
import { useEffect } from 'react'
export default function CatalogPage () {
    const dispatch = useDispatch();
    const campers = useSelector(state => state.campers.items);

    useEffect(() => {
        dispatch(fetchCampers());
      }, [dispatch]);
return(
    <div className={css.wrapper}>
    <div className={css.sidebar}>
    <Location />
     <p className={css.filters}>Filters</p>
     <VehicleEquipment/>
     <VehicleType />
    </div>
    <div className={css.camper}>
    <CampersList campers={campers} />

        <CamperPage/>
        <button className={css.button} type='button'>Load more</button>
    </div>
    </div>
)
};