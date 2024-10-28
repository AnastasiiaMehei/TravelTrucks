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
import CardDescription from "../../components/CardDescription/CardDescription";
export default function CamperPage(){
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.currentCamper);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (camperId) { 
      dispatch(fetchCamperById(camperId))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    }
  }, [dispatch, camperId]);;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }


  return (
    <div className={css.container}>
      <CardDescription camper={camper} />
    </div>
  );
}
