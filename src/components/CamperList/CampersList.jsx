// import css from "../CampersList/CampersList";

import CamperCard from "../CamperCard/CamperCard";

export default function CampersList({ campers }) {
    if (!Array.isArray(campers)) {
        return <div>Loading...</div>;
      }
      return (
        <div>
      {campers.slice(0, 5).map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
      );
    }