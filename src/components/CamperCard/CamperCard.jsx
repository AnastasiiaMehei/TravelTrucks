import css from './CamperCard.module.css'
export  default function CamperCard ({camper}) {
    const  {name, price, rating, location, description}  = camper;
    return(
        <div className={css.wrapper}>
            <div className={css.imageContainer}>
              {camper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image.thumb}
                  alt={`Camper ${camper.name} image ${index + 1}`}
                  className={css.image}
                />
              ))}
            </div>
           <div className={css.content}>
            
<div className={css.divTitle}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.price}>{price}</p>
    <button className={css.like} type='button'> <svg width="26" height="24">
                <use href="./images/symbol-defs.svg#icon-like"></use>
              </svg></button>
</div>
<div className={css.reviewsLocation}>
<button className={css.like} type='button'> <svg width="16" height="16">
                <use href="../../images/symbol-defs.svg#icon-Rating"></use>
              </svg></button>
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