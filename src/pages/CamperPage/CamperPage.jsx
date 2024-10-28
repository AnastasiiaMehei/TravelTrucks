import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink, useParams } from "react-router-dom";
import sprite from '../../images/icons-sprite.svg'

import css from './CamperPage.module.css'
import { selectCamperById } from '../../redux/campers/selectors';

import CardDescription from "../../components/CardDescription/CardDescription";
import BookingForm from "../../components/BookingForm/BookingForm";
export default function CamperPage(){
  const { camperId } = useParams();

  const camper = useSelector(selectCamperById);
  const dispatch = useDispatch();
  const [isDataLoading, setIsDataLoading] = useState(true);


  useEffect(() => {
    try {
      dispatch(fetchCamperById(camperId));
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsDataLoading(false);
    }
  }, [dispatch, camperId]);


  return (
    <div className={css.container}>
      {isDataLoading ? ( <div>Loading...</div>
      ) : (<CardDescription camper={camper} />)}
<svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-links-divider`} ></use>
              </svg>
              <div className={css.addingInfo}>
              <div className={css.navLinks}>
<NavLink to="features" className={css.links}>
Features
        </NavLink>
        <NavLink to="reviews" className={css.links}>
        Reviews
        </NavLink>
</div>
<BookingForm />
              </div>
    </div>
  );
}
