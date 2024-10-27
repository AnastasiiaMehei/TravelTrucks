// import { useDispatch } from 'react-redux';
import css from './CamperCard.module.css'
export  default function CamperCard ({camper}) {
    const  {name, rating,  price, location, description, gallery}  = camper;
    // const dispatch = useDispatch();
    return(
        <div className={css.wrapper}>
            <div className={css.imageContainer}>
            <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
                        </div>
           <div className={css.content}>
            
<div className={css.divTitle}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.price}>{price}</p>

</div>
<div className={css.reviewsLocation}>

    <p className={css.reviews}>{rating}</p>
    <p className={css.location}>{location}</p>
</div>
<div>
    <p className={css.shortSummary}>{description}
    </p>
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