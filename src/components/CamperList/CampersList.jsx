import css from "./CampersList.module.css";

import CamperCard from "../CamperCard/CamperCard";
import { useState } from "react";

export default function CampersList({ campers }) {
  const [visibleCampers, setVisibleCampers] = useState(5);
  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + 5);
  };
    if (!Array.isArray(campers)) {
        return <div>Loading...</div>;
      }
      return (
        <div className={css.wrapper}>
      {campers.slice(0, visibleCampers).map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
              {visibleCampers < campers.length && (
        <button className={css.loadMoreBtn} type='button' onClick={handleLoadMore}>
          Load more
        </button>
      )}    </div>
      );
    }