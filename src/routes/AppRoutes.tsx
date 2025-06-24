import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import MainLayout from "../layouts/main";

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  </Routes>
);

export default AppRoutes;
