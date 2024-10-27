// import { useDispatch, useSelector } from "react-redux";
// import CampersList from "../../components/CamperList/CampersList";
// import { useEffect } from "react";
// import { fetchCampers } from "../../redux/campers/operations";

import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

import css from './CamperPage.module.css'
export default function CamperPage(){
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.currentCamper);
  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [dispatch, camperId]);

  if (!camper) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <CamperDetails camper={camper} />
    </div>
  );
}
