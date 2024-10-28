import css from "./CampersList.module.css";

import CamperCard from "../CamperCard/CamperCard";

export default function CampersList({ campers }) {
    if (!Array.isArray(campers)) {
        return <div>Loading...</div>;
      }
      return (
        <div className={css.wrapper}>
      {campers.slice(0, 5).map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
      );
    }