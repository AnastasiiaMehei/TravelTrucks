import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchCampers } from "../../redux/campers/operations";
// import { selectError, selectIsLoading } from "../../redux/campers/selectors";
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}