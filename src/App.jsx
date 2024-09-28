import './App.css'
import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));


function App() {

  return (
    <>
       <Layout>
          <Routes>
          <Route path="/" element={<HomePage />} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
        {/* <Route path="/camper/:id" element={<CamperPage />} /> */}

       </Routes>
       </Layout>
    </>
  )
}

export default App
