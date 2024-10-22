import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "../Loader/Loader";
import Layout from '../Layout/Layout'
import CatalogPage from "../../pages/Catalog/CatalogPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
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
            path="/campers"
            element={<CatalogPage />} 
          />
        <Route path="/campers/:id" element={<CamperPage />} />
            </Routes>
          </Suspense>
        </Layout>
      );
}