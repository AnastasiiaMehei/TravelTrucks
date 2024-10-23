import Location from '../../components/Location/Location'
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.JSX'
import VehicleType from '../../components/VehicleType/VehicleType.jsx'
import CamperPage from '../CamperPage/CamperPage.jsx'

import css from './CatalogPage.module.css' 
export default function CatalogPage () {
return(
    <div className={css.wrapper}>
    <div className={css.sidebar}>
    <Location />
     <p className={css.filters}>Filters</p>
     <VehicleEquipment/>
     <VehicleType />
    </div>
    <div className={css.camper}>
        <CamperPage/>
    </div>
    </div>
)
};