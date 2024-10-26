import css from './CamperPage.module.css'
export default function CamperPage(){
    return(
        <div className={css.wrapper}>
           <div className={css.image}>
           </div>
           <div className={css.content}>
            
<div className={css.divTitle}>
    <h2 className={css.title}>Title</h2>
    <p className={css.price}>Price</p>
    <button className={css.like} type='button'> <svg width="26" height="24">
                <use href="./images/symbol-defs.svg#icon-like"></use>
              </svg></button>
</div>
<div className={css.reviewsLocation}>
<button className={css.like} type='button'> <svg width="16" height="16">
                <use href="../../images/symbol-defs.svg#icon-Rating"></use>
              </svg></button>
    <p className={css.reviews}>Reviews</p>
    <p className={css.location}>Location</p>
</div>
<div>
    <p className={css.shortSummary}>Embrace simplicity and freedom with the Mavericks panel truck...
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