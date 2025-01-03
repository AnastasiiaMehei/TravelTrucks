import { RxStarFilled } from "react-icons/rx";
import { FaRegMap } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

import css from "./CardDescription.module.css";
export default function CardDescription({ camper }) {
  const { name, gallery, reviews, location, price, description } = camper;
  const reviewCount = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
      reviewCount || 0;

  return (
    <div className={css.wrapper}>
    <div className={css.mainInfo}>
    <h2 className={css.title}>{name}</h2>
      <div className={css.reviewsLocation}>
        <p className={css.reviews}>
          <RxStarFilled className={css.star} />
          {averageRating.toFixed(1)} ({reviewCount} reviews)
        </p>
        <p className={css.location}>
          <FaRegMap />
          {location}
        </p>
      </div>
      <p className={css.price}><FaEuroSign />
      {price}</p>
    </div>
      <div className={css.images}>
                <div className={css.imageDiv}>
                <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />

                </div>
                <div className={css.imageDiv}>
                <img src={gallery[1].thumb} alt="Camper's photo" className={css.img} />

                </div>
<div className={css.imageDiv}>
<img src={gallery[2].thumb} alt="Camper's photo" className={css.img} />

</div>

</div>
      <p className={css.shortSummary}>{description}</p>
    </div>
  );
}
