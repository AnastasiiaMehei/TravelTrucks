import { RxStarFilled } from "react-icons/rx";
import { FaRegMap } from "react-icons/fa";
import css from './CardDescription.module.css'
export default function CardDescription ({camper}) {
    const {name, gallery, reviews, location, description} = camper;
    const reviewCount = reviews.length;
    const averageRating = reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) / reviewCount || 0;

    return(
        <div>
            <p className={css.hello}>hello</p>
                <h2 className={css.title}>{name}</h2>
               <div className={css.images}>
               <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
                <img src={gallery[1].thumb} alt="Camper's photo" className={css.img} />
                <img src={gallery[2].thumb} alt="Camper's photo" className={css.img} />
                <img src={gallery[3].thumb} alt="Camper's photo" className={css.img} />
               </div>

                <div className={css.reviewsLocation}>

<p className={css.reviews}>
<RxStarFilled className={css.star} />

{averageRating.toFixed(1)} ({reviewCount} reviews)

</p>
<p className={css.location}><FaRegMap />
{location}</p>
</div>
<p className={css.shortSummary}>{description}</p>

        </div>
    )
}