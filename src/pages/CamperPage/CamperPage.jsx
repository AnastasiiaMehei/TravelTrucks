import { useEffect, useState } from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors";
import CardDescription from "../../components/CardDescription/CardDescription";
import Features from "../../components/Features/Features";
import CamperReviews from "../../components/CamperReviews/CamperReviews.JSX";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from './CamperPage.module.css'
export default function CamperPage() {
  const { camperId } = useParams();
  const location = useLocation();
  const camper = useSelector(selectCamperById);
  const dispatch = useDispatch();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const fetchCamper = async () => {
      try {
        await dispatch(fetchCamperById(camperId));
      } catch (error) {
        console.error('Error fetching camper:', error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchCamper();
  }, [dispatch, camperId]);

  const isReviewsPage = location.pathname.endsWith('/reviews');

  if (isDataLoading) {
    return <div>Loading camper data...</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }

  return (
    <div className={css.container}>
      <CardDescription camper={camper} />
      <div className={css.addingInfo}>
        <div className={css.navLinks}>
          <NavLink to="features" className={css.links}>
            Features
          </NavLink>
          <NavLink to="reviews" className={css.links}>
            Reviews
          </NavLink>
        </div>
        <div className={css.featuresReviewsBookingForm}>
          {!isReviewsPage && (
            <div className={css.features}>
              <Features camper={camper} />
            </div>
          )}
          {isReviewsPage && (
            <div className={css.reviews}>
              <CamperReviews camper={camper} />
            </div>
          )}
                    <BookingForm camper={camper} />

        </div>
      </div>
    </div>
  );
}