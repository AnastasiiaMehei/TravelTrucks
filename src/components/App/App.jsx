import {Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout'
import CatalogPage from "../../pages/Catalog/CatalogPage";
import HomePage from '../../pages/HomePage/HomePage'
export default function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Layout>
  );
};