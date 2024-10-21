import { lazy } from "react";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
export default function App() {


    return (
        <Loader />
      ) & (
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
            path="/catalog"
            element={<CatalogPage />} 
          />
        <Route path="/campers/:id" element={<CamperPage />} />
            </Routes>
          </Suspense>
        </Layout>
      );
}