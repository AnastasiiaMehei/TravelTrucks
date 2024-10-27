// import { useDispatch } from 'react-redux';
import css from './CamperCard.module.css'
import { CiHeart } from "react-icons/ci";
import { RxStarFilled } from "react-icons/rx";
import { FaRegMap } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";



export  default function CamperCard ({camper}) {
    const  {name, rating,  price, location, description, gallery, reviews }  = camper;
    const reviewCount = reviews.length;
    const averageRating = reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) / reviewCount || 0;

    return(
        <div className={css.wrapper}>
            <div className={css.imageContainer}>
            <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
                        </div>
           <div className={css.content}>
            
<div className={css.divTitle}>
    <h2 className={css.title}>{name}</h2>
    <div className={css.priceHeart}>
    <p className={css.price}><FaEuroSign />
    {price}</p>
    <button className={css.heartButton} type='button'>    <CiHeart className={css.heart} />
    </button>
    </div>
</div>
<div className={css.reviewsLocation}>

    <p className={css.reviews}>
    <RxStarFilled className={css.star} />

    {/* {rating}({}Reviews) */}
    {averageRating.toFixed(1)} ({reviewCount} reviews)

    </p>
    <p className={css.location}><FaRegMap />
    {location}</p>
</div>
<div className={css.shortSummaryContainer}>
          <p className={css.shortSummary}>{description}</p>
        </div>
<div className={css.links}>
    <a href=""></a>
</div>
<button className={css.showMore}  type='button'>
Show more
</button>
           </div>

        </div>
    );
}