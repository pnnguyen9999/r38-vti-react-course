import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import ProductDetail from "../pages/ProductDetail";

const router = <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/product-detail/:id" element={<ProductDetail />} />
</Routes>;

export default router;