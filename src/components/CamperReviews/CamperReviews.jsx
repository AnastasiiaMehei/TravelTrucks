import css from './CamperReviews.module.css'
export default function CamperReviews({camper}){
    if (!camper || !camper.reviews || camper.reviews.length === 0) {
        return null; // или возвращаем заглушку
      }    
      const { reviews } = camper;

      return (
        <div className={css.wrapper}>
          {reviews.map((review, index) => (
            <div key={index} className={css.review}>
              <div className={css.avatarNameRating}>
              <div className={css.avatarDiv}>
                <p className={css.avatarParagraph}>{review.reviewer_name && review.reviewer_name.slice(0, 1)}</p>
              </div>
              <div className={css.reviewContent}>
                
                <p className={css.reviewerName}>{review.reviewer_name}</p>
              </div>
              
              </div>
              <div>            <p className={css.comment}>{review.comment}</p>
              </div>
              <div>

              </div>
            </div>

          ))}
        </div>
      );
    }
    