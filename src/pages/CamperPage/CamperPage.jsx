// import { useDispatch, useSelector } from "react-redux";
// import CampersList from "../../components/CamperList/CampersList";
// import { useEffect } from "react";
// import { fetchCampers } from "../../redux/campers/operations";

import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import CamperDetails from "../../components/CamperDetails/CamperDetails";

import css from './CamperPage.module.css'
import { selectCamperById } from '../../redux/campers/selectors';

import CardDescription from "../../components/CardDescription/CardDescription";
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

    </div>
  );
}
